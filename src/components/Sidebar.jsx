import React from 'react';
import {
  LayoutDashboard,
  Sparkles,
  Navigation,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  PlayCircle,
  Layers,
  CheckSquare,
  FlaskConical,
  X
} from 'lucide-react';

export default function Sidebar({ currentView, onNavigate, isOpen, onClose }) {
  const navItems = [
    {
      id: 'dashboard',
      labelEn: 'Dashboard',
      labelAr: 'لوحة التحكم',
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: 'exam-focus',
      labelEn: 'Final Exam Focus',
      labelAr: 'تركيز الاختبار النهائي',
      icon: Sparkles,
      badge: 'High Yield',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
    }
  ];

  const lectureItems = [
    {
      id: 'lecture-7',
      labelEn: 'Lecture 7: Navigation',
      labelAr: 'المحاضرة 7: التنقل والمكدس',
      icon: Navigation,
      lecNum: 7
    },
    {
      id: 'lecture-8',
      labelEn: 'Lecture 8: Async & Future',
      labelAr: 'المحاضرة 8: البرمجة غير المتزامنة',
      icon: Cpu,
      lecNum: 8
    },
    {
      id: 'lecture-9',
      labelEn: 'Lecture 9: Local Storage',
      labelAr: 'المحاضرة 9: التخزين المحلي',
      icon: Database,
      badge: 'Full Chapter',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      lecNum: 9
    },
    {
      id: 'lecture-10',
      labelEn: 'Lecture 10: Online REST API',
      labelAr: 'المحاضرة 10: الـ API السحابي',
      icon: Globe,
      lecNum: 10
    }
  ];

  const practiceItems = [
    {
      id: 'labs-overview',
      labelEn: 'Labs Hub (7–10)',
      labelAr: 'معامل المنهج (7-10)',
      icon: FlaskConical,
      badge: '4 Labs'
    },
    {
      id: 'question-bank',
      labelEn: 'Question Bank',
      labelAr: 'بنك الأسئلة الشامل',
      icon: HelpCircle,
      badge: '520+ Qs',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
    },
    {
      id: 'practice-quiz',
      labelEn: 'Practice Quiz Mode',
      labelAr: 'محاكي الاختبار التجريبي',
      icon: PlayCircle
    },
    {
      id: 'visual-tools',
      labelEn: 'Interactive Visual Tools',
      labelAr: 'المحاكيات التفاعلية',
      icon: Layers
    },
    {
      id: 'progress',
      labelEn: 'Study Progress',
      labelAr: 'سجل الإنجاز والمتابعة',
      icon: CheckSquare
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden animate-fadeIn"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[61px] left-0 z-40 h-screen lg:h-[calc(100vh-61px)] w-64 md:w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="overflow-y-auto p-4 space-y-6">
          {/* Mobile Header with Close Button */}
          <div className="flex items-center justify-between lg:hidden pb-3 border-b border-slate-800">
            <span className="font-bold text-white text-sm">Course Navigation</span>
            <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Group */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
              General
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.labelEn}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${item.badgeColor || 'bg-slate-800 text-slate-300'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Lectures Group */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
              Course Lectures (المحاضرات)
            </div>
            {lectureItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{item.labelEn}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Labs & Question Bank Group */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
              Practice & Assessment (التدريب)
            </div>
            {practiceItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.labelEn}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${item.badgeColor || 'bg-slate-800 text-slate-300'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 border-t border-slate-800 text-[11px] text-slate-400 bg-slate-900/40">
          <div className="text-white font-bold mb-0.5 flex items-center gap-1.5">
            <span>Mobile App Programming</span>
          </div>
          <div className="text-indigo-400 font-mono font-bold text-[11px] tracking-wide">
            ENG\AIMAN QAIS
          </div>
          <div className="font-arabic text-amber-400 font-semibold mt-0.5">
            إعداد م/ أيمن قيس
          </div>
          <div className="text-[10px] text-slate-400 font-arabic mt-1">
            إشراف: م/ رقية حسين سلمان
          </div>
        </div>
      </aside>
    </>
  );
}
