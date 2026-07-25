import React from 'react';
import { McqQuest as McqType } from '../../types';

interface McqProps {
  quest: McqType;
  selected: number;
  onSelect: (index: number) => void;
}

export const McqQuestComponent: React.FC<McqProps> = ({ quest, selected, onSelect }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {quest.options.map((opt, idx) => {
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              className={`p-4 rounded-xl border text-left font-mono text-sm sm:text-base transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-50/90 border-indigo-500 text-indigo-950 font-semibold shadow-xs ring-1 ring-indigo-400'
                  : 'bg-slate-50/70 border-slate-200 hover:border-indigo-300 hover:bg-slate-100/80 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-6 h-6 rounded-lg border text-xs font-sans font-bold flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-2xs'
                      : 'border-slate-300 text-slate-500 bg-white'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="truncate">{opt}</span>
              </div>
              {isSelected && <span className="text-indigo-600 text-base font-bold">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
