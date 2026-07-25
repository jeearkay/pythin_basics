import React, { useState, useEffect } from 'react';
import { SortQuest as SortType } from '../../types';

interface SortProps {
  quest: SortType;
  placements: Record<number, string>; // itemIndex -> categoryLabel
  onPlace: (itemIndex: number, categoryLabel: string) => void;
}

export const SortQuestComponent: React.FC<SortProps> = ({ quest, placements, onPlace }) => {
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);

  useEffect(() => {
    setSelectedItemIdx(null);
  }, [quest]);

  // Unplaced items
  const unplacedIndices = quest.items
    .map((_, i) => i)
    .filter((i) => placements[i] === undefined || placements[i] === '');

  const handleTapItem = (idx: number) => {
    if (selectedItemIdx === idx) {
      setSelectedItemIdx(null);
    } else {
      setSelectedItemIdx(idx);
    }
  };

  const handleTapBox = (catLabel: string) => {
    if (selectedItemIdx !== null) {
      onPlace(selectedItemIdx, catLabel);
      setSelectedItemIdx(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Items Pool */}
      <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-4 flex flex-col gap-2 min-h-[90px]">
        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
          {unplacedIndices.length === 0
            ? '✓ All items categorized! Click "Check Answer" below.'
            : 'Unsorted Pool (Click item, then click target box below):'}
        </span>

        <div className="flex flex-wrap gap-2 mt-1">
          {unplacedIndices.map((idx) => {
            const item = quest.items[idx];
            const isSelected = selectedItemIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => handleTapItem(idx)}
                className={`px-3.5 py-2 rounded-xl font-mono text-xs sm:text-sm border transition-all duration-200 cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-indigo-600 border-indigo-500 text-white font-bold scale-105 shadow-xs ring-2 ring-indigo-400'
                    : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800'
                }`}
              >
                {item.v}
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Category Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quest.categories.map((cat) => {
          const placedInCat = quest.items
            .map((item, i) => ({ item, i }))
            .filter(({ i }) => placements[i] === cat.label);

          return (
            <div
              key={cat.label}
              onClick={() => handleTapBox(cat.label)}
              className={`bg-white border-2 border-dashed rounded-2xl p-4 flex flex-col gap-3 min-h-[140px] transition-all cursor-pointer shadow-2xs ${
                selectedItemIdx !== null
                  ? 'border-indigo-500 bg-indigo-50/40 hover:bg-indigo-50/70'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {cat.tag}
                </span>
                <span className="text-[10px] text-slate-500 font-mono px-2 py-0.5 bg-slate-100 rounded-full border border-slate-200">
                  {cat.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 min-h-[50px]">
                {placedInCat.map(({ item, i }) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Remove placement
                      onPlace(i, '');
                    }}
                    title="Click to return to pool"
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 hover:border-rose-300 hover:bg-rose-50 text-indigo-900 hover:text-rose-700 font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{item.v}</span>
                    <span className="text-[10px] opacity-60 font-bold">✕</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
