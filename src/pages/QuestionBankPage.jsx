import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  HelpCircle,
  CheckCircle2,
  Bookmark,
  Sparkles,
  AlertTriangle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { questionsData } from '../data/questionsData';
import QuestionCard from '../components/QuestionCard';

export default function QuestionBankPage({ onStatusChange, userProgress }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLecture, setSelectedLecture] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedScope, setSelectedScope] = useState('included'); // 'all' | 'included' | 'excluded'
  const [selectedSourceType, setSelectedSourceType] = useState('all'); // 'all' | 'actual' | 'generated'
  const [selectedStatus, setSelectedStatus] = useState('all'); // 'all' | 'reviewed' | 'need_review' | 'important' | 'unreviewed'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questionsData.filter((q) => {
      // Search text
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesEn = q.questionEn.toLowerCase().includes(query);
        const matchesAr = q.questionAr && q.questionAr.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesCode = q.codeSnippet && q.codeSnippet.toLowerCase().includes(query);
        if (!matchesEn && !matchesAr && !matchesTopic && !matchesCode) return false;
      }

      // Lecture filter
      if (selectedLecture !== 'all' && q.lecture !== Number(selectedLecture)) {
        return false;
      }

      // Type filter
      if (selectedType !== 'all' && q.type !== selectedType) {
        return false;
      }

      // Exam scope filter
      if (selectedScope !== 'all' && q.examRelevance !== selectedScope) {
        return false;
      }

      // Source type filter
      if (selectedSourceType !== 'all' && q.sourceType !== selectedSourceType) {
        return false;
      }

      // Study status filter
      if (selectedStatus !== 'all') {
        const status = userProgress[q.id];
        if (selectedStatus === 'unreviewed' && status) return false;
        if (selectedStatus !== 'unreviewed' && status !== selectedStatus) return false;
      }

      return true;
    });
  }, [searchQuery, selectedLecture, selectedType, selectedScope, selectedSourceType, selectedStatus, userProgress]);

  // Pagination
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage) || 1;
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLecture('all');
    setSelectedType('all');
    setSelectedScope('included');
    setSelectedSourceType('all');
    setSelectedStatus('all');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12 max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Central Exam Repository | المستودع المركزي لأسئلة الاختبار</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Comprehensive Question Bank ({questionsData.length} Total Items)
          </h1>
          <p className="text-xs md:text-sm text-slate-400 font-arabic mt-1">
            بنك أسئلة متكامل يضم كافة أسئلة المعامل الرسمية للأسابيع 7 و 8 و 9 و 10 مصحوبة بالترجمة والحلول والشرح
          </p>
        </div>

        {/* Total match counter */}
        <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-850 px-3.5 py-2 rounded-xl border border-slate-750">
          <span>Found:</span>
          <strong className="text-indigo-400 font-mono text-sm">{filteredQuestions.length}</strong>
          <span>questions</span>
        </div>
      </div>

      {/* Filter Control Center */}
      <div className="bg-slate-850 border border-slate-750 rounded-2xl p-5 space-y-4 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
            <span>Filters & Search (تصفية وبحث الأسئلة)</span>
          </div>
          <button
            onClick={resetFilters}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset Filters
          </button>
        </div>

        {/* Primary Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {[
            { id: 'all', label: 'ALL' },
            { id: 'included', label: 'EXAM SCOPE' },
            { id: '7', label: 'LECTURE 7' },
            { id: '8', label: 'LECTURE 8' },
            { id: '9', label: 'LECTURE 9' },
            { id: '10', label: 'LECTURE 10' }
          ].map(tab => {
            let isActive = false;
            if (tab.id === 'all') isActive = selectedScope === 'all' && selectedLecture === 'all';
            else if (tab.id === 'included') isActive = selectedScope === 'included' && selectedLecture === 'all';
            else isActive = selectedLecture === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'all') {
                    setSelectedScope('all');
                    setSelectedLecture('all');
                  } else if (tab.id === 'included') {
                    setSelectedScope('included');
                    setSelectedLecture('all');
                  } else {
                    // For specific lectures, default to exam scope included unless they manually change it later
                    setSelectedScope('included');
                    setSelectedLecture(tab.id);
                  }
                  setCurrentPage(1);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-900 border border-slate-750 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Input Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Filter questions by keywords (e.g. pushReplacement, sqlite, FutureBuilder)..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Filter Dropdowns / Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          {/* Lecture Filter */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1 text-[11px]">Lecture (المحاضرة):</label>
            <select
              value={selectedLecture}
              onChange={(e) => {
                setSelectedLecture(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-slate-200 focus:outline-none"
            >
              <option value="all">All Lectures (7–10)</option>
              <option value="7">Lecture 7: Navigation</option>
              <option value="8">Lecture 8: Async Programming</option>
              <option value="9">Lecture 9: Local Storage</option>
              <option value="10">Lecture 10: Online REST API</option>
            </select>
          </div>

          {/* Question Type Filter */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1 text-[11px]">Question Type (النوع):</label>
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-slate-200 focus:outline-none"
            >
              <option value="all">All Question Types</option>
              <option value="tf">True / False (صح أو خطأ)</option>
              <option value="mcq">Multiple Choice (اختيارات)</option>
            </select>
          </div>

          {/* Exam Scope Filter */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1 text-[11px]">Exam Scope (النطاق):</label>
            <select
              value={selectedScope}
              onChange={(e) => {
                setSelectedScope(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-slate-200 focus:outline-none"
            >
              <option value="included">Exam Focus Only (المقرر فقط)</option>
              <option value="all">All Content (Include Excluded)</option>
              <option value="excluded">Excluded Image API Only</option>
            </select>
          </div>

          {/* Source Filter */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1 text-[11px]">Source (المصدر):</label>
            <select
              value={selectedSourceType}
              onChange={(e) => {
                setSelectedSourceType(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-slate-200 focus:outline-none"
            >
              <option value="all">All Sources</option>
              <option value="actual">Actual Lab Questions</option>
              <option value="generated">Generated Practice</option>
            </select>
          </div>

          {/* Review Status Filter */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1 text-[11px]">My Status (حالة المراجعة):</label>
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-2 text-slate-200 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="reviewed">Reviewed (تمت المراجعة)</option>
              <option value="need_review">Need Review (بحاجة لمراجعة)</option>
              <option value="important">Important (مهم جداً ★)</option>
              <option value="unreviewed">Unreviewed (لم يُراجع)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {paginatedQuestions.length > 0 ? (
          paginatedQuestions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              onStatusChange={onStatusChange}
              currentStatus={userProgress[q.id]}
            />
          ))
        ) : (
          <div className="bg-slate-850 border border-slate-750 rounded-2xl p-12 text-center text-slate-400 space-y-3">
            <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
            <div className="text-base font-bold text-white">No questions match your current filter</div>
            <p className="text-xs text-slate-400 font-arabic">
              لا توجد أسئلة تطابق معايير الفلترة المحددة. جرب إعادة تعيين الفلاتر.
            </p>
            <button
              onClick={resetFilters}
              className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-slate-850 border border-slate-750 px-4 py-3 rounded-2xl text-xs">
          <div className="text-slate-400 font-medium">
            Page <strong className="text-white font-mono">{currentPage}</strong> of{' '}
            <strong className="text-white font-mono">{totalPages}</strong> (
            {filteredQuestions.length} questions)
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 py-1 font-mono text-slate-300">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
