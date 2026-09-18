import React, { useState } from 'react';
import { Layers, Navigation, Database, Globe } from 'lucide-react';
import NavigationVisualizer from '../components/NavigationVisualizer';
import StorageMatrix from '../components/StorageMatrix';
import ApiTester from '../components/ApiTester';

export default function VisualToolsPage() {
  const [activeTool, setActiveTool] = useState('navigation'); // 'navigation' | 'storage' | 'api'

  return (
    <div className="space-y-6 animate-fadeIn pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>Interactive Visual Architecture Simulators | المحاكيات البصرية التفاعلية</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Visual Tools & Runtime Simulators
        </h1>
        <p className="text-xs md:text-sm text-slate-400 font-arabic mt-1">
          أدوات بصرية تفاعلية تحاكي آليات فلاتر المعقدة: مكدس التنقل LIFO، مصفوفة التخزين، ومعمارية استدعاءات CRUD
        </p>
      </div>

      {/* Tool Selector Buttons */}
      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={() => setActiveTool('navigation')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 transition-all ${
            activeTool === 'navigation'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
              : 'bg-slate-850 text-slate-300 hover:bg-slate-800 border border-slate-750'
          }`}
        >
          <Navigation className="w-4 h-4" />
          <span>Lecture 7: Route Stack Simulator</span>
        </button>

        <button
          onClick={() => setActiveTool('storage')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 transition-all ${
            activeTool === 'storage'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
              : 'bg-slate-850 text-slate-300 hover:bg-slate-800 border border-slate-750'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Lecture 9: Local Storage Matrix</span>
        </button>

        <button
          onClick={() => setActiveTool('api')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 transition-all ${
            activeTool === 'api'
              ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
              : 'bg-slate-850 text-slate-300 hover:bg-slate-800 border border-slate-750'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Lecture 10: PHP/MySQL REST CRUD Tester</span>
        </button>
      </div>

      {/* Render Active Tool */}
      <div>
        {activeTool === 'navigation' && <NavigationVisualizer />}
        {activeTool === 'storage' && <StorageMatrix />}
        {activeTool === 'api' && <ApiTester />}
      </div>
    </div>
  );
}
