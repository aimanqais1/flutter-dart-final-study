// Lecture 7 Navigation Stack Simulation Data & Comparison
// Based on Dr. Ruqaih Salman's Lecture 7, Summary 7, and Lab 7

export const navigationOperations = [
  {
    id: "push",
    name: "Navigator.push()",
    nameAr: "إضافة شاشة جديدة (Push)",
    syntax: "Navigator.push(context, MaterialPageRoute(builder: (context) => ScreenB()));",
    descriptionEn: "Pushes a new route onto the stack over the current route. The user can press Back to return to the previous screen.",
    descriptionAr: "تدفع شاشة جديدة إلى أعلى المكدس فوق الشاشة الحالية. يمكن للمستخدم الضغط على زر الرجوع للعودة للشاشة السابقة.",
    stackEffect: "Stack grows by +1. New screen becomes top and visible.",
    stackEffectAr: "يزداد المكدس بمقدار 1. تصبح الشاشة الجديدة في القمة وتظهر للمستخدم."
  },
  {
    id: "pop",
    name: "Navigator.pop()",
    nameAr: "إزالة الشاشة الحالية (Pop)",
    syntax: "Navigator.pop(context, optionalResult);",
    descriptionEn: "Removes the top route from the stack and reveals the route immediately below it. An optional result value can be passed back.",
    descriptionAr: "تزيل الشاشة العلوية من المكدس وتُظهر الشاشة التي تليها مباشرة في الأسفل. يمكن تمرير نتيجة اختيارية للشاشة السابقة.",
    stackEffect: "Stack shrinks by -1. The screen below becomes visible.",
    stackEffectAr: "ينقص المكدس بمقدار 1. وتعود الشاشة السابقة للظهور مجدداً."
  },
  {
    id: "pushReplacement",
    name: "Navigator.pushReplacement()",
    nameAr: "استبدال الشاشة الحالية (Push Replacement)",
    syntax: "Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => HomeScreen()));",
    descriptionEn: "Replaces the current route with a new route. The old route is discarded from the stack history, so pressing Back will NOT return to it (e.g., Splash -> Home or Login -> Dashboard).",
    descriptionAr: "تستبدل الشاشة الحالية بشاشة جديدة تماماً مع التخلص من الشاشة القديمة من سجل المكدس، لذا فإن الضغط على زر الرجوع لن يعود إليها (مثل: شاشة الترحيب إلى الرئيسية).",
    stackEffect: "Stack size remains same. Current top route is swapped with new route.",
    stackEffectAr: "يبقى حجم المكدس كما هو. يتم استبدال الشاشة العلوية الحالية بالشاشة الجديدة."
  },
  {
    id: "pushNamed",
    name: "Navigator.pushNamed()",
    nameAr: "الانتقال عبر الاسم المسجل (Push Named)",
    syntax: "Navigator.pushNamed(context, '/details', arguments: {'id': 42});",
    descriptionEn: "Pushes a named route onto the stack using its registered string key from MaterialApp.routes table.",
    descriptionAr: "تدفع شاشة مسجلة مسبقاً في جدول المسارات عبر اسمها النصي المعرف مع إمكانية تمرير وسائط اختيارية.",
    stackEffect: "Stack grows by +1 based on route table lookup.",
    stackEffectAr: "يزداد المكدس بمقدار 1 بناءً على المسار المسجل في الجدول."
  },
  {
    id: "popUntil",
    name: "Navigator.popUntil()",
    nameAr: "الرجوع المتتابع حتى شرط (Pop Until)",
    syntax: "Navigator.popUntil(context, (route) => route.isFirst);",
    descriptionEn: "Pops routes one by one until the specified predicate returns true. Commonly used to return all the way to the first/root screen.",
    descriptionAr: "تزيل الشاشات بالتتابع من أعلى المكدس حتى يتحقق الشرط المحدد. تستخدم عادة للعودة السريعة إلى الشاشة الأولى الرئيسية في التطبيق.",
    stackEffect: "Multiple routes removed until predicate matches. Stack reduced to matching route.",
    stackEffectAr: "حذف عدة شاشات حتى يتحقق الشرط. يتقلص المكدس حتى الشاشة المطلوبة."
  },
  {
    id: "pushAndRemoveUntil",
    name: "Navigator.pushAndRemoveUntil()",
    nameAr: "إضافة وتفريغ ما سبق (Push and Remove Until)",
    syntax: "Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context) => LoginScreen()), (route) => false);",
    descriptionEn: "Pushes a new route and removes all existing routes on the stack when (route) => false is passed. Essential for Logout flows to completely clear navigation history.",
    descriptionAr: "تدفع شاشة جديدة وتفرغ كافة الشاشات السابقة من المكدس عند استخدام الشرط (route) => false. أساسية جداً عند تسجيل الخروج لمنع العودة للشاشات السابقة.",
    stackEffect: "Entire previous stack is wiped out. The new route becomes the sole route.",
    stackEffectAr: "يتم تفريغ المكدس السابق بالكامل وتصبح الشاشة الجديدة هي الشاشة الوحيدة المتبقية."
  }
];

