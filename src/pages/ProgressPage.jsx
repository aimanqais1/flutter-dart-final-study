import React from 'react';
import { CheckSquare, CheckCircle2, Bookmark, HelpCircle, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { questionsData } from '../data/questionsData';
import QuestionCard from '../components/QuestionCard';

export default function ProgressPage({ userProgress, onStatusChange, onResetProgress, onNavigate }) {
  const reviewedIds = Object.keys(userProgress).filter(id => userProgress[id] === 'reviewed');
  const needReviewIds = Object.keys(userProgress).filter(id => userProgress[id] === 'need_review');
  const importantIds = Object.keys(userProgress).filter(id => userProgress[id] === 'important');

  const total = questionsData.length;
  const progressPercent = Math.min(100, Math.round((reviewedIds.length / total) * 100)) || 0;

  // Breakdown by lecture
  const lectureStats = [7, 8, 9, 10].map(lec => {
    const questionsInLec = questionsData.filter(q => q.lecture === lec);
    const reviewedInLec = questionsInLec.filter(q => userProgress[q.id] === 'reviewed').length;
    const importantInLec = questionsInLec.filter(q => userProgress[q.id] === 'important').length;
    const percent = Math.min(100, Math.round((reviewedInLec / questionsInLec.length) * 100)) || 0;
    return {
      lecture: lec,
      total: questionsInLec.length,
      reviewed: reviewedInLec,
      important: importantInLec,
      percent
    };
  });

  const importantQuestions = questionsData.filter(q => userProgress[q.id] === 'important');
  const needReviewQuestions = questionsData.filter(q => userProgress[q.id] === 'need_review');

  return (
    <div className="space-y-8 animate-fadeIn pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
            <CheckSquare className="w-4 h-4" />
            <span>Personal Revision Tracker | سجل المتابعة والإنجاز الشخصي</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Study Progress & Starred Revision Questions
          </h1>
          <p className="text-xs md:text-sm text-slate-400 font-arabic mt-1">
            تابع نسبة مراجعتك لكل محاضرة واستعرض الأسئلة المهمة التي قمت بتمييزها قبل الاختبار
          </p>
        </div>

        <button
          onClick={onResetProgress}
          className="px-3.5 py-2 rounded-xl bg-slate-850 hover:bg-rose-950 text-slate-400 hover:text-rose-300 border border-slate-750 hover:border-rose-700 text-xs flex items-center gap-1.5 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Progress</span>
        </button>
      </div>

      {/* Overall Progress Gauge */}
      <div className="bg-slate-850 border border-slate-750 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Overall Exam Readiness</h3>
            <span className="text-xs text-slate-400 font-arabic">النسبة الإجمالية للأسئلة التي تمت مراجعتها</span>
          </div>
          <span className="text-2xl font-black font-mono text-emerald-400">{progressPercent}%</span>
        </div>

        <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-750">
          <div
            className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-750">
            <div className="font-mono text-lg font-bold text-emerald-400">{reviewedIds.length}</div>
            <div className="text-slate-400 text-[11px]">Reviewed (تمت مراجعتها)</div>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-750">
            <div className="font-mono text-lg font-bold text-amber-400">{needReviewIds.length}</div>
            <div className="text-slate-400 text-[11px]">Needs Review (بحاجة لإعادة)</div>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-750">
            <div className="font-mono text-lg font-bold text-indigo-400">{importantIds.length}</div>
            <div className="text-slate-400 text-[11px]">Starred Important (مهمة ★)</div>
          </div>
        </div>
      </div>

      {/* Lecture-by-Lecture Progress Cards */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-white">Lecture-by-Lecture Completion</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lectureStats.map(stat => (
            <div
              key={stat.lecture}
              onClick={() => onNavigate(`lecture-${stat.lecture}`)}
              className="cursor-pointer group bg-slate-850 hover:bg-slate-800 border border-slate-750 hover:border-indigo-500 rounded-2xl p-4 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-xs text-indigo-400">Lecture {stat.lecture}</span>
                <span className="font-mono font-bold text-xs text-white">{stat.percent}%</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all"
                  style={{ width: `${stat.percent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{stat.reviewed} of {stat.total} Qs</span>
                {stat.important > 0 && (
                  <span className="text-indigo-300 font-mono">★ {stat.important}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Starred Important Questions List */}
      {importantQuestions.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-indigo-300 font-bold text-base">
            <Bookmark className="w-5 h-5 text-indigo-400" />
            <span>Your Starred Important Questions ({importantQuestions.length})</span>
          </div>
          <div className="space-y-3">
            {importantQuestions.map(q => (
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

      {/* Need Review Questions List */}
      {needReviewQuestions.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-base">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>Questions Needing Review ({needReviewQuestions.length})</span>
          </div>
          <div className="space-y-3">
            {needReviewQuestions.map(q => (
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
    </div>
  );
}
