import React from 'react';
import { CheckCircle2, AlertOctagon, Sparkles, Heart } from 'lucide-react';

interface FeedbackModalProps {
  visible: boolean;
  type: 'success' | 'error' | 'warn';
  title: string;
  msg: string;
  xpText?: string;
  explanation?: string;
  onContinue: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  visible,
  type,
  title,
  msg,
  xpText,
  explanation,
  onContinue,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div
        className={`bg-white border rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center shadow-2xl flex flex-col items-center gap-4 transition-all scale-100 ${
          type === 'success'
            ? 'border-emerald-300 shadow-emerald-500/10'
            : type === 'error'
            ? 'border-rose-300 shadow-rose-500/10'
            : 'border-amber-300 shadow-amber-500/10'
        }`}
      >
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${
            type === 'success'
              ? 'bg-emerald-500 text-white'
              : type === 'error'
              ? 'bg-rose-500 text-white'
              : 'bg-amber-500 text-white'
          }`}
        >
          {type === 'success' && <CheckCircle2 className="w-9 h-9" />}
          {type === 'error' && <AlertOctagon className="w-9 h-9" />}
          {type === 'warn' && <Sparkles className="w-9 h-9" />}
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-bold tracking-tight ${
            type === 'success'
              ? 'text-emerald-700'
              : type === 'error'
              ? 'text-rose-700'
              : 'text-amber-700'
          }`}
        >
          {title}
        </h3>

        {/* Message */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal">{msg}</p>

        {/* Explanation text */}
        {explanation && (
          <div className="bg-slate-900 text-slate-100 border border-slate-800 rounded-2xl p-4 text-xs text-left w-full font-mono leading-relaxed">
            <span className="text-amber-300 font-bold block mb-1">💡 Wisdom Explanation:</span>
            {explanation}
          </div>
        )}

        {/* XP Gain or Heart status */}
        {xpText && (
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-xs font-semibold text-indigo-900">
            {xpText.includes('XP') ? (
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            ) : (
              <Heart className="w-3.5 h-3.5 text-rose-500" />
            )}
            <span>{xpText}</span>
          </div>
        )}

        {/* Button */}
        <button
          onClick={onContinue}
          className={`w-full mt-2 py-3 font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-xs ${
            type === 'success'
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {type === 'success' ? 'Continue Quest' : 'Try Again'}
        </button>
      </div>
    </div>
  );
};
