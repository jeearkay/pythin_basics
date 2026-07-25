import React, { useState } from 'react';
import { DebugQuest as DebugType } from '../../types';

interface DebugProps {
  quest: DebugType;
  selectedLine: number | null;
  selectedFix: number | null;
  onSelectLine: (lineIdx: number) => void;
  onSelectFix: (fixIdx: number) => void;
}

export const DebugQuestComponent: React.FC<DebugProps> = ({
  quest,
  selectedLine,
  selectedFix,
  onSelectLine,
  onSelectFix,
}) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-xs text-slate-500 font-semibold">
        Step 1: Click on the code line containing the bug or error:
      </div>

      {/* Code snippet with clickable lines */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden font-mono text-sm leading-relaxed shadow-sm">
        <div className="bg-slate-800/90 px-4 py-2 border-b border-slate-700 text-xs font-medium text-slate-400 flex items-center justify-between">
          <span>script.py</span>
          <span className="text-[10px] text-indigo-400">Click line to inspect bug</span>
        </div>

        <div className="p-2 flex flex-col">
          {quest.code.map((line, idx) => {
            const isSelected = selectedLine === idx;
            return (
              <button
                key={idx}
                onClick={() => onSelectLine(idx)}
                className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center gap-3 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-rose-950/60 border-l-4 border-rose-500 text-rose-100 font-semibold shadow-inner'
                    : 'hover:bg-slate-800/60 text-slate-200'
                }`}
              >
                <span className="text-xs text-slate-500 w-6 shrink-0 select-none text-right">
                  {idx + 1}
                </span>
                <span className="truncate">{line}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fix Options */}
      {selectedLine !== null && (
        <div className="flex flex-col gap-3 animate-fadeIn">
          <div className="text-xs text-slate-500 font-semibold">
            Step 2: Choose the correct fix for line {selectedLine + 1}:
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {quest.options.map((opt, idx) => {
              const isFixSelected = selectedFix === idx;
              return (
                <button
                  key={idx}
                  onClick={() => onSelectFix(idx)}
                  className={`p-3.5 rounded-xl border text-left font-mono text-xs sm:text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isFixSelected
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold shadow-xs ring-1 ring-indigo-400'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-300 text-slate-800'
                  }`}
                >
                  <span>{opt}</span>
                  {isFixSelected && <span className="text-indigo-600 font-bold">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
