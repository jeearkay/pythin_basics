import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Award, Flame, Sparkles, RotateCcw } from 'lucide-react';
import { UserState } from '../types';
import logo from '@/public/logo.png';

interface CompletionProps {
  state: UserState;
  onRestart: () => void;
}

export const CompletionScreen: React.FC<CompletionProps> = ({ state, onRestart }) => {
  useEffect(() => {
    // Trigger confetti stream
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e8a33d', '#f4c969', '#d4423f', '#4a90b8'],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e8a33d', '#f4c969', '#d4423f', '#4a90b8'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-2xl flex flex-col items-center gap-6">
        <img
          src={logo}
          alt="Karma Academy Logo"
          className="w-24 h-24"
        />

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Master Quest Complete!
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md font-normal">
            Guna has completed all 11 sacred paths of Python. The Thunder Dragon smiles upon your mastery across the Kingdom.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center shadow-2xs">
            <Sparkles className="w-5 h-5 text-amber-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">{state.xp}</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">Total XP</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center shadow-2xs">
            <Award className="w-5 h-5 text-emerald-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">
              {state.earnedBadges.length} / 11
            </span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">Badges</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center shadow-2xs">
            <Flame className="w-5 h-5 text-rose-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">{state.bestStreak}</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">Best Streak</span>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Begin Anew</span>
        </button>
      </div>
    </div>
  );
};
