import React from 'react';
import {
  Sparkles,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  Bookmark,
  Layers,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Database,
  Navigation,
  Cpu,
  Globe,
  Award,
  Clock
} from 'lucide-react';
import { examScope } from '../data/examScope';

export default function DashboardPage({ onNavigate, userProgress, totalQuestionsCount }) {
  const reviewedCount = Object.values(userProgress).filter(s => s === 'reviewed').length;
  const needReviewCount = Object.values(userProgress).filter(s => s === 'need_review').length;
  const importantCount = Object.values(userProgress).filter(s => s === 'important').length;

  const progressPercent = Math.min(100, Math.round((reviewedCount / totalQuestionsCount) * 100)) || 0;

  const lectureCards = [
    {
      id: 'lecture-7',
      num: '07',
      titleEn: 'Navigation in Flutter',
      titleAr: 'التنقل وتوجيه الشاشات',
      icon: Navigation,
      color: 'from-indigo-600 to-blue-600',
      tag: 'CRITICAL FOCUS',
      tagColor: 'bg-indigo-950 text-indigo-300 border-indigo-700',
      descEn: 'Anonymous vs Named routing, Navigator route stack (push, pop, replacement, popUntil, pushAndRemoveUntil).',
      descAr: 'مقارنة التوجيه المجهول مقابل المسمى، مكدس المسارات، وتتبع الشاشات بعد كل استدعاء.'
    },
    {
      id: 'lecture-8',
      num: '08',
      titleEn: 'Asynchronous Programming',
      titleAr: 'البرمجة غير المتزامنة',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      tag: 'CRITICAL FOCUS',
      tagColor: 'bg-cyan-950 text-cyan-300 border-cyan-700',
      descEn: 'Dart single-threaded isolate, Event Loop, Future states, async/await, FutureBuilder & StreamBuilder.',
      descAr: 'خيط التنفيذ الأحادي وحلقة الأحداث في دارت، دورة حياة Future، كلمات async/await، وويدجت FutureBuilder.'
    },
    {
      id: 'lecture-9',
      num: '09',
      titleEn: 'Local Data Storage',
      titleAr: 'التخزين المحلي للبيانات',
      icon: Database,
      color: 'from-emerald-600 to-teal-600',
      tag: 'FULL CHAPTER INCLUDED',
      tagColor: 'bg-emerald-950 text-emerald-300 border-emerald-700',
      descEn: 'Persistence lifetimes, SQLite Dog CRUD model (sqflite), SharedPreferences (with modern Async/Cache), and File/JSON storage.',
      descAr: 'الفصل بالكامل مطلوب! يشمل SQLite بنموذج Dog، تفضيلات SharedPreferences، وتخزين الملفات النصية و JSON.'
    },
    {
      id: 'lecture-10',
      num: '10',
      titleEn: 'Online REST API & CRUD',
      titleAr: 'واجهات REST والتخزين السحابي',
      icon: Globe,
      color: 'from-amber-600 to-rose-600',
      tag: 'CRUD INCLUDED • NO IMAGES',
      tagColor: 'bg-amber-950 text-amber-300 border-amber-700',
      descEn: 'API request contract, JSON models, local ProductItem, online RandomUser, PHP/MySQL CRUD, 10.0.2.2 emulator alias.',
      descAr: 'عقد الـ API، تحليل JSON، الأصول المحلية، وعمليات CRUD مع PHP و MySQL. مع استبعاد رفع الصور تماماً.'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/90 via-slate-900 to-slate-950 border border-indigo-700/50 p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/90 border border-indigo-700 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Mobile Application Programming using Flutter and Dart</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono">
              <span>ENG\AIMAN QAIS</span>
              <span className="font-arabic font-semibold text-white">• إعداد م/ أيمن قيس</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Mobile Application Programming using Flutter and Dart
          </h1>

          <p className="text-slate-300 text-sm md:text-base font-arabic leading-relaxed">
            المنصة الأكاديمية الشاملة والمخصصة لمراجعة الاختبار النهائي لمقرر برمجة تطبيقات الموبايل (Flutter & Dart). إعداد م/ أيمن قيس (ENG\AIMAN QAIS)، مبنية بالكامل وفقاً لتحديدات أستاذة المنهج م/ رقية حسين سلمان، مع تحليل تفصيلي للمحاضرات والمعامل 7 و 8 و 9 و 10 وبنك أسئلة يضم 529 سؤالاً معتمداً ومصححاً.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('exam-focus')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Final Exam Focus (تركيز الاختبار)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('question-bank')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs md:text-sm border border-slate-700 flex items-center gap-2 transition-all"
            >
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>Question Bank (520+ Qs)</span>
            </button>

            <button
              onClick={() => onNavigate('visual-tools')}
              className="px-5 py-2.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 font-bold text-xs md:text-sm border border-indigo-700/80 flex items-center gap-2 transition-all"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Interactive Tools (المحاكيات)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Quick Stats Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-850 border border-slate-750 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-slate-400 text-xs font-semibold mb-1">Total Exam Questions</div>
          <div className="text-2xl md:text-3xl font-black text-white font-mono">{totalQuestionsCount}</div>
          <div className="text-[11px] text-indigo-400 font-arabic mt-1">من أسئلة المعامل الرسمية</div>
        </div>

        <div className="bg-slate-850 border border-slate-750 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-slate-400 text-xs font-semibold mb-1">Reviewed Questions</div>
          <div className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">{reviewedCount}</div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="bg-slate-850 border border-slate-750 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-slate-400 text-xs font-semibold mb-1">Needs Review</div>
          <div className="text-2xl md:text-3xl font-black text-amber-400 font-mono">{needReviewCount}</div>
          <div className="text-[11px] text-slate-400 font-arabic mt-1">بحاجة لمراجعة إضافية</div>
        </div>

        <div className="bg-slate-850 border border-slate-750 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-slate-400 text-xs font-semibold mb-1">Starred Important</div>
          <div className="text-2xl md:text-3xl font-black text-indigo-400 font-mono">{importantCount}</div>
          <div className="text-[11px] text-slate-400 font-arabic mt-1">أسئلة مميزة بأولوية عالية</div>
        </div>
      </div>

      {/* Official Exam Scope Filter Notice */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
        <div className="space-y-1 text-xs md:text-sm w-full">
          <h4 className="font-bold text-white">
            Authoritative Exam Filtering & Academic Integrity Rule
          </h4>
          <p dir="rtl" className="text-slate-300 leading-relaxed font-arabic text-right mt-2">
            هذه المنصة تلتزم حرفياً بتحديد أستاذة المنهج: المحاضرات 7 و 8 و 9 و 10 فقط. في المحاضرة 9، الفصل بالكامل مطلوب. وفي المحاضرة 10، تم استبعاد جزئية رفع الصور تماماً (API with Images) وتصنيفها كـ <span dir="ltr" className="inline-block text-rose-400 font-bold underline px-1">EXCLUDED FROM FINAL EXAM</span> لعدم تشتيت الطالب قبل الاختبار.
          </p>
        </div>
      </div>

      {/* 4 Lecture Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-bold text-white text-center md:text-left">Course Lectures Study Modules</h3>
            <p dir="rtl" className="text-xs text-slate-400 font-arabic text-center md:text-right mt-1">المحاضرات الأربع المطلوبة في الاختبار النهائي مع الشرح الثنائي والأسئلة</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {lectureCards.map((lec) => {
            const Icon = lec.icon;
            return (
              <div
                key={lec.id}
                onClick={() => onNavigate(lec.id)}
                className="group cursor-pointer bg-slate-850 hover:bg-slate-800 border border-slate-750 hover:border-indigo-500 rounded-2xl p-5 shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${lec.color} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-indigo-400 font-bold">Lecture {lec.num}</div>
                        <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {lec.titleEn}
                        </h4>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider font-mono ${lec.tagColor}`}>
                      {lec.tag}
                    </span>
                  </div>

                  <div className="text-xs font-arabic text-slate-300 font-medium mb-2">
                    {lec.titleAr}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-1">
                    {lec.descEn}
                  </p>
                  <p dir="rtl" className="text-[11px] text-slate-400 font-arabic leading-relaxed text-right">
                    {lec.descAr}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-indigo-400 font-semibold">
                  <span>Open Full Study & Questions Module</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
