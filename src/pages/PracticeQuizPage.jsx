import React, { useState } from 'react';
import { PlayCircle, RotateCcw, CheckCircle2, XCircle, Award, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { questionsData } from '../data/questionsData';

export default function PracticeQuizPage() {
  const [selectedLecture, setSelectedLecture] = useState('all');
  const [questionCount, setQuestionCount] = useState(10);
  const [quizState, setQuizState] = useState('config'); // 'config' | 'playing' | 'completed'
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);

  // Start Quiz
  const handleStartQuiz = () => {
    // Only pick exam included questions
    let pool = questionsData.filter(q => q.examRelevance === 'included');
    if (selectedLecture !== 'all') {
      pool = pool.filter(q => q.lecture === Number(selectedLecture));
    }

    // Shuffle
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setQuizQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizState('playing');
  };

  const handleSelectAnswer = (ans) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: ans
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setQuizState('completed');
    }
  };

  const currentQ = quizQuestions[currentIndex];

  // Calculate score
  const score = Object.entries(userAnswers).reduce((acc, [idx, ans]) => {
    const q = quizQuestions[Number(idx)];
    if (!q) return acc;
    if (q.type === 'tf') {
      return ans.toLowerCase() === q.correctAnswer.toLowerCase() ? acc + 1 : acc;
    } else {
      return q.correctAnswer.startsWith(ans) ? acc + 1 : acc;
    }
  }, 0);

  return (
    <div className="space-y-6 animate-fadeIn pb-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
          <PlayCircle className="w-4 h-4" />
          <span>Active Recall Exam Simulator | محاكي الاختبار التجريبي</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Timed Exam Practice & Quiz Mode
        </h1>
        <p className="text-xs md:text-sm text-slate-400 font-arabic mt-1">
          اختبر معلوماتك في أسئلة الاختبار الحقيقية مع تقييم فوري وتصحيح تفصيلي للإجابات
        </p>
      </div>

      {quizState === 'config' && (
        <div className="bg-slate-850 border border-slate-750 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Configure Your Practice Session</h3>
            <p className="text-xs text-slate-400">
              Customize the scope and length of your mock quiz. Questions are randomly drawn from authentic Lab worksheets.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Lecture Scope */}
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Select Lecture Scope:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { val: 'all', label: 'All Lectures (7–10)' },
                  { val: '7', label: 'Lecture 7: Navigation' },
                  { val: '8', label: 'Lecture 8: Async' },
                  { val: '9', label: 'Lecture 9: Local Storage' },
                  { val: '10', label: 'Lecture 10: Online API' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => setSelectedLecture(opt.val)}
                    className={`p-3 rounded-xl border text-left font-medium transition-all ${
                      selectedLecture === opt.val
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                        : 'bg-slate-900 border-slate-750 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Count */}
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Number of Questions:</label>
              <div className="flex gap-3">
                {[5, 10, 15, 25].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => setQuestionCount(cnt)}
                    className={`flex-1 py-2.5 rounded-xl border font-bold font-mono text-sm transition-all ${
                      questionCount === cnt
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                        : 'bg-slate-900 border-slate-750 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleStartQuiz}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-[0.99] transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Start Practice Quiz Now</span>
          </button>
        </div>
      )}

      {quizState === 'playing' && currentQ && (
        <div className="space-y-5">
          {/* Quiz Status Bar */}
          <div className="bg-slate-850 border border-slate-750 px-5 py-3 rounded-2xl flex items-center justify-between text-xs">
            <span className="font-mono text-slate-400">
              Question <strong className="text-white">{currentIndex + 1}</strong> of{' '}
              <strong className="text-white">{quizQuestions.length}</strong>
            </span>

            <span className="font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold">
              Lecture {currentQ.lecture} • {currentQ.source}
            </span>
          </div>

          {/* Question Box */}
          <div className="bg-slate-850 border border-slate-750 rounded-3xl p-6 space-y-5 shadow-xl">
            <div>
              <div className="text-base md:text-lg font-bold text-white leading-relaxed">
                {currentQ.questionEn}
              </div>
              <div className="text-xs md:text-sm font-arabic font-medium text-slate-400 mt-2 dir-rtl text-right">
                {currentQ.questionAr}
              </div>
            </div>

            {currentQ.codeSnippet && (
              <pre className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">
                <code>{currentQ.codeSnippet}</code>
              </pre>
            )}

            {/* MCQ Options */}
            {currentQ.type === 'mcq' && currentQ.options && (
              <div className="space-y-2 pt-2">
                {currentQ.options.map(opt => {
                  const selected = userAnswers[currentIndex] === opt.label;
                  const isCorrect = currentQ.correctAnswer.startsWith(opt.label);
                  let optStyle = 'bg-slate-900 border-slate-750 text-slate-200 hover:bg-slate-800';

                  if (showExplanation) {
                    if (isCorrect) optStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                    else if (selected && !isCorrect) optStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    else optStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-50';
                  }

                  return (
                    <button
                      key={opt.label}
                      disabled={showExplanation}
                      onClick={() => handleSelectAnswer(opt.label)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-bold font-mono text-indigo-300">
                          {opt.label}
                        </span>
                        <div>
                          <div>{opt.textEn}</div>
                          {opt.textAr && opt.textAr !== opt.textEn && (
                            <div className="text-[11px] font-arabic text-slate-400 dir-rtl text-right">{opt.textAr}</div>
                          )}
                        </div>
                      </div>
                      {showExplanation && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                      {showExplanation && selected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* TF Options */}
            {currentQ.type === 'tf' && (
              <div className="flex gap-3 pt-2">
                {['True', 'False'].map(tfVal => {
                  const selected = userAnswers[currentIndex] === tfVal;
                  const isCorrect = currentQ.correctAnswer.toLowerCase() === tfVal.toLowerCase();
                  let tfStyle = 'bg-slate-900 border-slate-750 text-slate-200 hover:bg-slate-800';

                  if (showExplanation) {
                    if (isCorrect) tfStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                    else if (selected && !isCorrect) tfStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    else tfStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-50';
                  }

                  return (
                    <button
                      key={tfVal}
                      disabled={showExplanation}
                      onClick={() => handleSelectAnswer(tfVal)}
                      className={`flex-1 py-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${tfStyle}`}
                    >
                      <span>{tfVal}</span>
                      <span className="font-arabic text-xs opacity-80">({tfVal === 'True' ? 'صح' : 'خطأ'})</span>
                      {showExplanation && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {showExplanation && selected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Explanation panel when answered */}
            {showExplanation && (
              <div className="p-4 rounded-2xl bg-slate-900 border border-indigo-900/60 text-xs space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400 font-semibold">Answer:</span>
                  <span className="font-bold text-emerald-400 font-mono">{currentQ.correctAnswer}</span>
                </div>
                <div className="text-slate-300 leading-relaxed">{currentQ.explanationEn}</div>
                <div className="font-arabic text-slate-400 text-xs dir-rtl text-right pt-1 border-t border-slate-800">
                  {currentQ.explanationAr}
                </div>
              </div>
            )}

            {/* Next Button */}
            {showExplanation && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <span>{currentIndex + 1 < quizQuestions.length ? 'Next Question' : 'Complete Quiz'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {quizState === 'completed' && (
        <div className="bg-slate-850 border border-slate-750 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-3xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/40 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white">Quiz Completed!</h2>
            <p className="text-xs text-slate-400 font-arabic">
              اكتمل الاختبار التجريبي. إليك ملخص نتيجتك:
            </p>
          </div>

          <div className="max-w-xs mx-auto p-4 bg-slate-900 rounded-2xl border border-slate-750 space-y-1">
            <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Final Score</div>
            <div className="text-3xl font-black text-emerald-400 font-mono">
              {score} / {quizQuestions.length}
            </div>
            <div className="text-xs text-slate-400">
              Accuracy: {Math.round((score / quizQuestions.length) * 100)}%
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setQuizState('config')}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Another Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
