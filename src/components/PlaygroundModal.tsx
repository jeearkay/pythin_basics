import React, { useState } from 'react';
import { X, Play, Loader2, Code2, Sparkles, Copy, Check } from 'lucide-react';
import { pyodideService } from '../services/pyodideService';

interface PlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STARTER_SNIPPETS = [
  {
    title: 'Hello & Formatting',
    code: `# Welcome to Python Playground!
name = "Guna"
village = "Paro"
print(f"Kuzu Zangpo La! My name is {name} from {village}.")
`,
  },
  {
    title: 'List Manipulation',
    code: `# Working with Python lists
items = ["chili", "rice", "cheese"]
items.append("tea")
print("Original items:", items)

# Sort alphabetically
items.sort()
print("Sorted items:", items)
`,
  },
  {
    title: 'Fibonacci Sequence',
    code: `# Calculate Fibonacci numbers
def fibonacci(n):
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print("First 10 Fibonacci numbers:")
print(fibonacci(10))
`,
  },
];

export const PlaygroundModal: React.FC<PlaygroundModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState(STARTER_SNIPPETS[0].code);
  const [output, setOutput] = useState<{ stdout: string; error?: string } | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleRun = async () => {
    setIsRunning(true);
    setOutput(null);

    try {
      const res = await pyodideService.runPython(code);
      setOutput({
        stdout: res.stdout,
        error: res.error,
      });
    } catch (err: any) {
      setOutput({
        stdout: '',
        error: err?.message || 'Execution error',
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              Interactive Python Playground
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Snippet selection bar */}
        <div className="px-6 py-3 bg-slate-100/70 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs text-slate-500 shrink-0 font-semibold uppercase tracking-wider">Starter Templates:</span>
          {STARTER_SNIPPETS.map((snip, i) => (
            <button
              key={i}
              onClick={() => {
                setCode(snip.code);
                setOutput(null);
              }}
              className="px-3 py-1 bg-white hover:bg-slate-200/80 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 whitespace-nowrap transition-colors cursor-pointer shadow-2xs"
            >
              {snip.title}
            </button>
          ))}
        </div>

        {/* Code Editor & Output */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto flex-1 custom-scrollbar bg-slate-50/50">
          <div className="bg-slate-900 border border-slate-800 focus-within:border-indigo-500 rounded-2xl overflow-hidden shadow-xs flex flex-col">
            <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-indigo-400">scratchpad.py</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs transition-all shadow-xs cursor-pointer disabled:opacity-50"
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
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="w-full p-4 bg-transparent font-mono text-sm text-slate-100 outline-none min-h-[160px] leading-relaxed resize-y"
            />
          </div>

          {/* Output console */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-200 min-h-[100px] whitespace-pre-wrap shadow-xs">
            <div className="text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-2 font-sans font-semibold uppercase tracking-wider">
              Output Console
            </div>
            {output ? (
              <>
                {output.stdout && <div className="text-emerald-300">{output.stdout}</div>}
                {output.error && <div className="text-rose-400 mt-1 font-semibold">{output.error}</div>}
                {!output.stdout && !output.error && (
                  <div className="text-slate-500 italic">(Program executed with no output)</div>
                )}
              </>
            ) : (
              <div className="text-slate-500 italic">Click "Run Code" to execute Python code live in WebAssembly</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
