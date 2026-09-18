import React, { useState } from 'react';
import { FlaskConical, Filter, AlertTriangle, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { questionsData } from '../data/questionsData';
import QuestionCard from '../components/QuestionCard';

export default function LabsOverviewPage({ onStatusChange, userProgress }) {
  const [activeLab, setActiveLab] = useState(7);
  const [activeSection, setActiveSection] = useState('all'); // 'all' | 'Q1. True / False' | 'Q2. Multiple Choice Questions'

  const labDetails = {
    7: {
      titleEn: 'Flutter Lab 7: Navigation & Routing',
      titleAr: 'المعمل 7: التنقل وتوجيه الشاشات في فلاتر',
      topics: 'Anonymous Routing, Named Routing, Route Stack, Navigator methods, PopScope',
      sourceDoc: 'Flutter Lab 7 Navigation Eng Ruqaih Salman2027_2028.pdf (28 pages)'
    },
    8: {
      titleEn: 'Flutter Lab 8: Asynchronous Programming',
      titleAr: 'المعمل 8: البرمجة غير المتزامنة في فلاتر',
      topics: 'Single-thread isolate, Event Loop, Future lifecycle, async/await, FutureBuilder, StreamBuilder',
      sourceDoc: 'Flutter Lab 8 Async Eng Ruqaih Salman2027_2028.pdf (24 pages)'
    },
    9: {
      titleEn: 'Flutter Lab 9: Offline Data Storage',
      titleAr: 'المعمل 9: التخزين المحلي للبيانات في فلاتر',
      topics: 'SQLite database (sqflite), SharedPreferences, Text files, JSON files, path_provider',
      sourceDoc: 'Flutter Lab 9 Offline Storage Eng Ruqaih Salman2027_2028.pdf (40 pages)'
    },
    10: {
      titleEn: 'Flutter Lab 10: Online Data Storage & REST API',
      titleAr: 'المعمل 10: التخزين السحابي وواجهات REST API',
      topics: 'API contract, JSON parsing, Dart models, RandomUser API, PHP & MySQL CRUD, 10.0.2.2 alias',
      sourceDoc: 'Flutter Lab 10 Online Storage Eng Ruqaih Salman2027_2028.pdf (54 pages)'
    }
  };

  const labQuestions = questionsData.filter(q => q.lecture === activeLab);
  const includedLabQuestions = labQuestions.filter(q => q.examRelevance === 'included');
  const excludedLabQuestions = labQuestions.filter(q => q.examRelevance === 'excluded');

  const filteredQuestions = activeSection === 'all'
    ? (activeLab === 10 ? includedLabQuestions : labQuestions)
    : (activeLab === 10 ? includedLabQuestions : labQuestions).filter(q => q.section.includes(activeSection === 'tf' ? 'True / False' : 'Multiple Choice'));

  return (
    <div className="space-y-6 animate-fadeIn pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
          <FlaskConical className="w-4 h-4" />
          <span>Official Student Lab Worksheets | أوراق عمل المعامل الرسمية</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Level 3 Students Practical Labs (Labs 7 to 10)
        </h1>
        <p className="text-xs md:text-sm text-slate-400 font-arabic mt-1">
          استعراض شامل لأسئلة المعامل التطبيقية الأربعة مع الحلول المعتمدة والشرح الأكاديمي
        </p>
      </div>

      {/* Lab Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[7, 8, 9, 10].map((num) => {
          const isActive = activeLab === num;
          const count = questionsData.filter(q => q.lecture === num).length;
          return (
            <button
              key={num}
              onClick={() => {
                setActiveLab(num);
                setActiveSection('all');
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-850 border-slate-750 text-slate-300 hover:bg-slate-800 hover:border-slate-650'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono font-bold text-sm">Lab {num}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-indigo-900/60 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count} Qs
                </span>
              </div>
              <div className="text-xs font-semibold truncate">{labDetails[num].titleEn.split(':')[1]}</div>
              <div className="text-[11px] font-arabic opacity-80 mt-1 truncate">{labDetails[num].titleAr}</div>
            </button>
          );
        })}
      </div>

      {/* Active Lab Specs Card */}
      <div className="bg-slate-850 border border-slate-750 rounded-2xl p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white">{labDetails[activeLab].titleEn}</h3>
            <span className="text-xs font-arabic text-indigo-400">{labDetails[activeLab].titleAr}</span>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-750">
            Source: {labDetails[activeLab].sourceDoc}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="text-xs text-slate-300">
            <strong className="text-slate-400">Core Lab Topics: </strong>
            {labDetails[activeLab].topics}
          </div>

          {/* Section Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveSection('all')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                activeSection === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({activeLab === 10 ? includedLabQuestions.length : labQuestions.length})
            </button>
            <button
              onClick={() => setActiveSection('tf')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                activeSection === 'tf' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              True / False
            </button>
            <button
              onClick={() => setActiveSection('mcq')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                activeSection === 'mcq' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Multiple Choice
            </button>
          </div>
        </div>

        {/* Excluded notice for Lab 10 */}
        {activeLab === 10 && excludedLabQuestions.length > 0 && (
          <div className="p-3 bg-rose-950/30 border border-rose-800/80 rounded-xl text-rose-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>
              {excludedLabQuestions.length} image upload questions from Lab 10 are marked <strong>EXCLUDED FROM FINAL EXAM</strong> per the professor instructions and separated from this exam review view.
            </span>
          </div>
        )}
      </div>

      {/* Lab Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            onStatusChange={onStatusChange}
            currentStatus={userProgress[q.id]}
          />
        ))}
      </div>
    </div>
  );
}