export const routingComparison = {
  titleEn: "Anonymous Routing vs Named Routing",
  titleAr: "مقارنة شاملة: التوجيه المجهول مقابل التوجيه المسمى",
  dimensions: [
    {
      criterionEn: "Definition",
      criterionAr: "التعريف والمفهوم",
      anonymous: "Routes instantiated directly inline using MaterialPageRoute(builder: (context) => Widget()).",
      anonymousAr: "إنشاء المسارات مباشرة وسريعاً عبر MaterialPageRoute ودالة builder في مكان الاستدعاء.",
      named: "Routes declared globally in MaterialApp.routes with string path identifiers (e.g. '/home').",
      namedAr: "تعريف المسارات مسبقاً في جدول routes داخل MaterialApp باستخدام أسماء نصية."
    },
    {
      criterionEn: "Coupling",
      criterionAr: "درجة الترابط بين الشاشات",
      anonymous: "Tightly coupled: Screen A directly imports and instantiates Screen B widget class.",
      anonymousAr: "ترابط وثيق: الشاشة الأولى تستورد وتنشئ كائن الشاشة الثانية مباشرة.",
      named: "Loosely coupled: Screen A only knows the string route name (e.g. '/details'), not the implementation class.",
      namedAr: "ترابط مفكك وضعيف: الشاشة الأولى تحتاج فقط لمعرفة الاسم النصي للمسار دون الحاجة لاستيراد كلاس الشاشة."
    },
    {
      criterionEn: "Passing Arguments",
      criterionAr: "تمرير البيانات والوسائط",
      anonymous: "Directly passed via destination widget constructor (e.g. DetailsScreen(courseId: 10)). Type-safe!",
      anonymousAr: "تمرير مباشر وآمن برمجياً عبر باني الشاشة (Constructor) مع تحديد الأنواع بدقة.",
      named: "Passed via arguments parameter: ModalRoute.of(context)!.settings.arguments or onGenerateRoute.",
      namedAr: "تمرير عبر وسيط arguments ويتم استخراجه عبر ModalRoute.of(context)!.settings.arguments."
    },
    {
      criterionEn: "Setup Complexity",
      criterionAr: "سهولة الإعداد والتهيئة",
      anonymous: "Very simple, zero configuration. Ideal for small applications or one-off dialogs/screens.",
      anonymousAr: "سهل جداً وبسيط ولا يتطلب أي إعداد مسبق، مثالي للتطبيقات الصغيرة والشاشات العابرة.",
      named: "Requires upfront route table registration in MaterialApp.routes or onGenerateRoute.",
      namedAr: "يتطلب تسجيلاً مسبقاً لجدول المسارات داخل MaterialApp."
    },
    {
      criterionEn: "Web & Deep Linking",
      criterionAr: "دعم الروابط العميقة والويب",
      anonymous: "Poor support for browser URL bars or direct external deep linking.",
      anonymousAr: "ضعيف في دعم شريط عناوين المتصفح والروابط العميقة المباشرة.",
      named: "Naturally maps to URL paths (e.g. '/profile/edit') making web and deep links easier.",
      namedAr: "يتطابق بشكل طبيعي مع مسارات الروابط في المتصفح ويسهل دعم الروابط العميقة."
    },
    {
      criterionEn: "Best Practice Use",
      criterionAr: "أفضل حالات الاستخدام",
      anonymous: "Simple transitions, modal overlays, dynamic screens with strict constructor arguments.",
      anonymousAr: "التنقلات البسيطة، النوافذ العائمة، والشاشات التي تتطلب مدخلات إلزامية في الباني.",
      named: "Complex apps with central navigation maps, drawer navigation, or tab navigation.",
      namedAr: "التطبيقات الكبيرة ذات المسارات المركزية، القوائم الجانبية، والتطبيقات متعددة الشاشات."
    }
  ]
};
