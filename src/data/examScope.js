// Official Final Exam Scope and Doctor Guidance
// Mobil Application Programming using Flutter and Dart
// Department of Information Technology - Level 3
// Instructor: Eng. / Dr. Ruqaih Hussein Salman

export const examScope = {
  generalRules: {
    courseName: "Mobile Application Programming using Flutter and Dart",
    academicYear: "2025-2028",
    instructor: "Eng. / Dr. Ruqaih Hussein Salman",
    authorityHierarchy: [
      "Level 1 — Official Final Exam Scope Announcement (Governs all inclusions/exclusions)",
      "Level 2 — Dr. Ruqaih Salman Summaries 2027–2028 (Instructor emphasis, answer keys, terminology)",
      "Level 3 — Main Lectures 2026 (Core concepts, Dart models, step-by-step code)",
      "Level 4 — Labs 7 to 10 (Practical exercises, worksheets, question formats)"
    ],
    goldenRule: "Use only official course concepts. API with Images is strictly EXCLUDED from the exam."
  },
  lectures: {
    7: {
      id: 7,
      titleEn: "Lecture 7 — Navigation & Routing",
      titleAr: "المحاضرة السابعة — التنقل وتوجيه الشاشات",
      examStatus: "INCLUDED",
      isEntireChapter: false,
      summary: "Focuses heavily on Anonymous Routing vs Named Routing, Navigator Stack mental model, route transitions, argument passing, and stack lifecycle operations.",
      summaryAr: "تركز بشكل أساسي على المقارنة بين التوجيه المجهول والتوجيه المسمى، نموذج مكدس التنقل، تمرير الوسائط، ودوال إدارة مكدس الشاشات.",
      requiredTopics: [
        {
          name: "Anonymous Routing",
          nameAr: "التوجيه المجهول",
          description: "Instantiating routes on the fly using MaterialPageRoute with builder callback directly.",
          descriptionAr: "إنشاء المسارات مباشرة أثناء التشغيل باستخدام MaterialPageRoute مع تمرير دالة builder دون تسجيل اسم مسبق.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Named Routing",
          nameAr: "التوجيه المسمى",
          description: "Registering string-based route paths in MaterialApp.routes map, using initialRoute and Navigator.pushNamed().",
          descriptionAr: "تسجيل المسارات في جدول routes داخل MaterialApp باستخدام أسماء نصية، واستدعاء Navigator.pushNamed().",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Anonymous vs Named Comparison",
          nameAr: "مقارنة التوجيه المجهول مقابل المسمى",
          description: "Differences in coupling, code style, dynamic argument handling, deep linking, and maintainability.",
          descriptionAr: "الفروقات في الترابط، أسلوب الكود، تمرير البيانات، الروابط العميقة، وقابلية التوسع.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Route Stack Mechanics",
          nameAr: "آلية مكدس المسارات (LIFO Stack)",
          description: "Mental model of Navigator as a Last-In-First-Out stack; adding, removing, replacing, and clearing routes.",
          descriptionAr: "فهم Navigator كمكدس (Stack) يدخل آخراً يخرج أولاً؛ عمليات الإضافة والحذف والاستبدال والتفريغ.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Navigator.push()",
          nameAr: "دالة push",
          description: "Pushes a new route onto the stack over the current screen.",
          descriptionAr: "إضافة شاشة جديدة إلى أعلى المكدس فوق الشاشة الحالية.",
          status: "INCLUDED"
        },
        {
          name: "Navigator.pop()",
          nameAr: "دالة pop",
          description: "Removes the topmost route from the stack and returns an optional result to the previous screen.",
          descriptionAr: "إزالة الشاشة العلوية من المكدس مع إمكانية إرجاع نتيجة اختيارية للشاشة السابقة.",
          status: "INCLUDED"
        },
        {
          name: "Navigator.pushReplacement()",
          nameAr: "دالة pushReplacement",
          description: "Replaces the current route on the stack with a new route; back button will not return to the replaced screen (e.g. Login -> Home).",
          descriptionAr: "استبدال الشاشة الحالية بشاشة جديدة؛ زر الرجوع لن يعود للشاشة المستبدلة (مثال: شاشة تسجيل الدخول إلى الرئيسية).",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Navigator.pushNamed()",
          nameAr: "دالة pushNamed",
          description: "Navigates to a route using its pre-registered string route name.",
          descriptionAr: "الانتقال إلى مسار مسجل مسبقاً في جدول المسارات عبر اسمه النصي.",
          status: "INCLUDED"
        },
        {
          name: "Navigator.popUntil()",
          nameAr: "دالة popUntil",
          description: "Pops routes one by one until a specific predicate condition is met (e.g., until reaching the first/home screen).",
          descriptionAr: "إزالة الشاشات بالتتابع حتى يتحقق شرط معين (مثال: العودة إلى الشاشة الأولى في التطبيق route.isFirst).",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Navigator.pushAndRemoveUntil()",
          nameAr: "دالة pushAndRemoveUntil",
          description: "Pushes a new route and removes all or specified previous routes from the stack (e.g. on Logout to Login screen).",
          descriptionAr: "دفع شاشة جديدة وتفريغ كل أو بعض الشاشات السابقة من المكدس (مثال: تسجيل الخروج والعودة لتسجيل الدخول دون إمكانية الرجوع).",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Passing Arguments & Returning Data",
          nameAr: "تمرير البيانات واسترجاع النتائج",
          description: "Passing data through widget constructors vs RouteSettings arguments; awaiting Navigator.push and returning values via pop(context, result).",
          descriptionAr: "تمرير البيانات عبر الباني (Constructor) مقابل وسائط RouteSettings؛ وانتظار نتيجة push عبر await وإرجاعها بـ pop(result).",
          status: "INCLUDED"
        },
        {
          name: "PopScope Back-Handling",
          nameAr: "التعامل مع زر الرجوع عبر PopScope",
          description: "Modern Flutter replacement for WillPopScope to intercept and control hardware back button events.",
          descriptionAr: "الويدجت الحديث في فلاتر للتحكم في زر الرجوع للأجهزة واعتراض إغلاق الصفحة.",
          status: "INCLUDED"
        }
      ],
      excludedTopics: [
        "Router API / Deep go_router web implementation (only high-level concept mentioned)",
        "Advanced Hero animations setup beyond the basic tag property"
      ],
      doctorEmphasis: [
        "Understand exactly what happens to the Route Stack after each Navigator call.",
        "Compare Anonymous Routing vs Named Routing across all criteria.",
        "Know the exact syntax of Navigator.push with MaterialPageRoute.",
        "Understand popUntil with (route) => route.isFirst vs pushAndRemoveUntil with (route) => false.",
        "Solve stack prediction questions: what is on the top of the stack and what happens if user presses back?"
      ]
    },
    8: {
      id: 8,
      titleEn: "Lecture 8 — Asynchronous Programming",
      titleAr: "المحاضرة الثامنة — البرمجة غير المتزامنة",
      examStatus: "INCLUDED",
      isEntireChapter: false,
      summary: "Focuses on Dart's single-threaded event loop architecture, Future lifecycle, async/await syntax, exception handling, and reactive UI with FutureBuilder & StreamBuilder.",
      summaryAr: "تركز على معمارية حلقة الأحداث وخيط التنفيذ الأحادي في دارت، دورة حياة الـ Future، كلمات async و await، معالجة الاستثناءات، وبناء الواجهات التفاعلية بـ FutureBuilder و StreamBuilder.",
      requiredTopics: [
        {
          name: "Single-Threaded Dart & The Event Loop",
          nameAr: "الخيط الأحادي وحلقة الأحداث في دارت",
          description: "Dart executes in a single-threaded isolate with an Event Loop, Event Queue, and Microtask Queue (unlike multi-threaded Android).",
          descriptionAr: "تنفذ لغة دارت على خيط تنفيذي واحد (Isolate) يعتمد على حلقة الأحداث (Event Loop) وطابوري الأحداث والمهام الدقيقة.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Synchronous vs Asynchronous Execution",
          nameAr: "التنفيذ المتزامن مقابل غير المتزامن",
          description: "Synchronous operations block execution line by line; asynchronous operations allow other tasks to proceed while waiting for I/O.",
          descriptionAr: "العمليات المتزامنة توقف التنفيذ سطراً بسطر، بينما العمليات غير المتزامنة تسمح للتطبيق بمعالجة الأحداث والواجهة أثناء انتظار عمليات الإدخال/الإخراج.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Future<T> & Lifecycle States",
          nameAr: "كائن Future وحالات دورة حياته",
          description: "Represents an eventual single value or error. States: Uncompleted, Completed with Value, Completed with Error.",
          descriptionAr: "يمثل نتيجة متوقعة لعملية واحدة في المستقبل. حالاته: قيد التنفيذ (Uncompleted)، مكتمل بقيمة، أو مكتمل بخطأ.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "async & await Keywords",
          nameAr: "الكلمتان المفتاحيتان async و await",
          description: "async marks a function returning a Future; await pauses the execution of the async function until the Future completes without freezing the UI isolate.",
          descriptionAr: "كلمة async تحدد دالة تُرجع Future، وكلمة await توقف تنفيذ الدالة مؤقتاً حتى يكتمل الـ Future دون تجميد واجهة التطبيق.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Error Handling (try / catch / finally)",
          nameAr: "معالجة الأخطاء (try / catch / finally)",
          description: "Handling asynchronous exceptions cleanly with standard try/catch blocks.",
          descriptionAr: "معالجة الأخطاء والاستثناءات في العمليات غير المتزامنة باستخدام try و catch و finally.",
          status: "INCLUDED"
        },
        {
          name: "FutureBuilder<T> in Depth",
          nameAr: "الويدجت FutureBuilder بالتفصيل",
          description: "Properties: future and builder. AsyncSnapshot states (ConnectionState: none, waiting, active, done), snapshot.hasData, snapshot.hasError, snapshot.data.",
          descriptionAr: "الخصائص الأساسية future و builder، حالات الاتصال (none, waiting, active, done)، وفحص وجود البيانات snapshot.hasData أو الخطأ snapshot.hasError.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Future Storage Outside build()",
          nameAr: "تخزين الـ Future خارج دالة build",
          description: "Critical rule: Store the Future in initState or a variable so it does not re-fetch repeatedly on every widget rebuild.",
          descriptionAr: "قاعدة أساسية: يجب تخزين كائن الـ Future داخل initState لتجنب إعادة استدعاء الدالة البرمجية مع كل إعادة بناء (Rebuild) للشاشة.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Streams & StreamBuilder<T>",
          nameAr: "التدفقات (Streams) و StreamBuilder",
          description: "Handling multiple asynchronous events over time using async* and yield; rendering live changes with StreamBuilder.",
          descriptionAr: "استقبال سلسلة مستمرة من الأحداث غير المتزامنة عبر الزمن باستخدام async* و yield، وتحديث الواجهة تلقائياً بـ StreamBuilder.",
          status: "INCLUDED"
        }
      ],
      excludedTopics: [
        "Advanced RxDart, StreamTransformers, or complex multi-isolate compute pools (beyond taught examples)",
        "Custom StreamController broadcasts not covered in lecture"
      ],
      doctorEmphasis: [
        "Distinguish between Dart single-threaded execution and multi-threaded systems.",
        "Predict console print output order with synchronous vs Future.delayed vs await code.",
        "Master the 4 ConnectionState values of AsyncSnapshot in FutureBuilder.",
        "Know how to safely show CircularProgressIndicator, Data, or Error in FutureBuilder."
      ]
    },
    9: {
      id: 9,
      titleEn: "Lecture 9 — Local Data Storage",
      titleAr: "المحاضرة التاسعة — التخزين المحلي للبيانات",
      examStatus: "INCLUDED — FULL CHAPTER",
      isEntireChapter: true,
      summary: "THE ENTIRE CHAPTER IS INCLUDED IN THE EXAM. Covers offline persistence mental model, lifetimes, and in-depth implementations of SQLite (sqflite), SharedPreferences (with modern Async/Cache), and File/JSON storage.",
      summaryAr: "الفصل بالكامل مطلوب في الاختبار النهائي! يشمل مفاهيم التخزين المحلي، دورة حياة البيانات، وتطبيقات SQLite و SharedPreferences و الملفات وقواعد اختيار الأداة المناسبة.",
      requiredTopics: [
        {
          name: "Persistence Mental Model & Lifetimes",
          nameAr: "نموذج مفاهيم التخزين ودورة حياة البيانات",
          description: "Differences between widget state (ephemeral), process memory (vanishes on process kill), local disk persistence (survives app restart), and cloud backend.",
          descriptionAr: "الفروق الجوهرية بين حالة الويدجت (مؤقتة)، ذاكرة المعالج RAM (تزول عند إغلاق التطبيق)، التخزين الدائم على القرص (يبقى بعد إعادة التشغيل)، والتخزين السحابي.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Storage Solution Decision Map",
          nameAr: "خريطة اختيار أداة التخزين المناسبة",
          description: "When to choose SQLite vs SharedPreferences vs File Storage based on data shape, volume, query needs, and performance.",
          descriptionAr: "معايير اختيار SQLite مقابل SharedPreferences مقابل تخزين الملفات بناءً على شكل البيانات، حجمها، متطلبات البحث، والأداء.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "SQLite Database (sqflite)",
          nameAr: "قواعد بيانات SQLite وحزمة sqflite",
          description: "Full relational CRUD: openDatabase, getDatabasesPath, onCreate, table creation, Dog model, insert, query, update, delete, ConflictAlgorithm.replace, versioning.",
          descriptionAr: "العمليات الكاملة لقواعد البيانات العلائقية: فتح المسار، دالة onCreate، نموذج البيانات Dog، والإضافة والاستعلام والتحديث والحذف وحل التعارض وإصدارات القاعدة.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "SharedPreferences (Key-Value Store)",
          nameAr: "التخزين بالمفتاح والقيمة (SharedPreferences)",
          description: "Storing lightweight primitives: int, double, bool, String, StringList. SharedPreferences.getInstance(), setString, getString, remove, clear.",
          descriptionAr: "تخزين البيانات البسيطة كأزواج مفتاح وقيمة للأنواع الأولية (نصوص، أرقام، منطقي). دوال الحفظ والقراءة والحذف والتفريغ.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "SharedPreferencesAsync & SharedPreferencesWithCache",
          nameAr: "النسخة الحديثة SharedPreferencesAsync ومع الكاش",
          description: "The modern asynchronous API in shared_preferences package providing non-blocking platform operations and memory caching.",
          descriptionAr: "الواجهة البرمجية الحديثة التي تمنع حظر واجهة المستخدم وتوفر تخزيناً مؤقتاً في الذاكرة لتسريع القراءة.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "File Storage (dart:io & path_provider)",
          nameAr: "تخزين الملفات (dart:io و path_provider)",
          description: "Reading and writing files to app documents directory: getApplicationDocumentsDirectory(), File(path), writeAsString(), readAsString().",
          descriptionAr: "قراءة وكتابة الملفات النصية في مجلد مستندات التطبيق باستخدام path_provider و File.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "JSON File Persistence",
          nameAr: "حفظ وقراءة ملفات JSON محلياً",
          description: "Serializing Dart Maps/Lists to JSON strings with jsonEncode and saving to disk; reading and parsing back with jsonDecode.",
          descriptionAr: "تحويل كائنات دارت إلى نصوص JSON عبر jsonEncode وحفظها كملف، وقراءتها وتحويلها عبر jsonDecode.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Security & Persistence Verification",
          nameAr: "الأمان والتحقق من بقاء البيانات",
          description: "Proof of persistence: save -> terminate process -> restart app -> read restored value. SharedPreferences is NOT encrypted.",
          descriptionAr: "إثبات التخزين الفعلي: حفظ البيانات -> إنهاء المعالج -> إعادة التشغيل -> قراءة القيمة. والتأكيد على أن SharedPreferences ليست مشفرة ولا تصلح للبيانات الحساسة.",
          status: "INCLUDED"
        }
      ],
      excludedTopics: [
        "External third-party NoSQL databases not covered in the lecture (e.g., Hive or ObjectBox)"
      ],
      doctorEmphasis: [
        "The professor explicitly stated: THE ENTIRE CHAPTER IS INCLUDED IN THE EXAM.",
        "Master the SQLite Dog CRUD code step by step.",
        "Be able to compare SQLite vs SharedPreferences vs Text Files across all dimensions.",
        "Know how to safely open a database and specify conflictAlgorithm: ConflictAlgorithm.replace."
      ]
    },
    10: {
      id: 10,
      titleEn: "Lecture 10 — Online Storage & REST API",
      titleAr: "المحاضرة العاشرة — التخزين السحابي وواجهات برمجة التطبيقات (API)",
      examStatus: "INCLUDED (EXCEPT API WITH IMAGES)",
      isEntireChapter: false,
      summary: "Covers REST API architectural boundaries, JSON parsing into Dart models, local JSON assets, online HTTP requests (GET, POST, PUT, DELETE), PHP REST backend + MySQL database CRUD, and HTTP status codes.",
      summaryAr: "تشمل معمارية REST API، تحليل بيانات JSON إلى نماذج Dart، قراءة ملفات JSON المحلية، استدعاءات HTTP، الواجهة الخلفية PHP مع MySQL لعمليات CRUD، وأكواد استجابة HTTP.",
      requiredTopics: [
        {
          name: "API Mental Model & Request Contract",
          nameAr: "المفهوم الأساسي للـ API ومكونات الطلب والاستجابة",
          description: "The 6 parts of an API call: Method, Endpoint, Headers, Body, Status code, Response payload.",
          descriptionAr: "الأجزاء الستة لأي استدعاء API: طريقة الطلب (Method)، نقطة النهاية (Endpoint)، الترويسات (Headers)، جسم الطلب (Body)، كود الحالة (Status)، والاستجابة.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "JSON Format & Dart Data Models",
          nameAr: "صيغة JSON وبناء نماذج البيانات في دارت",
          description: "JSON objects ({}) map to Map<String, dynamic>; JSON arrays ([]) map to List. Parsing using jsonDecode() and factory constructors (fromJson).",
          descriptionAr: "تحويل كائنات JSON إلى Map وقوائم JSON إلى List باستخدام jsonDecode()، وبناء دوال التحويل fromJson داخل كلاسات Dart.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Local JSON Asset (ProductItem Example)",
          nameAr: "قراءة ملف JSON محلي من الأصول (ProductItem)",
          description: "Declaring assets in pubspec.yaml, loading with rootBundle.loadString(), parsing, and rendering in ListView.builder.",
          descriptionAr: "تعريف الملف في pubspec.yaml، وقراءته عبر rootBundle.loadString()، ثم تحليله وعرضه في قائمة ListView.builder.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Online JSON & FutureBuilder (RandomUser)",
          nameAr: "جلب JSON من الإنترنت عبر FutureBuilder (RandomUser)",
          description: "Calling http.get(Uri.parse('https://randomuser.me/...')) and displaying the asynchronous results dynamically in UI with FutureBuilder.",
          descriptionAr: "إجراء طلب http.get وعرض النتائج المسترجعة داخل الواجهة باستخدام FutureBuilder.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "HTTP Methods & CRUD Mapping",
          nameAr: "طرق HTTP ومطابقتها لعمليات CRUD",
          description: "GET -> Read / View; POST -> Create / Insert; PUT/PATCH -> Update; DELETE -> Delete.",
          descriptionAr: "مطابقة دوال الويب مع عمليات البيانات: GET للقراءة، POST للإنشاء، PUT للتعديل، و DELETE للحذف.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "PHP REST API & MySQL Integration",
          nameAr: "الربط مع خادم PHP وقاعدة بيانات MySQL",
          description: "End-to-end architecture: Flutter client -> HTTP request -> PHP scripts (getdata.php, adddata.php, editdata.php, deletedata.php) -> MySQL database -> JSON response.",
          descriptionAr: "المعمارية المتكاملة: تطبيق فلاتر -> طلب HTTP -> سكربتات PHP (getdata, adddata, editdata, deletedata) -> قاعدة MySQL -> استجابة JSON.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "Android Emulator Network Loopback (10.0.2.2)",
          nameAr: "عنوان الشبكة الافتراضي للمحاكي (10.0.2.2)",
          description: "In Android emulator, 10.0.2.2 is the special IP alias for the host machine's localhost / 127.0.0.1.",
          descriptionAr: "يمثل العنوان 10.0.2.2 حاسوب المطور المضيف (localhost) عند تشغيل التطبيق من داخل محاكي أندرويد.",
          status: "CRITICAL EXAM FOCUS"
        },
        {
          name: "HTTP Status Codes",
          nameAr: "أكواد حالة استجابة HTTP",
          description: "200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error.",
          descriptionAr: "معاني أكواد الاستجابة: 200 نجاح، 201 تم الإنشاء، 400 طلب خاطئ، 404 غير موجود، 500 خطأ في الخادم.",
          status: "CRITICAL EXAM FOCUS"
        }
      ],
      excludedTopics: [
        "API WITH IMAGES (image_picker, MultipartRequest, file uploads, flutter_upload_images table, create.php upload script) IS STRICTLY EXCLUDED FROM THE FINAL EXAM PER PROFESSOR ANNOUNCEMENT."
      ],
      doctorEmphasis: [
        "True/False and Multiple Choice questions are strongly emphasized for API topics!",
        "Do NOT confuse GET (read) with POST (create).",
        "Know the role of 10.0.2.2 when testing local PHP scripts from the Android emulator.",
        "Remember: jsonDecode() takes a raw JSON String and returns a Dart Map or List.",
        "API WITH IMAGES IS EXCLUDED — do not waste study time on multipart file uploads for the exam."
      ]
    }
  }
};
