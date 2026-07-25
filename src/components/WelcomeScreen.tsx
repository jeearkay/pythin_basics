import React from 'react';
import { Sparkles, Terminal, BookOpen, Play, Shield, Award } from 'lucide-react';
import logo from '/logo.png';

interface WelcomeProps {
  onStart: () => void;
  onOpenGuide: () => void;
}

export const WelcomeScreen: React.FC<WelcomeProps> = ({ onStart, onOpenGuide }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="max-w-2xl w-full text-center flex flex-col items-center my-auto py-8 bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl">
        {/* Logo Mark */}
        <div className="w-24 h-24 mb-4 rounded-2xl bg-indigo-600 border-2 border-indigo-500 flex items-center justify-center overflow-hidden shadow-md animate-bounce-slow">
          <img
            src={logo}
            alt="Karma Academy Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Eyebrow */}
        <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
          A Complete Bhutanese Python Adventure
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
          Guna's <span className="text-indigo-600">Python</span> Master Quest
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg mb-8">
          Journey through the Kingdom of the Thunder Dragon. Master Python with 110 interactive quests: MCQs, Fill-in-the-blanks, Live Sandboxes, Debuggers, and Method Matchers!
        </p>

        {/* Key Features Bento Grid */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center shadow-2xs">
            <span className="text-2xl font-extrabold text-indigo-600">11</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">Learning Levels</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center shadow-2xs">
            <span className="text-2xl font-extrabold text-indigo-600">110</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">Interactive Quests</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center shadow-2xs">
            <span className="text-2xl font-extrabold text-indigo-600">Real</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">Python Engine</span>
          </div>
        </div>

        {/* Start Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <button
            onClick={onStart}
            className="flex-1 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            Begin Journey
          </button>

          <button
            onClick={onOpenGuide}
            className="px-5 py-3.5 border border-slate-200 hover:border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Python Guide</span>
          </button>
        </div>

        {/* Creator tag */}
        <div className="mt-8 text-xs text-slate-400 font-medium tracking-wider uppercase">
          Crafted by <strong className="text-slate-700">grk</strong> · Karma Academy
        </div>
      </div>
    </div>
  );
};
