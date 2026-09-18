import React from 'react';
import { Sparkles, BookOpen, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-sm text-slate-400">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Col 1: Course and Platform */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white text-sm shadow-md shadow-indigo-600/30">
                FL
              </div>
              <span className="font-bold text-white text-sm">Flutter & Dart Final Study</span>
            </div>
            <p className="text-xs text-slate-400 font-arabic leading-relaxed">
              منصة المراجعة الشاملة للاختبار النهائي لمقرر <strong className="text-slate-200">Mobile Application Programming using Flutter and Dart</strong>. تغطي كافة متطلبات المحاضرات والمعامل 7 و 8 و 9 و 10.
            </p>
          </div>

          {/* Col 2: Author and Instructor Attribution */}
          <div className="space-y-3 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>إعداد وتطوير المنصة</span>
            </div>
            <div className="space-y-1">
              <div className="text-base font-black text-white font-mono tracking-wide">
                ENG\AIMAN QAIS
              </div>
              <div className="text-sm font-bold text-amber-400 font-arabic">
                إعداد م/ أيمن قيس
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 font-arabic">
              إشراف وتدريس المنهج: <strong className="text-slate-300">م/ رقية حسين سلمان</strong>
            </div>
          </div>

          {/* Col 3: Exam Scope Summary */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              نطاق الاختبار النهائي المعتمد
            </div>
            <ul className="text-xs space-y-1.5 font-arabic">
              <li className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>المحاضرة 7: التنقل ومكدس المسارات (LIFO)</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>المحاضرة 8: البرمجة غير المتزامنة (Future & Stream)</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>المحاضرة 9: التخزين المحلي (شامل بالكامل)</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>المحاضرة 10: Online REST API (CRUD + PHP/MySQL)</span>
              </li>
              <li className="flex items-center gap-2 text-rose-400">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                <span>استبعاد رفع الصور عبر الـ API رسمياً</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © 2026 Mobile Application Programming using Flutter and Dart • ENG\AIMAN QAIS
          </div>
          <div className="font-arabic text-slate-300">
            إعداد م/ أيمن قيس • مخصص للمراجعة والتحضير للامتحان النهائي
          </div>
        </div>
      </div>
    </footer>
  );
}
