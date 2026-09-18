import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import GlobalSearchModal from './components/GlobalSearchModal';

import DashboardPage from './pages/DashboardPage';
import FinalExamFocusPage from './pages/FinalExamFocusPage';
import LectureDetailPage from './pages/LectureDetailPage';
import LabsOverviewPage from './pages/LabsOverviewPage';
import QuestionBankPage from './pages/QuestionBankPage';
import PracticeQuizPage from './pages/PracticeQuizPage';
import VisualToolsPage from './pages/VisualToolsPage';
import ProgressPage from './pages/ProgressPage';

import { questionsData } from './data/questionsData';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // LocalStorage progress state
  const [userProgress, setUserProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('flutter_exam_progress_2028');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('flutter_exam_progress_2028', JSON.stringify(userProgress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [userProgress]);

  const handleStatusChange = (questionId, newStatus) => {
    setUserProgress(prev => {
      const updated = { ...prev };
      if (!newStatus) {
        delete updated[questionId];
      } else {
        updated[questionId] = newStatus;
      }
      return updated;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all your study progress?')) {
      setUserProgress({});
      try {
        localStorage.removeItem('flutter_exam_progress_2028');
      } catch (e) {}
    }
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-925 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white pb-16 lg:pb-0">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigate={handleNavigate}
        currentView={currentView}
        userProgress={userProgress}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main Layout Area */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {/* Responsive Desktop Sidebar */}
        <Sidebar
          currentView={currentView}
          onNavigate={handleNavigate}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Dynamic Page Content Viewport */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden min-w-0">
          {currentView === 'dashboard' && (
            <DashboardPage
              onNavigate={handleNavigate}
              userProgress={userProgress}
              totalQuestionsCount={questionsData.length}
            />
          )}

          {currentView === 'exam-focus' && (
            <FinalExamFocusPage onNavigate={handleNavigate} />
          )}

          {currentView === 'lecture-7' && (
            <LectureDetailPage
              lectureId={7}
              onStatusChange={handleStatusChange}
              userProgress={userProgress}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'lecture-8' && (
            <LectureDetailPage
              lectureId={8}
              onStatusChange={handleStatusChange}
              userProgress={userProgress}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'lecture-9' && (
            <LectureDetailPage
              lectureId={9}
              onStatusChange={handleStatusChange}
              userProgress={userProgress}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'lecture-10' && (
            <LectureDetailPage
              lectureId={10}
              onStatusChange={handleStatusChange}
              userProgress={userProgress}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'labs-overview' && (
            <LabsOverviewPage
              onStatusChange={handleStatusChange}
              userProgress={userProgress}
            />
          )}

          {currentView === 'question-bank' && (
            <QuestionBankPage
              onStatusChange={handleStatusChange}
              userProgress={userProgress}
            />
          )}

          {currentView === 'practice-quiz' && (
            <PracticeQuizPage />
          )}

          {currentView === 'visual-tools' && (
            <VisualToolsPage />
          )}

          {currentView === 'progress' && (
            <ProgressPage
              userProgress={userProgress}
              onStatusChange={handleStatusChange}
              onResetProgress={handleResetProgress}
              onNavigate={handleNavigate}
            />
          )}
        </main>
      </div>

      {/* Global Course & Personal Branding Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Global Command-K Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLecture={(lecId) => handleNavigate(`lecture-${lecId}`)}
        onSelectQuestion={(q) => {
          handleNavigate('question-bank');
        }}
      />
    </div>
  );
}
