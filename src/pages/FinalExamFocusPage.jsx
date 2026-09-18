import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Code2,
  HelpCircle,
  ShieldCheck,
  Zap,
  Bookmark,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { examScope } from '../data/examScope';
import { lecturesData } from '../data/lecturesData';

export default function FinalExamFocusPage({ onNavigate }) {
  const [expandedLec, setExpandedLec] = useState(7);

  const quickDiffs = [
    {
      titleEn: "Anonymous vs Named Routing (Lecture 7)",
      titleAr: "التوجيه المجهول مقابل المسمى (المحاضرة 7)",
      anonymous: "MaterialPageRoute(builder: (context) => ScreenB()) inline. Tightly coupled, type-safe constructor arguments.",
      named: "Central routes map in MaterialApp.routes: {'/second': (context) => ScreenB()}. Decoupled, arguments via settings.arguments.",
      examRule: "Know the code for both and understand stack changes."
    },
    {
      titleEn: "Synchronous vs Asynchronous (Lecture 8)",
      titleAr: "المتزامن مقابل غير المتزامن (المحاضرة 8)",
      anonymous: "Synchronous: Executes line by line on the Call Stack; heavy operations freeze UI and trigger ANR.",
      named: "Asynchronous: Uses Dart Event Loop; awaiting I/O frees the single isolate thread to keep rendering frames.",
      examRule: "Dart is single-threaded! async/await does not create multi-threaded CPU parallel execution."
    },
    {
      titleEn: "SQLite vs SharedPreferences vs Files (Lecture 9)",
      titleAr: "مقارنة حلول التخزين المحلي الثلاثة (المحاضرة 9)",
      anonymous: "SQLite: Relational tables, SQL queries, Dog CRUD, handles thousands of rows. SharedPreferences: Key-value primitives (XML/Plist), fast settings.",
      named: "Files (dart:io + path_provider): Text & JSON files in documents directory. SharedPreferences is NOT encrypted!",
      examRule: "Entire Chapter 9 is included in the final exam! Master the SQLite Dog model."
    },
    {
      titleEn: "REST API CRUD & Endpoints (Lecture 10)",
      titleAr: "عمليات CRUD ونقاط نهاية REST API (المحاضرة 10)",
      anonymous: "GET = Read/View (getdata.php); POST = Create/Insert (adddata.php); PUT = Update (editdata.php); DELETE = Remove (deletedata.php).",
      named: "Android Emulator loopback IP is http://10.0.2.2 (NOT localhost). API WITH IMAGES IS STRICTLY EXCLUDED.",
      examRule: "Doctor emphasizes True/False and MCQ for API topics. Do not study image upload for exam."
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-12 max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/60 border border-amber-600/40 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Zap className="w-4 h-4" />
          <span>High-Yield Revision Mode | نمط المراجعة السريعة قبل الاختبار</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
          Final Exam Focus & Official Scope Guide
        </h1>
        <p className="text-slate-300 text-sm md:text-base font-arabic mt-2 leading-relaxed">
          الدليل الامتحاني المباشر للطلاب ذوي الوقت المحدود قبل موعد الاختبار. تم تلخيص كافة اشتراطات أستاذة المنهج، الفروقات الرئيسية، نماذج الكود الإلزامية، وتنبيهات الاستبعاد لضمان مراجعة مركزة وفعالة دون تشتيت.
        </p>

        {/* Quick jump to lectures */}
        <div className="flex flex-wrap gap-2 pt-4">
          {[7, 8, 9, 10].map((num) => (
            <button
              key={num}
              onClick={() => setExpandedLec(num)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                expandedLec === num
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                  : 'bg-slate-850 text-slate-300 border-slate-750 hover:bg-slate-800 hover:text-white'
              }`}
            >
              Lecture {num}
            </button>
          ))}
        </div>
      </div>

      {/* Critical Differences Cheat Sheet */}
      <div className="bg-slate-850 border border-slate-750 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Top 4 Exam Comparisons & Invariants (أهم 4 مقارنات امتحانية)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickDiffs.map((diff, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-750 rounded-xl p-4 space-y-2 text-xs">
              <h4 className="font-bold text-white text-sm">{diff.titleEn}</h4>
              <p className="font-arabic text-amber-300/90 text-xs">{diff.titleAr}</p>
              <div className="text-slate-300 leading-relaxed border-t border-slate-800 pt-2">
                <span className="text-indigo-300 font-semibold block mb-0.5">• Core Contrast:</span>
                {diff.anonymous}
              </div>
              <div className="text-slate-300 leading-relaxed">
                {diff.named}
              </div>
              <div className="bg-indigo-950/40 p-2 rounded-lg border border-indigo-900/60 text-indigo-300 font-mono text-[11px]">
                ⚠️ Exam Invariant: {diff.examRule}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lecture-by-Lecture Breakdown Accordion */}
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Official Lecture-by-Lecture Exam Specifications</span>
        </h3>

        {[7, 8, 9, 10].map((lecId) => {
          const scope = examScope.lectures[lecId];
          const content = lecturesData[lecId];
          const isExpanded = expandedLec === lecId;

          return (
            <div
              key={lecId}
              className="bg-slate-850 border border-slate-750 rounded-2xl overflow-hidden transition-all shadow-md"
            >
              {/* Accordion Bar */}
              <button
                onClick={() => setExpandedLec(isExpanded ? null : lecId)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-sm font-mono">
                    L{lecId}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{scope.titleEn}</h4>
                    <span className="text-xs font-arabic text-slate-400">{scope.titleAr}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded border uppercase tracking-wider font-mono ${
                    scope.isEntireChapter
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                      : 'bg-indigo-950 text-indigo-300 border-indigo-700'
                  }`}>
                    {scope.examStatus}
                  </span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="p-6 pt-2 border-t border-slate-800 space-y-6 text-xs">
                  {/* Doctor Focus Callout */}
                  <div className="bg-indigo-950/30 border border-indigo-800/80 rounded-xl p-4 text-indigo-200 leading-relaxed">
                    <strong className="block text-indigo-300 font-bold mb-1">
                      Doctor / Instructor Emphasis (تأكيد أستاذة المنهج):
                    </strong>
                    <p>{scope.doctorEmphasis.join(' ')}</p>
                    <p className="font-arabic text-slate-400 text-xs mt-2 dir-rtl text-right">
                      {content.doctorExamFocusAr}
                    </p>
                  </div>

                  {/* Required Topics List */}
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
                      Required Topics & Key Concepts (المواضيع المقررة):
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {scope.requiredTopics.map((topic, tIdx) => (
                        <div key={tIdx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-750">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white text-xs">{topic.name}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700">
                              {topic.status}
                            </span>
                          </div>
                          <div className="text-slate-400 text-[11px] leading-relaxed">{topic.description}</div>
                          <div className="font-arabic text-slate-400 text-[11px] mt-1 dir-rtl text-right">{topic.descriptionAr}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Excluded Topics Alert if any */}
                  {scope.excludedTopics && scope.excludedTopics.length > 0 && (
                    <div className="bg-rose-950/30 border border-rose-800/80 rounded-xl p-4 text-rose-200">
                      <div className="flex items-center gap-2 font-bold text-rose-400 text-xs mb-1">
                        <AlertTriangle className="w-4 h-4" />
                        <span>EXCLUDED FROM FINAL EXAM (مستبعد من الاختبار):</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                        {scope.excludedTopics.map((ex, exIdx) => (
                          <li key={exIdx}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Quick Revision Checklist */}
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                    <h5 className="font-bold text-emerald-400 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Quick Revision Checklist (نقاط المراجعة السريعة)
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {content.quickChecklist.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-slate-300 text-xs">
                          <span className="text-emerald-500 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button to open lecture */}
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => onNavigate(`lecture-${lecId}`)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
                    >
                      <span>Study Full Lecture {lecId}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
