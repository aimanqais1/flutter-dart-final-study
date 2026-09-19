import React from 'react';
import { Search, BookOpen, Sparkles, Award, CheckCircle2, Bookmark, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenSearch, onNavigate, currentView, userProgress, onToggleMobileMenu }) {
  const reviewedCount = Object.values(userProgress).filter(s => s === 'reviewed').length;
  const importantCount = Object.values(userProgress).filter(s => s === 'important').length;
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 lg:px-8 py-3.5 flex items-center justify-between">
      {/* Left: Mobile Menu Trigger & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div
          onClick={() => onNavigate('dashboard')}
          className="cursor-pointer flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white text-base shadow-md shadow-indigo-600/30">
            FL
          </div>
          <div>
            <div className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
              <span>Flutter & Dart</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700">
                ENG\AIMAN QAIS
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-arabic flex items-center gap-1.5">
              <span>منصة المراجعة الشاملة</span>
              <span className="text-amber-400 font-medium font-arabic">• إعداد م/ أيمن قيس</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle: Global Search Trigger Button */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700 text-slate-400 text-xs transition-colors shadow-inner"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-indigo-400" />
            <span>Search 520+ exam questions, topics, functions...</span>
          </div>
          <kbd className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right: Progress Tracker Widget & Actions */}
      <div className="flex items-center gap-3">
        {/* Mobile Search Button */}
        <button
          onClick={onOpenSearch}
          className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
          title="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Reviewed Progress Counter */}
        <div
          onClick={() => onNavigate('progress')}
          className="cursor-pointer hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 hover:border-slate-600 transition-colors"
          title="View your study progress"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            Reviewed: <strong className="text-white font-mono">{reviewedCount}</strong>/529
          </span>
          {importantCount > 0 && (
            <span className="flex items-center gap-1 text-indigo-300 border-l border-slate-700 pl-2">
              <Bookmark className="w-3 h-3 text-indigo-400" />
              <span className="font-mono">{importantCount}</span>
            </span>
          )}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Final Exam Focus CTA */}
        <button
          onClick={() => onNavigate('exam-focus')}
          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Exam Focus</span>
        </button>
      </div>
    </header>
  );
}
