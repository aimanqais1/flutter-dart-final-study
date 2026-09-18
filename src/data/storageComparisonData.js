// Lecture 9 Local Storage In-Depth Comparison Matrix
// Based strictly on Dr. Ruqaih Salman's Lecture 9, Summary 9, and Lab 9

export const storageComparisonData = [
  {
    id: "sqlite",
    name: "SQLite Database",
    nameAr: "قاعدة بيانات SQLite العلائقية",
    plugin: "sqflite + path",
    dataShape: "Relational tables with rows and columns (Typed schemas)",
    dataShapeAr: "جداول علائقية بصفوف وأعمدة ومخطط محدد الأنواع",
    storageType: "Structured relational database file (.db)",
    storageTypeAr: "ملف قاعدة بيانات علائقية مهيكلة (.db)",
    bestFor: "Large datasets, complex relational queries, sorting, filtering, Dog/Fido CRUD operations",
    bestForAr: "مجموعات البيانات الكبيرة، الاستعلامات المعقدة والفرز والفلترة، وعمليات CRUD متعددة السجلات",
    queryCapabilities: "Rich SQL queries (SELECT, WHERE, ORDER BY, GROUP BY, JOIN, Transactions)",
    queryCapabilitiesAr: "استعلامات SQL متقدمة كاملة مع شروط وترتيب ومعاملات",
    performance: "Fast indexed queries, highly optimized for large volume reads and writes",
    performanceAr: "أداء فائق مع الفهارس، ومثالي جداً للكميات الكبيرة من البيانات",
    persistenceScope: "Survives app restarts and process kills; cleared on app uninstall",
    persistenceScopeAr: "تبقى البيانات بعد إغلاق التطبيق وإنهاء المعالج؛ تُمسح فقط عند إلغاء التثبيت",
    securityNote: "Unencrypted by default; standard app private storage sandbox",
    securityNoteAr: "غير مشفرة افتراضياً؛ محمية فقط ضمن مساحة التطبيق الخاصة بالنظام",
    pros: [
      "Full SQL query flexibility",
      "Handles thousands of rows efficiently",
      "Atomic transactions prevent data corruption",
      "Supports schema migrations via version & onUpgrade"
    ],
    prosAr: [
      "مرونة استعلامات SQL الكاملة",
      "معالجة آلاف الصفوف بكفاءة عالية",
      "دعم المعاملات الذرية (Transactions) لمنع تلف البيانات",
      "دعم ترقية المخطط عبر رقم الإصدار ودالة onUpgrade"
    ],
    cons: [
      "Requires schema setup and model mapping (toMap / fromMap)",
      "Higher setup complexity than key-value preferences",
      "Requires platform plugin implementation"
    ],
    consAr: [
      "تتطلب إعداد مسبق للجداول ونماذج البيانات (toMap / fromMap)",
      "أكثر تعقيداً في الإعداد مقارنة بالتخزين البسيط",
      "تعتمد على حزمة برمجية خارجية sqflite"
    ],
    codeSnippet: `// 1. Open Database & Create Table
final database = openDatabase(
  join(await getDatabasesPath(), 'doggie_database.db'),
  onCreate: (db, version) {
    return db.execute(
      'CREATE TABLE dogs(id INTEGER PRIMARY KEY, name TEXT, age INTEGER)',
    );
  },
  version: 1,
);

// 2. Insert with ConflictAlgorithm
Future<void> insertDog(Dog dog) async {
  final db = await database;
  await db.insert(
    'dogs',
    dog.toMap(),
    conflictAlgorithm: ConflictAlgorithm.replace,
  );
}

// 3. Query All Dogs
Future<List<Dog>> dogs() async {
  final db = await database;
  final List<Map<String, dynamic>> maps = await db.query('dogs');
  return List.generate(maps.length, (i) {
    return Dog(id: maps[i]['id'], name: maps[i]['name'], age: maps[i]['age']);
  });
}`
  },
  {
    id: "shared_preferences",
    name: "SharedPreferences (Classic)",
    nameAr: "التفضيلات المشتركة (الكلاسيكية)",
    plugin: "shared_preferences",
    dataShape: "Key-Value pairs (String keys mapping to primitive values)",
    dataShapeAr: "أزواج مفتاح وقيمة (مفاتيح نصية ترتبط بقيم أولية بسيطة)",
    storageType: "XML on Android (SharedPreferences), Plist on iOS (NSUserDefaults)",
    storageTypeAr: "ملف XML على أندرويد وملف Plist على iOS",
    bestFor: "User settings, theme mode (dark/light), login flags, auth tokens, small scalar settings",
    bestForAr: "إعدادات المستخدم، المظهر (داكن/فاتح)، حالة تسجيل الدخول، والرموز البسيطة",
    queryCapabilities: "Direct key lookup only (no SQL, no filtering, no sorting)",
    queryCapabilitiesAr: "البحث المباشر عبر المفتاح فقط (لا يدعم استعلامات SQL أو الفرز)",
    performance: "Loads all keys into memory at startup; fast in-memory reads, async disk writes",
    performanceAr: "تحميل جميع المفاتيح في الذاكرة عند البدء؛ قراءة سريعة جداً وكتابة غير متزامنة",
    persistenceScope: "Survives app restarts and process kills; cleared on app uninstall or data clear",
    persistenceScopeAr: "تبقى بعد إعادة تشغيل التطبيق وإنهاء المعالج؛ تُحذف عند مسح بيانات التطبيق",
    securityNote: "Plaintext storage. NEVER store unencrypted passwords or sensitive user credentials!",
    securityNoteAr: "تخزين بنص صريح. احذر: لا تخزن كلمات المرور الحساسة فيها أبداً!",
    pros: [
      "Zero boilerplate setup (no database schemas or migrations)",
      "Simple synchronous/async getter methods (getString, getBool, getInt)",
      "Ideal for quick app state flags"
    ],
    prosAr: [
      "سهولة فائقة دون الحاجة لإنشاء جداول أو ترقيات",
      "دوال قراءة وكتابة بسيطة ومباشرة (getString, getBool)",
      "مثالية لإعدادات التطبيق السريعة"
    ],
    cons: [
      "Only supports primitives (int, double, bool, String, List<String>)",
      "Cannot query, filter, or sort records",
      "Not designed for storing large datasets or lists of complex objects"
    ],
    consAr: [
      "تدعم فقط الأنواع الأولية البسيطة وقوائم النصوص",
      "لا يمكن البحث المتقدم أو الفرز داخل البيانات",
      "غير مناسبة إطلاقاً للمجموعات الكبيرة من البيانات"
    ],
    codeSnippet: `// 1. Obtain instance
final prefs = await SharedPreferences.getInstance();

// 2. Write primitive values
await prefs.setString('username', 'Ruqaih');
await prefs.setBool('isDarkMode', true);
await prefs.setInt('counter', 10);

// 3. Read values (nullable or with fallback)
final String? user = prefs.getString('username');
final bool isDark = prefs.getBool('isDarkMode') ?? false;

// 4. Remove or Clear
await prefs.remove('username');
await prefs.clear();`
  },
  {
    id: "shared_preferences_async",
    name: "SharedPreferencesAsync & Cache",
    nameAr: "SharedPreferencesAsync مع التخزين المؤقت",
    plugin: "shared_preferences (modern API)",
    dataShape: "Key-Value pairs with asynchronous non-blocking platform calls",
    dataShapeAr: "أزواج مفتاح وقيمة مع استدعاءات غير متزامنة غير حاجزة",
    storageType: "Direct asynchronous platform store backed by in-memory cache",
    storageTypeAr: "تخزين مباشر غير متزامن مدعوم بذاكرة كاش سريعة",
    bestFor: "Modern Flutter apps requiring non-blocking asynchronous preferences with selective caching",
    bestForAr: "تطبيقات فلاتر الحديثة التي تتطلب وصولاً غير متزامن لتفادي حظر الخيط الرئيسي",
    queryCapabilities: "Direct key lookup with asynchronous Future returns",
    queryCapabilitiesAr: "استرجاع عبر المفتاح بصيغة Future غير حاجزة",
    performance: "Eliminates main-thread blocking startup lag; high responsiveness",
    performanceAr: "تتخلص من تأخير بدء التشغيل على الخيط الرئيسي وتوفر استجابة عالية",
    persistenceScope: "Survives app restarts and process kills",
    persistenceScopeAr: "تبقى بعد إعادة التشغيل وإنهاء المعالج",
    securityNote: "Plaintext storage sandbox; not encrypted for passwords",
    securityNoteAr: "تخزين صريح غير مشفر",
    pros: [
      "Modern architecture aligned with Flutter 3.44+ best practices",
      "Does not block startup waiting for entire preferences file to load",
      "Explicit caching strategies with SharedPreferencesWithCache"
    ],
    prosAr: [
      "معمارية حديثة تتوافق مع معايير فلاتر الحديثة",
      "لا تؤخر بدء تشغيل التطبيق بقراءة كامل الملف مقدماً",
      "إمكانية تخصيص الكاش للقيم الأكثر استخداماً"
    ],
    cons: [
      "Requires await for reading values in pure Async mode",
      "Still limited to primitive key-value data shapes"
    ],
    consAr: [
      "تتطلب await لقراءة القيم في الوضع غير المتزامن",
      "محدودة بنفس الأنواع الأولية البسيطة"
    ],
    codeSnippet: `// 1. Using modern SharedPreferencesAsync
final prefsAsync = SharedPreferencesAsync();

// 2. Save value asynchronously
await prefsAsync.setString('user_token', 'xyz_789');

// 3. Read value asynchronously
final String? token = await prefsAsync.getString('user_token');

// 4. SharedPreferencesWithCache for synchronous fast cached reads
final prefsCache = await SharedPreferencesWithCache.create(
  cacheOptions: const SharedPreferencesWithCacheOptions(
    allowList: <String>{'user_token', 'app_theme'},
  ),
);
final String? cachedToken = prefsCache.getString('user_token');`
  },
  {
    id: "text_files",
    name: "Text File Storage",
    nameAr: "تخزين الملفات النصية",
    plugin: "dart:io + path_provider",
    dataShape: "Unstructured plain text / raw string data",
    dataShapeAr: "نصوص صريحة وسلاسل نصية غير مهيكلة",
    storageType: "Plain text file (.txt) in App Documents or Temp directory",
    storageTypeAr: "ملف نصي عادي (.txt) في مجلد المستندات أو المؤقت",
    bestFor: "Logs, downloaded text, raw notes, export files, offline articles",
    bestForAr: "سجلات التشغيل (Logs)، النصوص المحملة، الملاحظات الخام، والمقالات",
    queryCapabilities: "No query capabilities; entire file must be read or written at once",
    queryCapabilitiesAr: "لا توجد استعلامات؛ يجب قراءة أو كتابة كامل الملف دفعة واحدة",
    performance: "Direct disk I/O; fast for small to medium text files",
    performanceAr: "قراءة وكتابة مباشرة وسريعة للملفات الصغيرة والمتوسطة",
    persistenceScope: "Survives app restarts; Documents directory persists permanently until uninstall",
    persistenceScopeAr: "تبقى بشكل دائم في مجلد المستندات حتى إلغاء التثبيت",
    securityNote: "Stored in sandbox; no built-in encryption",
    securityNoteAr: "محفوظة داخل مجلد التطبيق دون تشفير مدمج",
    pros: [
      "Universal file format (.txt) readable on any system",
      "Very simple API: readAsString() & writeAsString()",
      "Does not require a database engine"
    ],
    prosAr: [
      "صيغة نصية قياسية عالمية مدعومة في كل مكان",
      "دوال برمجية مباشرة: readAsString و writeAsString",
      "لا تتطلب محرك قواعد بيانات"
    ],
    cons: [
      "Updating a single line requires re-writing the whole file",
      "No indexing, searching, or structured queries",
      "dart:io does not run on Flutter Web"
    ],
    consAr: [
      "تعديل سطر واحد يتطلب إعادة كتابة كامل الملف",
      "غياب الفهارس والبحث الداخلي المنظم",
      "مكتبة dart:io لا تعمل على متصفح الويب (Web)"
    ],
    codeSnippet: `// 1. Get Documents directory path
Future<String> get _localPath async {
  final directory = await getApplicationDocumentsDirectory();
  return directory.path;
}

// 2. Reference the file
Future<File> get _localFile async {
  final path = await _localPath;
  return File('$path/counter.txt');
}

// 3. Write text
Future<File> writeCounter(int counter) async {
  final file = await _localFile;
  return file.writeAsString('$counter');
}

// 4. Read text
Future<int> readCounter() async {
  try {
    final file = await _localFile;
    final contents = await file.readAsString();
    return int.parse(contents);
  } catch (e) {
    return 0; // Return fallback on first run
  }
}`
  },
  {
    id: "json_files",
    name: "JSON File Persistence",
    nameAr: "تخزين ملفات JSON محلياً",
    plugin: "dart:io + path_provider + dart:convert",
    dataShape: "Structured trees / serialized objects, Maps, and Lists",
    dataShapeAr: "شجرة بيانات مهيكلة، كائنات محولة، وقوائم وخرائط",
    storageType: "Structured text file (.json) with serialized JSON content",
    storageTypeAr: "ملف نصي مهيكل (.json) يحتوي على بيانات JSON مجمعة",
    bestFor: "Nested configurations, offline catalog cache, caching API responses locally, structured document models",
    bestForAr: "الإعدادات المتداخلة، كاش استجابات الـ API، والكتالوجات المحلية",
    queryCapabilities: "Requires deserializing entire JSON into memory before filtering with Dart collection methods",
    queryCapabilitiesAr: "يتطلب قراءة الملف بالكامل للذاكرة ثم التصفية عبر دوال القوائم في دارت",
    performance: "Good for moderate data; overhead increases with file size during JSON serialization/parsing",
    performanceAr: "جيد للبيانات المتوسطة؛ وتزداد التكلفة عند كبر حجم الملف والتحويل",
    persistenceScope: "Survives app restarts and device reboots",
    persistenceScopeAr: "تبقى بعد إعادة تشغيل التطبيق والجهاز",
    securityNote: "Plaintext unless custom encrypted before write",
    securityNoteAr: "نص صريح غير مشفر",
    pros: [
      "Human-readable standard format interoperable with web APIs",
      "Supports complex nested structures (lists of maps, objects)",
      "Simple mapping with jsonEncode() and jsonDecode()"
    ],
    prosAr: [
      "صيغة قياسية مفهومة ومتوافقة مع خوادم الويب",
      "تدعم الهياكل المعقدة والمتداخلة (قوائم من الخرائط والكائنات)",
      "سهولة التحويل باستخدام jsonEncode و jsonDecode"
    ],
    cons: [
      "Entire JSON payload must be parsed into memory at once",
      "Cannot update a single record without re-encoding the entire structure",
      "Slower than SQLite indexed queries for large collections"
    ],
    consAr: [
      "يجب تحميل وتحليل كامل ملف الـ JSON في الذاكرة",
      "لا يمكن تعديل عنصر مفرد دون إعادة كتابة الهيكل كاملاً",
      "أبطأ بكثير من SQLite عند كبر حجم البيانات"
    ],
    codeSnippet: `// 1. Serialize Dart Map to JSON and Save
Future<void> saveUserProfile(Map<String, dynamic> profile) async {
  final dir = await getApplicationDocumentsDirectory();
  final file = File('\${dir.path}/user_profile.json');
  final jsonString = jsonEncode(profile);
  await file.writeAsString(jsonString);
}

// 2. Read and Deserialize JSON back to Dart Map
Future<Map<String, dynamic>> loadUserProfile() async {
  try {
    final dir = await getApplicationDocumentsDirectory();
    final file = File('\${dir.path}/user_profile.json');
    if (!await file.exists()) return {};
    final jsonString = await file.readAsString();
    return jsonDecode(jsonString) as Map<String, dynamic>;
  } catch (e) {
    return {};
  }
}`
  }
];

