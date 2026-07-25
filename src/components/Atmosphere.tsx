import React from 'react';

export const Atmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 flex">
        <div className="flex-1 bg-indigo-600" />
        <div className="flex-1 bg-emerald-500" />
        <div className="flex-1 bg-amber-500" />
        <div className="flex-1 bg-sky-500" />
        <div className="flex-1 bg-indigo-500" />
      </div>

      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Gradient Orbs */}
      <div className="absolute rounded-full blur-[120px] opacity-20 w-[600px] h-[600px] bg-indigo-500 -top-32 -left-32 animate-pulse" />
      <div className="absolute rounded-full blur-[140px] opacity-15 w-[700px] h-[700px] bg-emerald-500 -bottom-48 -right-36 animate-pulse" />
      <div className="absolute rounded-full blur-[100px] opacity-10 w-[450px] h-[450px] bg-sky-400 top-1/3 right-1/4" />
    </div>
  );
};

