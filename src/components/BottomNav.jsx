import React from 'react';
import { LayoutDashboard, Sparkles, BookOpen, HelpCircle, Layers } from 'lucide-react';

export default function BottomNav({ currentView, onNavigate }) {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'exam-focus', label: 'Exam Focus', icon: Sparkles, highlight: true },
    { id: 'lecture-7', label: 'Lectures', icon: BookOpen },
    { id: 'question-bank', label: 'Questions', icon: HelpCircle },
    { id: 'visual-tools', label: 'Tools', icon: Layers }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 lg:hidden px-2 py-1.5 flex items-center justify-around shadow-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentView === tab.id || (tab.id === 'lecture-7' && currentView.startsWith('lecture-'));
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              isActive
                ? 'text-indigo-400 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400 scale-110' : 'text-slate-400'}`} />
              {tab.highlight && !isActive && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </div>
            <span className="text-[10px] mt-1 font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
