import React, { useState } from 'react';
import { navigationOperations, routingComparison } from '../data/navigationData';
import { Layers, ArrowRight, RotateCcw, AlertTriangle, CheckCircle2, BookOpen, Compass } from 'lucide-react';

export default function NavigationVisualizer() {
  const [stack, setStack] = useState([
    { id: 'home', name: 'HomeScreen (/)', titleAr: 'الشاشة الرئيسية', color: 'bg-emerald-600' }
  ]);
  const [log, setLog] = useState(['App launched: HomeScreen pushed as initial route (/)']);
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' | 'comparison'

  const availableScreens = [
    { id: 'courses', name: 'CoursesScreen (/courses)', titleAr: 'شاشة المقررات', color: 'bg-blue-600' },
    { id: 'details', name: 'CourseDetailsScreen (/details)', titleAr: 'شاشة تفاصيل المقرر', color: 'bg-purple-600' },
    { id: 'quiz', name: 'QuizScreen (/quiz)', titleAr: 'شاشة الاختبار', color: 'bg-amber-600' },
    { id: 'settings', name: 'SettingsScreen (/settings)', titleAr: 'شاشة الإعدادات', color: 'bg-teal-600' },
    { id: 'login', name: 'LoginScreen (/login)', titleAr: 'شاشة تسجيل الدخول', color: 'bg-rose-600' }
  ];

  const handlePush = (screen) => {
    setStack((prev) => [...prev, screen]);
    setLog((prev) => [
      `Navigator.push(context, MaterialPageRoute(...)) -> Added [${screen.name}] to top of stack.`,
      ...prev.slice(0, 8)
    ]);
  };

  const handlePop = () => {
    if (stack.length <= 1) {
      setLog((prev) => [
        `⚠️ Navigator.pop() blocked: Cannot pop the root screen! In Android this would exit the application.`,
        ...prev.slice(0, 8)
      ]);
      return;
    }
    const popped = stack[stack.length - 1];
    setStack((prev) => prev.slice(0, prev.length - 1));
    setLog((prev) => [
      `Navigator.pop(context) -> Removed [${popped.name}]. Revealed [${stack[stack.length - 2].name}].`,
      ...prev.slice(0, 8)
    ]);
  };

  const handlePushReplacement = (screen) => {
    const replaced = stack[stack.length - 1];
    setStack((prev) => [...prev.slice(0, prev.length - 1), screen]);
    setLog((prev) => [
      `Navigator.pushReplacement() -> Replaced [${replaced.name}] with [${screen.name}]. ${replaced.name} is removed from history.`,
      ...prev.slice(0, 8)
    ]);
  };

  const handlePopUntilHome = () => {
    if (stack.length <= 1) return;
    const countRemoved = stack.length - 1;
    setStack([stack[0]]);
    setLog((prev) => [
      `Navigator.popUntil(context, (route) => route.isFirst) -> Removed ${countRemoved} route(s). Back at root [${stack[0].name}].`,
      ...prev.slice(0, 8)
    ]);
  };

  const handleLogoutReset = () => {
    const loginScreen = availableScreens.find(s => s.id === 'login');
    setStack([loginScreen]);
    setLog((prev) => [
      `Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) => LoginScreen()), (route) => false) -> Entire navigation history destroyed!`,
      ...prev.slice(0, 8)
    ]);
  };

  const handleReset = () => {
    setStack([
      { id: 'home', name: 'HomeScreen (/)', titleAr: 'الشاشة الرئيسية', color: 'bg-emerald-600' }
    ]);
    setLog(['Reset simulator: HomeScreen is the sole route in stack.']);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-1">
            <Compass className="w-4 h-4" />
            <span>Lecture 7 Interactive Learning Tool | المحاضرة 7</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Navigator Route Stack Visualizer & Comparison
          </h3>
          <p className="text-slate-400 text-sm font-arabic mt-1">
            محاكي تفاعلي لمكدس الشاشات والعمليات: push, pop, pushReplacement, popUntil, pushAndRemoveUntil
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700 text-sm">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'simulator'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Stack Simulator
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'comparison'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Anonymous vs Named
          </button>
        </div>
      </div>

      {activeTab === 'simulator' ? (
        <div>
          {/* Main Visualizer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Operations & Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div className="bg-slate-900/70 rounded-xl p-4 border border-slate-700/60">
                <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                  <span>1. Push a Route (إضافة شاشة جديدة إلى المكدس):</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {availableScreens.map((screen) => (
                    <button
                      key={screen.id}
                      onClick={() => handlePush(screen)}
                      className="text-xs font-medium px-3 py-2 rounded-lg bg-slate-800 hover:bg-indigo-600/30 text-slate-200 border border-slate-700 hover:border-indigo-500 transition-all flex items-center gap-1.5"
                    >
                      <span className={`w-2 h-2 rounded-full ${screen.color}`}></span>
                      <span>+ push {screen.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stack Manipulations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handlePop}
                  disabled={stack.length <= 1}
                  className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    stack.length <= 1
                      ? 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed'
                      : 'bg-amber-950/30 border-amber-800/60 hover:border-amber-500 text-amber-200 hover:bg-amber-900/40'
                  }`}
                >
                  <span className="font-mono text-sm font-bold">Navigator.pop()</span>
                  <span className="text-xs text-slate-400 font-arabic mt-1">حذف الشاشة العلوية والرجوع للخلف</span>
                </button>

                <button
                  onClick={() => handlePushReplacement(availableScreens[1])}
                  className="p-3.5 rounded-xl border bg-purple-950/30 border-purple-800/60 hover:border-purple-500 text-purple-200 hover:bg-purple-900/40 text-left transition-all"
                >
                  <span className="font-mono text-sm font-bold">pushReplacement()</span>
                  <span className="text-xs text-slate-400 font-arabic mt-1">استبدال الشاشة الحالية دون حفظها</span>
                </button>

                <button
                  onClick={handlePopUntilHome}
                  disabled={stack.length <= 1}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    stack.length <= 1
                      ? 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed'
                      : 'bg-blue-950/30 border-blue-800/60 hover:border-blue-500 text-blue-200 hover:bg-blue-900/40'
                  }`}
                >
                  <span className="font-mono text-sm font-bold">popUntil(isFirst)</span>
                  <span className="text-xs text-slate-400 font-arabic mt-1">الرجوع دفعة واحدة للشاشة الأولى</span>
                </button>

                <button
                  onClick={handleLogoutReset}
                  className="p-3.5 rounded-xl border bg-rose-950/30 border-rose-800/60 hover:border-rose-500 text-rose-200 hover:bg-rose-900/40 text-left transition-all"
                >
                  <span className="font-mono text-sm font-bold">pushAndRemoveUntil()</span>
                  <span className="text-xs text-slate-400 font-arabic mt-1">تسجيل خروج وتفريغ كامل المكدس</span>
                </button>
              </div>

              {/* Console Log */}
              <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 mb-2 border-b border-slate-800 pb-1.5">
                  <span className="text-indigo-400 font-semibold">Navigator Action Log:</span>
                  <button onClick={handleReset} className="hover:text-white flex items-center gap-1 text-[11px]">
                    <RotateCcw className="w-3 h-3" /> Reset Stack
                  </button>
                </div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {log.map((entry, idx) => (
                    <div key={idx} className={`leading-relaxed ${idx === 0 ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                      &gt; {entry}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Visual Stack Display */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-5 border border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-400" />
                    <span className="font-bold text-white text-sm">Active Route Stack (LIFO)</span>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-950 border border-indigo-700 text-indigo-300 font-mono">
                    Depth: {stack.length}
                  </span>
                </div>

                {/* Stack Visualization */}
                <div className="flex flex-col-reverse gap-2 min-h-[220px] justify-start py-2">
                  {stack.map((route, index) => {
                    const isTop = index === stack.length - 1;
                    const isRoot = index === 0;
                    return (
                      <div
                        key={`${route.id}-${index}`}
                        className={`p-3.5 rounded-xl border transition-all duration-300 relative ${
                          isTop
                            ? `${route.color} text-white shadow-lg shadow-indigo-900/40 ring-2 ring-white/40 translate-y-0 scale-[1.02]`
                            : 'bg-slate-800/90 border-slate-700 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold font-mono text-xs flex items-center gap-1.5">
                              <span>{route.name}</span>
                              {isTop && (
                                <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider font-sans">
                                  Top (Visible)
                                </span>
                              )}
                              {isRoot && (
                                <span className="bg-slate-700/80 text-slate-300 text-[10px] px-1.5 py-0.5 rounded font-sans">
                                  Root
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] opacity-80 font-arabic mt-0.5">
                              {route.titleAr}
                            </div>
                          </div>
                          <span className="font-mono text-xs opacity-60">Index #{index}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  The user currently sees <strong className="text-white">{stack[stack.length - 1].name}</strong>. Pressing Back in Android will pop this screen and reveal Index #{stack.length - 2 >= 0 ? stack.length - 2 : 0}.
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Anonymous vs Named Routing Comparison Table */
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-700 rounded-xl overflow-hidden">
            <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-700 uppercase tracking-wider">
              <tr>
                <th className="p-3.5 w-1/4">Criterion / وجه المقارنة</th>
                <th className="p-3.5 w-3/8 text-indigo-300 border-l border-slate-700 bg-indigo-950/20">
                  Anonymous Routing (التوجيه المجهول)
                </th>
                <th className="p-3.5 w-3/8 text-emerald-300 border-l border-slate-700 bg-emerald-950/20">
                  Named Routing (التوجيه المسمى)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {routingComparison.dimensions.map((dim, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="p-3.5 font-medium text-slate-200">
                    <div>{dim.criterionEn}</div>
                    <div className="text-slate-400 font-arabic text-[11px] mt-0.5">{dim.criterionAr}</div>
                  </td>
                  <td className="p-3.5 text-slate-300 border-l border-slate-800">
                    <div>{dim.anonymous}</div>
                    <div className="text-indigo-400/80 font-arabic text-[11px] mt-1">{dim.anonymousAr}</div>
                  </td>
                  <td className="p-3.5 text-slate-300 border-l border-slate-800">
                    <div>{dim.named}</div>
                    <div className="text-emerald-400/80 font-arabic text-[11px] mt-1">{dim.namedAr}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