export const storageComparisonSummaryTable = {
  headers: ["Feature / المعيار", "SQLite (sqflite)", "SharedPreferences", "SharedPreferencesAsync", "Text Files", "JSON Files"],
  rows: [
    {
      featureEn: "Data Format",
      featureAr: "صيغة البيانات",
      sqlite: "Relational Tables",
      sharedPrefs: "Key-Value Primitives",
      sharedPrefsAsync: "Key-Value Primitives",
      textFiles: "Plain text",
      jsonFiles: "Serialized JSON String"
    },
    {
      featureEn: "Best Data Size",
      featureAr: "حجم البيانات الأنسب",
      sqlite: "Large / Complex (> 1000 items)",
      sharedPrefs: "Small scalar settings (< 100 keys)",
      sharedPrefsAsync: "Small scalar settings",
      textFiles: "Small to Medium text",
      jsonFiles: "Medium structured documents"
    },
    {
      featureEn: "Query / Search",
      featureAr: "الاستعلام والبحث",
      sqlite: "Full SQL (WHERE, JOIN, ORDER)",
      sharedPrefs: "Key lookup only",
      sharedPrefsAsync: "Key lookup only",
      textFiles: "No internal search",
      jsonFiles: "In-memory filter after read"
    },
    {
      featureEn: "Schema Migrations",
      featureAr: "ترقية المخطط",
      sqlite: "Supported (version + onUpgrade)",
      sharedPrefs: "Not supported",
      sharedPrefsAsync: "Not supported",
      textFiles: "Not applicable",
      jsonFiles: "Manual migration in Dart code"
    },
    {
      featureEn: "Web Support",
      featureAr: "دعم الويب",
      sqlite: "Needs special web sqlite wasm",
      sharedPrefs: "Yes (localStorage)",
      sharedPrefsAsync: "Yes (localStorage)",
      textFiles: "No (dart:io not on web)",
      jsonFiles: "No (dart:io not on web)"
    },
    {
      featureEn: "Password Safety",
      featureAr: "تخزين كلمات المرور",
      sqlite: "Not encrypted by default",
      sharedPrefs: "UNSAFE (Plaintext)",
      sharedPrefsAsync: "UNSAFE (Plaintext)",
      textFiles: "UNSAFE (Plaintext)",
      jsonFiles: "UNSAFE (Plaintext)"
    }
  ]
};
