import React from 'react';
import { Sparkles, Flame, Terminal, BookOpen, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { UserState } from '../types';

interface HeaderProps {
  state: UserState;
  onOpenPlayground: () => void;
  onOpenGuide: () => void;
  onResetProgress: () => void;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  state,
  onOpenPlayground,
  onOpenGuide,
  onResetProgress,
  onToggleSound,
}) => {
  return (
    <header className="sticky top-0 z-40 px-6 py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between gap-4 shadow-xs">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 border border-indigo-500 flex items-center justify-center overflow-hidden shadow-xs text-white font-bold text-lg shrink-0">
          <img
            src="/logo.png"
            alt="Karma Academy Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden sm:flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-base tracking-tight leading-none">
              PythonLab
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full">
              Karma Quest
            </span>
          </div>
          <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium mt-0.5">
            Guna's Master Path
          </span>
        </div>
      </div>

      {/* Stats Badges */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* XP */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-800 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{state.xp}</span>
          <span className="text-[10px] text-amber-600 font-bold uppercase hidden md:inline">XP</span>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-200 rounded-full text-xs font-semibold text-rose-800 shadow-2xs">
          <Flame className="w-3.5 h-3.5 text-rose-600" />
          <span>{state.streak}</span>
          <span className="text-[10px] text-rose-600 font-bold uppercase hidden md:inline">Streak</span>
        </div>

        {/* Level */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-xs font-semibold text-indigo-900 shadow-2xs">
          <span className="text-[10px] text-indigo-600 uppercase">Level</span>
          <span>{state.currentLevel + 1} / 11</span>
        </div>

        {/* Hearts */}
        <div className="flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-200 rounded-full">
          {Array.from({ length: state.maxHearts }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className={`w-4 h-4 transition-all duration-300 ${
                i < state.hearts ? 'opacity-100 scale-100 drop-shadow-2xs' : 'opacity-20 grayscale scale-90'
              }`}
            >
              <path
                d="M12,21 C12,21 4,14 4,8.5 C4,5.5 6.5,3 9.5,3 C11,3 12,4 12,4 C12,4 13,3 14.5,3 C17.5,3 20,5.5 20,8.5 C20,14 12,21 12,21 Z"
                fill={i < state.hearts ? '#e11d48' : '#cbd5e1'}
                stroke="#be123c"
                strokeWidth="1"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenPlayground}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-all shadow-xs cursor-pointer"
          title="Open Python Free Sandbox"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Playground</span>
        </button>

        <button
          onClick={onOpenGuide}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          title="Beginner Python Guide & Cheat Sheet"
        >
          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
          <span className="hidden lg:inline">Guide</span>
        </button>

        <button
          onClick={onToggleSound}
          className="p-1.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
          title={state.soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
        >
          {state.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-rose-500" />}
        </button>

        <button
          onClick={onResetProgress}
          className="p-1.5 text-slate-500 hover:text-rose-600 bg-slate-100 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-lg transition-colors cursor-pointer"
          title="Reset Quest Progress"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
