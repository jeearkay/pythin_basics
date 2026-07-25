import React, { useState } from 'react';
import { BookOpen, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Level, Quest, UserState } from '../types';
import { McqQuestComponent } from './quests/McqQuest';
import { FillQuestComponent } from './quests/FillQuest';
import { MatchQuestComponent } from './quests/MatchQuest';
import { SortQuestComponent } from './quests/SortQuest';
import { SandboxQuestComponent } from './quests/SandboxQuest';
import { DebugQuestComponent } from './quests/DebugQuest';

interface QuestCardProps {
  level: Level;
  quest: Quest;
  questIndex: number;
  totalQuests: number;
  state: UserState;
  onCheckAnswer: () => void;
  onSkipQuest: () => void;
  // State handlers
  mcqSelected: number;
  setMcqSelected: (idx: number) => void;
  fillValue: string;
  setFillValue: (val: string) => void;
  sortPlacements: Record<number, string>;
  setSortPlacements: (placements: Record<number, string>) => void;
  debugLine: number | null;
  setDebugLine: (line: number | null) => void;
  debugFix: number | null;
  setDebugFix: (fix: number | null) => void;
  onMatchSuccess: () => void;
  onMatchError: () => void;
  onSandboxSuccess: () => void;
  onSandboxError: (msg: string) => void;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  level,
  quest,
  questIndex,
  totalQuests,
  state,
  onCheckAnswer,
  onSkipQuest,
  mcqSelected,
  setMcqSelected,
  fillValue,
  setFillValue,
  sortPlacements,
  setSortPlacements,
  debugLine,
  setDebugLine,
  debugFix,
  setDebugFix,
  onMatchSuccess,
  onMatchError,
  onSandboxSuccess,
  onSandboxError,
}) => {
  const [fillHintIndex, setFillHintIndex] = useState(0);

  const getQuestTypeLabel = (type: string) => {
    switch (type) {
      case 'sort':
        return 'Drag & Sort';
      case 'match':
        return 'Method Matcher';
      case 'sandbox':
        return 'Live WebAssembly Sandbox';
      case 'debug':
        return 'Line Debugger';
      case 'mcq':
        return 'Multiple Choice';
      case 'fill':
        return 'Fill in the Blank';
      default:
        return 'Quest';
    }
  };

  const progress = state.challengeProgress[state.currentLevel] || [];

  return (
    <div className="flex flex-col gap-5 w-full max-w-4xl mx-auto pb-12">
      {/* Story & Location Banner Bento Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
            {level.location}
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 uppercase tracking-wider">
            Level {state.currentLevel + 1}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          {level.title}
        </h2>
        <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-2xl">{level.story}</p>
      </div>

      {/* Theory Scroll Bento Card (Dark Code/Wisdom Block) */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 p-5 shadow-sm">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800 mb-3">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Scroll of Wisdom: {level.name}
          </h3>
        </div>
        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {level.theory.map((t, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: t.content }} />
          ))}
        </div>
      </div>

      {/* Main Challenge Bento Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs relative min-h-[380px] flex flex-col justify-between">
        <div>
          {/* Header & Progress Dots */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                {questIndex + 1}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">
                  {getQuestTypeLabel(quest.type)}
                </span>
                <span className="text-base font-bold text-slate-900">{quest.title}</span>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-1.5 flex-wrap max-w-[200px] justify-end">
              {Array.from({ length: totalQuests }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-1.5 rounded-full transition-all ${
                    progress[i]
                      ? 'bg-emerald-500'
                      : i === questIndex
                      ? 'bg-indigo-600 shadow-2xs'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Task Prompt */}
          <div
            className="bg-slate-50 border-l-4 border-l-indigo-600 p-4 rounded-r-xl mb-6 text-sm sm:text-base text-slate-800 font-medium leading-relaxed shadow-2xs"
            dangerouslySetInnerHTML={{ __html: quest.prompt }}
          />

          {/* Interactive Quest Component */}
          {quest.type === 'mcq' && (
            <McqQuestComponent quest={quest} selected={mcqSelected} onSelect={setMcqSelected} />
          )}

          {quest.type === 'fill' && (
            <FillQuestComponent
              quest={quest}
              value={fillValue}
              onChange={setFillValue}
              onSubmit={onCheckAnswer}
              hints={quest.hints}
              hintIndex={fillHintIndex}
              onShowHint={() => setFillHintIndex((prev) => prev + 1)}
            />
          )}

          {quest.type === 'match' && (
            <MatchQuestComponent
              quest={quest}
              onMatchedAll={onMatchSuccess}
              onError={onMatchError}
            />
          )}

          {quest.type === 'sort' && (
            <SortQuestComponent
              quest={quest}
              placements={sortPlacements}
              onPlace={(itemIdx, cat) =>
                setSortPlacements({ ...sortPlacements, [itemIdx]: cat })
              }
            />
          )}

          {quest.type === 'sandbox' && (
            <SandboxQuestComponent
              quest={quest}
              onSuccess={onSandboxSuccess}
              onError={onSandboxError}
            />
          )}

          {quest.type === 'debug' && (
            <DebugQuestComponent
              quest={quest}
              selectedLine={debugLine}
              selectedFix={debugFix}
              onSelectLine={setDebugLine}
              onSelectFix={setDebugFix}
            />
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-8">
          <button
            onClick={onSkipQuest}
            className="px-4 py-2 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Skip Quest
          </button>

          {quest.type !== 'sandbox' && quest.type !== 'match' && (
            <button
              onClick={onCheckAnswer}
              className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm shadow-xs transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Check Answer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
