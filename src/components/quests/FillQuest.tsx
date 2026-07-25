import React, { useEffect, useRef } from 'react';
import { FillQuest as FillType } from '../../types';

interface FillProps {
  quest: FillType;
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  hints: string[];
  hintIndex: number;
  onShowHint: () => void;
}

export const FillQuestComponent: React.FC<FillProps> = ({
  quest,
  value,
  onChange,
  onSubmit,
  hints,
  hintIndex,
  onShowHint,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [quest]);

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-base sm:text-lg leading-relaxed text-slate-100 flex flex-wrap items-center justify-center gap-2 w-full max-w-2xl shadow-sm">
        <span>{quest.codeBefore}</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSubmit();
          }}
          placeholder="?"
          autoComplete="off"
          spellCheck={false}
          className="bg-slate-800 border-2 border-indigo-500 text-amber-300 px-3.5 py-1.5 rounded-lg font-mono text-center text-lg outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 min-w-[120px] transition-all shadow-inner font-bold"
        />
        <span>{quest.codeAfter}</span>
      </div>

      {/* Hints section */}
      {hintIndex > 0 && (
        <div className="w-full max-w-xl bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex flex-col gap-1.5 animate-fadeIn shadow-2xs font-medium">
          {hints.slice(0, hintIndex).map((hint, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-base">💡</span>
              <span>{hint}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
