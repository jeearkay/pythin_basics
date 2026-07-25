// WebAssembly Pyodide Execution Service

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<any>;
  }
}

class PyodideService {
  private pyodide: any = null;
  private isInitializing: boolean = false;
  private isReady: boolean = false;
  private initError: string | null = null;
  private stdoutBuffer: string[] = [];

  public async initialize(): Promise<boolean> {
    if (this.isReady) return true;
    if (this.isInitializing) {
      // Wait for initialization
      while (this.isInitializing) {
        await new Promise((r) => setTimeout(r, 100));
      }
      return this.isReady;
    }

    this.isInitializing = true;
    try {
      if (typeof window.loadPyodide !== 'function') {
        // Dynamically load pyodide script if missing
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Pyodide CDN'));
          document.head.appendChild(script);
        });
      }

      if (window.loadPyodide) {
        this.pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
        });

        this.pyodide.setStdout({
          batch: (msg: string) => {
            this.stdoutBuffer.push(msg);
          },
        });
        this.pyodide.setStderr({
          batch: (msg: string) => {
            this.stdoutBuffer.push(msg);
          },
        });

        this.isReady = true;
        this.initError = null;
      }
    } catch (err: any) {
      console.warn('Pyodide initialization warning:', err);
      this.initError = err?.message || 'Pyodide offline';
    } finally {
      this.isInitializing = false;
    }

    return this.isReady;
  }

  public getReadyStatus(): { isReady: boolean; error: string | null; isInitializing: boolean } {
    return {
      isReady: this.isReady,
      error: this.initError,
      isInitializing: this.isInitializing,
    };
  }

  public async runPython(
    code: string,
    testCode?: string
  ): Promise<{ success: boolean; stdout: string; error?: string }> {
    this.stdoutBuffer = [];

    const ready = await this.initialize();
    if (!ready || !this.pyodide) {
      throw new Error('Pyodide is not initialized');
    }

    try {
      await this.pyodide.runPythonAsync(code);
      const userStdout = this.stdoutBuffer.join('\n').trim();

      if (testCode) {
        await this.pyodide.runPythonAsync(testCode);
      }

      return {
        success: true,
        stdout: userStdout,
      };
    } catch (err: any) {
      const fullError = err?.message || String(err);
      const lines = fullError.split('\n').filter((l: string) => l.trim().length > 0);
      const cleanError = lines[lines.length - 1] || 'Execution error';

      return {
        success: false,
        stdout: this.stdoutBuffer.join('\n').trim(),
        error: cleanError,
      };
    }
  }
}

export const pyodideService = new PyodideService();
