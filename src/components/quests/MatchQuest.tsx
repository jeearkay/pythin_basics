import React, { useState, useEffect } from 'react';
import { MatchQuest as MatchType } from '../../types';

interface MatchProps {
  quest: MatchType;
  onMatchedAll: () => void;
  onError: () => void;
}

export const MatchQuestComponent: React.FC<MatchProps> = ({ quest, onMatchedAll, onError }) => {
  const [shuffledRight, setShuffledRight] = useState<{ v: string; origIdx: number }[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [shakingLeft, setShakingLeft] = useState<number | null>(null);
  const [shakingRight, setShakingRight] = useState<number | null>(null);

  useEffect(() => {
    const items = quest.right.map((v, i) => ({ v, origIdx: i }));
    // Shuffle right column
    items.sort(() => Math.random() - 0.5);
    setShuffledRight(items);
    setMatched(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
  }, [quest]);

  const handleSelectLeft = (idx: number) => {
    if (matched.has(idx)) return;
    setSelectedLeft(idx);
    checkPair(idx, selectedRight);
  };

  const handleSelectRight = (shuffledIdx: number, origIdx: number) => {
    if (matched.has(origIdx)) return;
    setSelectedRight(shuffledIdx);
    checkPair(selectedLeft, shuffledIdx);
  };

  const checkPair = (leftIdx: number | null, rightShuffledIdx: number | null) => {
    if (leftIdx === null || rightShuffledIdx === null) return;

    const rightItem = shuffledRight[rightShuffledIdx];
    if (rightItem && leftIdx === rightItem.origIdx) {
      // Match success
      const nextMatched = new Set(matched);
      nextMatched.add(leftIdx);
      setMatched(nextMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (nextMatched.size === quest.left.length) {
        setTimeout(() => onMatchedAll(), 300);
      }
    } else {
      // Wrong pair - shake feedback
      setShakingLeft(leftIdx);
      setShakingRight(rightShuffledIdx);
      onError();

      setTimeout(() => {
        setShakingLeft(null);
        setShakingRight(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 500);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Left Column - Expressions */}
      <div className="flex flex-col gap-2.5">
        <div className="text-xs uppercase font-bold text-slate-400 tracking-widest pb-1.5 border-b border-slate-100">
          Code Expressions
        </div>
        {quest.left.map((item, idx) => {
          const isMatched = matched.has(idx);
          const isSelected = selectedLeft === idx;
          const isShaking = shakingLeft === idx;

          return (
            <button
              key={idx}
              disabled={isMatched}
              onClick={() => handleSelectLeft(idx)}
              className={`p-3.5 rounded-xl border text-left font-mono text-sm transition-all duration-200 relative flex items-center justify-between cursor-pointer ${
                isMatched
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-70 cursor-default font-medium'
                  : isShaking
                  ? 'bg-rose-100 border-rose-500 text-rose-900 animate-shake font-semibold'
                  : isSelected
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:border-indigo-300 text-slate-800'
              }`}
            >
              <span>{item}</span>
              {isMatched && <span className="text-emerald-600 font-bold">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Right Column - Results */}
      <div className="flex flex-col gap-2.5">
        <div className="text-xs uppercase font-bold text-slate-400 tracking-widest pb-1.5 border-b border-slate-100">
          Evaluated Results
        </div>
        {shuffledRight.map((item, idx) => {
          const isMatched = matched.has(item.origIdx);
          const isSelected = selectedRight === idx;
          const isShaking = shakingRight === idx;

          return (
            <button
              key={idx}
              disabled={isMatched}
              onClick={() => handleSelectRight(idx, item.origIdx)}
              className={`p-3.5 rounded-xl border text-left font-mono text-sm transition-all duration-200 relative flex items-center justify-between cursor-pointer ${
                isMatched
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-70 cursor-default font-medium'
                  : isShaking
                  ? 'bg-rose-100 border-rose-500 text-rose-900 animate-shake font-semibold'
                  : isSelected
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:border-indigo-300 text-slate-800'
              }`}
            >
              <span>{item.v}</span>
              {isMatched && <span className="text-emerald-600 font-bold">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
