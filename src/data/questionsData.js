export const questionsData = [
  {
    "id": "lab7_tf_01",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 1,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Anonymous Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Anonymous routes are created directly with Route objects and do not require a registered string name.",
    "questionAr": "تُنشأ المسارات المجهولة (Anonymous routes) مباشرةً باستخدام كائنات (Route) ولا تتطلب اسماً نصياً مسجلاً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Anonymous routes use `MaterialPageRoute(builder: ...)` directly in code without string route names.",
    "explanationAr": "صحيح. تُنشأ المسارات المجهولة مباشرة بتمرير كائن (MaterialPageRoute) دون الحاجة لتسجيل اسم نصي في جدول المسارات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_02",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 2,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Named routes can improve organization when route names and their argument contracts are kept clear.",
    "questionAr": "يمكن للمسارات المسماة (Named routes) تحسين تنظيم التطبيق عندما تكون أسماء المسارات وعقود وسائطها واضحة ومحددة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Centralizing route identifiers in a routes table helps organize navigation across large applications.",
    "explanationAr": "صحيح. تجميع أسماء المسارات في جدول مركزي (routes table) يساعد في تنظيم شاشات التطبيقات الكبيرة وتوحيد التنقل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_03",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 3,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The Navigator widget in Flutter manages a stack of Route objects.",
    "questionAr": "يدير ويدجت (Navigator) في فلاتر مكدساً (Stack) من كائنات المسارات (Route).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Flutter navigation is architected as a LIFO stack of Route objects managed by the Navigator widget.",
    "explanationAr": "صحيح. يعتمد نظام التنقل في فلاتر على مكدس (LIFO Stack) من كائنات (Route) يديره ويدجت (Navigator).",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_04",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 4,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pushReplacement",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "pushReplacement installs a new route and removes the current route from Back history.",
    "questionAr": "تقوم الدالة (pushReplacement) بتثبيت مسار جديد وإزالة المسار الحالي من سجل الرجوع للخلف (Back history).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `pushReplacement()` discards the current route so pressing Back returns to the route beneath it.",
    "explanationAr": "صحيح. تقوم `pushReplacement()` بإزالة الشاشة الحالية من المكدس ودفع شاشة جديدة، بحيث يعود زر الرجوع للشاشة الأسبق.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_05",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 5,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Named routes can be used for easier navigation management.",
    "questionAr": "يمكن استخدام المسارات المسماة (Named routes) لإدارة التنقل بين الشاشات بشكل أكثر سهولة وتنظيماً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Using string paths like `'/details'` decouples screens and simplifies multi-page transitions.",
    "explanationAr": "صحيح. استخدام المسارات النصية مثل `'/details'` يفصل بين الشاشات ويسهل إدارة الانتقالات في التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_06",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 6,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.pop() requires a mandatory data argument on every call.",
    "questionAr": "تتطلب الدالة (Navigator).pop() تمرير وسيط بيانات إلزامي في كل استدعاء.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Navigator.pop() does NOT require a mandatory data argument; the result parameter is optional.",
    "correctionAr": "دالة (Navigator).pop() لا تتطلب وسيط بيانات إلزامي؛ فمعامل النتيجة اختياري تماماً.",
    "explanationEn": "False. Calling `Navigator.pop(context)` without a second argument is completely valid when no return value is needed.",
    "explanationAr": "خطأ. استدعاء `Navigator.pop(context)` بدون معامل ثانٍ صالح تماماً عندما لا تكون هناك قيمة معادة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_07",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 7,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Flutter can support deep linking, which opens a specific screen from a URL or path.",
    "questionAr": "يدعم فلاتر الروابط العميقة (Deep linking)، والتي تتيح فتح شاشة محددة مباشرةً من خلال مسار أو رابط URL.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Named routes and routing delegates allow external URLs or system intents to deep-link directly into screens.",
    "explanationAr": "صحيح. تدعم المسارات في فلاتر الروابط العميقة لفتح شاشات محددة مباشرة من روابط خارجية أو إشعارات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_08",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 8,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "MaterialPageRoute creates a platform-appropriate full-page route transition.",
    "questionAr": "ينشئ (MaterialPageRoute) انتقالاً ملائماً لمنصة التشغيل (أندرويد أو iOS) يغطي كامل الصفحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. MaterialPageRoute uses platform-adaptive animations: slide up on iOS, fade/slide upwards on Android.",
    "explanationAr": "صحيح. يوفر (MaterialPageRoute) حركات انتقال تلقائية تلائم نظام التشغيل (انزلاق رأسي في iOS وتلاشٍ في أندرويد).",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_09",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 9,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "pushAndRemoveUntil() can push a new route and remove earlier routes according to a predicate.",
    "questionAr": "يمكن لدالة (pushAndRemoveUntil()) دفع مسار جديد وإزالة المسارات السابقة وفقاً لشرط منطقي (Predicate).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `pushAndRemoveUntil` strips prior routes until the given predicate evaluates to true (e.g. clearing stack on logout).",
    "explanationAr": "صحيح. تتيح دالة `pushAndRemoveUntil` إزالة المسارات السابقة حتى يتحقق شرط معين، مثل مسح المكدس عند تسجيل الخروج.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_10",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 10,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Named routes can be registered through the MaterialApp routes property.",
    "questionAr": "يمكن تسجيل المسارات المسماة عبر خاصية routes الموجودة داخل ويدجت MaterialApp.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The `routes` parameter in `MaterialApp` accepts a `Map<String, WidgetBuilder>` mapping route names to screens.",
    "explanationAr": "صحيح. تستقبل خاصية `routes` في MaterialApp خريطة من نوع `Map<String, WidgetBuilder>` لربط الأسماء بالشاشات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_11",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 11,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.push() returns a Future that completes when the pushed route is popped.",
    "questionAr": "تُرجع الدالة (Navigator).push() كائن (Future) يكتمل عندما يتم إغلاق (Pop) المسار المدفوع والرجوع منه.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The returned Future completes with any optional result value passed to `Navigator.pop(context, result)`.",
    "explanationAr": "صحيح. تُرجع `Navigator.push()` كائن (Future) يكتمل بالقيمة التي تمررها الشاشة المغلقة عبر `Navigator.pop(context, result)`.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_12",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 12,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "onGenerateRoute can handle dynamic route creation and an unknown-route fallback.",
    "questionAr": "يمكن لدالة onGenerateRoute التعامل مع إنشاء المسارات الديناميكية وتوفير شاشة احتياطية للمسارات غير المعروفة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `onGenerateRoute` receives `RouteSettings` and dynamically builds routes, handling query parameters and fallbacks.",
    "explanationAr": "صحيح. تستقبل دالة `onGenerateRoute` إعدادات RouteSettings وتبني المسارات ديناميكياً مع معالجة المسارات المجهولة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_13",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 13,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A route is a screen represented by a widget and displayed by a Navigator.",
    "questionAr": "المسار (Route) عبارة عن شاشة يمثلها ويدجت ويتم عرضها وإدارتها بواسطة (Navigator).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. In Flutter architecture, a Route models a screen widget presented on the Navigator stack.",
    "explanationAr": "صحيح. في فلاتر، يمثل المسار (Route) شاشة كاملة مبنية كـ Widget يديرها ويعرضها الـ (Navigator).",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_14",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 14,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "push adds a route to the stack, while pop removes the top route from the relevant Navigator.",
    "questionAr": "تضيف عملية push مساراً إلى أعلى المكدس، بينما تزيل عملية pop المسار العلوي من الـ (Navigator) المعني.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Push pushes a new route on top of the stack, and pop removes the topmost active route.",
    "explanationAr": "صحيح. عملية push تدفع مساراً جديداً إلى قمة المكدس، بينما pop تسحب وتغلق المسار العلوي النشط.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_15",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 15,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.pushNamed() receives a BuildContext and route name, with arguments supplied optionally.",
    "questionAr": "تستقبل الدالة (Navigator).(pushNamed()) سياق البناء BuildContext واسم المسار، مع إمكانية تمرير وسائط اختيارية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The signature is `Navigator.pushNamed(context, routeName, {Object? arguments})`.",
    "explanationAr": "صحيح. الصيغة الرسمية هي `Navigator.(pushNamed)(context, routeName, {Object? arguments})` لاستدعاء مسار مسمى.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_16",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 16,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.pushNamed() can navigate to a registered named route.",
    "questionAr": "تستطيع الدالة (Navigator).(pushNamed()) الانتقال إلى مسار مسمى مسجل مسبقاً في جدول المسارات.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Navigator.pushNamed(context, routeName) looks up the route name string in MaterialApp's routes table and pushes the corresponding widget onto the stack.",
    "explanationAr": "صحيح. تبحث دالة (Navigator).(pushNamed)(context, routeName) عن الاسم النصي في جدول routes داخل MaterialApp وتدفع الشاشة المقابلة له إلى أعلى مكدس التنقل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_17",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 17,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.pop() is used only to close the entire application.",
    "questionAr": "تُستخدم الدالة (Navigator).pop() فقط لإغلاق التطبيق بأكمله.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Navigator.pop() removes the top route from the stack and returns to the previous screen.",
    "correctionAr": "تقوم دالة (Navigator).pop() بإزالة الشاشة العلوية من المكدس والرجوع للشاشة السابقة، وليس لإغلاق التطبيق بأكمله فقط.",
    "explanationEn": "False. Navigator.pop() pops the current route off the navigator history to reveal the route below it. It only exits the app if called on the very last remaining root route.",
    "explanationAr": "خطأ. وظيفة (Navigator).pop() هي إغلاق الشاشة الحالية والرجوع إلى الشاشة التي تسبقها في المكدس، ولا يُغلق التطبيق إلا إذا استُدعيت على الشاشة الجذرية الأخيرة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_18",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 18,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "MaterialApp can configure the app Navigator and its route entry points.",
    "questionAr": "يستطيع ويدجت MaterialApp تكوين وإعداد (Navigator) التطبيق وتحديد نقاط الدخول للمسارات المختلفة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `MaterialApp` configures the root Navigator via `initialRoute`, `routes`, `onGenerateRoute`, and `home`.",
    "explanationAr": "صحيح. يتولى ويدجت `MaterialApp` تهيئة الـ (Navigator) الرئيسي وتحديد الشاشة الأولى عبر `initialRoute` أو `home`.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_19",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 19,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pushReplacement",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.pushReplacement() replaces the current screen in the route history.",
    "questionAr": "تستبدل الدالة (Navigator).(pushReplacement()) الشاشة الحالية في سجل مسارات التنقل بشاشة جديدة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. It pushes the new route while dropping the current screen from the history stack.",
    "explanationAr": "صحيح. تدفع الشاشة الجديدة وتزيل الشاشة الحالية من سجل المكدس لمنع الرجوع إليها.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_20",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 20,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.20)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.pushAndRemoveUntil() can remove multiple routes from the stack.",
    "questionAr": "تستطيع الدالة (Navigator).(pushAndRemoveUntil()) إزالة وحذف عدة مسارات من المكدس دفعة واحدة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. It repeatedly pops routes until the condition specified by the predicate is satisfied.",
    "explanationAr": "صحيح. تقوم بحذف المسارات المتتالية من المكدس حتى يتحقق شرط محدد، مما يتيح تنظيف عدة شاشات دفعة واحدة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_21",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 21,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The BuildContext passed to Navigator.of(context) is optional in most cases.",
    "questionAr": "يعد سياق البناء BuildContext الممرر إلى (Navigator).of(context) اختيارياً في معظم الحالات.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "BuildContext is mandatory for Navigator.of(context) to look up the Navigator widget in the widget tree.",
    "correctionAr": "سياق البناء BuildContext مطلوب وإلزامي لتمكين (Navigator).of(context) من تحديد موقع الـ (Navigator) في شجرة الويدجت.",
    "explanationEn": "False. BuildContext gives Navigator.of(context) the tree coordinates needed to find the nearest ancestor NavigatorState.",
    "explanationAr": "خطأ. سياق البناء BuildContext ضروري وإلزامي لتحديد موقع أقرب ويدجت (Navigator) في الشجرة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_22",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 22,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.22)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In Flutter navigation, a screen is represented by a Route.",
    "questionAr": "في نظام التنقل في فلاتر، يتم تمثيل كل شاشة بكائن مسار (Route).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "In Flutter's navigation system, routes are managed on a LIFO (Last-In, First-Out) stack via the Navigator widget. Pushing adds a route; popping reveals the underlying route.",
    "explanationAr": "في نظام تنقل فلاتر، تُدار المسارات في مكدس (LIFO) عبر ويدجت (Navigator)؛ حيث تضيف push شاشة جديدة، بينما تزيل pop الشاشة العلوية للرجوع للشاشة السابقة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_23",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 23,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.23)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.canPop() returns true when a previous route can be revealed.",
    "questionAr": "تُرجع الدالة (Navigator).canPop() القيمة true عندما يكون هناك مسار سابق في المكدس يمكن الرجوع إليه.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `Navigator.canPop(context)` checks if there is more than one route on the stack.",
    "explanationAr": "صحيح. تفحص دالة `Navigator.canPop(context)` ما إذا كان هناك أكثر من مسار في المكدس يسمح بالرجوع.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_24",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 24,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.24)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Hero animations can animate a matching widget between two routes during navigation.",
    "questionAr": "تتيح حركات Hero تحريك ويدجت متطابق بين مسارين بسلاسة أثناء انتقال الشاشات.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The Hero widget creates a smooth shared-element flight animation for matching tags across two different routes during navigation.",
    "explanationAr": "صحيح. ينشئ ويدجت Hero حركة انتقالية سلسة (Flight animation) لعنصر مشترك يحمل نفس الـ tag بين شاشتين مختلفتين أثناء التنقل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_25",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 25,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.25)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Hero tags should be unique enough within each participating route to identify the intended shared element.",
    "questionAr": "يجب أن تكون علامات Hero فريدة بدرجة كافية داخل كل مسار مشارك لتحديد العنصر المشترك المقصود.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. A Hero widget needs a unique tag within its route so that Flutter knows exactly which widgets correspond to each other during the transition.",
    "explanationAr": "صحيح. يحتاج ويدجت Hero إلى علامة (tag) فريدة داخل مساره حتى يعرف فلاتر بالضبط أي الويدجت تتوافق مع بعضها أثناء الانتقال.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_26",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 26,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.26)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "PageRouteBuilder can provide a custom transition for an entire page route.",
    "questionAr": "يمكن لـ PageRouteBuilder توفير انتقال مخصص (Custom Transition) لكامل مسار الصفحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. PageRouteBuilder allows building custom page animations (e.g. Fade, Scale, Slide) using transitionsBuilder.",
    "explanationAr": "صحيح. يتيح PageRouteBuilder تصميم حركات انتقالية مخصصة للشاشة مثل التلاشي والتكبير عبر transitionsBuilder.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_27",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 27,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.27)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An image used by a Hero still has to be available through the app's asset or network configuration.",
    "questionAr": "يجب أن تكون الصورة المستخدمة في ويدجت Hero متوفرة ومتاحة من خلال أصول التطبيق أو الشبكة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Hero manages the flying animation transition between routes, but the asset/network image must still exist.",
    "explanationAr": "صحيح. يتولى Hero تحريك العنصر الانتقالي بين شاشتين، ولكن الصورة نفسها يجب أن تكون محملة وموجودة كأصل أو رابط.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_28",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 28,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.28)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A TabBar and TabBarView should have matching lengths when they are controlled by the same tab controller.",
    "questionAr": "يجب أن يكون لـ TabBar و TabBarView أطوال متطابقة عندما يتم التحكم فيهما بواسطة نفس الـ tab controller.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The TabBar and TabBarView must have the exact same number of tabs/children so the controller can sync their indices correctly.",
    "explanationAr": "صحيح. يجب أن يحتوي TabBar و TabBarView على نفس العدد بالضبط من علامات التبويب/العناصر الفرعية حتى يتمكن وحدة التحكم من مزامنة فهارسها بشكل صحيح.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_29",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 29,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.29)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An IndexedStack can keep the state of inactive pages while changing which child is visible.",
    "questionAr": "يمكن لـ IndexedStack الاحتفاظ بحالة الصفحات غير النشطة أثناء تغيير العنصر الفرعي المرئي.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. IndexedStack renders all its children but only shows one at a time, allowing inactive children to retain their state.",
    "explanationAr": "صحيح. يقوم IndexedStack بعرض جميع أبنائه ولكنه يُظهر واحداً فقط في كل مرة، مما يسمح للأبناء غير النشطين بالاحتفاظ بحالتهم.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_30",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 30,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.30)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A NavigationBar shell normally stores the selected destination index in State so a selection rebuilds the body.",
    "questionAr": "عادةً ما يقوم غلاف NavigationBar بتخزين فهرس الوجهة المحددة في الـ State، بحيث تؤدي عملية التحديد إلى إعادة بناء المحتوى (body).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. When using a NavigationBar, selecting a tab updates the active index in the state, triggering a rebuild to display the corresponding body.",
    "explanationAr": "صحيح. عند استخدام NavigationBar، يؤدي تحديد علامة تبويب إلى تحديث الفهرس النشط في الحالة، مما يؤدي إلى إعادة البناء لعرض المحتوى المقابل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_31",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 31,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.31)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A TextEditingController owned by a State object should be disposed when that State is disposed.",
    "questionAr": "يجب التخلص من (dispose) الـ TextEditingController المملوك لكائن State عندما يتم التخلص من حالة هذا الكائن.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Controllers consume system resources and must be explicitly disposed in the State's dispose() method to prevent memory leaks.",
    "explanationAr": "صحيح. تستهلك أدوات التحكم (Controllers) موارد النظام ويجب التخلص منها صراحة في دالة dispose() الخاصة بـ State لمنع تسرب الذاكرة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_32",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 32,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.32)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "AlertDialog can return a nullable Boolean so the caller can distinguish confirm from cancel or dismissal.",
    "questionAr": "يمكن لـ AlertDialog أن يرجع قيمة Boolean قابلة للترك كفارغة (nullable)، بحيث يتمكن المستدعي من التمييز بين التأكيد والإلغاء أو التجاهل.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. A dialog returns the value passed to Navigator.pop(context, value). If the user taps outside to dismiss, it returns null.",
    "explanationAr": "صحيح. يُرجع مربع الحوار القيمة الممررة إلى Navigator.pop. وإذا نقر المستخدم بالخارج لإغلاقه، فإنه يُرجع null.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_33",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 33,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.33)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "SimpleDialog can return a nullable selection value when the user chooses an option or dismisses the dialog.",
    "questionAr": "يمكن لـ SimpleDialog أن يرجع قيمة تحديد قابلة للترك كفارغة (nullable) عندما يختار المستخدم خياراً أو يتجاهل مربع الحوار.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Just like other dialogs, SimpleDialog completes its Future with a value if an option is selected, or null if dismissed.",
    "explanationAr": "صحيح. تمامًا مثل مربعات الحوار الأخرى، يكمل SimpleDialog كائن Future الخاص به بقيمة إذا تم تحديد خيار، أو null إذا تم إغلاقه.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_34",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 34,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.34)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A typed modal bottom sheet can return an enum value through its Future.",
    "questionAr": "يمكن لورقة سفلية مشروطة (modal bottom sheet) محددة النوع أن تُرجع قيمة من نوع enum من خلال الـ (Future) الخاص بها.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. When showing a modal bottom sheet, its Future can be strongly typed (e.g., Future<MyEnum?>) to return a specific enum value.",
    "explanationAr": "صحيح. عند عرض modal bottom sheet، يمكن أن يكون كائن Future الخاص به محدد النوع (مثل Future<MyEnum?>) لإرجاع قيمة enum معينة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_35",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 35,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.35)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The caller should handle null after awaiting a dialog or bottom sheet because dismissal is a valid outcome.",
    "questionAr": "يجب على المستدعي التعامل مع القيمة null بعد انتظار مربع حوار (dialog) أو bottom sheet، لأن تجاهلهما يعد نتيجة صالحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Users can dismiss dialogs or bottom sheets by tapping outside them, causing the Future to resolve with null. The caller must handle this.",
    "explanationAr": "صحيح. يمكن للمستخدمين إغلاق مربعات الحوار عن طريق النقر خارجها، مما يؤدي إلى إكمال كائن Future بقيمة null. يجب على المستدعي التعامل مع هذا.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_36",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 36,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.36)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "showDatePicker returns a nullable DateTime because the user can cancel the picker.",
    "questionAr": "تُرجع الدالة showDatePicker قيمة DateTime قابلة للترك كفارغة (nullable) لأن المستخدم يمكنه إلغاء أداة الاختيار.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. showDatePicker returns a Future<DateTime?> which resolves to null if the user cancels or dismisses the picker.",
    "explanationAr": "صحيح. تُرجع الدالة showDatePicker كائن Future<DateTime?> والذي يكتمل بقيمة null إذا قام المستخدم بإلغاء أداة الاختيار أو إغلاقها.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_37",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 37,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.37)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "showTimePicker returns a nullable TimeOfDay because cancellation does not create a selected time.",
    "questionAr": "تُرجع الدالة showTimePicker قيمة TimeOfDay قابلة للترك كفارغة (nullable) لأن الإلغاء لا ينشئ وقتاً محدداً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "showTimePicker returns a Future<TimeOfDay?> where null represents the user cancelling the dialog.",
    "explanationAr": "ترجع الدالة showTimePicker قيمة Future<TimeOfDay?>، حيث تمثل القيمة null إلغاء المستخدم لمربع الحوار.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_38",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 38,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.38)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A date picker should receive a legal firstDate, lastDate, and initialDate relationship.",
    "questionAr": "يجب أن تتلقى أداة اختيار التاريخ (date picker) علاقة صحيحة بين firstDate و lastDate و initialDate.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "showDatePicker requires firstDate <= initialDate <= lastDate to ensure the initially selected date is within the valid range.",
    "explanationAr": "تتطلب showDatePicker أن يكون firstDate <= initialDate <= lastDate لضمان أن التاريخ المحدد مبدئياً يقع ضمن النطاق الصالح.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_39",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 39,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.39)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The current XFile API represents a selected local image; it does not by itself represent a completed upload.",
    "questionAr": "يؤدي فشل انتقاء الصورة أحيانًا إلى تدمير النشاط المضيف على نظام Android، مما يتطلب استعادة البيانات المفقودة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_40",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 40,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.40)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "When image selection is cancelled, a null XFile can be used to leave the previous preview unchanged.",
    "questionAr": "عند إلغاء اختيار الصورة، يمكن استخدام قيمة XFile تساوي null لترك المعاينة السابقة دون تغيير.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. picker.pickImage() returns a Future<XFile?> which resolves to null if the user cancels image picking. The app checks if (image != null) before updating state, so returning null safely preserves the existing preview without errors. (Note: Image upload is officially EXCLUDED from final exam).",
    "explanationAr": "صحيح. دالة picker.pickImage() تُرجع (Future)<XFile?> بقيمة null عند إلغاء المستخدم لاختيار الصورة. يفحص التطبيق الشرط if (image != null) قبل تحديث الحالة، وبالتالي فإن قيمة null تترك المعاينة السابقة كما هي دون تغيير أو أخطاء. (ملاحظة: رفع الصور مستبعد رسمياً من الاختبار النهائي).",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_41",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 41,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "excluded",
    "source": "Lab 7 (Q1.41)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Android activity recreation can cause a picker result to need explicit lost-data recovery.",
    "questionAr": "يمكن أن تتسبب إعادة إنشاء النشاط (activity recreation) في Android في أن تحتاج نتيجة أداة الاختيار إلى استرداد صريح للبيانات المفقودة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "On Android, if the OS kills the MainActivity while the image picker is active, the app must call retrieveLostData() to recover the picked image upon restart.",
    "explanationAr": "في نظام Android، إذا قام النظام بإغلاق MainActivity أثناء نشاط أداة اختيار الصور، يجب على التطبيق استدعاء retrieveLostData() لاستعادة الصورة عند إعادة التشغيل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_42",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 42,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.42)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A NavigatorObserver can record push, pop, replace, and remove events without rendering the screens itself.",
    "questionAr": "يمكن لـ NavigatorObserver تسجيل أحداث push و pop و replace و remove دون الحاجة إلى عرض الشاشات بنفسه.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "NavigatorObserver acts as a listener that hooks into the routing lifecycle (push, pop) to log or track navigation events, separate from the UI rendering logic.",
    "explanationAr": "يعمل NavigatorObserver كمستمع يتصل بدورة حياة التوجيه لتسجيل وتتبع أحداث التنقل، بمعزل عن منطق عرض واجهة المستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_43",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 43,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.43)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Route names make observer logs and widget-test assertions easier to interpret.",
    "questionAr": "تجعل أسماء المسارات سجلات المراقب وتأكيدات اختبار واجهة المستخدم أسهل في التفسير.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Using named routes assigns identifiable string names to routes, making debugging logs and test output more readable compared to anonymous MaterialPageRoute objects.",
    "explanationAr": "يؤدي استخدام المسارات المسماة إلى تعيين أسماء نصية مميزة للمسارات، مما يجعل سجلات التصحيح ومخرجات الاختبار أكثر قابلية للقراءة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_44",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 44,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.44)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A widget test can use pumpAndSettle after navigation and asynchronous work before checking the final screen.",
    "questionAr": "يمكن لاختبار الواجهة (widget test) استخدام pumpAndSettle بعد التنقل والعمليات غير المتزامنة قبل التحقق من الشاشة النهائية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "pumpAndSettle() repeatedly pumps frames until all animations and scheduled microtasks (like page transitions) finish, making it ideal for testing navigation outcomes.",
    "explanationAr": "تقوم الدالة pumpAndSettle() بضخ الإطارات بشكل متكرر حتى تنتهي جميع الرسوم المتحركة والمهام المجدولة (مثل انتقالات الصفحات)، مما يجعلها مثالية لاختبار نتائج التنقل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_45",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 45,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.45)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "BuildContext identifies a location in the widget tree; it is not a suitable data model for a Course.",
    "questionAr": "يحدد BuildContext موقعاً في شجرة الواجهات (widget tree)؛ وهو ليس نموذج بيانات مناسب لـ Course.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "BuildContext is strictly tied to a widget's position in the UI tree. Business logic or data models like Course should be independent of the UI layer.",
    "explanationAr": "يرتبط BuildContext بشكل صارم بموقع الويدجت في شجرة واجهة المستخدم. يجب أن تكون نماذج البيانات مثل Course مستقلة عن طبقة الواجهة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_46",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 46,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.46)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigator.pop(context) removes the route at the top of the relevant navigator stack.",
    "questionAr": "يزيل Navigator.pop(context) المسار الموجود أعلى مكدس التنقل ذي الصلة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Navigator.pop removes the topmost route (the active screen) from the Navigator stack, returning the user to the previous screen.",
    "explanationAr": "تقوم دالة Navigator.pop بإزالة المسار العلوي (الشاشة النشطة) من مكدس Navigator، مما يعيد المستخدم إلى الشاشة السابقة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_47",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 47,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.47)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "pushAndRemoveUntil can preserve a newly opened home route while removing all routes below it when the predicate is false.",
    "questionAr": "يمكن لـ pushAndRemoveUntil الحفاظ على مسار رئيسي مفتوح حديثًا مع إزالة جميع المسارات التي تحته عندما تكون الدالة الشرطية خاطئة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "pushAndRemoveUntil pushes a new route and iterates backwards, removing routes until the given predicate returns true. Passing (route) => false removes all previous routes.",
    "explanationAr": "تقوم الدالة pushAndRemoveUntil بدفع مسار جديد وتزيل المسارات السابقة حتى يرجع الشرط المحدد قيمة صحيحة. إرجاع false يزيل جميع المسارات السابقة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_48",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 48,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pushReplacement",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.48)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "popUntil and pushReplacement express different history changes and should not be selected only because they both change the visible screen.",
    "questionAr": "يعبر popUntil و pushReplacement عن تغييرات مختلفة في السجل ولا ينبغي اختيارهما فقط لأنهما يغيران الشاشة المرئية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "pushReplacement replaces the current route with a new one, while popUntil pops multiple existing routes until a condition is met. Their effects on the route stack are completely different.",
    "explanationAr": "تقوم الدالة pushReplacement باستبدال المسار الحالي بمسار جديد، بينما تزيل popUntil مسارات متعددة حتى يتحقق شرط معين. تأثيرهما على مكدس المسارات مختلف تماماً.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_49",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 49,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Anonymous Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.49)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Named and anonymous routes can coexist, but the application should keep their contracts understandable.",
    "questionAr": "يمكن أن تتواجد المسارات المسماة والمجهولة (named and anonymous routes) معاً، ولكن يجب على التطبيق إبقاء عقودها مفهومة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Flutter allows mixing Navigator.push (anonymous) and Navigator.pushNamed (named). However, standardizing navigation approaches helps maintainability.",
    "explanationAr": "يسمح فلاتر بخلط المسارات المجهولة والمسارات المسماة. ومع ذلك، فإن توحيد أساليب التنقل يساعد في قابلية صيانة التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_50",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 50,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.50)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A caller awaiting a typed result should handle both a returned value and a null cancellation path.",
    "questionAr": "يجب على المستدعي الذي ينتظر نتيجة مكتوبة (typed result) التعامل مع كل من القيمة المُرجعة ومسار الإلغاء الذي يُرجع null.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Navigator.push returns a Future<T?>. The result can be null if the user pops the route using the back button without providing a value, so the caller must handle this null case.",
    "explanationAr": "تُرجع دالة Navigator.push قيمة Future<T?>. يمكن أن تكون النتيجة null إذا قام المستخدم بالرجوع دون توفير قيمة، لذا يجب التعامل مع هذه الحالة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_51",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 51,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.51)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Using a BuildContext after an await without checking its lifecycle can lead to invalid navigation or feedback calls.",
    "questionAr": "يمكن أن يؤدي استخدام BuildContext بعد await دون التحقق من دورة حياته إلى استدعاءات تنقل غير صالحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Across an await gap, the widget might be unmounted. Using the BuildContext then will throw an exception. The code should check if (!context.mounted) return;.",
    "explanationAr": "بعد انتظار عملية غير متزامنة (await)، قد يتم إلغاء تركيب الويدجت. استخدام BuildContext حينها سيؤدي إلى خطأ، لذا يجب التحقق من context.mounted.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_52",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 52,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Named Routing",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.52)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A Hero transition changes the animation between routes; it does not merge the two routes into one route.",
    "questionAr": "يغير انتقال Hero الرسوم المتحركة (animation) بين المسارات؛ ولكنه لا يدمج المسارين في مسار واحد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The Hero widget animates a UI element seamlessly from one route to another during navigation, but both routes remain distinct entities in the Navigator stack.",
    "explanationAr": "يقوم ويدجت Hero بتحريك عنصر واجهة مستخدم بسلاسة من مسار إلى آخر أثناء التنقل، لكن يظل كلا المسارين كيانين منفصلين في المكدس.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_53",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 53,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.53)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A modal dialog or bottom sheet is presented above the current content and normally completes with a nullable result.",
    "questionAr": "يتم عرض الـ modal dialog أو الـ bottom sheet فوق المحتوى الحالي، وعادةً ما تكتمل بنتيجة قابلة للترك كفارغة (nullable).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Dialogs and bottom sheets are pushed as standalone routes with transparent backgrounds. When dismissed (e.g., clicking outside), they return null.",
    "explanationAr": "يتم تقديم مربعات الحوار (Dialogs) كمسارات مستقلة بخلفيات شفافة. عند إغلاقها (مثلاً بالنقر خارجها)، فإنها تُرجع القيمة null.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_54",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 54,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator.pop",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.54)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "maybePop is not guaranteed to remove a route, so code must not assume that its call always changes the stack.",
    "questionAr": "لا يضمن maybePop إزالة المسار، لذلك يجب ألا يفترض الكود البرمجي أن استدعاءه يؤدي دائماً إلى تغيير المكدس (stack).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "maybePop only pops the route if there is more than one route on the stack or if a PopScope allows it. It prevents accidentally closing the entire app.",
    "explanationAr": "تقوم maybePop بإزالة المسار فقط إذا كان هناك أكثر من مسار في المكدس. وهي تمنع إغلاق التطبيق بأكمله عن طريق الخطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_55",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 55,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.55)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Preserving tab state requires an ownership strategy such as IndexedStack or a suitable state-preserving navigation shell.",
    "questionAr": "يتطلب الحفاظ على حالة علامة التبويب (tab state) استراتيجية ملكية مثل IndexedStack أو غلاف تنقل (navigation shell) مناسب يحافظ على الحالة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Standard routing destroys widget state when navigating away. To keep tab states alive, widgets like IndexedStack or a StatefulShellRoute are necessary.",
    "explanationAr": "التوجيه القياسي يدمر حالة الويدجت عند الانتقال. للحفاظ على حالة علامات التبويب، يلزم استخدام أدوات مثل IndexedStack.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_56",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 56,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.56)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A picker or date dialog should preserve the previous value when the user cancels rather than replacing it with an invented value.",
    "questionAr": "يجب أن تحتفظ أداة الاختيار أو مربع حوار التاريخ بالقيمة السابقة عند إلغاء المستخدم بدلاً من استبدالها بقيمة وهمية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When a dialog returns null (cancellation), the application should ignore it and retain the currently selected valid date, avoiding unintended data resets.",
    "explanationAr": "عندما يرجع مربع الحوار null (بسبب الإلغاء)، يجب على التطبيق تجاهله والاحتفاظ بالتاريخ الصالح المحدد حالياً لتجنب إعادة تعيين البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_57",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 57,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.57)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The smallest correct navigation API is the one whose history semantics match the required Back behavior.",
    "questionAr": "أصغر واجهة برمجة تطبيقات تنقل صحيحة هي تلك التي تتطابق دلالات سجلها مع سلوك الرجوع المطلوب.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The choice between push, replace, or removeUntil should be dictated by how the system Back button should behave for the user.",
    "explanationAr": "يجب أن يُملى الاختيار بين push أو replace أو removeUntil بناءً على الكيفية التي ينبغي أن يعمل بها زر الرجوع (Back) للمستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_58",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 58,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.58)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A test that checks only colors cannot prove that a typed route result returned to the correct caller.",
    "questionAr": "لا يمكن للاختبار الذي يتحقق من الألوان فقط أن يثبت أن نتيجة المسار المكتوبة (typed route result) قد تم إرجاعها إلى المستدعي الصحيح.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Visual tests verify the UI, but testing typed route results requires verifying the Future returned by Navigator.push resolves with the expected data object.",
    "explanationAr": "تتحقق الاختبارات المرئية من واجهة المستخدم، لكن اختبار نتائج المسار المكتوبة يتطلب التحقق من أن Future المُرجع يكتمل بكائن البيانات المتوقع.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_59",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 59,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.59)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A strong navigation explanation names the action, the route-stack effect, the result type, and the lifecycle guard when one is needed.",
    "questionAr": "يحدد التفسير القوي للتنقل الإجراء، وتأثير مكدس المسار (route-stack)، ونوع النتيجة، وحارس دورة الحياة (lifecycle guard) عند الحاجة إليه.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A complete understanding of navigation involves knowing the method used, how the history stack changes, what data is returned, and ensuring context validity across asynchronous calls.",
    "explanationAr": "يتضمن الفهم الكامل للتنقل معرفة الدالة المستخدمة، وكيف يتغير مكدس السجل، والبيانات المُرجعة، وضمان صلاحية السياق (context) بعد العمليات غير المتزامنة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_tf_60",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 60,
    "section": "Q1. True / False",
    "topic": "Navigation & Routing",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 7 (Q1.60)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A navigation diagram is incomplete if it shows only the final screen and omits the route-stack or result changes that produced it.",
    "questionAr": "يعتبر مخطط التنقل غير مكتمل إذا كان يعرض الشاشة النهائية فقط ويتجاهل مكدس المسار (route-stack) أو التغييرات في النتائج التي أنتجتها.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Navigation state is defined by the entire stack of routes, not just the currently visible screen, because the stack dictates the Back button behavior.",
    "explanationAr": "يتم تعريف حالة التنقل بواسطة مكدس المسارات بالكامل، وليس فقط الشاشة المرئية حالياً، لأن المكدس يحدد سلوك زر الرجوع.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_01",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 1,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which concepts allow a mobile user to move between different pages?",
    "questionAr": "ما هي المفاهيم التي تتيح لمستخدم الهاتف الانتقال بين الصفحات المختلفة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigation",
        "textAr": "التنقل (Navigation)"
      },
      {
        "label": "B",
        "textEn": "Routing",
        "textAr": "التوجيه والمسارات (Routing)"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "Both 'Navigation' and 'Routing' refer to the architectural concepts that allow users to move between screens in mobile apps.",
    "explanationAr": "كلا المفهومين: التنقل (Navigation) والتوجيه (Routing) يعبران عن انتقال المستخدم بين شاشات وصفحات التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_02",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 2,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In Flutter, screens and pages are known as ______, and they are widgets displayed by a Navigator.",
    "questionAr": "في فلاتر، تُعرف الشاشات والصفحات باسم ______، وهي ويدجت يتم عرضها بواسطة (Navigator).",
    "options": [
      {
        "label": "A",
        "textEn": "Navigators",
        "textAr": "ويدجت Navigators"
      },
      {
        "label": "B",
        "textEn": "routes",
        "textAr": "مسارات (routes)"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "In Flutter terminology, screens and pages are called 'routes' (Route objects) displayed and managed by a Navigator.",
    "explanationAr": "في فلاتر، تُسمى الشاشات والصفحات 'مسارات' (routes)، ويتم عرضها وإدارتها بواسطة ويدجت (Navigator).",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_03",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 3,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Flutter provides MaterialPageRoute and which two methods to demonstrate navigation between routes?",
    "questionAr": "يوفر فلاتر كلاس (MaterialPageRoute) وأي دالتين لتوضيح آلية التنقل بين المسارات؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.push",
        "textAr": "Navigator.push"
      },
      {
        "label": "B",
        "textEn": "Navigator.pop",
        "textAr": "Navigator.pop"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "Flutter provides `Navigator.push()` to display a new route and `Navigator.pop()` to return from it.",
    "explanationAr": "يوفر فلاتر الدالتين `Navigator.push()` للانتقال للمسار الجديد و `Navigator.pop()` للرجوع منه.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_04",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 4,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Navigate to one route from another route by using the ______ method.",
    "questionAr": "يتم الانتقال إلى مسار جديد من مسار آخر باستخدام دالة ______:",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.push",
        "textAr": "Navigator.push"
      },
      {
        "label": "B",
        "textEn": "Navigator.pop",
        "textAr": "Navigator.pop"
      },
      {
        "label": "C",
        "textEn": "Push",
        "textAr": "Push"
      },
      {
        "label": "D",
        "textEn": "Pop",
        "textAr": "Pop"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`Navigator.push()` is used to push a new route onto the stack from the current route.",
    "explanationAr": "تُستخدم دالة `Navigator.push()` للانتقال ودفع مسار جديد إلى أعلى مكدس الشاشات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_05",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 5,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which method removes the current route from the Navigator stack?",
    "questionAr": "أي دالة تقوم بإزالة المسار الحالي من مكدس (Navigator)؟",
    "options": [
      {
        "label": "A",
        "textEn": "pop",
        "textAr": "pop"
      },
      {
        "label": "B",
        "textEn": "push",
        "textAr": "push"
      },
      {
        "label": "C",
        "textEn": "remove",
        "textAr": "remove"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`Navigator.pop()` pops and removes the active top route from the Navigator stack.",
    "explanationAr": "تقوم دالة `pop()` بإزالة المسار العلوي النشط والعودة إلى المسار السابق في المكدس.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_06",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 6,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which line opens SecondRoute_Roq and adds it to the stack without sending data?",
    "questionAr": "أي سطر برمجي يفتح شاشة SecondRoute_Roq ويضيفها إلى المكدس دون إرسال بيانات؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.pop(context, MaterialPageRoute(SecondRoute_Roq()))",
        "textAr": "Navigator.pop(context, MaterialPageRoute(SecondRoute_Roq()))"
      },
      {
        "label": "B",
        "textEn": "Navigator.push(context, MaterialPageRoute(builder: (context) => SecondRoute_Roq()))",
        "textAr": "Navigator.push(context, MaterialPageRoute(builder: (context) => SecondRoute_Roq()))"
      },
      {
        "label": "C",
        "textEn": "Navigator.push(context, MaterialPageRoute(SecondRoute_Roq(),builder: context))",
        "textAr": "Navigator.push(context, MaterialPageRoute(SecondRoute_Roq(),builder: context))"
      },
      {
        "label": "D",
        "textEn": "Navigator.pushNamed(context, MaterialPageRoute(SecondRoute_Roq()))",
        "textAr": "Navigator.pushNamed(context, MaterialPageRoute(SecondRoute_Roq()))"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "The correct syntax for anonymous routing is `Navigator.push(context, MaterialPageRoute(builder: (context) => SecondRoute_Roq()))`.",
    "explanationAr": "الصيغة البرمجية الصحيحة للمسارات المجهولة هي `Navigator.push(context, (MaterialPageRoute)(builder: (context) => SecondRoute_Roq()))`.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_07",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 7,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the purpose of the Navigator widget in Flutter?",
    "questionAr": "ما هو الغرض الأساسي لويدجت (Navigator) في فلاتر؟",
    "options": [
      {
        "label": "A",
        "textEn": "Provides push and pop methods",
        "textAr": "يوفر دوال push و pop"
      },
      {
        "label": "B",
        "textEn": "Manages a stack of routes",
        "textAr": "Manages a stack of routes"
      },
      {
        "label": "C",
        "textEn": "Navigates between screens",
        "textAr": "Navigates between screens"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "The Navigator widget manages a stack of Route objects according to the LIFO discipline.",
    "explanationAr": "الغرض الأساسي لويدجت (Navigator) هو إدارة مكدس (Stack) من كائنات المسارات (Route) وفق مبدأ (LIFO).",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_08",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 8,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Flutter supports which two broad route styles?",
    "questionAr": "ما هما النمطان العريضان اللذان يدعمهما فلاتر لإدارة المسارات؟",
    "options": [
      {
        "label": "A",
        "textEn": "Named routes",
        "textAr": "Named routes"
      },
      {
        "label": "B",
        "textEn": "Anonymous routes",
        "textAr": "Anonymous routes"
      },
      {
        "label": "C",
        "textEn": "Named and anonymous routes",
        "textAr": "Named and anonymous routes"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "Flutter supports two major routing paradigms: Anonymous routes (direct MaterialPageRoute) and Named routes (string table lookup).",
    "explanationAr": "يدعم فلاتر أسلوبين رئيسيين للتنقل: المسارات المجهولة (Anonymous) والمسارات المسماة (Named routes).",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_09",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 9,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To read arguments passed to a named route, which API is used?",
    "questionAr": "لقراءة الوسائط الممررة إلى مسار مسمى، أي واجهة برمجية (API) تُستخدم؟",
    "options": [
      {
        "label": "A",
        "textEn": "ModalRoute.of(context)",
        "textAr": "ModalRoute.of(context)"
      },
      {
        "label": "B",
        "textEn": "ModalRoute",
        "textAr": "ModalRoute"
      },
      {
        "label": "C",
        "textEn": "Modal",
        "textAr": "Modal"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "In named routing, `ModalRoute.of(context)?.settings.arguments` extracts data passed from the caller.",
    "explanationAr": "تُستخدم العبارة `ModalRoute.of(context)?.settings.arguments` لقراءة واستخراج الوسائط الممررة في المسار المسمى.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_10",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 10,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which object is commonly used to handle navigation in a Flutter app?",
    "questionAr": "ما هو الكائن الشائع استخدامه للتعامل مع التنقل في تطبيق فلاتر؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator",
        "textAr": "كائن (Navigator)"
      },
      {
        "label": "B",
        "textEn": "NavigationView",
        "textAr": "NavigationView"
      },
      {
        "label": "C",
        "textEn": "RouteManager",
        "textAr": "RouteManager"
      },
      {
        "label": "D",
        "textEn": "NavController",
        "textAr": "NavController"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The `Navigator` object is the central manager for handling route history and screen transitions in Flutter.",
    "explanationAr": "كائن `Navigator` هو الكائن المسؤول عن إدارة تاريخ المسارات والانتقال بين الشاشات في فلاتر.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_11",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 11,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which widget is commonly used to define a material route in Flutter?",
    "questionAr": "أي ويدجت يُستخدم بشكل شائع لتعريف مسار Material في فلاتر؟",
    "options": [
      {
        "label": "A",
        "textEn": "RoutePage",
        "textAr": "RoutePage"
      },
      {
        "label": "B",
        "textEn": "MaterialPageRoute",
        "textAr": "كلاس (MaterialPageRoute)"
      },
      {
        "label": "C",
        "textEn": "RouteNavigator",
        "textAr": "RouteNavigator"
      },
      {
        "label": "D",
        "textEn": "PageViewRoute",
        "textAr": "PageViewRoute"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "`MaterialPageRoute` is the standard widget used to define full-screen route transitions conforming to Material Design.",
    "explanationAr": "ويدجت `MaterialPageRoute` هو الكلاس المخصص لتعريف مسارات الصفحات كاملة الشاشة بنمط Material Design.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_12",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 12,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which MaterialApp property registers named routes?",
    "questionAr": "أي خاصية في MaterialApp مسؤولة عن تسجيل المسارات المسماة؟",
    "options": [
      {
        "label": "A",
        "textEn": "routeList",
        "textAr": "routeList"
      },
      {
        "label": "B",
        "textEn": "namedRoutes",
        "textAr": "namedRoutes"
      },
      {
        "label": "C",
        "textEn": "routes",
        "textAr": "خاصية routes في MaterialApp"
      },
      {
        "label": "D",
        "textEn": "onRouteChange",
        "textAr": "onRouteChange"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "The `routes` property of `MaterialApp` accepts a map of named routes to their respective widget builders.",
    "explanationAr": "خاصية `routes` في ويدجت `MaterialApp` هي المسؤولة عن تسجيل خريطة المسارات المسماة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_13",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 13,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which method can remove previous routes and push a new one?",
    "questionAr": "أي دالة يمكنها إزالة المسارات السابقة ودفع مسار جديد؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.pushNamed",
        "textAr": "Navigator.pushNamed"
      },
      {
        "label": "B",
        "textEn": "Navigator.popUntil",
        "textAr": "Navigator.popUntil"
      },
      {
        "label": "C",
        "textEn": "Navigator.pushAndRemoveUntil",
        "textAr": "Navigator.pushAndRemoveUntil"
      },
      {
        "label": "D",
        "textEn": "Navigator.replaceAll",
        "textAr": "Navigator.replaceAll"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "`Navigator.pushAndRemoveUntil()` removes preceding routes based on a predicate and pushes a new route.",
    "explanationAr": "تستطيع دالة `Navigator.(pushAndRemoveUntil)()` حذف المسارات السابقة حسب شرط معين ودفع مسار جديد.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_14",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 14,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does Navigator.push() return when the new screen is popped?",
    "questionAr": "ماذا تُرجع دالة Navigator.push() عند إغلاق الشاشة الجديدة والرجوع منها؟",
    "options": [
      {
        "label": "A",
        "textEn": "A boolean value",
        "textAr": "A boolean value"
      },
      {
        "label": "B",
        "textEn": "An integer value",
        "textAr": "An integer value"
      },
      {
        "label": "C",
        "textEn": "A Future with the result",
        "textAr": "A Future with the result"
      },
      {
        "label": "D",
        "textEn": "Nothing",
        "textAr": "Nothing"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "`Navigator.push()` returns a `Future` that resolves with the value passed to `Navigator.pop(context, result)`.",
    "explanationAr": "تُرجع دالة `Navigator.push()` كائن `Future` يكتمل بالبيانات التي تعيدها الشاشة عند استدعاء pop.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_15",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 15,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which statement about onGenerateRoute is correct?",
    "questionAr": "أي عبارة حول خاصية onGenerateRoute تُعد صحيحة؟",
    "options": [
      {
        "label": "A",
        "textEn": "It automatically generates UI widgets",
        "textAr": "It automatically generates UI widgets"
      },
      {
        "label": "B",
        "textEn": "It handles dynamic route generation",
        "textAr": "It handles dynamic route generation"
      },
      {
        "label": "C",
        "textEn": "It is only for web applications",
        "textAr": "It is only for web applications"
      },
      {
        "label": "D",
        "textEn": "It disables named routes",
        "textAr": "It disables named routes"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "`onGenerateRoute` allows dynamically generating routes, inspecting route arguments, and creating fallbacks.",
    "explanationAr": "تسمح خاصية `onGenerateRoute` بإنشاء المسارات ديناميكياً والتعامل مع الوسائط وتوفير مسارات بديلة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_16",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 16,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "At the root route, which guarded operation can leave the route in place when no pop is allowed?",
    "questionAr": "عند الوصول للمسار الجذري، أي عملية محمية تترك المسار مكانه دون إغلاق التطبيق فجأة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.maybePop",
        "textAr": "Navigator.maybePop"
      },
      {
        "label": "B",
        "textEn": "Navigator.push",
        "textAr": "Navigator.push"
      },
      {
        "label": "C",
        "textEn": "Navigator.popUntil() with a new route",
        "textAr": "Navigator.popUntil() with a new route"
      },
      {
        "label": "D",
        "textEn": "Navigator.replaceAll",
        "textAr": "Navigator.replaceAll"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`Navigator.maybePop()` respects route guards and will not pop the root route, avoiding closing the app inadvertently.",
    "explanationAr": "تحترم `Navigator.maybePop()` حراس المسار ولا تغلق المسار الجذري، مما يمنع إغلاق التطبيق عن طريق الخطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_17",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 17,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which method is used to navigate to a named route?",
    "questionAr": "أي دالة تُستخدم للانتقال إلى مسار مسمى (Named route)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.loadNamed",
        "textAr": "Navigator.loadNamed"
      },
      {
        "label": "B",
        "textEn": "Navigator.pushNamed",
        "textAr": "Navigator.pushNamed"
      },
      {
        "label": "C",
        "textEn": "Navigator.routeTo",
        "textAr": "Navigator.routeTo"
      },
      {
        "label": "D",
        "textEn": "Navigator.startNamed",
        "textAr": "Navigator.startNamed"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "Navigator.pushNamed(context, '/routeName') is the specific API designed for navigating using predefined route strings.",
    "explanationAr": "دالة Navigator.pushNamed(context, '/routeName') هي الواجهة البرمجية المخصصة للتنقل باستخدام الأسماء المعرفة مسبقاً في جدول المسارات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_18",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 18,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A sort bottom sheet offers enum values and may be dismissed. What is a clear contract?",
    "questionAr": "يقدم الـ bottom sheet الخاص بالفرز قيماً من نوع enum ويمكن تجاهله (dismissed). ما هو العقد الواضح (clear contract) في هذه الحالة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Future<SortType?>",
        "textAr": "Future<SortType?>"
      },
      {
        "label": "B",
        "textEn": "Future<void> that hides all choices",
        "textAr": "Future<void> that hides all choices"
      },
      {
        "label": "C",
        "textEn": "Future<Widget> with a database row",
        "textAr": "Future<Widget> with a database row"
      },
      {
        "label": "D",
        "textEn": "Future<BuildContext?>",
        "textAr": "Future<BuildContext?>"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Because bottom sheets can be dismissed without selection, the returned `Future` should resolve to a nullable type `SortType?`.",
    "explanationAr": "نظراً لأنه يمكن إغلاق bottom sheet دون تحديد، يجب أن يرجع `Future` نوعاً يقبل القيمة الفارغة `SortType?`.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_19",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 19,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the safest handling after awaiting a picker or dialog in a State object?",
    "questionAr": "ما هي الطريقة الأكثر أماناً للتعامل مع البيانات بعد انتظار أداة اختيار (picker) أو مربع حوار (dialog) في كائن State؟",
    "options": [
      {
        "label": "A",
        "textEn": "Check mounted before using context or calling setState",
        "textAr": "Check mounted before using context or calling setState"
      },
      {
        "label": "B",
        "textEn": "Assume the State is still mounted",
        "textAr": "Assume the State is still mounted"
      },
      {
        "label": "C",
        "textEn": "Call dispose manually",
        "textAr": "Call dispose manually"
      },
      {
        "label": "D",
        "textEn": "Push the same route again",
        "textAr": "Push the same route again"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "After awaiting a dialog or picker, the widget might have been unmounted. Checking `mounted` before accessing context is required to avoid exceptions.",
    "explanationAr": "بعد انتظار مربع حوار أو أداة اختيار، قد يتم إلغاء الواجهة. يجب التحقق من `mounted` قبل استخدام context لتجنب الأخطاء.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_20",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 20,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.20)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A date picker accepts an initial date outside its legal range. What should be fixed?",
    "questionAr": "تقبل أداة اختيار التاريخ تاريخاً مبدئياً خارج نطاقها المسموح. ما الذي يجب إصلاحه؟",
    "options": [
      {
        "label": "A",
        "textEn": "Choose an initial date within firstDate and lastDate",
        "textAr": "Choose an initial date within firstDate and lastDate"
      },
      {
        "label": "B",
        "textEn": "Replace DateTime with BuildContext",
        "textAr": "Replace DateTime with BuildContext"
      },
      {
        "label": "C",
        "textEn": "Use pushReplacement",
        "textAr": "Use pushReplacement"
      },
      {
        "label": "D",
        "textEn": "Ignore the range because the dialog repairs it",
        "textAr": "Ignore the range because the dialog repairs it"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A date picker throws an error if the initial date is not within the provided `firstDate` and `lastDate` bounds.",
    "explanationAr": "تُظهر أداة اختيار التاريخ خطأً إذا لم يكن التاريخ المبدئي ضمن حدود `firstDate` و `lastDate`.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_21",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 21,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The user cancels time selection. What should the screen display?",
    "questionAr": "يقوم المستخدم بإلغاء تحديد الوقت. ماذا يجب أن تعرض الشاشة؟",
    "options": [
      {
        "label": "A",
        "textEn": "The previously stored time",
        "textAr": "The previously stored time"
      },
      {
        "label": "B",
        "textEn": "A new time chosen at random",
        "textAr": "A new time chosen at random"
      },
      {
        "label": "C",
        "textEn": "A popped route name",
        "textAr": "A popped route name"
      },
      {
        "label": "D",
        "textEn": "The database password",
        "textAr": "The database password"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If the user cancels, the picker returns null. The UI should gracefully handle this by keeping the previously selected or default time.",
    "explanationAr": "إذا ألغى المستخدم، تُرجع أداة الاختيار null. يجب أن تتعامل الواجهة مع ذلك بالاحتفاظ بالوقت المحدد مسبقاً.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_22",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 22,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "excluded",
    "source": "Lab 7 (Q2.22)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "A modern image picker returns XFile?. What does null most directly indicate?",
    "questionAr": "تُرجع أداة اختيار الصور الحديثة XFile?. إلى ماذا تشير القيمة null بشكل مباشر؟",
    "options": [
      {
        "label": "A",
        "textEn": "The user did not select an image",
        "textAr": "The user did not select an image"
      },
      {
        "label": "B",
        "textEn": "The image has already been uploaded",
        "textAr": "The image has already been uploaded"
      },
      {
        "label": "C",
        "textEn": "The route stack is empty",
        "textAr": "The route stack is empty"
      },
      {
        "label": "D",
        "textEn": "The image is a database row",
        "textAr": "The image is a database row"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_23",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 23,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "excluded",
    "source": "Lab 7 (Q2.23)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "An XFile is selected and a preview is shown. What evidence is still needed to claim server persistence?",
    "questionAr": "تم تحديد XFile وعرض معاينة له. ما الدليل الذي لا يزال مطلوباً لإثبات الحفظ الدائم (persistence) على الخادم؟",
    "options": [
      {
        "label": "A",
        "textEn": "An accepted upload response and a later server-backed read",
        "textAr": "An accepted upload response and a later server-backed read"
      },
      {
        "label": "B",
        "textEn": "The picker returned normally",
        "textAr": "The picker returned normally"
      },
      {
        "label": "C",
        "textEn": "The preview widget built",
        "textAr": "The preview widget built"
      },
      {
        "label": "D",
        "textEn": "The file has a local path",
        "textAr": "The file has a local path"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_24",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 24,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.24)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An Android picker flow can lose its result after activity recreation. Which additional handling is relevant?",
    "questionAr": "يمكن أن يفقد سير عمل أداة الاختيار في Android نتيجته بعد إعادة إنشاء النشاط (activity recreation). أي معالجة إضافية تعتبر ذات صلة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Recover lost picker data when the plugin provides it",
        "textAr": "Recover lost picker data when the plugin provides it"
      },
      {
        "label": "B",
        "textEn": "Use Navigator.popUntil for every result",
        "textAr": "Use Navigator.popUntil for every result"
      },
      {
        "label": "C",
        "textEn": "Store a BuildContext in the file",
        "textAr": "Store a BuildContext in the file"
      },
      {
        "label": "D",
        "textEn": "Disable all async code",
        "textAr": "Disable all async code"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "On Android, activity recreation can kill the app process while picking. The image_picker plugin provides methods to retrieve lost data.",
    "explanationAr": "في Android، قد تؤدي إعادة إنشاء النشاط إلى إنهاء التطبيق أثناء الاختيار. توفر الإضافة طرقاً لاستعادة البيانات المفقودة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_25",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 25,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.25)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What can a NavigatorObserver prove in a widget test?",
    "questionAr": "ما الذي يمكن لـ NavigatorObserver إثباته في اختبار الواجهة (widget test)؟",
    "options": [
      {
        "label": "A",
        "textEn": "That route lifecycle events occurred in the expected order",
        "textAr": "That route lifecycle events occurred in the expected order"
      },
      {
        "label": "B",
        "textEn": "That a server database contains a row",
        "textAr": "That a server database contains a row"
      },
      {
        "label": "C",
        "textEn": "That an image MIME type is valid",
        "textAr": "That an image MIME type is valid"
      },
      {
        "label": "D",
        "textEn": "That every widget has identical colors",
        "textAr": "That every widget has identical colors"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A `NavigatorObserver` allows a widget test to inspect and verify that navigation actions (push, pop) occurred in the correct sequence.",
    "explanationAr": "يسمح `NavigatorObserver` لاختبار الواجهة بالتحقق من حدوث أحداث التنقل (push، pop) بالتسلسل الصحيح.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_26",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 26,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.26)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "After tapping a route and waiting for animations and Futures, which test step is commonly needed before finding the final widget?",
    "questionAr": "بعد النقر على مسار وانتظار الرسوم المتحركة و Futures، ما هي خطوة الاختبار التي تشتد الحاجة إليها عادةً قبل العثور على الواجهة النهائية؟",
    "options": [
      {
        "label": "A",
        "textEn": "pumpAndSettle",
        "textAr": "pumpAndSettle"
      },
      {
        "label": "B",
        "textEn": "jsonEncode",
        "textAr": "jsonEncode"
      },
      {
        "label": "C",
        "textEn": "dispose",
        "textAr": "dispose"
      },
      {
        "label": "D",
        "textEn": "rootBundle.loadString",
        "textAr": "rootBundle.loadString"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`pumpAndSettle` repeatedly pumps frames until all animations (like route transitions) have completed, ensuring the new UI is ready.",
    "explanationAr": "تقوم `pumpAndSettle` بتحديث الإطارات حتى تكتمل جميع الرسوم المتحركة (مثل انتقالات المسار)، مما يضمن جاهزية الواجهة الجديدة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_27",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 27,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.27)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which value is most appropriate to pass through a destination constructor?",
    "questionAr": "أي قيمة هي الأنسب لتمريرها عبر مُنشئ الوجهة (destination constructor)؟",
    "options": [
      {
        "label": "A",
        "textEn": "A typed immutable Course model",
        "textAr": "A typed immutable Course model"
      },
      {
        "label": "B",
        "textEn": "A BuildContext belonging to the caller",
        "textAr": "A BuildContext belonging to the caller"
      },
      {
        "label": "C",
        "textEn": "A mutable Navigator object as domain data",
        "textAr": "A mutable Navigator object as domain data"
      },
      {
        "label": "D",
        "textEn": "A raw widget tree snapshot",
        "textAr": "A raw widget tree snapshot"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Passing a strongly typed, immutable model directly through a constructor is a reliable and clean way to provide data to a route.",
    "explanationAr": "يُعد تمرير نموذج ثابت ومحدد النوع مباشرة عبر المُنشئ طريقة موثوقة لتوفير البيانات للمسار.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_28",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 28,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.28)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the main difference between pushReplacement and push?",
    "questionAr": "ما هو الفرق الرئيسي بين pushReplacement و push؟",
    "options": [
      {
        "label": "A",
        "textEn": "Replacement removes the current route from the return history",
        "textAr": "Replacement removes the current route from the return history"
      },
      {
        "label": "B",
        "textEn": "Push always clears every route",
        "textAr": "Push always clears every route"
      },
      {
        "label": "C",
        "textEn": "Replacement can only open dialogs",
        "textAr": "Replacement can only open dialogs"
      },
      {
        "label": "D",
        "textEn": "Push never changes the stack",
        "textAr": "Push never changes the stack"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`pushReplacement` removes the current route and replaces it with the new one, meaning the user cannot go back to the replaced route.",
    "explanationAr": "تقوم `pushReplacement` بإزالة المسار الحالي واستبداله بالمسار الجديد، مما يعني عدم قدرة المستخدم على الرجوع للمسار المستبدل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_29",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 29,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.29)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the main difference between popUntil and pushAndRemoveUntil?",
    "questionAr": "ما هو الفرق الرئيسي بين popUntil و pushAndRemoveUntil؟",
    "options": [
      {
        "label": "A",
        "textEn": "The first removes existing top routes; the second pushes a route and then removes routes below according to a predicate",
        "textAr": "The first removes existing top routes; the second pushes a route and then removes routes below according to a predicate"
      },
      {
        "label": "B",
        "textEn": "They are identical in every case",
        "textAr": "They are identical in every case"
      },
      {
        "label": "C",
        "textEn": "Both only animate Hero widgets",
        "textAr": "Both only animate Hero widgets"
      },
      {
        "label": "D",
        "textEn": "Neither changes route history",
        "textAr": "Neither changes route history"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`popUntil` removes top routes until a condition is met, whereas `pushAndRemoveUntil` adds a new route first and then removes underlying routes based on a condition.",
    "explanationAr": "تقوم `popUntil` بحذف المسارات العلوية، بينما تقوم `pushAndRemoveUntil` بإضافة مسار جديد ثم إزالة المسارات السابقة بناءً على شرط.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_30",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 30,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.30)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A caller needs to know whether a destination selected Ocean. Which design is strongest?",
    "questionAr": "يحتاج المستدعي إلى معرفة ما إذا كانت الوجهة قد حددت Ocean. أي تصميم هو الأقوى؟",
    "options": [
      {
        "label": "A",
        "textEn": "A typed nullable result returned through Navigator.pop",
        "textAr": "A typed nullable result returned through Navigator.pop"
      },
      {
        "label": "B",
        "textEn": "A global string read from the AppBar",
        "textAr": "A global string read from the AppBar"
      },
      {
        "label": "C",
        "textEn": "A new route name containing Ocean",
        "textAr": "A new route name containing Ocean"
      },
      {
        "label": "D",
        "textEn": "A database query from the widget",
        "textAr": "A database query from the widget"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Returning a typed result via `Navigator.pop(context, result)` is the safest and most decoupled way to pass feedback back to the caller.",
    "explanationAr": "يُعد إرجاع نتيجة محددة النوع عبر `Navigator.pop(context, result)` الطريقة الأكثر أماناً واستقلالية لإرسال استجابة للمستدعي.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_31",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 31,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.31)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A route receives arguments = 42 but expects a Course object. What should the destination do?",
    "questionAr": "يتلقى المسار معاملات (arguments) تساوي 42 ولكنه يتوقع كائناً من نوع Course. ماذا يجب أن تفعل الوجهة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Reject or route to a controlled error because the contract is wrong",
        "textAr": "Reject or route to a controlled error because the contract is wrong"
      },
      {
        "label": "B",
        "textEn": "Cast 42 to Course without checking",
        "textAr": "Cast 42 to Course without checking"
      },
      {
        "label": "C",
        "textEn": "Use 42 as BuildContext",
        "textAr": "Use 42 as BuildContext"
      },
      {
        "label": "D",
        "textEn": "Silently show an unrelated screen",
        "textAr": "Silently show an unrelated screen"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If a route expects a specific model but receives an invalid argument, failing early or showing a safe error screen is the best contract enforcement.",
    "explanationAr": "إذا كان المسار يتوقع نموذجاً معيناً وتلقى معاملاً غير صالح، فإن الفشل المبكر أو إظهار شاشة خطأ آمنة هو الحل الأمثل.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_32",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 32,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.32)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which condition indicates that the current route is not the root route?",
    "questionAr": "أي شرط يشير إلى أن المسار الحالي ليس هو المسار الجذري (root route)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.canPop(context) is true",
        "textAr": "Navigator.canPop(context) is true"
      },
      {
        "label": "B",
        "textEn": "Navigator.canPop(context) is false",
        "textAr": "Navigator.canPop(context) is false"
      },
      {
        "label": "C",
        "textEn": "The AppBar has a title",
        "textAr": "The AppBar has a title"
      },
      {
        "label": "D",
        "textEn": "A Hero tag is present",
        "textAr": "A Hero tag is present"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`Navigator.canPop(context)` returns true if there is more than one route on the stack, indicating it is not the root route.",
    "explanationAr": "تُرجع `Navigator.canPop(context)` قيمة true إذا كان هناك أكثر من مسار واحد، مما يشير إلى أنه ليس المسار الجذري.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_33",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 33,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.33)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why can maybePop be preferable to an unconditional pop in a back action?",
    "questionAr": "لماذا يمكن أن يكون maybePop مفضلاً على pop غير المشروط في إجراء العودة؟",
    "options": [
      {
        "label": "A",
        "textEn": "It allows the navigator or a route guard to decide whether popping is allowed",
        "textAr": "It allows the navigator or a route guard to decide whether popping is allowed"
      },
      {
        "label": "B",
        "textEn": "It guarantees two routes are removed",
        "textAr": "It guarantees two routes are removed"
      },
      {
        "label": "C",
        "textEn": "It bypasses all lifecycle checks",
        "textAr": "It bypasses all lifecycle checks"
      },
      {
        "label": "D",
        "textEn": "It returns a database row",
        "textAr": "It returns a database row"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`maybePop` allows intercepting the back action (e.g., via `WillPopScope`) to prompt the user or prevent popping the root route.",
    "explanationAr": "تسمح `maybePop` باعتراض إجراء العودة (مثلاً لسؤال المستخدم) وتمنع إغلاق المسار الجذري فجأة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_34",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 34,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.34)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A dirty edit screen shows a Stay/Discard dialog. What should Stay do?",
    "questionAr": "تعرض شاشة التعديل التي تحتوي على تغييرات غير محفوظة مربع حوار البقاء/التجاهل. ماذا يجب أن يفعل خيار البقاء؟",
    "options": [
      {
        "label": "A",
        "textEn": "Close the dialog and keep the edit route",
        "textAr": "Close the dialog and keep the edit route"
      },
      {
        "label": "B",
        "textEn": "Pop the edit route twice",
        "textAr": "Pop the edit route twice"
      },
      {
        "label": "C",
        "textEn": "Delete the draft silently",
        "textAr": "Delete the draft silently"
      },
      {
        "label": "D",
        "textEn": "Replace the app root",
        "textAr": "Replace the app root"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Selecting \"Stay\" implies the user wants to continue editing, so only the dialog should be popped, leaving the edit route active.",
    "explanationAr": "يعني اختيار \"البقاء\" رغبة المستخدم في الاستمرار بالتعديل، لذا يجب إغلاق مربع الحوار فقط وترك مسار التعديل نشطاً.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_35",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 35,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.35)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What should Discard do after the user confirms?",
    "questionAr": "ماذا يجب أن يفعل خيار التجاهل (Discard) بعد تأكيد المستخدم؟",
    "options": [
      {
        "label": "A",
        "textEn": "Allow exactly one route pop and remove the unsaved screen",
        "textAr": "Allow exactly one route pop and remove the unsaved screen"
      },
      {
        "label": "B",
        "textEn": "Keep the route and pretend it was saved",
        "textAr": "Keep the route and pretend it was saved"
      },
      {
        "label": "C",
        "textEn": "Open the same dialog in a loop",
        "textAr": "Open the same dialog in a loop"
      },
      {
        "label": "D",
        "textEn": "Push a duplicate edit route",
        "textAr": "Push a duplicate edit route"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Selecting \"Discard\" means both the dialog and the edit screen should be dismissed, typically achieved by popping with a specific result or popping twice.",
    "explanationAr": "اختيار \"التجاهل\" يعني إغلاق مربع الحوار وشاشة التعديل معاً، وهو ما يتم عادةً عبر إغلاق المسارين.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_36",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 36,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.36)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which widget is the natural destination for a Material 3 three-destination shell?",
    "questionAr": "أي واجهة (widget) تعتبر الوجهة الطبيعية لغلاف من ثلاث وجهات في Material 3؟",
    "options": [
      {
        "label": "A",
        "textEn": "NavigationBar",
        "textAr": "NavigationBar"
      },
      {
        "label": "B",
        "textEn": "TabBarView only",
        "textAr": "TabBarView only"
      },
      {
        "label": "C",
        "textEn": "SimpleDialog",
        "textAr": "SimpleDialog"
      },
      {
        "label": "D",
        "textEn": "ImagePicker",
        "textAr": "ImagePicker"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`NavigationBar` is the standard Material 3 widget for switching between top-level destinations (typically 3 to 5).",
    "explanationAr": "يُعد `NavigationBar` الواجهة القياسية في Material 3 للتبديل بين الوجهات الرئيسية.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_37",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 37,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.37)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which statement about IndexedStack is correct?",
    "questionAr": "أي عبارة حول IndexedStack تعتبر صحيحة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Inactive children can remain mounted while only one is visible",
        "textAr": "Inactive children can remain mounted while only one is visible"
      },
      {
        "label": "B",
        "textEn": "It always disposes inactive children immediately",
        "textAr": "It always disposes inactive children immediately"
      },
      {
        "label": "C",
        "textEn": "It can display only route names",
        "textAr": "It can display only route names"
      },
      {
        "label": "D",
        "textEn": "It automatically validates API responses",
        "textAr": "It automatically validates API responses"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`IndexedStack` keeps all its children in the widget tree (mounted) preserving their state, but only paints the active one.",
    "explanationAr": "تحتفظ `IndexedStack` بجميع أبنائها في شجرة الواجهات (للحفاظ على حالتهم)، ولكنها ترسم فقط العنصر النشط.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_38",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 38,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.38)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A widget has a controller created in initState and used by a visible Search page. Where should cleanup occur?",
    "questionAr": "أين يجب أن يتم تنظيف المتحكم (controller) الذي تم إنشاؤه في initState والمستخدم في صفحة بحث مرئية؟",
    "options": [
      {
        "label": "A",
        "textEn": "dispose",
        "textAr": "dispose"
      },
      {
        "label": "B",
        "textEn": "build",
        "textAr": "build"
      },
      {
        "label": "C",
        "textEn": "onGenerateRoute",
        "textAr": "onGenerateRoute"
      },
      {
        "label": "D",
        "textEn": "NavigatorObserver.didPush",
        "textAr": "NavigatorObserver.didPush"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Controllers must be disposed in the `dispose` lifecycle method to prevent memory leaks when the widget is removed.",
    "explanationAr": "يجب التخلص من وحدات التحكم في دالة `dispose` لمنع تسرب الذاكرة عند إزالة الواجهة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_39",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 39,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.39)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A modal bottom sheet is dismissed by tapping outside. What result should the caller expect if its generic type is SortType?",
    "questionAr": "يتم تجاهل modal bottom sheet بالنقر خارجه. ما هي النتيجة التي يجب أن يتوقعها المستدعي إذا كان نوعه العام (generic type) هو SortType؟",
    "options": [
      {
        "label": "A",
        "textEn": "A nullable SortType result",
        "textAr": "A nullable SortType result"
      },
      {
        "label": "B",
        "textEn": "A guaranteed SortType",
        "textAr": "A guaranteed SortType"
      },
      {
        "label": "C",
        "textEn": "A route stack list",
        "textAr": "A route stack list"
      },
      {
        "label": "D",
        "textEn": "A FutureBuilder snapshot only",
        "textAr": "A FutureBuilder snapshot only"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Dismissing a bottom sheet by tapping outside completes its `Future` with `null`. The caller must handle the nullable type.",
    "explanationAr": "إغلاق bottom sheet بالنقر خارجه يكمل الـ `Future` الخاص به بـ `null`. يجب على المستدعي التعامل مع النوع القابل للفراغ.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_40",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 40,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.40)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why is checking mounted after awaiting Navigator.push important?",
    "questionAr": "لماذا يعد التحقق من mounted بعد انتظار Navigator.push أمراً مهماً؟",
    "options": [
      {
        "label": "A",
        "textEn": "The caller may have been removed while the destination was open",
        "textAr": "The caller may have been removed while the destination was open"
      },
      {
        "label": "B",
        "textEn": "It makes the result non-null",
        "textAr": "It makes the result non-null"
      },
      {
        "label": "C",
        "textEn": "It registers a Hero asset",
        "textAr": "It registers a Hero asset"
      },
      {
        "label": "D",
        "textEn": "It clears the database",
        "textAr": "It clears the database"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Because `Navigator.push` is asynchronous, the user might navigate elsewhere before it returns, potentially unmounting the current widget.",
    "explanationAr": "لأن `Navigator.push` غير متزامنة، قد يغادر المستخدم الشاشة قبل عودتها، مما يلغي الواجهة الحالية من الشجرة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_41",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 41,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.41)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which test most directly checks the complete result flow Home → Details → choose Ocean → Home feedback?",
    "questionAr": "أي اختبار يتحقق بشكل مباشر من التدفق الكامل للنتيجة: Home → Details → اختيار Ocean → استجابة Home؟",
    "options": [
      {
        "label": "A",
        "textEn": "Open the route, choose Ocean, pumpAndSettle, and assert the Home feedback",
        "textAr": "Open the route, choose Ocean, pumpAndSettle, and assert the Home feedback"
      },
      {
        "label": "B",
        "textEn": "Assert only that Home exists before tapping",
        "textAr": "Assert only that Home exists before tapping"
      },
      {
        "label": "C",
        "textEn": "Inspect only the AppBar color",
        "textAr": "Inspect only the AppBar color"
      },
      {
        "label": "D",
        "textEn": "Call dispose before navigation",
        "textAr": "Call dispose before navigation"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "An integration or widget test must interact with the UI, wait for route animations (`pumpAndSettle`), and check the returned feedback on the initial screen.",
    "explanationAr": "يجب أن يتفاعل الاختبار مع الواجهة، وينتظر حركات التنقل (`pumpAndSettle`)، ويتحقق من الاستجابة المرتجعة على الشاشة الأولى.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_42",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 42,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.42)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A route has a name but receives a missing argument. What is a robust UI outcome?",
    "questionAr": "مسار له اسم ولكنه يتلقى معامل (argument) مفقود. ما هي النتيجة القوية المتوقعة لواجهة المستخدم؟",
    "options": [
      {
        "label": "A",
        "textEn": "A controlled unknown/invalid -route fallback",
        "textAr": "A controlled unknown/invalid -route fallback"
      },
      {
        "label": "B",
        "textEn": "A blind cast and crash",
        "textAr": "A blind cast and crash"
      },
      {
        "label": "C",
        "textEn": "A random details screen",
        "textAr": "A random details screen"
      },
      {
        "label": "D",
        "textEn": "A successful database write",
        "textAr": "A successful database write"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Routing systems should fallback gracefully (e.g., a \"Page Not Found\" route) when required arguments are missing, avoiding a fatal crash.",
    "explanationAr": "يجب أن تتراجع أنظمة التوجيه بلطف (مثل إظهار شاشة \"الصفحة غير موجودة\") عند فقدان المعاملات، لتجنب انهيار التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_43",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 43,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.43)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which statement about Hero tags is most accurate?",
    "questionAr": "أي عبارة حول علامات Hero هي الأكثر دقة؟",
    "options": [
      {
        "label": "A",
        "textEn": "The source and destination need matching tags for the intended shared element",
        "textAr": "The source and destination need matching tags for the intended shared element"
      },
      {
        "label": "B",
        "textEn": "Tags are optional text labels that never affect animation",
        "textAr": "Tags are optional text labels that never affect animation"
      },
      {
        "label": "C",
        "textEn": "Tags replace route settings",
        "textAr": "Tags replace route settings"
      },
      {
        "label": "D",
        "textEn": "Tags determine database ids",
        "textAr": "Tags determine database ids"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A `Hero` animation connects two widgets across a route transition by matching their `tag` properties.",
    "explanationAr": "تقوم حركة `Hero` بربط واجهتين عبر انتقال مسار من خلال مطابقة خصائص `tag` الخاصة بهما.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_44",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 44,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.44)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A date range picker returns a nullable DateTimeRange. How should cancellation be treated?",
    "questionAr": "تُرجع أداة اختيار نطاق التاريخ قيمة DateTimeRange قابلة للترك كفارغة. كيف يجب التعامل مع الإلغاء؟",
    "options": [
      {
        "label": "A",
        "textEn": "Keep the previous range when the result is null",
        "textAr": "Keep the previous range when the result is null"
      },
      {
        "label": "B",
        "textEn": "Convert null to today automatically",
        "textAr": "Convert null to today automatically"
      },
      {
        "label": "C",
        "textEn": "Pop the entire app",
        "textAr": "Pop the entire app"
      },
      {
        "label": "D",
        "textEn": "Send DELETE to the server",
        "textAr": "Send DELETE to the server"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If the user cancels picking a date range, the returned value is null. The application should safely ignore this and retain the existing date.",
    "explanationAr": "إذا ألغى المستخدم تحديد التاريخ، تكون القيمة المرتجعة null. يجب أن يتجاهل التطبيق ذلك ويحتفظ بالتاريخ الحالي.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_45",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 45,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.45)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does a named route provide that a constructor route does not automatically provide?",
    "questionAr": "ما الذي يوفره المسار المسمى (named route) ولا يوفره مسار المُنشئ تلقائياً؟",
    "options": [
      {
        "label": "A",
        "textEn": "A string-based entry point that can be centralized or deep-linked",
        "textAr": "A string-based entry point that can be centralized or deep-linked"
      },
      {
        "label": "B",
        "textEn": "Automatic type safety for all arguments",
        "textAr": "Automatic type safety for all arguments"
      },
      {
        "label": "C",
        "textEn": "Automatic persistent storage",
        "textAr": "Automatic persistent storage"
      },
      {
        "label": "D",
        "textEn": "Automatic image upload",
        "textAr": "Automatic image upload"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Named routes use string paths, which inherently support deep linking and easier decoupling compared to direct widget constructors.",
    "explanationAr": "تستخدم المسارات المسماة مسارات نصية، مما يدعم الروابط العميقة (deep linking) ويسهل فصل المكونات مقارنة بالمُنشئات المباشرة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_46",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 46,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.46)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A destination needs an immutable course title and summary. Which constructor design is best?",
    "questionAr": "تحتاج وجهة ما إلى عنوان وملخص ثابتين (immutable) للدورة التدريبية. أي تصميم للمُنشئ هو الأفضل؟",
    "options": [
      {
        "label": "A",
        "textEn": "Required final fields with a typed Course value",
        "textAr": "Required final fields with a typed Course value"
      },
      {
        "label": "B",
        "textEn": "An optional BuildContext field",
        "textAr": "An optional BuildContext field"
      },
      {
        "label": "C",
        "textEn": "A dynamic map with no validation",
        "textAr": "A dynamic map with no validation"
      },
      {
        "label": "D",
        "textEn": "A global mutable string",
        "textAr": "A global mutable string"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Passing a typed, immutable object via required final fields ensures compile-time safety and clear data dependencies.",
    "explanationAr": "تمرير كائن محدد النوع وثابت عبر حقول final مطلوبة يضمن أمان وقت الترجمة ووضوح تبعيات البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_47",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 47,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.47)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A navigation test checks that Login is absent after entering Home. Which evidence is relevant?",
    "questionAr": "يتحقق اختبار التنقل من غياب شاشة Login بعد الدخول إلى Home. أي دليل يعتبر ذا صلة؟",
    "options": [
      {
        "label": "A",
        "textEn": "The route stack or Back behavior after the transition",
        "textAr": "The route stack or Back behavior after the transition"
      },
      {
        "label": "B",
        "textEn": "Only the Home background color",
        "textAr": "Only the Home background color"
      },
      {
        "label": "C",
        "textEn": "The number of Hero tags",
        "textAr": "The number of Hero tags"
      },
      {
        "label": "D",
        "textEn": "The font used by Login",
        "textAr": "The font used by Login"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A navigation test verifies the route transitions by checking the route stack and ensuring the previous screen is completely removed from the hierarchy.",
    "explanationAr": "يتحقق اختبار التنقل من انتقالات المسار عن طريق فحص مكدس المسارات والتأكد من إزالة الشاشة السابقة بالكامل من التسلسل الهرمي.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_48",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 48,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.48)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A user taps a picker button twice while the first dialog is open. Which design concern is most relevant?",
    "questionAr": "ينقر المستخدم على زر أداة الاختيار مرتين بينما يكون مربع الحوار الأول مفتوحاً. أي مشكلة تتعلق بالتصميم هي الأكثر صلة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Avoiding duplicate modal actions or handling the resulting state deliberately",
        "textAr": "Avoiding duplicate modal actions or handling the resulting state deliberately"
      },
      {
        "label": "B",
        "textEn": "Changing a SQL column type",
        "textAr": "Changing a SQL column type"
      },
      {
        "label": "C",
        "textEn": "Adding a second MySQL connection",
        "textAr": "Adding a second MySQL connection"
      },
      {
        "label": "D",
        "textEn": "Replacing JSON with XML",
        "textAr": "Replacing JSON with XML"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Triggering a modal action multiple times quickly can push multiple dialogs. Developers must disable buttons or track state to avoid duplicate overlays.",
    "explanationAr": "قد يؤدي النقر السريع إلى فتح مربعات حوار متعددة. يجب على المطورين تعطيل الأزرار أو تتبع الحالة لمنع ذلك.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_49",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 49,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.49)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which approach keeps a search query when the user changes tabs?",
    "questionAr": "أي نهج يحافظ على استعلام البحث (search query) عندما يغير المستخدم علامات التبويب؟",
    "options": [
      {
        "label": "A",
        "textEn": "Keep the search page state alive in a stable navigation shell",
        "textAr": "Keep the search page state alive in a stable navigation shell"
      },
      {
        "label": "B",
        "textEn": "Recreate the page on every selection",
        "textAr": "Recreate the page on every selection"
      },
      {
        "label": "C",
        "textEn": "Pop the search route on every tap",
        "textAr": "Pop the search route on every tap"
      },
      {
        "label": "D",
        "textEn": "Store BuildContext in the query",
        "textAr": "Store BuildContext in the query"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Using a Stateful navigation shell allows each tab to maintain its own navigation state. This ensures that the search query is kept alive when the user switches between tabs, rather than being discarded or recreated.",
    "explanationAr": "استخدام غلاف تنقل ذو حالة (Stateful navigation shell) يسمح لكل علامة تبويب بالاحتفاظ بحالتها الخاصة، مما يضمن بقاء استعلام البحث عند التبديل بين التبويبات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_50",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 50,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.50)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A route result is nullable because dismissal is legal. Which condition shows a selected value?",
    "questionAr": "نتيجة المسار قابلة للترك كفارغة (nullable) لأن التجاهل يعتبر إجراءً مسموحاً. أي شرط يعرض قيمة محددة؟",
    "options": [
      {
        "label": "A",
        "textEn": "result != null",
        "textAr": "result != null"
      },
      {
        "label": "B",
        "textEn": "result == null only",
        "textAr": "result == null only"
      },
      {
        "label": "C",
        "textEn": "Navigator.canPop(result)",
        "textAr": "Navigator.canPop(result)"
      },
      {
        "label": "D",
        "textEn": "mounted == result",
        "textAr": "mounted == result"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Since dismissing a dialog or route without selecting an option returns null, checking `result != null` is the standard way to verify that a value was actually selected and returned.",
    "explanationAr": "بما أن تجاهل مسار أو حوار يعيد null، فإن التحقق من `result != null` هو الطريقة القياسية للتأكد من أن المستخدم اختار قيمة بالفعل وتم إرجاعها.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_51",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 51,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.51)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What should a navigation API choice be judged against?",
    "questionAr": "سؤال متعلق بالمنهج: What should a navigation (API) choice be judged against?",
    "options": [
      {
        "label": "A",
        "textEn": "The required visible destination and Back/return semantics",
        "textAr": "The required visible destination and Back/return semantics"
      },
      {
        "label": "B",
        "textEn": "The shortest method name only",
        "textAr": "The shortest method name only"
      },
      {
        "label": "C",
        "textEn": "The color palette",
        "textAr": "The color palette"
      },
      {
        "label": "D",
        "textEn": "The database engine",
        "textAr": "The database engine"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A navigation API should be chosen based on whether it can properly represent the target destination and handle the desired 'Back' button behavior and return semantics.",
    "explanationAr": "يجب اختيار واجهة التنقل بناءً على قدرتها على تمثيل الوجهة المطلوبة بشكل صحيح ومعالجة سلوك زر 'الرجوع' ودلالات إرجاع البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_52",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 52,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.52)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which statement best separates navigation data from persistent data?",
    "questionAr": "أي عبارة تفصل بشكل أفضل بين بيانات التنقل (navigation data) والبيانات الدائمة (persistent data)؟",
    "options": [
      {
        "label": "A",
        "textEn": "A route result communicates between active screens; persistence survives a later restart",
        "textAr": "A route result communicates between active screens; persistence survives a later restart"
      },
      {
        "label": "B",
        "textEn": "They are always identical",
        "textAr": "They are always identical"
      },
      {
        "label": "C",
        "textEn": "A route result always writes SQLite",
        "textAr": "A route result always writes SQLite"
      },
      {
        "label": "D",
        "textEn": "Persistence exists only in BuildContext",
        "textAr": "Persistence exists only in BuildContext"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Navigation data (like route results) is temporary and only passed between active screens in memory. Persistent data is saved to storage and survives app restarts.",
    "explanationAr": "بيانات التنقل (مثل نتائج المسارات) مؤقتة وتُنقل بين الشاشات النشطة في الذاكرة. بينما البيانات الدائمة تُحفظ في التخزين وتبقى بعد إعادة تشغيل التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_53",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 53,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.53)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A widget uses a context after an await but the route was popped. What risk exists?",
    "questionAr": "سؤال متعلق بالمنهج: A widget uses a (context) after an (await) but the route was popped. What risk exists?",
    "options": [
      {
        "label": "A",
        "textEn": "An invalid context operation or lifecycle error",
        "textAr": "An invalid context operation or lifecycle error"
      },
      {
        "label": "B",
        "textEn": "Automatic route restoration",
        "textAr": "Automatic route restoration"
      },
      {
        "label": "C",
        "textEn": "Automatic type conversion",
        "textAr": "Automatic type conversion"
      },
      {
        "label": "D",
        "textEn": "A guaranteed successful pop",
        "textAr": "A guaranteed successful pop"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Using a `BuildContext` across asynchronous gaps (after an `await`) is risky because the widget might be unmounted or the route popped by the time the operation completes, leading to lifecycle errors. You should check `mounted` before using the context.",
    "explanationAr": "استخدام `BuildContext` بعد عملية غير متزامنة (await) محفوف بالمخاطر لأن الويدجت قد يُزال من الشاشة، مما يؤدي إلى أخطاء في دورة الحياة. يجب التحقق من `mounted` أولاً.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_54",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 54,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.54)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does a successful pop with a value do to the caller?",
    "questionAr": "ماذا يفعل الـ pop الناجح مع قيمة (value) للمستدعي؟",
    "options": [
      {
        "label": "A",
        "textEn": "Completes the caller’s push Future with that value",
        "textAr": "Completes the caller’s push Future with that value"
      },
      {
        "label": "B",
        "textEn": "Changes the database schema",
        "textAr": "Changes the database schema"
      },
      {
        "label": "C",
        "textEn": "Creates a Hero tag",
        "textAr": "Creates a Hero tag"
      },
      {
        "label": "D",
        "textEn": "Removes every route below the caller",
        "textAr": "Removes every route below the caller"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When `Navigator.push` is called, it returns a `Future`. A successful `Navigator.pop(context, value)` completes that pending Future with the provided value, returning it to the caller.",
    "explanationAr": "عند استدعاء `Navigator.push`، فإنه يُرجع `Future`. يؤدي استدعاء `Navigator.pop(context, value)` إلى إكمال هذا الـ `Future` المعلق وإرجاع القيمة للمستدعي.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_55",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 55,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.55)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which statement about modal routes is correct?",
    "questionAr": "أي عبارة حول المسارات المشروطة (modal routes) تعتبر صحيحة؟",
    "options": [
      {
        "label": "A",
        "textEn": "They temporarily overlay the current route and can return a value",
        "textAr": "They temporarily overlay the current route and can return a value"
      },
      {
        "label": "B",
        "textEn": "They always replace the app root",
        "textAr": "They always replace the app root"
      },
      {
        "label": "C",
        "textEn": "They cannot be dismissed",
        "textAr": "They cannot be dismissed"
      },
      {
        "label": "D",
        "textEn": "They are database transactions",
        "textAr": "They are database transactions"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Modal routes (like dialogs or bottom sheets) act as an overlay on top of the current screen and block interaction with the underlying route. They can return a value to the caller when dismissed.",
    "explanationAr": "المسارات المشروطة (مثل النوافذ المنبثقة) تظهر كطبقة مؤقتة فوق الشاشة الحالية وتمنع التفاعل مع ما تحتها، ويمكنها إرجاع قيمة عند إغلاقها.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_56",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 56,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.56)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A screen must keep its previous date if the user cancels a picker. What implementation rule follows?",
    "questionAr": "يجب أن تحتفظ الشاشة بتاريخها السابق إذا قام المستخدم بإلغاء أداة الاختيار. ما هي قاعدة التنفيذ التي تترتب على ذلك؟",
    "options": [
      {
        "label": "A",
        "textEn": "Assign the new value only when the nullable result is non-null",
        "textAr": "Assign the new value only when the nullable result is non-null"
      },
      {
        "label": "B",
        "textEn": "Assign null on every cancellation",
        "textAr": "Assign null on every cancellation"
      },
      {
        "label": "C",
        "textEn": "Call pushReplacement on cancellation",
        "textAr": "Call pushReplacement on cancellation"
      },
      {
        "label": "D",
        "textEn": "Rebuild the whole app without State",
        "textAr": "Rebuild the whole app without State"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If the user cancels the picker, it returns null. To preserve the previously selected date, the state should only be updated if the result is not null.",
    "explanationAr": "إذا قام المستخدم بإلغاء أداة الاختيار، فإنها ترجع null. للاحتفاظ بالتاريخ السابق، يجب تحديث الحالة فقط إذا كانت النتيجة غير فارغة (non-null).",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_57",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 57,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.57)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A strong answer to a navigation tracing task should identify what?",
    "questionAr": "ما الذي يجب أن تحدده الإجابة القوية على مهمة تتبع التنقل (navigation tracing)؟",
    "options": [
      {
        "label": "A",
        "textEn": "The stack after each action and the data/result path",
        "textAr": "The stack after each action and the data/result path"
      },
      {
        "label": "B",
        "textEn": "Only widget colors",
        "textAr": "Only widget colors"
      },
      {
        "label": "C",
        "textEn": "Only the final route name",
        "textAr": "Only the final route name"
      },
      {
        "label": "D",
        "textEn": "Only the number of buttons",
        "textAr": "Only the number of buttons"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Tracing navigation requires understanding the state of the route stack at each step, as well as how data flows between routes (e.g., arguments passed in and results popped back).",
    "explanationAr": "يتطلب تتبع التنقل فهم حالة مكدس المسارات بعد كل إجراء، بالإضافة إلى كيفية تدفق البيانات بين المسارات (مثل تمرير المعاملات وإرجاع النتائج).",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_58",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 58,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.58)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A screen opens a modal choice and then updates only when a non-null value returns. What does this design preserve?",
    "questionAr": "تفتح شاشة خياراً مشروطاً (modal choice) ثم تُحدَّث فقط عندما تعود قيمة غير فارغة (non-null value). ما الذي يحافظ عليه هذا التصميم؟",
    "options": [
      {
        "label": "A",
        "textEn": "The previous state on cancellation",
        "textAr": "The previous state on cancellation"
      },
      {
        "label": "B",
        "textEn": "A duplicate route on every dismissal",
        "textAr": "A duplicate route on every dismissal"
      },
      {
        "label": "C",
        "textEn": "A database row for every choice",
        "textAr": "A database row for every choice"
      },
      {
        "label": "D",
        "textEn": "A permanent result after uninstall",
        "textAr": "A permanent result after uninstall"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "By only updating the state when a valid, non-null choice is returned, the app ensures that the original state is preserved if the user decides to cancel or dismiss the modal without making a choice.",
    "explanationAr": "من خلال تحديث الحالة فقط عند إرجاع خيار صحيح غير فارغ، يضمن التطبيق الاحتفاظ بالحالة الأصلية إذا قرر المستخدم إلغاء النافذة المنبثقة دون اختيار.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_59",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 59,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.59)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which navigation trace is most useful when diagnosing an unexpected Back destination?",
    "questionAr": "أي تتبع للتنقل (navigation trace) هو الأكثر فائدة عند تشخيص وجهة عودة (Back destination) غير متوقعة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Record the stack before and after each push, pop, replacement, or removal",
        "textAr": "Record the stack before and after each push, pop, replacement, or removal"
      },
      {
        "label": "B",
        "textEn": "Record only the final widget color",
        "textAr": "Record only the final widget color"
      },
      {
        "label": "C",
        "textEn": "Record only the dialog title",
        "textAr": "Record only the dialog title"
      },
      {
        "label": "D",
        "textEn": "Record the number of Text widgets",
        "textAr": "Record the number of Text widgets"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To diagnose routing issues, it is essential to track how the route stack changes after every navigation event (push, pop, replace). This reveals exactly which routes are active.",
    "explanationAr": "لتشخيص مشاكل التنقل، من الضروري تتبع كيفية تغير مكدس المسارات بعد كل حدث تنقل (push، pop، replace)، مما يوضح بدقة المسارات النشطة.",
    "codeSnippet": null
  },
  {
    "id": "lab7_mcq_60",
    "lecture": 7,
    "lab": "Lab 7",
    "num": 60,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Navigation & Routing",
    "subtopic": "Navigator Operations",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 7 (Q2.60)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A details route needs to return a saved item id to its caller. Which contract is clearest?",
    "questionAr": "يحتاج مسار التفاصيل إلى إرجاع معرف عنصر (item id) محفوظ إلى مستدعيه. أي عقد هو الأوضح؟",
    "options": [
      {
        "label": "A",
        "textEn": "Navigator.push<int> with Navigator.pop(context, id)",
        "textAr": "Navigator.push<int> with Navigator.pop(context, id)"
      },
      {
        "label": "B",
        "textEn": "Navigator.push<void> and a global mutable id",
        "textAr": "Navigator.push<void> and a global mutable id"
      },
      {
        "label": "C",
        "textEn": "A route name that contains the id with no parsing",
        "textAr": "A route name that contains the id with no parsing"
      },
      {
        "label": "D",
        "textEn": "A BuildContext stored in the item",
        "textAr": "A BuildContext stored in the item"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Strong typing with `Navigator.push<int>` clearly documents that the route returns an integer, and `Navigator.pop(context, id)` fulfills that contract by returning the exact ID type.",
    "explanationAr": "استخدام النوع الصارم `Navigator.push<int>` يوضح بوضوح أن المسار يرجع رقماً صحيحاً (int)، و `Navigator.pop(context, id)` يفي بهذا العقد عبر إرجاع المعرف بالنوع المطابق.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_01",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 1,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "async & await",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Asynchronous programming is a form of programming in which the program executes every operation line by line before another operation can proceed.",
    "questionAr": "البرمجة غير المتزامنة هي أسلوب برمجة ينفذ فيه البرنامج كل عملية سطراً بسطر قبل أن تتمكن عملية أخرى من البدء.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Synchronous programming executes line-by-line; asynchronous programming allows other operations to run while waiting.",
    "correctionAr": "البرمجة المتزامنة (Synchronous) هي التي تنفذ سطراً بسطر، بينما البرمجة غير المتزامنة تسمح للتطبيق بمواصلة العمل دون تجميد.",
    "explanationEn": "False. Executing strictly line-by-line and blocking subsequent work until the current line finishes is the definition of Synchronous programming. Asynchronous programming lets operations start and complete independently in the background.",
    "explanationAr": "خطأ. تنفيذ الأوامر سطراً بسطر مع تجميد ما بعده هو تعريف البرمجة المتزامنة (Synchronous). أما البرمجة غير المتزامنة (Asynchronous) فتتيح بدء العمليات والانتظار دون تعطيل واجهة المستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_02",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 2,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "async & await",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Asynchronous operations let the program continue useful work while it waits for another operation to finish.",
    "questionAr": "تتيح العمليات غير المتزامنة للبرنامج مواصلة العمل المفيد والتفاعل أثناء انتظاره لانتهاء عملية أخرى.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Asynchronous operations prevent UI freezes on Flutter's single UI thread by yielding execution to the event loop while I/O or network tasks are pending.",
    "explanationAr": "صحيح. العمليات غير المتزامنة تمنع تجمد الشاشة عبر تفويض المهام المستغرقة لوقت (كالشبكة والملفات) لحلقة الأحداث واستمرار استجابة واجهة المستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_03",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 3,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Future Lifecycle",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An uncompleted Future is already completed and has returned its data.",
    "questionAr": "كائن الـ (Future) غير المكتمل (Uncompleted) هو كائن اكتمل بالفعل وقام بإرجاع بياناته.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "An uncompleted Future has NOT yet finished and is waiting to produce either a value or an error.",
    "correctionAr": "كائن (Future) غير المكتمل لم ينتهِ بعد، وما زال ينتظر إنتاج قيمة أو إرجاع خطأ.",
    "explanationEn": "False. An Uncompleted Future is in a pending state awaiting the completion of an asynchronous operation. Once finished, it transitions to Completed (with data or with error).",
    "explanationAr": "خطأ. حالة Uncompleted تعني أن كائن الـ (Future) ما زال قيد الانتظار ولم ينتهِ بعد. وعند الانتهاء يتحول إلى Completed (مع بيانات أو خطأ).",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_04",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 4,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "async & await",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A synchronous function performs at least one asynchronous operation and can also perform synchronous operations.",
    "questionAr": "الدالة المتزامنة هي دالة تنفذ عملية غير متزامنة واحدة على الأقل ويمكنها أيضاً تنفيذ عمليات متزامنة.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "An ASYNCHRONOUS function performs at least one asynchronous operation and is marked with the async keyword.",
    "correctionAr": "الدالة غير المتزامنة (Asynchronous) هي التي تنفذ عملية غير متزامنة واحدة على الأقل وتُوسم بكلمة (async).",
    "explanationEn": "False. A function that performs an asynchronous operation (like await) must be declared with `async` and returns a Future, making it an asynchronous function.",
    "explanationAr": "خطأ. الدالة التي تحتوي على عملية غير متزامنة (مثل await) يجب وسمها بالكلمة المحجوزة (async) وترجع (Future)، وبذلك تصبح دالة غير متزامنة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_05",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 5,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "FutureBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "You can use FutureBuilder to use or display data returned by a Future.",
    "questionAr": "يمكنك استخدام ويدجت (FutureBuilder) لاستخدام أو عرض البيانات التي يرجعها كائن (Future).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. FutureBuilder is a Flutter widget that listens to a Future and rebuilds itself based on its latest AsyncSnapshot states (waiting, done, error, data).",
    "explanationAr": "صحيح. ويدجت (FutureBuilder) يستمع لكائن (Future) ويعيد بناء واجهة المستخدم تلقائياً حسب الحالة اللحظية (انتظار، نجاح مع بيانات، أو خطأ).",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_06",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 6,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "snapshot.error returns the latest data, and snapshot.data returns the newest error object.",
    "questionAr": "تُرجع الخاصية snapshot.error أحدث البيانات، وتُرجع snapshot.data كائن الخطأ الأحدث.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "snapshot.data returns the data payload, while snapshot.error returns the error object.",
    "correctionAr": "الخاصية snapshot.data تُرجع البيانات، بينما snapshot.error تُرجع كائن الخطأ، وليس العكس.",
    "explanationEn": "False. In AsyncSnapshot, `snapshot.data` holds the returned payload and `snapshot.error` holds the exception/error.",
    "explanationAr": "خطأ. في كائن AsyncSnapshot، فإن `snapshot.data` مخصصة للبيانات الناجحة، بينما `snapshot.error` مخصصة لكائن الخطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_07",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 7,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Future Lifecycle",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Uncompleted describes a Future before it has produced a value or error.",
    "questionAr": "تصف حالة 'غير مكتمل' (Uncompleted) كائن (Future) قبل أن ينتج قيمة أو يرمي خطأ.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. While the asynchronous operation is in progress, the Future remains in the uncompleted state.",
    "explanationAr": "صحيح. طالما أن العملية غير المتزامنة لا تزال قيد التنفيذ، يظل كائن (Future) في حالة غير مكتمل (Uncompleted).",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_08",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 8,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "async & await",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A synchronous function is a function labeled with the async keyword.",
    "questionAr": "الدالة المتزامنة هي دالة يتم وسمها بالكلمة المفتاحية (async).",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "A function labeled with async is an ASYNCHRONOUS function.",
    "correctionAr": "الدالة الموسومة بالكلمة (async) هي دالة غير متزامنة (Asynchronous).",
    "explanationEn": "False. Marking a function with `async` makes it an asynchronous function that returns a Future.",
    "explanationAr": "خطأ. وسم أي دالة بـ `async` يجعلها دالة غير متزامنة ترجع كائناً من نوع (Future).",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_09",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 9,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "FutureBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "FutureBuilder can represent waiting, error, and data through its AsyncSnapshot.",
    "questionAr": "يستطيع ويدجت (FutureBuilder) تمثيل حالات الانتظار والخطأ والبيانات من خلال كائن AsyncSnapshot الخاص به.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. FutureBuilder provides an AsyncSnapshot parameter inside builder, enabling checks like `snapshot.connectionState == ConnectionState.waiting`, `snapshot.hasError`, and `snapshot.hasData`.",
    "explanationAr": "صحيح. يوفر (FutureBuilder) كائن AsyncSnapshot داخل دالة builder للتحقق من الانتظار، وجود خطأ، أو توفر البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_10",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 10,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "FutureBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "FutureBuilder should normally receive a stable Future rather than a newly created request on every build.",
    "questionAr": "يجب على (FutureBuilder) عادةً استلام كائن (Future) ثابت تم تخزينه مسبقاً بدلاً من إنشاء طلب جديد مع كل عملية (build).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Instantiating a new Future inside `build()` causes it to re-execute repeatedly on every widget rebuild. It should be instantiated in `initState()` and assigned to a member variable.",
    "explanationAr": "صحيح. إنشاء كائن الـ (Future) داخل دالة (build()) يجعله يُعاد تنفيذه مع كل إعادة رسم للشاشة، لذا يجب إنشاؤه في (initState) وتخزينه في متغير ثابت.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_11",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 11,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Streams & StreamBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A Stream can deliver multiple values over time and then complete or report an error.",
    "questionAr": "يمكن للـ (Stream) تسليم قيم متعددة على مدار الوقت ثم يكتمل أو يُبلغ عن حدوث خطأ.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Unlike a Future which delivers only a single value once, a Stream provides an asynchronous sequence of multiple events over time.",
    "explanationAr": "صحيح. على عكس الـ (Future) الذي يرجع قيمة واحدة فقط، يوفر الـ (Stream) تدفقاً متتابعاً من عدة أحداث أو بيانات عبر الزمن.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_12",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 12,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Streams & StreamBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An async* function returns a Stream and can use yield to emit values over time.",
    "questionAr": "تُرجع الدالة الموسومة بـ (async)* كائناً من نوع (Stream) ويمكنها استخدام yield لضخ وبث القيم عبر الزمن.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. In Dart, an asynchronous generator uses `async*` syntax and emits values using the `yield` statement, returning a `Stream`.",
    "explanationAr": "صحيح. في لغة دارت، تُستخدم `async*` مع المولدات غير المتزامنة التي تبث قيماً متتابعة باستخدام أمر `yield` وترجع كائن (Stream).",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_13",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 13,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Streams & StreamBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "await for consumes stream events in sequence until the stream is done or errors.",
    "questionAr": "يستقبل التكرار (await) for أحداث الـ stream بالتسلسل حتى يكتمل التدفق أو يرمي خطأ.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The `await for` loop is Dart's syntax for asynchronously iterating over values emitted by a Stream until it closes.",
    "explanationAr": "صحيح. حلقة `await for` مخصصة في دارت للاستماع التسلسلي لأحداث الـ (Stream) قيمة تلو الأخرى حتى ينتهي التدفق.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_14",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 14,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Dart Isolate & Threads",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A single-subscription stream is not automatically safe for multiple simultaneous listeners.",
    "questionAr": "الـ (Stream) أحادي الاشتراك (single-subscription) غير آمن تلقائياً للاستماع المتزامن من عدة مستمعين.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. A single-subscription Stream allows only one listener; attempting to listen a second time throws a StateError. Broadcast streams are required for multiple listeners.",
    "explanationAr": "صحيح. الـ (Stream) أحادي الاشتراك لا يسمح إلا بمستمع واحد فقط؛ ومحاولة الاستماع مرة ثانية ترمي خطأ StateError، ويجب تحويله إلى Broadcast stream إن أردنا عدة مستمعين.",
    "codeSnippet": null
  },
  {
    "id": "lab8_tf_15",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 15,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Future Lifecycle",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The following direct print fragment completes its direct statements before any delayed callback can print.",
    "questionAr": "في الكود المباشر المتتالي، تنتهي الأوامر الطباعية المباشرة أولاً قبل تنفيذ أي دالة تأخير غير متزامنة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Synchronous statements execute immediately on the main isolate execution thread. Any delayed callback is pushed to the event queue and processed later.",
    "explanationAr": "صحيح. الأوامر المتزامنة المباشرة تنفذ فوراً في الخيط الرئيسي، بينما الدوال المؤجلة توضع في طابور حلقة الأحداث لتنفذ بعد انتهاء المهام المباشرة.",
    "codeSnippet": "void main() {\n  print('Method 1');\n  print('Method 2');\n  print('Method 3');\n}"
  },
  {
    "id": "lab8_tf_16",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 16,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "async & await",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The following delayed fragment prints Method 1 and Method 3 immediately, then Method 2 later.",
    "questionAr": "يطبع كود التأخير (delayed fragment) العبارتين Method 1 و Method 3 فوراً، ثم يطبع Method 2 لاحقاً بعد انتهاء التأخير.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `Method 1` runs, `Future.delayed` schedules `Method 2` for 2 seconds later in the event queue, `Method 3` runs immediately, and after 2 seconds `Method 2` prints.",
    "explanationAr": "صحيح. تنفذ Method 1 ثم تجدول (Future).delayed الدالة Method 2 بعد ثانيتين في طابور الأحداث، فتنفذ Method 3 فوراً، ثم تطبع Method 2 لاحقاً.",
    "codeSnippet": "void main() {\n  print('Method 1');\n  Future.delayed(const Duration(seconds: 2), () => print('Method 2'));\n  print('Method 3');\n}"
  },
  {
    "id": "lab8_tf_17",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 17,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "FutureBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The following awaited fetch pauses the async function while the Future is pending, then resumes with the name.",
    "questionAr": "استخدام await يوقف تنفيذ الدالة غير المتزامنة مؤقتاً أثناء انتظار الـ (Future)، ثم يستأنف التنفيذ بالقيمة المرجعة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The `await` keyword pauses execution of the surrounding async function until the awaited Future completes, then assigns the result and continues sequentially.",
    "explanationAr": "صحيح. الكلمة المفتاحية `await` توقف تنفيذ الدالة غير المتزامنة مؤقتاً لحين اكتمال الـ (Future) ثم تستأنف تنفيذ الأسطر التالية بالبيانات الناتجة.",
    "codeSnippet": "Future<String> fetchName() async {\n  await Future.delayed(const Duration(seconds: 2));\n  return 'Ruqaih Salman';\n}\nFuture<void> main() async {\n  print('Before request');\n  final name = await fetchName();\n  print('Name: $name');\n  print('After request');\n}"
  },
  {
    "id": "lab8_tf_18",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 18,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "FutureBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In this FutureBuilder, the Retry branch represents a completed failure rather than a waiting state.",
    "questionAr": "في هذا الـ (FutureBuilder)، يمثل فرع Retry حالة الفشل بعد الاكتمال بخطأ (hasError) وليس حالة الانتظار.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `snapshot.hasError` is only true when the Future has completed with an exception or error, triggering the Retry UI.",
    "explanationAr": "صحيح. الشرط `snapshot.hasError` لا يتحقق إلا عند فشل الـ (Future) واكتماله بخطأ، مما يعرض زر المحاولة مجدداً (Retry).",
    "codeSnippet": "FutureBuilder<String>(\n  future: storedFuture,\n  builder: (context, snapshot) {\n    if (snapshot.hasError) {\n      return ElevatedButton(onPressed: retry, child: const Text('Retry'));\n    }\n    return const CircularProgressIndicator();\n  },\n)"
  },
  {
    "id": "lab8_tf_19",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 19,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "FutureBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In this FutureBuilder, the data branch represents a successful completed value, including an explicitly empty value when the design permits it.",
    "questionAr": "في هذا الـ (FutureBuilder)، يمثل فرع snapshot.hasData نجاح اكتمال العملية والحصول على قيمة صالحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `snapshot.hasData` checks that the computation has completed successfully and provided a non-null result.",
    "explanationAr": "صحيح. الخاصية `snapshot.hasData` تعبر عن اكتمال العملية بنجاح وتوفر قيمة ناتجة غير فارغة.",
    "codeSnippet": "FutureBuilder<String>(\n  future: storedFuture,\n  builder: (context, snapshot) {\n    if (snapshot.hasData) return Text(snapshot.requireData);\n    return const CircularProgressIndicator();\n  },\n)"
  },
  {
    "id": "lab8_tf_20",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 20,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Streams & StreamBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.20)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In this StreamBuilder, a new DateTime event can cause a rebuild without the caller manually requesting every frame.",
    "questionAr": "في هذا الـ (StreamBuilder)، يتسبب كل حدث DateTime جديد في إعادة بناء الويدجت تلقائياً دون الحاجة لطلب تحديث الإطارات يدوياً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. StreamBuilder listens to the stream and automatically triggers `setState()` internally whenever a new event is emitted.",
    "explanationAr": "صحيح. يستمع (StreamBuilder) لأحداث التدفق ويستدعي داخلياً إعادة البناء (setState) مع كل عنصر زمني جديد يضخه الـ (Stream).",
    "codeSnippet": "StreamBuilder<DateTime>(\n  stream: clockStream(),\n  builder: (context, snapshot) => Text('${snapshot.data}'),\n)"
  },
  {
    "id": "lab8_tf_21",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 21,
    "section": "Q1. True / False",
    "topic": "Asynchronous Programming",
    "subtopic": "Streams & StreamBuilder",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 8 (Q1.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A counter stream can emit each value to the subscription and then expose a done state after the generator finishes.",
    "questionAr": "يمكن لـ stream العداد (counter stream) ضخ كل قيمة إلى الاشتراك ثم إعلان حالة الانتهاء (done) بمجرد اكتمال المولد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. An `async*` generator yields values one by one, and when the loop completes and function returns, it automatically closes the stream with a done event.",
    "explanationAr": "صحيح. يضخ مولد `async*` القيم واحدة تلو الأخرى عبر yield، وعند اكتمال الحلقة وخروج الدالة يتم إغلاق الـ stream بإشارة اكتمال (done).",
    "codeSnippet": "Stream<int> counterStream() async* {\n  for (var value = 1; value <= 5; value++) {\n    yield value;\n  }\n}"
  },
  {
    "id": "lab8_mcq_01",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 1,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which programming style allows work to continue while a single isolate waits for an event?",
    "questionAr": "أي أسلوب برمجة يسمح بمواصلة العمل والتفاعل بينما ينتظر الخيط الأحادي حدوث حدث معين؟",
    "options": [
      {
        "label": "A",
        "textEn": "Synchronous",
        "textAr": "متزامن (Synchronous)"
      },
      {
        "label": "B",
        "textEn": "Asynchronous",
        "textAr": "غير متزامن (Asynchronous)"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "Asynchronous programming enables non-blocking code execution, allowing the single Dart isolate to handle other events while waiting for I/O tasks.",
    "explanationAr": "تتيح البرمجة غير المتزامنة (Asynchronous) تنفيذ المهام دون تجميد الخيط، مما يسمح للخيط الوحيد بمعالجة أحداث أخرى أثناء انتظار العمليات الخارجية.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_02",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 2,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which Dart/Flutter APIs are used to implement asynchronous programming?",
    "questionAr": "ما هي الواجهات البرمجية في دارت وفلاتر المستخدمة لتطبيق البرمجة غير المتزامنة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Future",
        "textAr": "كائن (Future)"
      },
      {
        "label": "B",
        "textEn": "async/await",
        "textAr": "صيغة (async)/(await)"
      },
      {
        "label": "C",
        "textEn": "Future and async/await",
        "textAr": "كائن (Future) وصيغة (async)/(await)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "Both Future (representing deferred values) and async/await syntax are the foundational APIs for asynchronous programming in Dart.",
    "explanationAr": "كلا المفهومين: كائنات (Future) وصيغة (async)/(await) هما الأساس الرسمي للبرمجة غير المتزامنة في دارت وفلاتر.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_03",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 3,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which set contains common asynchronous operations?",
    "questionAr": "أي مجموعة تحتوي على عمليات غير متزامنة شائعة في تطبيقات فلاتر؟",
    "options": [
      {
        "label": "A",
        "textEn": "Fetching data over a network",
        "textAr": "جلب البيانات عبر الشبكة"
      },
      {
        "label": "B",
        "textEn": "Writing to a database",
        "textAr": "الكتابة في قاعدة البيانات"
      },
      {
        "label": "C",
        "textEn": "Reading data from a file",
        "textAr": "قراءة البيانات من ملف"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "All of these operations (network calls, database reads/writes, file access) require time outside the CPU and are handled asynchronously in Flutter.",
    "explanationAr": "جميع ما ذُكر (جلب البيانات عبر الشبكة، الكتابة في قواعد البيانات، وقراءة الملفات) هي عمليات غير متزامنة تستغرق وقتاً وتتطلب عدم حظر الواجهة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_04",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 4,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which states can a Future have?",
    "questionAr": "ما هي الحالات التي يمكن أن يتواجد فيها كائن الـ (Future)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Uncompleted",
        "textAr": "غير مكتمل (Uncompleted)"
      },
      {
        "label": "B",
        "textEn": "Completed with data",
        "textAr": "مكتمل مع بيانات"
      },
      {
        "label": "C",
        "textEn": "Completed with an error",
        "textAr": "مكتمل مع خطأ"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "A Future starts in the Uncompleted state, and later transitions to Completed either with data (value) or with an error.",
    "explanationAr": "يمر الـ (Future) بحالة غير مكتمل (Uncompleted) في البداية، ثم ينتقل عند الانتهاء إلى مكتمل مع بيانات أو مكتمل مع خطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_05",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 5,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which parameters must a FutureBuilder normally receive?",
    "questionAr": "ما هي المعاملات (Parameters) التي يجب أن يستقبلها ويدجت (FutureBuilder) عادةً؟",
    "options": [
      {
        "label": "A",
        "textEn": "future",
        "textAr": "المعامل future"
      },
      {
        "label": "B",
        "textEn": "builder function",
        "textAr": "دالة البناء builder"
      },
      {
        "label": "C",
        "textEn": "future and builder function",
        "textAr": "المعامل future ودالة builder معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "FutureBuilder primarily requires: (1) `future` to listen to, and (2) `builder` callback function `(context, snapshot)` to build UI based on state.",
    "explanationAr": "يتطلب (FutureBuilder) وسيطين أساسيين: الـ `future` المراد مراقبته، ودالة البناء `builder` التي تبني الواجهة اعتماداً على لقطة البيانات (snapshot).",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_06",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 6,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which keywords make asynchronous operations read like sequential code?",
    "questionAr": "ما هي الكلمات المفتاحية التي تجعل العمليات غير المتزامنة تُقرأ كأنها كود تتابعي منظم؟",
    "options": [
      {
        "label": "A",
        "textEn": "async",
        "textAr": "الكلمة المفتاحية (async)"
      },
      {
        "label": "B",
        "textEn": "await",
        "textAr": "الكلمة المفتاحية (await)"
      },
      {
        "label": "C",
        "textEn": "async and await",
        "textAr": "الكلمتان (async) و (await) معاً"
      },
      {
        "label": "D",
        "textEn": "Futur",
        "textAr": "Futur"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "The `async` and `await` keywords allow developers to write asynchronous code that reads sequentially without nested callbacks.",
    "explanationAr": "الكلمتان `async` و `await` تسمحان بكتابة كود غير متزامن يُقرأ ويُفهم كأنه كود متزامن تسلسلي دون تعقيد الدوال الارتجاعية المتداخلة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_07",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 7,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which widget builds a widget when a Future resolves?",
    "questionAr": "أي ويدجت في فلاتر يبني واجهة المستخدم تلقائياً عند اكتمال كائن (Future)؟",
    "options": [
      {
        "label": "A",
        "textEn": "FutureBuilder",
        "textAr": "ويدجت (FutureBuilder)"
      },
      {
        "label": "B",
        "textEn": "BuilderFuture",
        "textAr": "BuilderFuture"
      },
      {
        "label": "C",
        "textEn": "Future",
        "textAr": "كائن (Future)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "FutureBuilder is the official Flutter widget designed specifically to rebuild its UI when an associated Future resolves.",
    "explanationAr": "ويدجت (FutureBuilder) هو الويدجت الرسمي المخصص في فلاتر لإعادة بناء الواجهة تلقائياً لحظة اكتمال كائن (Future).",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_08",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 8,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the immutable representation of the latest interaction with an asynchronous computation?",
    "questionAr": "ما هو التمثيل غير القابل للتعديل (Immutable representation) لأحدث تفاعل مع عملية حسابية غير متزامنة؟",
    "options": [
      {
        "label": "A",
        "textEn": "AsyncSnapshot",
        "textAr": "كائن AsyncSnapshot"
      },
      {
        "label": "B",
        "textEn": "data",
        "textAr": "خاصية data"
      },
      {
        "label": "C",
        "textEn": "info",
        "textAr": "خاصية info"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "AsyncSnapshot is the immutable snapshot object passed into builder callbacks containing the connectionState, data, and error.",
    "explanationAr": "كائن AsyncSnapshot هو التمثيل غير القابل للتعديل الذي يحتوي على الحالة اللحظية للعملية (connectionState) وبياناتها أو الخطأ المرتبط بها.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_09",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 9,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which pair completes an asynchronous expression and labels the containing function?",
    "questionAr": "أي زوج يكمل العبارة غير المتزامنة ويحدد الدالة الحاوية لها على التوالي؟",
    "options": [
      {
        "label": "A",
        "textEn": "async, await",
        "textAr": "(async) للتعبير، و (await) للدالة الحاوية"
      },
      {
        "label": "B",
        "textEn": "await, async",
        "textAr": "(await) للتعبير، و (async) للدالة الحاوية"
      },
      {
        "label": "C",
        "textEn": "await, Future",
        "textAr": "(await) و (Future)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "`await` is used inside expressions to wait for the Future, while `async` labels the containing function signature.",
    "explanationAr": "الكلمة `await` تُستخدم أمام التعبير لانتظار الـ (Future)، بينما `async` تُستخدم في ترويسة الدالة لتحديد أنها غير متزامنة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_10",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 10,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A function returns Future<String>. What does that contract mean?",
    "questionAr": "دالة تُرجع نوع (Future)<String>، ماذا يعني هذا العقد البرمجي؟",
    "options": [
      {
        "label": "A",
        "textEn": "It eventually completes with one String or an error",
        "textAr": "ستكتمل في النهاية بقيمة نصية واحدة String أو بخطأ"
      },
      {
        "label": "B",
        "textEn": "It emits an unlimited number of Strings",
        "textAr": "تبث عدداً غير محدود من النصوص"
      },
      {
        "label": "C",
        "textEn": "It returns a widget immediately",
        "textAr": "تُرجع ويدجت فوراً"
      },
      {
        "label": "D",
        "textEn": "It can never fail",
        "textAr": "لا يمكن أن تفشل أبداً"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Future<String> promises that the function will eventually complete by yielding a single String value or throwing an error.",
    "explanationAr": "يعني نوع الإرجاع (Future)<String> أن الدالة ستنتهي في المستقبل بقيمة نصية واحدة (String) أو تنتهي برمي خطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_11",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 11,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does await do inside an async function?",
    "questionAr": "ماذا تفعل الكلمة المفتاحية (await) داخل دالة غير متزامنة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Suspends that function until the Future completes",
        "textAr": "يعلق تنفيذ تلك الدالة حتى يكتمل الـ (Future)"
      },
      {
        "label": "B",
        "textEn": "Blocks every event in the application",
        "textAr": "يحظر جميع الأحداث في التطبيق بالكامل"
      },
      {
        "label": "C",
        "textEn": "Creates a new isolate automatically",
        "textAr": "ينشئ Isolate جديد تلقائياً"
      },
      {
        "label": "D",
        "textEn": "Converts a Stream into a database Code fragment: Future.delayed(const Duration(seconds: 2), () => print('later')); print('next line');",
        "textAr": "Converts a Stream into a database Code fragment: Future.delayed(const Duration(seconds: 2), () => print('later')); print('next line');"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`await` suspends execution of the current async function until the awaited Future completes, allowing other isolate events to process.",
    "explanationAr": "تقوم `await` بتعليق تنفيذ الدالة غير المتزامنة مؤقتاً حتى يكتمل الـ (Future) مع إبقاء التطبيق متفاعلاً لمعالجة الأحداث الأخرى.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_12",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 12,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The code calls Future.delayed but does not await or return it. What can happen?",
    "questionAr": "يستدعي الكود (Future).delayed دون استخدام (await) أو إرجاع الـ (Future)، ماذا يمكن أن يحدث؟",
    "options": [
      {
        "label": "A",
        "textEn": "The surrounding function may continue before the delayed callback runs",
        "textAr": "قد تستمر الدالة الحاوية في العمل قبل تشغيل دالة التأخير"
      },
      {
        "label": "B",
        "textEn": "The delay becomes a synchronous sleep",
        "textAr": "يتحول التأخير إلى إيقاف متزامن (sleep)"
      },
      {
        "label": "C",
        "textEn": "All later code is cancelled",
        "textAr": "يتم إلغاء جميع الأكواد اللاحقة"
      },
      {
        "label": "D",
        "textEn": "The Future becomes a Stream",
        "textAr": "يتحول الـ (Future) إلى (Stream)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Without `await`, the enclosing function does not pause; it continues executing subsequent lines immediately before the timer callback fires.",
    "explanationAr": "بدون `await`، لن تتوقف الدالة الحاوية، بل ستواصل تنفيذ الأسطر التالية فوراً قبل أن يحين وقت تنفيذ دالة التأخير.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_13",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 13,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which code expresses “start this task and use its result before continuing”?",
    "questionAr": "أي كود يعبر برمجياً عن: 'ابدأ هذه المهمة واستخدم نتيجتها قبل المتابعة'؟",
    "options": [
      {
        "label": "A",
        "textEn": "final value = await loadValue();",
        "textAr": "final value = (await) loadValue(); (انتظار واستخدام القيمة)"
      },
      {
        "label": "B",
        "textEn": "final value = print(loadValue());",
        "textAr": "final value = print(loadValue());"
      },
      {
        "label": "C",
        "textEn": "await Future<void> without a task",
        "textAr": "(await) (Future)<void> بدون مهمة"
      },
      {
        "label": "D",
        "textEn": "yield loadValue() in a non-generator",
        "textAr": "yield loadValue() في دالة عادية"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`final value = await loadValue();` explicitly suspends until `loadValue()` completes and stores its resolved result in `value`.",
    "explanationAr": "السطر `final value = (await) loadValue();` يعبر بدقة عن انتظار اكتمال الدالة loadValue وتخزين قيمتها الناتجة قبل المتابعة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_14",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 14,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A then callback returns a transformed value. What does the next stage receive?",
    "questionAr": "إذا قامت دالة then بإرجاع قيمة محولة (transformed value)، فماذا تستلم المرحلة اللاحقة في السلسلة؟",
    "options": [
      {
        "label": "A",
        "textEn": "The transformed result",
        "textAr": "النتيجة المحولة الجديدة"
      },
      {
        "label": "B",
        "textEn": "The original widget tree only",
        "textAr": "شجرة الويدجت الأصلية فقط"
      },
      {
        "label": "C",
        "textEn": "A route stack",
        "textAr": "مكدس مسارات"
      },
      {
        "label": "D",
        "textEn": "A database connection",
        "textAr": "اتصال قاعدة بيانات"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "In a Future chain, the value returned by `.then()` is wrapped into the next Future stage and passed to subsequent `.then()` handlers.",
    "explanationAr": "في سلاسل الـ (Future)، فإن القيمة المحولة المعادة من `.then()` تُمرر مباشرة كمدخل للمرحلة التالية في السلسلة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_15",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 15,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which error-handling structure is clearest for several awaited operations that share one recovery path?",
    "questionAr": "ما هو هيكل معالجة الأخطاء الأكثر وضوحاً لعدة عمليات منتظرة بـ (await) تشترك في مسار استرجاع موحد؟",
    "options": [
      {
        "label": "A",
        "textEn": "try/catch around the awaits",
        "textAr": "كتلة try/catch تحيط بأوامر (await)"
      },
      {
        "label": "B",
        "textEn": "A color change in build",
        "textAr": "تغيير اللون في (build)"
      },
      {
        "label": "C",
        "textEn": "A new StreamBuilder with no stream",
        "textAr": "ويدجت (StreamBuilder) جديد دون stream"
      },
      {
        "label": "D",
        "textEn": "Navigator.pop only",
        "textAr": "أمر (Navigator).pop فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A `try/catch` block wrapping multiple `await` calls provides clean, idiomatic error handling for sequential async operations.",
    "explanationAr": "استخدام كتلة `try/catch` حول استدعاءات `await` هو الأسلوب القياسي والأنظف لمعالجة الأخطاء المشتركة في كود دارت غير المتزامن.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_16",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 16,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the purpose of finally in an async save flow?",
    "questionAr": "ما هو الغرض الأساسي من استخدام finally في تدفق حفظ غير متزامن؟",
    "options": [
      {
        "label": "A",
        "textEn": "Restore cleanup or flags regardless of success or failure",
        "textAr": "تنظيف الموارد وإعادة ضبط المتغيرات بغض النظر عن النجاح أو الفشل"
      },
      {
        "label": "B",
        "textEn": "Retry forever",
        "textAr": "إعادة المحاولة للأبد"
      },
      {
        "label": "C",
        "textEn": "Hide all errors from the user",
        "textAr": "إخفاء كافة الأخطاء عن المستخدم"
      },
      {
        "label": "D",
        "textEn": "Convert a Future to a Stream",
        "textAr": "تحويل (Future) إلى (Stream)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The `finally` block always executes regardless of whether an exception occurred or not, making it ideal for cleaning up resources or resetting loading flags.",
    "explanationAr": "تضمن كتلة `finally` تنفيذ الكود بداخلها دائماً (سواء نجحت العملية أو فشلت)، مما يجعلها مثالية لإيقاف مؤشر التحميل وتنظيف الموارد.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_17",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 17,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A request should stop waiting after five seconds. Which API expresses that deadline?",
    "questionAr": "يجب على طلب الشبكة التوقف عن الانتظار بعد خمس ثوانٍ. ما هي الواجهة البرمجية المعبرة عن هذه المهلة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Future.timeout",
        "textAr": "دالة (Future).timeout"
      },
      {
        "label": "B",
        "textEn": "Future.wait with one item",
        "textAr": "(Future).wait بعنصر واحد"
      },
      {
        "label": "C",
        "textEn": "StreamBuilder.initialData",
        "textAr": "خاصية (StreamBuilder).initialData"
      },
      {
        "label": "D",
        "textEn": "setState only",
        "textAr": "استدعاء setState فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`Future.timeout(const Duration(seconds: 5))` sets a maximum wait duration and throws a TimeoutException if unfulfilled.",
    "explanationAr": "الدالة `Future.timeout` تحدد الحد الأقصى للانتظار وترمي استثناء مهلة (TimeoutException) إذا لم تكتمل العملية خلال المدة المحددة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_18",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 18,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The timeout occurs, but the underlying operation cannot be forcibly cancelled by the Future API. What should the UI still do?",
    "questionAr": "حدثت مهلة Timeout ولكن العملية الأساسية لا يمكن إلغاؤها قسرياً، فما الذي يجب على واجهة المستخدم فعله؟",
    "options": [
      {
        "label": "A",
        "textEn": "Stop using the result and guard later State updates",
        "textAr": "التوقف عن استخدام النتيجة وحماية تحديثات State اللاحقة"
      },
      {
        "label": "B",
        "textEn": "Assume the operation never runs",
        "textAr": "افتراض أن العملية لم تعمل أبداً"
      },
      {
        "label": "C",
        "textEn": "Call dispose on the whole app",
        "textAr": "استدعاء dispose للتطبيق بالكامل"
      },
      {
        "label": "D",
        "textEn": "Start an infinite retry",
        "textAr": "بدء محاولات لا نهائية"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The UI should ignore any late results from the timed-out task and ensure state updates check `mounted` before calling `setState()`.",
    "explanationAr": "يجب على واجهة المستخدم تجاهل النتيجة المتأخرة وحماية تحديثات الحالة عبر التحقق من `mounted` لتجنب أخطاء الشاشات غير المثبتة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_19",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 19,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Task B finishes before task A in Future.wait([A, B]). What order is returned?",
    "questionAr": "انتهت المهمة B قبل المهمة A داخل (Future).wait([A, B])، فما هو ترتيب النتائج المعادة في القائمة؟",
    "options": [
      {
        "label": "A",
        "textEn": "[resultOfA, resultOfB]",
        "textAr": "[resultOfA, resultOfB] (الحفاظ على نفس الترتيب المدخل)"
      },
      {
        "label": "B",
        "textEn": "[resultOfB, resultOfA]",
        "textAr": "[resultOfB, resultOfA]"
      },
      {
        "label": "C",
        "textEn": "Only B",
        "textAr": "النتيجة B فقط"
      },
      {
        "label": "D",
        "textEn": "Alphabetical order",
        "textAr": "ترتيب أبجدي"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`Future.wait` always preserves the exact positional order of the input list: `[resultOfA, resultOfB]`, regardless of completion order.",
    "explanationAr": "دالة `Future.wait` تحافظ دائماً على الترتيب الموضعي الأصلي للقائمة المدخلة: `[resultOfA, resultOfB]` بغض النظر عن من اكتملت أولاً.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_20",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 20,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.20)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The second request needs an id returned by the first. Which sequencing is appropriate?",
    "questionAr": "يحتاج الطلب الثاني إلى معرّف (id) أرجعه الطلب الأول. ما هو التسلسل البرمجي الصحيح؟",
    "options": [
      {
        "label": "A",
        "textEn": "Await the first, then start the second with its id",
        "textAr": "انتظار الأولى بـ (await)، ثم بدء الثانية باستخدام المعرف id"
      },
      {
        "label": "B",
        "textEn": "Start both with no dependency",
        "textAr": "بدء الاثنين معاً دون اعتمادية"
      },
      {
        "label": "C",
        "textEn": "Use initialData for the id",
        "textAr": "استخدام initialData للمعرف"
      },
      {
        "label": "D",
        "textEn": "Use cancelOnError on a Future",
        "textAr": "استخدام cancelOnError مع (Future)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Wait for the first request to finish using `await`, retrieve the generated id, and then initiate the second request passing that id.",
    "explanationAr": "انتظار الطلب الأول باستخدام `await` حتى يكتمل، ثم استخراج المعرف (id) وبدء الطلب الثاني بتمرير ذلك المعرف.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_21",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 21,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A screen is popped while a Future is suspended. What risk exists when it completes?",
    "questionAr": "تم إغلاق الشاشة (Popped) بينما كان كائن (Future) معلقاً. ما هو الخطر البرمجي عند اكتماله؟",
    "options": [
      {
        "label": "A",
        "textEn": "A later setState or context call may target an unmounted State",
        "textAr": "استدعاء setState أو (context) لاحقاً قد يستهدف شاشة غير مثبتة"
      },
      {
        "label": "B",
        "textEn": "The Future changes into a Stream",
        "textAr": "يتحول الـ (Future) إلى (Stream)"
      },
      {
        "label": "C",
        "textEn": "The route automatically returns twice",
        "textAr": "يعود المسار مرتين تلقائياً"
      },
      {
        "label": "D",
        "textEn": "The request becomes a SQL query",
        "textAr": "يتحول الطلب إلى استعلام SQL"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Calling `setState()` or referencing `BuildContext` on an unmounted State throws a Flutter framework exception.",
    "explanationAr": "استدعاء `setState()` أو استخدام `context` على كائن شاشة لم يعد مثبتاً (unmounted) يؤدي لرمي خطأ برمجي في فلاتر.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_22",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 22,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.22)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which snapshot state normally means a FutureBuilder Future is still running?",
    "questionAr": "أي حالة في snapshot تعني عادةً أن كائن الـ (Future) في (FutureBuilder) لا يزال قيد التشغيل والانتظار؟",
    "options": [
      {
        "label": "A",
        "textEn": "ConnectionState.waiting",
        "textAr": "حالة ConnectionState.waiting"
      },
      {
        "label": "B",
        "textEn": "ConnectionState.done with data",
        "textAr": "ConnectionState.done مع بيانات"
      },
      {
        "label": "C",
        "textEn": "hasError only",
        "textAr": "hasError فقط"
      },
      {
        "label": "D",
        "textEn": "ConnectionState.active for every Future",
        "textAr": "ConnectionState.active لكل (Future)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`ConnectionState.waiting` indicates the Future has connected and Flutter is actively waiting for its resolution.",
    "explanationAr": "تعني الحالة `ConnectionState.waiting` أن الـ (Future) متصل ولا تزال بيئة فلاتر تنتظر انتهاء العملية غير المتزامنة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_23",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 23,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.23)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why store a Future in State for a FutureBuilder profile screen?",
    "questionAr": "لماذا يتم حفظ كائن (Future) داخل متغير State في شاشة الملف الشخصي التي تستخدم (FutureBuilder)؟",
    "options": [
      {
        "label": "A",
        "textEn": "To avoid creating a new request on every build",
        "textAr": "لتجنب إنشاء طلب جديد متكرر مع كل عملية (build)"
      },
      {
        "label": "B",
        "textEn": "To make the Future persistent after uninstall",
        "textAr": "لجعل الـ (Future) محفوظاً بعد حذف التطبيق"
      },
      {
        "label": "C",
        "textEn": "To convert it into a Stream automatically",
        "textAr": "لتحويله إلى (Stream) تلقائياً"
      },
      {
        "label": "D",
        "textEn": "To skip the loading state",
        "textAr": "لتخطي حالة التحميل"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Storing the Future in State (typically initialized in `initState`) prevents triggering duplicate network requests on every widget rebuild.",
    "explanationAr": "تخزين الـ (Future) في متغير الحالة (داخل initState) يمنع إعادة إرسال طلبات الشبكة مراراً مع كل إعادة بناء أو تحديث للشاشة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_24",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 24,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.24)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which abstraction is intended for multiple values over time?",
    "questionAr": "ما هو التجريد البرمجي المخصص للتعامل مع قيم متعددة متدفقة على مدار الوقت؟",
    "options": [
      {
        "label": "A",
        "textEn": "Stream<T>",
        "textAr": "كائن (Stream)<T>"
      },
      {
        "label": "B",
        "textEn": "Future<T>",
        "textAr": "كائن (Future)<T>"
      },
      {
        "label": "C",
        "textEn": "BuildContext",
        "textAr": "سياق البناء BuildContext"
      },
      {
        "label": "D",
        "textEn": "RouteSettings",
        "textAr": "إعدادات المسار RouteSettings"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`Stream<T>` is designed specifically for handling a sequence of asynchronous data events emitted over time.",
    "explanationAr": "كائن `Stream<T>` مخصص للتعامل مع تدفق متتابع من البيانات والأحداث غير المتزامنة عبر الزمن.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_25",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 25,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.25)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does async* return?",
    "questionAr": "ما هو نوع القيمة المعادة من دالة موسومة بـ (async)*؟",
    "options": [
      {
        "label": "A",
        "textEn": "A Stream",
        "textAr": "كائن تدفق (Stream)"
      },
      {
        "label": "B",
        "textEn": "A single String only",
        "textAr": "نص منفرد String فقط"
      },
      {
        "label": "C",
        "textEn": "A Widget",
        "textAr": "ويدجت Widget"
      },
      {
        "label": "D",
        "textEn": "A route name",
        "textAr": "اسم مسار (Route) name"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Functions declared with `async*` are asynchronous generator functions that always return a `Stream`.",
    "explanationAr": "الدوال الموسومة بـ `async*` هي مولدات غير متزامنة تُرجع دائماً كائناً من نوع (Stream).",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_26",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 26,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.26)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does yield do in an async* generator?",
    "questionAr": "ماذا تفعل العبارة yield داخل مولد غير متزامن (async*)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Emit one event into the generated Stream",
        "textAr": "بث وضخ حدث جديد داخل الـ (Stream) المتولد"
      },
      {
        "label": "B",
        "textEn": "Await a Future without suspension",
        "textAr": "انتظار (Future) بدون تعليق"
      },
      {
        "label": "C",
        "textEn": "Pop a route",
        "textAr": "إزالة مسار Pop"
      },
      {
        "label": "D",
        "textEn": "Cancel every subscriber",
        "textAr": "إلغاء جميع المشتركين"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`yield` emits a single value as a new event into the generated Stream without terminating the generator function.",
    "explanationAr": "تقوم `yield` بضخ وبث قيمة واحدة كحدث جديد داخل الـ (Stream) دون إنهاء تنفيذ الدالة المولدة.",
    "codeSnippet": null
  },
  {
    "id": "lab8_mcq_27",
    "lecture": 8,
    "lab": "Lab 8",
    "num": 27,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Asynchronous Programming",
    "subtopic": "Future & async/await",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 8 (Q2.27)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which StreamBuilder state can show that a finite stream has completed?",
    "questionAr": "أي حالة في (StreamBuilder) توضح أن تدفق الـ stream المنتهي قد اكتمل تماماً؟",
    "options": [
      {
        "label": "A",
        "textEn": "ConnectionState.done",
        "textAr": "حالة ConnectionState.done"
      },
      {
        "label": "B",
        "textEn": "ConnectionState.waiting only",
        "textAr": "ConnectionState.waiting فقط"
      },
      {
        "label": "C",
        "textEn": "Future.timeout",
        "textAr": "دالة (Future).timeout"
      },
      {
        "label": "D",
        "textEn": "State.dispose",
        "textAr": "استدعاء State.dispose"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`ConnectionState.done` indicates that the Stream has finished emitting all items and has closed.",
    "explanationAr": "توضح الحالة `ConnectionState.done` أن الـ (Stream) قد انتهى من بث كافة العناصر وأُغلق تماماً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_01",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 1,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "There are not many cases where you need to store data locally on users’ devices instead of using remote cloud servers or APIs.",
    "questionAr": "لا توجد حالات كثيرة تحتاج فيها إلى تخزين البيانات محلياً على أجهزة المستخدمين بدلاً من السحابة أو APIs.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "There ARE many cases where apps need local storage (offline access, cached data, user settings, SQLite db).",
    "correctionAr": "توجد حالات كثيرة جداً تتطلب تخزين البيانات محلياً (الحفظ دون اتصال، التخزين المؤقت، الإعدادات، وقواعد البيانات).",
    "explanationEn": "False. Local data persistence is essential in mobile apps for offline support, responsiveness, and saving user state.",
    "explanationAr": "خطأ. التخزين المحلي ضروري جداً وأساسي في تطبيقات الهواتف لضمان العمل دون اتصال وتحسين الأداء وسرعة الاستجابة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_02",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 2,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To save files to disk, combine the path_provider plugin with the dart:io library.",
    "questionAr": "لحفظ الملفات على القرص في فلاتر، ندمج حزمة path_provider مع مكتبة dart:io.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `path_provider` finds system directories, and `dart:io` provides the `File` class to read and write bytes/strings.",
    "explanationAr": "صحيح. توفر `path_provider` مسارات المجلدات النظامية، بينما توفر `dart:io` كلاس `File` لقراءة وكتابة الملفات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_03",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 3,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The dart:io library provides a platform -agnostic way to access commonly used locations on the device’s file system.",
    "questionAr": "توفر مكتبة dart:io طريقة محايدة ومستقلة عن المنصة للوصول إلى المواقع الشائعة في نظام الملفات.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "path_provider provides platform-agnostic directory paths; dart:io provides File and Directory I/O classes.",
    "correctionAr": "حزمة path_provider هي التي توفر مسارات المجلدات المحايدة للمنصة، بينما توفر dart:io كلاسات File و Directory للتعامل مع الملفات.",
    "explanationEn": "False. Resolving platform-agnostic directory paths on Android and iOS is done by the `path_provider` plugin. `dart:io` is the standard library for file reading/writing.",
    "explanationAr": "خطأ. تحديد مسارات المجلدات المتوافقة مع أندرويد و iOS يتم عبر حزمة `path_provider`، بينما مكتبة `dart:io` متخصصة في عمليات قراءة وكتابة كائنات File.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_04",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 4,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A directory for the app to store files that only it can access. The system clears the directory only when the app is deleted. On iOS, this corresponds to the NSDocumentDirectory. On Android, this is the AppData directory.",
    "questionAr": "دليل للتطبيق لتخزين الملفات التي يمكنه فقط الوصول إليها. يقوم النظام بمسح الدليل فقط عند حذف التطبيق. في نظام iOS، يتوافق هذا مع NSDocumentDirectory. وفي نظام Android، هذا هو دليل AppData.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The application directory provides a private storage space for the app. On iOS, it maps to NSDocumentDirectory, and on Android, it maps to the AppData directory, ensuring data is cleared only when the app is uninstalled.",
    "explanationAr": "يوفر دليل التطبيق مساحة تخزين خاصة. في نظام iOS، يتوافق هذا مع NSDocumentDirectory، وفي Android يتوافق مع دليل AppData، مما يضمن مسح البيانات فقط عند إلغاء تثبيت التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_05",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 5,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Once you know where to store the file, create a reference to the file’s full location. You can use the File class from the path_provider library",
    "questionAr": "بمجرد معرفة مكان تخزين الملف، يتم إنشاء مرجع للمسار الكامل للملف باستخدام كلاس File من مكتبة path_provider.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "The File class is from the dart:io library, not the path_provider library.",
    "correctionAr": "فئة File موجودة في مكتبة dart:io وليس في مكتبة path_provider.",
    "explanationEn": "The path_provider package provides APIs like getApplicationDocumentsDirectory() to find the path, and the File class from the dart:io library (not path_provider) is used to create a reference to the file. (Note: The statement in the question incorrectly attributes the File class to path_provider, but the core concept is creating a file reference).",
    "explanationAr": "توفر حزمة path_provider واجهات برمجية للعثور على المسار، وتُستخدم فئة File من مكتبة dart:io لإنشاء مرجع للملف.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_06",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 6,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If you want to load content from a txt, csv or json file that found in the assets folder (or another folder in the root proj ect) we using rootBundle class from services.dart library.",
    "questionAr": "إذا أردت تحميل محتوى من ملف نصي أو csv أو json موجود في مجلد الأصول (assets)، استخدم حزمة rootBundle.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "To access files bundled with the application during the build process (like assets), Flutter provides the rootBundle object from the package:flutter/services.dart library.",
    "explanationAr": "للوصول إلى الملفات المجمعة مع التطبيق أثناء عملية البناء (مثل الأصول)، يوفر Flutter كائن rootBundle من مكتبة services.dart.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_07",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 7,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "sqflite in flutter are used to store data locally in key -value pairs in android and ios apps.",
    "questionAr": "تُستخدم حزمة (sqflite) في فلاتر لتخزين البيانات محلياً على شكل أزواج (مفتاح-قيمة).",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "SharedPreferences stores key-value pairs; sqflite stores structured relational data in tables.",
    "correctionAr": "تُستخدم (SharedPreferences) لتخزين أزواج (مفتاح-قيمة)، بينما تُستخدم (sqflite) لقواعد البيانات العلائقية والجداول.",
    "explanationEn": "False. `sqflite` is an SQLite database engine for relational tables. Key-value storage is provided by `shared_preferences`.",
    "explanationAr": "خطأ. حزمة `sqflite` مخصصة لقواعد البيانات العلائقية والجداول SQL، بينما تخزين مفتاح-قيمة مخصص لـ `shared_preferences`.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_08",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 8,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Don’t use sharedpreferences to save complex data. It is useful to save simple data .",
    "questionAr": "لا تستخدم (SharedPreferences) لحفظ البيانات المعقدة؛ بل هي مفيدة ومخصصة لحفظ البيانات الأولية البسيطة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. SharedPreferences is optimized for simple primitives (bool, int, double, String). Complex data belongs in SQLite or JSON files.",
    "explanationAr": "صحيح. صُممت (SharedPreferences) للبيانات الأولية البسيطة فقط، بينما البيانات المعقدة والكبيرة مكانها المناسب قواعد بيانات (SQLite).",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_09",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 9,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To save data in sharedpreferences in flutter declare an object of SharedPreferences class. Initialize the object and call the getter methods to save data.",
    "questionAr": "لحفظ البيانات في SharedPreferences في فلاتر، نقوم بإنشاء كائن SharedPreferences واستدعاء دوال الجلب (getter) لحفظ البيانات.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "We call setter methods (e.g., setString) to save data, not getter methods.",
    "correctionAr": "نحن نستدعي دوال التعيين (setter) لحفظ البيانات، وليس دوال الجلب (getter).",
    "explanationEn": "SharedPreferences uses setter methods (like setString, setInt) to save data, not getter methods. However, initializing an instance of SharedPreferences is the first required step.",
    "explanationAr": "تستخدم SharedPreferences طرق التعيين (setter) لحفظ البيانات. التهيئة هي الخطوة الأولى المطلوبة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_10",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 10,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To save string value in sharedpreferences call the setString() method and provide the key and value.",
    "questionAr": "لحفظ قيمة نصية في (SharedPreferences)، نستدعي دالة setString() ونمرر المفتاح والقيمة النصية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. `prefs.setString(key, value)` is the official method for persisting a string in SharedPreferences.",
    "explanationAr": "صحيح. دالة `prefs.setString(key, value)` هي الدالة الرسمية لتخزين النصوص في (SharedPreferences).",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_11",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 11,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To retrieve or read data from SharedPreferences in Flutter, we have to use the setter methods of the SharedPreferences class.",
    "questionAr": "لاسترداد أو قراءة البيانات من (SharedPreferences) في Flutter، يجب علينا استخدام دوال التعيين (setter methods) الخاصة بفئة (SharedPreferences).",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "To retrieve or read data, we use getter methods (e.g., getString), not setter methods.",
    "correctionAr": "لاسترداد أو قراءة البيانات، نستخدم دوال الجلب (getter) وليس دوال التعيين (setter).",
    "explanationEn": "To read data, you use getter methods (like getString, getInt), not setter methods. The statement is conceptually testing the difference between read (get) and write (set) operations.",
    "explanationAr": "لقراءة البيانات، يتم استخدام طرق الجلب (getter)، وليس التعيين (setter). يختبر هذا السؤال الفرق بين عمليات القراءة والكتابة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_12",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 12,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To delete or remove data from SharedPreferences in Flutter, we must use the remove() method. We have to provide only the key to delete the record (both the key and the value corresponding to that key). This method can delete all four types of data by simply taking the key.",
    "questionAr": "لحذف أو إزالة البيانات من (SharedPreferences) في Flutter، يجب استخدام الدالة remove(). نحتاج فقط إلى توفير المفتاح لحذف السجل (كل من المفتاح والقيمة المقابلة لذلك المفتاح). يمكن لهذه الدالة حذف جميع أنواع البيانات الأربعة ببساطة عن طريق أخذ المفتاح.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The remove() method in SharedPreferences takes a specific key and deletes the corresponding key-value pair from the persistent storage.",
    "explanationAr": "تأخذ طريقة remove() في SharedPreferences مفتاحًا محددًا وتحذف الزوج (المفتاح والقيمة) المقابل من التخزين الدائم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_13",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 13,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The containsKey() method takes a key as an argument and checks if the key is present in SharedPreferences. If the key is present, it will return false; otherwise, it will return true.",
    "questionAr": "تأخذ الدالة containsKey() مفتاحاً كمعامل وتتحقق مما إذا كان المفتاح موجوداً في (SharedPreferences). إذا كان المفتاح موجوداً، فسوف تُرجع false؛ وإلا، فإنها سترجع true.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "The containsKey() method returns true if the key is present, and false otherwise.",
    "correctionAr": "ترجع الدالة containsKey() القيمة true إذا كان المفتاح موجوداً، و false بخلاف ذلك.",
    "explanationEn": "The containsKey() method actually returns true if the key exists, and false if it does not. The statement tests the knowledge of checking key existence in the preferences dictionary.",
    "explanationAr": "تُرجع طريقة containsKey() القيمة المنطقية true إذا كان المفتاح موجودًا، و false إذا لم يكن كذلك.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_14",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 14,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To store some simple data persistently, you can use the shared_preferences plugin. Data is persisted to disk asynchronously so you need to use Future, async and await.",
    "questionAr": "لتخزين بعض البيانات البسيطة بشكل دائم، يمكنك استخدام حزمة shared_preferences. يتم حفظ البيانات على القرص بشكل غير متزامن، لذا تحتاج إلى استخدام Future و async و await.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "SharedPreferences is designed for storing simple, unencrypted key-value pairs persistently. Because disk I/O operations take time, it relies on asynchronous programming using Future, async, and await.",
    "explanationAr": "تم تصميم SharedPreferences لتخزين أزواج (مفتاح-قيمة) بسيطة بشكل دائم. نظرًا لأن عمليات الإدخال والإخراج تستغرق وقتًا، فإنها تعتمد على البرمجة غير المتزامنة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_15",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 15,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If you are writing an app that needs to persist and query large amounts of data on the local device, consider using a key-value store instead of a local file or database.",
    "questionAr": "إذا كنت تكتب تطبيقاً يحتاج إلى حفظ البيانات والاستعلام عن كميات كبيرة منها على الجهاز المحلي، ففكر في استخدام مخزن مفتاح وقيمة (key-value store) بدلاً من ملف محلي أو قاعدة بيانات.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "For large amounts of structured or relational data, a local database (like SQLite) is recommended over simple key-value stores or flat files, as it allows for efficient querying.",
    "explanationAr": "لكميات كبيرة من البيانات المهيكلة، يُوصى باستخدام قاعدة بيانات محلية (مثل SQLite) بدلاً من مخازن (مفتاح-قيمة) البسيطة، حيث تتيح الاستعلام الفعال.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_16",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 16,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In general, databases provide faster inserts, updates, and queries compared to other local persistence solutions.",
    "questionAr": "بشكل عام، توفر قواعد البيانات عمليات إدراج وتحديث واستعلام أسرع مقارنة بحلول التخزين الدائم (persistence) المحلية الأخرى.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Databases are optimized with indexes and query engines, making operations like inserts, updates, and targeted queries much faster than parsing and rewriting entire local files.",
    "explanationAr": "تم تحسين قواعد البيانات باستخدام الفهارس ومحركات الاستعلام، مما يجعل عمليات الإدراج والتحديث أسرع بكثير من معالجة الملفات المحلية بأكملها.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_17",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 17,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Define the path to the database file using getDatabasesPath() from the path package, combined with the join function from the sqflite package.",
    "questionAr": "حدد مسار ملف قاعدة البيانات باستخدام getDatabasesPath() من حزمة path، مع الدالة join من حزمة sqflite.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "To safely define the database path across different platforms, you retrieve the default database directory using getDatabasesPath() and append the file name using join() to handle platform-specific separators.",
    "explanationAr": "لتحديد مسار قاعدة البيانات بأمان عبر منصات مختلفة، يتم استرداد الدليل الافتراضي باستخدام getDatabasesPath() ودمجه باستخدام وظيفة join().",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_18",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 18,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To insert a data into a table in sqflite database. This involves two steps: Convert the data into a Map and Use the add () method to store the Map in the table.",
    "questionAr": "لإدراج بيانات في جدول في قاعدة بيانات sqflite، يتضمن ذلك خطوتين: تحويل البيانات إلى Map واستخدام الدالة insert() لتخزين الـ Map في الجدول.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "To insert data into a table in sqflite, you convert the data to a Map and use the insert() method, not add().",
    "correctionAr": "لإدراج بيانات في جدول في sqflite، تقوم بتحويل البيانات إلى Map وتستخدم الدالة insert() وليس add().",
    "explanationEn": "Inserting data into SQLite via the sqflite package requires representing the data model as a Map<String, dynamic> and passing it to the database's insert() method.",
    "explanationAr": "إدراج البيانات في SQLite يتطلب تمثيل نموذج البيانات كـ Map وتمريره إلى طريقة insert() الخاصة بقاعدة البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_19",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 19,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Always use whereArgs to pass arguments to a where statement. This helps safeguard against SQL injection attacks.",
    "questionAr": "استخدم دائماً whereArgs لتمرير المعاملات إلى عبارة where. يساعد هذا في الحماية من هجمات حقن SQL (SQL injection).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Using whereArgs prevents SQL injection by treating the input as parameterized data rather than executable SQL code, which safely escapes special characters.",
    "explanationAr": "استخدام whereArgs يمنع حقن SQL عن طريق التعامل مع الإدخال كبيانات ذات معلمات بدلاً من كود SQL قابل للتنفيذ.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_21",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 21,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A value stored only in a lo cal variable inside build is not expected to survive the next rebuild.",
    "questionAr": "القيمة المخزنة فقط في متغير محلي داخل دالة build لا يُتوقع أن تبقى بعد إعادة البناء التالية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The build method can be called multiple times per frame. Local variables declared inside it are recreated on every rebuild, so they cannot preserve state.",
    "explanationAr": "يمكن استدعاء طريقة build عدة مرات. يتم إعادة إنشاء المتغيرات المحلية المصرح عنها بداخلها في كل إعادة بناء، لذا لا يمكنها الحفاظ على الحالة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_22",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 22,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.22)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A State field can survive ordinary rebuilds while its State object remains mounted.",
    "questionAr": "يمكن لحقل State أن ينجو من عمليات إعادة البناء (rebuilds) العادية طالما ظل كائن State الخاص به مثبتاً (mounted).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "In a StatefulWidget, the State object is decoupled from the widget itself and persists in the element tree across rebuilds as long as it remains mounted.",
    "explanationAr": "في الـ StatefulWidget، يتم فصل كائن State عن واجهة المستخدم ويستمر في شجرة العناصر عبر عمليات إعادة البناء طالما ظل مرتبطًا.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_23",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 23,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.23)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Process termination can remove in-memory values even when the last screen looked correct.",
    "questionAr": "يمكن أن يؤدي إنهاء العملية (process termination) إلى إزالة القيم الموجودة في الذاكرة حتى عندما تبدو الشاشة الأخيرة صحيحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When the operating system kills the app process to free up resources, all data stored in RAM is lost. Only data saved to persistent storage survives.",
    "explanationAr": "عندما ينهي نظام التشغيل التطبيق لتحرير الموارد، تُفقد جميع البيانات المخزنة في الذاكرة العشوائية. فقط البيانات المحفوظة في التخزين الدائم تبقى.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_24",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 24,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.24)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Persistent storage is selected when a value must be reconstructed after a later app launch.",
    "questionAr": "يتم تحديد التخزين الدائم (persistent storage) عندما يجب إعادة بناء قيمة بعد تشغيل التطبيق في وقت لاحق.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Persistent storage (like SharedPreferences or SQLite) saves data to the device's disk, allowing the application to restore state even after being fully closed and relaunched.",
    "explanationAr": "يحفظ التخزين الدائم (مثل SharedPreferences) البيانات على قرص الجهاز، مما يسمح للتطبيق باستعادة الحالة حتى بعد إغلاقه وإعادة تشغيله.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_25",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 25,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.25)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Uninstalling an application commonly removes its private local storage unless an external backup restores it.",
    "questionAr": "تؤدي إزالة تثبيت التطبيق عادةً إلى إزالة التخزين المحلي الخاص به ما لم تقم نسخة احتياطية خارجية باستعادته.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Mobile operating systems sandbox app data. When an app is uninstalled, the OS deletes its sandboxed directories, erasing all local files and databases.",
    "explanationAr": "تقوم أنظمة تشغيل الهواتف المحمولة بعزل بيانات التطبيق. عند إلغاء التثبيت، يحذف النظام هذه الأدلة، مما يمحو جميع الملفات المحلية.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_26",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 26,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.26)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A cache can be useful without being authoritative; its freshness and invalidation policy must be understood.",
    "questionAr": "يمكن أن تكون ذاكرة التخزين المؤقت (cache) مفيدة دون أن تكون موثوقة (authoritative) بالكامل؛ يجب فهم سياستها المتعلقة بالتحديث وإبطال الصلاحية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A cache stores temporary copies of data for performance but isn't the single source of truth. Developers must manage policies to refresh the cache when the primary data changes.",
    "explanationAr": "تخزن ذاكرة التخزين المؤقت (Cache) نسخًا مؤقتة للأداء ولكنها ليست المصدر الموثوق الوحيد. يجب إدارة السياسات لتحديثها عند تغير البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_27",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 27,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.27)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "DateTime values usually need an explicit serialization format before being stored as text or JSON.",
    "questionAr": "تحتاج قيم DateTime عادةً إلى تنسيق تسلسل صريح قبل تخزينها كنص أو JSON.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Complex objects like DateTime cannot be stored directly in plain text or JSON; they must be converted to a serialized string (like ISO 8601) or an integer timestamp.",
    "explanationAr": "لا يمكن تخزين كائنات معقدة مثل DateTime مباشرة في نص عادي أو JSON؛ يجب تحويلها إلى سلسلة متسلسلة أو طابع زمني رقمي.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_28",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 28,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.28)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A Boolean can be serialized as a Boolean value or as a documented representation such as 0/1, but the read path must agree.",
    "questionAr": "يمكن تسلسل القيمة المنطقية (Boolean) كقيمة Boolean أو كتمثيل موثق مثل 0/1، ولكن يجب أن يتطابق مسار القراءة (read path) مع ذلك.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "While booleans can be stored inherently in some databases, they are often serialized as integers (0 and 1). The reading and writing logic must consistently interpret this format.",
    "explanationAr": "على الرغم من إمكانية تخزين القيم المنطقية في بعض قواعد البيانات، إلا أنها غالبًا ما تُسلسل كأرقام (0 و 1). يجب أن تتوافق منطق القراءة والكتابة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_29",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 29,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.29)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An absent preference key and a stored zero value are different states when zero is a valid value.",
    "questionAr": "يعد غياب مفتاح التفضيل والقيمة المخزنة التي تساوي صفراً حالتين مختلفتين عندما يكون الصفر قيمة صالحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "An absent key (null) implies the preference was never set, whereas an explicit zero value means the preference was actively set to zero. These distinct states must be handled properly.",
    "explanationAr": "المفتاح المفقود (null) يعني أنه لم يتم تعيين التفضيل مطلقًا، بينما القيمة الصفرية الصريحة تعني أنه تم تعيينه إلى الصفر بنشاط.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_30",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 30,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.30)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A successful SQLite query that returns zero rows is a valid empty state, not automatically a database failure.",
    "questionAr": "الاستعلام الناجح في SQLite الذي يُرجع صفر صفوف يعد حالة فارغة صالحة، وليس عطلاً في قاعدة البيانات تلقائياً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A query returning an empty result set (zero rows) simply means no data matched the criteria. It is a successful execution, not an error or exception.",
    "explanationAr": "الاستعلام الذي يُرجع مجموعة نتائج فارغة (صفر صفوف) يعني ببساطة عدم وجود بيانات مطابقة. إنه تنفيذ ناجح وليس خطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_31",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 31,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.31)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A missing local file can represent a first launch when the feature defines that meaning explicitly.",
    "questionAr": "يمكن أن يمثل غياب ملف محلي التشغيل الأول للتطبيق عندما تحدد الميزة هذا المعنى صراحةً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When an app attempts to read a local file that does not exist, it often indicates the user has just installed the app and opened it for the very first time.",
    "explanationAr": "عندما يحاول التطبيق قراءة ملف محلي غير موجود، يشير ذلك غالبًا إلى أن المستخدم قد قام للتو بتثبيت التطبيق وفتحه للمرة الأولى.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_32",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 32,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.32)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Loading persistent data in initState can establish the initial source for a stateful screen.",
    "questionAr": "يمكن أن يؤدي تحميل البيانات الدائمة في initState إلى إنشاء المصدر الأولي لشاشة ذات حالة (stateful screen).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The initState() lifecycle method runs exactly once when a StatefulWidget is created, making it the ideal place to trigger asynchronous loads of persistent data.",
    "explanationAr": "تعمل طريقة initState() مرة واحدة فقط عند إنشاء StatefulWidget، مما يجعلها المكان المثالي لبدء تحميل البيانات الدائمة بشكل غير متزامن.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_33",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 33,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.33)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A State object can be unmounted while an asynchronous storage read is suspended.",
    "questionAr": "يمكن إلغاء تثبيت كائن State أثناء تعليق قراءة التخزين غير المتزامنة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Because storage operations take time (async), the user might navigate away from the screen before the read finishes, causing the State object to be disposed (unmounted).",
    "explanationAr": "نظرًا لأن عمليات التخزين تستغرق وقتًا، فقد ينتقل المستخدم من الشاشة قبل انتهاء القراءة، مما يؤدي إلى التخلص من كائن State (unmounted).",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_34",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 34,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.34)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A mounted check is appropriate before applying an awaited persistence result to the UI.",
    "questionAr": "يعد التحقق من حالة mounted مناسبًا قبل تطبيق نتيجة التخزين الدائم المنتظرة على واجهة المستخدم (UI).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Calling setState() after an async gap on an unmounted widget throws an error. Checking the 'mounted' property ensures the widget is still in the tree before updating the UI.",
    "explanationAr": "استدعاء setState() بعد فجوة زمنية على واجهة مستخدم غير مرتبطة يُلقي خطأ. التحقق من خاصية 'mounted' يضمن وجودها في الشجرة قبل تحديث الواجهة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_35",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 35,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.35)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "SharedPreferencesAsync reads from the platform -backed preference store rather than relying on a permanently cached value.",
    "questionAr": "تقرأ SharedPreferencesAsync من مخزن التفضيلات المدعوم من المنصة بدلاً من الاعتماد على قيمة مخبأة بشكل دائم.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "SharedPreferencesAsync reads directly from the platform's underlying preferences system asynchronously, ensuring data is up-to-date rather than relying on a potentially stale memory cache.",
    "explanationAr": "تقرأ SharedPreferencesAsync مباشرة من نظام تفضيلات المنصة الأساسي بشكل غير متزامن، مما يضمن تحديث البيانات بدلاً من الاعتماد على ذاكرة تخزين مؤقت.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_36",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 36,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.36)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A cached preferences API can return stale data if another actor changes the underlying store and the cache is not reloaded.",
    "questionAr": "يمكن لواجهة برمجة تطبيقات التفضيلات المخبأة (cached preferences API) أن تُرجع بيانات قديمة إذا قام طرف آخر بتغيير المخزن الأساسي ولم يتم إعادة تحميل ذاكرة التخزين المؤقت.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "If multiple processes or instances modify the preferences, an in-memory cached instance won't automatically reflect those changes until it is explicitly reloaded.",
    "explanationAr": "إذا قامت عمليات متعددة بتعديل التفضيلات، فلن تعكس النسخة المخبأة في الذاكرة تلك التغييرات تلقائيًا حتى يتم إعادة تحميلها صراحةً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_37",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 37,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.37)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "SQLite is useful when data needs structured rows, filtering, ordering, and relationships.",
    "questionAr": "تعد SQLite مفيدة عندما تحتاج البيانات إلى صفوف مهيكلة، وتصفية، وترتيب، وعلاقات.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "SQLite is a relational database management system. It excels when data requires rigid schema, complex filtering, sorting, and joins between multiple tables.",
    "explanationAr": "SQLite هو نظام إدارة قواعد بيانات علائقية. يتفوق عندما تتطلب البيانات مخططًا صارمًا وتصفية معقدة وفرزًا وروابط بين جداول متعددة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_38",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 38,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.38)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A file is often a natural choice for raw text, serialized JSON, or other document -like content.",
    "questionAr": "غالباً ما يكون الملف خياراً طبيعياً للنصوص الخام، أو JSON المتسلسل، أو أي محتوى آخر يشبه المستندات.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Plain files are the most efficient way to store unstructured or semi-structured data like media, long plain text strings, or large JSON responses.",
    "explanationAr": "الملفات العادية هي الطريقة الأكثر كفاءة لتخزين البيانات غير المهيكلة أو شبه المهيكلة مثل الوسائط والنصوص العادية الطويلة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_39",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 39,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.39)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Preferences are appropriate for small key-value settings rather than arbitrary relational queries.",
    "questionAr": "تعد التفضيلات (Preferences) مناسبة لإعدادات المفتاح والقيمة (key-value) الصغيرة بدلاً من الاستعلامات العلائقية العشوائية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "SharedPreferences is designed exclusively for simple state properties (e.g., user theme, onboarding status). It lacks the query capabilities needed for complex datasets.",
    "explanationAr": "تم تصميم SharedPreferences حصريًا لخصائص الحالة البسيطة (مثل سمة المستخدم). تفتقر إلى قدرات الاستعلام المطلوبة لمجموعات البيانات المعقدة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_40",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 40,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.40)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A Flutter client should not store server database credentials in preferences merely because preferences persist.",
    "questionAr": "لا ينبغي لتطبيق Flutter تخزين بيانات اعتماد قاعدة بيانات الخادم في التفضيلات (Preferences) لمجرد أنها تدعم التخزين الدائم.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "SharedPreferences saves data in plain text XML/JSON on the device. Storing sensitive information like credentials poses a massive security vulnerability; secure storage should be used instead.",
    "explanationAr": "تحفظ SharedPreferences البيانات بنص عادي على الجهاز. يشكل تخزين المعلومات الحساسة مثل بيانات الاعتماد ثغرة أمنية كبيرة؛ يجب استخدام التخزين الآمن بدلاً من ذلك.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_41",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 41,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.41)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "On mobile, sqflite normally stores a database in an application -controlled local database location.",
    "questionAr": "على الأجهزة المحمولة، تقوم sqflite عادةً بتخزين قاعدة البيانات في موقع قاعدة بيانات محلي يتحكم فيه التطبيق.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The sqflite package utilizes the native SQLite implementations of iOS and Android, storing the database file securely within the app's sandboxed data directory.",
    "explanationAr": "تستخدم حزمة sqflite تطبيقات SQLite الأصلية لنظامي iOS و Android، وتخزن ملف قاعدة البيانات بشكل آمن داخل دليل البيانات المعزول للتطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_42",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 42,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.42)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A web target can have different file and SQLite capabilities from Android or iOS, so the storage plan must name its platform assumptions.",
    "questionAr": "يمكن أن يمتلك هدف الويب إمكانات ملفات و SQLite مختلفة عن Android أو iOS، لذا يجب أن تحدد خطة التخزين افتراضات المنصة الخاصة بها.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Flutter Web runs in a browser environment where direct file system and SQLite access are restricted. Web relies on IndexedDB or local storage, requiring platform-specific storage strategies.",
    "explanationAr": "يعمل Flutter Web في بيئة متصفح حيث يتم تقييد الوصول المباشر إلى نظام الملفات و SQLite. يعتمد الويب على IndexedDB، مما يتطلب استراتيجيات تخزين خاصة بالمنصة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_43",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 43,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.43)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A repository boundary can keep UI code independent from whether data comes from preferences, SQLite, files, or a remote source.",
    "questionAr": "يمكن لحدود المستودع (repository boundary) أن تبقي كود واجهة المستخدم مستقلاً عما إذا كانت البيانات تأتي من التفضيلات، أو SQLite، أو الملفات، أو مصدر بعيد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The Repository pattern abstracts data access. The UI only interacts with the repository, allowing developers to swap underlying storage engines without breaking the UI code.",
    "explanationAr": "يقوم نمط المستودع (Repository) بتجريد الوصول إلى البيانات. تتفاعل واجهة المستخدم فقط مع المستودع، مما يسمح بتبديل محركات التخزين دون كسر كود واجهة المستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_44",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 44,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.44)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Widgets should not need to know SQL syntax in order to render a list of domain objects.",
    "questionAr": "لا ينبغي أن تحتاج عناصر واجهة المستخدم (Widgets) إلى معرفة صيغة SQL من أجل عرض قائمة من كائنات النطاق (domain objects).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Separation of concerns dictates that UI components (Widgets) should handle presentation only. They should consume domain objects, leaving SQL syntax to the data access layer.",
    "explanationAr": "يملي فصل الاهتمامات أن مكونات واجهة المستخدم (Widgets) يجب أن تتعامل مع العرض فقط، وترك بناء جملة SQL لطبقة الوصول إلى البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_45",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 45,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.45)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A toMap method should produce keys and value types that agree with the database or JSON contract.",
    "questionAr": "يجب أن تُنتج دالة toMap مفاتيح وأنواع قيم تتوافق مع عقد قاعدة البيانات أو JSON.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The toMap() method acts as a serializer, converting a Dart object into a Map structure where keys represent column names or JSON fields exactly as expected by the storage schema.",
    "explanationAr": "تعمل طريقة toMap() كمحول تسلسلي، حيث تحول كائن Dart إلى بنية Map حيث تمثل المفاتيح أسماء الأعمدة أو حقول JSON تمامًا كما هو متوقع.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_46",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 46,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.46)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A fromMap or fromJson method should validate required fields and normalize values at the serialization boundary.",
    "questionAr": "يجب أن تقوم الدالة fromMap أو fromJson بالتحقق من الحقول المطلوبة وتسوية القيم عند حدود التسلسل (serialization boundary).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The fromMap() method deserializes incoming data. It serves as a defensive boundary, handling null checks, missing fields, and type conversions to safely construct a valid Dart object.",
    "explanationAr": "تقوم طريقة fromMap() بفك تسلسل البيانات الواردة. تعمل كحد دفاعي للتعامل مع القيم الفارغة والحقول المفقودة وتحويلات النوع بأمان.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_47",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 47,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.47)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A SQL where clause should bind user values through whereArgs rather than concatenating them into the SQL text.",
    "questionAr": "يجب أن تربط جملة where في SQL قيم المستخدم من خلال whereArgs بدلاً من دمجها في نص SQL.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Concatenating user inputs directly into SQL strings exposes the database to SQL injection attacks. Parameterized queries via whereArgs ensure inputs are treated strictly as data.",
    "explanationAr": "يؤدي دمج إدخالات المستخدم مباشرة في سلاسل SQL إلى تعريض قاعدة البيانات لهجمات الحقن. تضمن الاستعلامات ذات المعلمات عبر whereArgs التعامل مع المدخلات كبيانات بحتة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_48",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 48,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.48)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Using whereArgs separates a value such as an id from the SQL structure and reduces injection risk.",
    "questionAr": "يؤدي استخدام whereArgs إلى فصل قيمة مثل المعرف (id) عن بنية SQL ويقلل من مخاطر الحقن (injection risk).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "By separating the value (like an ID) from the structural SQL command, whereArgs prevents malicious actors from altering the intent of the query through clever text input.",
    "explanationAr": "من خلال فصل القيمة (مثل المعرف) عن أمر SQL الهيكلي، يمنع whereArgs الجهات الخبيثة من تغيير القصد من الاستعلام من خلال إدخال نصي ذكي.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_49",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 49,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.49)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An update that omits its where clause can modify every row, so the target boundary must be explicit.",
    "questionAr": "يمكن لعملية التحديث التي تحذف جملة where الخاصة بها تعديل كل صف، لذا يجب أن تكون حدود الهدف واضحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "In SQL, an UPDATE statement without a WHERE clause applies the new values to every single row in the table. Providing a specific condition is critical to target specific records.",
    "explanationAr": "في SQL، تؤدي عبارة UPDATE بدون شرط WHERE إلى تطبيق القيم الجديدة على كل صف في الجدول. توفير شرط محدد أمر بالغ الأهمية لاستهداف سجلات معينة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_50",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 50,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.50)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A delete operation should identify the intended row with a stable key and a matching bound argument.",
    "questionAr": "يجب أن تحدد عملية الحذف الصف المقصود باستخدام مفتاح ثابت ومعامل مرتبط مطابق.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A safe deletion requires identifying the target record unambiguously using a primary key (like an ID) supplied securely through parameterized bound arguments.",
    "explanationAr": "يتطلب الحذف الآمن تحديد السجل المستهدف بشكل لا لبس فيه باستخدام مفتاح أساسي (مثل ID) يتم توفيره بأمان من خلال وسيطات مقيدة بمعلمات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_51",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 51,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.51)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "ConflictAlgorithm.replace is a policy decision and can overwrite a conflicting row; it is not a universally safe default.",
    "questionAr": "تعتبر ConflictAlgorithm.replace قراراً سياسياً ويمكن أن تستبدل صفاً متعارضاً؛ وهي ليست الخيار الافتراضي الأكثر أماناً في كل الحالات.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Using ConflictAlgorithm.replace automatically overwrites existing rows that share the same unique key. This behavior can lead to unintended data loss if not carefully chosen.",
    "explanationAr": "يؤدي استخدام ConflictAlgorithm.replace إلى الكتابة فوق الصفوف الحالية التي تشترك في نفس المفتاح الفريد تلقائيًا، مما قد يؤدي إلى فقدان بيانات غير مقصود.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_52",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 52,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.52)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A transaction is appropriate when several database changes must succeed or fail as one logical unit.",
    "questionAr": "تعد المعاملة (transaction) مناسبة عندما يجب أن تنجح أو تفشل عدة تغييرات في قاعدة البيانات كوحدة منطقية واحدة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Database transactions enforce the ACID property of Atomicity. If any single operation in a block of database operations fails, all changes are rolled back completely.",
    "explanationAr": "تفرض معاملات قاعدة البيانات (Transactions) خاصية الذرية. إذا فشلت أي عملية داخل المعاملة، يتم التراجع عن جميع التغييرات بالكامل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_53",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 53,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.53)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A batch groups operations for efficiency but should not automatically be described as a transaction without checking the API semantics.",
    "questionAr": "تجمع الدفعة (batch) العمليات لزيادة الكفاءة ولكن لا ينبغي وصفها تلقائياً كمعاملة (transaction) دون التحقق من دلالات واجهة برمجة التطبيقات (API).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A batch executes multiple SQL commands sequentially to reduce overhead, but depending on the exact API method used, it might not automatically wrap them in an atomic rollback transaction.",
    "explanationAr": "تنفذ الدفعة (Batch) أوامر SQL متعددة بشكل متسلسل لتقليل العبء، ولكنها قد لا تضعها تلقائيًا في معاملة تراجع ذرية بناءً على واجهة برمجة التطبيقات المستخدمة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_54",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 54,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.54)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A fresh query after a write gives stronger evidence of stored data than changing a local list optimistically and stopping there.",
    "questionAr": "يوفر الاستعلام الجديد بعد عملية الكتابة دليلاً أقوى على البيانات المخزنة مقارنة بتغيير قائمة محلية بشكل متفائل والتوقف عند هذا الحد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Modifying a local state variable only assumes the database write succeeded. Querying the database explicitly afterward confirms the data was truly committed to disk.",
    "explanationAr": "تعديل متغير حالة محلي يفترض فقط نجاح الكتابة. الاستعلام عن قاعدة البيانات لاحقًا يؤكد أن البيانات تم الالتزام بها فعليًا على القرص.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_55",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 55,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.55)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A controller used by a form is a resource owned by the State object and should be disposed there.",
    "questionAr": "وحدة التحكم (controller) التي يستخدمها النموذج هي مورد يمتلكه كائن State ويجب التخلص منها (disposed) هناك.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "TextEditingController consumes system resources (listeners, memory). To prevent memory leaks, it must be explicitly freed in the dispose() method of the StatefulWidget.",
    "explanationAr": "يستهلك TextEditingController موارد النظام. لمنع تسرب الذاكرة، يجب تحريره صراحةً في طريقة dispose() الخاصة بـ StatefulWidget.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_56",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 56,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.56)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A JSON decoder can parse syntactically valid JSON that still violates the application schema.",
    "questionAr": "يمكن لوحدة فك ترميز JSON تحليل JSON صالح نحوياً والذي لا يزال ينتهك مخطط التطبيق.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The jsonDecode function only checks if the string is correctly formatted JSON. It does not verify if the resulting map contains the keys or data types your app's domain model requires.",
    "explanationAr": "تتحقق وظيفة jsonDecode فقط مما إذا كانت السلسلة منسقة بشكل صحيح. لا تتحقق مما إذا كانت الخريطة الناتجة تحتوي على المفاتيح التي يتطلبها نموذج تطبيقك.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_57",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 57,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.57)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Schema validation should distinguish a missing required field from an optional field whose value is null.",
    "questionAr": "يجب أن يميز التحقق من صحة المخطط (Schema validation) بين الحقل المطلوب المفقود والحقل الاختياري الذي قيمته null.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "In Dart, a Map might not contain a key at all, or it might contain the key mapped to an explicit null value. Schema validation logic should handle these nuances properly.",
    "explanationAr": "في Dart، قد لا تحتوي الخريطة على مفتاح على الإطلاق، أو قد تحتوي على مفتاح معين بقيمة null صريحة. يجب أن يعالج التحقق من المخطط هذه الفروق الدقيقة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_58",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 58,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.58)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A local-only feature and an offline-first feature have different synchronization and conflict responsibilities.",
    "questionAr": "تتميز الميزة المحلية فقط (local-only) والميزة التي تعمل دون اتصال بالإنترنت أولاً (offline-first) بمسؤوليات مختلفة تتعلق بالمزامنة والتعارض.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A local-only app simply saves to device storage. An offline-first app treats local storage as a cache and must actively synchronize changes with a remote server, handling potential merge conflicts.",
    "explanationAr": "يحفظ التطبيق المحلي فقط البيانات على الجهاز. أما التطبيق الذي يعمل دون اتصال أولاً (Offline-first)، فيتعامل مع التخزين المحلي كذاكرة مؤقتة ويجب عليه مزامنة التغييرات مع الخادم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_59",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 59,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.59)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An offline-first design needs a policy for stale data, pending writes, conflicts, and later synchronization.",
    "questionAr": "يحتاج التصميم الذي يعمل دون اتصال بالإنترنت أولاً (offline-first) إلى سياسة للبيانات القديمة، والكتابات المعلقة، والتعارضات، والمزامنة اللاحقة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Building robust offline-first architectures requires designing mechanisms to retry failed uploads, resolve server vs. client data discrepancies, and indicate sync status to users.",
    "explanationAr": "يتطلب بناء هياكل قوية تعمل دون اتصال أولاً تصميم آليات لإعادة محاولة التحميلات الفاشلة، وحل التناقضات بين الخادم والعميل، وتوضيح حالة المزامنة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_60",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 60,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.60)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A directory path should be joined with a filename rather than assembled with platform-specific separators by hand.",
    "questionAr": "يجب ربط مسار الدليل باسم ملف بدلاً من تجميعه يدويًا باستخدام الفواصل الخاصة بكل منصة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Different operating systems use different path separators (e.g., '\\' on Windows, '/' on Unix). Using the path package's join() function guarantees correct formatting across all platforms.",
    "explanationAr": "تستخدم أنظمة التشغيل فواصل مسارات مختلفة. يضمن استخدام وظيفة join() من حزمة path التنسيق الصحيح عبر جميع المنصات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_61",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 61,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.61)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A path provider gives a platform-appropriate directory, but the application still decides which file belongs there.",
    "questionAr": "يوفر path provider دليلاً مناسباً للمنصة، لكن التطبيق يظل هو الذي يقرر أي ملف ينتمي إلى هناك.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "While getApplicationDocumentsDirectory() provides the root folder path, the developer is fully responsible for determining the structure, file naming, and file creation within that folder.",
    "explanationAr": "بينما يوفر getApplicationDocumentsDirectory() مسار المجلد الجذر، يكون المطور مسؤولاً مسؤولية كاملة عن تحديد الهيكل وتسمية الملفات داخل ذلك المجلد.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_62",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 62,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.62)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Temporary files are not automatically suitable as long-term application records.",
    "questionAr": "لا تعتبر الملفات المؤقتة مناسبة بشكل تلقائي كسجلات تطبيق طويلة المدى.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Temporary directories (e.g., getTemporaryDirectory()) can be cleared by the OS at any time to free up space, making them highly unreliable for storing permanent user data.",
    "explanationAr": "يمكن لنظام التشغيل مسح الأدلة المؤقتة في أي وقت لتحرير المساحة، مما يجعلها غير موثوقة لتخزين بيانات المستخدم الدائمة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_63",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 63,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.63)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A missing counter file can be mapped to a defined initial value before the next write.",
    "questionAr": "يمكن تعيين ملف العداد المفقود إلى قيمة أولية محددة قبل عملية الكتابة التالية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When reading a persistent file fails (like a missing counter file), the app should catch the exception and default to a sensible initial state (e.g., 0) instead of crashing.",
    "explanationAr": "عند فشل قراءة ملف دائم، يجب أن يلتقط التطبيق الاستثناء ويعود إلى حالة أولية منطقية (مثل 0) بدلاً من الانهيار.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_64",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 64,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.64)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Parsing persisted text should handle malformed input as a controlled error or recovery path.",
    "questionAr": "يجب أن يتعامل تحليل النص المحفوظ مع الإدخال المشوه كخطأ يتم التحكم فيه أو كمسار استرداد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Persisted data might become corrupted. The parsing logic must use try-catch blocks to safely recover or reset the data when formats like JSON are unexpectedly invalid.",
    "explanationAr": "قد تتلف البيانات المحفوظة. يجب أن يستخدم منطق التحليل كتل try-catch للتعافي بأمان أو إعادة تعيين البيانات عندما تكون التنسيقات مثل JSON غير صالحة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_65",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 65,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.65)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A restart test is stronger evidence of persistence than seeing the value immediately after setState.",
    "questionAr": "يعد اختبار إعادة التشغيل دليلاً أقوى على استمرارية البيانات من رؤية القيمة فوراً بعد استخدام setState.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "setState updates the UI based on variables in RAM. A true test of persistent storage involves fully terminating the app and verifying the data successfully loads upon restart.",
    "explanationAr": "يحدث setState الواجهة بناءً على المتغيرات في الذاكرة العشوائية. الاختبار الحقيقي للتخزين الدائم يتضمن إنهاء التطبيق بالكامل والتحقق من تحميل البيانات بنجاح عند إعادة التشغيل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_66",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 66,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SharedPreferences",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.66)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "SharedPreferencesAsync can store supported primitive types, but the read type should match the write contract.",
    "questionAr": "يمكن لـ (SharedPreferencesAsync) تخزين الأنواع الأساسية المدعومة، ولكن يجب أن يتطابق نوع القراءة مع عقد الكتابة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "If a value is saved as a Double using setDouble, it must be retrieved using getDouble. Type mismatches between the write and read contracts will result in runtime errors.",
    "explanationAr": "إذا تم حفظ قيمة كعدد عشري مزدوج باستخدام setDouble، فيجب استردادها باستخدام getDouble. سيؤدي عدم تطابق النوع إلى حدوث أخطاء في وقت التشغيل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_67",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 67,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.67)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Calling remove for one preference key should not be described as clearing every unrelated preference unless the API call actually does that.",
    "questionAr": "لا ينبغي وصف استدعاء remove لمفتاح تفضيل واحد بأنه يمسح كل التفضيلات غير المرتبطة إلا إذا كان استدعاء API يفعل ذلك فعلياً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The remove(key) method targets only a single specific item in SharedPreferences, leaving all other stored preferences intact.",
    "explanationAr": "تستهدف طريقة remove(key) عنصرًا واحدًا محددًا فقط في SharedPreferences، مع ترك جميع التفضيلات المخزنة الأخرى سليمة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_68",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 68,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.68)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A clear operation should be used with awareness of its scope because it can remove more keys than a targeted remove.",
    "questionAr": "يجب استخدام عملية clear بوعي بنطاقها لأنها يمكن أن تزيل مفاتيح أكثر من عملية الحذف (remove) المستهدفة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The clear() method entirely wipes out all keys and values in the SharedPreferences instance. It should be used cautiously, such as during user logout or a hard reset.",
    "explanationAr": "تمسح طريقة clear() تمامًا جميع المفاتيح والقيم في نسخة SharedPreferences. يجب استخدامها بحذر، مثل أثناء تسجيل خروج المستخدم أو إعادة الضبط.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_69",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 69,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.69)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A cached preference instance may need a reload or recreation before it can observe an external update.",
    "questionAr": "قد تحتاج نسخة التفضيلات المخزنة مؤقتًا إلى إعادة تحميل أو إعادة إنشاء قبل أن تتمكن من ملاحظة تحديث خارجي.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Because standard SharedPreferences creates an initial cache during instantiation, changes made by other processes or async isolates aren't visible until the cache is explicitly refreshed using reload().",
    "explanationAr": "نظرًا لأن SharedPreferences القياسي ينشئ ذاكرة تخزين مؤقت أولية، فإن التغييرات التي تجريها العمليات الأخرى لا تكون مرئية حتى يتم تحديث الذاكرة صراحةً باستخدام reload().",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_70",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 70,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.70)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A database schema version gives an upgrade path when the structure changes between app releases.",
    "questionAr": "يوفر إصدار مخطط قاعدة البيانات مسار ترقية عندما تتغير البنية بين إصدارات التطبيق.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "SQLite uses version integers to track schema changes. When deploying an app update with a new database structure, incrementing the version number triggers the migration mechanism.",
    "explanationAr": "يستخدم SQLite أرقام الإصدارات لتتبع تغييرات المخطط. عند نشر تحديث لتطبيق بهيكل قاعدة بيانات جديد، فإن زيادة رقم الإصدار تؤدي إلى تشغيل آلية الترحيل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_71",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 71,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.71)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "onUpgrade is the place to apply the documented migration from an older schema to a newer one.",
    "questionAr": "تعتبر onUpgrade المكان المناسب لتطبيق الترحيل الموثق من مخطط قديم إلى مخطط أحدث.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The onUpgrade callback in sqflite executes when the requested schema version is higher than the currently installed database version, allowing you to run ALTER TABLE commands.",
    "explanationAr": "يتم تنفيذ onUpgrade في sqflite عندما يكون إصدار المخطط المطلوب أعلى من الإصدار المثبت حاليًا، مما يسمح لك بتشغيل أوامر ALTER TABLE.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_72",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 72,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.72)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A migration should preserve or transform existing user data deliberately rather than silently dropping columns.",
    "questionAr": "يجب أن يحافظ الترحيل (migration) على بيانات المستخدم الحالية أو يحولها بشكل متعمد بدلاً من إسقاط الأعمدة بصمت.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Database migrations must be non-destructive whenever possible. Rather than dropping entire tables and losing user data, scripts should carefully map existing data to the new schema.",
    "explanationAr": "يجب أن تكون عمليات ترحيل قواعد البيانات غير مدمرة كلما أمكن ذلك. بدلاً من إسقاط الجداول بالكامل، يجب تعيين البيانات الحالية بعناية إلى المخطط الجديد.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_73",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 73,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.73)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "UI loading, empty, error, and data states should reflect storage evidence rather than one generic blank screen.",
    "questionAr": "يجب أن تعكس حالات واجهة المستخدم للتحميل والفراغ والخطأ والبيانات أدلة التخزين بدلاً من شاشة فارغة عامة واحدة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A robust UX maps the asynchronous nature of storage to distinct UI states: a spinner while loading, a message if no data exists, an error alert on failure, and the actual content when successful.",
    "explanationAr": "تقوم تجربة المستخدم القوية بربط طبيعة التخزين غير المتزامنة بحالات واجهة مميزة: مؤشر أثناء التحميل، ورسالة لعدم وجود بيانات، وتنبيه عند الفشل، والمحتوى الفعلي عند النجاح.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_74",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 74,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.74)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A persistence layer should report failure instead of showing a success message before an awaited write completes.",
    "questionAr": "يجب أن تُبلغ طبقة الاستمرارية (persistence layer) عن الفشل بدلاً من إظهار رسالة نجاح قبل اكتمال عملية كتابة منتظرة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Awaiting the storage write operation ensures that the UI only displays a success notification (like a SnackBar) if the data was definitively saved without throwing an exception.",
    "explanationAr": "يضمن انتظار عملية الكتابة في التخزين أن الواجهة تعرض إشعار النجاح فقط إذا تم حفظ البيانات بشكل نهائي دون إلقاء استثناء.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_75",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 75,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.75)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Deleting a row from a local database does not imply that a remote copy has also been deleted.",
    "questionAr": "حذف صف من قاعدة بيانات محلية لا يعني أنه تم حذف نسخة بعيدة (remote copy) أيضًا.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "In distributed architectures, modifying local SQLite data doesn't instantly replicate to a backend server. The app must independently implement logic to fire a DELETE request to the remote API.",
    "explanationAr": "في الهياكل الموزعة، لا يتم نسخ تعديل بيانات SQLite المحلية فورًا إلى خادم الواجهة الخلفية. يجب أن ينفذ التطبيق منطقًا مستقلاً لإرسال طلب DELETE.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_76",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 76,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.76)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An offline-first repository may need both a local authoritative view and a remote synchronization status.",
    "questionAr": "قد يحتاج المستودع الذي يعمل دون اتصال بالإنترنت أولاً (offline-first repository) إلى كل من عرض محلي موثوق وحالة مزامنة عن بُعد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Offline-first databases often need internal tracking columns, such as 'is_synced' flags, to distinguish between data that only exists locally and data confirmed by the cloud server.",
    "explanationAr": "غالبًا ما تحتاج قواعد البيانات التي تعمل دون اتصال أولاً إلى أعمدة تتبع داخلية، مثل علامات 'is_synced'، للتمييز بين البيانات المحلية والبيانات المؤكدة من الخادم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_77",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 77,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.77)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A storage decision should consider lifetime, query shape, data size, security, platform support, and recovery needs.",
    "questionAr": "يجب أن يراعي قرار التخزين عمر البيانات، وشكل الاستعلام، وحجم البيانات، والأمان، ودعم المنصة، واحتياجات الاسترداد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Selecting a storage engine depends on use-cases: simple preferences for quick tokens, SQLite for structured search, and files for large blobs, considering the security and platform constraints of each.",
    "explanationAr": "يعتمد اختيار محرك التخزين على حالات الاستخدام: التفضيلات البسيطة للرموز السريعة، SQLite للبحث المنظم، والملفات للبيانات الكبيرة، مع مراعاة قيود الأمان والمنصة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_78",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 78,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.78)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A persistence test should verify the restored value after a new startup path, not only immediately after the write callback.",
    "questionAr": "يجب أن يتحقق اختبار الاستمرارية من القيمة المستردة بعد مسار بدء تشغيل جديد، وليس فقط فورًا بعد عملية رد نداء الكتابة (write callback).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Verifying data persistence in automated tests requires simulating a fresh launch sequence, proving the data is truly read from disk, not just held in leftover memory from a prior step.",
    "explanationAr": "يتطلب التحقق من استمرار البيانات في الاختبارات الآلية محاكاة تسلسل تشغيل جديد، لإثبات أن البيانات تُقرأ فعليًا من القرص.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_79",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 79,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.79)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A repository can expose domain-level operations while hiding whether the current implementation uses a preference, file, SQLite, or remote source.",
    "questionAr": "يمكن أن يكشف المستودع (repository) عن عمليات على مستوى النطاق مع إخفاء ما إذا كان التنفيذ الحالي يستخدم تفضيلاً أو ملفاً أو SQLite أو مصدراً بعيداً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A well-designed Repository interface exposes business methods (like getUser()) without revealing if the data is fetched from SQLite, SharedPreferences, or Firebase, enforcing architectural boundaries.",
    "explanationAr": "تكشف واجهة المستودع (Repository) المصممة جيدًا عن أساليب العمل دون الكشف عما إذا كان يتم جلب البيانات من SQLite أو SharedPreferences، مما يفرض حدودًا معمارية.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_80",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 80,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.80)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If the UI cannot distinguish loading, empty, error, and data, it may report a misleading persistence result even when the storage layer is correct.",
    "questionAr": "إذا لم تستطع واجهة المستخدم (UI) التمييز بين حالات التحميل والفراغ والخطأ والبيانات، فقد تبلغ عن نتيجة استمرارية مضللة حتى عندما تكون طبقة التخزين صحيحة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "If a UI indiscriminately shows an 'Empty' screen when an exception occurs, the user receives a false indication that their data is gone, whereas it might merely be a temporary read failure.",
    "explanationAr": "إذا أظهرت الواجهة شاشة 'فارغة' بشكل عشوائي عند حدوث استثناء، يتلقى المستخدم إشارة خاطئة بأن بياناته قد اختفت، بينما قد يكون مجرد فشل قراءة مؤقت.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_81",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 81,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.81)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A local SQLite query can return zero rows successfully, so the UI should distinguish empty from error.",
    "questionAr": "يمكن أن يرجع استعلام SQLite محلي صفر صفوف بنجاح، لذا يجب أن تميز واجهة المستخدم (UI) بين حالة الفراغ وحالة الخطأ.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "An empty SQLite list simply means the database has no records matching the query. It is a valid state that the UI should represent (e.g., 'No items yet'), distinct from a database error state.",
    "explanationAr": "قائمة SQLite الفارغة تعني ببساطة أن قاعدة البيانات لا تحتوي على سجلات مطابقة. إنها حالة صالحة يجب أن تمثلها الواجهة بشكل مميز عن حالة خطأ قاعدة البيانات.",
    "codeSnippet": "FloatingActionButton(\n  onPressed: () => _showForm(null),\n  child: const Icon(Icons.add),\n)"
  },
  {
    "id": "lab9_tf_82",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 82,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "SQLite (sqflite)",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.82)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A FAB callback can open a create form while keeping the list route available for refresh after return.",
    "questionAr": "يمكن لرد نداء FAB أن يفتح نموذج إنشاء مع الاحتفاظ بمسار القائمة متاحاً للتحديث بعد العودة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Pushing a new route for a form using a FloatingActionButton allows the user to submit data, pop back to the previous screen, and instantly refresh the parent list without losing navigation context.",
    "explanationAr": "يسمح دفع مسار جديد لنموذج باستخدام FAB للمستخدم بإرسال البيانات، والعودة إلى الشاشة السابقة، وتحديث القائمة الأصلية على الفور دون فقد سياق التنقل.",
    "codeSnippet": "setState(() {\n  _journals.add({'title':'Study Plan', 'description':'Review SQLite CRUD'});\n});"
  },
  {
    "id": "lab9_tf_83",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 83,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.83)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "After create completes, a fresh query is evidence that the new row is actually stored.",
    "questionAr": "بعد اكتمال الإنشاء، يُعد الاستعلام الجديد دليلاً على أن الصف الجديد قد تم تخزينه بالفعل.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Executing a fresh SELECT query against the database immediately after an INSERT guarantees that the data read back into the app matches the definitive state stored on the disk.",
    "explanationAr": "يضمن تنفيذ استعلام SELECT جديد ضد قاعدة البيانات فورًا بعد عملية INSERT أن البيانات التي يتم قراءتها مرة أخرى تتطابق مع الحالة النهائية المخزنة على القرص.",
    "codeSnippet": "@override\nvoid initState() {\n  super.initState();\n  _retrieveName();\n}\n\nFuture<void> _retrieveName() async {\n  final value = await _prefs.getString(_nameKey) ?? '';\n  if (!mounted) return;\n  setState(() => savedName = value);\n}"
  },
  {
    "id": "lab9_tf_84",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 84,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.84)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "After update completes, querying the target id again verifies the edited values rather than trusting the form.",
    "questionAr": "بعد اكتمال التحديث، يؤدي الاستعلام عن المعرف المستهدف مرة أخرى إلى التحقق من القيم المعدلة بدلاً من الوثوق بالنموذج.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Reloading the targeted record from persistent storage after a form update prevents desynchronization between what the database saved and what the local application memory holds.",
    "explanationAr": "تمنع إعادة تحميل السجل المستهدف من التخزين الدائم بعد تحديث النموذج عدم التزامن بين ما حفظته قاعدة البيانات وما تحتفظ به ذاكرة التطبيق المحلية.",
    "codeSnippet": "await prefs.setBool('dark_mode', true);\nfinal dark = await prefs.getBool('dark_mode') ?? false;"
  },
  {
    "id": "lab9_tf_85",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 85,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.85)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "After delete and refresh, a success message is truthful only after the awaited operation has completed.",
    "questionAr": "بعد الحذف والتحديث، تكون رسالة النجاح صادقة فقط بعد اكتمال العملية المنتظرة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Awaiting operations guarantees synchronous-like behavior in asynchronous code. The success logic and messages execute strictly after the IO operation guarantees completion.",
    "explanationAr": "يضمن انتظار العمليات سلوكًا يشبه التزامن. يتم تنفيذ منطق النجاح والرسائل بشكل صارم بعد أن تضمن عملية الإدخال والإخراج الاكتمال.",
    "codeSnippet": "final file = await _dataFile();\nfinal data = await file.exists() ? await file.readAsString(encoding: utf8) : '';\nif (!mounted) return;\nsetState(() => _content = data);"
  },
  {
    "id": "lab9_tf_86",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 86,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.86)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: final data = await file.exists() ? await file.readAsString() : ''; A saved preference must be read back into State before the restored name can be shown after relaunch.",
    "questionAr": "If we have th e following code fragment: final data = (await) file.exists() ? (await) file.readAsString() : ''; A saved preference must be read back into State before the restored name can be shown after relaunch.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When an app relaunches, all UI State resets. Preferences must be explicitly read from storage and mapped back into State variables (e.g., in initState) for the UI to reflect previously saved values.",
    "explanationAr": "عند إعادة تشغيل التطبيق، تتم إعادة تعيين جميع حالات الواجهة. يجب قراءة التفضيلات صراحةً من التخزين وتعيينها مرة أخرى في متغيرات State لتعكس الواجهة القيم المحفوظة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_87",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 87,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.87)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: final decoded = jsonDecode(raw); if (decoded is! Map<String, dynamic>) { throw const FormatException('Expected a JSON object'); } A process restart can restore persistent data only when startup code reads the correct store.",
    "questionAr": "If we have the following code fragment: final decoded = jsonDecode(raw); if (decoded is! Map<String, dynamic>) { throw const FormatException('Expected a (JSON) object'); } A process restart can restore persistent data only when startup code reads the correct store.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "If startup code points to an incorrect database name, file path, or preference key, the persistent data will fail to restore, appearing to the user as if the data was completely lost.",
    "explanationAr": "إذا أشار كود بدء التشغيل إلى مسار أو مفتاح خاطئ، فسيفشل استعادة البيانات الدائمة، مما يظهر للمستخدم وكأن البيانات قد فُقدت تمامًا.",
    "codeSnippet": null
  },
  {
    "id": "lab9_tf_88",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 88,
    "section": "Q1. True / False",
    "topic": "Local Data Storage",
    "subtopic": "File Storage",
    "type": "tf",
    "examRelevance": "included",
    "source": "Lab 9 (Q1.88)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: setState(() => loading = true); final data = await repository.loadAll(); if (!mounted) return; setState(() { loading = false; items = data; }); A file read should map an absent file to the feature’s defined first-run state, not to malformed JSON.",
    "questionAr": "If we have the following code frag ment: setState(() => loading = true); final data = (await) repository.loadAll(); if (!mounted) return; setState(() { loading = false; items = data; }); A file read should map an absent file to the feature’s defined first -run state, not to malformed (JSON).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When an application runs for the first time, it is normal for local files to be missing. Mapping this absence to a defined first-run state prevents false errors and ensures a smooth user onboarding experience.",
    "explanationAr": "عند تشغيل التطبيق للمرة الأولى، من الطبيعي أن تكون الملفات المحلية مفقودة. تعيين هذا الغياب إلى حالة 'التشغيل الأول' المحددة يمنع الأخطاء الوهمية ويضمن تجربة إعداد سلسة للمستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_01",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 1,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The persistence options you have on Flutter include:",
    "questionAr": "تشمل خيارات التخزين وحفظ البيانات المتاحة محلياً في فلاتر ما يلي:",
    "options": [
      {
        "label": "A",
        "textEn": "File storage (Read and write files).",
        "textAr": "تخزين الملفات (قراءة وكتابة الملفات)"
      },
      {
        "label": "B",
        "textEn": "Key-Value Store (SharedPreferences).",
        "textAr": "مخزن مفتاح-قيمة (SharedPreferences)"
      },
      {
        "label": "C",
        "textEn": "Local database using SQLite",
        "textAr": "قاعدة بيانات محلية باستخدام (SQLite)"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "Flutter supports all three offline persistence mechanisms: File Storage, Key-Value SharedPreferences, and SQLite relational databases.",
    "explanationAr": "يدعم فلاتر الخيارات الثلاثة جميعها: تخزين الملفات عبر dart:io، وتخزين مفتاح-قيمة عبر (SharedPreferences)، وقواعد بيانات (SQLite).",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_02",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 2,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To save files to disk, combine the path_provider plugin with the ______ library",
    "questionAr": "لحفظ الملفات على القرص في فلاتر، ندمج حزمة path_provider مع مكتبة:",
    "options": [
      {
        "label": "A",
        "textEn": "dart:io",
        "textAr": "مكتبة dart:io"
      },
      {
        "label": "B",
        "textEn": "dart:async",
        "textAr": "مكتبة dart:(async)"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "`dart:io` provides the `File` class used alongside `path_provider` to read and write files to device storage.",
    "explanationAr": "توفر مكتبة `dart:io` كلاس `File` المستخدم جنباً إلى جنب مع `path_provider` للقراءة والكتابة على أقراص الأجهزة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_03",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 3,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The ______ package provides a platform-agnostic way to access commonly used locations on the device’s file system.",
    "questionAr": "ما هي الحزمة التي توفر طريقة محايدة ومستقلة عن المنصة للوصول إلى المواقع الشائعة في نظام الملفات؟",
    "options": [
      {
        "label": "A",
        "textEn": "path_provider",
        "textAr": "حزمة path_provider"
      },
      {
        "label": "B",
        "textEn": "dart:io",
        "textAr": "مكتبة dart:io"
      },
      {
        "label": "C",
        "textEn": "dart:async",
        "textAr": "مكتبة dart:(async)"
      },
      {
        "label": "D",
        "textEn": "dart:math",
        "textAr": "dart:math"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The `path_provider` plugin finds valid platform-specific filesystem paths on Android and iOS.",
    "explanationAr": "توفر حزمة `path_provider` طريقة موحدة ومحايدة للوصول إلى مسارات الملفات الصحيحة على أندرويد و iOS.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_04",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 4,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The path_provider plugin currently supports access to:",
    "questionAr": "تدعم حزمة path_provider حالياً الوصول إلى المجلد المؤقت ومجلد مستندات التطبيق.",
    "options": [
      {
        "label": "A",
        "textEn": "One file system location (Temporary directory)",
        "textAr": "موقع نظام ملفات واحد (دليل مؤقت - Temporary directory)"
      },
      {
        "label": "B",
        "textEn": "One file system location(Documents directory)",
        "textAr": "موقع نظام ملفات واحد (دليل المستندات - Documents directory)"
      },
      {
        "label": "C",
        "textEn": "Two file system locations (Temporary and Documents directory)",
        "textAr": "موقعان لنظام الملفات (الدليل المؤقت ودليل المستندات)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "The path_provider plugin gives Flutter applications access to commonly used locations on the device file system, specifically the temporary directory and the documents directory.",
    "explanationAr": "توفر إضافة path_provider لتطبيقات Flutter إمكانية الوصول إلى المواقع شائعة الاستخدام في نظام ملفات الجهاز، وتحديداً الدليل المؤقت ودليل المستندات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_05",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 5,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A ______ that the system can clear at any time.",
    "questionAr": "______ يمكن للنظام مسحه في أي وقت.",
    "options": [
      {
        "label": "A",
        "textEn": "Documents directory (cache)",
        "textAr": "دليل المستندات (Documents directory) (الذاكرة المخبئية - cache)"
      },
      {
        "label": "B",
        "textEn": "Temporary directory (cache)",
        "textAr": "دليل مؤقت (ذاكرة تخزين مؤقت - cache)"
      },
      {
        "label": "C",
        "textEn": "A and B.",
        "textAr": "أ و ب (A and B)."
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "The temporary directory is used as a cache that the operating system can clear at any time to free up space. It is not meant for persistent, long-term storage.",
    "explanationAr": "يتم استخدام الدليل المؤقت (Temporary directory) كذاكرة تخزين مؤقت (cache) يمكن لنظام التشغيل مسحها في أي وقت لتوفير المساحة. وهو ليس مخصصاً للتخزين الدائم طويل الأمد.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_06",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 6,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A directory for the app to store files that only it can access. The system clears the directory only when the app is deleted. On iOS, this corresponds to the ______. On Android, this is the ______ directory.",
    "questionAr": "مجلد مخصص للتطبيق لتخزين الملفات التي لا يمكن لأحد غيره الوصول إليها، ويقوم النظام بمسحه فقط عند حذف التطبيق.",
    "options": [
      {
        "label": "A",
        "textEn": "AppData, NSDocumentDirectory",
        "textAr": "AppData, NSDocumentDirectory"
      },
      {
        "label": "B",
        "textEn": "NSCachesDirectory, getCacheDir",
        "textAr": "NSCachesDirectory, getCacheDir"
      },
      {
        "label": "C",
        "textEn": "NSDocumentDirectory, AppData",
        "textAr": "NSDocumentDirectory, AppData"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "True. getApplicationDocumentsDirectory() returns the private sandboxed app directory where persistent data files reside and are cleared only when the user uninstalls the app.",
    "explanationAr": "صحيح. دالة getApplicationDocumentsDirectory() تُرجع المجلد الخاص المحمي للتطبيق، وتظل الملفات بداخله محفوظة ولا تُحذف إلا عند إلغاء تثبيت التطبيق بالكامل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_07",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 7,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A temporary directory (cache) that the system can clear at any time. On iOS, this corresponds to the ______. On Android, this is the value that ______ returns.",
    "questionAr": "دليل مؤقت (ذاكرة التخزين المؤقت) يمكن للنظام مسحه في أي وقت. في نظام iOS، يتوافق هذا مع ______. أما في نظام Android، فهذه هي القيمة التي ترجعها ______.",
    "options": [
      {
        "label": "A",
        "textEn": "AppData, NSDocumentDirectory",
        "textAr": "AppData, NSDocumentDirectory"
      },
      {
        "label": "B",
        "textEn": "NSCachesDirectory, getCacheDir",
        "textAr": "NSCachesDirectory, getCacheDir"
      },
      {
        "label": "C",
        "textEn": "NSDocumentDirectory, AppData",
        "textAr": "NSDocumentDirectory, AppData"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "On iOS, the temporary cache directory corresponds to NSCachesDirectory. On Android, it maps to the value returned by getCacheDir().",
    "explanationAr": "في نظام iOS، يتوافق دليل الذاكرة المخبئية المؤقت مع NSCachesDirectory. أما في نظام Android، فهو يقابل القيمة التي ترجعها دالة getCacheDir().",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_08",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 8,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Once you know where to store the file, create a reference to the file’s full location. You can use the ______ class from the dart:io library .",
    "questionAr": "بمجرد معرفة مكان تخزين الملف، يتم إنشاء مرجع للمسار الكامل للملف باستخدام كلاس File من مكتبة dart:io.",
    "options": [
      {
        "label": "A",
        "textEn": "File",
        "textAr": "File"
      },
      {
        "label": "B",
        "textEn": "Path",
        "textAr": "مسار (Path)"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The File class from the dart:io library is used to create a reference to a file's physical location on the device, allowing read and write operations.",
    "explanationAr": "تُستخدم فئة File من مكتبة dart:io لإنشاء مرجع للموقع الفعلي للملف على الجهاز، مما يسمح بعمليات القراءة والكتابة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_09",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 9,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To write some data to the file. The counter is an integer, but is written to the file as a string using the '$counter' syntax.",
    "questionAr": "لكتابة بعض البيانات إلى الملف. العداد هو عدد صحيح، ولكنه يُكتب إلى الملف كسلسلة نصية (string) باستخدام صيغة '$counter'.",
    "options": [
      {
        "label": "A",
        "textEn": "file.write('$counter')",
        "textAr": "file.write('$counter')"
      },
      {
        "label": "B",
        "textEn": "file.writeAsInt('$counter')",
        "textAr": "file.writeAsInt('$counter')"
      },
      {
        "label": "C",
        "textEn": "file.writeAsString('$counter')",
        "textAr": "file.writeAsString('$counter')"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "File operations write and read string or byte representations to disk using File methods like writeAsString and readAsString.",
    "explanationAr": "تتم عمليات الملفات بكتابة وقراءة السلاسل النصية أو البايتات على القرص باستخدام writeAsString و readAsString.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_10",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 10,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If you have some data on disk (the counter is an integer), you can read it. Once again, use the File class and use the ______ function.",
    "questionAr": "إذا كان لديك بعض البيانات على القرص (العداد عبارة عن عدد صحيح)، يمكنك قراءتها. مرة أخرى، استخدم فئة File واستخدم دالة ______.",
    "options": [
      {
        "label": "A",
        "textEn": "file.readAsString",
        "textAr": "file.readAsString"
      },
      {
        "label": "B",
        "textEn": "file.readAsInt",
        "textAr": "file.readAsInt"
      },
      {
        "label": "C",
        "textEn": "info file.read",
        "textAr": "info file.read"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "File operations write and read string or byte representations to disk using File methods like writeAsString and readAsString.",
    "explanationAr": "تتم عمليات الملفات بكتابة وقراءة السلاسل النصية أو البايتات على القرص باستخدام writeAsString و readAsString.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_11",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 11,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "______ in Flutter are used to store data locally in key-value pairs in Android and iOS apps. We might have to save data locally while developing applications, such as login credentials or a flag.",
    "questionAr": "تُستخدم ______ في Flutter لتخزين البيانات محليًا في أزواج المفتاح والقيمة (key-value) في تطبيقات Android و iOS. قد نضطر إلى حفظ البيانات محليًا أثناء تطوير التطبيقات، مثل بيانات اعتماد تسجيل الدخول أو علامة (flag).",
    "options": [
      {
        "label": "A",
        "textEn": "Sqflite",
        "textAr": "Sqflite"
      },
      {
        "label": "B",
        "textEn": "SharedPreferences",
        "textAr": "SharedPreferences"
      },
      {
        "label": "C",
        "textEn": "Files",
        "textAr": "ملفات (Files)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "SharedPreferences is a mechanism used in Flutter to persistently store simple data, like settings and flags, locally in key-value pairs on both Android and iOS.",
    "explanationAr": "تُعد SharedPreferences آلية تُستخدم في Flutter لتخزين البيانات البسيطة بشكل دائم، مثل الإعدادات والعلامات، محلياً في أزواج مفتاح-قيمة (key-value) على كل من Android وiOS.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_12",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 12,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Using SharedPreferences, we can save multiple types of values, such as ______.",
    "questionAr": "باستخدام (SharedPreferences)، يمكننا حفظ أنواع متعددة من القيم، مثل ______.",
    "options": [
      {
        "label": "A",
        "textEn": "int, string,",
        "textAr": "int, string,"
      },
      {
        "label": "B",
        "textEn": "double, bool,",
        "textAr": "double, bool,"
      },
      {
        "label": "C",
        "textEn": "List<String>",
        "textAr": "List<String>"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "SharedPreferences supports storing multiple primitive data types, including integers, doubles, booleans, strings, and lists of strings (List<String>).",
    "explanationAr": "تدعم SharedPreferences تخزين عدة أنواع من البيانات الأولية، بما في ذلك الأعداد الصحيحة (int)، الأعداد العشرية (double)، القيم المنطقية (bool)، السلاسل النصية (string)، وقوائم السلاسل (List<String>).",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_13",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 13,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To implement and use SharedPreferences in Flutter, follow the steps below:",
    "questionAr": "لتنفيذ واستخدام (SharedPreferences) في Flutter، اتبع الخطوات أدناه:",
    "options": [
      {
        "label": "A",
        "textEn": "Add shared_preferences plugin or dependency to the project.",
        "textAr": "أضف إضافة (plugin) أو اعتمادية shared_preferences للمشروع."
      },
      {
        "label": "B",
        "textEn": "Import the shared prferences package : - import ‘package:shared_preferences/sharedpreferences.dart’;",
        "textAr": "استيراد حزمة shared_preferences: - import ‘package:shared_preferences/sharedpreferences.dart’;"
      },
      {
        "label": "C",
        "textEn": "Implement the code as per your requirement like saving, retreiving, deleting, etc.",
        "textAr": "تنفيذ الكود حسب متطلباتك مثل الحفظ، الاسترجاع، الحذف، إلخ."
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "Using SharedPreferences involves adding the dependency to pubspec.yaml, importing the package into your Dart file, and writing code to perform read/write operations.",
    "explanationAr": "يتضمن استخدام SharedPreferences إضافة الاعتمادية إلى pubspec.yaml، استيراد الحزمة إلى ملف Dart الخاص بك، وكتابة الكود لتنفيذ عمليات القراءة والكتابة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_14",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 14,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To save a string value in SharedPreferences, call the ______ method and provide the key and value.",
    "questionAr": "لحفظ قيمة نصية (string) في (SharedPreferences)، قم باستدعاء الدالة ______ وقم بتوفير المفتاح والقيمة.",
    "options": [
      {
        "label": "A",
        "textEn": "setString",
        "textAr": "setString"
      },
      {
        "label": "B",
        "textEn": "setStringList",
        "textAr": "setStringList"
      },
      {
        "label": "C",
        "textEn": "set",
        "textAr": "set"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To store a string value in SharedPreferences, you must use the setString method, passing the chosen key and the string value as arguments.",
    "explanationAr": "لتخزين قيمة نصية في SharedPreferences، يجب عليك استخدام دالة setString، وتمرير المفتاح المختار والقيمة النصية كمعاملات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_15",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 15,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To save a boolean value in SharedPreferences, call the ______ method and provide the key and value.",
    "questionAr": "لحفظ قيمة منطقية (boolean) في (SharedPreferences)، قم باستدعاء الدالة ______ وقم بتوفير المفتاح والقيمة.",
    "options": [
      {
        "label": "A",
        "textEn": "setString",
        "textAr": "setString"
      },
      {
        "label": "B",
        "textEn": "setStringList",
        "textAr": "setStringList"
      },
      {
        "label": "C",
        "textEn": "set",
        "textAr": "set"
      },
      {
        "label": "D",
        "textEn": "setBool",
        "textAr": "setBool"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "The setBool method is specifically designed to persist boolean values (true or false) under a designated key within SharedPreferences.",
    "explanationAr": "صُممت دالة setBool خصيصاً لحفظ القيم المنطقية (true أو false) تحت مفتاح محدد داخل SharedPreferences.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_16",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 16,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To save a string list value in SharedPreferences, call the setStringList() method and provide the key and value. The following code snippet will add a list ([\"pizza\", \"burger\", \"sandwich\"]) as a value to the key foodList:",
    "questionAr": "لحفظ قيمة قائمة نصية (string list) في (SharedPreferences)، قم باستدعاء الدالة setStringList() وقم بتوفير المفتاح والقيمة. سيضيف مقتطف الشفرة التالي القائمة ([\"pizza\", \"burger\", \"sandwich\"]) كقيمة للمفتاح foodList:",
    "options": [
      {
        "label": "A",
        "textEn": "prefs = await SharedPreference s.getInstance(); prefs.setStringList(\"foodList\", [\"pizza\", \"burger\", \"sandwich\"]);",
        "textAr": "prefs = await SharedPreferences.getInstance(); prefs.setStringList(\"foodList\", [\"pizza\", \"burger\", \"sandwich\"]);"
      },
      {
        "label": "B",
        "textEn": "prefs = await SharedPreferences.getInstance(); prefs.setStringList(\"foodList\", {\"pizza\", \"burger\", \"sandwich\"});",
        "textAr": "prefs = await SharedPreferences.getInstance(); prefs.setStringList(\"foodList\", {\"pizza\", \"burger\", \"sandwich\"});"
      },
      {
        "label": "C",
        "textEn": "prefs = SharedPreferences.getInstance(); prefs.setStringList(\"foodList\", [\"pizza\", \"burger\", \"sandwich\"]);",
        "textAr": "prefs = SharedPreferences.getInstance(); prefs.setStringList(\"foodList\", [\"pizza\", \"burger\", \"sandwich\"]);"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "After getting an instance of SharedPreferences, you use setStringList() passing the key and a Dart List of Strings (enclosed in square brackets) to save the list.",
    "explanationAr": "بعد الحصول على نسخة من SharedPreferences، تستخدم دالة setStringList() ممرراً المفتاح وقائمة Dart من السلاسل النصية (مغلفة بأقواس مربعة) لحفظ القائمة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_17",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 17,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To retrieve or read an int value from SharedPreferences, call the ______ method and provide the key.",
    "questionAr": "لاسترداد أو قراءة قيمة عدد صحيح (int) من (SharedPreferences)، قم باستدعاء الدالة ______ وقم بتوفير المفتاح.",
    "options": [
      {
        "label": "A",
        "textEn": "get",
        "textAr": "get"
      },
      {
        "label": "B",
        "textEn": "setInt",
        "textAr": "setInt"
      },
      {
        "label": "C",
        "textEn": "set",
        "textAr": "set"
      },
      {
        "label": "D",
        "textEn": "getInt",
        "textAr": "getInt"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "The getInt method reads an integer value associated with a specific key from SharedPreferences. It returns null if the key does not exist.",
    "explanationAr": "تقوم دالة getInt بقراءة قيمة عدد صحيح مرتبطة بمفتاح معين من SharedPreferences. وترجع null إذا لم يكن المفتاح موجوداً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_18",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 18,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To retrieve or read a double value from SharedPreferences, call the ______ method and provide the key.",
    "questionAr": "لاسترداد أو قراءة قيمة عشرية مزدوجة (double) من (SharedPreferences)، قم باستدعاء الدالة ______ وقم بتوفير المفتاح.",
    "options": [
      {
        "label": "A",
        "textEn": "get",
        "textAr": "get"
      },
      {
        "label": "B",
        "textEn": "getFloat",
        "textAr": "getFloat"
      },
      {
        "label": "C",
        "textEn": "getDouble",
        "textAr": "getDouble"
      },
      {
        "label": "D",
        "textEn": "getInt",
        "textAr": "getInt"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "To read a stored floating-point number, the getDouble method is called on the SharedPreferences instance with the corresponding key.",
    "explanationAr": "لقراءة رقم عشري مخزن، يتم استدعاء دالة getDouble على نسخة SharedPreferences مع المفتاح المقابل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_19",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 19,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To retrieve or read a string list value from SharedPreferences, call the ______ method and provide the key.",
    "questionAr": "لاسترداد أو قراءة قيمة قائمة نصية (string list) من (SharedPreferences)، قم باستدعاء الدالة ______ وقم بتوفير المفتاح.",
    "options": [
      {
        "label": "A",
        "textEn": "getString",
        "textAr": "getString"
      },
      {
        "label": "B",
        "textEn": "getStringList",
        "textAr": "getStringList"
      },
      {
        "label": "C",
        "textEn": "get",
        "textAr": "get"
      },
      {
        "label": "D",
        "textEn": "getList",
        "textAr": "getList"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "The getStringList method fetches a list of strings previously stored in SharedPreferences under a given key.",
    "explanationAr": "تقوم دالة getStringList بجلب قائمة من السلاسل النصية التي تم تخزينها مسبقاً في SharedPreferences تحت مفتاح معين.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_20",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 20,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.20)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To check if a key or record is present in SharedPreferences, we have to use the ______ method. This method takes a key as an argument and checks if the key is present in SharedPreferences.",
    "questionAr": "للتحقق مما إذا كان المفتاح أو السجل موجودًا في (SharedPreferences)، يتعين علينا استخدام الدالة ______. تأخذ هذه الدالة مفتاحًا كمعامل وتتحقق مما إذا كان المفتاح موجودًا في (SharedPreferences).",
    "options": [
      {
        "label": "A",
        "textEn": "contains",
        "textAr": "contains"
      },
      {
        "label": "B",
        "textEn": "containsVal",
        "textAr": "containsVal"
      },
      {
        "label": "C",
        "textEn": "containsKey",
        "textAr": "containsKey"
      },
      {
        "label": "D",
        "textEn": "findesKey",
        "textAr": "findesKey"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "The containsKey method checks if a specific key exists within SharedPreferences, returning true if it does and false otherwise.",
    "explanationAr": "تتحقق دالة containsKey مما إذا كان مفتاح معين موجوداً داخل SharedPreferences، وترجع true إذا كان كذلك و false في حال العكس.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_21",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 21,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To reset and remove any saved data in SharedPreferences, call the ______ method without providing the key and value.",
    "questionAr": "لإعادة تعيين وإزالة أي بيانات محفوظة في (SharedPreferences)، قم باستدعاء الدالة ______ دون توفير المفتاح والقيمة.",
    "options": [
      {
        "label": "A",
        "textEn": "remove",
        "textAr": "remove"
      },
      {
        "label": "B",
        "textEn": "clear",
        "textAr": "clear"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "The remove method deletes a single entry based on its key. To completely clear all data within the SharedPreferences instance, the clear method is used.",
    "explanationAr": "تقوم دالة remove بحذف إدخال واحد بناءً على مفتاحه. لمسح جميع البيانات بالكامل داخل نسخة SharedPreferences، يتم استخدام دالة clear.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_22",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 22,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.22)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Flutter apps can make use of the SQLite databases via the ______.. plugin available on pub.dev.",
    "questionAr": "Flutter apps can make use of the (SQLite) databases via the ______.. plugin available on pub.dev.",
    "options": [
      {
        "label": "A",
        "textEn": "sqflight",
        "textAr": "sqflight"
      },
      {
        "label": "B",
        "textEn": "sqflite",
        "textAr": "حزمة (sqflite)"
      },
      {
        "label": "C",
        "textEn": "sqlFlutter",
        "textAr": "sqlFlutter"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "The sqflite plugin on pub.dev provides the necessary tools and wrappers to seamlessly interact with SQLite databases within Flutter applications.",
    "explanationAr": "توفر إضافة sqflite على pub.dev الأدوات والأغلفة اللازمة للتفاعل بسلاسة مع قواعد بيانات SQLite داخل تطبيقات Flutter.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_23",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 23,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.23)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The ______. package provides classes and functions to interact with a SQLite database.",
    "questionAr": "The ______. package provides classes and functions to interact with a (SQLite) database.",
    "options": [
      {
        "label": "A",
        "textEn": "sqflite",
        "textAr": "حزمة (sqflite)"
      },
      {
        "label": "B",
        "textEn": "path",
        "textAr": "path"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The sqflite package is the core library that exposes the classes and functions required for SQLite database operations in Dart.",
    "explanationAr": "حزمة sqflite هي المكتبة الأساسية التي توفر الفئات والدوال المطلوبة لعمليات قاعدة بيانات SQLite في لغة Dart.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_24",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 24,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.24)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The ______ package provides functions to define the location for storing the database on disk.",
    "questionAr": "توفر الحزمة ______ دوالًا لتحديد الموقع المخصص لتخزين قاعدة البيانات على القرص.",
    "options": [
      {
        "label": "A",
        "textEn": "sqflite",
        "textAr": "حزمة (sqflite)"
      },
      {
        "label": "B",
        "textEn": "path",
        "textAr": "path"
      },
      {
        "label": "C",
        "textEn": "A and B",
        "textAr": "أ و ب معاً"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The sqflite package includes functions like getDatabasesPath() which help define and locate where the database file should reside on the physical disk.",
    "explanationAr": "تتضمن حزمة sqflite دوال مثل getDatabasesPath() التي تساعد في تحديد وتحديد موقع تخزين ملف قاعدة البيانات على القرص الفعلي.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_25",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 25,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.25)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Define the path to the database file using ______. from the sqflite package, combined with the join function from the path package.",
    "questionAr": "Define the path to the database file using ______. from the (sqflite) package, combined with the join function from the path package.",
    "options": [
      {
        "label": "A",
        "textEn": "getDatabasesPath",
        "textAr": "getDatabasesPath"
      },
      {
        "label": "B",
        "textEn": "getPath",
        "textAr": "getPath"
      },
      {
        "label": "C",
        "textEn": "getDatabases",
        "textAr": "getDatabases"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To safely build a database file path across different platforms, you combine getDatabasesPath() from sqflite with the join function from the path package.",
    "explanationAr": "لبناء مسار ملف قاعدة بيانات بأمان عبر منصات مختلفة، تقوم بدمج getDatabasesPath() من حزمة sqflite مع دالة join من حزمة path.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_26",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 26,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.26)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Before reading and writing data to the database, open a connection to the database. Open the database with the ______ function from sqflite.",
    "questionAr": "Before reading and writing data to the database, open a connection to the database. Open the database with the ______.. function from (sqflite).",
    "options": [
      {
        "label": "A",
        "textEn": "openDatabasePath",
        "textAr": "openDatabasePath"
      },
      {
        "label": "B",
        "textEn": "openDatabase",
        "textAr": "openDatabase"
      },
      {
        "label": "C",
        "textEn": "getOpenDatabases",
        "textAr": "getOpenDatabases"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "The openDatabase function from the sqflite package is responsible for opening a connection to the SQLite database, creating it if it doesn't exist.",
    "explanationAr": "تعتبر دالة openDatabase من حزمة sqflite مسؤولة عن فتح اتصال بقاعدة بيانات SQLite، وإنشائها إذا لم تكن موجودة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_27",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 27,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.27)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To insert a data into a table in sqflite database. This involves:",
    "questionAr": "To insert a data into a table in (sqflite) database. This involves:",
    "options": [
      {
        "label": "A",
        "textEn": "Use the insert() method to store the Map in the table.",
        "textAr": "استخدم طريقة (method) insert() لتخزين Map في الجدول."
      },
      {
        "label": "B",
        "textEn": "Convert the data into a List and Use the insert() method to store the Map in the table.",
        "textAr": "تحويل البيانات إلى List واستخدام طريقة (method) insert() لتخزين Map في الجدول."
      },
      {
        "label": "C",
        "textEn": "Convert the data into a Map and Use the insert() method to store the Map in the table.",
        "textAr": "تحويل البيانات إلى Map واستخدام الدالة insert() لتخزين الـ Map في الجدول."
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "Inserting data into a sqflite table requires converting your Dart objects into a Map format, which is then passed to the insert() method.",
    "explanationAr": "يتطلب إدراج البيانات في جدول sqflite تحويل كائنات Dart الخاصة بك إلى صيغة Map، والتي يتم تمريرها بعد ذلك إلى دالة insert().",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_28",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 28,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.28)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In addition to inserting and updating information about Dogs, you can also remove dogs from the database. To delete data, use the ______ method from the ______ library.",
    "questionAr": "بالإضافة إلى إدخال وتحديث معلومات حول Dogs، يمكنك أيضًا إزالة الكلاب من قاعدة البيانات. لحذف البيانات، استخدم الدالة ______ من مكتبة ______.",
    "options": [
      {
        "label": "A",
        "textEn": "delete(), path",
        "textAr": "delete(), path"
      },
      {
        "label": "B",
        "textEn": "delete(), sqflite",
        "textAr": "delete(), sqflite"
      },
      {
        "label": "C",
        "textEn": "del(), sqflite",
        "textAr": "del(), sqflite"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "To remove records from a SQLite database, you use the delete() method provided by the sqflite library, specifying the table and conditions.",
    "explanationAr": "لإزالة السجلات من قاعدة بيانات SQLite، تستخدم دالة delete() التي توفرها مكتبة sqflite، مع تحديد الجدول والشروط.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_29",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 29,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.29)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "______ is a fast relational database that can be used to store data offline for mobile applications.",
    "questionAr": "تُعد ______ قاعدة بيانات علائقية سريعة يمكن استخدامها لتخزين البيانات دون اتصال بالإنترنت لتطبيقات الهاتف المحمول.",
    "options": [
      {
        "label": "A",
        "textEn": "Hive",
        "textAr": "Hive"
      },
      {
        "label": "B",
        "textEn": "Sembast",
        "textAr": "Sembast"
      },
      {
        "label": "C",
        "textEn": "SQLite",
        "textAr": "SQLite"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "SQLite is a robust, lightweight relational database engine widely used in mobile development for offline data storage.",
    "explanationAr": "SQLite هو محرك قاعدة بيانات علائقية قوي وخفيف الوزن يُستخدم على نطاق واسع في تطوير تطبيقات الهواتف المحمولة لتخزين البيانات دون اتصال بالإنترنت.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_30",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 30,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.30)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "______ in Flutter is used to store data locally in Android and iOS apps.",
    "questionAr": "تُستخدم ______ في Flutter لتخزين البيانات محليًا في تطبيقات Android و iOS.",
    "options": [
      {
        "label": "A",
        "textEn": "Txt files",
        "textAr": "ملفات Txt"
      },
      {
        "label": "B",
        "textEn": "SharedPreferences",
        "textAr": "SharedPreferences"
      },
      {
        "label": "C",
        "textEn": "SQLite",
        "textAr": "SQLite"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "Flutter developers commonly rely on both SharedPreferences for simple key-value pairs and SQLite for structured relational data to achieve local persistence.",
    "explanationAr": "يعتمد مطورو Flutter عادةً على كل من SharedPreferences للأزواج البسيطة (key-value) و SQLite للبيانات العلائقية المهيكلة لتحقيق الاستمرارية المحلية للبيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_31",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 31,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.31)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A counter appears correct until the app process is terminated and relaunched. What storage is missing?",
    "questionAr": "يظهر العداد بشكل صحيح حتى يتم إنهاء عملية التطبيق وإعادة تشغيلها. ما هو التخزين المفقود؟",
    "options": [
      {
        "label": "A",
        "textEn": "Persistent storage plus startup restoration",
        "textAr": "تخزين دائم (Persistent storage) بالإضافة إلى الاستعادة عند بدء التشغيل"
      },
      {
        "label": "B",
        "textEn": "A second setState call only",
        "textAr": "استدعاء setState ثانٍ فقط"
      },
      {
        "label": "C",
        "textEn": "A different AppBar color",
        "textAr": "لون AppBar مختلف"
      },
      {
        "label": "D",
        "textEn": "A new BuildContext",
        "textAr": "BuildContext جديد"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If a counter resets after the app restarts, it indicates that the state was only stored in memory. Persistent storage and logic to restore it on startup are missing.",
    "explanationAr": "إذا تمت إعادة تعيين العداد بعد إعادة تشغيل التطبيق، فهذا يشير إلى أن الحالة تم تخزينها في الذاكرة فقط. التخزين الدائم والمنطق لاستعادته عند بدء التشغيل مفقودان.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_32",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 32,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.32)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A value is created as a local variable inside build. What is the main limitation?",
    "questionAr": "A value is created as a local variable inside (build). What is the main limitation?",
    "options": [
      {
        "label": "A",
        "textEn": "It can be recreated and lost on rebuilds",
        "textAr": "يمكن إعادة إنشائه ويفقد عند إعادة البناء (rebuilds)"
      },
      {
        "label": "B",
        "textEn": "It automatically survives uninstall",
        "textAr": "تنجو تلقائياً من إلغاء التثبيت"
      },
      {
        "label": "C",
        "textEn": "It is stored in SQLite",
        "textAr": "يتم تخزينه في (SQLite)"
      },
      {
        "label": "D",
        "textEn": "It is shared with the server",
        "textAr": "تتم مشاركته مع الخادم (server)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Variables declared locally inside a build method are inherently volatile. They are lost and recreated every time the widget is rebuilt by the framework.",
    "explanationAr": "المتغيرات المعلنة محلياً داخل دالة build هي متقلبة بطبيعتها. تُفقد ويُعاد إنشاؤها في كل مرة يتم فيها إعادة بناء الـ widget بواسطة إطار العمل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_33",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 33,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.33)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which value is a natural candidate for a small key-value preference?",
    "questionAr": "أي قيمة تُعد مرشحًا طبيعيًا لتفضيل مفتاح وقيمة (key-value preference) صغير؟",
    "options": [
      {
        "label": "A",
        "textEn": "A user-selected theme mode",
        "textAr": "وضع سمة (theme mode) محدد من قبل المستخدم"
      },
      {
        "label": "B",
        "textEn": "A table of thousands of journal rows with joins",
        "textAr": "جدول بآلاف الصفوف اليومية (journal) مع روابط (joins)"
      },
      {
        "label": "C",
        "textEn": "A large binary video",
        "textAr": "فيديو ثنائي (binary) كبير"
      },
      {
        "label": "D",
        "textEn": "A relational query plan",
        "textAr": "خطة استعلام علائقية (relational query plan)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A user-selected theme mode is a simple, singular setting. Small configuration values like this are the ideal use case for a key-value store like SharedPreferences.",
    "explanationAr": "وضع السمة الذي يختاره المستخدم هو إعداد بسيط ومفرد. قيم التكوين الصغيرة كهذه هي حالة الاستخدام المثالية لمخزن مفتاح-قيمة مثل SharedPreferences.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_34",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 34,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.34)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A journal app needs filtering, ordering, and updating individual rows by id. Which store fits best?",
    "questionAr": "يحتاج تطبيق اليوميات إلى التصفية والترتيب وتحديث الصفوف الفردية حسب المعرف (id). ما هو التخزين الأنسب؟",
    "options": [
      {
        "label": "A",
        "textEn": "SQLite",
        "textAr": "SQLite"
      },
      {
        "label": "B",
        "textEn": "A single preference key",
        "textAr": "مفتاح تفضيل (preference key) واحد"
      },
      {
        "label": "C",
        "textEn": "A TextEditingController",
        "textAr": "TextEditingController"
      },
      {
        "label": "D",
        "textEn": "The widget tree only",
        "textAr": "شجرة الويدجت (widget tree) فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When an application requires structured data capable of advanced queries, sorting, and row-level updates, a relational database like SQLite is the best fit.",
    "explanationAr": "عندما يتطلب التطبيق بيانات مهيكلة قادرة على الاستعلامات المتقدمة والفرز وتحديثات على مستوى الصفوف، فإن قاعدة بيانات علائقية مثل SQLite هي الأنسب.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_35",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 35,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.35)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A notes feature stores one document as JSON text and reads it back as a whole. Which store is a natural fit?",
    "questionAr": "ميزة ملاحظات تخزن مستندًا واحدًا كنص JSON وتقرأه بالكامل. ما هو التخزين الأنسب؟",
    "options": [
      {
        "label": "A",
        "textEn": "A file",
        "textAr": "ملف"
      },
      {
        "label": "B",
        "textEn": "A route name",
        "textAr": "اسم المسار (route name)"
      },
      {
        "label": "C",
        "textEn": "A TabController",
        "textAr": "TabController"
      },
      {
        "label": "D",
        "textEn": "A single Boolean preference only",
        "textAr": "تفضيل بولياني (Boolean preference) واحد فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Reading and writing whole blocks of structured text, such as a complete JSON document without needing relational queries, naturally maps to standard file I/O operations.",
    "explanationAr": "قراءة وكتابة كتل كاملة من النصوص المهيكلة، مثل مستند JSON كامل دون الحاجة إلى استعلامات علائقية، يتوافق بشكل طبيعي مع عمليات الإدخال والإخراج (I/O) القياسية للملفات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_36",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 36,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.36)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A user preference must be read after a process restart. Which design is required?",
    "questionAr": "يجب قراءة تفضيلات المستخدم بعد إعادة تشغيل العملية. ما هو التصميم المطلوب؟",
    "options": [
      {
        "label": "A",
        "textEn": "Write it to a persistent preference store and read it during startup",
        "textAr": "كتابتها في مخزن تفضيلات دائم وقراءتها أثناء بدء التشغيل"
      },
      {
        "label": "B",
        "textEn": "Keep it only in a local build variable",
        "textAr": "احتفظ به فقط في متغير بناء (build variable) محلي"
      },
      {
        "label": "C",
        "textEn": "SetState after every frame",
        "textAr": "استدعاء SetState بعد كل إطار (frame)"
      },
      {
        "label": "D",
        "textEn": "Store it in BuildContext",
        "textAr": "تخزينه في BuildContext"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "For a preference to persist across app restarts, it must be explicitly written to a persistent store and then explicitly read back during the app's startup sequence.",
    "explanationAr": "لكي يستمر التفضيل عبر عمليات إعادة تشغيل التطبيق، يجب كتابته صراحةً في مخزن دائم ثم قراءته صراحةً أثناء تسلسل بدء تشغيل التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_37",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 37,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.37)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A stored username is absent on first launch. What is a robust interpretation?",
    "questionAr": "اسم المستخدم المخزن غير موجود عند التشغيل الأول. ما هو التفسير القوي لذلك؟",
    "options": [
      {
        "label": "A",
        "textEn": "Show an explicit first-run or empty state",
        "textAr": "إظهار حالة تشغيل أول (first-run) صريحة أو حالة فارغة"
      },
      {
        "label": "B",
        "textEn": "Treat it as a database corruption automatically",
        "textAr": "التعامل معه على أنه تلف في قاعدة البيانات تلقائيًا"
      },
      {
        "label": "C",
        "textEn": "Display the password hash",
        "textAr": "عرض تجزئة (hash) كلمة المرور"
      },
      {
        "label": "D",
        "textEn": "Create a random username silently",
        "textAr": "إنشاء اسم مستخدم عشوائي بصمت"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When a value like a username is absent on the first launch, it implies the user hasn't set it yet. The robust approach is to render a first-run UI.",
    "explanationAr": "عندما تغيب قيمة مثل اسم المستخدم في أول تشغيل، فهذا يعني أن المستخدم لم يقم بتعيينها بعد. النهج القوي هو عرض واجهة مستخدم خاصة بالتشغيل الأول.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_38",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 38,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.38)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A SQLite query succeeds but returns an empty list. What should the UI show?",
    "questionAr": "نجح استعلام SQLite ولكنه أرجع قائمة فارغة. ماذا يجب أن تعرض واجهة المستخدم؟",
    "options": [
      {
        "label": "A",
        "textEn": "A truthful empty state",
        "textAr": "حالة فارغة (empty state) حقيقية"
      },
      {
        "label": "B",
        "textEn": "A loading spinner forever",
        "textAr": "مؤشر تحميل (spinner) إلى الأبد"
      },
      {
        "label": "C",
        "textEn": "A fabricated journal",
        "textAr": "يومية (journal) ملفقة"
      },
      {
        "label": "D",
        "textEn": "A SQL exception automatically",
        "textAr": "استثناء SQL (SQL exception) تلقائياً"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A successful query returning zero rows means the database is functioning but empty. The UI should reflect this reality with a clear empty state message.",
    "explanationAr": "استعلام ناجح يرجع صفر صفوف يعني أن قاعدة البيانات تعمل ولكنها فارغة. يجب أن تعكس واجهة المستخدم هذا الواقع برسالة واضحة تشير إلى الحالة الفارغة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_39",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 39,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.39)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A file does not exist the first time the app runs. What should a JSON repository do if first-run is valid?",
    "questionAr": "الملف غير موجود في أول مرة يتم فيها تشغيل التطبيق. ماذا يجب أن يفعل مستودع JSON إذا كان التشغيل الأول صالحًا؟",
    "options": [
      {
        "label": "A",
        "textEn": "Return a defined empty/first-run result",
        "textAr": "إرجاع نتيجة فارغة/تشغيل أول (empty/first-run) محددة"
      },
      {
        "label": "B",
        "textEn": "Read a random path",
        "textAr": "قراءة مسار (path) عشوائي"
      },
      {
        "label": "C",
        "textEn": "Assume the file contains valid JSON",
        "textAr": "افتراض أن الملف يحتوي على (JSON) صالح"
      },
      {
        "label": "D",
        "textEn": "Write database credentials into it",
        "textAr": "كتابة بيانات اعتماد قاعدة البيانات (database credentials) فيه"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If a file doesn't exist and the app logic allows for a first-run scenario, the repository should catch this and return a valid, predefined empty state instead of throwing an error.",
    "explanationAr": "إذا لم يكن الملف موجوداً وكان منطق التطبيق يسمح بسيناريو التشغيل الأول، يجب على المستودع التقاط هذا وإرجاع حالة فارغة صالحة ومحددة مسبقاً بدلاً من إلقاء خطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_40",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 40,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.40)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why check mounted after awaiting a database read in a StatefulWidget?",
    "questionAr": "لماذا نتحقق من mounted بعد انتظار قراءة قاعدة بيانات في StatefulWidget؟",
    "options": [
      {
        "label": "A",
        "textEn": "The screen may have been removed before the read completed",
        "textAr": "ربما تمت إزالة الشاشة قبل اكتمال القراءة"
      },
      {
        "label": "B",
        "textEn": "It converts rows to maps",
        "textAr": "تقوم بتحويل الصفوف إلى Maps"
      },
      {
        "label": "C",
        "textEn": "It creates a schema version",
        "textAr": "تُنشئ إصدار مخطط (schema version)"
      },
      {
        "label": "D",
        "textEn": "It makes a query transactional",
        "textAr": "يجعل الاستعلام بصيغة معاملة (transactional)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Because database reads are asynchronous (await), the user might navigate away before the read finishes. Checking 'mounted' ensures the widget is still in the tree before updating the UI.",
    "explanationAr": "نظراً لأن قراءات قاعدة البيانات غير متزامنة (await)، فقد يغادر المستخدم الشاشة قبل اكتمال القراءة. يضمن التحقق من 'mounted' أن الـ widget لا يزال في الشجرة قبل تحديث واجهة المستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_41",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 41,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.41)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A preference value changed outside a cached reader, but the UI still shows the old value. What is likely?",
    "questionAr": "تغيرت قيمة التفضيل خارج قارئ مخزن مؤقتًا، لكن واجهة المستخدم (UI) لا تزال تعرض القيمة القديمة. ما هو السبب المحتمل؟",
    "options": [
      {
        "label": "A",
        "textEn": "The reader cache was not reloaded or bypassed",
        "textAr": "لم يتم إعادة تحميل ذاكرة التخزين المؤقت للقارئ (reader cache) أو تجاوزها"
      },
      {
        "label": "B",
        "textEn": "SQLite has no rows",
        "textAr": "(SQLite) لا تحتوي على أي صفوف"
      },
      {
        "label": "C",
        "textEn": "The file path is too long",
        "textAr": "مسار الملف طويل جدًا"
      },
      {
        "label": "D",
        "textEn": "The widget has a Hero tag",
        "textAr": "الويدجت يحتوي على إشارة Hero (Hero tag)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If external changes aren't reflected in the UI, the reader logic is likely relying on stale, cached data instead of reacting to or reloading the fresh values from storage.",
    "explanationAr": "إذا لم تنعكس التغييرات الخارجية في واجهة المستخدم، فمن المحتمل أن منطق القارئ يعتمد على بيانات مخبأة قديمة بدلاً من التفاعل مع أو إعادة تحميل القيم الحديثة من التخزين.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_42",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 42,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.42)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which boundary best isolates a Flutter screen from storage implementation details?",
    "questionAr": "أي حدود تعزل شاشة Flutter بشكل أفضل عن تفاصيل تنفيذ التخزين؟",
    "options": [
      {
        "label": "A",
        "textEn": "A repository/service interface returning domain data",
        "textAr": "واجهة repository/service ترجع بيانات النطاق (domain data)"
      },
      {
        "label": "B",
        "textEn": "SQL strings embedded in every build method",
        "textAr": "سلاسل SQL (SQL strings) مضمنة في كل دالة (build)"
      },
      {
        "label": "C",
        "textEn": "A global BuildContext",
        "textAr": "BuildContext عام (global)"
      },
      {
        "label": "D",
        "textEn": "A TextEditingController used as a database",
        "textAr": "استخدام TextEditingController كقاعدة بيانات"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The Repository pattern abstracts data access. By providing a service interface that returns domain models, the UI remains cleanly isolated from whether data comes from SQLite or a file.",
    "explanationAr": "يجرد نمط المستودع (Repository pattern) الوصول إلى البيانات. من خلال توفير واجهة خدمة ترجع نماذج النطاق، تظل واجهة المستخدم معزولة تماماً عما إذا كانت البيانات تأتي من SQLite أو ملف.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_43",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 43,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.43)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A Dog model needs to be inserted into SQLite. What should toMap provide?",
    "questionAr": "نموذج Dog يحتاج إلى إدراجه في SQLite. ماذا يجب أن توفر toMap؟",
    "options": [
      {
        "label": "A",
        "textEn": "Column names mapped to database-compatible values",
        "textAr": "أسماء الأعمدة (Column names) المعينة إلى قيم متوافقة مع قاعدة البيانات"
      },
      {
        "label": "B",
        "textEn": "A Widget tree",
        "textAr": "شجرة ويدجت (Widget tree)"
      },
      {
        "label": "C",
        "textEn": "A route result",
        "textAr": "نتيجة مسار (route result)"
      },
      {
        "label": "D",
        "textEn": "An HTTP status only",
        "textAr": "حالة (HTTP) فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The toMap method acts as a serializer, mapping the model's properties to keys (column names) and values that the SQLite plugin understands and can write to the table.",
    "explanationAr": "تعمل دالة toMap كمُسلسل (serializer)، حيث تقوم بتعيين خصائص النموذج إلى مفاتيح (أسماء الأعمدة) وقيم يمكن لإضافة SQLite فهمها وكتابتها في الجدول.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_44",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 44,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.44)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which query is safer for a user-provided id?",
    "questionAr": "أي استعلام أكثر أمانًا لمعرف (id) مقدم من المستخدم؟",
    "options": [
      {
        "label": "A",
        "textEn": "db.query(\"dogs\", where: \"id = ?\", whereArgs: [id])",
        "textAr": "db.query(\"dogs\", where: \"id = ?\", whereArgs: [id])"
      },
      {
        "label": "B",
        "textEn": "db.rawQuery(\"______ id = $id\")",
        "textAr": "db.rawQuery(\"______ id = $id\")"
      },
      {
        "label": "C",
        "textEn": "db.query(\"dogs\", where: \"id = \" + id)",
        "textAr": "db.query(\"dogs\", where: \"id = \" + id)"
      },
      {
        "label": "D",
        "textEn": "BuildContext.read(id)",
        "textAr": "BuildContext.read(id)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Using parameterized queries (where: 'id = ?', whereArgs: [id]) is fundamentally safer because the database driver escapes the input, preventing SQL injection vulnerabilities.",
    "explanationAr": "يُعد استخدام الاستعلامات ذات المعلمات (where: 'id = ?', whereArgs: [id]) أكثر أماناً بشكل أساسي لأن مشغل قاعدة البيانات يقوم بتأمين الإدخال، مما يمنع ثغرات حقن SQL.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_45",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 45,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.45)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why is string concatenation unsafe in SQL conditions?",
    "questionAr": "لماذا يُعد دمج السلاسل النصية (string concatenation) غير آمن في شروط SQL؟",
    "options": [
      {
        "label": "A",
        "textEn": "Untrusted input can alter the SQL structure",
        "textAr": "يمكن للإدخال غير الموثوق أن يغير هيكل SQL"
      },
      {
        "label": "B",
        "textEn": "It always makes queries slower than a file",
        "textAr": "يجعل الاستعلامات دائمًا أبطأ من الملف"
      },
      {
        "label": "C",
        "textEn": "It prevents all updates",
        "textAr": "تمنع جميع التحديثات"
      },
      {
        "label": "D",
        "textEn": "It changes a Future into a Stream",
        "textAr": "تقوم بتغيير (Future) إلى (Stream)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Direct string concatenation with user input allows malicious or malformed text to alter the intended SQL syntax, opening the door to catastrophic SQL injection attacks.",
    "explanationAr": "يسمح الربط النصي المباشر مع إدخال المستخدم للنصوص الخبيثة أو المشوهة بتغيير بناء جملة SQL المقصود، مما يفتح الباب أمام هجمات حقن SQL الكارثية.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_46",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 46,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.46)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An update must affect exactly one journal row. Which detail is essential?",
    "questionAr": "يجب أن يؤثر التحديث على صف يوميات واحد بالضبط. ما هي التفصيلة الأساسية لذلك؟",
    "options": [
      {
        "label": "A",
        "textEn": "A where clause on the stable id with matching whereArgs",
        "textAr": "جملة where على المعرف الثابت (stable id) مع whereArgs المطابقة"
      },
      {
        "label": "B",
        "textEn": "Omitting where to simplify the code",
        "textAr": "حذف where لتبسيط الكود"
      },
      {
        "label": "C",
        "textEn": "Using the row title as SQL text",
        "textAr": "استخدام عنوان الصف كنص SQL"
      },
      {
        "label": "D",
        "textEn": "Updating every row then filtering in the widget",
        "textAr": "تحديث كل صف (row) ثم الفلترة في الـ widget"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To guarantee an update targets exactly one specific record, the SQL query must include a strict 'where' clause matching the record's unique, stable identifier.",
    "explanationAr": "لضمان استهداف التحديث لسجل واحد محدد بالضبط، يجب أن يتضمن استعلام SQL جملة 'where' صارمة تطابق المعرف الفريد والمستقر للسجل.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_47",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 47,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.47)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "When are transactions most appropriate?",
    "questionAr": "متى تكون المعاملات (transactions) هي الأنسب؟",
    "options": [
      {
        "label": "A",
        "textEn": "When several database changes must be atomic as one logical operation",
        "textAr": "عندما يجب أن تكون العديد من تغييرات قاعدة البيانات ذرية (atomic) كعملية منطقية واحدة"
      },
      {
        "label": "B",
        "textEn": "When reading one preference key",
        "textAr": "عند قراءة مفتاح تفضيل (preference key) واحد"
      },
      {
        "label": "C",
        "textEn": "When rendering a Text widget",
        "textAr": "عند تصيير ويدجت Text"
      },
      {
        "label": "D",
        "textEn": "When selecting an image",
        "textAr": "عند اختيار صورة"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Transactions ensure atomicity. They should be used when multiple related database changes must succeed or fail together as a single, cohesive unit of work.",
    "explanationAr": "تضمن المعاملات (Transactions) الذرية (atomicity). يجب استخدامها عندما يجب أن تنجح العديد من تغييرات قاعدة البيانات ذات الصلة أو تفشل معاً كوحدة عمل واحدة متماسكة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_48",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 48,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.48)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is a cautious interpretation of ConflictAlgorithm.replace?",
    "questionAr": "ما هو التفسير الحذر لـ ConflictAlgorithm.replace؟",
    "options": [
      {
        "label": "A",
        "textEn": "A declared conflict policy that may replace an existing row",
        "textAr": "سياسة تعارض (conflict policy) معلنة قد تستبدل صفاً (row) موجوداً"
      },
      {
        "label": "B",
        "textEn": "A guarantee that no data can be overwritten",
        "textAr": "ضمان عدم إمكانية الكتابة فوق أي بيانات"
      },
      {
        "label": "C",
        "textEn": "A JSON validation method",
        "textAr": "طريقة للتحقق من صحة (JSON)"
      },
      {
        "label": "D",
        "textEn": "A lifecycle check",
        "textAr": "فحص دورة الحياة (lifecycle)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "ConflictAlgorithm.replace instructs the database to silently overwrite existing data if a constraint violation (like a duplicate primary key) occurs during an insert.",
    "explanationAr": "توجه ConflictAlgorithm.replace قاعدة البيانات للكتابة فوق البيانات الموجودة بصمت في حال حدوث انتهاك لأحد القيود (مثل تكرار المفتاح الأساسي) أثناء عملية الإدراج.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_49",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 49,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.49)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A list is updated locally after an insert without reading the database. What evidence is missing?",
    "questionAr": "يتم تحديث القائمة محليًا بعد عملية الإدراج دون قراءة قاعدة البيانات. ما هو الدليل المفقود؟",
    "options": [
      {
        "label": "A",
        "textEn": "A fresh query or equivalent confirmed persistence evidence",
        "textAr": "استعلام (query) جديد أو دليل استمرارية مؤكد مكافئ"
      },
      {
        "label": "B",
        "textEn": "A new AppBar",
        "textAr": "AppBar جديد"
      },
      {
        "label": "C",
        "textEn": "A second controller",
        "textAr": "متحكم (controller) ثاني"
      },
      {
        "label": "D",
        "textEn": "A different route name",
        "textAr": "اسم مسار (route) مختلف"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If UI state is updated optimistically without verifying the database, you lack empirical evidence that the data was actually persisted to disk successfully.",
    "explanationAr": "إذا تم تحديث حالة واجهة المستخدم بتفاؤل دون التحقق من قاعدة البيانات، فإنك تفتقر إلى دليل تجريبي يثبت أن البيانات قد تم حفظها بنجاح على القرص.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_50",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 50,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.50)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which code owns form controllers in a StatefulWidget?",
    "questionAr": "أي كود يملك متحكمات النماذج (form controllers) في StatefulWidget؟",
    "options": [
      {
        "label": "A",
        "textEn": "The State object, including disposal",
        "textAr": "كائن الـ State، بما في ذلك التخلص منه (disposal)"
      },
      {
        "label": "B",
        "textEn": "The SQLite table",
        "textAr": "جدول (SQLite)"
      },
      {
        "label": "C",
        "textEn": "The route name",
        "textAr": "اسم المسار (route)"
      },
      {
        "label": "D",
        "textEn": "The JSON decoder",
        "textAr": "مفكك الـ (JSON) (JSON decoder)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Controllers, like TextEditingController, manage active memory and event listeners. The State object that instantiates them is responsible for managing their lifecycle, including calling dispose().",
    "explanationAr": "تقوم المتحكمات، مثل TextEditingController، بإدارة الذاكرة النشطة ومستمعي الأحداث. كائن الـ State الذي يقوم بإنشائها هو المسؤول عن إدارة دورة حياتها، بما في ذلك استدعاء dispose().",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_51",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 51,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.51)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A string is valid JSON but lacks the required title field. What should the model boundary do?",
    "questionAr": "سلسلة نصية صالحة كـ JSON ولكنها تفتقر إلى حقل العنوان (title) المطلوب. ماذا يجب أن تفعل حدود النموذج؟",
    "options": [
      {
        "label": "A",
        "textEn": "Reject it or return a controlled validation error",
        "textAr": "رفضها أو إرجاع خطأ تحقق (validation error) متحكم به"
      },
      {
        "label": "B",
        "textEn": "Invent a title silently in every UI widget",
        "textAr": "ابتكار عنوان بصمت في كل ويدجت واجهة مستخدم (UI widget)"
      },
      {
        "label": "C",
        "textEn": "Treat it as a successful complete note",
        "textAr": "معاملتها كملاحظة مكتملة بنجاح"
      },
      {
        "label": "D",
        "textEn": "Delete the database",
        "textAr": "حذف قاعدة البيانات (Delete the database)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When raw JSON violates domain rules (e.g., missing mandatory fields), the model boundary must intercept and reject it with a validated error rather than passing bad data to the UI.",
    "explanationAr": "عندما ينتهك JSON الخام قواعد النطاق (مثل غياب حقول إلزامية)، يجب على حدود النموذج اعتراضه ورفضه بخطأ متحقق منه بدلاً من تمرير بيانات سيئة إلى واجهة المستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_52",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 52,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.52)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which serialization rule is safest for an optional date?",
    "questionAr": "أي قاعدة تسلسل (serialization) هي الأكثر أمانًا لتاريخ اختياري؟",
    "options": [
      {
        "label": "A",
        "textEn": "Use a documented nullable representation and parse it consistently",
        "textAr": "استخدام تمثيل يقبل القيم الفارغة (nullable) موثق وتحليله بشكل متسق"
      },
      {
        "label": "B",
        "textEn": "Assume every date is a Widget",
        "textAr": "افتراض أن كل تاريخ هو ويدجت (Widget)"
      },
      {
        "label": "C",
        "textEn": "Write a DateTime object directly to a text file with no format",
        "textAr": "كتابة كائن DateTime مباشرة إلى ملف نصي (text file) بدون تنسيق"
      },
      {
        "label": "D",
        "textEn": "Ignore null values without a policy",
        "textAr": "تجاهل القيم الفارغة (null values) بدون سياسة"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Optional fields must be serialized predictably. Using a documented nullable representation ensures parsers know how to reliably decode or skip absent values.",
    "explanationAr": "يجب تسلسل الحقول الاختيارية بشكل يمكن التنبؤ به. استخدام تمثيل موثق يقبل القيم الفارغة (nullable) يضمن معرفة المحللات لكيفية فك تشفير القيم الغائبة أو تخطيها بشكل موثوق.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_53",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 53,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.53)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does a schema version enable?",
    "questionAr": "ما الذي يتيحه إصدار المخطط (schema version)؟",
    "options": [
      {
        "label": "A",
        "textEn": "A deliberate migration path between database structures",
        "textAr": "مسار ترحيل (migration) متعمد بين هياكل قواعد البيانات"
      },
      {
        "label": "B",
        "textEn": "Automatic server synchronization",
        "textAr": "مزامنة تلقائية مع الخادم"
      },
      {
        "label": "C",
        "textEn": "Password hashing",
        "textAr": "تجزئة كلمة المرور (Password hashing)"
      },
      {
        "label": "D",
        "textEn": "A replacement for whereArgs",
        "textAr": "بديل لـ whereArgs"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Tracking the database schema version allows the app to detect when a user updates to a newer app version and provides a safe migration path to alter tables without losing data.",
    "explanationAr": "يتيح تتبع إصدار مخطط قاعدة البيانات للتطبيق اكتشاف متى يقوم المستخدم بالتحديث إلى إصدار أحدث من التطبيق ويوفر مسار ترحيل آمن لتعديل الجداول دون فقدان البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_54",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 54,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.54)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Where should an older database be upgraded when the app opens a newer schema?",
    "questionAr": "أين يجب ترقية قاعدة بيانات أقدم عندما يفتح التطبيق مخططًا أحدث؟",
    "options": [
      {
        "label": "A",
        "textEn": "The database onUpgrade migration callback",
        "textAr": "الـ callback الخاص بـ onUpgrade لترحيل قاعدة البيانات"
      },
      {
        "label": "B",
        "textEn": "A ListView.builder item",
        "textAr": "عنصر ListView.builder"
      },
      {
        "label": "C",
        "textEn": "The AppBar",
        "textAr": "AppBar"
      },
      {
        "label": "D",
        "textEn": "The image picker",
        "textAr": "أداة اختيار الصور (image picker)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The onUpgrade callback is specifically provided by the SQLite API to execute alter table commands or scripts to transition older schemas into newer ones safely.",
    "explanationAr": "يتم توفير رد الاتصال onUpgrade خصيصاً بواسطة واجهة برمجة تطبيقات SQLite لتنفيذ أوامر تعديل الجداول أو البرامج النصية لنقل المخططات القديمة إلى أخرى أحدث بأمان.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_55",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 55,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.55)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A new column is added to an existing database. What is a responsible migration concern?",
    "questionAr": "تمت إضافة عمود جديد إلى قاعدة بيانات موجودة. ما هو الاهتمام المسؤول بالترحيل؟",
    "options": [
      {
        "label": "A",
        "textEn": "Preserve existing rows and define a safe value for the new column",
        "textAr": "الحفاظ على الصفوف الحالية وتحديد قيمة آمنة للعمود الجديد"
      },
      {
        "label": "B",
        "textEn": "Drop every old row automatically",
        "textAr": "إسقاط (Drop) كل صف قديم تلقائيًا"
      },
      {
        "label": "C",
        "textEn": "Ignore the schema version",
        "textAr": "تجاهل إصدار المخطط (schema)"
      },
      {
        "label": "D",
        "textEn": "Move the column into BuildContext",
        "textAr": "نقل العمود (column) إلى BuildContext"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When altering schemas by adding columns, a responsible migration must protect existing user records while injecting safe default values into the newly added column.",
    "explanationAr": "عند تعديل المخططات بإضافة أعمدة، يجب أن يحمي الترحيل المسؤول سجلات المستخدمين الحالية مع إدراج قيم افتراضية آمنة في العمود المضاف حديثاً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_56",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 56,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.56)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which lifecycle best describes a value held in State but not persisted?",
    "questionAr": "أي دورة حياة تصف بشكل أفضل قيمة محفوظة في State ولكنها ليست مخزنة بشكل دائم؟",
    "options": [
      {
        "label": "A",
        "textEn": "It can survive rebuilds but not necessarily process termination",
        "textAr": "يمكن أن تنجو من إعادات البناء (rebuilds) ولكن ليس بالضرورة إنهاء العملية (process termination)"
      },
      {
        "label": "B",
        "textEn": "It survives uninstall by definition",
        "textAr": "تنجو من إلغاء التثبيت بحكم تعريفها"
      },
      {
        "label": "C",
        "textEn": "It is always shared with SQLite",
        "textAr": "تتم مشاركتها دائمًا مع (SQLite)"
      },
      {
        "label": "D",
        "textEn": "It is immutable across all app launches",
        "textAr": "هي غير قابلة للتغيير عبر جميع عمليات تشغيل التطبيق"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "State held entirely in a StatefulWidget's memory persists across hot reloads or normal widget rebuilds, but disappears completely when the operating system kills the process.",
    "explanationAr": "الحالة المحفوظة بالكامل في ذاكرة StatefulWidget تستمر عبر عمليات إعادة التحميل السريع (hot reloads) أو إعادة بناء الـ widget العادية، ولكنها تختفي تماماً عندما يقوم نظام التشغيل بإنهاء العملية.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_57",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 57,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.57)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A file path should be built for Android and iOS. Which approach is strongest?",
    "questionAr": "يجب بناء مسار ملف لأنظمة Android و iOS. ما هو النهج الأقوى؟",
    "options": [
      {
        "label": "A",
        "textEn": "Use a platform directory from path_provider and join the filename with path.join",
        "textAr": "استخدام مسار منصة (platform directory) من path_provider ودمج اسم الملف باستخدام path.join"
      },
      {
        "label": "B",
        "textEn": "Hard-code one slash format everywhere",
        "textAr": "تضمين تنسيق شرطة مائلة واحد (slash format) بشكل ثابت في كل مكان"
      },
      {
        "label": "C",
        "textEn": "Use a SQL where clause",
        "textAr": "استخدام جملة SQL where"
      },
      {
        "label": "D",
        "textEn": "Store the path in a widget key only",
        "textAr": "تخزين المسار في مفتاح (key) الـ widget فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "File systems vary between iOS and Android. Path_provider abstracts the platform roots, and path.join safely constructs cross-platform slash delimiters.",
    "explanationAr": "تختلف أنظمة الملفات بين iOS و Android. تقوم path_provider بتجريد الجذور الخاصة بالمنصة، وتقوم دالة path.join ببناء فواصل مسارات (slashes) آمنة عبر المنصات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_58",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 58,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.58)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why is a temporary image or file path a poor long-term database value?",
    "questionAr": "لماذا يعد مسار الصورة أو الملف المؤقت قيمة سيئة لقاعدة بيانات طويلة المدى؟",
    "options": [
      {
        "label": "A",
        "textEn": "The temporary location may disappear or be inaccessible later",
        "textAr": "قد يختفي الموقع المؤقت أو يصبح غير قابل للوصول لاحقاً"
      },
      {
        "label": "B",
        "textEn": "Temporary files are always remote URLs",
        "textAr": "الملفات المؤقتة (Temporary files) تكون دائماً روابط عن بعد (remote URLs)"
      },
      {
        "label": "C",
        "textEn": "The path automatically contains a password",
        "textAr": "المسار يحتوي تلقائياً على كلمة مرور (password)"
      },
      {
        "label": "D",
        "textEn": "JSON cannot contain paths",
        "textAr": "الـ (JSON) لا يمكن أن يحتوي على مسارات (paths)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Operating systems purge temporary directories unpredictably. Storing a path to a temporary file as a permanent database value guarantees broken links eventually.",
    "explanationAr": "تقوم أنظمة التشغيل بحذف الأدلة المؤقتة بشكل غير متوقع. تخزين مسار لملف مؤقت كقيمة دائمة في قاعدة البيانات يضمن وجود روابط معطلة في نهاية المطاف.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_59",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 59,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.59)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A persistence read throws an exception because the stored text is malformed. What should the UI normally receive?",
    "questionAr": "قراءة البيانات الدائمة ترمي استثناء لأن النص المخزن مشوه. ماذا يجب أن تتلقى واجهة المستخدم عادةً؟",
    "options": [
      {
        "label": "A",
        "textEn": "A controlled error/recovery state",
        "textAr": "حالة خطأ/استرداد متحكم بها"
      },
      {
        "label": "B",
        "textEn": "A guaranteed valid model",
        "textAr": "نموذج (model) صالح ومضمون"
      },
      {
        "label": "C",
        "textEn": "A random default without logging",
        "textAr": "قيمة افتراضية عشوائية بدون تسجيل (logging)"
      },
      {
        "label": "D",
        "textEn": "A successful delete message",
        "textAr": "رسالة حذف ناجحة"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When underlying storage is corrupted or malformed, the UI shouldn't crash; it should receive a controlled error state allowing the user to retry or reset.",
    "explanationAr": "عندما يكون التخزين الأساسي تالفاً أو مشوهاً، لا ينبغي أن ينهار التطبيق؛ بل يجب أن يتلقى حالة خطأ متحكم بها تتيح للمستخدم إعادة المحاولة أو إعادة التعيين.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_60",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 60,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.60)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which test best demonstrates persistence?",
    "questionAr": "أي اختبار يوضح الديمومة (persistence) بشكل أفضل؟",
    "options": [
      {
        "label": "A",
        "textEn": "Write, terminate/restart the process, read during startup, and verify the restored value",
        "textAr": "الكتابة، إنهاء/إعادة تشغيل العملية، القراءة أثناء بدء التشغيل، والتحقق من القيمة المستعادة"
      },
      {
        "label": "B",
        "textEn": "Set a field and rebuild once",
        "textAr": "تعيين حقل (field) وإعادة البناء مرة واحدة"
      },
      {
        "label": "C",
        "textEn": "Tap Save and inspect the same TextField",
        "textAr": "النقر على حفظ (Save) وفحص نفس الـ TextField"
      },
      {
        "label": "D",
        "textEn": "Open a dialog without writing",
        "textAr": "فتح مربع حوار (dialog) بدون كتابة"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "True persistence is proven by writing data, completely killing the application process, and verifying the exact data is retrieved properly upon fresh initialization.",
    "explanationAr": "يتم إثبات الاستمرارية الحقيقية عن طريق كتابة البيانات، وإنهاء عملية التطبيق بالكامل، والتحقق من استرداد البيانات الدقيقة بشكل صحيح عند التهيئة الجديدة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_61",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 61,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.61)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which API scope is appropriate for removing one preference?",
    "questionAr": "أي نطاق API مناسب لإزالة تفضيل واحد؟",
    "options": [
      {
        "label": "A",
        "textEn": "remove with the specific key",
        "textAr": "الإزالة باستخدام المفتاح المحدد"
      },
      {
        "label": "B",
        "textEn": "clear when only one key should change",
        "textAr": "clear عندما يجب تغيير مفتاح (key) واحد فقط"
      },
      {
        "label": "C",
        "textEn": "SQLite delete without a table",
        "textAr": "عملية حذف في (SQLite) بدون جدول"
      },
      {
        "label": "D",
        "textEn": "Navigator.pop",
        "textAr": "Navigator.pop"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The specific operation to delete exactly one isolated preference key without impacting sibling configuration data is the remove() method with that key.",
    "explanationAr": "العملية المحددة لحذف مفتاح تفضيل واحد معزول دون التأثير على بيانات التكوين الشقيقة هي دالة remove() باستخدام ذلك المفتاح.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_62",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 62,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.62)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why should clear be used carefully?",
    "questionAr": "لماذا يجب استخدام clear بحذر؟",
    "options": [
      {
        "label": "A",
        "textEn": "It may remove all keys in the relevant preference store",
        "textAr": "قد تقوم بإزالة جميع المفاتيح في مخزن التفضيلات (preference store) ذي الصلة"
      },
      {
        "label": "B",
        "textEn": "It changes only one character",
        "textAr": "يغير حرفاً واحداً فقط"
      },
      {
        "label": "C",
        "textEn": "It creates a database migration",
        "textAr": "تُنشئ عملية ترحيل لقاعدة البيانات (database migration)"
      },
      {
        "label": "D",
        "textEn": "It updates a remote server automatically",
        "textAr": "تقوم بتحديث خادم (server) بعيد تلقائياً"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The clear() method is destructive across the entire preference scope. It should be used cautiously to avoid accidentally wiping out unrelated user settings.",
    "explanationAr": "دالة clear() هي دالة مدمرة عبر نطاق التفضيلات بأكمله. يجب استخدامها بحذر لتجنب مسح إعدادات المستخدم غير ذات الصلة عن طريق الخطأ.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_63",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 63,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.63)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A cache-backed preference reader must observe external changes. What operation may be required?",
    "questionAr": "يجب على قارئ التفضيلات المدعوم بذاكرة التخزين المؤقت (cache) مراقبة التغييرات الخارجية. ما هي العملية التي قد تكون مطلوبة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Reload the cache or read through a non-cached API",
        "textAr": "أعد تحميل الذاكرة المخبئية (cache) أو اقرأ من خلال (API) غير مخبأة (non-cached)"
      },
      {
        "label": "B",
        "textEn": "Call setState only",
        "textAr": "استدعاء setState فقط"
      },
      {
        "label": "C",
        "textEn": "Use a Hero tag",
        "textAr": "استخدام Hero tag"
      },
      {
        "label": "D",
        "textEn": "Drop the SQLite database",
        "textAr": "إسقاط (Drop) قاعدة بيانات (SQLite)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If preferences change externally (e.g., via background sync), an active reader relying on a stale cache must explicitly reload or query a non-cached source to see updates.",
    "explanationAr": "إذا تغيرت التفضيلات خارجياً (مثل المزامنة في الخلفية)، يجب على القارئ النشط الذي يعتمد على ذاكرة مخبأة قديمة إعادة تحميلها صراحةً أو الاستعلام عن مصدر غير مخبأ لرؤية التحديثات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_64",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 64,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.64)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which data belongs in server-side configuration rather than local preferences?",
    "questionAr": "أي البيانات تنتمي إلى إعدادات الخادم (server-side configuration) بدلاً من التفضيلات المحلية (local preferences)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Credentials used by an API to access a database",
        "textAr": "بيانات الاعتماد (Credentials) المستخدمة بواسطة (API) للوصول إلى قاعدة بيانات"
      },
      {
        "label": "B",
        "textEn": "A non-sensitive theme selection",
        "textAr": "اختيار سمة (theme) غير حساس"
      },
      {
        "label": "C",
        "textEn": "A local sort choice",
        "textAr": "اختيار فرز محلي (local sort choice)"
      },
      {
        "label": "D",
        "textEn": "A last-opened tab index",
        "textAr": "فهرس (index) علامة التبويب (tab) المفتوحة أخيراً"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Local preferences are insecure and highly visible to users. Sensitive server-side secrets or credentials must never reside in SharedPreferences.",
    "explanationAr": "التفضيلات المحلية غير آمنة ومرئية بوضوح للمستخدمين. يجب ألا تتواجد الأسرار أو بيانات الاعتماد الحساسة الخاصة بالخادم أبداً في SharedPreferences.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_65",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 65,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.65)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which architecture supports later remote synchronization for an offline-first feature?",
    "questionAr": "أي معمارية تدعم المزامنة عن بُعد لاحقاً لميزة العمل بدون إنترنت أولاً (offline-first)؟",
    "options": [
      {
        "label": "A",
        "textEn": "A repository that separates local data, remote operations, sync status, and conflict policy",
        "textAr": "مستودع (repository) يفصل البيانات المحلية، العمليات عن بُعد، حالة المزامنة، وسياسة التعارض"
      },
      {
        "label": "B",
        "textEn": "A single TextField with no storage",
        "textAr": "حقل إدخال TextField واحد بدون تخزين"
      },
      {
        "label": "C",
        "textEn": "Direct SQL from every widget",
        "textAr": "SQL مباشر من كل widget"
      },
      {
        "label": "D",
        "textEn": "A route result only",
        "textAr": "نتيجة مسار (route result) فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "An offline-first architecture requires a sophisticated repository that orchestrates local writes, monitors network availability, manages sync queues, and handles remote conflicts.",
    "explanationAr": "تتطلب بنية (Offline-first) مستودعاً معقداً ينسق عمليات الكتابة المحلية، ويراقب توفر الشبكة، ويدير طوابير المزامنة، ويتعامل مع التعارضات عن بُعد.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_66",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 66,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.66)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the main difference between local-only and offline-first?",
    "questionAr": "ما هو الفرق الرئيسي بين محلي فقط (local-only) والعمل بدون إنترنت أولاً (offline-first)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Offline-first anticipates later synchronization and conflicts with a remote source",
        "textAr": "النهج غير المتصل أولاً (Offline-first) يتوقع التزامن اللاحق والتعارضات مع مصدر عن بُعد"
      },
      {
        "label": "B",
        "textEn": "Local-only always needs a server",
        "textAr": "المحلي فقط (Local-only) يحتاج دائمًا إلى خادم (server)"
      },
      {
        "label": "C",
        "textEn": "Offline-first cannot use SQLite",
        "textAr": "التطبيقات التي تعمل دون اتصال أولاً (Offline-first) لا يمكنها استخدام (SQLite)"
      },
      {
        "label": "D",
        "textEn": "They have identical responsibilities",
        "textAr": "لديهم مسؤوليات متطابقة"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Local-only apps treat the device as the sole source of truth. Offline-first apps treat the device as an authoritative cache but anticipate inevitable synchronization and conflict resolution with a backend.",
    "explanationAr": "تطبيقات (Local-only) تعتبر الجهاز كمصدر وحيد للحقيقة. تطبيقات (Offline-first) تعتبر الجهاز كذاكرة مخبأة موثوقة ولكنها تتوقع حتمية التزامن وحل التعارضات مع الخادم الخلفي.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_67",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 67,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.67)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A screen reads a stored name in initState and calls setState after await. What must it check?",
    "questionAr": "شاشة تقرأ اسمًا مخزنًا في initState وتستدعي setState بعد await. ماذا يجب أن تتحقق منه؟",
    "options": [
      {
        "label": "A",
        "textEn": "mounted before the post-await update",
        "textAr": "mounted قبل التحديث الذي يلي (await) (post-(await) update)"
      },
      {
        "label": "B",
        "textEn": "The Hero tag before every setState",
        "textAr": "وسم Hero قبل كل setState"
      },
      {
        "label": "C",
        "textEn": "The route name as an integer",
        "textAr": "اسم المسار (route name) كعدد صحيح (integer)"
      },
      {
        "label": "D",
        "textEn": "The SQL password in the widget",
        "textAr": "كلمة مرور SQL في الـ widget"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Because initState cannot be asynchronous, an awaited call inside it creates a race condition. The 'mounted' property must be checked to ensure the widget hasn't been disposed during the await.",
    "explanationAr": "نظراً لأن initState لا يمكن أن يكون غير متزامن، فإن استدعاءً بانتظار (await) داخله يخلق حالة سباق (race condition). يجب التحقق من خاصية 'mounted' لضمان عدم التخلص من الـ widget أثناء فترة الانتظار.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_68",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 68,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.68)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which result should a repository return for a missing JSON file when the product defines first-run as empty?",
    "questionAr": "ما هي النتيجة التي يجب أن يرجعها المستودع لملف JSON مفقود عندما يحدد المنتج التشغيل الأول (first-run) كفارغ؟",
    "options": [
      {
        "label": "A",
        "textEn": "A distinct empty/first-run outcome",
        "textAr": "نتيجة فارغة/تشغيل أول (empty/first-run) مميزة"
      },
      {
        "label": "B",
        "textEn": "A fake record",
        "textAr": "سجل وهمي (fake record)"
      },
      {
        "label": "C",
        "textEn": "A successful remote synchronization",
        "textAr": "مزامنة عن بُعد (remote synchronization) ناجحة"
      },
      {
        "label": "D",
        "textEn": "A password hash",
        "textAr": "تجزئة (hash) كلمة المرور"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If a missing file represents a normal first-run state according to business rules, the repository must intercept the filesystem exception and return a clean, empty model outcome.",
    "explanationAr": "إذا كان الملف المفقود يمثل حالة تشغيل أول طبيعية وفقاً لقواعد العمل، يجب على المستودع اعتراض استثناء نظام الملفات وإرجاع نتيجة نموذج نظيفة وفارغة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_69",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 69,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.69)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why keep SQL out of widgets?",
    "questionAr": "لماذا يجب إبقاء أوامر SQL خارج الـ widgets؟",
    "options": [
      {
        "label": "A",
        "textEn": "It keeps presentation separate from persistence and makes storage testable",
        "textAr": "يحافظ على فصل العرض (presentation) عن التخزين (persistence) ويجعل التخزين قابلاً للاختبار"
      },
      {
        "label": "B",
        "textEn": "SQL can only run in initState",
        "textAr": "يمكن تشغيل SQL فقط في (initState)"
      },
      {
        "label": "C",
        "textEn": "Widgets cannot display lists",
        "textAr": "الـ Widgets لا يمكنها عرض قوائم (lists)"
      },
      {
        "label": "D",
        "textEn": "It makes all writes synchronous",
        "textAr": "تجعل جميع عمليات الكتابة متزامنة (synchronous)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Hardcoding SQL within UI widgets violates separation of concerns. Abstracting it enables modular testing of storage logic and keeps the UI code focused solely on rendering.",
    "explanationAr": "تضمين استعلامات SQL بصلابة داخل عناصر واجهة المستخدم ينتهك مبدأ فصل الاهتمامات (separation of concerns). تجريدها يتيح الاختبار المعياري لمنطق التخزين ويبقي كود واجهة المستخدم مركزاً فقط على العرض.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_70",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 70,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.70)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A query returns rows as maps. Where should map-to-model conversion normally happen?",
    "questionAr": "يُرجع الاستعلام (query) الصفوف في شكل خرائط (maps). أين يجب أن تحدث عملية التحويل من خريطة إلى نموذج (map-to-model) عادةً؟",
    "options": [
      {
        "label": "A",
        "textEn": "At the repository/model boundary",
        "textAr": "عند حدود المستودع/النموذج (repository/model boundary)"
      },
      {
        "label": "B",
        "textEn": "Inside every ListTile independently",
        "textAr": "داخل كل ListTile بشكل مستقل"
      },
      {
        "label": "C",
        "textEn": "Inside AppBar",
        "textAr": "داخل الـ AppBar"
      },
      {
        "label": "D",
        "textEn": "Inside NavigatorObserver",
        "textAr": "بداخل NavigatorObserver"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The repository is the architectural boundary responsible for translating raw database output (Maps) into strongly typed Dart domain objects that the rest of the application can safely use.",
    "explanationAr": "المستودع (repository) هو الحد المعماري المسؤول عن ترجمة مخرجات قاعدة البيانات الخام (Maps) إلى كائنات نطاق Dart قوية النوع (strongly typed) يمكن لبقية التطبيق استخدامها بأمان.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_71",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 71,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.71)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does a fresh GET after a remote write prove more strongly than a local list append?",
    "questionAr": "What does a fresh (GET) after a remote write prove more strongly than a local list append?",
    "options": [
      {
        "label": "A",
        "textEn": "The server -backed state contains the changed record",
        "textAr": "الحالة المدعومة بالخادم (server-backed state) تحتوي على السجل المتغير"
      },
      {
        "label": "B",
        "textEn": "The form was opened",
        "textAr": "تم فتح النموذج (form)"
      },
      {
        "label": "C",
        "textEn": "The button received focus",
        "textAr": "تلقى الزر التركيز (focus)"
      },
      {
        "label": "D",
        "textEn": "The local controller is not disposed",
        "textAr": "لم يتم التخلص من المتحكم المحلي (local controller is not disposed)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Fetching data back from the server explicitly confirms that the write transaction successfully traversed the network and was persisted on the remote database.",
    "explanationAr": "إن جلب البيانات مرة أخرى من الخادم يؤكد صراحةً أن معاملة الكتابة قد عبرت الشبكة بنجاح وتم حفظها في قاعدة البيانات البعيدة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_72",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 72,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.72)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A delete confirmation is cancelled. What should happen to persistent data?",
    "questionAr": "تم إلغاء تأكيد الحذف. ماذا يجب أن يحدث للبيانات الدائمة؟",
    "options": [
      {
        "label": "A",
        "textEn": "No delete request should be issued",
        "textAr": "يجب عدم إصدار أي طلب حذف (delete request)"
      },
      {
        "label": "B",
        "textEn": "Delete every row",
        "textAr": "حذف كل صف"
      },
      {
        "label": "C",
        "textEn": "Clear all preferences",
        "textAr": "مسح جميع التفضيلات (preferences)"
      },
      {
        "label": "D",
        "textEn": "Drop the database schema",
        "textAr": "إسقاط (Drop) مخطط (schema) قاعدة البيانات"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If a user cancels a destructive action, the foundational rule of UI development is to respect that cancellation by immediately aborting any underlying persistence modification requests.",
    "explanationAr": "إذا قام المستخدم بإلغاء إجراء مدمر، فإن القاعدة الأساسية لتطوير واجهة المستخدم هي احترام هذا الإلغاء عن طريق إحباط أي طلبات تعديل على الاستمرارية الأساسية (persistence) فوراً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_73",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 73,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.73)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A file contains JSON for a LocalNote. What should be checked after decoding?",
    "questionAr": "A file contains (JSON) for a LocalNote. What should be checked after decoding?",
    "options": [
      {
        "label": "A",
        "textEn": "Required fields and value types before constructing the model",
        "textAr": "الحقول المطلوبة وأنواع القيم قبل بناء النموذج (model)"
      },
      {
        "label": "B",
        "textEn": "Only that the file extension is .json",
        "textAr": "فقط أن امتداد الملف هو .json"
      },
      {
        "label": "C",
        "textEn": "Only that a Text widget can display it",
        "textAr": "فقط أن ويدجت Text يمكنه عرضها"
      },
      {
        "label": "D",
        "textEn": "Only the current route",
        "textAr": "المسار (route) الحالي فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Decoding JSON is just the parsing phase. The resulting Map must then be strictly validated against domain requirements (required fields, expected types) before instantiating a model.",
    "explanationAr": "فك تشفير JSON هو مجرد مرحلة التحليل. يجب بعد ذلك التحقق من صحة ה-Map الناتجة بصرامة مقابل متطلبات النطاق (الحقول المطلوبة، الأنواع المتوقعة) قبل إنشاء النموذج.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_74",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 74,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.74)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which choice best handles a stored integer that may be absent?",
    "questionAr": "أي خيار يتعامل بشكل أفضل مع عدد صحيح مخزن قد يكون غير موجود؟",
    "options": [
      {
        "label": "A",
        "textEn": "Use a documented default only when absence is semantically allowed",
        "textAr": "استخدام قيمة افتراضية موثقة فقط عندما يكون الغياب مسموحًا به دلاليًا"
      },
      {
        "label": "B",
        "textEn": "Treat absence as zero in every domain",
        "textAr": "اعتبار الغياب كصفر (zero) في كل نطاق (domain)"
      },
      {
        "label": "C",
        "textEn": "Crash every first launch",
        "textAr": "الانهيار (Crash) في كل أول تشغيل"
      },
      {
        "label": "D",
        "textEn": "Store a BuildContext",
        "textAr": "تخزين BuildContext"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Blindly returning zeros for absent data can mask semantic issues. You should only return a default value if the domain logic specifically defines that absence means that default.",
    "explanationAr": "إن الإرجاع الأعمى للأصفار للبيانات الغائبة يمكن أن يخفي مشكلات دلالية. يجب عليك إرجاع قيمة افتراضية فقط إذا كان منطق النطاق يحدد تحديداً أن الغياب يعني ذلك الافتراضي.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_75",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 75,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.75)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why distinguish an empty SQLite query from an error?",
    "questionAr": "Why distinguish an empty (SQLite) query from an error?",
    "options": [
      {
        "label": "A",
        "textEn": "The user needs to know that storage succeeded but no matching rows exist",
        "textAr": "يحتاج المستخدم لمعرفة أن التخزين نجح ولكن لا توجد صفوف (rows) مطابقة"
      },
      {
        "label": "B",
        "textEn": "Empty always means a malformed schema",
        "textAr": "فارغ (Empty) يعني دائمًا مخططًا (schema) مشوهًا"
      },
      {
        "label": "C",
        "textEn": "Errors cannot be shown in Flutter",
        "textAr": "لا يمكن عرض الأخطاء في Flutter"
      },
      {
        "label": "D",
        "textEn": "SQLite always returns one fake row",
        "textAr": "(SQLite) تعيد دائماً صفاً وهمياً واحداً"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "An empty result is a valid state indicating successful execution with no matches. An error indicates execution failure. The UI handles these drastically different contexts distinctly.",
    "explanationAr": "النتيجة الفارغة هي حالة صالحة تشير إلى التنفيذ الناجح دون وجود تطابقات. بينما يشير الخطأ إلى فشل التنفيذ. وتتعامل واجهة المستخدم مع هذه السياقات المختلفة جذرياً بشكل مميز.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_76",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 76,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.76)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which database operation matches \"update the row whose id is 4\"?",
    "questionAr": "أي عملية في قاعدة البيانات تتطابق مع \"تحديث الصف الذي يحمل المعرف id يساوي 4\"؟",
    "options": [
      {
        "label": "A",
        "textEn": "update with where: \"id = ?\" and whereArgs: [4]",
        "textAr": "تحديث باستخدام where: \"id = ?\" و whereArgs: [4]"
      },
      {
        "label": "B",
        "textEn": "update with no where clause",
        "textAr": "update بدون عبارة where"
      },
      {
        "label": "C",
        "textEn": "insert a second row with id 4 blindly",
        "textAr": "إدراج (insert) صف ثانٍ بمعرف 4 بشكل أعمى (blindly)"
      },
      {
        "label": "D",
        "textEn": "query and change only the Text widget",
        "textAr": "الاستعلام وتغيير ويدجت Text فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To target row 4 specifically, the update command demands a specific where clause matching the 'id' column to the passed argument via parameterized query logic.",
    "explanationAr": "لاستهداف الصف 4 تحديداً، يتطلب أمر التحديث جملة where محددة تطابق عمود 'id' مع المعامل الممرر عبر منطق الاستعلام ذي المعلمات (parameterized).",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_77",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 77,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.77)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which operation is appropriate for a new journal row?",
    "questionAr": "ما هي العملية المناسبة لصف جديد في السجل (journal row)؟",
    "options": [
      {
        "label": "A",
        "textEn": "insert with a validated map",
        "textAr": "insert مع map متحقق منها (validated)"
      },
      {
        "label": "B",
        "textEn": "delete with whereArgs",
        "textAr": "delete مع whereArgs"
      },
      {
        "label": "C",
        "textEn": "getString",
        "textAr": "getString"
      },
      {
        "label": "D",
        "textEn": "Navigator.push",
        "textAr": "Navigator.push"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Creating a new record translates directly to an insert command, provided the data payload is formatted as a validated Map corresponding to the database schema.",
    "explanationAr": "يُترجم إنشاء سجل جديد مباشرة إلى أمر إدراج (insert)، شريطة أن تكون حمولة البيانات منسقة كـ Map متحقق من صحته يتوافق مع مخطط قاعدة البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_78",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 78,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.78)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A schema migration drops a column containing user notes without backup. What is the primary problem?",
    "questionAr": "تقوم عملية ترحيل المخطط (schema migration) بإسقاط عمود يحتوي على ملاحظات المستخدم دون وجود نسخة احتياطية. ما هي المشكلة الأساسية؟",
    "options": [
      {
        "label": "A",
        "textEn": "Existing user data is lost by an unsafe migration",
        "textAr": "بيانات المستخدم الحالية تُفقد بسبب ترحيل (migration) غير آمن"
      },
      {
        "label": "B",
        "textEn": "The UI has too many buttons",
        "textAr": "واجهة المستخدم (UI) تحتوي على أزرار كثيرة جداً"
      },
      {
        "label": "C",
        "textEn": "The route result is nullable",
        "textAr": "نتيجة المسار (route) قابلة لتكون null (nullable)"
      },
      {
        "label": "D",
        "textEn": "The preference cache is fresh",
        "textAr": "الذاكرة المخبئية (cache) للتفضيلات حديثة (fresh)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Destructive schema migrations without safeguards or backups permanently obliterate user-generated data, directly causing data loss.",
    "explanationAr": "عمليات ترحيل المخططات المدمرة دون ضمانات أو نسخ احتياطية تمحو البيانات التي أنشأها المستخدم نهائياً، مما يتسبب بشكل مباشر في فقدان البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_79",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 79,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.79)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A local success SnackBar appears before an awaited write completes. What is wrong?",
    "questionAr": "تظهر رسالة نجاح محلية من نوع SnackBar قبل اكتمال عملية الكتابة المنتظرة. ما هو الخطأ؟",
    "options": [
      {
        "label": "A",
        "textEn": "The UI claims persistence before it has evidence of success",
        "textAr": "تدعي واجهة المستخدم (UI) بقاء البيانات (persistence) قبل أن يكون لديها دليل على النجاح"
      },
      {
        "label": "B",
        "textEn": "SnackBars cannot be used with SQLite",
        "textAr": "لا يمكن استخدام SnackBars مع (SQLite)"
      },
      {
        "label": "C",
        "textEn": "Await always deletes data",
        "textAr": "الـ Await دائماً يحذف البيانات"
      },
      {
        "label": "D",
        "textEn": "The database must be on the server",
        "textAr": "يجب أن تكون قاعدة البيانات على الخادم (server)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Displaying a success message before an asynchronous I/O operation (await) completes creates a race condition where the UI lies to the user if the underlying write subsequently fails.",
    "explanationAr": "عرض رسالة نجاح قبل اكتمال عملية الإدخال/الإخراج غير المتزامنة (await) يخلق حالة سباق (race condition) حيث تكذب واجهة المستخدم على المستخدم إذا فشلت الكتابة الأساسية لاحقاً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_80",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 80,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.80)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is a useful test seam for persistence?",
    "questionAr": "ما هي نقطة الفصل الاختبارية (test seam) المفيدة للديمومة (persistence)؟",
    "options": [
      {
        "label": "A",
        "textEn": "A repository interface or replaceable storage service",
        "textAr": "واجهة مستودع (repository interface) أو خدمة تخزين قابلة للاستبدال"
      },
      {
        "label": "B",
        "textEn": "A hard-coded SQL string in every widget",
        "textAr": "نص SQL ثابت (hard-coded) في كل widget"
      },
      {
        "label": "C",
        "textEn": "A global BuildContext",
        "textAr": "BuildContext عام (global)"
      },
      {
        "label": "D",
        "textEn": "A screenshot with no state assertions",
        "textAr": "لقطة شاشة بدون توكيدات الحالة (state assertions)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Isolating persistence logic behind abstract Repository interfaces creates 'seams'. This allows developers to swap real databases with mock services during unit testing.",
    "explanationAr": "عزل منطق الاستمرارية خلف واجهات المستودع (Repository) المجردة يخلق 'طبقات' (seams). وهذا يتيح للمطورين استبدال قواعد البيانات الحقيقية بخدمات وهمية (mock) أثناء اختبار الوحدة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_81",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 81,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.81)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A stored timestamp is read on a device with a different locale. What should the model use?",
    "questionAr": "يتم قراءة طابع زمني مخزن (timestamp) على جهاز ذي إعدادات إقليمية (locale) مختلفة. ماذا يجب أن يستخدم النموذج (model)؟",
    "options": [
      {
        "label": "A",
        "textEn": "A stable serialized representation with deliberate timezone semantics",
        "textAr": "تمثيل متسلسل (serialized) مستقر مع دلالات مناطق زمنية متعمدة"
      },
      {
        "label": "B",
        "textEn": "The localized display string as the only source of truth",
        "textAr": "سلسلة العرض المترجمة محلياً (localized display string) كمصدر وحيد للحقيقة"
      },
      {
        "label": "C",
        "textEn": "A random DateTime.now on every read",
        "textAr": "DateTime.now عشوائي في كل عملية قراءة"
      },
      {
        "label": "D",
        "textEn": "The route name",
        "textAr": "اسم المسار (route)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Timezones are notoriously complex. Storing timestamps globally requires a stable, standardized format (like UTC ISO8601) to accurately render localized times on any device worldwide.",
    "explanationAr": "المناطق الزمنية معقدة بشكل معروف. يتطلب تخزين الطوابع الزمنية عالمياً تنسيقاً مستقراً وموحداً (مثل UTC ISO8601) لعرض الأوقات المحلية بدقة على أي جهاز في جميع أنحاء العالم.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_82",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 82,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.82)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which statement about SharedPreferencesAsync is most useful?",
    "questionAr": "Which statement about (SharedPreferencesAsync) is most useful?",
    "options": [
      {
        "label": "A",
        "textEn": "It avoids relying solely on a local cache for each read",
        "textAr": "تتجنب الاعتماد كلياً على ذاكرة التخزين المؤقت المحلية (local cache) لكل عملية قراءة"
      },
      {
        "label": "B",
        "textEn": "It stores relational joins",
        "textAr": "تقوم بتخزين الروابط العلائقية (relational joins)"
      },
      {
        "label": "C",
        "textEn": "It uploads values to a server automatically",
        "textAr": "يقوم برفع القيم إلى الخادم تلقائياً"
      },
      {
        "label": "D",
        "textEn": "It replaces all file access",
        "textAr": "تستبدل جميع عمليات الوصول للملفات (file access)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The modern SharedPreferencesAsync API bypasses the constraints of a purely synchronous local cache, allowing more resilient interaction with the underlying operating system persistence APIs.",
    "explanationAr": "تتجاوز واجهة برمجة تطبيقات SharedPreferencesAsync الحديثة قيود الذاكرة المخبأة المحلية المتزامنة بحتة، مما يتيح تفاعلاً أكثر مرونة مع واجهات برمجة تطبيقات الاستمرارية الخاصة بنظام التشغيل الأساسي.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_83",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 83,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.83)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A list is refreshed after a delete. What should the UI do if the fresh query returns zero rows?",
    "questionAr": "تم تحديث القائمة بعد عملية حذف. ماذا يجب أن تفعل واجهة المستخدم (UI) إذا أرجع الاستعلام الجديد صفر صفوف؟",
    "options": [
      {
        "label": "A",
        "textEn": "Render the empty state",
        "textAr": "تصيير (Render) الحالة الفارغة"
      },
      {
        "label": "B",
        "textEn": "Keep the deleted row as proof of success",
        "textAr": "الاحتفاظ بالصف المحذوف كدليل على النجاح"
      },
      {
        "label": "C",
        "textEn": "Show loading forever",
        "textAr": "عرض التحميل (loading) للأبد"
      },
      {
        "label": "D",
        "textEn": "Insert a placeholder into SQLite",
        "textAr": "إدراج عنصر نائب (placeholder) في (SQLite)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "If a deletion succeeds and leaves the dataset empty, the subsequent read will return zero rows. The interface must correctly react by showing its designated empty state UI.",
    "explanationAr": "إذا نجح الحذف وترك مجموعة البيانات فارغة، فإن القراءة اللاحقة سترجع صفر صفوف. يجب أن تتفاعل الواجهة بشكل صحيح من خلال عرض واجهة المستخدم الخاصة بالحالة الفارغة المعينة لها.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_84",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 84,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.84)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Why should an app name its authoritative home for each data item?",
    "questionAr": "لماذا يجب على التطبيق تسمية المصدر الموثوق (authoritative home) لكل عنصر بيانات؟",
    "options": [
      {
        "label": "A",
        "textEn": "It clarifies which source is trusted and how restoration/synchronization works",
        "textAr": "توضح أي مصدر موثوق وكيف تعمل عملية الاستعادة/المزامنة (restoration/synchronization)"
      },
      {
        "label": "B",
        "textEn": "It makes all data global",
        "textAr": "يجعل جميع البيانات عامة (global)"
      },
      {
        "label": "C",
        "textEn": "It avoids serialization",
        "textAr": "تتجنب التسلسل (serialization)"
      },
      {
        "label": "D",
        "textEn": "It removes the need for migrations",
        "textAr": "يزيل الحاجة إلى عمليات الترحيل (migrations)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Explicitly establishing a Single Source of Truth prevents synchronization chaos. It dictates clearly whether the local cache or the remote server wins in the event of a conflict.",
    "explanationAr": "إن إنشاء 'مصدر وحيد للحقيقة' (Single Source of Truth) بوضوح يمنع فوضى التزامن. فهو يحدد بوضوح ما إذا كانت الذاكرة المخبأة المحلية أو الخادم البعيد هو الذي يفوز في حالة حدوث تعارض.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_85",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 85,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.85)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the strongest overall storage decision criterion?",
    "questionAr": "ما هو أقوى معيار شامل لاتخاذ قرارات التخزين؟",
    "options": [
      {
        "label": "A",
        "textEn": "Required lifetime and data behavior together with query, security, platform, and recovery needs",
        "textAr": "العمر الافتراضي المطلوب وسلوك البيانات مع احتياجات الاستعلام، الأمان، المنصة، والاسترداد"
      },
      {
        "label": "B",
        "textEn": "Which API has the shortest name",
        "textAr": "أي واجهة برمجة تطبيقات (API) لها الاسم الأقصر"
      },
      {
        "label": "C",
        "textEn": "Which store appears first in autocomplete",
        "textAr": "أي متجر يظهر أولاً في الإكمال التلقائي (autocomplete)"
      },
      {
        "label": "D",
        "textEn": "Whether the screen uses a Scaffold",
        "textAr": "ما إذا كانت الشاشة تستخدم Scaffold"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Choosing a persistence strategy isn't about the easiest API. It demands a holistic evaluation of data lifecycle, relational complexity, security posture, cross-platform needs, and synchronization resilience.",
    "explanationAr": "لا يتعلق اختيار استراتيجية الاستمرارية (persistence strategy) بأسهل واجهة برمجة تطبيقات (API). بل يتطلب تقييماً شاملاً لدورة حياة البيانات، والتعقيد العلائقي، وموقف الأمان، والاحتياجات عبر المنصات، ومرونة التزامن.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_86",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 86,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.86)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A local note is saved as JSON but the schema later gains a required field. What is needed?",
    "questionAr": "A local note is saved as (JSON) but the schema later gains a required field. What is needed?",
    "options": [
      {
        "label": "A",
        "textEn": "A versioning/default/migration policy for old documents",
        "textAr": "سياسة إصدارات/افتراضية/ترحيل (versioning/default/migration) للمستندات القديمة"
      },
      {
        "label": "B",
        "textEn": "A new route name only",
        "textAr": "اسم مسار (route name) جديد فقط"
      },
      {
        "label": "C",
        "textEn": "A larger AppBar",
        "textAr": "AppBar أكبر"
      },
      {
        "label": "D",
        "textEn": "A second controller without validation",
        "textAr": "controller ثانٍ بدون تحقق (validation)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When a data schema changes by adding a required field, existing local data will fail to parse unless a migration or default versioning strategy is implemented.",
    "explanationAr": "عندما يتغير مخطط البيانات بإضافة حقل مطلوب، ستفشل البيانات المحلية الموجودة في التحليل ما لم يتم تنفيذ استراتيجية ترحيل أو إصدار افتراضي.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_87",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 87,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.87)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which statement about a database id is safest?",
    "questionAr": "أي عبارة حول معرف قاعدة البيانات (database id) هي الأكثر أماناً؟",
    "options": [
      {
        "label": "A",
        "textEn": "Use a stable id for exact-row update/delete boundaries",
        "textAr": "استخدام معرف (id) ثابت لحدود التحديث/الحذف للصف الدقيق"
      },
      {
        "label": "B",
        "textEn": "Use the visible list index as a permanent id",
        "textAr": "استخدام فهرس القائمة المرئي كمعرف (id) دائم"
      },
      {
        "label": "C",
        "textEn": "Use a password as an id",
        "textAr": "استخدام كلمة مرور كمعرف (id)"
      },
      {
        "label": "D",
        "textEn": "Use BuildContext as an id",
        "textAr": "استخدام BuildContext كمعرف (id)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A stable database identifier is crucial for ensuring that operations like updates or deletes precisely target the correct row, regardless of its position in a visible list.",
    "explanationAr": "يعد معرف قاعدة البيانات الثابت أمراً حاسماً لضمان أن العمليات مثل التحديثات أو الحذف تستهدف الصف الصحيح بدقة، بغض النظر عن موضعه في القائمة المرئية.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_88",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 88,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.88)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A repository catches malformed storage data. What should it provide to the UI?",
    "questionAr": "يلتقط المستودع (repository) بيانات تخزين مشوهة. ماذا يجب أن يقدم لواجهة المستخدم (UI)؟",
    "options": [
      {
        "label": "A",
        "textEn": "A typed error or recoverable result with a clear user-facing state",
        "textAr": "خطأ محدد النوع أو نتيجة يمكن استردادها مع حالة واضحة للمستخدم"
      },
      {
        "label": "B",
        "textEn": "A silent success result",
        "textAr": "نتيجة نجاح صامتة"
      },
      {
        "label": "C",
        "textEn": "A raw SQL password",
        "textAr": "كلمة مرور SQL خام"
      },
      {
        "label": "D",
        "textEn": "A duplicated write",
        "textAr": "كتابة مكررة"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When persistent storage encounters malformed or corrupted data (like invalid JSON), the repository layer should catch the parsing error and return a safe fallback state or a clear error message, rather than crashing the app.",
    "explanationAr": "عندما تواجه طبقة التخزين بيانات تالفة (مثل JSON غير صالح)، يجب على طبقة (Repository) التقاط الخطأ وإرجاع حالة بديلة آمنة أو رسالة خطأ واضحة بدلاً من التسبب في انهيار التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_89",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 89,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.89)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A process restart restores a value from storage. Which layer performed the restoration?",
    "questionAr": "إعادة تشغيل العملية (process restart) تستعيد قيمة من التخزين. أي طبقة قامت بعملية الاستعادة؟",
    "options": [
      {
        "label": "A",
        "textEn": "Startup/read logic reconstructed State from persistent data",
        "textAr": "منطق بدء التشغيل/القراءة قام بإعادة بناء الحالة (State) من بيانات دائمة (persistent data)"
      },
      {
        "label": "B",
        "textEn": "A previous build local variable",
        "textAr": "متغير محلي (local variable) من بناء سابق"
      },
      {
        "label": "C",
        "textEn": "The last route pop",
        "textAr": "آخر عملية pop للمسار (route)"
      },
      {
        "label": "D",
        "textEn": "The widget color",
        "textAr": "لون الويدجت (widget color)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When an app restarts, its volatile state is lost. Startup logic must read from persistent storage to reconstruct the application State.",
    "explanationAr": "عند إعادة تشغيل التطبيق، تُفقد حالته المتطايرة. يجب أن يقرأ منطق بدء التشغيل من التخزين الدائم لإعادة بناء حالة التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_90",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 90,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.90)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which design avoids binding persistence behavior to a particular screen?",
    "questionAr": "أي تصميم يتجنب ربط سلوك الديمومة (persistence behavior) بشاشة معينة؟",
    "options": [
      {
        "label": "A",
        "textEn": "A reusable repository/service consumed by the screen",
        "textAr": "مستودع (repository)/خدمة قابلة لإعادة الاستخدام تستهلكها الشاشة"
      },
      {
        "label": "B",
        "textEn": "SQL and file I/O inside every button callback",
        "textAr": "SQL وعمليات الإدخال/الإخراج للملفات (file I/O) داخل كل callback لزر"
      },
      {
        "label": "C",
        "textEn": "A static BuildContext field",
        "textAr": "حقل BuildContext ثابت (static)"
      },
      {
        "label": "D",
        "textEn": "A screenshot -only test",
        "textAr": "اختبار يعتمد على لقطة شاشة (screenshot) فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Decoupling persistence logic from specific screens via a reusable repository or service ensures better maintainability and testability in Flutter apps.",
    "explanationAr": "يضمن فصل منطق الاستمرارية عن شاشات محددة عبر مستودع أو خدمة قابلة لإعادة الاستخدام إمكانية صيانة واختبار أفضل في تطبيقات Flutter.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_91",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 91,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.91)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: await insertDog(const Dog(id: 0, name: 'Fido', age: 35)); print(await dogs()); After inserting Fido with age 35, what exact list is printed?",
    "questionAr": "If we have the following code fragment: (await) insertDog(const Dog(id: 0, name: 'Fido', age: 35)); print(await dogs()); After inserting Fido with age 35, what exact list is printed?",
    "options": [
      {
        "label": "A",
        "textEn": "[Dog{id: 0, name: Fido, age: 35}]",
        "textAr": "[Dog{id: 0, name: Fido, age: 35}]"
      },
      {
        "label": "B",
        "textEn": "[]",
        "textAr": "[]"
      },
      {
        "label": "C",
        "textEn": "42",
        "textAr": "42"
      },
      {
        "label": "D",
        "textEn": "null",
        "textAr": "null"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Inserting an object into the database makes it part of the persistent dataset, so querying it immediately after returns a list containing the exact inserted object.",
    "explanationAr": "إدراج كائن في قاعدة البيانات يجعله جزءاً من مجموعة البيانات الدائمة، لذا فإن الاستعلام عنه مباشرة بعد ذلك يعيد قائمة تحتوي على الكائن الذي تم إدراجه بالضبط.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_92",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 92,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.92)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: fido = Dog(id: 0, name: 'Fido', age: 42); await updateDog(fido); print(await dogs()); After updating Fido to age 42, what exact list is printed?",
    "questionAr": "If we have the following code fragment: fido = Dog(id: 0, name: 'Fido', age: 42); (await) updateDog(fido); print(await dogs()); After updating Fido to age 42, what exact list is printed?",
    "options": [
      {
        "label": "A",
        "textEn": "[Dog{id: 0, name: Fido, age: 42}]",
        "textAr": "[Dog{id: 0, name: Fido, age: 42}]"
      },
      {
        "label": "B",
        "textEn": "[Dog{id: 0, name: Fido, age: 35}]",
        "textAr": "[Dog{id: 0, name: Fido, age: 35}]"
      },
      {
        "label": "C",
        "textEn": "[]",
        "textAr": "[]"
      },
      {
        "label": "D",
        "textEn": "FormatException",
        "textAr": "FormatException"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Updating an entity modifies its persistent state in the database, causing subsequent queries to reflect the newly updated property values.",
    "explanationAr": "يعدل تحديث كيان حالته الدائمة في قاعدة البيانات، مما يتسبب في أن تعكس الاستعلامات اللاحقة قيم الخصائص المحدثة حديثاً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_93",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 93,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.93)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: await deleteDog(fido.id); print(await dogs()); After deleting Fido, what exact list is printed?",
    "questionAr": "If we have the following code fragment: (await) deleteDog(fido.id); print(await dogs()); After deleting Fido, what exact list is printed?",
    "options": [
      {
        "label": "A",
        "textEn": "[]",
        "textAr": "[]"
      },
      {
        "label": "B",
        "textEn": "[Fido]",
        "textAr": "[Fido]"
      },
      {
        "label": "C",
        "textEn": "true",
        "textAr": "true"
      },
      {
        "label": "D",
        "textEn": "counter=8",
        "textAr": "counter=8"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Deleting an entity removes it from the data store entirely, resulting in an empty list when querying if it was the only record.",
    "explanationAr": "يؤدي حذف كيان إلى إزالته من مخزن البيانات تماماً، مما يؤدي إلى قائمة فارغة عند الاستعلام إذا كان السجل الوحيد.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_94",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 94,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.94)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: final prefs = SharedPreferencesAsync(); print(await prefs.getString('username')); When the username key is absent, what does getString print?",
    "questionAr": "If we have the following code fragment: final prefs = (SharedPreferencesAsync()); print(await prefs.getString('username')); When the username key is absent, what does getString print?",
    "options": [
      {
        "label": "A",
        "textEn": "null",
        "textAr": "null"
      },
      {
        "label": "B",
        "textEn": "An empty string",
        "textAr": "سلسلة نصية فارغة"
      },
      {
        "label": "C",
        "textEn": "0",
        "textAr": "0"
      },
      {
        "label": "D",
        "textEn": "[]",
        "textAr": "[]"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "SharedPreferences returns null when attempting to retrieve a key that does not exist, signaling the absence of a value.",
    "explanationAr": "ترجع SharedPreferences قيمة null عند محاولة استرداد مفتاح غير موجود، مما يشير إلى غياب القيمة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_95",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 95,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.95)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: print(await prefs.getString('username')); After saving the username, what does the following read print?",
    "questionAr": "إذا كان لدينا جزء الشيفرة التالي: print(await prefs.getString('username')); بعد حفظ اسم المستخدم، ماذا تطبع عملية القراءة التالية؟",
    "options": [
      {
        "label": "A",
        "textEn": "The saved string value",
        "textAr": "القيمة النصية المحفوظة"
      },
      {
        "label": "B",
        "textEn": "null",
        "textAr": "null"
      },
      {
        "label": "C",
        "textEn": "false",
        "textAr": "false"
      },
      {
        "label": "D",
        "textEn": "File not found",
        "textAr": "الملف غير موجود (File not found)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "After saving a string using SharedPreferences, retrieving it with the same key returns the saved string value.",
    "explanationAr": "بعد حفظ سلسلة نصية باستخدام التفضيلات المشتركة، فإن استردادها بنفس المفتاح يُرجع القيمة النصية المحفوظة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_96",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 96,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.96)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: await prefs.remove(usernameKey); print(await prefs.containsKey(usernameKey)); After removing usernameKey, what does containsKey print?",
    "questionAr": "If we have the following code fragment: (await) prefs.remove(usernameKey); print(await prefs.containsKey(usernameKey)); After removing usernameKey, what does containsKey print?",
    "options": [
      {
        "label": "A",
        "textEn": "false",
        "textAr": "false"
      },
      {
        "label": "B",
        "textEn": "true",
        "textAr": "true"
      },
      {
        "label": "C",
        "textEn": "1",
        "textAr": "1"
      },
      {
        "label": "D",
        "textEn": "FormatException",
        "textAr": "FormatException"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The remove function clears the key-value pair from storage, causing containsKey to return false since the key is no longer present.",
    "explanationAr": "تمسح وظيفة remove زوج المفتاح والقيمة من التخزين، مما يجعل containsKey ترجع false لأن المفتاح لم يعد موجوداً.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_97",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 97,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.97)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: final contents = await file.readAsString(); return int.parse(contents); If the text file contains 7, what integer is returned?",
    "questionAr": "If we have the following code fragment: final contents = (await) file.readAsString(); return int.parse(contents); If the text file contains 7, what integer is returned?",
    "options": [
      {
        "label": "A",
        "textEn": "7",
        "textAr": "7"
      },
      {
        "label": "B",
        "textEn": "'7' as String",
        "textAr": "'7' كـ String"
      },
      {
        "label": "C",
        "textEn": "File",
        "textAr": "File"
      },
      {
        "label": "D",
        "textEn": "null",
        "textAr": "null"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Reading a file as a string returns its raw textual content, which must be parsed via int.parse to convert it into a usable integer format.",
    "explanationAr": "تؤدي قراءة ملف كسلسلة إلى إرجاع محتواه النصي الخام، والذي يجب تحليله عبر int.parse لتحويله إلى تنسيق عدد صحيح قابل للاستخدام.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_98",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 98,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.98)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: final counter = int.parse(await file.readAsString()); await file.writeAsString('${counter + 1}'); print(int.parse(await file.readAsString())); If the file contains 7, what is printed after incrementing and overwriting it?",
    "questionAr": "If we have the following code fragment: final counter = int.parse(await file.readAsString()); (await) file.writeAsString('${counter + 1}'); print(int.parse(await file.readAsString())); If the file contains 7, what is printed after incrementing and overwriting it?",
    "options": [
      {
        "label": "A",
        "textEn": "8",
        "textAr": "8"
      },
      {
        "label": "B",
        "textEn": "7",
        "textAr": "7"
      },
      {
        "label": "C",
        "textEn": "0",
        "textAr": "0"
      },
      {
        "label": "D",
        "textEn": "null",
        "textAr": "null"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Incrementing a parsed integer and writing it back using writeAsString overwrites the old content, persisting the new calculation.",
    "explanationAr": "تؤدي زيادة عدد صحيح تم تحليله وكتابته مرة أخرى باستخدام writeAsString إلى الكتابة فوق المحتوى القديم، مع الاحتفاظ بالحساب الجديد.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_99",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 99,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.99)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: if (!await file.exists()) return null; If the JSON file does not exist, what first -run result is returned?",
    "questionAr": "If we have the following code fragment: if (!(await) file.exists()) return null; If the (JSON) file does not exist, what first -run result is returned?",
    "options": [
      {
        "label": "A",
        "textEn": "null",
        "textAr": "null"
      },
      {
        "label": "B",
        "textEn": "LocalNote(text: '')",
        "textAr": "LocalNote(text: '')"
      },
      {
        "label": "C",
        "textEn": "FormatException always",
        "textAr": "FormatException دائماً"
      },
      {
        "label": "D",
        "textEn": "A SQLite row",
        "textAr": "صف (row) (SQLite)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Checking for file existence before attempting to read prevents FileSystemException and allows the app to gracefully initialize defaults.",
    "explanationAr": "يمنع التحقق من وجود الملف قبل محاولة القراءة استثناء FileSystemException ويسمح للتطبيق بتهيئة الإعدادات الافتراضية بسلاسة.",
    "codeSnippet": null
  },
  {
    "id": "lab9_mcq_100",
    "lecture": 9,
    "lab": "Lab 9",
    "num": 100,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Local Data Storage",
    "subtopic": "Storage Options & SQLite",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Lab 9 (Q2.100)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code fragment: final decoded = jsonDecode(raw); if (decoded is! Map<String, dynamic>) { throw const FormatException('Expected a JSON object'); } If decoded JSON is not a map, which result follows the validation code?",
    "questionAr": "If we have the following code fragment: final decoded = jsonDecode(raw); if (decoded is! Map<String, dynamic>) { throw const FormatException('Expected a (JSON) object'); } If decoded (JSON) is not a map, which result follows the validation code?",
    "options": [
      {
        "label": "A",
        "textEn": "FormatException",
        "textAr": "FormatException"
      },
      {
        "label": "B",
        "textEn": "Success state",
        "textAr": "حالة النجاح (Success state)"
      },
      {
        "label": "C",
        "textEn": "SQLite migration",
        "textAr": "ترحيل (SQLite) (SQLite migration)"
      },
      {
        "label": "D",
        "textEn": "Preference reset only",
        "textAr": "إعادة تعيين التفضيلات (Preference) فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Validating the dynamic result of jsonDecode ensures it matches the expected Map structure. Failing this validation rightly throws a FormatException to prevent subsequent mapping errors.",
    "explanationAr": "يضمن التحقق من النتيجة الديناميكية لـ jsonDecode تطابقها مع بنية Map المتوقعة. الفشل في هذا التحقق يطرح بحق FormatException لمنع أخطاء التعيين اللاحقة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_01",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 1,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Working with APIs in Flutter is a fundamental skill for building mobile apps that fetch data from the internet.",
    "questionAr": "يعد التعامل مع واجهات برمجة التطبيقات (APIs) في فلاتر مهارة أساسية لبناء تطبيقات الهواتف التي تجلب البيانات من الإنترنت.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Network communication and consuming REST APIs is an essential capability for real-world Flutter apps.",
    "explanationAr": "صحيح. يعد استدعاء واجهات (REST API) وتبادل البيانات عبر الشبكة مهارة أساسية لبناء تطبيقات فلاتر متصلة بالإنترنت.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_02",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 2,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In REST APIs, the POST method is used to retrieve data from the server.",
    "questionAr": "في واجهات برمجة التطبيقات REST، تُستخدم طريقة (POST) لاسترجاع وقراءة البيانات من الخادم.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "GET is used to retrieve data; POST is used to send/create data.",
    "correctionAr": "تُستخدم طريقة (GET) لقراءة واسترجاع البيانات، بينما تُستخدم (POST) لإرسال وإنشاء بيانات جديدة.",
    "explanationEn": "False. In REST standards, GET reads data from the server, while POST submits new data.",
    "explanationAr": "خطأ. في معايير REST، تُستخدم (GET) لقراءة وجلب البيانات، بينما (POST) مخصصة لإنشاء وإرسال بيانات جديدة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_03",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 3,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "JSON is a commonly used data format for communication between Flutter apps and REST PHP APIs.",
    "questionAr": "تعد صيغة (JSON) تنسيق بيانات شائع الاستخدام للتواصل بين تطبيقات فلاتر وواجهات برمجة تطبيقات PHP REST.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. JSON is the universal lightweight format used to transmit structured objects between Flutter and PHP backends.",
    "explanationAr": "صحيح. تمثل صيغة (JSON) المعيار الأكثر شيوعاً لنقل البيانات المهيكلة بين تطبيق فلاتر وخادم PHP.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_04",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 4,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In Flutter, the http package allows you to make network requests to REST APIs.",
    "questionAr": "في فلاتر، تتيح لك حزمة http الرسمية إرسال طلبات الشبكة واستدعاء واجهات برمجة التطبيقات REST.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. The Flutter `http` package provides high-level functions like `http.get`, `http.post`, `http.put`, and `http.delete`.",
    "explanationAr": "صحيح. توفر حزمة `http` في فلاتر دوال التعامل مع الشبكة مثل `http.get` و `http.post` و `http.put` و `http.delete`.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_05",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 5,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The PUT method in a REST API is used to delete data from the server.",
    "questionAr": "تُستخدم طريقة PUT في واجهة برمجة التطبيقات REST لحذف البيانات من الخادم.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "PUT is used to update/replace existing data; DELETE is used to delete.",
    "correctionAr": "تُستخدم طريقة (PUT) لتحديث وتعديل البيانات، بينما (DELETE) هي المخصصة لحذف البيانات.",
    "explanationEn": "False. The DELETE method removes resources, whereas PUT modifies/replaces existing resources.",
    "explanationAr": "خطأ. طريقة (DELETE) هي المسؤولة عن حذف الموارد، في حين أن (PUT) مخصصة لتحديث وتعديل المورد الموجود.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_06",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 6,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A 200 OK HTTP status code means the request was successful.",
    "questionAr": "رمز حالة (HTTP) رقم 200 OK يعني أن طلب الشبكة تم بنجاح من قبل الخادم.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. Status code 200 (OK) indicates that the REST API request succeeded and returned the requested data payload.",
    "explanationAr": "صحيح. يشير رمز الحالة 200 OK إلى نجاح طلب الـ (API) واسترجاع البيانات المطلوبة بنجاح من الخادم.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_07",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 7,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The FutureBuilder widget in Flutter is commonly used to handle asynchronous HTTP requests.",
    "questionAr": "يُستخدم عنصر واجهة المستخدم (FutureBuilder) في Flutter بشكل شائع للتعامل مع طلبات (HTTP) غير المتزامنة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "FutureBuilder is the quintessential Flutter widget for building UI that reacts to the asynchronous lifecycle of HTTP requests (waiting, error, data).",
    "explanationAr": "FutureBuilder هو عنصر واجهة المستخدم (widget) المثالي في Flutter لبناء واجهة مستخدم تتفاعل مع دورة الحياة غير المتزامنة لطلبات HTTP (انتظار، خطأ، بيانات).",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_08",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 8,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The DELETE method in REST APIs can be used to update existing data.",
    "questionAr": "يمكن استخدام طريقة (DELETE) في واجهات برمجة تطبيقات REST لتحديث البيانات الموجودة.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "DELETE is used to remove records; PUT or PATCH is used to update existing data.",
    "correctionAr": "تُستخدم طريقة (DELETE) لحذف السجلات، بينما تُستخدم (PUT) أو PATCH لتحديث وتعديل البيانات.",
    "explanationEn": "False. The DELETE method instructs the server to remove the specified resource. Updating resources is performed via PUT (full update) or PATCH (partial update).",
    "explanationAr": "خطأ. طريقة (DELETE) مخصصة لحذف السجلات من الخادم، بينما تحديث وتعديل البيانات يتم باستخدام طرق (PUT) أو PATCH.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_09",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 9,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "REST APIs are always stateless, meaning each request from a client must contain all necessary information.",
    "questionAr": "واجهات REST APIs تكون دائماً عديمة الحالة (stateless)، مما يعني أن كل طلب من العميل يجب أن يحتوي على جميع المعلومات الضرورية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "REST APIs are inherently stateless; they do not maintain client sessions, requiring every request to independently carry all data needed for the server to process it.",
    "explanationAr": "واجهات REST API عديمة الحالة بطبيعتها؛ فهي لا تحتفظ بجلسات العميل، مما يتطلب من كل طلب أن يحمل بشكل مستقل كل البيانات اللازمة للخادم لمعالجته.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_10",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 10,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In Flutter, you need to manually parse the JSON response from an HTTP request.",
    "questionAr": "في Flutter، تحتاج إلى تحليل استجابة (JSON) يدوياً من طلب (HTTP).",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "False. Flutter allows manual parsing, but you can also use automatic code generation which does most of the work automatically.",
    "explanationAr": "خطأ. يسمح Flutter بالتحليل اليدوي، ولكن يمكنك أيضًا استخدام إنشاء التعليمات البرمجية التلقائي الذي يقوم بمعظم العمل تلقائيًا.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_11",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 11,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The Content-Type: application/json header must be set when sending JSON data to a REST PHP API.",
    "questionAr": "يجب تعيين رأس Content-Type: application/json عند إرسال بيانات (JSON) إلى واجهة REST PHP (API).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The Content-Type header informs the receiving web server how to interpret the request body. application/json is mandatory when sending JSON payloads.",
    "explanationAr": "يعلم رأس Content-Type خادم الويب المستلم بكيفية تفسير نص الطلب. يعد application/json إلزامياً عند إرسال حمولات JSON.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_12",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 12,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The http package in Dart provides high -level functions and classes that allow developers to make HTTP requests to web servers. It is not a future-based library.",
    "questionAr": "توفر حزمة http في Dart دوال وفئات عالية المستوى تسمح للمطورين بإجراء طلبات (HTTP) لخوادم الويب. وهي ليست مكتبة تعتمد على Future.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "The http package provides Future-based methods, as network requests are inherently asynchronous.",
    "correctionAr": "توفر حزمة http دوال تعتمد على Future، لأن طلبات الشبكة غير متزامنة بطبيعتها.",
    "explanationEn": "The http package abstracts low-level socket connections, providing simple, future-based methods like get() and post() for REST interactions.",
    "explanationAr": "تلخص حزمة http اتصالات المقبس (socket) منخفضة المستوى، مما يوفر طرقاً بسيطة قائمة على future مثل get() و post() لتفاعلات REST.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_13",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 13,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "GET requests can be used to retrieve data from a server. You can use a GET request to fetch a list of users from a database or to retrieve the details of a specific user.",
    "questionAr": "يمكن استخدام طلبات (GET) لاسترداد البيانات من خادم. يمكنك استخدام طلب (GET) لجلب قائمة مستخدمين من قاعدة بيانات أو لاسترداد تفاصيل مستخدم معين.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The HTTP GET method is strictly defined in the REST specification for retrieving data without causing side effects or modifications on the server.",
    "explanationAr": "يتم تعريف طريقة HTTP GET بصرامة في مواصفات REST لاسترداد البيانات دون التسبب في آثار جانبية أو تعديلات على الخادم.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_14",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 14,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Flutter, the popular open-source UI toolkit, does not provide developers with powerful tools to efficiently work with APIs.",
    "questionAr": "إطار عمل Flutter، وهو مجموعة أدوات واجهة المستخدم مفتوحة المصدر الشهيرة، لا يوفر للمطورين أدوات قوية للعمل بكفاءة مع الـ APIs.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Flutter, combined with packages like http or dio, provides very powerful tools to efficiently work with APIs.",
    "correctionAr": "يوفر Flutter، إلى جانب حزم مثل http أو dio، أدوات قوية جداً للعمل بكفاءة مع واجهات برمجة التطبيقات (APIs).",
    "explanationEn": "Flutter focuses on being a reactive UI toolkit; it delegates network operations to dedicated Dart packages rather than reinventing heavy built-in API clients.",
    "explanationAr": "يركز Flutter على أن يكون مجموعة أدوات واجهة مستخدم تفاعلية؛ فهو يفوض عمليات الشبكة إلى حزم Dart مخصصة بدلاً من إعادة اختراع عملاء API مدمجين ثقيلين.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_15",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 15,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "When a Flutter app sends a GET request to an API endpoint, it receives a response containing the requested data, typically in XML format.",
    "questionAr": "عندما يرسل تطبيق Flutter طلب (GET) إلى نقطة نهاية (API)، فإنه يتلقى استجابة تحتوي على البيانات المطلوبة، وعادة ما تكون بتنسيق XML.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "APIs typically return data in JSON format, not XML.",
    "correctionAr": "تعيد واجهات برمجة التطبيقات (APIs) عادةً البيانات بتنسيق JSON، وليس XML.",
    "explanationEn": "While JSON is ubiquitous, GET requests can technically return XML if the API endpoint is configured to serve legacy formats.",
    "explanationAr": "على الرغم من انتشار JSON، يمكن لطلبات GET أن تعيد XML من الناحية الفنية إذا تم تكوين نقطة نهاية API لتقديم تنسيقات قديمة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_16",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 16,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Flutter developers can make HTTP requests to APIs using various packages, with Dart's http package being one of the most popular choices.",
    "questionAr": "يمكن لمطوري Flutter إجراء طلبات (HTTP) لواجهات برمجة التطبيقات (APIs) باستخدام حزم مختلفة، وتعتبر حزمة http في Dart واحدة من الخيارات الأكثر شيوعاً.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The http package abstracts low-level socket connections, providing simple, future-based methods like get() and post() for REST interactions.",
    "explanationAr": "تلخص حزمة http اتصالات المقبس (socket) منخفضة المستوى، مما يوفر طرقاً بسيطة قائمة على future مثل get() و post() لتفاعلات REST.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_17",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 17,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An HTTP API request can be described using its method, endpoint, headers, body, status, and response.",
    "questionAr": "يمكن وصف طلب (HTTP) (API) باستخدام الطريقة (method)، ونقطة النهاية (endpoint)، والرؤوس (headers)، والجسم (body)، والحالة (status)، والاستجابة (response).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "An HTTP request is comprehensively defined by its target URL (endpoint), action verb (method), metadata (headers), and optional payload (body).",
    "explanationAr": "يتم تعريف طلب HTTP بشكل شامل من خلال عنوان URL المستهدف (نقطة النهاية)، وفعل الإجراء (الطريقة)، والبيانات الوصفية (الرؤوس)، والحمولة الاختيارية (النص).",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_18",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 18,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "PHP & MySQL Integration",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Suppose a Flutter app sends requests to a PHP API that accesses MySQL. The Flutter client should store the MySQL username and password and connect directly to the database.",
    "questionAr": "افترض أن تطبيق Flutter يرسل طلبات إلى واجهة برمجة تطبيقات PHP تصل إلى MySQL. يجب على عميل Flutter تخزين اسم مستخدم MySQL وكلمة المرور والاتصال مباشرة بقاعدة البيانات.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Apps should communicate with a secure backend API, not directly with MySQL.",
    "correctionAr": "يجب أن تتواصل التطبيقات مع واجهة برمجة تطبيقات (API) خلفية آمنة، وليس مباشرة مع MySQL.",
    "explanationEn": "Directly connecting to a MySQL database from a mobile app requires embedding database credentials in the app code, which is a massive security risk. Apps should always communicate through a secure backend API.",
    "explanationAr": "الاتصال المباشر بقاعدة بيانات MySQL من تطبيق الهاتف يتطلب تضمين بيانات الاعتماد في كود التطبيق، وهو ما يمثل خطرًا أمنيًا كبيرًا. يجب أن تتواصل التطبيقات دائمًا من خلال واجهة برمجة تطبيقات (API) خلفية آمنة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_19",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 19,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "PHP & MySQL Integration",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In a three-layer design in which Flutter communicates with a PHP HTTP API and the API communicates with MySQL, Flutter should communicate with the API rather than directly with MySQL.",
    "questionAr": "في التصميم ثلاثي الطبقات الذي يتواصل فيه Flutter مع واجهة برمجة تطبيقات (HTTP) (API) بـ PHP وتتواصل واجهة (API) مع MySQL، يجب أن يتواصل Flutter مع (API) بدلاً من الاتصال المباشر بـ MySQL.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "In a standard three-tier architecture, the Flutter mobile app acts as the presentation layer communicating with the business logic layer (PHP API), which then securely interacts with the data layer (MySQL).",
    "explanationAr": "في بنية الطبقات الثلاث القياسية، يعمل تطبيق Flutter كطبقة العرض التي تتواصل مع طبقة منطق الأعمال (PHP API)، والتي بدورها تتفاعل بأمان مع طبقة البيانات (MySQL).",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_20",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 20,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.20)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "POST is normally associated with creating a new resource.",
    "questionAr": "ترتبط طريقة (POST) عادة بإنشاء وإضافة مورد أو سجل جديد على الخادم.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "True. In REST conventions, POST is the HTTP verb designated for resource creation.",
    "explanationAr": "صحيح. في معايير RESTful، طريقة (POST) هي الطريقة المخصصة لإنشاء وإضافة سجلات وموارد جديدة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_21",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 21,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "PUT and PATCH have exactly the same semantic meaning in every API contract.",
    "questionAr": "طريقتي (PUT) و PATCH لهما نفس المعنى الدلالي تماماً في كل عقد لواجهة برمجة التطبيقات (API contract).",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "PUT and PATCH have different semantic meanings: PUT is for full replacement, while PATCH is for partial updates.",
    "correctionAr": "لكل من PUT و PATCH معاني دلالية مختلفة: PUT للاستبدال الكامل، بينما PATCH للتحديثات الجزئية.",
    "explanationEn": "Though REST semantics differ (PUT replaces, PATCH updates partially), many API implementations treat them identically for update operations.",
    "explanationAr": "على الرغم من اختلاف دلالات REST (يستبدل PUT، ويحدث PATCH جزئياً)، فإن العديد من تطبيقات API تعاملها بشكل متطابق لعمليات التحديث.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_22",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 22,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.22)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "DELETE is the HTTP method normally associated with removing a resource.",
    "questionAr": "طريقة (DELETE) هي طريقة (HTTP) المرتبطة عادةً بإزالة مورد.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The HTTP DELETE verb is semantically purposed specifically for deleting resources on the backend system.",
    "explanationAr": "تم تخصيص فعل HTTP DELETE دلالياً خصيصاً لحذف الموارد في النظام الخلفي.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_23",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 23,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.23)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A 201 status is a common success convention for a create operation, but the client must still follow the actual API contract.",
    "questionAr": "الحالة 201 هي اصطلاح نجاح شائع لعملية إنشاء، ولكن لا يزال يجب على العميل اتباع عقد (API) الفعلي.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The 201 Created status code explicitly indicates that a POST request successfully resulted in the generation of a new resource.",
    "explanationAr": "يشير رمز الحالة 201 Created صراحةً إلى أن طلب POST نتج عنه بنجاح إنشاء مورد جديد.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_24",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 24,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.24)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A client may safely parse any response body as JSON before checking the HTTP status code.",
    "questionAr": "يمكن للعميل تحليل أي نص استجابة بأمان كـ (JSON) قبل التحقق من رمز حالة (HTTP).",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "It is not always safe to parse any response as JSON before checking the status code or Content-Type, as some errors return HTML or plain text.",
    "correctionAr": "ليس من الآمن دائماً تحليل أي استجابة كـ JSON قبل التحقق من رمز الحالة أو نوع المحتوى، حيث تعيد بعض الأخطاء HTML أو نصاً عادياً.",
    "explanationEn": "Even error responses (like 400 or 500) often return JSON bodies containing error details, which clients can parse before evaluating the status code.",
    "explanationAr": "حتى استجابات الخطأ (مثل 400 أو 500) غالباً ما تعيد أجسام JSON تحتوي على تفاصيل الخطأ، والتي يمكن للعملاء تحليلها قبل تقييم رمز الحالة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_25",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 25,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.25)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A decoded JSON object maps naturally to a Dart Map-like structure.",
    "questionAr": "يتم تعيين كائن (JSON) الذي تم فك تشفيره بشكل طبيعي إلى هيكل يشبه Dart Map.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When jsonDecode processes a JSON object (enclosed in {}), it converts it directly into a Dart Map<String, dynamic>, allowing key-based access to the data.",
    "explanationAr": "عندما يقوم (jsonDecode) بمعالجة كائن JSON (المحاط بأقواس {})، فإنه يحوله مباشرة إلى (Map<String, dynamic>) في Dart، مما يسمح بالوصول إلى البيانات بناءً على المفاتيح.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_26",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 26,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.26)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A decoded top-level JSON array maps naturally to a Dart List-like structure.",
    "questionAr": "يتم تعيين مصفوفة (JSON) ذات المستوى الأعلى التي تم فك تشفيرها بشكل طبيعي إلى هيكل يشبه Dart List.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When jsonDecode processes a JSON array (enclosed in []), it naturally parses it into a Dart List<dynamic>, which can then be iterated or mapped.",
    "explanationAr": "عندما يقوم (jsonDecode) بمعالجة مصفوفة JSON (المحاطة بأقواس [])، فإنه يحللها بشكل طبيعي إلى (List<dynamic>) في Dart، والتي يمكن بعد ذلك المرور عليها أو عمل (mapping) لها.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_27",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 27,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.27)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "JSON can contain nested objects, arrays, primitive values, and null.",
    "questionAr": "يمكن أن يحتوي (JSON) على كائنات متداخلة ومصفوفات وقيم بدائية و null.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "JSON is structurally flexible, fully supporting nested objects, arrays, and primitive data types to represent complex data models.",
    "explanationAr": "يتسم JSON بالمرونة الهيكلية، ويدعم بشكل كامل الكائنات المتداخلة والمصفوفات وأنواع البيانات البدائية لتمثيل نماذج البيانات المعقدة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_28",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 28,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.28)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A fromJson constructor can centralize the mapping between JSON keys and Dart fields.",
    "questionAr": "يمكن لمنشئ fromJson مركزة التعيين بين مفاتيح (JSON) وحقول Dart.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Using a fromJson factory constructor is the best practice in Dart because it centralizes the logic for mapping dynamic JSON keys to strongly-typed class properties in one place.",
    "explanationAr": "يعد استخدام (factory constructor) مثل fromJson أفضل ممارسة في Dart لأنه يركز منطق تحويل مفاتيح JSON الديناميكية إلى خصائص فئة (class) محددة النوع في مكان واحد.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_29",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 29,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.29)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final data = {'oldPrice': '699', 'price': '799'}; final String? oldPrice = data['oldPrice']; final String? price = data['price']; If the JSON values are quoted strings, oldPrice and price should be declared as nullable String fields.",
    "questionAr": "إذا كان لدينا مقتطف الكود التالي: final data = {'oldPrice': '699', 'price': '799'}; final String? oldPrice = data['oldPrice']; final String? price = data['price']; إذا كانت قيم (JSON) عبارة عن سلاسل نصية مقتبسة، فيجب التصريح عن oldPrice و price كحقول String قابلة للقيم الخالية (nullable).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When JSON properties are unreliable or represented as strings, marking Dart fields as nullable String prevents runtime null reference exceptions.",
    "explanationAr": "عندما تكون خصائص JSON غير موثوقة أو ممثلة كسلاسل، فإن وضع علامة على حقول Dart كسلسلة قابلة للقيم الخالية (nullable String) يمنع استثناءات مرجع فارغ في وقت التشغيل.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_30",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 30,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.30)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "jsonEncode converts a Dart -compatible structure into JSON text.",
    "questionAr": "تحول jsonEncode بنية متوافقة مع Dart إلى نص (JSON).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The jsonEncode function takes structured Dart objects (like Maps and Lists) and serializes them into valid JSON text for network transmission.",
    "explanationAr": "تأخذ وظيفة jsonEncode كائنات Dart المهيكلة (مثل Maps و Lists) وتقوم بتسلسلها إلى نص JSON صالح لنقل الشبكة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_31",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 31,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.31)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code s nippet: class ProductDataModel { final String? imageURL; ProductDataModel.fromJson(Map<String, dynamic> json) : imageURL = json['imageUrl'] as String?; } The constructor maps the JSON key imageUrl to the Dart field imageURL.",
    "questionAr": "إذا كان لدينا مقتطف الكود التالي: class ProductDataModel { final String? imageURL; ProductDataModel.fromJson(Map<String, dynamic> json) : imageURL = json['imageUrl'] as String?; } يقوم المنشئ بتعيين مفتاح (JSON) imageUrl إلى حقل Dart imageURL.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The fromJson constructor explicitly takes a Map and extracts the value associated with the key \"imageUrl\", casting it to a String and assigning it to the imageURL field.",
    "explanationAr": "تأخذ الدالة fromJson خريطة (Map) وتستخرج القيمة المرتبطة بالمفتاح \"imageUrl\"، ثم تحولها إلى سلسلة نصية (String) وتعينها لحقل imageURL.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_32",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 32,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.32)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The keys read by a fromJson constructor must match the keys supplied by the JSON map.",
    "questionAr": "يجب أن تتطابق المفاتيح التي يقرأها منشئ fromJson مع المفاتيح المقدمة بواسطة خريطة (JSON).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "For successful serialization, the string keys used inside the fromJson method (e.g., json['price']) must exactly match the keys returned by the API in the JSON map.",
    "explanationAr": "لنجاح عملية التحويل (serialization)، يجب أن تتطابق المفاتيح النصية المستخدمة داخل دالة fromJson تمامًا مع المفاتيح التي ترجعها الـ API في خريطة JSON.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_33",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 33,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.33)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final jsonText = await rootBundle.loadString('jsonfile/productlist.json'); The asset path must be declared in pubspec.yaml before rootBundle can load it.",
    "questionAr": "إذا كان لدينا مقتطف الكود التالي: final jsonText = await rootBundle.loadString('jsonfile/productlist.json'); يجب التصريح عن مسار الأصل (asset path) في pubspec.yaml قبل أن يتمكن rootBundle من تحميله.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The rootBundle.loadString method asynchronously reads registered bundled files into memory as String data.",
    "explanationAr": "تقرأ طريقة rootBundle.loadString الملفات المجمعة المسجلة بشكل غير متزامن في الذاكرة كبيانات String.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_34",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 34,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.34)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "rootBundle.loadString reads a registered JSON asset as text.",
    "questionAr": "تقرأ rootBundle.loadString أصل (JSON) المسجل كنص.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The rootBundle.loadString method asynchronously reads registered bundled files into memory as String data.",
    "explanationAr": "تقرأ طريقة rootBundle.loadString الملفات المجمعة المسجلة بشكل غير متزامن في الذاكرة كبيانات String.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_35",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 35,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.35)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final decoded = jsonDecode(jsonText) as List<dynamic>; final products = decoded .map((item) => ProductDataModel.fromJson(item)) .toList(); The decoded local JSON root is cast to List<dynamic> before its elements are mapped.",
    "questionAr": "إذا كان لدينا مقتطف الكود التالي: final decoded = jsonDecode(jsonText) as List<dynamic>; final products = decoded.map((item) => ProductDataModel.fromJson(item)).toList(); يتم تحويل جذر (JSON) المحلي الذي تم فك تشفيره إلى List<dynamic> قبل تعيين عناصره.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Because the JSON data represents a list of products, jsonDecode returns a List<dynamic>. The code correctly casts it before calling .map() to convert each element into a ProductDataModel.",
    "explanationAr": "نظرًا لأن بيانات JSON تمثل قائمة بالمنتجات، فإن (jsonDecode) يرجع (List<dynamic>). يقوم الكود بتحويل نوعه (casting) بشكل صحيح قبل استدعاء .map() لتحويل كل عنصر إلى نموذج ProductDataModel.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_36",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 36,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.36)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: FutureBuilder<List<ProductDataModel>>( future: readJsonData(), builder: (context, snapshot) => const SizedBox(), ); FutureBuilder receives readJsonData() through its future property.",
    "questionAr": "إذا كان لدينا مقتطف الكود التالي: FutureBuilder<List<ProductDataModel>>( future: readJsonData(), builder: (context, snapshot) => const SizedBox(), ); يتلقى (FutureBuilder) دالة readJsonData() من خلال خاصية future الخاصة به.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The future parameter of FutureBuilder actively listens to the provided asynchronous function, driving the builder to update as the task progresses.",
    "explanationAr": "تستمع معلمة المستقبل (future parameter) في FutureBuilder بنشاط إلى الوظيفة غير المتزامنة المقدمة، مما يدفع البناء (builder) للتحديث مع تقدم المهمة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_37",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 37,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.37)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A FutureBuilder for a local product list may display an error branch, a data/ListView branch, or a loading branch.",
    "questionAr": "يمكن لـ (FutureBuilder) لقائمة منتجات محلية عرض فرع خطأ (error branch)، أو فرع بيانات/قائمة (data/ListView)، أو فرع تحميل (loading branch).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A well-designed FutureBuilder accounts for multiple states: waiting (loading), hasError (error branch), and hasData (success branch).",
    "explanationAr": "يفسر FutureBuilder المصمم جيداً حالات متعددة: الانتظار (التحميل)، hasError (فرع الخطأ)، و hasData (فرع النجاح).",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_38",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 38,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.38)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An empty JSON array can be a valid UI state rather than an exception.",
    "questionAr": "يمكن أن تكون مصفوفة (JSON) فارغة حالة صالحة لواجهة المستخدم (UI) بدلاً من كونها استثناء (exception).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "An empty JSON array [] is a perfectly valid response indicating zero records, not an error. The UI should display an empty state gracefully.",
    "explanationAr": "مصفوفة JSON الفارغة [] هي استجابة صالحة تماماً تشير إلى صفر سجلات، وليست خطأ. يجب أن تعرض واجهة المستخدم حالة فارغة بسلاسة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_39",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 39,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.39)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A product row can use Image.network with an image URL and display the product name, category, and price.",
    "questionAr": "يمكن لصف المنتج استخدام Image.network مع رابط الصورة (URL) وعرض اسم المنتج، فئته، وسعره.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Image.network dynamically downloads and renders remote images via URL, commonly used in lists representing products or profiles.",
    "explanationAr": "يقوم Image.network بتنزيل وعرض الصور عن بُعد ديناميكياً عبر URL، ويستخدم عادةً في القوائم التي تمثل المنتجات أو الملفات الشخصية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_40",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 40,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.40)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.get( Uri.parse('https://randomuser.me/api/?results=20'), ); The request uses package:http to call the URL https://randomuser.me/api/?results=20.",
    "questionAr": "إذا كان لدينا مقتطف الكود التالي: final response = await http.get(Uri.parse('https://randomuser.me/api/?results=20')); يستخدم الطلب حزمة package:http لاستدعاء الرابط https://randomuser.me/api/?results=20.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The http.get call utilizes a Uri.parse method to construct a valid URL object targeting the specific endpoint and query parameters.",
    "explanationAr": "يستخدم استدعاء http.get طريقة Uri.parse لإنشاء كائن URL صالح يستهدف نقطة النهاية المحددة ومعلمات الاستعلام.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_41",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 41,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.41)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: <uses-permission android:name=\"android.permission.INTERNET\" /> The Android application needs the INTERNET permission for this request.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: <uses-permission android:name=\"android.permission.INTERNET\" /> يحتاج تطبيق Android إلى إذن الـ INTERNET لهذا الطلب.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Android apps must explicitly declare the INTERNET permission in their manifest file to be granted OS-level access to make external network calls.",
    "explanationAr": "يجب أن تعلن تطبيقات Android صراحةً عن إذن INTERNET في ملف البيان الخاص بها لمنحها وصولاً على مستوى نظام التشغيل لإجراء مكالمات الشبكة الخارجية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_42",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 42,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.42)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.get(uri); if (response.statusCode != 200) throw Exception('Request failed'); final results = jsonDecode(response.body)['results'] as List<dynamic>; The response status is checked before the results array is decoded and mapped.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final response = await http.get(uri); if (response.statusCode != 200) throw Exception('Request failed'); final results = jsonDecode(response.body)['results'] as List<dynamic>; يتم التحقق من حالة الاستجابة قبل فك تشفير مصفوفة النتائج وتعيينها.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The code explicitly checks if response.statusCode != 200 before proceeding to call jsonDecode.",
    "explanationAr": "يتحقق الكود صراحةً مما إذا كانت حالة الاستجابة لا تساوي 200 قبل المتابعة لاستدعاء jsonDecode.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_43",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 43,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.43)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final avatarUrl = user['picture']['large']; final age = user['dob']['age']; The ListTile reads the avatar from picture.large and the age from dob.age.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final avatarUrl = user['picture']['large']; final age = user['dob']['age']; يقرأ الـ ListTile الصورة الرمزية من picture.large والعمر من dob.age.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Extracting data from deeply nested JSON requires chaining bracket notation to traverse down the specific keys defined by the API contract.",
    "explanationAr": "يتطلب استخراج البيانات من JSON المتداخل بعمق ربط تدوين الأقواس لاجتياز المفاتيح المحددة المحددة بواسطة عقد API.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_44",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 44,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.44)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A FutureBuilder can receive fetchUsers() through its future property.",
    "questionAr": "يمكن لـ FutureBuilder استقبال fetchUsers() من خلال خاصية future الخاصة به.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The future property of FutureBuilder expects a Future, which is precisely what asynchronous API functions like fetchUsers() return.",
    "explanationAr": "تتوقع خاصية future في FutureBuilder كائن Future، وهو بالضبط ما تُرجعه دوال API غير المتزامنة مثل fetchUsers().",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_45",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 45,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.45)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A successful response may still contain an empty list, so the UI should handle an empty state.",
    "questionAr": "الاستجابة الناجحة قد لا تزال تحتوي على قائمة فارغة، لذا يجب أن تتعامل واجهة المستخدم (UI) مع حالة الفراغ (empty state).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "An API can return a 200 OK status with an empty JSON array if there are no items to display. The UI should check for this and show an appropriate empty state message.",
    "explanationAr": "يمكن أن تُرجع واجهة برمجة التطبيقات حالة 200 OK مع مصفوفة JSON فارغة إذا لم تكن هناك عناصر لعرضها. يجب أن تتحقق واجهة المستخدم من ذلك وتعرض رسالة حالة فارغة مناسبة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_46",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 46,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.46)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "GET usually sends no JSON request body in a basic CRUD request.",
    "questionAr": "عادةً لا يرسل GET أي جسم طلب JSON في طلب CRUD أساسي.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "In RESTful APIs, GET requests are used to retrieve data and parameters are typically sent in the URL or headers, not in the request body.",
    "explanationAr": "في واجهات برمجة تطبيقات RESTful، تُستخدم طلبات GET لاسترداد البيانات وعادةً ما يتم إرسال المعلمات في عنوان URL أو الرؤوس، وليس في جسم الطلب.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_47",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 47,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.47)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A simple POST request may send a Dart Map body, while a form-based inventory request sends fields to its endpoint.",
    "questionAr": "قد يرسل طلب POST البسيط جسم Dart Map، بينما يرسل طلب المخزون المستند إلى نموذج حقولاً إلى نقطة النهاية الخاصة به.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Dart's http package allows sending a Map as the body of a POST request, which defaults to application/x-www-form-urlencoded.",
    "explanationAr": "تسمح حزمة http في Dart بإرسال Map كجسم لطلب POST، والذي يتم تعيينه افتراضياً إلى application/x-www-form-urlencoded.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_48",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 48,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.48)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If an API contract accepts 200 and 204 for an update, both statuses may be treated as success.",
    "questionAr": "إذا كان عقد API يقبل 200 و 204 لتحديث، فيمكن اعتبار كلتا الحالتين كنجاح.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Both 200 (OK) and 204 (No Content) are standardized success codes indicating that the server successfully processed the modification request.",
    "explanationAr": "كلا من 200 (OK) و 204 (No Content) عبارة عن رموز نجاح موحدة تشير إلى أن الخادم عالج طلب التعديل بنجاح.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_49",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 49,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.49)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The UI should change visible data before the server confirms a write so the app always feels faster.",
    "questionAr": "يجب أن تغير واجهة المستخدم (UI) البيانات المرئية قبل أن يؤكد الخادم عملية الكتابة حتى يبدو التطبيق دائماً أسرع.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Typically, the app should wait for server confirmation to ensure data consistency, unless optimistic UI updates are intentionally implemented.",
    "correctionAr": "عادةً، يجب أن ينتظر التطبيق تأكيد الخادم لضمان تناسق البيانات، ما لم يتم تنفيذ تحديثات واجهة المستخدم المتفائلة عمداً.",
    "explanationEn": "Waiting for server confirmation before updating the UI prevents inconsistencies if the network request fails.",
    "explanationAr": "يؤدي انتظار تأكيد الخادم قبل تحديث واجهة المستخدم إلى منع عدم التناسق إذا فشل طلب الشبكة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_50",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 50,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.50)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Dart’s package:http API exposes functions such as http. get and http.post for network requests.",
    "questionAr": "تكشف واجهة برمجة تطبيقات package:http الخاصة بـ Dart عن وظائف مثل http.get و http.post لطلبات الشبكة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The http package provides top-level functions like http.get, http.post, http.put, and http.delete to make standard HTTP requests.",
    "explanationAr": "توفر حزمة http دوال عالية المستوى مثل http.get و http.post و http.put و http.delete لإجراء طلبات HTTP القياسية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_51",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 51,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.51)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "After an awaited HTTP request, mounted or context.mounted may need to be checked before setState, Navigator, or SnackBar work.",
    "questionAr": "بعد طلب HTTP المنتظر، قد يلزم التحقق من mounted أو context.mounted قبل أن تعمل setState أو Navigator أو SnackBar.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Checking context.mounted is crucial after awaits to ensure the widget hasn't been disposed, preventing context-related crashes.",
    "explanationAr": "يعد التحقق من context.mounted أمراً حاسماً بعد awaits لضمان عدم التخلص من الويدجت (widget)، مما يمنع الانهيارات المتعلقة بالسياق.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_52",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 52,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "PHP & MySQL Integration",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.52)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In a three-layer inventory system, the data flow is Flutter client -> PHP API -> MySQL.",
    "questionAr": "في نظام مخزون ثلاثي الطبقات، يكون تدفق البيانات: عميل Flutter -> واجهة PHP API -> قاعدة بيانات MySQL.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "This architecture ensures separation of concerns, where the client handles UI, the API handles business logic, and the database handles storage.",
    "explanationAr": "تضمن هذه البنية فصل الاهتمامات، حيث يتعامل العميل مع واجهة المستخدم، وتتعامل واجهة برمجة التطبيقات مع منطق العمل، وتتعامل قاعدة البيانات مع التخزين.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_53",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 53,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "PHP & MySQL Integration",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.53)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A PHP API should perform server-side validation and use prepared SQL statements when it accesses the database.",
    "questionAr": "يجب أن تقوم واجهة PHP API بإجراء تحقق من جهة الخادم واستخدام عبارات SQL المجهزة عند وصولها إلى قاعدة البيانات.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Server-side validation ensures data integrity, while prepared statements protect against SQL injection vulnerabilities.",
    "explanationAr": "يضمن التحقق من جهة الخادم سلامة البيانات، بينما تحمي العبارات المجهزة من ثغرات حقن SQL.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_54",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 54,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "PHP & MySQL Integration",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.54)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "MySQL should accept direct connections from the Flutter mobile app in a protected client-API-database architecture.",
    "questionAr": "يجب أن تقبل MySQL اتصالات مباشرة من تطبيق الهاتف المحمول Flutter في بنية محمية (عميل - API - قاعدة بيانات).",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Mobile apps must use a secure backend API to access the database, not direct connections.",
    "correctionAr": "يجب أن تستخدم تطبيقات الهواتف واجهة برمجة تطبيقات (API) آمنة للوصول إلى قاعدة البيانات، وليس الاتصال المباشر.",
    "explanationEn": "A mobile app should never connect directly to a database like MySQL because it would expose database credentials to attackers. An intermediate API layer must be used for security.",
    "explanationAr": "لا يجب أن يتصل تطبيق الهاتف مباشرة بقاعدة بيانات مثل MySQL لأن ذلك سيعرض بيانات اعتماد القاعدة للمهاجمين. يجب استخدام طبقة واجهة برمجة تطبيقات (API) وسيطة من أجل الأمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_55",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 55,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.55)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.get( Uri.parse('$baseUrl/getdata.php'), ); getdata.php is called with GET to read the inventory list.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final response = await http.get( Uri.parse('$baseUrl/getdata.php') ); يتم استدعاء getdata.php باستخدام GET لقراءة قائمة المخزون.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Targeting a script like getdata.php with HTTP GET is a standard pattern for fetching structured inventory lists from a server.",
    "explanationAr": "يعد استهداف برنامج نصي مثل getdata.php باستخدام HTTP GET نمطاً قياسياً لجلب قوائم المخزون المهيكلة من الخادم.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_56",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 56,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.56)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.post( Uri.parse('$baseUrl/adddata.php'), body: {'itemcode': 'A10', 'itemname': 'Mouse'}, ); adddata.php receives POST form fields to create an inventory item.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final response = await http.post( Uri.parse('$baseUrl/adddata.php'), body: {'itemcode': 'A10', 'itemname': 'Mouse'} ); يستقبل adddata.php حقول نموذج POST لإنشاء عنصر مخزون.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A simple HTTP POST body using a Dart map is automatically encoded as x-www-form-urlencoded, allowing PHP backends to process it natively via .",
    "explanationAr": "يتم تشفير جسم HTTP POST بسيط باستخدام خريطة Dart تلقائياً كـ x-www-form-urlencoded، مما يسمح لخلفيات PHP بمعالجته أصلياً عبر .",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_57",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 57,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.57)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.post( Uri.parse('$baseUrl/editdata.php'), body: {'id': '7', 'itemname': 'Keyboard'}, ); editdata.php receives the id and edited values through POST form fields.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final response = await http.post( Uri.parse('$baseUrl/editdata.php'), body: {'id': '1', 'name': 'Updated'} ); يتم استدعاء editdata.php لتحديث سجل معين.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "POST is commonly used to send update parameters, including the ID of the record, to the backend script.",
    "explanationAr": "يُستخدم POST بشكل شائع لإرسال معلمات التحديث، بما في ذلك معرف السجل، إلى البرنامج النصي الخلفي.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_58",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 58,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.58)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.post( Uri.parse('$baseUrl/deleteData.php'), body: {'id': id.toString()}, ); deleteData.php receives the selected id in a POST body rather than through HTTP DELETE.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final response = await http.post( Uri.parse('$baseUrl/deleteData.php'), body: {'id': id.toString()} ); يستقبل deleteData.php المعرف المحدد في جسم POST بدلاً من استخدام HTTP DELETE.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "While REST suggests using DELETE, many practical API implementations accept IDs via POST bodies to dedicated delete scripts.",
    "explanationAr": "بينما يقترح REST استخدام DELETE، تقبل العديد من تطبيقات API العملية المعرفات عبر أجسام POST إلى نصوص الحذف المخصصة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_59",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 59,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.59)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final uri = Uri.parse('http://10.0.2.2/my_store/getdata.php'); The address 10.0.2.2 is the Android Emulator alias for the development host loopback.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final uri = Uri.parse('http://10.0.2.2/my_store/getdata.php'); العنوان 10.0.2.2 هو الاسم المستعار في Android Emulator للاسترجاع المحلي لمضيف التطوير (development host loopback).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Inside the Android Emulator virtual networking environment, 10.0.2.2 is the special alias mapped to 127.0.0.1 (localhost) of the host computer running Apache/PHP.",
    "explanationAr": "داخل محاكي أندرويد، يمثل العنوان 10.0.2.2 البوابة الافتراضية الخاصة المرتبطة بـ localhost (127.0.0.1) على جهاز الحاسوب المضيف لخادم PHP.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_60",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 60,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.60)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A physical phone cannot automatically use the Android Emulator loopback alias to reach a development server on another computer.",
    "questionAr": "لا يمكن للهاتف الفعلي استخدام الاسم المستعار للاسترجاع المحلي في Android Emulator تلقائياً للوصول إلى خادم تطوير على كمبيوتر آخر.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "The Android 10.0.2.2 alias exclusively maps to the local dev machine. A physical phone requires real IP addresses to connect over Wi-Fi.",
    "explanationAr": "يعين الاسم المستعار لـ Android 10.0.2.2 حصرياً لجهاز التطوير المحلي. يتطلب الهاتف المادي عناوين IP حقيقية للاتصال عبر Wi-Fi.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_61",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 61,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.61)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "An inventory backend may use MySQLi prepared statements through $connect, while a secure upload handler may use PDO through $pdo.",
    "questionAr": "يقوم كود معالجة الرفع في PHP بنقل الملف المرفوع إلى مجلد uploads والتحقق من نوع وحجم الصورة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_62",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 62,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.62)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A login endpoint should return the stored password hash to Flutter so the app can compare passwords locally.",
    "questionAr": "يجب أن تُرجع نقطة نهاية تسجيل الدخول (login endpoint) تجزئة كلمة المرور (password hash) المخزنة إلى Flutter حتى يتمكن التطبيق من مقارنة كلمات المرور محلياً.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "The backend should NEVER return password hashes. Authentication and comparison must happen securely on the server.",
    "correctionAr": "يجب ألا يرسل الخادم أبداً تجزئات كلمات المرور. يجب أن تتم المصادقة والمقارنة بشكل آمن على الخادم.",
    "explanationEn": "For security, password verification must occur on the server. If a system incorrectly sends hashes to the client, it compromises the architecture.",
    "explanationAr": "لأسباب أمنية، يجب أن يتم التحقق من كلمة المرور على الخادم. إذا أرسل النظام التجزئات (hashes) بشكل غير صحيح إلى العميل، فإنه يضر بالبنية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_63",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 63,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.63)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A registration handler should hash the password on the server before inserting it into the users table.",
    "questionAr": "يجب أن يقوم معالج التسجيل (registration handler) بتجزئة كلمة المرور (hash the password) على الخادم قبل إدراجها في جدول المستخدمين.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Passwords must be hashed using strong algorithms like bcrypt on the server side before storage to protect user accounts in case of a data breach.",
    "explanationAr": "يجب تجزئة كلمات المرور باستخدام خوارزميات قوية مثل bcrypt من جهة الخادم قبل تخزينها لحماية حسابات المستخدمين في حالة اختراق البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_64",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 64,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.64)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The inventory list decodes a JSON List and reads row keys such as item['item_name'].",
    "questionAr": "تقوم قائمة المخزون بفك تشفير قائمة JSON وتقرأ مفاتيح الصفوف مثل item['item_name'].",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When decoding a JSON array, each element is typically a Map (representing a row), and fields are accessed using string keys.",
    "explanationAr": "عند فك تشفير مصفوفة JSON، يكون كل عنصر عادةً عبارة عن Map (يمثل صفاً)، ويتم الوصول إلى الحقول باستخدام مفاتيح نصية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_65",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 65,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.65)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "After a POS T create, update, or delete operation, a fresh GET is stronger evidence that the database persisted the change.",
    "questionAr": "بعد عملية إنشاء أو تحديث أو حذف باستخدام POST، يعتبر طلب GET جديد دليلاً أقوى على أن قاعدة البيانات قد حفظت التغيير.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Refreshing data from the server via a GET request after a modification verifies that the backend successfully applied the changes.",
    "explanationAr": "التحقق من البيانات من الخادم عبر طلب GET بعد إجراء تعديل يؤكد أن الخلفية قد طبقت التغييرات بنجاح.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_66",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 66,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.66)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "The delete interaction asks for confirmation before sending POST to deleteData.php.",
    "questionAr": "يطلب تفاعل الحذف التأكيد قبل إرسال POST إلى deleteData.php.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Best practices require user confirmation before destructive operations like deletion to prevent accidental data loss.",
    "explanationAr": "تتطلب أفضل الممارسات تأكيد المستخدم قبل العمليات المدمرة مثل الحذف لمنع فقدان البيانات العرضي.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_67",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 67,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.67)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippe t: final XFile? image = await picker.pickImage( source: ImageSource.gallery, ); The image-picking workflow uses ImagePicker and returns an XFile?",
    "questionAr": "تُستخدم دالة picker.pickImage() من حزمة image_picker لاختيار صورة من المعرض أو التقاطها بالكاميرا.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_68",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 68,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.68)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: final request = http.MultipartRequest('POST', uri) ..files.add(await http.MultipartFile.fromPath('image', image.path)); The multipart field name used for the uploaded file is image.",
    "questionAr": "يُستخدم كلاس MultipartRequest في حزمة http لإرسال طلبات متعددة الأجزاء لرفع الصور والملفات إلى الخادم.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_69",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 69,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.69)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "An image upload is not complete when the phone receives an XFile; the server response must also be handled.",
    "questionAr": "لا يكتمل رفع الصورة عندما يتلقى الهاتف كائن XFile؛ بل يجب أيضاً التعامل مع استجابة الخادم.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_70",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 70,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.70)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "A database should store a server-side image path or URL rather than the phone’s temporary file path.",
    "questionAr": "يجب أن تخزن قاعدة البيانات مسار الصورة على الخادم أو الـ URL بدلاً من مسار الملف المؤقت الخاص بالهاتف.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "A stable database identifier is crucial for ensuring that operations like updates or deletes precisely target the correct row, regardless of its position in a visible list.",
    "explanationAr": "يعد معرف قاعدة البيانات الثابت أمراً حاسماً لضمان أن العمليات مثل التحديثات أو الحذف تستهدف الصف الصحيح بدقة، بغض النظر عن موضعه في القائمة المرئية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_71",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 71,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.71)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: if ($_FILES['image']['error'] !== UPLOAD_ERR_OK) { exit; } $finfo = new finfo(FILEINFO_MIME_TYPE); $mime = $finfo->file($_FILES['image']['tmp_name']); The upload endpoint validates upload status, size, MIME type, and the generated server filename before inserting the path.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: if ($_FILES['image']['error'] !== UPLOAD_ERR_OK) { exit; } $finfo = new finfo(FILEINFO_MIME_TYPE); $mime = $finfo->file($_FILES['image']['tmp_name']); تقوم نقطة نهاية الرفع بالتحقق من حالة الرفع، الحجم، نوع MIME، واسم ملف الخادم الذي تم إنشاؤه قبل إدراج المسار.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_72",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 72,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.72)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "An upload handler should not trust the original client filename extension when deciding whether a file is safe.",
    "questionAr": "يقوم كود معالجة الرفع في PHP بنقل الملف المرفوع إلى مجلد uploads والتحقق من نوع وحجم الصورة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_73",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 73,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.73)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final decoded = jsonDecode(response.body); A FormatException can indicate that the response body is not valid JSON for the expected API contract.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final decoded = jsonDecode(response.body); يمكن أن يشير FormatException إلى أن جسم الاستجابة ليس JSON صالحاً لعقد API المتوقع.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "jsonDecode throws a FormatException if the string it tries to parse is not valid JSON.",
    "explanationAr": "تطرح jsonDecode استثناء FormatException إذا كانت السلسلة التي تحاول تحليلها ليست JSON صالحاً.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_74",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 74,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.74)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A network exercise should evaluate request, status, and JSON evidence together with the matching Flutter screen state.",
    "questionAr": "يجب أن يقيم تمرين الشبكة الطلب، والحالة، وأدلة JSON مع حالة شاشة Flutter المطابقة.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Validating a complete network request cycle involves checking the API call, response codes, data payload, and how the UI reflects this data.",
    "explanationAr": "يتضمن التحقق من صحة دورة طلب الشبكة الكاملة التحقق من استدعاء API، ورموز الاستجابة، وحمولة البيانات، وكيفية عكس واجهة المستخدم لهذه البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_75",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 75,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.75)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (snapshot.connectionState == ConnectionState.waiting) { return const Center(child: CircularProgressIndicator()); } This code correctly shows a loading indicator while the Future is still executing.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: if (snapshot.connectionState == ConnectionState.waiting) { return const Center(child: CircularProgressIndicator()); } يعرض هذا الكود بشكل صحيح مؤشر تحميل بينما لا يزال Future قيد التنفيذ.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "By checking ConnectionState.waiting, the UI cleanly presents a loading indicator (like CircularProgressIndicator) while the Future executes.",
    "explanationAr": "من خلال التحقق من ConnectionState.waiting، تقدم واجهة المستخدم بشكل نظيف مؤشر تحميل (مثل CircularProgressIndicator) أثناء تنفيذ Future.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_76",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 76,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.76)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final jsonText = await rootBundle .loadString('jsonfile/productlist.json'); The following code is sufficient to produce the loaded product screen even when jsonfile/productlist.json was not declared in pu bspec.yaml.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final jsonText = await rootBundle.loadString('jsonfile/productlist.json'); يكون الكود كافياً لتحميل شاشة المنتجات حتى عندما لا يتم الإعلان عن jsonfile/productlist.json في pubspec.yaml.",
    "options": null,
    "correctAnswer": "False",
    "correctionEn": "Assets must be explicitly declared in the pubspec.yaml file under the assets section; otherwise, rootBundle.loadString will fail.",
    "correctionAr": "يجب الإعلان عن الأصول صراحةً في ملف pubspec.yaml تحت قسم assets؛ وإلا سيفشل rootBundle.loadString.",
    "explanationEn": "Flutter requires all bundled assets to be registered in pubspec.yaml before they can be accessed at runtime.",
    "explanationAr": "يتطلب Flutter تسجيل جميع الأصول المجمعة في pubspec.yaml قبل إمكانية الوصول إليها في وقت التشغيل.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_77",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 77,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "JSON Parsing & Models",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.77)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (response.statusCode != 200) throw Exception(); final results = jsonDecode(response.body)['results'] as List<dynamic>; return results; The code ensures that the response is successful before attempting to parse the JSON and returns a dynamic list.",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: if (response.statusCode != 200) throw Exception(); final results = jsonDecode(response.body)['results'] as List<dynamic>; return results; يضمن الكود نجاح الاستجابة قبل محاولة تحليل JSON وإرجاع قائمة ديناميكية.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Because jsonDecode returns dynamic, a top-level JSON array must be explicitly cast to List<dynamic> to enable iterable methods like map().",
    "explanationAr": "نظراً لأن jsonDecode يُرجع قيمة ديناميكية، يجب تحويل مصفوفة JSON ذات المستوى الأعلى صراحةً إلى List<dynamic> لتمكين الطرق القابلة للتكرار مثل map().",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_78",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 78,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "Core Fundamentals",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.78)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (snapshot.hasError) { return Center(child: Text('${snapshot.error}')); } If snapshot.hasError is true, does this code represent an API error state in which a retry action could be added?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (snapshot.hasError) { return Center(child: Text('${snapshot.error}')); } If snapshot.hasError is true, does this code represent an (API) error state in which a retry action could be added?",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "When snapshot.hasError is true, it indicates that the Future completed with an error, such as a network failure. Displaying the error message and optionally adding a retry button is a standard error handling pattern.",
    "explanationAr": "عندما يكون snapshot.hasError صحيحًا (true)، فهذا يشير إلى أن الـ Future انتهى بخطأ، مثل فشل في الشبكة. عرض رسالة الخطأ وإضافة زر إعادة المحاولة اختياريًا هو نمط قياسي لمعالجة الأخطاء.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_79",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 79,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.79)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "When using asynchronous operations in Flutter like `await addData();`, checking `if (!mounted) return;` before calling `Navigator.pop(context)` is required to prevent context-related errors.",
    "questionAr": "عند استخدام عمليات غير متزامنة في Flutter مثل `await addData();`، يجب التحقق من `if (!mounted) return;` قبل استدعاء `Navigator.pop(context)` لمنع الأخطاء المتعلقة بالسياق (context).",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "Checking context.mounted is crucial after awaits to ensure the widget hasn't been disposed, preventing context-related crashes.",
    "explanationAr": "يعد التحقق من context.mounted أمراً حاسماً بعد awaits لضمان عدم التخلص من الويدجت (widget)، مما يمنع الانهيارات المتعلقة بالسياق.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_80",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 80,
    "section": "Q1. True / False",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "tf",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q1.80)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "A successful POST request to a delete endpoint (like deleteData.php) should typically be followed by a fresh GET request to reload the data and reflect the updated list in the UI.",
    "questionAr": "عادةً ما يجب أن يتبع طلب POST الناجح إلى نقطة نهاية الحذف (مثل deleteData.php) طلب GET جديد لإعادة تحميل البيانات وعكس القائمة المحدثة في واجهة المستخدم.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "While REST suggests using DELETE, many practical API implementations accept IDs via POST bodies to dedicated delete scripts.",
    "explanationAr": "بينما يقترح REST استخدام DELETE، تقبل العديد من تطبيقات API العملية المعرفات عبر أجسام POST إلى نصوص الحذف المخصصة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_81",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 81,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.81)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: final XFile? image = await picker.pickImage(source: ImageSource.gallery); if (image == null) return;",
    "questionAr": "تُستخدم دالة picker.pickImage() من حزمة image_picker لاختيار صورة من المعرض أو التقاطها بالكاميرا.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image upload via MultipartRequest / API is officially excluded from the final exam scope per Dr. Ruqaih Salman's syllabus announcement.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور والملفات عبر الـ (API) مستبعد رسمياً من الاختبار النهائي بقرار أستاذة المادة م/ رقية حسين سلمان.",
    "codeSnippet": null
  },
  {
    "id": "lab10_tf_82",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 82,
    "section": "Q1. True / False",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "tf",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q1.82)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 201) { throw Exception(...); } if (!mounted) return; await reloadImages(); After an upload response of 200 or 201 and reloadImages(), the refreshed server grid can disp lay the new image state.",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 201) { throw Exception(...); } if (!mounted) return; (await) reloadImages(); After an upload response of 200 or 201 and reloadImages(), the refreshed server grid can disp lay the new image state.",
    "options": null,
    "correctAnswer": "True",
    "correctionEn": null,
    "correctionAr": null,
    "explanationEn": "After a successful HTTP request (indicated by status 200 or 201), the app should refresh its local state by fetching the updated list from the server, provided the widget is still mounted.",
    "explanationAr": "بعد طلب HTTP ناجح (المشار إليه بالحالة 200 أو 201)، يجب على التطبيق تحديث حالته المحلية عن طريق جلب القائمة المحدثة من الخادم، بشرط أن تكون واجهة المستخدم (widget) لا تزال نشطة (mounted).",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_01",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 1,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.1)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which HTTP method is used to retrieve data from a REST PHP API?",
    "questionAr": "أي طريقة (HTTP) تُستخدم لاسترجاع وقراءة البيانات من واجهة برمجة تطبيقات PHP REST؟",
    "options": [
      {
        "label": "A",
        "textEn": "POST",
        "textAr": "طريقة (POST) (للإرسال والإنشاء)"
      },
      {
        "label": "B",
        "textEn": "PUT",
        "textAr": "طريقة (PUT) (للتحديث والتعديل)"
      },
      {
        "label": "C",
        "textEn": "GET",
        "textAr": "طريقة (GET) (للقراءة والاسترجاع)"
      },
      {
        "label": "D",
        "textEn": "DELETE",
        "textAr": "طريقة (DELETE) (للحذف)"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "GET is the standard HTTP method used to retrieve and read data from a REST endpoint without side effects.",
    "explanationAr": "طريقة (GET) هي الطريقة القياسية المخصصة في بروتوكول (HTTP) لقراءة واسترجاع البيانات من الخادم دون تعديلها.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_02",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 2,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.2)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does the http.post() method in Flutter do?",
    "questionAr": "ماذا تفعل الدالة http.post() في فلاتر؟",
    "options": [
      {
        "label": "A",
        "textEn": "Retrieves data from an API",
        "textAr": "تسترجع وتقرأ البيانات من الـ (API)"
      },
      {
        "label": "B",
        "textEn": "Deletes data from the server",
        "textAr": "تحذف البيانات من الخادم"
      },
      {
        "label": "C",
        "textEn": "Sends data to the server",
        "textAr": "ترسل بيانات جديدة إلى الخادم"
      },
      {
        "label": "D",
        "textEn": "Updates existing data",
        "textAr": "تحدث البيانات الموجودة على الخادم"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "`http.post()` transmits payload data in the HTTP request body to the server to create or process a resource.",
    "explanationAr": "تقوم دالة `http.post()` بإرسال البيانات والوسائط في متن الطلب (Body) إلى الخادم لإنشاء أو معالجة سجل جديد.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_03",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 3,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.3)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which HTTP status code indicates that the requested resource was not found?",
    "questionAr": "أي رمز حالة (HTTP) يشير إلى أن المورد المطلوب غير موجود على الخادم (Not Found)؟",
    "options": [
      {
        "label": "A",
        "textEn": "200",
        "textAr": "200 (نجاح الطلب OK)"
      },
      {
        "label": "B",
        "textEn": "404",
        "textAr": "404 (الصفحة أو المورد غير موجود Not Found)"
      },
      {
        "label": "C",
        "textEn": "500",
        "textAr": "500 (خطأ داخلي في الخادم Internal Server Error)"
      },
      {
        "label": "D",
        "textEn": "403",
        "textAr": "403"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "404 Not Found is the official HTTP standard code signifying that the target endpoint or record does not exist on the server.",
    "explanationAr": "رمز الحالة 404 Not Found هو الرمز القياسي الذي يعني أن المسار أو السجل المطلوب غير موجود على خادم الويب.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_04",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 4,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.4)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "How do you parse JSON data in Flutter after making an HTTP request?",
    "questionAr": "كيف تقوم بتحليل بيانات (JSON) في فلاتر بعد استلامها من طلب (HTTP)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Using jsonEncode",
        "textAr": "باستخدام jsonEncode"
      },
      {
        "label": "B",
        "textEn": "Using parseJson",
        "textAr": "باستخدام parseJson"
      },
      {
        "label": "C",
        "textEn": "Using jsonDecode",
        "textAr": "باستخدام jsonDecode"
      },
      {
        "label": "D",
        "textEn": "Using decodeJ son",
        "textAr": "باستخدام decodeJson"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "Using jsonDecode(response.body) from the dart:convert library converts the raw JSON string into a Dart Map or List.",
    "explanationAr": "باستخدام دالة jsonDecode(response.body) من مكتبة dart:convert لتحويل النص بصيغة (JSON) إلى قواميس Map أو قوائم List في دارت.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_05",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 5,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.5)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which package is commonly used in Flutter for making HTTP requests?",
    "questionAr": "أي حزمة هي الأكثر استخداماً في فلاتر لإرسال واستقبال طلبات (HTTP) للشبكة؟",
    "options": [
      {
        "label": "A",
        "textEn": "flutter_network",
        "textAr": "flutter_network"
      },
      {
        "label": "B",
        "textEn": "http_client",
        "textAr": "http_client"
      },
      {
        "label": "C",
        "textEn": "http",
        "textAr": "http"
      },
      {
        "label": "D",
        "textEn": "networking_flutter",
        "textAr": "networking_flutter"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "The official `http` package (package:http/http.dart) provides simple, robust methods (http.get, http.post, etc.) for communicating with REST backends.",
    "explanationAr": "حزمة `http` الرسمية (package:http/http.dart) هي الحزمة الأساسية المعتمدة في فلاتر لإجراء طلبات الشبكة (http.get, http.post).",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_06",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 6,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.6)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which HTTP method would you use to update an existing resource in a REST PHP API?",
    "questionAr": "سؤال متعلق بالمنهج: Which (HTTP) method would you use to update an existing resource in a REST PHP (API)?",
    "options": [
      {
        "label": "A",
        "textEn": "GET",
        "textAr": "طريقة (GET) (للقراءة والاسترجاع)"
      },
      {
        "label": "B",
        "textEn": "DELETE",
        "textAr": "طريقة (DELETE) (للحذف)"
      },
      {
        "label": "C",
        "textEn": "PUT",
        "textAr": "طريقة (PUT) (للتحديث والتعديل)"
      },
      {
        "label": "D",
        "textEn": "OPTIONS",
        "textAr": "OPTIONS"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "In RESTful APIs, the PUT method is specifically designated for updating or replacing an existing resource.",
    "explanationAr": "في واجهات برمجة تطبيقات RESTful، تم تخصيص طريقة PUT خصيصًا لتحديث أو استبدال مورد موجود.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_07",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 7,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.7)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What does a 500 Internal Server Error indicate when calling a REST PHP API?",
    "questionAr": "سؤال متعلق بالمنهج: What does a 500 Internal Server Error indicate when calling a REST PHP (API)?",
    "options": [
      {
        "label": "A",
        "textEn": "The resource was not found.",
        "textAr": "المورد غير موجود (not found)."
      },
      {
        "label": "B",
        "textEn": "There is a problem with the server.",
        "textAr": "توجد مشكلة في الخادم (server)."
      },
      {
        "label": "C",
        "textEn": "The request is forbidden.",
        "textAr": "الطلب محظور (forbidden)."
      },
      {
        "label": "D",
        "textEn": "The data was successfully updated.",
        "textAr": "تم تحديث البيانات بنجاح."
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "A 500 status code is a standard HTTP response indicating an unexpected condition on the server side prevented it from fulfilling the request.",
    "explanationAr": "رمز الحالة 500 هو استجابة HTTP قياسية تشير إلى حالة غير متوقعة على جانب الخادم (server) منعته من تلبية الطلب.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_08",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 8,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.8)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which of the following header s is required when sending JSON data to a REST PHP API?",
    "questionAr": "سؤال متعلق بالمنهج: Which of the following header s is required when sending (JSON) data to a REST PHP (API)?",
    "options": [
      {
        "label": "A",
        "textEn": "Accept: text/html",
        "textAr": "Accept: text/html"
      },
      {
        "label": "B",
        "textEn": "Content -Type: text/plain",
        "textAr": "Content-Type: text/plain"
      },
      {
        "label": "C",
        "textEn": "Content -Type: application/json",
        "textAr": "Content -Type: application/json"
      },
      {
        "label": "D",
        "textEn": "Accept -Encoding: gzip",
        "textAr": "Accept -Encoding: gzip"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "When sending JSON data to an API, the 'Content-Type: application/json' header informs the server that the request body contains JSON formatted data.",
    "explanationAr": "عند إرسال بيانات JSON إلى API، تُعلم ترويسة 'Content-Type: application/json' الخادم بأن جسم الطلب يحتوي على بيانات بتنسيق JSON.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_09",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 9,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.9)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What widget is commonly used in Flutter to handle asynchronous data from an HTTP request?",
    "questionAr": "سؤال متعلق بالمنهج: What widget is commonly used in Flutter to handle asynchronous data from an (HTTP) request?",
    "options": [
      {
        "label": "A",
        "textEn": "StreamBuilder",
        "textAr": "StreamBuilder"
      },
      {
        "label": "B",
        "textEn": "FutureBuilder",
        "textAr": "FutureBuilder"
      },
      {
        "label": "C",
        "textEn": "ListView.builder",
        "textAr": "ListView.builder"
      },
      {
        "label": "D",
        "textEn": "AsyncDataBuilder",
        "textAr": "AsyncDataBuilder"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "FutureBuilder is the standard Flutter widget designed to build UI reactively based on the state of a Future, which is returned by HTTP requests.",
    "explanationAr": "FutureBuilder هي ويدجت Flutter القياسية المصممة لبناء واجهة المستخدم بشكل تفاعلي بناءً على حالة Future، والتي يتم إرجاعها بواسطة طلبات HTTP.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_10",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 10,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.10)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which function would you use to send data in a URL-encoded format in Flutter?",
    "questionAr": "أي دالة ستستخدمها لإرسال البيانات بتنسيق مشفر عبر الرابط (URL-encoded) في Flutter؟",
    "options": [
      {
        "label": "A",
        "textEn": "http.get",
        "textAr": "http.get"
      },
      {
        "label": "B",
        "textEn": "http.post() with application/x -www-form-urlencoded header",
        "textAr": "http.post() مع ترويسة (header) application/x -www-form-urlencoded"
      },
      {
        "label": "C",
        "textEn": "http.delete",
        "textAr": "http.delete"
      },
      {
        "label": "D",
        "textEn": "http .put",
        "textAr": "http .put"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "To send URL-encoded form data, the application/x-www-form-urlencoded header must be specified in the POST request.",
    "explanationAr": "لإرسال بيانات نموذج مشفرة عبر URL، يجب تحديد ترويسة application/x-www-form-urlencoded في طلب POST.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_11",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 11,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.11)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which of the following enables seamless communication between different software applications, allowing them to exchange data and functionality?",
    "questionAr": "أي مما يلي يتيح اتصالاً سلساً بين تطبيقات البرامج المختلفة، مما يسمح لها بتبادل البيانات والوظائف؟",
    "options": [
      {
        "label": "A",
        "textEn": "mySql",
        "textAr": "mySql"
      },
      {
        "label": "B",
        "textEn": "widgets",
        "textAr": "ويدجت (widgets)"
      },
      {
        "label": "C",
        "textEn": "APIs",
        "textAr": "APIs"
      },
      {
        "label": "D",
        "textEn": "firebase",
        "textAr": "firebase"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "APIs (Application Programming Interfaces) act as intermediaries that allow independent software systems to communicate and share data.",
    "explanationAr": "تعمل واجهات برمجة التطبيقات (APIs) كوسطاء تسمح لأنظمة البرامج المستقلة بالتواصل ومشاركة البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_12",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 12,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.12)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An API serves as a bridge that allows different software applications to communicate with each other. In the context of mobile app development, APIs are often used to fetch data from ……………………………………….",
    "questionAr": "سؤال متعلق بالمنهج: An (API) serves as a bridge that allows different software applications to communicate with each other. In the (context) of mobile app development, APIs are often used to fetch data from ……………………………………….",
    "options": [
      {
        "label": "A",
        "textEn": "Server",
        "textAr": "خادم (Server)"
      },
      {
        "label": "B",
        "textEn": "database",
        "textAr": "قاعدة بيانات (database)"
      },
      {
        "label": "C",
        "textEn": "A or B",
        "textAr": "أ أو ب (A or B)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "In mobile development, APIs are the standard method for clients (like a Flutter app) to fetch data securely from a backend server over the internet.",
    "explanationAr": "في تطوير الهواتف المحمولة، تعد واجهات برمجة التطبيقات (APIs) الطريقة القياسية للعملاء (مثل تطبيق Flutter) لجلب البيانات بأمان من خادم خلفي عبر الإنترنت.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_13",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 13,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.13)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To make HTTP requests, add the ……………….. package to your pubspec. yaml file and run flutter pub get",
    "questionAr": "سؤال متعلق بالمنهج: To make (HTTP) requests, add the ……………….. package to your pubspec. yaml file and run flutter pub get",
    "options": [
      {
        "label": "A",
        "textEn": "http",
        "textAr": "http"
      },
      {
        "label": "B",
        "textEn": "firebase",
        "textAr": "firebase"
      },
      {
        "label": "C",
        "textEn": "mySql",
        "textAr": "mySql"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The `http` package is the official and most common Dart package used for executing HTTP requests like GET and POST in Flutter applications.",
    "explanationAr": "حزمة `http` هي الحزمة الرسمية والأكثر شيوعًا في Dart المستخدمة لتنفيذ طلبات HTTP مثل GET و POST في تطبيقات Flutter.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_14",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 14,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.14)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "When a Flutter app sends a GET request to an API endpoint, it receives a response containing the requested data, typical l y in ………………………. format.",
    "questionAr": "سؤال متعلق بالمنهج: When a Flutter app sends a (GET) request to an (API) endpoint, it receives a response containing the requested data, typical l y in ………………………. format.",
    "options": [
      {
        "label": "A",
        "textEn": "JSON",
        "textAr": "JSON"
      },
      {
        "label": "B",
        "textEn": "XML",
        "textAr": "XML"
      },
      {
        "label": "C",
        "textEn": "String",
        "textAr": "String"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "JSON (JavaScript Object Notation) is the universal, lightweight standard format used by REST APIs to send and receive structured data over HTTP.",
    "explanationAr": "يعتبر JSON هو التنسيق القياسي العالمي الخفيف المستخدم من قبل واجهات REST API لإرسال واستقبال البيانات المهيكلة عبر HTTP.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_15",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 15,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.15)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "To fetch and display data from various sources dynamically in a mobile app, developers need to understand the concepts of:",
    "questionAr": "لجلب البيانات وعرضها من مصادر مختلفة ديناميكيًا في تطبيق الهاتف، يحتاج المطورون إلى فهم مفاهيم:",
    "options": [
      {
        "label": "A",
        "textEn": "APIs",
        "textAr": "APIs"
      },
      {
        "label": "B",
        "textEn": "HTTP requests",
        "textAr": "طلبات (HTTP)"
      },
      {
        "label": "C",
        "textEn": "data parsi ng",
        "textAr": "تحليل البيانات (data parsing)"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "To build dynamic apps, a developer must understand APIs to fetch data, HTTP requests to communicate, and data parsing to convert the responses into usable models.",
    "explanationAr": "لبناء تطبيقات ديناميكية، يجب على المطور فهم واجهات (APIs) لجلب البيانات، وطلبات HTTP للتواصل، وتحليل البيانات (parsing) لتحويل الاستجابات إلى نماذج قابلة للاستخدام.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_16",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 16,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.16)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is the process of converting a JSON string response into Dart objects for use in your app called?",
    "questionAr": "ماذا تسمى عملية تحويل استجابة نصية بصيغة JSON إلى كائنات Dart لاستخدامها في تطبيقك؟",
    "options": [
      {
        "label": "A",
        "textEn": "UnParsing JSON",
        "textAr": "عكس تحليل (JSON) (UnParsing JSON)"
      },
      {
        "label": "B",
        "textEn": "Convert JSON",
        "textAr": "تحويل (JSON)"
      },
      {
        "label": "C",
        "textEn": "Parsing JSON",
        "textAr": "تحليل (JSON)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "Parsing JSON is the essential process of converting raw string data received from an API into structured Dart objects for easy manipulation.",
    "explanationAr": "تحليل JSON هو العملية الأساسية لتحويل البيانات النصية الخام المستلمة من واجهة برمجة التطبيقات إلى كائنات Dart منظمة لسهولة التعامل معها.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_17",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 17,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.17)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "There are many benefits to using an API in Flutter. APIs allow you to:",
    "questionAr": "سؤال متعلق بالمنهج: There are many benefits to using an (API) in Flutter. APIs allow you to:",
    "options": [
      {
        "label": "A",
        "textEn": "Access data and functionality from other applications",
        "textAr": "الوصول إلى البيانات والوظائف من التطبيقات الأخرى"
      },
      {
        "label": "B",
        "textEn": "Build complex and powerful applications without having to develop all of the functionality yourself",
        "textAr": "بناء تطبيقات معقدة وقوية دون الحاجة إلى تطوير جميع الوظائف بنفسك"
      },
      {
        "label": "C",
        "textEn": "Make your apps more scalable and flex ible",
        "textAr": "جعل تطبيقاتك أكثر قابلية للتوسع والمرونة"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "APIs abstract backend logic, allowing developers to access external data securely and scale mobile applications efficiently.",
    "explanationAr": "تقوم APIs بتجريد منطق الواجهة الخلفية، مما يسمح للمطورين بالوصول إلى البيانات الخارجية بشكل آمن وتوسيع نطاق تطبيقات الهاتف المحمول بكفاءة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_18",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 18,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.18)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An API request typically includes a…………………………………………………………...",
    "questionAr": "سؤال متعلق بالمنهج: An (API) request typically includes a…………………………………………………………...",
    "options": [
      {
        "label": "A",
        "textEn": "URL",
        "textAr": "URL"
      },
      {
        "label": "B",
        "textEn": "an HTTP method (GET, POST, PUT, PATCH, or DELETE)",
        "textAr": "طريقة (HTTP) (GET, (POST), (PUT), PATCH, أو DELETE)"
      },
      {
        "label": "C",
        "textEn": "request parameters",
        "textAr": "محددات الطلب (request parameters)"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "A complete HTTP API request structurally consists of a URL endpoint, an HTTP method, headers, and occasionally a request body or parameters.",
    "explanationAr": "يتكون طلب واجهة برمجة تطبيقات HTTP المكتمل هيكليًا من نقطة نهاية URL وطريقة HTTP وترويسات وأحيانًا جسم الطلب أو محدداته.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_19",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 19,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.19)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What is inside curly brackets is called a JSON object, and it is always made up of a string, which is the key of the field, and a value which can be a string, a number, a Boolean, a list, null, or another object.",
    "questionAr": "ما يوجد داخل الأقواس المعقوفة يُسمى كائن (JSON) (JSON object)، وهو يتكون دائماً من نص وهو مفتاح الحقل، وقيمة يمكن أن تكون نصاً، أو رقماً، أو قيمة منطقية (Boolean)، أو قائمة (list)، أو null، أو كائناً آخر.",
    "options": [
      {
        "label": "A",
        "textEn": "json array",
        "textAr": "مصفوفة json"
      },
      {
        "label": "B",
        "textEn": "json item",
        "textAr": "عنصر json"
      },
      {
        "label": "C",
        "textEn": "json object",
        "textAr": "كائن json (json object)"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "In JSON syntax, curly brackets {} denote an object, which is a collection of key-value pairs representing data.",
    "explanationAr": "في بناء جملة JSON، تشير الأقواس المتعرجة {} إلى كائن (object)، وهو مجموعة من أزواج المفتاح والقيمة التي تمثل البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_20",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 20,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.20)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which built-in Dart library provides facilities for manually parsing strings like JSON?",
    "questionAr": "أي مكتبة Dart مدمجة توفر تسهيلات لتحليل النصوص يدوياً مثل JSON؟",
    "options": [
      {
        "label": "A",
        "textEn": "\"dart:convert\",",
        "textAr": "\"dart:convert\","
      },
      {
        "label": "B",
        "textEn": "\"flutter:convert\",",
        "textAr": "\"flutter:convert\","
      },
      {
        "label": "C",
        "textEn": "\"io:convert\",",
        "textAr": "\"io:convert\","
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The 'dart:convert' library provides built-in encoders and decoders for converting between JSON strings and Dart data structures.",
    "explanationAr": "توفر مكتبة 'dart:convert' أدوات تشفير وفك تشفير مدمجة للتحويل بين سلاسل JSON وهياكل بيانات Dart.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_21",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 21,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.21)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Because `http.get` returns a `Future`, which keyword is placed directly before it to pause execution until the network request finishes?",
    "questionAr": "لأن `http.get` تعيد `Future`، ما هي الكلمة المفتاحية التي توضع قبلها مباشرة لإيقاف التنفيذ مؤقتاً حتى ينتهي طلب الشبكة؟",
    "options": [
      {
        "label": "A",
        "textEn": "await",
        "textAr": "await"
      },
      {
        "label": "B",
        "textEn": "async",
        "textAr": "async"
      },
      {
        "label": "C",
        "textEn": "yield",
        "textAr": "yield"
      },
      {
        "label": "D",
        "textEn": "then",
        "textAr": "then"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The 'http' package is the most common Dart package used in Flutter for making network requests and interacting with REST APIs.",
    "explanationAr": "حزمة 'http' هي أكثر حزم Dart شيوعًا والمستخدمة في Flutter لإجراء طلبات الشبكة والتفاعل مع REST APIs.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_22",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 22,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.22)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In JSON syntax, what is represented by curly brackets {}?",
    "questionAr": "في بناء جملة JSON، ماذا تمثل الأقواس المعقوفة {}؟",
    "options": [
      {
        "label": "A",
        "textEn": "json object",
        "textAr": "كائن json (json object)"
      },
      {
        "label": "B",
        "textEn": "key-value item",
        "textAr": "عنصر key-value (مفتاح وقيمة)"
      },
      {
        "label": "C",
        "textEn": "json list",
        "textAr": "قائمة json (json list)"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "In standard JSON syntax, curly brackets {} define a JSON Object, which contains key-value pairs, whereas square brackets [] define a JSON array.",
    "explanationAr": "في بناء جملة JSON القياسي، تحدد الأقواس المتعرجة {} كائن JSON (Object) الذي يحتوي على أزواج من المفاتيح والقيم، بينما تحدد الأقواس المربعة [] مصفوفة JSON.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_23",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 23,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.23)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Fetching data from APIs is a common requirement in Flutter apps. To interact with APIs, you can use packages like the http package.",
    "questionAr": "جلب البيانات من الـ APIs هو متطلب شائع في تطبيقات Flutter. للتفاعل مع الـ APIs، يمكنك استخدام حزم مثل حزمة http.",
    "options": [
      {
        "label": "A",
        "textEn": "dio",
        "textAr": "dio"
      },
      {
        "label": "B",
        "textEn": "http",
        "textAr": "http"
      },
      {
        "label": "C",
        "textEn": "chopper",
        "textAr": "chopper"
      },
      {
        "label": "D",
        "textEn": "All of the mentioned",
        "textAr": "جميع ما ذُكر"
      }
    ],
    "correctAnswer": "D",
    "explanationEn": "While `http` is the most common package, developers can also use `dio` for advanced features or `chopper` for code-generation based HTTP clients.",
    "explanationAr": "بينما تعد حزمة `http` هي الأكثر شيوعًا، يمكن للمطورين أيضًا استخدام `dio` للميزات المتقدمة أو `chopper` لعملاء HTTP المعتمدين على توليد الكود.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_24",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 24,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.24)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: import 'package:http/http.dart' as httproq; Which line correctly retrieves data from the server?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: import 'package:http/http.dart' as httproq; أي سطر يسترجع البيانات من الخادم بشكل صحيح؟",
    "options": [
      {
        "label": "A",
        "textEn": "final response = await httproq.get(Uri.parse('https://my_store/getDataRoq.php'));",
        "textAr": "final response = await httproq.get(Uri.parse('https://my_store/getDataRoq.php'));"
      },
      {
        "label": "B",
        "textEn": "final response = await httproq.post(Uri.parse('https://my_store/getDataRoq.php'));",
        "textAr": "final response = await httproq.post(Uri.parse('https://my_store/getDataRoq.php'));"
      },
      {
        "label": "C",
        "textEn": "final response = await post(Uri.parse('https://my_store/getDataRoq.php'));",
        "textAr": "final response = await post(Uri.parse('https://my_store/getDataRoq.php'));"
      },
      {
        "label": "D",
        "textEn": "final response = await http,get(Uri.parse('https://my_store/getDataRoq.php'));",
        "textAr": "final response = await http,get(Uri.parse('https://my_store/getDataRoq.php'));"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The http.get() method is specifically designed to retrieve data from a specified URI, making it the correct choice for fetching server data.",
    "explanationAr": "تم تصميم دالة http.get() خصيصًا لاسترداد البيانات من URI محدد، مما يجعلها الخيار الصحيح لجلب بيانات الخادم.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_25",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 25,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.25)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: import 'package:http/http.dart' as httproq; final item = {'itemcode': code, 'itemname': name, 'price': price, 'stock': stock}; Which line correctly sends the item fields to the server?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: import 'package:http/http.dart' as httproq; final item = {'itemcode': code, 'itemname': name, 'price': price, 'stock': stock}; أي سطر يرسل حقول العنصر إلى الخادم بشكل صحيح؟",
    "options": [
      {
        "label": "A",
        "textEn": "httproq.post(Uri.parse('https://my_store/addDataRoq.php'), body: item);",
        "textAr": "httproq.post(Uri.parse('https://my_store/addDataRoq.php'), body: item);"
      },
      {
        "label": "B",
        "textEn": "httproq.get(Uri.parse('https://my_store/addDataRoq.php'), body: item);",
        "textAr": "httproq.get(Uri.parse('https://my_store/addDataRoq.php'), body: item);"
      },
      {
        "label": "C",
        "textEn": "httproq.post(Uri.parse('https://my_store/addDataRoq.php'));",
        "textAr": "httproq.post(Uri.parse('https://my_store/addDataRoq.php'));"
      },
      {
        "label": "D",
        "textEn": "None of the mentioned",
        "textAr": "لا شيء مما ذُكر"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The http.post() method is used to send (or create) data on the server. The data payload is passed into the `body` parameter.",
    "explanationAr": "تُستخدم دالة http.post() لإرسال (أو إنشاء) بيانات على الخادم. يتم تمرير حمولة البيانات في معامل `body`.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_26",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 26,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.26)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "An API interaction is described by method, endpoint, headers, body, status, and response. Which item is NOT one of these parts?",
    "questionAr": "سؤال متعلق بالمنهج: An (API) interaction is described by method, endpoint, headers, body, status, and response. Which item is NOT one of these parts?",
    "options": [
      {
        "label": "A",
        "textEn": "Method",
        "textAr": "Method"
      },
      {
        "label": "B",
        "textEn": "Endpoint",
        "textAr": "نقطة نهاية (Endpoint)"
      },
      {
        "label": "C",
        "textEn": "Widget tree depth",
        "textAr": "عمق شجرة الـ Widget"
      },
      {
        "label": "D",
        "textEn": "Status",
        "textAr": "حالة (Status)"
      }
    ],
    "correctAnswer": "C",
    "explanationEn": "API interactions involve network protocols and payloads; Flutter-specific concepts like 'Widget tree depth' are unrelated to the network layer.",
    "explanationAr": "تتضمن تفاعلات API بروتوكولات الشبكة وحمولاتها؛ مفاهيم Flutter الخاصة مثل 'عمق شجرة الـ Widget' لا علاقة لها بطبقة الشبكة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_27",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 27,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.27)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "Suppose a Flutter client sends HTTP requests to a PHP API , and the PHP API executes SQL against MySQL. Which boundary should own raw SQL and database credentials?",
    "questionAr": "سؤال متعلق بالمنهج: Suppose a Flutter client sends (HTTP) requests to a PHP (API) , and the PHP (API) executes SQL against MySQL. Which boundary should own raw SQL and database credentials?",
    "options": [
      {
        "label": "A",
        "textEn": "Flutter client",
        "textAr": "عميل (client) Flutter"
      },
      {
        "label": "B",
        "textEn": "PHP API/server boundary",
        "textAr": "حدود PHP (API)/server"
      },
      {
        "label": "C",
        "textEn": "FutureBuilder",
        "textAr": "FutureBuilder"
      },
      {
        "label": "D",
        "textEn": "ImagePicker",
        "textAr": "ImagePicker"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "For security reasons, database credentials and raw SQL queries must be confined to the server side (PHP API) rather than exposed in the client code.",
    "explanationAr": "لأسباب أمنية، يجب أن تقتصر بيانات اعتماد قاعدة البيانات واستعلامات SQL الخام على جانب الخادم (PHP API) بدلاً من كشفها في كود العميل.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_28",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 28,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.28)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which HTTP method is normally associated with updating selected field s of an existing resource?",
    "questionAr": "سؤال متعلق بالمنهج: Which (HTTP) method is normally associated with updating selected field s of an existing resource?",
    "options": [
      {
        "label": "A",
        "textEn": "PATCH",
        "textAr": "PATCH"
      },
      {
        "label": "B",
        "textEn": "GET",
        "textAr": "طريقة (GET) (للقراءة والاسترجاع)"
      },
      {
        "label": "C",
        "textEn": "POST",
        "textAr": "طريقة (POST) (للإرسال والإنشاء)"
      },
      {
        "label": "D",
        "textEn": "DELETE",
        "textAr": "طريقة (DELETE) (للحذف)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The PATCH HTTP method is semantically designed to apply partial modifications to a resource, unlike PUT which replaces it entirely.",
    "explanationAr": "تم تصميم طريقة HTTP PATCH دلاليًا لتطبيق تعديلات جزئية على مورد، على عكس PUT التي تستبدله بالكامل.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_29",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 29,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.29)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which status code is commonly used to indicate that a create operation succeeded?",
    "questionAr": "أي رمز حالة (status code) يُستخدم عادةً للإشارة إلى أن عملية الإنشاء (create) نجحت؟",
    "options": [
      {
        "label": "A",
        "textEn": "201",
        "textAr": "201 (تم إنشاء السجل بنجاح Created)"
      },
      {
        "label": "B",
        "textEn": "404",
        "textAr": "404 (الصفحة أو المورد غير موجود Not Found)"
      },
      {
        "label": "C",
        "textEn": "500",
        "textAr": "500 (خطأ داخلي في الخادم Internal Server Error)"
      },
      {
        "label": "D",
        "textEn": "302 only",
        "textAr": "302 فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The HTTP 201 Created status code explicitly indicates that a request has succeeded and led to the creation of a new resource.",
    "explanationAr": "يشير رمز حالة HTTP 201 Created بوضوح إلى نجاح الطلب وأدى إلى إنشاء مورد جديد.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_30",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 30,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.30)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 201) { throw Exception('Request failed'); }",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: if (response.statusCode != 200 && response.statusCode != 201) { throw Exception('Request failed'); }",
    "options": [
      {
        "label": "A",
        "textEn": "Validate the API -defined success status",
        "textAr": "التحقق من حالة النجاح المحددة بواسطة (API)"
      },
      {
        "label": "B",
        "textEn": "Always call setSta te first",
        "textAr": "استدعاء setState أولاً دائماً"
      },
      {
        "label": "C",
        "textEn": "Open MySQL directly",
        "textAr": "فتح MySQL مباشرة"
      },
      {
        "label": "D",
        "textEn": "Ignore the response body",
        "textAr": "تجاهل جسم الاستجابة (response body)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Checking the response.statusCode against 200 (OK) and 201 (Created) is essential to validate that the API successfully processed the request before proceeding.",
    "explanationAr": "يعد التحقق من response.statusCode مقابل 200 (OK) و 201 (Created) أمرًا ضروريًا للتحقق من أن واجهة API عالجت الطلب بنجاح قبل المتابعة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_31",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 31,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.31)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final decoded = jsonDecode('[1, 2, 3]'); After jsonDecode runs, which Dart structure naturally represents the top -level JSON array?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final decoded = jsonDecode('[1, 2, 3]'); After jsonDecode runs, which Dart structure naturally represents the top -level (JSON) array?",
    "options": [
      {
        "label": "A",
        "textEn": "List",
        "textAr": "List"
      },
      {
        "label": "B",
        "textEn": "Scaffold",
        "textAr": "Scaffold"
      },
      {
        "label": "C",
        "textEn": "ThemeData",
        "textAr": "ThemeData"
      },
      {
        "label": "D",
        "textEn": "Route",
        "textAr": "مسار (Route)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Since the JSON string represents an array (enclosed in []), jsonDecode will naturally parse it into a standard Dart List.",
    "explanationAr": "نظرًا لأن السلسلة النصية JSON تمثل مصفوفة (محاطة بـ [])، فإن (jsonDecode) سيحللها بشكل طبيعي إلى قائمة (List) قياسية في Dart.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_32",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 32,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.32)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which JSON value is valid in a Dart value decoded from JSON?",
    "questionAr": "سؤال متعلق بالمنهج: Which (JSON) value is valid in a Dart value decoded from (JSON)?",
    "options": [
      {
        "label": "A",
        "textEn": "null",
        "textAr": "null"
      },
      {
        "label": "B",
        "textEn": "Only strings",
        "textAr": "نصوص (strings) فقط"
      },
      {
        "label": "C",
        "textEn": "Only integers",
        "textAr": "الأعداد الصحيحة (integers) فقط"
      },
      {
        "label": "D",
        "textEn": "Only arrays",
        "textAr": "المصفوفات (arrays) فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When decoding JSON in Dart using jsonDecode, the resulting Dart values can be a Map, List, String, int, double, \bool, or \null. Therefore, \null is a valid decoded value.",
    "explanationAr": "عند فك تشفير JSON في Dart باستخدام jsonDecode، يمكن أن تكون قيم Dart الناتجة Map أو List أو String أو int أو double أو \bool أو \null. لذلك، \null هي قيمة صالحة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_33",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 33,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.33)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: class ProductDataModel { final String? oldPrice; final String? price; ProductDataModel.fromJson(Map<String, dynamic> json) : oldPrice = json['oldPrice'] as String?, body: {'id': id.toString(), 'name': 'Mouse', 'price': '25'}, ); Which endpoint and method update an existing inventory item? body: {'id': id.toString(), 'name': 'Mouse', 'price': '25'}, ); Which endpoint and method update an existing inventory item?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: class ProductDataModel { final String? oldPrice; final String? price; ProductDataModel.fromJson(Map<String, dynamic> json) : oldPrice = json['oldPrice'] as String?, body: {'id': id.toString(), 'name': 'Mouse', 'price': '25'}, ); Which endpoint and method update an existing inventory item? body: {'id': id.toString(), 'name': 'Mouse', 'price': '25'}, ); Which endpoint and method update an existing inventory item?",
    "options": [
      {
        "label": "A",
        "textEn": "The JSON values are stored as strings",
        "textAr": "يتم تخزين قيم (JSON) كسلاسل نصية (strings)"
      },
      {
        "label": "B",
        "textEn": "Flutter cannot store doubles",
        "textAr": "Flutter لا يمكنه تخزين قيم doubles"
      },
      {
        "label": "C",
        "textEn": "JSON forbids numeric values",
        "textAr": "(JSON) يمنع القيم الرقمية"
      },
      {
        "label": "D",
        "textEn": "ListView requires strings",
        "textAr": "ListView تتطلب نصوص (strings)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When declaring final fields as String?, JSON properties must be parsed and safely cast using 'as String?' to maintain type safety in Dart.",
    "explanationAr": "عند الإعلان عن الحقول النهائية كـ String؟، يجب تحليل خصائص JSON وصبها (cast) بأمان باستخدام 'as String?' للحفاظ على سلامة النوع في Dart.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_34",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 34,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.34)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final body = {'name': 'Mouse', 'price': '25'}; final text = jsonEncode(body); Which function serializes the Dart map -like value into JSON text?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final body = {'name': 'Mouse', 'price': '25'}; final text = jsonEncode(body); Which function serializes the Dart map -like value into (JSON) text?",
    "options": [
      {
        "label": "A",
        "textEn": "jsonEncode",
        "textAr": "jsonEncode"
      },
      {
        "label": "B",
        "textEn": "jsonDecode",
        "textAr": "jsonDecode"
      },
      {
        "label": "C",
        "textEn": "rootBundle.loadString",
        "textAr": "rootBundle.loadString لقراءة الأصول المحلية"
      },
      {
        "label": "D",
        "textEn": "Uri.parse",
        "textAr": "Uri.parse"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The jsonEncode function serializes a structured Dart map or list into a plain JSON string, making it ready for network transmission.",
    "explanationAr": "تقوم دالة jsonEncode بتسلسل خريطة Dart أو قائمة منظمة إلى سلسلة JSON عادية، مما يجعلها جاهزة للإرسال عبر الشبكة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_35",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 35,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.35)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: class ProductDataModel { final String? imageURL; ProductDataModel.fromJson(Map<String, dynamic> json) : imageURL = json['imageUrl'] as String?; } Which key-to-field mapping is used by this fromJson constructor? : imageURL = json['imageUrl'] as String?; } Which key-to-field mapping is used by this fromJson constructor?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: class ProductDataModel { final String? imageURL; ProductDataModel.fromJson(Map<String, dynamic> json) : imageURL = json['imageUrl'] as String?; } Which key-to-field mapping is used by this fromJson constructor? : imageURL = json['imageUrl'] as String?; } Which key-to-field mapping is used by this fromJson constructor?",
    "options": [
      {
        "label": "A",
        "textEn": "imageUrl → imageURL",
        "textAr": "imageUrl → imageURL"
      },
      {
        "label": "B",
        "textEn": "price → stock",
        "textAr": "price → stock"
      },
      {
        "label": "C",
        "textEn": "name → id",
        "textAr": "name → id"
      },
      {
        "label": "D",
        "textEn": "category → imageURL",
        "textAr": "category → imageURL"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The fromJson constructor is mapping the JSON key \"imageUrl\" (from the raw map) directly to the Dart class property \"imageURL\".",
    "explanationAr": "يقوم الباني fromJson بربط مفتاح JSON المسمى \"imageUrl\" (من الخريطة الخام) مباشرة بخصيصة الفئة في Dart والمسماة \"imageURL\".",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_36",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 36,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.36)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final jsonText = await rootBundle.loadString('jsonfile/productlist.json'); Which asset path must be registered in pubspec.yaml so that this code can load the file?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final jsonText = (await) rootBundle.loadString('jsonfile/productlist.json'); Which asset path must be registered in pubspec.yaml so that this code can load the file?",
    "options": [
      {
        "label": "A",
        "textEn": "jsonfile/productlist.json",
        "textAr": "jsonfile/productlist.json"
      },
      {
        "label": "B",
        "textEn": "lib/productlist.json",
        "textAr": "lib/productlist.json"
      },
      {
        "label": "C",
        "textEn": "android/product.json",
        "textAr": "android/product.json"
      },
      {
        "label": "D",
        "textEn": "http://productlist.json",
        "textAr": "http://productlist.json"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To load a local asset using \nootBundle.loadString, the exact path used in the code must be declared in the \u0007ssets section of the pubspec.yaml file.",
    "explanationAr": "لتحميل أصل محلي باستخدام \nootBundle.loadString، يجب الإعلان عن المسار الدقيق في قسم \u0007ssets من ملف pubspec.yaml.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_37",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 37,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.37)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final jsonText = await rootBundle.loadString('jsonfile/productlist.json'); Which API loads the registered local JSON asset as text?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final jsonText = (await) rootBundle.loadString('jsonfile/productlist.json'); Which (API) loads the registered local (JSON) asset as text?",
    "options": [
      {
        "label": "A",
        "textEn": "rootBundle.loadString",
        "textAr": "rootBundle.loadString لقراءة الأصول المحلية"
      },
      {
        "label": "B",
        "textEn": "http.get",
        "textAr": "http.get"
      },
      {
        "label": "C",
        "textEn": "File.readAsBytes only",
        "textAr": "File.readAsBytes فقط"
      },
      {
        "label": "D",
        "textEn": "Navigator.push",
        "textAr": "Navigator.push"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The \nootBundle.loadString function is used to read text assets bundled with the application at runtime, such as local JSON files.",
    "explanationAr": "تُستخدم الدالة \nootBundle.loadString لقراءة الأصول النصية المجمعة مع التطبيق في وقت التشغيل، مثل ملفات JSON المحلية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_38",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 38,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.38)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final decoded = jsonDecode(jsonText) as List<dynamic>; final products = decoded.map((item) => ProductDataModel.fromJson(item)).toList(); What type is the decoded local JSON value cast to before its items are mapped?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final decoded = jsonDecode(jsonText) as List<dynamic>; final products = decoded.map((item) => ProductDataModel.fromJson(item)).toList(); What type is the decoded local (JSON) value cast to before its items are mapped?",
    "options": [
      {
        "label": "A",
        "textEn": "List<dynamic>",
        "textAr": "List<dynamic>"
      },
      {
        "label": "B",
        "textEn": "String only",
        "textAr": "String فقط"
      },
      {
        "label": "C",
        "textEn": "BuildContext",
        "textAr": "BuildContext"
      },
      {
        "label": "D",
        "textEn": "FutureBuilder",
        "textAr": "FutureBuilder"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When decoding a top-level JSON array, it initially resolves to List<dynamic>, which must be cast before mapping to specific model instances.",
    "explanationAr": "عند فك تشفير مصفوفة JSON ذات المستوى الأعلى، يتم حلها مبدئيًا إلى List<dynamic>، والتي يجب صبها (cast) قبل التعيين إلى مثيلات نموذج محددة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_39",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 39,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.39)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: FutureBuilder<List<ProductDataModel>>( future: readJsonData(), builder: (context, snapsho t) => const SizedBox(), ); Which expression is supplied to the FutureBuilder future property?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: (FutureBuilder)<List<ProductDataModel>>( future: readJsonData(), builder: (context, snapsho t) => const SizedBox(), ); Which expression is supplied to the (FutureBuilder) future property?",
    "options": [
      {
        "label": "A",
        "textEn": "readJsonData",
        "textAr": "readJsonData"
      },
      {
        "label": "B",
        "textEn": "Navigator.push",
        "textAr": "Navigator.push"
      },
      {
        "label": "C",
        "textEn": "jsonEncode",
        "textAr": "jsonEncode"
      },
      {
        "label": "D",
        "textEn": "mysql.connect",
        "textAr": "mysql.connect"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The \future property of a FutureBuilder expects an asynchronous operation (a Future). In this snippet, the function call \neadJsonData() is provided to fetch the data.",
    "explanationAr": "تتوقع خاصية \future في FutureBuilder عملية غير متزامنة (Future). في هذا المقتطف، يتم توفير استدعاء الدالة \neadJsonData() لجلب البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_40",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 40,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.40)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (snapshot.connectionState == ConnectionStat e.waiting) { return const Center(child: CircularProgressIndicator()); } What should the FutureBuilder disp lay while the asset Future is waiting?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (snapshot.connectionState == ConnectionStat e.waiting) { return const Center(child: CircularProgressIndicator()); } What should the (FutureBuilder) disp lay while the asset (Future) is waiting?",
    "options": [
      {
        "label": "A",
        "textEn": "CircularProgressIndicator",
        "textAr": "CircularProgressIndicator"
      },
      {
        "label": "B",
        "textEn": "A DELETE button",
        "textAr": "زر (DELETE)"
      },
      {
        "label": "C",
        "textEn": "MySQL credentials",
        "textAr": "بيانات اعتماد MySQL"
      },
      {
        "label": "D",
        "textEn": "A password hash",
        "textAr": "تجزئة (hash) كلمة المرور"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Checking ConnectionState.waiting is the conventional way to display a loading indicator, such as CircularProgressIndicator, while an asynchronous Future is resolving.",
    "explanationAr": "يعد التحقق من ConnectionState.waiting الطريقة التقليدية لعرض مؤشر تحميل، مثل CircularProgressIndicator، أثناء حل Future غير المتزامن.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_41",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 41,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.41)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final items = snapshot.data ?? const <ProductDataModel>[]; if (items.isEmpty) { return const Center(child: Text('No products found')); } What is the intended UI when the decoded product list is empty?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final items = snapshot.data ?? const <ProductDataModel>[]; if (items.isEmpty) { return const Center(child: Text('No products found')); } ما هي واجهة المستخدم (UI) المقصودة عندما تكون قائمة المنتجات التي تم فك تشفيرها فارغة؟",
    "options": [
      {
        "label": "A",
        "textEn": "No products found",
        "textAr": "لم يتم العثور على منتجات"
      },
      {
        "label": "B",
        "textEn": "Throw 500",
        "textAr": "إرجاع 500 (Throw 500)"
      },
      {
        "label": "C",
        "textEn": "Open upload picker",
        "textAr": "فتح منتقي الرفع (upload picker)"
      },
      {
        "label": "D",
        "textEn": "Show login",
        "textAr": "إظهار تسجيل الدخول (login)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The provided code snippet explicitly checks if the list is empty, and if so, returns a Center widget containing a Text widget displaying \"No products found\".",
    "explanationAr": "يتحقق الكود المقدم بوضوح مما إذا كانت القائمة فارغة، وإذا كان الأمر كذلك، فإنه يرجع واجهة (Center) تحتوي على نص يعرض \"No products found\".",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_42",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 42,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.42)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "Which Flutter widget is used to render a scrollable list of items dynamically on demand, such as rendering a list of products?",
    "questionAr": "أي ويدجت في Flutter يُستخدم لعرض قائمة قابلة للتمرير من العناصر ديناميكيًا عند الطلب، مثل عرض قائمة المنتجات؟",
    "options": [
      {
        "label": "A",
        "textEn": "ListView.builder",
        "textAr": "ListView.builder"
      },
      {
        "label": "B",
        "textEn": "AlertDialog",
        "textAr": "AlertDialog"
      },
      {
        "label": "C",
        "textEn": "RadioGroup",
        "textAr": "RadioGroup"
      },
      {
        "label": "D",
        "textEn": "BottomSheet only",
        "textAr": "BottomSheet فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "ListView.builder is optimized for creating a scrollable list of widgets on demand, which is ideal for rendering data arrays returned from an API.",
    "explanationAr": "تم تحسين ListView.builder لإنشاء قائمة ويدجت قابلة للتمرير عند الطلب، وهو أمر مثالي لعرض مصفوفات البيانات التي تم إرجاعها من واجهة برمجة التطبيقات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_43",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 43,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.43)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.get( Uri.parse('https://randomuser.me/api/?results=20'), ); Which exact URL is passed to the RandomUser GET requ est?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final response = (await) http.get( Uri.parse('https://randomuser.me/api/?results=20'), ); Which exact URL is passed to the RandomUser (GET) requ est?",
    "options": [
      {
        "label": "A",
        "textEn": "https://randomuser.me/api/?results=20",
        "textAr": "https://randomuser.me/api/?results=20"
      },
      {
        "label": "B",
        "textEn": "https://randomuser.me/api/1.4/ only",
        "textAr": "https://randomuser.me/api/1.4/ فقط"
      },
      {
        "label": "C",
        "textEn": "http://localhost/users",
        "textAr": "http://localhost/users"
      },
      {
        "label": "D",
        "textEn": "file://randomuser",
        "textAr": "file://randomuser"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The http.get method expects a Uri object containing the target endpoint. Here, the exact URL provided to Uri.parse is the one used for the request.",
    "explanationAr": "تتوقع طريقة http.get كائن Uri يحتوي على نقطة النهاية المستهدفة. هنا، الرابط الدقيق المقدم إلى Uri.parse هو المستخدم للطلب.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_44",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 44,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.44)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: <uses-permission android:name=\"android.permission.INTERNET\" /> Which Android permission is required for the network request?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: <uses-permission android:name=\"android.permission.INTERNET\" /> أي إذن من أذونات Android مطلوب لطلب الشبكة؟",
    "options": [
      {
        "label": "A",
        "textEn": "INTERNET permission",
        "textAr": "صلاحية INTERNET"
      },
      {
        "label": "B",
        "textEn": "Camera permission only",
        "textAr": "إذن الكاميرا (Camera permission) فقط"
      },
      {
        "label": "C",
        "textEn": "A SQLite schema",
        "textAr": "مخطط (schema) (SQLite)"
      },
      {
        "label": "D",
        "textEn": "A fonts manifest",
        "textAr": "بيان الخطوط (fonts manifest)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Flutter apps running on Android must declare the INTERNET permission in the manifest to establish any outgoing HTTP connections.",
    "explanationAr": "يجب أن تعلن تطبيقات Flutter التي تعمل على نظام Android عن صلاحية INTERNET في البيان لإنشاء أي اتصالات HTTP صادرة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_45",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 45,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.45)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.get(uri); if (response.statusCode != 200) { throw Exception('Request failed'); } What is checked immediately after the RandomUser GET response?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final response = (await) http.get(uri); if (response.statusCode != 200) { throw Exception('Request failed'); } What is checked immediately after the RandomUser (GET) response?",
    "options": [
      {
        "label": "A",
        "textEn": "statusCode",
        "textAr": "statusCode"
      },
      {
        "label": "B",
        "textEn": "Widget height",
        "textAr": "ارتفاع الويدجت (Widget height)"
      },
      {
        "label": "C",
        "textEn": "SharedPreferences key",
        "textAr": "مفتاح (SharedPreferences)"
      },
      {
        "label": "D",
        "textEn": "Database version",
        "textAr": "إصدار قاعدة البيانات"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "After making an HTTP request, the statusCode of the response is checked to verify if the request was successful (e.g., 200 OK).",
    "explanationAr": "بعد إجراء طلب HTTP، يتم التحقق من statusCode للاستجابة للتحقق مما إذا كان الطلب ناجحًا (مثل 200 OK).",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_46",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 46,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.46)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final decoded = jsonDecode(response.body); final results = decoded['results'] as List<dynamic>; What type does the parser expect under the top-level key results?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final decoded = jsonDecode(response.body); final results = decoded['results'] as List<dynamic>; ما هو النوع الذي يتوقعه المحلل (parser) تحت المفتاح ذي المستوى الأعلى results؟",
    "options": [
      {
        "label": "A",
        "textEn": "A List",
        "textAr": "قائمة (List)"
      },
      {
        "label": "B",
        "textEn": "A File",
        "textAr": "ملف (File)"
      },
      {
        "label": "C",
        "textEn": "A bool only",
        "textAr": "bool فقط"
      },
      {
        "label": "D",
        "textEn": "A Widget",
        "textAr": "ويدجت (Widget)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When decoding JSON arrays like '[1, 2, 3]', Dart parses it dynamically into a List data structure for index-based access.",
    "explanationAr": "عند فك تشفير مصفوفات JSON مثل '[1, 2, 3]'، يقوم Dart بتحليلها ديناميكيًا إلى بنية بيانات List للوصول المستند إلى الفهرس.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_47",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 47,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.47)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final age = user['dob']['age']; final avatar = user['picture']['large']; Which nested value is displayed as the trailing age?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final age = user['dob']['age']; final avatar = user['picture']['large']; أي قيمة متداخلة (nested value) يتم عرضها كعمر تالي (trailing)؟",
    "options": [
      {
        "label": "A",
        "textEn": "user['dob']['age']",
        "textAr": "user['dob']['age']"
      },
      {
        "label": "B",
        "textEn": "user['name']['age']",
        "textAr": "user['name']['age']"
      },
      {
        "label": "C",
        "textEn": "user['email']['age']",
        "textAr": "user['email']['age']"
      },
      {
        "label": "D",
        "textEn": "user['picture']['age']",
        "textAr": "user['picture']['age']"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "In deeply nested JSON objects, accessing a value requires chaining the keys sequentially, such as user['dob']['age'] to extract the specific age property.",
    "explanationAr": "في كائنات JSON المتداخلة بعمق، يتطلب الوصول إلى قيمة ربط المفاتيح بالتسلسل، مثل user['dob']['age'] لاستخراج خاصية العمر المحددة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_48",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 48,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.48)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (snapshot.hasError) { return Center(child: Text('${snapshot.error}')); } What does the FutureBuilder render when snapshot.hasError is true?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (snapshot.hasError) { return Center(child: Text('${snapshot.error}')); } What does the (FutureBuilder) render when snapshot.hasError is true?",
    "options": [
      {
        "label": "A",
        "textEn": "Center(child: Text('${snapshot.error}'))",
        "textAr": "Center(child: Text('${snapshot.error}'))"
      },
      {
        "label": "B",
        "textEn": "A successful ListView",
        "textAr": "ListView ناجح"
      },
      {
        "label": "C",
        "textEn": "MySQL credentials",
        "textAr": "بيانات اعتماد MySQL"
      },
      {
        "label": "D",
        "textEn": "A DELETE dialog",
        "textAr": "مربع حوار (DELETE)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The FutureBuilder snapshot exposes a hasError flag, allowing developers to handle exceptions gracefully and render an error message to the UI.",
    "explanationAr": "تعرض لقطة FutureBuilder علامة hasError، مما يسمح للمطورين بمعالجة الاستثناءات بسلاسة وعرض رسالة خطأ في واجهة المستخدم.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_49",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 49,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.49)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "When using http.post to create a new product, which of the following represents a typical JSON-like Map passed as the request body?",
    "questionAr": "عند استخدام http.post لإنشاء منتج جديد، أي مما يلي يمثل خريطة تشبه JSON يتم تمريرها كجسم للطلب؟",
    "options": [
      {
        "label": "A",
        "textEn": "{'name': 'Mouse', 'price': '25'}",
        "textAr": "{'name': 'Mouse', 'price': '25'}"
      },
      {
        "label": "B",
        "textEn": "Navigator.push(product)",
        "textAr": "Navigator.push(product)"
      },
      {
        "label": "C",
        "textEn": "rootBundle.loadString(product)",
        "textAr": "rootBundle.loadString(product)"
      },
      {
        "label": "D",
        "textEn": "MySQL credentials",
        "textAr": "بيانات اعتماد MySQL"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The body of an HTTP POST request in Dart often contains a Map that represents the data to be sent and saved on the server.",
    "explanationAr": "غالبًا ما يحتوي جسم طلب HTTP POST في Dart على خريطة (Map) تمثل البيانات المراد إرسالها وحفظها على الخادم.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_50",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 50,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.50)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 204) { throw Exception('Update failed'); } Which status pair is accepted by this PUT success check?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 204) { throw Exception('Update failed'); } Which status pair is accepted by this (PUT) success check?",
    "options": [
      {
        "label": "A",
        "textEn": "200 or 204",
        "textAr": "200 أو 204"
      },
      {
        "label": "B",
        "textEn": "404 or 500",
        "textAr": "404 أو 500"
      },
      {
        "label": "C",
        "textEn": "301 or 302",
        "textAr": "301 أو 302"
      },
      {
        "label": "D",
        "textEn": "100 or 101",
        "textAr": "100 أو 101"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The condition `!= 200 && != 204` means that if the status is either 200 (OK) or 204 (No Content), the exception will not be thrown, meaning both are accepted as success for a PUT request.",
    "explanationAr": "الشرط `!= 200 && != 204` يعني أنه إذا كانت الحالة 200 أو 204، فلن يتم إلقاء الاستثناء، مما يعني أن كليهما مقبول كنجاح لطلب PUT.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_51",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 51,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.51)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 204) { throw Exception('Delete failed'); } Which status pair is accepted by this DELETE success check?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 204) { throw Exception('Delete failed'); } Which status pair is accepted by this (DELETE) success check?",
    "options": [
      {
        "label": "A",
        "textEn": "200 or 204",
        "textAr": "200 أو 204"
      },
      {
        "label": "B",
        "textEn": "401 or 403",
        "textAr": "401 أو 403"
      },
      {
        "label": "C",
        "textEn": "500 or 503",
        "textAr": "500 أو 503"
      },
      {
        "label": "D",
        "textEn": "201 or 202 only",
        "textAr": "201 أو 202 فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Similar to PUT, a DELETE request often returns 200 (OK) if it includes a response body, or 204 (No Content) if successful but empty, so both are validated as success.",
    "explanationAr": "على غرار طلب PUT، غالبًا ما يُرجع طلب DELETE الحالة 200 إذا كان يتضمن جسم استجابة، أو 204 إذا كان ناجحًا ولكنه فارغ، لذلك يتم التحقق من كليهما كنجاح.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_52",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 52,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.52)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In an inventory application, which layer collects user input and renders the Flutter UI states?",
    "questionAr": "في تطبيق المخزون، أي طبقة تجمع مدخلات المستخدم وتعرض حالات واجهة مستخدم (UI states) في Flutter؟",
    "options": [
      {
        "label": "A",
        "textEn": "Flutter client",
        "textAr": "عميل (client) Flutter"
      },
      {
        "label": "B",
        "textEn": "MySQL",
        "textAr": "MySQL"
      },
      {
        "label": "C",
        "textEn": "PDO driver",
        "textAr": "مشغل PDO"
      },
      {
        "label": "D",
        "textEn": "Apache configuration only",
        "textAr": "تكوين Apache فقط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The Flutter client application acts as the presentation layer, responsible for collecting user input and updating the user interface based on the state.",
    "explanationAr": "يعمل تطبيق عميل Flutter كطبقة العرض، وهو مسؤول عن جمع مدخلات المستخدم وتحديث واجهة المستخدم بناءً على الحالة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_53",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 53,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.53)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "In a client–API–database architecture, which layer validates requests an d executes prepared SQL?",
    "questionAr": "سؤال متعلق بالمنهج: In a client–(API)–database architecture, which layer validates requests an d executes prepared SQL?",
    "options": [
      {
        "label": "A",
        "textEn": "PHP API",
        "textAr": "PHP API"
      },
      {
        "label": "B",
        "textEn": "Flutter ListView",
        "textAr": "Flutter ListView"
      },
      {
        "label": "C",
        "textEn": "Android emulator",
        "textAr": "محاكي أندرويد (Android emulator)"
      },
      {
        "label": "D",
        "textEn": "product.json",
        "textAr": "product.json"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The API backend layer, written in server-side languages like PHP, bridges the client and database by processing logic, validating requests, and executing secure SQL queries.",
    "explanationAr": "تربط طبقة واجهة برمجة التطبيقات الخلفية، المكتوبة بلغات الخادم مثل PHP، العميل بقاعدة البيانات من خلال معالجة المنطق والتحقق من الطلبات وتنفيذ استعلامات SQL الآمنة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_54",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 54,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.54)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.get( Uri.parse('$baseUrl/getdata.php'), ); Which route is called by this GET request to read the inventory list?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final response = (await) http.get( Uri.parse('$baseUrl/getdata.php'), ); Which route is called by this (GET) request to read the inventory list?",
    "options": [
      {
        "label": "A",
        "textEn": "getdata.php",
        "textAr": "getdata.php (استرجاع وقراءة السجلات)"
      },
      {
        "label": "B",
        "textEn": "adddata.php",
        "textAr": "adddata.php (إضافة سجل جديد)"
      },
      {
        "label": "C",
        "textEn": "editdata.php",
        "textAr": "editdata.php (تعديل وتحديث سجل)"
      },
      {
        "label": "D",
        "textEn": "user_register.php",
        "textAr": "user_register.php"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The URL specifies getdata.php as the endpoint, which is typical for a backend script designed to retrieve data using a GET request.",
    "explanationAr": "يحدد الرابط getdata.php كنقطة النهاية، وهو أمر نموذجي لبرنامج نصي خلفي مصمم لاسترداد البيانات باستخدام طلب GET.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_55",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 55,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.55)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.post( Uri.parse('$baseUrl/adddata.php'), body: {'itemcode': 'A10', 'itemname': 'Mouse'}, ); Which route and method create an inventory item in this code? body: {'itemcode': 'A10', 'itemname': 'Mouse'}, ); Which route and method create an inventory item in this code?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final response = (await) http.post( Uri.parse('$baseUrl/adddata.php'), body: {'itemcode': 'A10', 'itemname': 'Mouse'}, ); Which route and method create an inventory item in this code? body: {'itemcode': 'A10', 'itemname': 'Mouse'}, ); Which route and method create an inventory item in this code?",
    "options": [
      {
        "label": "A",
        "textEn": "adddata.php",
        "textAr": "adddata.php (إضافة سجل جديد)"
      },
      {
        "label": "B",
        "textEn": "getdata.php",
        "textAr": "getdata.php (استرجاع وقراءة السجلات)"
      },
      {
        "label": "C",
        "textEn": "deleteData.php",
        "textAr": "deleteData.php"
      },
      {
        "label": "D",
        "textEn": "user_login.php",
        "textAr": "user_login.php"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The \u0007dddata.php endpoint is invoked using an HTTP POST request to securely transmit new data to the server for insertion into the database.",
    "explanationAr": "يتم استدعاء نقطة النهاية \u0007dddata.php باستخدام طلب HTTP POST لنقل البيانات الجديدة بأمان إلى الخادم لإدراجها في قاعدة البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_56",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 56,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.56)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.post( Uri.parse('$baseUrl/editdata.php'), body: {'id': '7', 'itemname': 'Keyboard'}, ); Which route and method update an inventory item in this code?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final response = (await) http.post( Uri.parse('$baseUrl/editdata.php'), body: {'id': '7', 'itemname': 'Keyboard'}, ); Which route and method update an inventory item in this code?",
    "options": [
      {
        "label": "A",
        "textEn": "editdata.php",
        "textAr": "editdata.php (تعديل وتحديث سجل)"
      },
      {
        "label": "B",
        "textEn": "getdata.php",
        "textAr": "getdata.php (استرجاع وقراءة السجلات)"
      },
      {
        "label": "C",
        "textEn": "create.php",
        "textAr": "create.php"
      },
      {
        "label": "D",
        "textEn": "user_login.php",
        "textAr": "user_login.php"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The http.post method calls editdata.php, passing an item ID and updated details in the body to modify an existing record.",
    "explanationAr": "تستدعي طريقة http.post editdata.php، ممررة معرف العنصر والتفاصيل المحدثة في الجسم لتعديل سجل موجود.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_57",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 57,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.57)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final response = await http.post( Uri.parse('$baseUrl/deleteData.php'), body: {'id': id.toString()}, ); Which route and request body delete the selected inventory item? body: {'id': id.toString()}, ); Which route and request body delete the selected inventory item?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final response = (await) http.post( Uri.parse('$baseUrl/deleteData.php'), body: {'id': id.toString()}, ); Which route and request body delete the selected inventory item? body: {'id': id.toString()}, ); Which route and request body delete the selected inventory item?",
    "options": [
      {
        "label": "A",
        "textEn": "deleteData.php with POST body {'id': ...}",
        "textAr": "deleteData.php مع جسم (POST) (POST body) {'id': ...}"
      },
      {
        "label": "B",
        "textEn": "getdata.php with GET",
        "textAr": "getdata.php باستخدام (GET)"
      },
      {
        "label": "C",
        "textEn": "user_register.php",
        "textAr": "user_register.php"
      },
      {
        "label": "D",
        "textEn": "product.json",
        "textAr": "product.json"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To securely delete a specific record, the client sends a POST request to deleteData.php containing the unique identifier of the item in the request body.",
    "explanationAr": "لحذف سجل معين بأمان، يرسل العميل طلب POST إلى deleteData.php يحتوي على المعرف الفريد للعنصر في جسم الطلب.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_58",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 58,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.58)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final uri = Uri.parse('http://10.0.2.2/my_store/getdata.php'); What does 10.0.2.2 represent in this Android Emulator URL?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final uri = Uri.parse('http://10.0.2.2/my_store/getdata.php'); ماذا يمثل 10.0.2.2 في رابط الـ Android Emulator هذا؟",
    "options": [
      {
        "label": "A",
        "textEn": "The development host loopback alias",
        "textAr": "الاسم المستعار (alias) للحلقة المحلية لمضيف التطوير (development host loopback)"
      },
      {
        "label": "B",
        "textEn": "The emulator's own localhost only",
        "textAr": "المضيف المحلي (localhost) الخاص بالمحاكي (emulator) فقط"
      },
      {
        "label": "C",
        "textEn": "A public production server",
        "textAr": "خادم إنتاج (production server) عام"
      },
      {
        "label": "D",
        "textEn": "A MySQL password",
        "textAr": "كلمة مرور MySQL"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Inside the Android Emulator virtual networking environment, 10.0.2.2 is the special alias mapped to 127.0.0.1 (localhost) of the host computer running Apache/PHP.",
    "explanationAr": "داخل محاكي أندرويد، يمثل العنوان 10.0.2.2 البوابة الافتراضية الخاصة المرتبطة بـ localhost (127.0.0.1) على جهاز الحاسوب المضيف لخادم PHP.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_59",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 59,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.59)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "What should a physical device use instead of assuming the Android Emulator loopback alias?",
    "questionAr": "ماذا يجب أن يستخدم الجهاز الفعلي بدلاً من افتراض الاسم المستعار للاسترجاع المحلي لـ Android Emulator؟",
    "options": [
      {
        "label": "A",
        "textEn": "A reachable LAN/HTTPS server address",
        "textAr": "عنوان خادم LAN/HTTPS يمكن الوصول إليه"
      },
      {
        "label": "B",
        "textEn": "The same alias in all networks",
        "textAr": "نفس الاسم المستعار في جميع الشبكات"
      },
      {
        "label": "C",
        "textEn": "A Dart asset path",
        "textAr": "مسار أصل في Dart (Dart asset path)"
      },
      {
        "label": "D",
        "textEn": "A Widget key",
        "textAr": "مفتاح ويدجت (Widget key)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Unlike emulators which map localhost automatically, a physical device must connect to the backend server using its actual reachable IP address on the local network.",
    "explanationAr": "على عكس المحاكيات التي تقوم بتعيين المضيف المحلي تلقائيًا، يجب أن يتصل الجهاز الفعلي بخادم الواجهة الخلفية باستخدام عنوان IP الفعلي القابل للوصول على الشبكة المحلية.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_60",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 60,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.60)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: $connect = new mysqli($host, $user, $password, $database); Which PHP database API is represented by the connection variable in this code?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: $connect = new mysqli($host, $user, $password, $database); Which PHP database (API) is represented by the connection variable in this code?",
    "options": [
      {
        "label": "A",
        "textEn": "MySQLi ($connect)",
        "textAr": "MySQLi ($connect)"
      },
      {
        "label": "B",
        "textEn": "Raw mysql_* functions",
        "textAr": "دوال mysql_* الخام"
      },
      {
        "label": "C",
        "textEn": "Flutter sqflite",
        "textAr": "Flutter sqflite"
      },
      {
        "label": "D",
        "textEn": "SharedPreferences",
        "textAr": "SharedPreferences"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The MySQLi extension in PHP provides a robust, object-oriented API for interacting with MySQL databases, supporting secure connections and prepared statements.",
    "explanationAr": "يوفر امتداد MySQLi في PHP واجهة برمجة تطبيقات قوية وموجهة للكائنات للتفاعل مع قواعد بيانات MySQL، مما يدعم الاتصالات الآمنة والبيانات المعدة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_61",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 61,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.61)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: // connect.php require_once __DIR__ . '/conn.php'; Why is connect.php kept as a short compatibility alias in this file structure?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: // connect.php require_once __DIR__ . '/conn.php'; لماذا يُحتفظ بـ connect.php كاسم مستعار قصير للتوافقية (compatibility alias) في هيكل الملف هذا؟",
    "options": [
      {
        "label": "A",
        "textEn": "To require conn.php without duplicating credentials",
        "textAr": "لطلب conn.php بدون تكرار بيانات الاعتماد (credentials)"
      },
      {
        "label": "B",
        "textEn": "To replace MySQL with SQLite",
        "textAr": "لاستبدال MySQL بـ (SQLite)"
      },
      {
        "label": "C",
        "textEn": "To upload an image",
        "textAr": "لرفع صورة"
      },
      {
        "label": "D",
        "textEn": "To create Flutter routes",
        "textAr": "لإنشاء مسارات (routes) Flutter"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Extracting the database connection logic into a shared file like conn.php adheres to the DRY principle, ensuring credentials are defined in only one place.",
    "explanationAr": "استخراج منطق اتصال قاعدة البيانات في ملف مشترك مثل conn.php يلتزم بمبدأ DRY (لا تكرر نفسك)، مما يضمن تحديد بيانات الاعتماد في مكان واحد فقط.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_62",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 62,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.62)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: http_response_code(400); echo json_encode(['error' => 'Invalid item']); What does this output represent?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: http_response_code(400); echo json_encode(['error' => 'Invalid item']); ماذا يمثل هذا المخرج؟",
    "options": [
      {
        "label": "A",
        "textEn": "Stable JSON with a suitable error status",
        "textAr": "(JSON) مستقر مع حالة خطأ مناسبة"
      },
      {
        "label": "B",
        "textEn": "A raw database stack trace",
        "textAr": "تتبع مكدس (stack trace) خام لقاعدة البيانات"
      },
      {
        "label": "C",
        "textEn": "A Flutter Widget",
        "textAr": "ويدجت Flutter (Flutter Widget)"
      },
      {
        "label": "D",
        "textEn": "A MySQL password",
        "textAr": "كلمة مرور MySQL"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Setting the HTTP response code to 400 (Bad Request) and outputting a structured JSON error message allows the Flutter client to handle the failure properly.",
    "explanationAr": "يتيح تعيين رمز استجابة HTTP إلى 400 وإخراج رسالة خطأ JSON منظمة لعميل Flutter معالجة الفشل بشكل صحيح.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_63",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 63,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.63)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (password_verify($password, $storedHash)) { echo 'Login accepted'; } Which function verifies a submitted password against the stored hash?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: if (password_verify($password, $storedHash)) { echo 'Login accepted'; } أي دالة تتحقق من كلمة المرور المُرسلة مقابل التجزئة (hash) المخزنة؟",
    "options": [
      {
        "label": "A",
        "textEn": "password_verify",
        "textAr": "password_verify"
      },
      {
        "label": "B",
        "textEn": "jsonDecode",
        "textAr": "jsonDecode"
      },
      {
        "label": "C",
        "textEn": "http.get",
        "textAr": "http.get"
      },
      {
        "label": "D",
        "textEn": "move_uploaded_file",
        "textAr": "move_uploaded_file"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The password_verify() function in PHP securely compares a plain-text user input against a hashed password stored in the database, preventing plaintext exposure.",
    "explanationAr": "تُقارن دالة password_verify() في PHP بشكل آمن إدخال نص عادي للمستخدم بكلمة مرور مجزأة مخزنة في قاعدة البيانات، مما يمنع التعرض للنص العادي.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_64",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 64,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.64)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: $hash = password_hash($password, PASSWORD_DEFAULT); Which function creates the password hash during registration?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: $hash = password_hash($password, PASSWORD_DEFAULT); أي دالة تنشئ تجزئة كلمة المرور (password hash) أثناء التسجيل؟",
    "options": [
      {
        "label": "A",
        "textEn": "password_hash",
        "textAr": "password_hash"
      },
      {
        "label": "B",
        "textEn": "int.parse",
        "textAr": "int.parse"
      },
      {
        "label": "C",
        "textEn": "Uri.parse",
        "textAr": "Uri.parse"
      },
      {
        "label": "D",
        "textEn": "ImagePicker",
        "textAr": "ImagePicker"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "During registration, password_hash() utilizes strong cryptographic algorithms to secure passwords before storing them in the database.",
    "explanationAr": "أثناء التسجيل، تستخدم password_hash() خوارزميات تشفير قوية لتأمين كلمات المرور قبل تخزينها في قاعدة البيانات.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_65",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 65,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.65)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: echo json_encode([ 'uid' => $uid, 'uname' => $uname, 'upass' => $storedHash]); Which server field must not be returned to Flutter after login?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: echo json_encode([ 'uid' => $uid, 'uname' => $uname, 'upass' => $storedHash]); أي حقل خادم (server field) يجب ألا يتم إرجاعه إلى Flutter بعد تسجيل الدخول؟",
    "options": [
      {
        "label": "A",
        "textEn": "UPASS/password hash",
        "textAr": "تجزئة كلمة المرور (password hash) / UPASS"
      },
      {
        "label": "B",
        "textEn": "UID",
        "textAr": "UID"
      },
      {
        "label": "C",
        "textEn": "NAME",
        "textAr": "NAME"
      },
      {
        "label": "D",
        "textEn": "UNAME",
        "textAr": "UNAME"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "To prevent severe security vulnerabilities, sensitive data like stored password hashes should never be transmitted back to the client application.",
    "explanationAr": "لمنع نقاط الضعف الأمنية الشديدة، يجب عدم نقل البيانات الحساسة مثل تجزئات كلمات المرور المخزنة مرة أخرى إلى تطبيق العميل.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_66",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 66,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.66)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final rows = jsonDecode(response.body) as List<dynamic>; final itemName = rows[index]['item_name']; How does the Flutter code access each decoded server row?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final rows = jsonDecode(response.body) as List<dynamic>; final itemName = rows[index]['item_name']; كيف يصل كود Flutter إلى كل صف خادم تم فك تشفيره؟",
    "options": [
      {
        "label": "A",
        "textEn": "As Map -like values from a decoded List",
        "textAr": "كقيم تشبه Map من قائمة (List) تم فك تشفيرها"
      },
      {
        "label": "B",
        "textEn": "Through InventoryItem.fromJson only",
        "textAr": "من خلال InventoryItem.fromJson فقط"
      },
      {
        "label": "C",
        "textEn": "Through a local SQLite table",
        "textAr": "من خلال جدول (SQLite) محلي"
      },
      {
        "label": "D",
        "textEn": "By reading MySQL directly",
        "textAr": "عن طريق قراءة MySQL مباشرة"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When decoding a top-level JSON array, it initially resolves to List<dynamic>, which must be cast before mapping to specific model instances.",
    "explanationAr": "عند فك تشفير مصفوفة JSON ذات المستوى الأعلى، يتم حلها مبدئيًا إلى List<dynamic>، والتي يجب صبها (cast) قبل التعيين إلى مثيلات نموذج محددة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_67",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 67,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.67)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "When using \u0007wait Navigator.push to navigate to an 'Add Data' screen, what is a common pattern executed immediately after the \u0007wait completes to ensure the UI reflects any new data?",
    "questionAr": "عند استخدام \u0007wait Navigator.push للانتقال إلى شاشة 'Add Data'، ما هو النمط الشائع الذي يتم تنفيذه فور اكتمال الـ \u0007wait للتأكد من أن واجهة المستخدم تعكس أي بيانات جديدة؟",
    "options": [
      {
        "label": "A",
        "textEn": "A fresh GET reloads the server list",
        "textAr": "طلب (GET) جديد يعيد تحميل قائمة الخادم"
      },
      {
        "label": "B",
        "textEn": "A local row is permanently trusted",
        "textAr": "الصف (row) المحلي موثوق به بشكل دائم"
      },
      {
        "label": "C",
        "textEn": "The app connects to MySQL directly",
        "textAr": "التطبيق يتصل بـ MySQL مباشرة"
      },
      {
        "label": "D",
        "textEn": "The HTTP client is ignored",
        "textAr": "يتم تجاهل عميل (HTTP)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "By awaiting Navigator.push, the code pauses until the user returns from the new screen. At that point, fetching the updated data from the server ensures the list is accurate.",
    "explanationAr": "من خلال انتظار Navigator.push، يتوقف الكود مؤقتًا حتى يعود المستخدم من الشاشة الجديدة. في تلك اللحظة، يضمن جلب البيانات المحدثة من الخادم دقة القائمة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_68",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 68,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.68)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: await updateItem(); final latest = await http.get( Uri.parse('$baseUrl/getdata.php'), ); What is the strongest evidence that the server persisted an update?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: (await) updateItem(); final latest = (await) http.get( Uri.parse('$baseUrl/getdata.php'), ); What is the strongest evidence that the server persisted an update?",
    "options": [
      {
        "label": "A",
        "textEn": "Fresh GET shows the changed values",
        "textAr": "طلب (GET) جديد يظهر القيم المتغيرة"
      },
      {
        "label": "B",
        "textEn": "The TextField changed locally",
        "textAr": "تغير TextField محلياً"
      },
      {
        "label": "C",
        "textEn": "The button was tapped",
        "textAr": "تم النقر على الزر"
      },
      {
        "label": "D",
        "textEn": "A dialog opened",
        "textAr": "تم فتح مربع حوار (dialog)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A fresh GET request retrieves the actual data stored on the server. If it returns the updated values, it is the strongest evidence that the update was persisted on the server side, rather than just locally in the app.",
    "explanationAr": "طلب GET جديد يسترد البيانات الفعلية المخزنة على الخادم. إذا أرجع القيم المحدثة، فهذا هو أقوى دليل على أن التحديث تم حفظه على جانب الخادم، وليس فقط محلياً في التطبيق.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_69",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 69,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.69)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final confirmed = await showDialog<bool>(context: context, builder: (_) => const AlertDialog()); if (confirmed == true) { await http.post(deleteUri); } What happens before the destructive POST request is sent? await http.post(deleteUri); } What happens before the destructive POST request is sent?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final confirmed = (await) showDialog<bool>(context: (context), builder: (_) => const AlertDialog()); if (confirmed == true) { await http.post(deleteUri); } What happens before the destructive POST request is sent? await http.post(deleteUri); } What happens before the destructive POST request is sent?",
    "options": [
      {
        "label": "A",
        "textEn": "A confirmation dialog is shown",
        "textAr": "يتم عرض مربع حوار للتأكيد"
      },
      {
        "label": "B",
        "textEn": "The app deletes the MySQL database",
        "textAr": "يقوم التطبيق بحذف قاعدة بيانات MySQL"
      },
      {
        "label": "C",
        "textEn": "A new user is registered",
        "textAr": "تم تسجيل مستخدم جديد"
      },
      {
        "label": "D",
        "textEn": "The image picker opens",
        "textAr": "يفتح منتقي الصور (image picker)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The code snippet uses showDialog to display an AlertDialog, which asks the user for confirmation.",
    "explanationAr": "يستخدم مقطع الكود showDialog لعرض AlertDialog، والذي يطلب من المستخدم التأكيد.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_70",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 70,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.70)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: final XFile? image = await picker. pickImage( source: ImageSource.gallery, ); Which type is returned by the image_picker call?",
    "questionAr": "سؤال رفع الصور (مستبعد من الاختبار): If we have the following code snippet: final XFile? image = (await) picker. pickImage( source: ImageSource.gallery, ); Which type is returned by the image_picker call?",
    "options": [
      {
        "label": "A",
        "textEn": "XFile?",
        "textAr": "XFile?"
      },
      {
        "label": "B",
        "textEn": "PickedFile only",
        "textAr": "PickedFile فقط"
      },
      {
        "label": "C",
        "textEn": "Database",
        "textAr": "قاعدة بيانات (Database)"
      },
      {
        "label": "D",
        "textEn": "BuildContext",
        "textAr": "BuildContext"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image uploading with API is officially quarantined from the exam scope per Eng. Ruqaih Salman's syllabus.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور عبر الـ (API) مستبعد رسمياً من الاختبار النهائي وفق توجيهات أستاذة المادة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_71",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 71,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.71)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: final request = http.MultipartRequest('POST', uri) ..files.add(await http.MultipartFile.fromPath('image', image.path)); Which request type sends the selected image file to PHP?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final request = http.MultipartRequest('POST', uri) ..files.add(await http.MultipartFile.fromPath('image', image.path)); أي نوع طلب يرسل ملف الصورة المحدد إلى PHP؟",
    "options": [
      {
        "label": "A",
        "textEn": "http.MultipartRequest",
        "textAr": "http.MultipartRequest"
      },
      {
        "label": "B",
        "textEn": "http.get only",
        "textAr": "http.get فقط"
      },
      {
        "label": "C",
        "textEn": "SharedPreferencesAsync",
        "textAr": "SharedPreferencesAsync"
      },
      {
        "label": "D",
        "textEn": "sqflite batch",
        "textAr": "sqflite batch"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image uploading with API is officially quarantined from the exam scope per Eng. Ruqaih Salman's syllabus.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور عبر الـ (API) مستبعد رسمياً من الاختبار النهائي وفق توجيهات أستاذة المادة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_72",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 72,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.72)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: $serverPath = 'uploads/' . $safeName; // Store $serverPath in the database, not image.path from the phone. What should the server store for an uploaded image?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: $serverPath = 'uploads/' . $safeName; // Store $serverPath in the database, not image.path from the phone. ماذا يجب أن يخزن الخادم لصورة تم رفعها؟",
    "options": [
      {
        "label": "A",
        "textEn": "A server relative path or URL metadata",
        "textAr": "مسار نسبي للخادم أو بيانات وصفية (metadata) لـ URL"
      },
      {
        "label": "B",
        "textEn": "The phone temporary file path",
        "textAr": "مسار الملف المؤقت للهاتف"
      },
      {
        "label": "C",
        "textEn": "The whole Flutter Widge t",
        "textAr": "ويدجت Flutter (Flutter Widget) بالكامل"
      },
      {
        "label": "D",
        "textEn": "The camera permission string",
        "textAr": "سلسلة إذن الكاميرا (camera permission string)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image uploading with API is officially quarantined from the exam scope per Eng. Ruqaih Salman's syllabus.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور عبر الـ (API) مستبعد رسمياً من الاختبار النهائي وفق توجيهات أستاذة المادة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_73",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 73,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.73)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: $finfo = new finfo(FILEINFO_MIME_TYPE); $mime = $finfo->file($_FILES['image']['tmp_name']); Which upload validation must not be skipped?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: $finfo = new finfo(FILEINFO_MIME_TYPE); $mime = $finfo->file($_FILES['image']['tmp_name']); أي تحقق من صحة الرفع (upload validation) يجب ألا يتم تخطيه؟",
    "options": [
      {
        "label": "A",
        "textEn": "MIME inspection of the temporary file",
        "textAr": "فحص نوع MIME للملف المؤقت"
      },
      {
        "label": "B",
        "textEn": "Trusting the extension",
        "textAr": "الوثوق بالامتداد (extension)"
      },
      {
        "label": "C",
        "textEn": "Using the client filename as -is",
        "textAr": "استخدام اسم ملف العميل كما هو"
      },
      {
        "label": "D",
        "textEn": "Ignoring upload status",
        "textAr": "تجاهل حالة الرفع"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Validating the MIME type of an uploaded file on the backend is a critical security measure to ensure malicious scripts aren't accepted as images.",
    "explanationAr": "يعد التحقق من نوع MIME لملف تم تحميله على الواجهة الخلفية إجراءً أمنيًا بالغ الأهمية لضمان عدم قبول النصوص البرمجية الضارة كصور.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_74",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 74,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.74)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: http_response_code(201); echo json_encode(['message' => 'Upload complete']); Which status code is returned by this successful upload response?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: http_response_code(201); echo json_encode(['message' => 'Upload complete']); ما هو رمز الحالة (status code) الذي تُرجعه استجابة الرفع الناجحة هذه؟",
    "options": [
      {
        "label": "A",
        "textEn": "201",
        "textAr": "201 (تم إنشاء السجل بنجاح Created)"
      },
      {
        "label": "B",
        "textEn": "404",
        "textAr": "404 (الصفحة أو المورد غير موجود Not Found)"
      },
      {
        "label": "C",
        "textEn": "401",
        "textAr": "401"
      },
      {
        "label": "D",
        "textEn": "500",
        "textAr": "500 (خطأ داخلي في الخادم Internal Server Error)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The PHP code explicitly sets the response code using `http_response_code(201)`, meaning the client will receive HTTP 201 (Created).",
    "explanationAr": "يحدد كود PHP بشكل صريح كود الاستجابة باستخدام `http_response_code(201)`، مما يعني أن العميل سيتلقى HTTP 201 (Created).",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_75",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 75,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.75)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (response.statusCode == 201) { await reloadImages(); } What should the UI do after the upload response indicates success?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (response.statusCode == 201) { (await) reloadImages(); } What should the UI do after the upload response indicates success?",
    "options": [
      {
        "label": "A",
        "textEn": "Reload the image list/grid from the se rver",
        "textAr": "إعادة تحميل قائمة/شبكة الصور من الخادم (server)"
      },
      {
        "label": "B",
        "textEn": "Assume success without refresh",
        "textAr": "افتراض النجاح بدون تحديث (refresh)"
      },
      {
        "label": "C",
        "textEn": "Store only the phone path",
        "textAr": "تخزين مسار الهاتف فقط"
      },
      {
        "label": "D",
        "textEn": "Disconnect the server",
        "textAr": "فصل الخادم (server)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "When an upload returns a 201 success status, the UI should invoke `reloadImages()` to fetch the updated state from the server and display the new item.",
    "explanationAr": "عندما يُرجع الرفع حالة نجاح 201، يجب على واجهة المستخدم استدعاء `reloadImages()` لجلب الحالة المحدثة من الخادم وعرض العنصر الجديد.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_76",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 76,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.76)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: try { await http.get(Uri.parse(baseUrl)); } on SocketException { // inspect the connection } What should be checked first when this network call raises SocketException?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: try { (await) http.get(Uri.parse(baseUrl)); } on SocketException { // inspect the connection } What should be checked first when this network call raises SocketException?",
    "options": [
      {
        "label": "A",
        "textEn": "Base URL/server reachability/firewall",
        "textAr": "عنوان الـ Base URL/إمكانية الوصول للخادم/جدار الحماية (firewall)"
      },
      {
        "label": "B",
        "textEn": "JSON model field order only",
        "textAr": "ترتيب حقول نموذج (JSON) فقط"
      },
      {
        "label": "C",
        "textEn": "SQLite version",
        "textAr": "إصدار (SQLite)"
      },
      {
        "label": "D",
        "textEn": "Font size",
        "textAr": "حجم الخط"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A SocketException typically indicates a network-level failure, such as the server being down, unreachable due to firewall settings, or an incorrect Base URL preventing the connection from being established.",
    "explanationAr": "يشير SocketException عادةً إلى فشل على مستوى الشبكة، مثل توقف الخادم، أو تعذر الوصول إليه بسبب إعدادات جدار الحماية، أو عنوان URL أساسي غير صحيح يمنع إنشاء الاتصال.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_77",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 77,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.77)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final decoded = jsonDecode(response.body); // FormatException occurs if response.body is not valid JSON. What should be inspected first when jsonDecode raises FormatException?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final decoded = jsonDecode(response.body); // FormatException occurs if response.body is not valid (JSON). What should be inspected first when jsonDecode raises FormatException?",
    "options": [
      {
        "label": "A",
        "textEn": "HTTP status/body and PHP warnings/contract",
        "textAr": "حالة/جسم (HTTP) وتحذيرات/عقد PHP"
      },
      {
        "label": "B",
        "textEn": "Image dimensions",
        "textAr": "أبعاد الصورة (Image dimensions)"
      },
      {
        "label": "C",
        "textEn": "Screen brightness",
        "textAr": "سطوع الشاشة"
      },
      {
        "label": "D",
        "textEn": "Database password in Flutter Practical Code and Expected Output Read each code fragment and choose the exact console result, HTTP behavior, or UI state that follows.",
        "textAr": "كلمة مرور قاعدة البيانات في الكود العملي لـ Flutter والنتيجة المتوقعة: اقرأ كل مقطع كود واختر النتيجة الدقيقة لوحدة التحكم (console)، سلوك (HTTP)، أو حالة واجهة المستخدم (UI state) التي تليه."
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "A FormatException when parsing JSON means the API response was not a valid JSON structure, often caused by server crashes returning HTML errors.",
    "explanationAr": "استثناء FormatException عند تحليل JSON يعني أن استجابة API لم تكن بنية JSON صالحة، وغالبًا ما يكون ذلك بسبب تعطل الخادم الذي يُرجع أخطاء HTML.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_78",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 78,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.78)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final item = ProductDataModel.fromJson({ 'price': '799'}); print(item.price); What is printed for the mapped product price?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final item = ProductDataModel.fromJson({ 'price': '799'}); print(item.price); ماذا يتم طباعته لسعر المنتج المعين (mapped product price)؟",
    "options": [
      {
        "label": "A",
        "textEn": "799",
        "textAr": "799"
      },
      {
        "label": "B",
        "textEn": "799.00",
        "textAr": "799.00"
      },
      {
        "label": "C",
        "textEn": "0.00",
        "textAr": "0.00"
      },
      {
        "label": "D",
        "textEn": "null",
        "textAr": "null"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The value \"799\" is mapped from the JSON map directly to the item.price property as a string, so printing it outputs 799.",
    "explanationAr": "يتم تعيين القيمة \"799\" من خريطة JSON مباشرة إلى خاصية item.price كسلسلة، لذلك تؤدي طباعتها إلى إخراج 799.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_79",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 79,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.79)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (snapshot.connectionState == ConnectionState.waiting) { return const Center(child: CircularProgressIndicator()); } Which UI branch is selected while the Future is waiting?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (snapshot.connectionState == ConnectionState.waiting) { return const Center(child: CircularProgressIndicator()); } Which UI branch is selected while the (Future) is waiting?",
    "options": [
      {
        "label": "A",
        "textEn": "A loading spinner",
        "textAr": "دائرة تحميل (loading spinner)"
      },
      {
        "label": "B",
        "textEn": "The product list",
        "textAr": "قائمة المنتجات"
      },
      {
        "label": "C",
        "textEn": "A delete dialog",
        "textAr": "مربع حوار الحذف (delete dialog)"
      },
      {
        "label": "D",
        "textEn": "A login form",
        "textAr": "نموذج تسجيل الدخول"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "CircularProgressIndicator is a standard Flutter widget used to show a loading spinner while waiting for a Future to complete, which corresponds to ConnectionState.waiting.",
    "explanationAr": "CircularProgressIndicator هي أداة Flutter قياسية تُستخدم لإظهار مؤشر تحميل أثناء انتظار اكتمال Future، وهو ما يتوافق مع ConnectionState.waiting.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_80",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 80,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.80)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final items = snapshot.data ?? const <ProductDataModel>[]; if (items.isEmpty) { return const Center(child: Text('No products found')); } What result is expected when products is empty?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: final items = snapshot.data ?? const <ProductDataModel>[]; if (items.isEmpty) { return const Center(child: Text('No products found')); } ما النتيجة المتوقعة عندما تكون قائمة المنتجات (products) فارغة؟",
    "options": [
      {
        "label": "A",
        "textEn": "No products found",
        "textAr": "لم يتم العثور على منتجات"
      },
      {
        "label": "B",
        "textEn": "HTTP 500",
        "textAr": "HTTP 500"
      },
      {
        "label": "C",
        "textEn": "RandomUser list",
        "textAr": "قائمة RandomUser"
      },
      {
        "label": "D",
        "textEn": "Upload grid",
        "textAr": "شبكة الرفع (Upload grid)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The code logic explicitly states that if `items.isEmpty` is true, it returns the text \"No products found\" to inform the user that the list is empty.",
    "explanationAr": "ينص منطق الكود بوضوح على أنه إذا كان `items.isEmpty` صحيحًا (true)، فإنه يرجع النص \"No products found\" لإعلام المستخدم بأن القائمة فارغة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_81",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 81,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.81)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (response.statusCode != 200) { throw Exception('GET failed: ${response.statusCode}'); } What happens when the GET status is 500?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (response.statusCode != 200) { throw Exception('GET failed: ${response.statusCode}'); } What happens when the (GET) status is 500?",
    "options": [
      {
        "label": "A",
        "textEn": "An exception is thrown",
        "textAr": "يتم إلقاء استثناء (exception)"
      },
      {
        "label": "B",
        "textEn": "The body is trusted as success",
        "textAr": "يتم الوثوق في المحتوى (body) كنجاح"
      },
      {
        "label": "C",
        "textEn": "MySQL is opened directly",
        "textAr": "يتم فتح MySQL مباشرة"
      },
      {
        "label": "D",
        "textEn": "The UI automatically deletes data",
        "textAr": "واجهة المستخدم (UI) تقوم بحذف البيانات تلقائياً"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The status 500 represents an Internal Server Error, which is not 200. Thus, the condition `!= 200` evaluates to true, and an Exception is thrown.",
    "explanationAr": "تمثل الحالة 500 خطأ خادم داخلي، وهي ليست 200. وبالتالي، يتم تقييم الشرط `!= 200` على أنه صحيح (true)، ويتم إلقاء استثناء (Exception).",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_82",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 82,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.82)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following co de snippet: final users = await fetchUsers(); print('users=${users.length}'); How many users does the console driver expect after a successful RandomUser request with results=20?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following co de snippet: final users = (await) fetchUsers(); print('users=${users.length}'); How many users does the console driver expect after a successful RandomUser request with results=20?",
    "options": [
      {
        "label": "A",
        "textEn": "20",
        "textAr": "20"
      },
      {
        "label": "B",
        "textEn": "1",
        "textAr": "1"
      },
      {
        "label": "C",
        "textEn": "0 always",
        "textAr": "0 دائماً"
      },
      {
        "label": "D",
        "textEn": "201",
        "textAr": "201 (تم إنشاء السجل بنجاح Created)"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "Since the request asked for results=20, a successful fetch will parse and return a list of 20 users, making users.length equal to 20.",
    "explanationAr": "نظرًا لأن الطلب طلب 20 نتيجة (results=20)، فإن الجلب الناجح سيقوم بتحليل وإرجاع قائمة مكونة من 20 مستخدمًا، مما يجعل طول قائمة المستخدمين (users.length) يساوي 20.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_83",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 83,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.83)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final r = await http.post( Uri.parse('$baseUrl/adddata.php'), body: { 'itemcode': 'A10', 'itemname': 'Mouse', 'price': '25', 'stock': '4'}, ); Which endpoint and method does the create code use? }, ); Which endpoint and method does the create code use?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final r = (await) http.post( Uri.parse('$baseUrl/adddata.php'), body: { 'itemcode': 'A10', 'itemname': 'Mouse', 'price': '25', 'stock': '4'}, ); Which endpoint and method does the create code use? }, ); Which endpoint and method does the create code use?",
    "options": [
      {
        "label": "A",
        "textEn": "POST adddata.php",
        "textAr": "POST adddata.php"
      },
      {
        "label": "B",
        "textEn": "GET getdata.php",
        "textAr": "GET getdata.php"
      },
      {
        "label": "C",
        "textEn": "DELETE deleteData.php",
        "textAr": "DELETE deleteData.php"
      },
      {
        "label": "D",
        "textEn": "PUT editdata.php",
        "textAr": "PUT editdata.php"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The http.post method is explicitly called on the URI pointing to adddata.php, so a POST request is sent.",
    "explanationAr": "يتم استدعاء طريقة http.post بشكل صريح على الرابط الذي يشير إلى adddata.php، لذلك يتم إرسال طلب POST.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_84",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 84,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.84)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (r.statusCode != 200 && r.statusCode != 201) { throw Exception('Create failed: ${r.statusCode}'); } What does the success check do when create returns status 200?",
    "questionAr": "إذا كان لدينا مقتطف الشيفرة التالي: if (r.statusCode != 200 && r.statusCode != 201) { throw Exception('Create failed: ${r.statusCode}'); } ماذا يفعل فحص النجاح عندما ترجع عملية الإنشاء (create) رمز الحالة 200؟",
    "options": [
      {
        "label": "A",
        "textEn": "Treats 200 as success",
        "textAr": "يعتبر 200 نجاحًا (success)"
      },
      {
        "label": "B",
        "textEn": "Throws an exception",
        "textAr": "يرمي استثناءً (Throws an exception)"
      },
      {
        "label": "C",
        "textEn": "Deletes the item",
        "textAr": "تحذف العنصر"
      },
      {
        "label": "D",
        "textEn": "Opens Camera",
        "textAr": "تفتح الكاميرا"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The if statement checks if the status is NOT 200 and NOT 201. Since 200 matches one of the excluded failure conditions, it bypasses the exception and is treated as a success.",
    "explanationAr": "تتحقق عبارة (if) مما إذا كانت الحالة ليست 200 وليست 201. ولأن 200 هي إحدى الحالات المقبولة، فإنه يتجاوز الاستثناء ويتم التعامل معها كنجاح.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_85",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 85,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Online Data Storage & API",
    "subtopic": "HTTP Methods & CRUD",
    "type": "mcq",
    "examRelevance": "included",
    "exclusionReason": null,
    "source": "Lab 10 (Q2.85)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: final r = await http.post( Uri.parse('$baseUrl/deleteData.php'), body: {'id': '7'}, ); Which request is sent for id=7?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: final r = (await) http.post( Uri.parse('$baseUrl/deleteData.php'), body: {'id': '7'}, ); Which request is sent for id=7?",
    "options": [
      {
        "label": "A",
        "textEn": "POST deleteData.php with id=7 in the body",
        "textAr": "(POST) deleteData.php مع id=7 في الجسم (body)"
      },
      {
        "label": "B",
        "textEn": "GET getdata.php/7",
        "textAr": "GET getdata.php/7"
      },
      {
        "label": "C",
        "textEn": "GET adddata.php?id=7",
        "textAr": "GET adddata.php?id=7"
      },
      {
        "label": "D",
        "textEn": "HTTP DELETE file://7",
        "textAr": "HTTP DELETE file://7"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "The http.post method is used, targeting deleteData.php, and the body map contains {\"id\": \"7\"}, which sends a POST request with id=7 in the body.",
    "explanationAr": "يتم استخدام طريقة http.post، وتستهدف deleteData.php، وتحتوي خريطة الجسم على {\"id\": \"7\"}، والتي ترسل طلب POST مع id=7 في الجسم.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_86",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 86,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.86)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "EXCLUDED FROM FINAL EXAM",
    "questionEn": "If we have the following code snippet: final XFile? image = await picker.pickImage(source: source); if (image == null) return; What happens if I magePicker returns null?",
    "questionAr": "سؤال رفع الصور (مستبعد من الاختبار): If we have the following code snippet: final XFile? image = (await) picker.pickImage(source: source); if (image == null) return; What happens if I magePicker returns null?",
    "options": [
      {
        "label": "A",
        "textEn": "The upload function returns without sending a request",
        "textAr": "تعود دالة الرفع بدون إرسال طلب"
      },
      {
        "label": "B",
        "textEn": "A 201 response is forced",
        "textAr": "يتم فرض استجابة (response) 201"
      },
      {
        "label": "C",
        "textEn": "A MySQL row is inserted",
        "textAr": "تم إدراج صف في MySQL"
      },
      {
        "label": "D",
        "textEn": "A FormatException is thrown",
        "textAr": "يتم طرح FormatException"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "EXCLUDED FROM FINAL EXAM: Image uploading with API is officially quarantined from the exam scope per Eng. Ruqaih Salman's syllabus.",
    "explanationAr": "مستبعد رسمياً من الاختبار النهائي: موضوع رفع الصور عبر الـ (API) مستبعد رسمياً من الاختبار النهائي وفق توجيهات أستاذة المادة.",
    "codeSnippet": null
  },
  {
    "id": "lab10_mcq_87",
    "lecture": 10,
    "lab": "Lab 10",
    "num": 87,
    "section": "Q2. Multiple Choice Questions",
    "topic": "Image Upload API",
    "subtopic": "Multipart & XFile",
    "type": "mcq",
    "examRelevance": "excluded",
    "exclusionReason": "EXCLUDED FROM FINAL EXAM per Professor announcement: API with Images is not in exam scope",
    "source": "Lab 10 (Q2.87)",
    "sourceType": "actual",
    "isGenerated": false,
    "badge": "ACTUAL LAB QUESTION",
    "questionEn": "If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 201) { throw Exception(...); } if (!mounted) return; await reloadImages(); What does the upload code do after HTTP 200 or 201?",
    "questionAr": "سؤال متعلق بالمنهج: If we have the following code snippet: if (response.statusCode != 200 && response.statusCode != 201) { throw Exception(...); } if (!mounted) return; (await) reloadImages(); What does the upload code do after (HTTP) 200 or 201?",
    "options": [
      {
        "label": "A",
        "textEn": "Reloads server images if the widget is still mounted",
        "textAr": "يعيد تحميل صور الخادم (server images) إذا كان الويدجت لا يزال مثبتًا (mounted)"
      },
      {
        "label": "B",
        "textEn": "Stores only the phone path",
        "textAr": "يخزن مسار الهاتف فقط"
      },
      {
        "label": "C",
        "textEn": "Skips the serve r response",
        "textAr": "يتخطى استجابة الخادم (server response)"
      },
      {
        "label": "D",
        "textEn": "Connects directly to MySQL",
        "textAr": "يتصل مباشرة بـ MySQL"
      }
    ],
    "correctAnswer": "A",
    "explanationEn": "After confirming the successful 200/201 status and ensuring the widget is still mounted, the code proceeds to await `reloadImages()` to refresh the view.",
    "explanationAr": "بعد تأكيد حالة النجاح 200/201 والتأكد من أن الواجهة (widget) لا تزال نشطة، يتابع الكود لانتظار `reloadImages()` لتحديث العرض.",
    "codeSnippet": null
  },
  {
    "id": "gen_l7_01",
    "lecture": 7,
    "lab": "Practice",
    "num": 1,
    "section": "Generated Practice",
    "topic": "Navigator Stack Mechanics",
    "subtopic": "Stack Tracing",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Exam Simulator",
    "sourceType": "generated",
    "isGenerated": true,
    "badge": "GENERATED PRACTICE QUESTION",
    "questionEn": "An app starts on Screen A. The user performs Navigator.push to Screen B, then Navigator.pushReplacement to Screen C. What will happen when the user presses the system Back button on Screen C?",
    "questionAr": "يبدأ التطبيق في الشاشة A. ينفذ المستخدم (Navigator).push للانتقال إلى الشاشة B، ثم ينفذ (Navigator).(pushReplacement) إلى الشاشة C. ماذا سيحدث عندما يضغط المستخدم على زر الرجوع في الشاشة C؟",
    "options": [
      {
        "label": "A",
        "textEn": "Returns to Screen B",
        "textAr": "يعود إلى الشاشة B"
      },
      {
        "label": "B",
        "textEn": "Returns to Screen A",
        "textAr": "يعود إلى الشاشة A"
      },
      {
        "label": "C",
        "textEn": "The application exits immediately",
        "textAr": "يتم إغلاق التطبيق فوراً"
      },
      {
        "label": "D",
        "textEn": "Throws a NavigatorStackException",
        "textAr": "يرمي استثناء في مكدس التنقل"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "pushReplacement replaced Screen B with Screen C on top of the stack. Therefore, Screen B was popped and destroyed. Below Screen C is Screen A. Pressing Back returns directly to Screen A.",
    "explanationAr": "قامت (pushReplacement) باستبدال الشاشة B بالشاشة C في قمة المكدس وحذفت الشاشة B من سجل الرجوع. وبالتالي أصبحت الشاشة A هي التي تقع أسفل C مباشرة. الضغط على الرجوع سيعود للشاشة A."
  },
  {
    "id": "gen_l7_02",
    "lecture": 7,
    "lab": "Practice",
    "num": 2,
    "section": "Generated Practice",
    "topic": "Anonymous vs Named Routing",
    "subtopic": "Decoupling",
    "type": "tf",
    "examRelevance": "included",
    "source": "Exam Simulator",
    "sourceType": "generated",
    "isGenerated": true,
    "badge": "GENERATED PRACTICE QUESTION",
    "questionEn": "Named routing provides looser architectural coupling than Anonymous routing because calling screens do not need to import or reference destination widget classes directly.",
    "questionAr": "يوفر التوجيه المسمى (Named routing) ترابطاً معمارياً أقل وأضعف من التوجيه المجهول لأن الشاشات لا تحتاج لاستيراد كلاسات الويدجت الهدف مباشرة.",
    "options": null,
    "correctAnswer": "True",
    "explanationEn": "True. In Named routing, the screen only calls Navigator.pushNamed('/path'). The MaterialApp routes table maps that string to the actual widget class, decoupling the screens.",
    "explanationAr": "صحيح. في التوجيه المسمى تحتاج الشاشة لمعرفة الاسم النصي فقط للمسار، بينما يتولى جدول routes في MaterialApp ربطه بالويدجت الفعلي، مما يحقق استقلالية الشاشات."
  },
  {
    "id": "gen_l8_01",
    "lecture": 8,
    "lab": "Practice",
    "num": 3,
    "section": "Generated Practice",
    "topic": "FutureBuilder in Depth",
    "subtopic": "Lifecycle Safety",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Exam Simulator",
    "sourceType": "generated",
    "isGenerated": true,
    "badge": "GENERATED PRACTICE QUESTION",
    "questionEn": "Why must the Future passed to FutureBuilder be instantiated outside the build() method (e.g. in initState)?",
    "questionAr": "لماذا يجب إنشاء كائن الـ (Future) الممرر إلى (FutureBuilder) خارج دالة (build()) (مثلاً داخل initState)؟",
    "options": [
      {
        "label": "A",
        "textEn": "Because build() is not allowed to return FutureBuilder",
        "textAr": "لأن دالة (build()) لا يُسمح لها بإرجاع (FutureBuilder)"
      },
      {
        "label": "B",
        "textEn": "To prevent the asynchronous operation from re-triggering repeatedly on every widget rebuild",
        "textAr": "لمنع إعادة تنفيذ العملية غير المتزامنة تكراراً مع كل إعادة بناء للشاشة"
      },
      {
        "label": "C",
        "textEn": "Because FutureBuilder only works with synchronous functions",
        "textAr": "لأن (FutureBuilder) يعمل فقط مع الدوال المتزامنة"
      },
      {
        "label": "D",
        "textEn": "To convert the Future automatically into a Stream",
        "textAr": "لتحويل الـ (Future) تلقائياً إلى (Stream)"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "If instantiated inside build(), every time the framework rebuilds the widget (e.g., keyboard opens, parent updates), a brand new Future is created, restarting the async task repeatedly.",
    "explanationAr": "إذا تم إنشاء الـ (Future) داخل (build())، فمع كل إعادة بناء للشاشة سيتم إنشاء كائن (Future) جديد والبدء في طلب البيانات من الصفر، مما يسبب استهلاكاً للشبكة وحلقات لا نهائية."
  },
  {
    "id": "gen_l9_01",
    "lecture": 9,
    "lab": "Practice",
    "num": 4,
    "section": "Generated Practice",
    "topic": "Local Data Storage",
    "subtopic": "Storage Selection",
    "type": "mcq",
    "examRelevance": "included",
    "source": "Exam Simulator",
    "sourceType": "generated",
    "isGenerated": true,
    "badge": "GENERATED PRACTICE QUESTION",
    "questionEn": "Which local storage solution is best suited for an offline shopping catalog containing 5,000 products requiring price filtering and keyword search?",
    "questionAr": "أي حلول التخزين المحلي هو الأنسب لكتالوج منتجات يضم 5000 منتج ويتطلب التصفية بالسعر والبحث بالكلمات المفتاحية دون اتصال؟",
    "options": [
      {
        "label": "A",
        "textEn": "SharedPreferences",
        "textAr": "التفضيلات المشتركة (SharedPreferences)"
      },
      {
        "label": "B",
        "textEn": "SQLite Database (sqflite)",
        "textAr": "قاعدة بيانات (SQLite) (sqflite)"
      },
      {
        "label": "C",
        "textEn": "Single raw Text file (.txt)",
        "textAr": "ملف نصي عادي واحد (.txt)"
      },
      {
        "label": "D",
        "textEn": "Process Memory variable in State",
        "textAr": "متغير مؤقت في ذاكرة المعالج"
      }
    ],
    "correctAnswer": "B",
    "explanationEn": "SQLite provides relational indexing, SQL WHERE clauses, ORDER BY, and fast querying across thousands of rows. SharedPreferences and single text files cannot efficiently filter or query large datasets.",
    "explanationAr": "قواعد بيانات (SQLite) تدعم الفهارس واستعلامات SQL المنظمة (WHERE, ORDER BY) والبحث السريع في آلاف السجلات، على عكس (SharedPreferences) والملفات النصية العادية."
  },
  {
    "id": "gen_l10_01",
    "lecture": 10,
    "lab": "Practice",
    "num": 5,
    "section": "Generated Practice",
    "topic": "Online Data Storage & API",
    "subtopic": "CRUD Operations",
    "type": "tf",
    "examRelevance": "included",
    "source": "Exam Simulator",
    "sourceType": "generated",
    "isGenerated": true,
    "badge": "GENERATED PRACTICE QUESTION",
    "questionEn": "When connecting from an Android Emulator to a local XAMPP Apache PHP server running on the same development computer, the URL should use http://10.0.2.2 instead of http://localhost.",
    "questionAr": "عند الاتصال من محاكي أندرويد بخادم PHP محلي (XAMPP) على نفس جهاز الكمبيوتر، يجب استخدام العنوان http://10.0.2.2 بدلاً من http://localhost.",
    "options": null,
    "correctAnswer": "True",
    "explanationEn": "True. In the Android Emulator virtual network, 10.0.2.2 is the dedicated loopback interface alias mapped to 127.0.0.1 on the host development machine.",
    "explanationAr": "صحيح. داخل محاكي أندرويد يمثل العنوان 10.0.2.2 بوابة الاتصال الافتراضية الخاصة المرتبطة بـ 127.0.0.1 (localhost) على جهاز الكمبيوتر المضيف."
  }
];
