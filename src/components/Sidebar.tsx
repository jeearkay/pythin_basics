import React from 'react';
import { Map, BookMarked, Award, CheckCircle, Lock, Sparkles } from 'lucide-react';
import { Level, UserState } from '../types';

interface SidebarProps {
  levels: Level[];
  state: UserState;
  onSelectLevel: (levelIndex: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ levels, state, onSelectLevel }) => {
  return (
    <aside className="w-full lg:w-80 bg-slate-50/80 border-r border-slate-200 p-5 overflow-y-auto flex flex-col gap-5 select-none shrink-0 custom-scrollbar">
      {/* Quest Map Bento Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Map className="w-4 h-4 text-indigo-600" />
            <span>Quest Map</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">{levels.length} Paths</span>
        </div>

        <div className="flex flex-col gap-2 mt-3">
          {levels.map((lvl, idx) => {
            const isActive = idx === state.currentLevel;
            const isCompleted = state.completed[idx];
            const progress = state.challengeProgress[idx] || [];
            const completedCount = progress.filter(Boolean).length;

            return (
              <button
                key={idx}
                onClick={() => onSelectLevel(idx)}
                className={`w-full text-left p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-2.5 group cursor-pointer ${
                  isActive
                    ? 'bg-indigo-50/90 border-indigo-200 shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-50/60 border-emerald-200/80 hover:border-emerald-300'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-105 shrink-0 ${
                      isActive
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-xs'
                        : isCompleted
                        ? 'bg-emerald-500 border-emerald-400 text-white shadow-2xs'
                        : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="w-4 h-4 text-white" /> : lvl.icon}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-xs font-semibold truncate ${
                        isActive ? 'text-indigo-950 font-bold' : isCompleted ? 'text-emerald-950' : 'text-slate-800'
                      }`}
                    >
                      {lvl.name}
                    </span>
                    <span className="text-[10px] text-slate-400 truncate">{lvl.location}</span>
                  </div>
                </div>

                <div
                  className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-800'
                      : isActive
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-slate-200/70 text-slate-600'
                  }`}
                >
                  {isCompleted ? '10/10' : `${completedCount}/10`}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Unlocked Cheat Sheet Bento Card (Dark Snippet Block) */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-sm flex flex-col">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest pb-2.5 border-b border-slate-800">
          <BookMarked className="w-4 h-4 text-indigo-400" />
          <span>Unlocked Spells</span>
        </div>

        <div className="mt-3 max-h-48 overflow-y-auto custom-scrollbar pr-1">
          {state.learnedMethods.length === 0 ? (
            <div className="text-xs text-slate-500 italic text-center py-3 font-mono">
              Begin your first quest to unlock methods...
            </div>
          ) : (
            <div className="flex flex-col gap-2 font-mono text-xs">
              {state.learnedMethods.map((m, i) => (
                <div key={i} className="pb-2 border-b border-slate-800/80 last:border-none">
                  <span className="text-amber-300 font-semibold">{m.m}</span>
                  <span className="block text-[11px] text-slate-400 font-sans mt-0.5 leading-snug">{m.d}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Badges Grid Bento Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-600" />
            <span>Badges</span>
          </div>
          <span className="text-[10px] font-mono text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
            {state.earnedBadges.length} / {levels.length}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-3">
          {levels.map((lvl, idx) => {
            const earned = state.earnedBadges.includes(idx);
            return (
              <div
                key={idx}
                title={earned ? `${lvl.badge}: ${lvl.name}` : `Locked (Complete Level ${idx + 1})`}
                className={`aspect-square rounded-xl border flex items-center justify-center text-base transition-all duration-300 ${
                  earned
                    ? 'bg-amber-50 border-amber-300 text-amber-700 shadow-2xs font-bold scale-100'
                    : 'bg-slate-50 border-slate-200 text-slate-300 opacity-60'
                }`}
              >
                {earned ? lvl.badgeIcon : <Lock className="w-3.5 h-3.5 text-slate-300" />}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
