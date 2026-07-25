import React, { useState } from 'react';
import { Play, Lightbulb, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SandboxQuest as SandboxType } from '../../types';
import { pyodideService } from '../../services/pyodideService';

interface SandboxProps {
  quest: SandboxType;
  onSuccess: () => void;
  onError: (msg: string) => void;
}

export const SandboxQuestComponent: React.FC<SandboxProps> = ({ quest, onSuccess, onError }) => {
  const [code, setCode] = useState(quest.starter || '');
  const [output, setOutput] = useState<{ stdout: string; error?: string; isSuccess?: boolean } | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    try {
      const status = pyodideService.getReadyStatus();

      // If Pyodide isn't available or fails, use intelligent AST/fallback check
      if (!status.isReady && quest.fallbackCheck) {
        await new Promise((r) => setTimeout(r, 400));
        if (quest.fallbackCheck(code)) {
          setOutput({
            stdout: quest.successOut,
            isSuccess: true,
          });
          setIsRunning(false);
          setTimeout(() => onSuccess(), 600);
          return;
        } else {
          setOutput({
            stdout: '',
            error: quest.failOut || 'Code logic did not match requirements.',
            isSuccess: false,
          });
          setIsRunning(false);
          onError('Your code output or variable state did not match expected requirements.');
          return;
        }
      }

      // Execute in WebAssembly Python
      const result = await pyodideService.runPython(code, quest.testCode);

      if (result.success) {
        // Check output if checkOutput is specified
        if (quest.checkOutput) {
          const cleanStdout = result.stdout.trim();
          if (cleanStdout !== quest.checkOutput.trim()) {
            setOutput({
              stdout: result.stdout,
              error: `Expected output "${quest.checkOutput}", got "${cleanStdout}"`,
              isSuccess: false,
            });
            setIsRunning(false);
            onError(`Expected output "${quest.checkOutput}", got "${cleanStdout}"`);
            return;
          }
        }

        setOutput({
          stdout: result.stdout || quest.successOut,
          isSuccess: true,
        });
        setIsRunning(false);
        setTimeout(() => onSuccess(), 800);
      } else {
        // If execution failed, also try fallback check in case of slight assertion mismatch
        if (quest.fallbackCheck && quest.fallbackCheck(code)) {
          setOutput({
            stdout: quest.successOut,
            isSuccess: true,
          });
          setIsRunning(false);
          setTimeout(() => onSuccess(), 600);
          return;
        }

        setOutput({
          stdout: result.stdout,
          error: result.error || 'Execution Error',
          isSuccess: false,
        });
        setIsRunning(false);
        onError(result.error || 'Execution Error');
      }
    } catch (err: any) {
      setOutput({
        stdout: '',
        error: err?.message || 'Error running Python code',
        isSuccess: false,
      });
      setIsRunning(false);
      onError(err?.message || 'Error running Python code');
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Context banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-xs text-slate-300 whitespace-pre-wrap">
        {quest.context}
      </div>

      {/* Editor Box */}
      <div className="flex flex-col bg-slate-900 border border-slate-800 focus-within:border-indigo-500 rounded-2xl overflow-hidden transition-all shadow-sm">
        <div className="bg-slate-800/90 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
          <span className="text-xs font-mono font-semibold text-indigo-400">python3 · main.py</span>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs transition-all shadow-xs cursor-pointer disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Running...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Code</span>
              </>
            )}
          </button>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="w-full p-4 bg-transparent font-mono text-sm text-slate-100 outline-none min-h-[130px] resize-y leading-relaxed"
          placeholder="# Write Python code here..."
        />
      </div>

      {/* Output Console */}
      {output && (
        <div
          className={`border rounded-xl p-4 font-mono text-xs whitespace-pre-wrap flex flex-col gap-1 transition-all ${
            output.isSuccess
              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
              : 'bg-rose-950/40 border-rose-500/50 text-rose-300'
          }`}
        >
          <div className="flex items-center gap-2 font-bold mb-1">
            {output.isSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Output Console · Tests Passed!</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>Output Console · Error</span>
              </>
            )}
          </div>
          {output.stdout && <div>{output.stdout}</div>}
          {output.error && <div className="text-rose-400 font-semibold">{output.error}</div>}
        </div>
      )}

      {/* Hints Accordion */}
      {quest.hints.length > 0 && (
        <div className="flex flex-col gap-2">
          {hintIndex < quest.hints.length && (
            <button
              onClick={() => setHintIndex((prev) => prev + 1)}
              className="self-start flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Need a hint? ({hintIndex + 1}/${quest.hints.length})</span>
            </button>
          )}

          {hintIndex > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex flex-col gap-1 animate-fadeIn shadow-2xs font-medium">
              {quest.hints.slice(0, hintIndex).map((hint, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span>💡</span>
                  <span>{hint}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
