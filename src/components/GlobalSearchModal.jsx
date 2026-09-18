import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, HelpCircle, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';
import { questionsData } from '../data/questionsData';
import { lecturesData } from '../data/lecturesData';

export default function GlobalSearchModal({ isOpen, onClose, onSelectQuestion, onSelectLecture }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  // Search in Questions
  const matchingQuestions = cleanQ.length >= 2
    ? questionsData.filter(q =>
        q.questionEn.toLowerCase().includes(cleanQ) ||
        (q.questionAr && q.questionAr.toLowerCase().includes(cleanQ)) ||
        q.topic.toLowerCase().includes(cleanQ) ||
        (q.subtopic && q.subtopic.toLowerCase().includes(cleanQ)) ||
        (q.codeSnippet && q.codeSnippet.toLowerCase().includes(cleanQ))
      ).slice(0, 15)
    : [];

  // Search in Lecture Topics
  const matchingTopics = cleanQ.length >= 2
    ? [7, 8, 9, 10].flatMap(lecId => {
        const lec = lecturesData[lecId];
        return (lec.topics || [])
          .filter(t => t.titleEn.toLowerCase().includes(cleanQ) || t.contentEn.toLowerCase().includes(cleanQ))
          .map(t => ({ ...t, lectureId: lecId, lectureTitle: lec.titleEn }));
      }).slice(0, 6)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-700/80 flex items-center gap-3 bg-slate-850">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lectures, topics, functions (e.g. pushReplacement, FutureBuilder, sqflite)..."
            className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-4 overflow-y-auto space-y-4 text-xs">
          {cleanQ.length < 2 ? (
            <div className="py-8 text-center text-slate-500">
              <p>Type at least 2 characters to search across 520+ exam questions and 4 lectures...</p>
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                {['pushReplacement', 'FutureBuilder', 'SharedPreferences', 'sqlite', '10.0.2.2', 'popUntil'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-indigo-300 font-mono text-[11px] border border-slate-700"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Matching Lecture Topics */}
              {matchingTopics.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Lecture Topics ({matchingTopics.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchingTopics.map((top, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onClose();
                          onSelectLecture(top.lectureId);
                        }}
                        className="w-full p-3 rounded-xl bg-slate-850 hover:bg-indigo-950/40 border border-slate-750 hover:border-indigo-600 text-left transition-all flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-white text-xs">{top.titleEn}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{top.lectureTitle}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Questions */}
              {matchingQuestions.length > 0 ? (
                <div>
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Exam Questions ({matchingQuestions.length})
                  </div>
                  <div className="space-y-2">
                    {matchingQuestions.map((q) => (
                      <div
                        key={q.id}
                        onClick={() => {
                          onClose();
                          onSelectQuestion(q);
                        }}
                        className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 hover:border-slate-650 cursor-pointer transition-all space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-bold border border-indigo-800">
                            {q.source}
                          </span>
                          <span className="font-semibold text-slate-400 text-[11px]">{q.topic}</span>
                          {q.examRelevance === 'excluded' && (
                            <span className="text-[10px] px-1.5 rounded bg-rose-950 text-rose-300 border border-rose-800 flex items-center gap-1">
                              <AlertTriangle className="w-2.5 h-2.5" /> Excluded
                            </span>
                          )}
                        </div>
                        <p className="text-slate-200 text-xs line-clamp-2">{q.questionEn}</p>
                        {q.questionAr && (
                          <p className="text-slate-400 font-arabic text-[11px] line-clamp-1 dir-rtl text-right">
                            {q.questionAr}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : matchingTopics.length === 0 && (
                <div className="py-8 text-center text-slate-400">
                  No matching results found for "{query}".
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
