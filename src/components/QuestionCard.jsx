import React, { useState } from 'react';
import { CheckCircle2, XCircle, Bookmark, HelpCircle, Eye, EyeOff, AlertTriangle, Sparkles, Check, Share2, Copy } from 'lucide-react';

export default function QuestionCard({ question, onStatusChange, currentStatus }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [copied, setCopied] = useState(false);

  const isExcluded = question.examRelevance === 'excluded';
  const isGenerated = question.isGenerated;

  const handleCopy = () => {
    const text = `${question.questionEn}\n${question.questionAr}\nAnswer: ${question.correctAnswer}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOptionSelect = (label) => {
    setSelectedOption(label);
    setShowAnswer(true);
  };

  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
      isExcluded
        ? 'bg-rose-950/20 border-rose-900/60 shadow-md'
        : 'bg-slate-850/90 hover:bg-slate-800/90 border-slate-750 hover:border-slate-650 shadow-lg'
    }`}>
      {/* Top Metadata Badges Header */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-750 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Lecture & Source Badge */}
          <span className="font-mono font-semibold px-2.5 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800">
            {question.source || `Lecture ${question.lecture}`}
          </span>

          {/* Topic Tag */}
          <span className="font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {question.topic}
          </span>

          {/* Question Type Tag */}
          <span className="uppercase text-[10px] font-bold px-2 py-0.5 rounded bg-slate-700/60 text-slate-400">
            {question.type}
          </span>

          {/* Authority Badge */}
          {isExcluded ? (
            <span className="flex items-center gap-1 font-bold text-[11px] px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700">
              <AlertTriangle className="w-3 h-3" />
              <span>EXCLUDED FROM FINAL EXAM</span>
            </span>
          ) : isGenerated ? (
            <span className="flex items-center gap-1 font-bold text-[11px] px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700">
              <Sparkles className="w-3 h-3" />
              <span>GENERATED PRACTICE</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 font-bold text-[11px] px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
              <Check className="w-3 h-3" />
              <span>ACTUAL LAB QUESTION</span>
            </span>
          )}
        </div>

        {/* Action Controls: Copy & Status Flag */}
        <div className="flex items-center gap-1.5 ml-auto">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Copy question text"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Review Status Selector */}
          <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800 text-[11px]">
            <button
              onClick={() => onStatusChange(question.id, currentStatus === 'reviewed' ? null : 'reviewed')}
              className={`px-2 py-1 rounded font-medium transition-all ${
                currentStatus === 'reviewed'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mark as reviewed"
            >
              Reviewed
            </button>
            <button
              onClick={() => onStatusChange(question.id, currentStatus === 'need_review' ? null : 'need_review')}
              className={`px-2 py-1 rounded font-medium transition-all ${
                currentStatus === 'need_review'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mark as needing review"
            >
              Need Review
            </button>
            <button
              onClick={() => onStatusChange(question.id, currentStatus === 'important' ? null : 'important')}
              className={`px-2 py-1 rounded font-medium transition-all ${
                currentStatus === 'important'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Star as important"
            >
              ★ Important
            </button>
          </div>
        </div>
      </div>

      {/* Question Content Body */}
      <div className="p-5 space-y-4">
        {/* English Question */}
        <div>
          <div className="text-sm md:text-base font-semibold text-slate-100 leading-relaxed">
            {question.questionEn}
          </div>
          {/* Arabic Translation directly underneath */}
          <div dir="rtl" className="text-xs md:text-sm font-arabic font-medium text-slate-400 mt-2 leading-relaxed text-right">
            {question.questionAr}
          </div>
        </div>

        {/* Code Snippet if present */}
        {question.codeSnippet && (
          <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
            <code>{question.codeSnippet}</code>
          </div>
        )}

        {/* Options for MCQ */}
        {question.type === 'mcq' && question.options && (
          <div className="grid grid-cols-1 gap-2 pt-1">
            {question.options.map((opt) => {
              const isSelected = selectedOption === opt.label;
              const isCorrectOpt = question.correctAnswer.startsWith(opt.label);
              let optionClass = 'bg-slate-900/80 border-slate-750 text-slate-200 hover:bg-slate-800 hover:border-slate-600';

              if (showAnswer) {
                if (isCorrectOpt) {
                  optionClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/50';
                } else if (isSelected && !isCorrectOpt) {
                  optionClass = 'bg-rose-950/60 border-rose-500 text-rose-200';
                } else {
                  optionClass = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                }
              } else if (isSelected) {
                optionClass = 'bg-indigo-950/80 border-indigo-500 text-indigo-200';
              }

              return (
                <button
                  key={opt.label}
                  onClick={() => handleOptionSelect(opt.label)}
                  className={`p-3 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${optionClass}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0 text-indigo-300">
                      {opt.label}
                    </span>
                    <div>
                      <div className="text-xs md:text-sm font-medium">{opt.textEn}</div>
                      {opt.textAr && opt.textAr !== opt.textEn && (
                        <div dir="rtl" className="text-xs font-arabic text-slate-400 mt-0.5 text-right">{opt.textAr}</div>
                      )}
                    </div>
                  </div>
                  {showAnswer && isCorrectOpt && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  )}
                  {showAnswer && isSelected && !isCorrectOpt && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Options for True / False */}
        {question.type === 'tf' && (
          <div className="flex gap-3 pt-1">
            {['True', 'False'].map((tfValue) => {
              const isSelected = selectedOption === tfValue;
              const isCorrectTf = question.correctAnswer.toLowerCase() === tfValue.toLowerCase();
              let btnClass = 'bg-slate-900/80 border-slate-750 text-slate-200 hover:bg-slate-800 hover:border-slate-600';

              if (showAnswer) {
                if (isCorrectTf) {
                  btnClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/50';
                } else if (isSelected && !isCorrectTf) {
                  btnClass = 'bg-rose-950/60 border-rose-500 text-rose-200';
                } else {
                  btnClass = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={tfValue}
                  onClick={() => handleOptionSelect(tfValue)}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${btnClass}`}
                >
                  <span>{tfValue}</span>
                  <span className="font-arabic text-xs opacity-75">
                    ({tfValue === 'True' ? 'صح' : 'خطأ'})
                  </span>
                  {showAnswer && isCorrectTf && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  {showAnswer && isSelected && !isCorrectTf && <XCircle className="w-4 h-4 text-rose-400" />}
                </button>
              );
            })}
          </div>
        )}

        {/* Show / Hide Answer Toggle */}
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-indigo-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            {showAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showAnswer ? 'Hide Solution' : 'Reveal Solution & Explanation'}</span>
            <span className="text-[11px] font-arabic text-slate-400">({showAnswer ? 'إخفاء الحل' : 'عرض الحل والشرح'})</span>
          </button>
        </div>

        {/* Solution & Explanation Panel */}
        {showAnswer && (
          <div className="bg-slate-900/95 rounded-xl p-4 border border-indigo-900/50 space-y-3 mt-3 animate-fadeIn text-xs">
            {/* Correct Answer Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                Correct Answer:
              </span>
              <span className="font-bold text-sm text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
                {question.correctAnswer}
              </span>
            </div>

            {/* Correction if statement was False */}
            {question.correctionEn && (
              <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-800/60 text-rose-200">
                <strong className="block text-rose-400 font-bold mb-0.5">Correction / التصحيح المعتمد:</strong>
                <p className="leading-relaxed">{question.correctionEn}</p>
                {question.correctionAr && (
                  <p dir="rtl" className="font-arabic text-slate-400 text-[11px] mt-1 text-right">{question.correctionAr}</p>
                )}
              </div>
            )}

            {/* Detailed Explanation in English and Arabic */}
            <div className="space-y-2">
              <div className="text-slate-300 leading-relaxed">
                <strong className="text-indigo-300 block mb-0.5">Why this answer is correct:</strong>
                {question.explanationEn}
              </div>
              <div dir="rtl" className="text-slate-400 font-arabic text-[11px] leading-relaxed pt-2 border-t border-slate-800/80 text-right">
                <strong className="text-indigo-400 block mb-0.5">الشرح والتوضيح:</strong>
                {question.explanationAr}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
