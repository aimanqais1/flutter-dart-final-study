import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Info,
  Copy,
  Check
} from 'lucide-react';
import { lecturesData } from '../data/lecturesData';
import { examScope } from '../data/examScope';
import { questionsData } from '../data/questionsData';
import QuestionCard from '../components/QuestionCard';
import NavigationVisualizer from '../components/NavigationVisualizer';
import StorageMatrix from '../components/StorageMatrix';
import ApiTester from '../components/ApiTester';

export default function LectureDetailPage({ lectureId, onStatusChange, userProgress, onNavigate }) {
  const lecture = lecturesData[lectureId];
  const scope = examScope.lectures[lectureId];
  const [activeTab, setActiveTab] = useState('theory'); // 'theory' | 'code' | 'interactive' | 'questions' | 'mistakes'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  if (!lecture) return <div>Lecture not found</div>;

  // Filter lab questions for this lecture
  const lectureQuestions = questionsData.filter(q => q.lecture === lectureId);
  const includedQuestions = lectureQuestions.filter(q => q.examRelevance === 'included');
  const excludedQuestions = lectureQuestions.filter(q => q.examRelevance === 'excluded');

  const handleCopyCode = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12 max-w-5xl mx-auto">
      {/* Lecture Header Banner */}
      <div className="bg-slate-850 border border-slate-750 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-600 text-white shadow-md">
                Lecture {lecture.number}
              </span>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700">
                {scope.examStatus}
              </span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Course Material: Dr. Ruqaih Salman
            </div>
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              {lecture.titleEn}
            </h1>
            <h2 className="text-lg md:text-xl font-arabic font-bold text-indigo-400 mt-1">
              {lecture.titleAr}
            </h2>
          </div>

          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            {lecture.overviewEn}
          </p>
          <p className="text-slate-400 text-xs font-arabic leading-relaxed dir-rtl text-right">
            {lecture.overviewAr}
          </p>

          {/* Doctor Exam Requirements Box */}
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-700/60 text-xs text-indigo-200 space-y-1">
            <div className="flex items-center gap-2 font-bold text-indigo-300 text-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Official Professor Exam Requirements (اشتراطات أستاذة المنهج):</span>
            </div>
            <p className="leading-relaxed">{lecture.doctorExamFocus}</p>
            <p className="font-arabic text-slate-300 text-xs pt-1 border-t border-indigo-900/60 dir-rtl text-right">
              {lecture.doctorExamFocusAr}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto gap-1 text-xs font-semibold scrollbar-none">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'theory' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Bilingual Theory & Concepts</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'code' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>Code Patterns & Analysis</span>
        </button>

        <button
          onClick={() => setActiveTab('interactive')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'interactive' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Interactive Visual Tool</span>
        </button>

        <button
          onClick={() => setActiveTab('questions')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'questions' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          <span>Lab Questions ({includedQuestions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('mistakes')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'mistakes' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Common Mistakes & Checklist</span>
        </button>
      </div>

      {/* Tab 1: Bilingual Theory & Mental Model */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {/* Mental Model Section */}
          {lecture.mentalModel && (
            <div className="bg-slate-850 border border-slate-750 rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Info className="w-4 h-4" />
                <span>{lecture.mentalModel.titleEn}</span>
                <span className="font-arabic text-slate-400 text-xs">({lecture.mentalModel.titleAr})</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {lecture.mentalModel.descriptionEn}
              </p>
              <p className="text-xs font-arabic text-slate-400 leading-relaxed dir-rtl text-right">
                {lecture.mentalModel.descriptionAr}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {lecture.mentalModel.points.map((pt, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-750 space-y-1">
                    <div className="font-bold text-white text-xs">{pt.term}</div>
                    <div className="text-slate-300 text-xs">{pt.defEn}</div>
                    <div className="font-arabic text-slate-400 text-[11px] dir-rtl text-right">{pt.defAr}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Topics List */}
          <div className="space-y-6">
            {lecture.topics.map((topic) => (
              <div key={topic.id} className="bg-slate-850 border border-slate-750 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base md:text-lg font-bold text-white">{topic.titleEn}</h3>
                  <span className="text-xs font-arabic text-indigo-400 font-semibold">{topic.titleAr}</span>
                </div>

                <div className="space-y-2 text-xs md:text-sm">
                  <p className="text-slate-200 leading-relaxed">{topic.contentEn}</p>
                  <p className="font-arabic text-slate-400 leading-relaxed dir-rtl text-right">{topic.contentAr}</p>
                </div>

                {/* Sub-points if any */}
                {topic.points && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {topic.points.map((p, idx) => (
                      <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-750 text-xs space-y-1">
                        <div className="font-bold text-indigo-300">{p.term}</div>
                        <div className="text-slate-300 text-[11px]">{p.defEn}</div>
                        <div className="font-arabic text-slate-400 text-[11px] dir-rtl text-right">{p.defAr}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Method table if any (Lecture 7) */}
                {topic.methods && (
                  <div className="overflow-x-auto pt-2">
                    <table className="w-full text-left text-xs border border-slate-850 rounded-xl overflow-hidden">
                      <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[10px]">
                        <tr>
                          <th className="p-3">Method Name</th>
                          <th className="p-3">English Purpose</th>
                          <th className="p-3">الغرض بالعربية</th>
                          <th className="p-3">Primary Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {topic.methods.map((m, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/40">
                            <td className="p-3 font-mono font-bold text-emerald-400">{m.name}</td>
                            <td className="p-3 text-slate-300">{m.purposeEn}</td>
                            <td className="p-3 font-arabic text-slate-400">{m.purposeAr}</td>
                            <td className="p-3 text-indigo-300 text-[11px]">{m.useCase}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Inline Code Snippet if present */}
                {topic.codeSnippet && (
                  <div className="space-y-2 pt-2">
                    <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 relative">
                      <button
                        onClick={() => handleCopyCode(topic.id, topic.codeSnippet)}
                        className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
                      >
                        {copiedCodeId === topic.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCodeId === topic.id ? 'Copied' : 'Copy'}</span>
                      </button>
                      <pre className="text-xs text-emerald-300 font-mono overflow-x-auto leading-relaxed pt-2">
                        <code>{topic.codeSnippet}</code>
                      </pre>
                    </div>
                    {topic.codeExplanationEn && (
                      <div className="p-3 rounded-xl bg-slate-900/90 text-xs text-slate-300 border border-slate-750">
                        <strong className="text-indigo-400 block mb-1">Code Explanation:</strong>
                        <p>{topic.codeExplanationEn}</p>
                        {topic.codeExplanationAr && (
                          <p className="font-arabic text-slate-400 text-xs mt-1 pt-1 border-t border-slate-800 dir-rtl text-right">
                            {topic.codeExplanationAr}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Code Patterns */}
      {activeTab === 'code' && (
        <div className="space-y-6">
          <div className="bg-slate-850 border border-slate-750 rounded-2xl p-6 shadow-md">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-400" />
              <span>Core Dart & Flutter Code Patterns for Lecture {lecture.number}</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Official code recipes and implementation contracts tested in semester assignments and the final exam.
            </p>

            <div className="space-y-6">
              {lecture.topics.filter(t => t.codeSnippet).map((topic) => (
                <div key={topic.id} className="bg-slate-900/90 rounded-2xl p-5 border border-slate-750 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm">{topic.titleEn}</h4>
                    <span className="font-mono text-xs text-indigo-400">Dart</span>
                  </div>

                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 relative">
                    <button
                      onClick={() => handleCopyCode(`code-${topic.id}`, topic.codeSnippet)}
                      className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
                    >
                      {copiedCodeId === `code-${topic.id}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCodeId === `code-${topic.id}` ? 'Copied' : 'Copy'}</span>
                    </button>
                    <pre className="text-xs text-emerald-300 font-mono overflow-x-auto leading-relaxed pt-2">
                      <code>{topic.codeSnippet}</code>
                    </pre>
                  </div>

                  {topic.codeExplanationEn && (
                    <div className="p-3.5 rounded-xl bg-slate-850 border border-slate-750 text-xs space-y-1.5">
                      <div className="text-slate-200 leading-relaxed">
                        <strong className="text-indigo-300">Technical Breakdown: </strong>
                        {topic.codeExplanationEn}
                      </div>
                      <div className="font-arabic text-slate-400 text-xs pt-1 border-t border-slate-800 dir-rtl text-right">
                        <strong className="text-indigo-400">الشرح والتوضيح: </strong>
                        {topic.codeExplanationAr}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Visual Tool */}
      {activeTab === 'interactive' && (
        <div>
          {lectureId === 7 && <NavigationVisualizer />}
          {lectureId === 8 && (
            <div className="bg-slate-850 border border-slate-750 rounded-2xl p-6 shadow-xl text-center space-y-4">
              <h3 className="text-lg font-bold text-white">Event Loop & Async Execution Order Tester</h3>
              <p className="text-xs text-slate-400 max-w-xl mx-auto">
                Review the console output prediction order for synchronous vs Future.delayed execution.
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 max-w-lg mx-auto text-left font-mono text-xs text-emerald-400">
                <div>print('1: Start');</div>
                <div>Future.delayed(Duration(seconds: 1), () =&gt; print('2: Delayed'));</div>
                <div>print('3: End');</div>
                <div className="text-slate-500 pt-2 border-t border-slate-800 mt-2">
                  // OUTPUT ORDER:<br />
                  // 1: Start (Sync Call Stack)<br />
                  // 3: End (Sync Call Stack)<br />
                  // 2: Delayed (Resumes from Event Queue after 1s)
                </div>
              </div>
            </div>
          )}
          {lectureId === 9 && <StorageMatrix />}
          {lectureId === 10 && <ApiTester />}
        </div>
      )}

      {/* Tab 4: Lab Questions */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">
                Authentic Lab {lectureId} Questions ({includedQuestions.length} Items)
              </h3>
              <p className="text-xs text-slate-400 font-arabic">
                أسئلة المعمل الرسمية المستخرجة مع الحلول والشرح الثنائي
              </p>
            </div>
          </div>

          {/* Excluded notice for Lecture 10 if applicable */}
          {lectureId === 10 && excludedQuestions.length > 0 && (
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/80 text-rose-200 text-xs flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-rose-300 font-bold mb-0.5">
                  Image API Questions Filtered Out:
                </strong>
                <span>
                  {excludedQuestions.length} questions regarding image uploading, multipart requests, and XFile uploads have been safely filtered out of the exam review in compliance with the professor announcement.
                </span>
              </div>
            </div>
          )}

          {/* Question Cards List */}
          <div className="space-y-4">
            {includedQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                onStatusChange={onStatusChange}
                currentStatus={userProgress[q.id]}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Common Mistakes & Quick Recap */}
      {activeTab === 'mistakes' && (
        <div className="space-y-6">
          {/* Common Mistakes */}
          <div className="bg-slate-850 border border-slate-750 rounded-2xl p-6 shadow-md space-y-4">
            <h3 className="text-base font-bold text-rose-400 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              <span>Common Traps & Student Mistakes (أخطاء شائعة يجب الحذر منها)</span>
            </h3>

            <div className="space-y-4">
              {lecture.commonMistakes.map((m, idx) => (
                <div key={idx} className="bg-slate-900/90 rounded-xl p-4 border border-rose-950 text-xs space-y-2">
                  <div className="text-rose-300 font-semibold flex items-start gap-2">
                    <span className="text-rose-500 font-bold text-sm">✕</span>
                    <div>
                      <div>{m.mistakeEn}</div>
                      <div className="font-arabic text-rose-400/90 text-[11px] mt-0.5 dir-rtl text-right">{m.mistakeAr}</div>
                    </div>
                  </div>
                  <div className="bg-emerald-950/30 p-3 rounded-lg border border-emerald-900/50 text-emerald-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The Correct Practice:
                    </div>
                    <div>{m.correctionEn}</div>
                    <div className="font-arabic text-slate-300 text-[11px] dir-rtl text-right">{m.correctionAr}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Revision Checklist */}
          <div className="bg-slate-850 border border-slate-750 rounded-2xl p-6 shadow-md space-y-4">
            <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Final Exam Quick Revision Checklist</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {lecture.quickChecklist.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-750 text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
