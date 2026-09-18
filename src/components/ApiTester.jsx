import React, { useState } from 'react';
import { Globe, Send, Database, Server, AlertTriangle, ShieldCheck, CheckCircle, Code2, ArrowRight } from 'lucide-react';

export default function ApiTester() {
  const [selectedMethod, setSelectedMethod] = useState('GET');
  const [selectedItem, setSelectedItem] = useState({ id: '1', itemname: 'Nike Air Max', itemcode: 'NK-900', price: '120' });
  const [responseOutput, setResponseOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock server items
  const [itemsList, setItemsList] = useState([
    { id: '1', itemname: 'Nike Air Max', itemcode: 'NK-900', price: '120' },
    { id: '2', itemname: 'Adidas Ultraboost', itemcode: 'AD-500', price: '140' },
    { id: '3', itemname: 'Puma Velocity', itemcode: 'PM-300', price: '95' }
  ]);

  const endpoints = {
    GET: {
      url: 'http://10.0.2.2/flutter_course_api/getdata.php',
      method: 'GET',
      action: 'Read / View All Records',
      actionAr: 'قراءة واسترجاع جميع المنتجات',
      httpCode: 200,
      phpScript: `// getdata.php
include 'conn.php';
$queryResult = $connect->query("SELECT * FROM tb_item");
$result = array();
while ($fetchData = $queryResult->fetch_assoc()) {
    $result[] = $fetchData;
}
echo json_encode($result);`
    },
    POST: {
      url: 'http://10.0.2.2/flutter_course_api/adddata.php',
      method: 'POST',
      action: 'Insert / Create New Item',
      actionAr: 'إضافة منتج جديد إلى قاعدة البيانات',
      httpCode: 201,
      phpScript: `// adddata.php
include 'conn.php';
$itemname = $_POST['itemname'];
$itemcode = $_POST['itemcode'];
$price = $_POST['price'];

$connect->query("INSERT INTO tb_item (itemname, itemcode, price) 
                 VALUES ('$itemname', '$itemcode', '$price')");
echo json_encode(["status" => "success", "message" => "Item added"]);`
    },
    PUT: {
      url: 'http://10.0.2.2/flutter_course_api/editdata.php',
      method: 'POST', // standard PHP x-www-form-urlencoded
      action: 'Update / Edit Existing Record',
      actionAr: 'تعديل وتحديث بيانات منتج محدد',
      httpCode: 200,
      phpScript: `// editdata.php
include 'conn.php';
$id = $_POST['id'];
$itemname = $_POST['itemname'];
$itemcode = $_POST['itemcode'];
$price = $_POST['price'];

$connect->query("UPDATE tb_item SET itemname='$itemname', itemcode='$itemcode', price='$price' 
                 WHERE id=$id");
echo json_encode(["status" => "success", "message" => "Item updated"]);`
    },
    DELETE: {
      url: 'http://10.0.2.2/flutter_course_api/deletedata.php',
      method: 'POST',
      action: 'Delete / Remove Record',
      actionAr: 'حذف منتج من قاعدة البيانات عبر المعرف ID',
      httpCode: 200,
      phpScript: `// deletedata.php
include 'conn.php';
$id = $_POST['id'];
$connect->query("DELETE FROM tb_item WHERE id=$id");
echo json_encode(["status" => "success", "message" => "Item deleted"]);`
    }
  };

  const handleExecuteRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (selectedMethod === 'GET') {
        setResponseOutput({
          status: 200,
          statusText: '200 OK',
          timeMs: 42,
          data: itemsList
        });
      } else if (selectedMethod === 'POST') {
        const newItem = {
          id: String(itemsList.length + 1),
          itemname: selectedItem.itemname || 'New Jordan Retro',
          itemcode: selectedItem.itemcode || 'JD-100',
          price: selectedItem.price || '160'
        };
        setItemsList(prev => [...prev, newItem]);
        setResponseOutput({
          status: 201,
          statusText: '201 Created',
          timeMs: 65,
          data: { status: 'success', message: 'Item inserted successfully', item: newItem }
        });
      } else if (selectedMethod === 'PUT') {
        setItemsList(prev => prev.map(item => item.id === selectedItem.id ? { ...item, ...selectedItem } : item));
        setResponseOutput({
          status: 200,
          statusText: '200 OK',
          timeMs: 50,
          data: { status: 'success', message: `Item ID ${selectedItem.id} updated successfully` }
        });
      } else if (selectedMethod === 'DELETE') {
        setItemsList(prev => prev.filter(item => item.id !== selectedItem.id));
        setResponseOutput({
          status: 200,
          statusText: '200 OK',
          timeMs: 38,
          data: { status: 'success', message: `Item ID ${selectedItem.id} deleted successfully` }
        });
      }
    }, 400);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-1">
            <Globe className="w-4 h-4" />
            <span>Lecture 10 Interactive CRUD Simulator | المحاضرة 10</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            REST API & PHP/MySQL CRUD Architecture Visualizer
          </h3>
          <p className="text-slate-400 text-sm font-arabic mt-1">
            محاكي تفاعلي لعمليات CRUD الأربع (إضافة، قراءة، تعديل، حذف) مع سكربتات PHP وقاعدة بيانات MySQL
          </p>
        </div>

        {/* Excluded Reminder Banner */}
        <div className="bg-rose-950/40 border border-rose-800/80 px-3.5 py-2 rounded-xl text-rose-300 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>
            <strong>Reminder:</strong> API with Images is <span className="underline font-bold">EXCLUDED</span> from exam!
          </span>
        </div>
      </div>

      {/* 4-Layer Architecture Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
        <div className="p-3 bg-slate-900/90 rounded-xl border border-indigo-700/60 text-center">
          <div className="text-indigo-400 font-bold text-sm mb-1">1. Flutter App</div>
          <div className="text-slate-400 text-[11px]">http.get() / http.post()</div>
          <div className="text-slate-500 font-arabic text-[10px] mt-1">تطبيق العميل في فلاتر</div>
        </div>

        <div className="p-3 bg-slate-900/90 rounded-xl border border-cyan-700/60 text-center">
          <div className="text-cyan-400 font-bold text-sm mb-1">2. Network (10.0.2.2)</div>
          <div className="text-slate-400 text-[11px]">Emulator Loopback Alias</div>
          <div className="text-slate-500 font-arabic text-[10px] mt-1">بوابة شبكة المحاكي</div>
        </div>

        <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-700/60 text-center">
          <div className="text-emerald-400 font-bold text-sm mb-1">3. PHP REST API</div>
          <div className="text-slate-400 text-[11px]">Apache / XAMPP htdocs</div>
          <div className="text-slate-500 font-arabic text-[10px] mt-1">سكربتات الخادم PHP</div>
        </div>

        <div className="p-3 bg-slate-900/90 rounded-xl border border-amber-700/60 text-center">
          <div className="text-amber-400 font-bold text-sm mb-1">4. MySQL DB</div>
          <div className="text-slate-400 text-[11px]">tb_item Table</div>
          <div className="text-slate-500 font-arabic text-[10px] mt-1">قاعدة بيانات MySQL</div>
        </div>
      </div>

      {/* Method Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: 'GET', label: 'GET (Read / View)', color: 'border-blue-500 bg-blue-950/40 text-blue-300' },
          { key: 'POST', label: 'POST (Create / Insert)', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' },
          { key: 'PUT', label: 'PUT/POST (Update / Edit)', color: 'border-purple-500 bg-purple-950/40 text-purple-300' },
          { key: 'DELETE', label: 'DELETE (Remove)', color: 'border-rose-500 bg-rose-950/40 text-rose-300' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => {
              setSelectedMethod(tab.key);
              setResponseOutput(null);
            }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all border ${
              selectedMethod === tab.key
                ? `${tab.color} ring-2 ring-white/20 shadow-lg`
                : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Simulator Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Request Parameters & Trigger */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-semibold text-slate-300 font-mono">Endpoint Contract:</span>
              <span className="font-mono text-cyan-300">{endpoints[selectedMethod].action}</span>
            </div>

            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 font-bold text-[10px]">
                {endpoints[selectedMethod].method}
              </span>
              <span className="truncate text-cyan-400">{endpoints[selectedMethod].url}</span>
            </div>

            {/* Input fields for POST & PUT & DELETE */}
            {selectedMethod !== 'GET' && (
              <div className="space-y-3 mb-4 text-xs font-mono">
                {(selectedMethod === 'PUT' || selectedMethod === 'DELETE') && (
                  <div>
                    <label className="text-slate-400 block mb-1">Target ID (معرف العنصر):</label>
                    <input
                      type="text"
                      value={selectedItem.id}
                      onChange={e => setSelectedItem({ ...selectedItem, id: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white"
                      placeholder="e.g. 1"
                    />
                  </div>
                )}

                {selectedMethod !== 'DELETE' && (
                  <>
                    <div>
                      <label className="text-slate-400 block mb-1">itemname (اسم المنتج):</label>
                      <input
                        type="text"
                        value={selectedItem.itemname}
                        onChange={e => setSelectedItem({ ...selectedItem, itemname: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-slate-400 block mb-1">itemcode:</label>
                        <input
                          type="text"
                          value={selectedItem.itemcode}
                          onChange={e => setSelectedItem({ ...selectedItem, itemcode: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">price ($):</label>
                        <input
                          type="text"
                          value={selectedItem.price}
                          onChange={e => setSelectedItem({ ...selectedItem, price: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Send Request Button */}
            <button
              onClick={handleExecuteRequest}
              disabled={isLoading}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/40 transition-all"
            >
              {isLoading ? (
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Execute {selectedMethod} Call via 10.0.2.2</span>
                </>
              )}
            </button>
          </div>

          {/* PHP Script Preview */}
          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2 border-b border-slate-800 pb-2">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" /> Backend PHP Script
              </span>
              <span className="text-[11px] text-slate-500">XAMPP htdocs</span>
            </div>
            <pre className="text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
              <code>{endpoints[selectedMethod].phpScript}</code>
            </pre>
          </div>
        </div>

        {/* Right: Response Output & DB State */}
        <div className="lg:col-span-6 space-y-4">
          {/* JSON Response Panel */}
          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs min-h-[220px]">
            <div className="flex items-center justify-between text-slate-400 mb-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" /> Flutter HTTP Response
              </span>
              {responseOutput && (
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 text-[11px] font-bold">
                  HTTP {responseOutput.statusText} ({responseOutput.timeMs}ms)
                </span>
              )}
            </div>

            {responseOutput ? (
              <pre className="text-xs text-emerald-400 overflow-x-auto leading-relaxed max-h-[190px] p-2 bg-slate-900/60 rounded border border-slate-800">
                <code>{JSON.stringify(responseOutput.data, null, 2)}</code>
              </pre>
            ) : (
              <div className="h-32 flex flex-col items-center justify-center text-slate-500 text-xs">
                <span>Click "Execute {selectedMethod} Call" to trigger network simulation</span>
                <span className="text-[11px] font-arabic mt-1">اضغط على زر التنفيذ لمحاكاة إرسال واستقبال بيانات الـ API</span>
              </div>
            )}
          </div>

          {/* Current MySQL Table View */}
          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> Database Table: tb_item
              </span>
              <span className="text-slate-400">Total Rows: {itemsList.length}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-slate-800 rounded">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-2">id</th>
                    <th className="p-2">itemname</th>
                    <th className="p-2">itemcode</th>
                    <th className="p-2">price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {itemsList.map(item => (
                    <tr key={item.id} className="hover:bg-slate-800/50">
                      <td className="p-2 text-indigo-300">{item.id}</td>
                      <td className="p-2 text-slate-200">{item.itemname}</td>
                      <td className="p-2 text-slate-400">{item.itemcode}</td>
                      <td className="p-2 text-emerald-400">${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
