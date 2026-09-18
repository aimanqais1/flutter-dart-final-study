import React, { useState } from 'react';
import { storageComparisonData, storageComparisonSummaryTable } from '../data/storageComparisonData';
import { Database, KeyRound, FileText, Code2, Check, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function StorageMatrix() {
  const [selectedStorageId, setSelectedStorageId] = useState('sqlite');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'matrix'

  const activeItem = storageComparisonData.find(item => item.id === selectedStorageId) || storageComparisonData[0];

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
            <Database className="w-4 h-4" />
            <span>Lecture 9 Interactive Comparison Tool | المحاضرة 9</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Local Storage Decision Matrix & Deep Comparison
          </h3>
          <p className="text-slate-400 text-sm font-arabic mt-1">
            مقارنة تفاعلية شاملة بين حلول التخزين المحلي الخمسة: SQLite و SharedPreferences و SharedPreferencesAsync والملفات النصية و JSON
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700 text-sm">
          <button
            onClick={() => setViewMode('cards')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              viewMode === 'cards'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Detailed Solution Cards
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              viewMode === 'matrix'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Summary Comparison Table
          </button>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <div>
          {/* Storage Method Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {storageComparisonData.map(item => (
              <button
                key={item.id}
                onClick={() => setSelectedStorageId(item.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${
                  selectedStorageId === item.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {item.id === 'sqlite' && <Database className="w-4 h-4" />}
                {(item.id === 'shared_preferences' || item.id === 'shared_preferences_async') && <KeyRound className="w-4 h-4" />}
                {(item.id === 'text_files' || item.id === 'json_files') && <FileText className="w-4 h-4" />}
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Active Solution In-Depth Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Overview & Specs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-white">{activeItem.name}</h4>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono">
                    {activeItem.plugin}
                  </span>
                </div>
                <div className="text-sm font-arabic text-emerald-300 font-semibold mb-3">
                  {activeItem.nameAr}
                </div>

                {/* Specs List */}
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold">Data Shape / طبيعة البيانات:</span>
                    <p className="text-slate-200 mt-0.5">{activeItem.dataShape}</p>
                    <p className="text-slate-400 font-arabic text-[11px] mt-0.5">{activeItem.dataShapeAr}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold">Best Use Case / أفضل استخدام:</span>
                    <p className="text-slate-200 mt-0.5">{activeItem.bestFor}</p>
                    <p className="text-slate-400 font-arabic text-[11px] mt-0.5">{activeItem.bestForAr}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold">Query Capabilities / إمكانيات البحث:</span>
                    <p className="text-slate-200 mt-0.5">{activeItem.queryCapabilities}</p>
                    <p className="text-slate-400 font-arabic text-[11px] mt-0.5">{activeItem.queryCapabilitiesAr}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold">Persistence Scope / دورة الحياة:</span>
                    <p className="text-slate-200 mt-0.5">{activeItem.persistenceScope}</p>
                    <p className="text-slate-400 font-arabic text-[11px] mt-0.5">{activeItem.persistenceScopeAr}</p>
                  </div>
                </div>

                {/* Security Alert Banner */}
                <div className="mt-4 p-3 rounded-lg bg-amber-950/40 border border-amber-800/80 text-amber-200 text-xs flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-amber-300 font-bold mb-0.5">Security Notice / تنبيه الأمان:</strong>
                    <span>{activeItem.securityNote}</span>
                  </div>
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/70 rounded-xl p-4 border border-slate-800">
                  <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Advantages
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeItem.pros.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900/70 rounded-xl p-4 border border-slate-800">
                  <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" /> Limitations
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeItem.cons.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Official Code Implementation */}
            <div className="lg:col-span-6 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold">
                    <Code2 className="w-4 h-4" />
                    <span>Official Course Code: {activeItem.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Dart / Flutter</span>
                </div>

                <pre className="text-xs text-emerald-300 font-mono overflow-x-auto p-2 bg-slate-900/90 rounded-lg border border-slate-800/80 leading-relaxed max-h-[380px]">
                  <code>{activeItem.codeSnippet}</code>
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-arabic">
                💡 نصيحة امتحانية: ركز على أسئلة مقارنة SQLite مع SharedPreferences من حيث الحجم ودعم الاستعلامات وسرعة الأداء.
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Summary Comparison Matrix Table */
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-700 rounded-xl overflow-hidden">
            <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-700 uppercase tracking-wider">
              <tr>
                {storageComparisonSummaryTable.headers.map((h, i) => (
                  <th key={i} className={`p-3.5 ${i > 0 ? 'border-l border-slate-800' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {storageComparisonSummaryTable.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="p-3.5 font-medium text-slate-200">
                    <div>{row.featureEn}</div>
                    <div className="text-slate-400 font-arabic text-[11px] mt-0.5">{row.featureAr}</div>
                  </td>
                  <td className="p-3.5 text-emerald-300 font-mono border-l border-slate-800">{row.sqlite}</td>
                  <td className="p-3.5 text-blue-300 font-mono border-l border-slate-800">{row.sharedPrefs}</td>
                  <td className="p-3.5 text-cyan-300 font-mono border-l border-slate-800">{row.sharedPrefsAsync}</td>
                  <td className="p-3.5 text-amber-300 font-mono border-l border-slate-800">{row.textFiles}</td>
                  <td className="p-3.5 text-purple-300 font-mono border-l border-slate-800">{row.jsonFiles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
