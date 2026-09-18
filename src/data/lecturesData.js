// Comprehensive Bilingual Course Content for Lectures 7, 8, 9, 10
// Sourced directly from Dr. Ruqaih Salman's 2027-2028 Summaries, 2026 Lectures, and Level 3 Labs.

export const lecturesData = {
  7: {
    id: 7,
    number: '07',
    titleEn: 'Navigation in Flutter',
    titleAr: 'التنقل وتوجيه الشاشات في فلاتر',
    subtitleEn: 'Anonymous vs Named Routing, Route Stack, and Lifecycle Operations',
    subtitleAr: 'التوجيه المجهول مقابل المسمى، مكدس المسارات، ودوال إدارة دورة الحياة',
    doctorExamFocus: 'Included in full: Anonymous Routing, Named Routing, Navigator methods (push, pop, pushReplacement, pushNamed, popUntil, pushAndRemoveUntil). The professor specifically emphasizes understanding stack state changes after each call and the contrast between Anonymous and Named approaches.',
    doctorExamFocusAr: 'مطلوبة بالكامل في الاختبار: التوجيه المجهول والتوجيه المسمى، دوال Navigator (push, pop, pushReplacement, pushNamed, popUntil, pushAndRemoveUntil). تركز الدكتورة بشدة على تتبع حالة مكدس الشاشات بعد كل استدعاء والفروقات الدقيقة بين التوجيهين.',
    overviewEn: 'Navigation in Flutter allows users to move between different screens. The Navigator widget manages these screens as a Last-In-First-Out (LIFO) stack of Route objects. Flutter provides two primary architectural paradigms: Anonymous Routing (inline with MaterialPageRoute) and Named Routing (string identifiers registered in MaterialApp.routes).',
    overviewAr: 'يتيح التنقل في فلاتر للمستخدم التنقل بين شاشات التطبيق المختلفة. يدير ويدجت Navigator هذه الشاشات كمكدس (Stack) من نوع الداخل آخراً يخرج أولاً (LIFO). يوفر فلاتر أسلوبين معماريين رئيسيين: التوجيه المجهول (عبر MaterialPageRoute مباشرة) والتوجيه المسمى (عبر أسماء نصية مسجلة في MaterialApp.routes).',
    
    mentalModel: {
      titleEn: 'Navigator Stack Mental Model',
      titleAr: 'النموذج الذهني لمكدس التنقل',
      descriptionEn: 'Think of Navigator as a stack of physical paper cards. You push a new card on top, obscuring the card beneath it. When you pop, the top card is removed and discarded, revealing the card below. Replacements swap the card on top directly.',
      descriptionAr: 'تخيل الـ Navigator ككومة من البطاقات الورقية. عند تنفيذ push تضع بطاقة جديدة فوق الكومة فتحجب ما تحتها. وعند تنفيذ pop تسحب البطاقة العلوية وترميها، فتظهر البطاقة التي تحتها فوراً. أما الاستبدال pushReplacement فيستبدل البطاقة العلوية دون إضافة بطاقة جديدة.',
      points: [
        { term: 'Route', defEn: 'A screen or page represented by a Widget wrapped in a Route object.', defAr: 'شاشة أو صفحة يمثلها ويدجت مغلف داخل كائن Route.' },
        { term: 'Navigator', defEn: 'The widget that manages the route history stack using push and pop.', defAr: 'الويدجت المسؤول عن إدارة مكدس المسارات وسجل الشاشات عبر push و pop.' },
        { term: 'BuildContext', defEn: 'Required by Navigator.of(context) to locate the Navigator widget in the widget tree.', defAr: 'سياق البناء المطلوب لدالة Navigator.of(context) لتحديد موقع الـ Navigator في شجرة الويدجت.' },
        { term: 'Top of Stack', defEn: 'The currently visible screen the user sees and interacts with.', defAr: 'قمة المكدس: هي الشاشة المعروضة حالياً للمستخدم ويتفاعل معها.' }
      ]
    },

    topics: [
      {
        id: 'anonymous-routing',
        titleEn: '1. Anonymous Routing',
        titleAr: '1. التوجيه المجهول (Anonymous Routing)',
        contentEn: 'Anonymous routes are created on the fly directly inside event handlers (like onPressed) using MaterialPageRoute. You supply a builder callback function that returns the destination widget instance. It does not require declaring any string names in the app configuration.',
        contentAr: 'يتم إنشاء المسارات المجهولة مباشرة أثناء تشغيل التطبيق داخل دوال الأحداث (مثل onPressed) باستخدام كلاس MaterialPageRoute. نقوم بتمرير دالة builder تُرجع كائن الشاشة الهدف مباشرة، ولا يتطلب ذلك تسجيل أي اسم نصي مسبق في إعدادات التطبيق.',
        codeSnippet: `// Anonymous navigation to SecondScreen
ElevatedButton(
  child: const Text('Go to Second Screen'),
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const SecondScreen(data: 'Hello from First!')),
    );
  },
);`,
        codeExplanationEn: 'Navigator.push takes the current BuildContext and a MaterialPageRoute. The builder parameter takes a function (context) => SecondScreen(), instantiating SecondScreen directly. Data can be passed cleanly via the SecondScreen constructor.',
        codeExplanationAr: 'تستقبل Navigator.push سياق البناء BuildContext وكائن MaterialPageRoute. تستدعي خاصية builder دالة تُرجع كائن SecondScreen مباشرة. يمكن تمرير البيانات بأمان عبر باني الشاشة (Constructor).'
      },
      {
        id: 'named-routing',
        titleEn: '2. Named Routing',
        titleAr: '2. التوجيه المسمى (Named Routing)',
        contentEn: 'Named routing defines a centralized route map in the MaterialApp widget using string paths (e.g., \'/\', \'/second\', \'/details\'). Screens are pushed using Navigator.pushNamed(context, \'/path\'). This decouples screen navigation from explicit widget class imports.',
        contentAr: 'يعتمد التوجيه المسمى على تعريف جدول مسارات مركزي داخل ويدجت MaterialApp باستخدام معرفات نصية (مثل \'/\' و \'/second\'). يتم الانتقال باستدعاء Navigator.pushNamed(context, \'/second\'). هذا الأسلوب يفصل بين منطق الانتقال وبين استيراد كلاسات الشاشات مباشرة.',
        codeSnippet: `// 1. In MaterialApp registration:
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const FirstScreen(),
    '/second': (context) => const SecondScreen(),
    '/details': (context) => const DetailsScreen(),
  },
);

// 2. Navigating with route name:
Navigator.pushNamed(context, '/second');

// 3. Passing arguments with named route:
Navigator.pushNamed(
  context,
  '/details',
  arguments: 'Course-402',
);

// 4. Extracting arguments in destination screen:
final args = ModalRoute.of(context)!.settings.arguments as String;`,
        codeExplanationEn: 'The routes map associates string keys with widget builder functions. initialRoute specifies which route loads when the app launches. Arguments are passed via the optional arguments parameter and retrieved using ModalRoute.of(context)!.settings.arguments.',
        codeExplanationAr: 'يربط جدول routes الأسماء النصية بدوال بناء الشاشات. تحدد initialRoute الشاشة الافتتاحية للتطبيق. تُمرر البيانات عبر وسيط arguments الاختياري وتُسترجع داخل الشاشة الهدف باستخدام ModalRoute.of(context)!.settings.arguments.'
      },
      {
        id: 'stack-methods',
        titleEn: '3. Navigator Stack Operations',
        titleAr: '3. عمليات ودوال مكدس التنقل',
        contentEn: 'The Navigator provides distinct methods for manipulating the route stack history depending on user flow and requirements.',
        contentAr: 'يوفر Navigator دوال متخصصة للتحكم في سجل مكدس الشاشات وفقاً لمتطلبات وتدفق تجربة المستخدم.',
        methods: [
          {
            name: 'push(context, route)',
            purposeEn: 'Adds a new route onto the stack. Previous screen stays below it.',
            purposeAr: 'يضيف شاشة جديدة فوق المكدس مع بقاء الشاشة السابقة تحتها.',
            useCase: 'Moving from item list to item detail screen.'
          },
          {
            name: 'pop(context, [result])',
            purposeEn: 'Removes the topmost route from the stack and optionally passes back a result.',
            purposeAr: 'يزيل الشاشة العلوية من المكدس ويعود للشاشة السابقة مع إمكانية إرجاع قيمة.',
            useCase: 'User taps the Back button or closes a modal.'
          },
          {
            name: 'pushReplacement(context, route)',
            purposeEn: 'Replaces the current route with a new one. The previous route is popped and destroyed.',
            purposeAr: 'يستبدل الشاشة الحالية بشاشة جديدة ويحذف الشاشة الحالية نهائياً من سجل الرجوع.',
            useCase: 'Splash screen navigating to Login, or Login navigating to Dashboard.'
          },
          {
            name: 'pushNamed(context, routeName, [arguments])',
            purposeEn: 'Pushes a route identified by its registered string name in the routes table.',
            purposeAr: 'ينتقل إلى شاشة معرفة باسمها النصي المسجل في جدول المسارات.',
            useCase: 'Structured deep navigation across configured app sections.'
          },
          {
            name: 'popUntil(context, predicate)',
            purposeEn: 'Repeatedly pops routes until a route satisfying the predicate condition is reached.',
            purposeAr: 'يزيل الشاشات بالتتابع حتى يتحقق الشرط المحدد في الدالة الممررة.',
            useCase: 'Returning directly to root screen: popUntil(context, (route) => route.isFirst).'
          },
          {
            name: 'pushAndRemoveUntil(context, newRoute, predicate)',
            purposeEn: 'Pushes a new route and removes all existing routes until the predicate is satisfied. When predicate returns false, all previous routes are removed.',
            purposeAr: 'يدفع شاشة جديدة ويفرغ كافة الشاشات السابقة عند تمرير الشرط (route) => false.',
            useCase: 'User logs out: push LoginScreen and destroy all user session screens from history.'
          }
        ]
      },
      {
        id: 'pop-scope',
        titleEn: '4. PopScope & Hardware Back Handling',
        titleAr: '4. التحكم في زر الرجوع عبر PopScope',
        contentEn: 'In modern Flutter (Flutter 3.12+ / 3.44), WillPopScope is deprecated and replaced by PopScope. PopScope wraps a widget to intercept system back gestures or buttons, allowing developers to show confirmation dialogs before exiting.',
        contentAr: 'في إصدارات فلاتر الحديثة، تم استبدال WillPopScope بويدجت PopScope الأحدث. يُغلف PopScope شاشة الويدجت لاعتراض زر الرجوع في النظام، مما يتيح للمطور عرض رسالة تأكيد خروج قبل إغلاق الصفحة.',
        codeSnippet: `PopScope(
  canPop: false, // Prevents automatic pop
  onPopInvokedWithResult: (didPop, result) async {
    if (didPop) return;
    final bool shouldPop = await showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Exit screen?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: const Text('No')),
          TextButton(onPressed: () => Navigator.pop(context, true), child: const Text('Yes')),
        ],
      ),
    ) ?? false;
    if (shouldPop && context.mounted) {
      Navigator.pop(context);
    }
  },
  child: Scaffold( /* screen UI */ ),
)`
      }
    ],

    commonMistakes: [
      {
        mistakeEn: 'Using Navigator.push instead of Navigator.pushReplacement for Login/Splash screens.',
        mistakeAr: 'استخدام push بدلاً من pushReplacement في شاشات تسجيل الدخول أو الترحيب.',
        correctionEn: 'Users who press the hardware back button will end up back on the login or splash screen. Always replace them.',
        correctionAr: 'سيتمكن المستخدم من الرجوع لشاشة تسجيل الدخول أو الترحيب بالضغط على زر الرجوع. استخدم دائماً pushReplacement.'
      },
      {
        mistakeEn: 'Confusing popUntil with pushAndRemoveUntil.',
        mistakeAr: 'الخلط بين popUntil و pushAndRemoveUntil.',
        correctionEn: 'popUntil only REMOVES screens from the stack until a condition is met; it DOES NOT push a new screen. pushAndRemoveUntil pushes a brand new screen AND clears previous routes.',
        correctionAr: 'دالة popUntil تحذف الشاشات فقط حتى يتحقق الشرط ولا تدفع أي شاشة جديدة. بينما pushAndRemoveUntil تدفع شاشة جديدة وتفرغ ما قبلها.'
      },
      {
        mistakeEn: 'Supplying a slash / in anonymous route definitions.',
        mistakeAr: 'وضع أسماء مسارات نصية تبدأ بشرطة / داخل التوجيه المجهول.',
        correctionEn: 'String route names belong strictly to Named Routing in MaterialApp.routes, not Anonymous Routing.',
        correctionAr: 'الأسماء النصية تخص التوجيه المسمى فقط في جدول routes ولا تستخدم في التوجيه المجهول.'
      }
    ],

    quickChecklist: [
      'Anonymous routes use MaterialPageRoute(builder: (context) => Widget()).',
      'Named routes use MaterialApp.routes and Navigator.pushNamed(context, "/path").',
      'push() adds a screen to stack; pop() removes the top screen.',
      'pushReplacement() replaces current route without keeping it in back history.',
      'popUntil((route) => route.isFirst) returns all the way back to root home screen.',
      'pushAndRemoveUntil(newRoute, (route) => false) clears entire history (used for Logout).',
      'await Navigator.push receives data returned by Navigator.pop(context, result).'
    ]
  },

  8: {
    id: 8,
    number: '08',
    titleEn: 'Asynchronous Programming in Dart & Flutter',
    titleAr: 'البرمجة غير المتزامنة في دارت وفلاتر',
    subtitleEn: 'Event Loop, Future, async/await, FutureBuilder & StreamBuilder',
    subtitleAr: 'حلقة الأحداث، كائن Future، كلمات async/await، ويدجت FutureBuilder و StreamBuilder',
    doctorExamFocus: 'Included in full: Synchronous vs Asynchronous programming, Event Loop / Isolate architecture, Future lifecycle states, async and await keywords, FutureBuilder properties and AsyncSnapshot connection states, StreamBuilder basics. Taught portions only.',
    doctorExamFocusAr: 'مطلوبة بالكامل: البرمجة المتزامنة مقابل غير المتزامنة، معمارية حلقة الأحداث وخيط التنفيذ Isolate في دارت، حالات كائن Future، كلمات async و await، خصائص FutureBuilder وحالات AsyncSnapshot، ومبادئ StreamBuilder.',
    overviewEn: 'Unlike multi-threaded frameworks (like native Android with multiple threads), Dart code runs inside a single-threaded Isolate powered by an Event Loop. Asynchronous operations in Dart allow heavy I/O tasks (network requests, database queries, file reading) to wait without blocking the main UI thread from rendering frames.',
    overviewAr: 'على عكس بيئات التطوير متعددة الخيوط (مثل أندرويد التقليدي)، يتم تنفيذ كود لغة دارت داخل خيط تنفيذي واحد (Isolate) تديره حلقة الأحداث (Event Loop). تتيح البرمجة غير المتزامنة لعمليات الإدخال والإخراج الثقيلة (الشبكة، قواعد البيانات، الملفات) الانتظار دون حظر واجهة المستخدم عن رسم الإطارات بسلاسة.',

    mentalModel: {
      titleEn: 'Single-Threaded Dart Isolate & Event Loop',
      titleAr: 'الخيط الأحادي وحلقة الأحداث في دارت',
      descriptionEn: 'The Dart isolate consists of: Call Stack (currently executing synchronous instructions), Microtask Queue (internal high-priority callbacks), and Event Queue (external events, I/O completions, timers, tap gestures). The Event Loop continuously checks if the Call Stack is empty, then processes Microtasks, then processes Events one by one.',
      descriptionAr: 'يتكون Isolate في دارت من: مكدس الاستدعاء Call Stack (التعليمات المتزامنة الجارية)، طابور المهام الدقيقة Microtask Queue (مهام داخلية عالية الأولوية)، وطابور الأحداث Event Queue (استجابات الشبكة، المؤقتات، لمسات الشاشة). تقوم حلقة الأحداث بسحب الأحداث ومعالجتها واحداً تلو الآخر كلما فرغ مكدس الاستدعاء.',
      points: [
        { term: 'Single-Threaded', defEn: 'Dart executes one operation at a time on a single CPU thread per isolate.', defAr: 'تنفذ لغة دارت تعليمة واحدة فقط في كل لحظة على خيط معالج أحادي لكل Isolate.' },
        { term: 'Non-Blocking I/O', defEn: 'Waiting for network or disk does not halt the CPU thread; execution resumes when the event is queued.', defAr: 'انتظار استجابة الشبكة أو القرص لا يجمد المعالج، بل يُستأنف الكود بمجرد وصول الحدث إلى الطابور.' },
        { term: 'Future<T>', defEn: 'An object representing a single eventual result or error from an asynchronous computation.', defAr: 'كائن يمثل نتيجة مؤجلة واحدة (قيمة أو خطأ) لعملية غير متزامنة.' },
        { term: 'Stream<T>', defEn: 'An object delivering a sequence of asynchronous events or values over time.', defAr: 'كائن يقدم تدفقاً متتابعاً من القيم أو الأحداث غير المتزامنة عبر الزمن.' }
      ]
    },

    topics: [
      {
        id: 'sync-vs-async',
        titleEn: '1. Synchronous vs Asynchronous Execution',
        titleAr: '1. التنفيذ المتزامن مقابل غير المتزامن',
        contentEn: 'Synchronous programming executes line by line in strict sequence. If line 2 takes 5 seconds to download data, the UI freezes and stops responding to user touches (causing ANR - Application Not Responding). Asynchronous programming initiates the operation, registers a callback in the Event Queue, and immediately lets the isolate continue rendering the UI.',
        contentAr: 'تنفذ البرمجة المتزامنة الأوامر سطراً بسطر بالتتابع. إذا استغرق السطر الثاني 5 ثوانٍ لتحميل بيانات، ستتجمد الواجهة وتتوقف عن الاستجابة للمسات المستخدم. بينما تبدأ البرمجة غير المتزامنة العملية وتسجل إشعاراً في طابور الأحداث، وتسمح للتطبيق بمواصلة رسم الشاشة والتفاعل بحرية.',
        codeSnippet: `// Synchronous execution (Predict Console Output)
void testExecution() {
  print('1: Start');
  Future.delayed(const Duration(seconds: 1), () {
    print('2: Delayed completed');
  });
  print('3: End');
}
// OUTPUT:
// 1: Start
// 3: End
// (after 1 sec) -> 2: Delayed completed`,
        codeExplanationEn: 'Even though Future.delayed is defined in the middle, it places its callback into the Event Queue. The synchronous code finishes first (1, then 3). After 1 second, the Event Loop executes 2.',
        codeExplanationAr: 'على الرغم من وجود Future.delayed في المنتصف، إلا أنه يضع مهمته في طابور الأحداث. ينتهي الكود المتزامن أولاً بطباعة 1 ثم 3، وبعد ثانية واحدة تستدعي حلقة الأحداث الأمر 2.'
      },
      {
        id: 'future-lifecycle',
        titleEn: '2. Future<T> Lifecycle States',
        titleAr: '2. دورة حياة كائن Future وحالاته',
        contentEn: 'A Future is in one of three possible states: 1) Uncompleted (the operation has started and is currently working); 2) Completed with Value (the operation succeeded and returned a value of type T); 3) Completed with Error (the operation threw an exception or failed).',
        contentAr: 'يمر كائن الـ Future بثلاث حالات محددة: 1) غير مكتمل (Uncompleted): العملية قيد التنفيذ حالياً؛ 2) مكتمل بقيمة (Completed with Value): نجحت العملية وأعادت قيمة من النوع T؛ 3) مكتمل بخطأ (Completed with Error): فشلت العملية ورمت استثناءً (Exception).',
        points: [
          { term: 'Uncompleted', defEn: 'Future is pending. FutureBuilder shows waiting indicator.', defAr: 'قيد الانتظار: يعرض FutureBuilder مؤشر تحميل (CircularProgressIndicator).' },
          { term: 'Completed with Value', defEn: 'Future succeeded. snapshot.hasData is true; snapshot.data holds value.', defAr: 'اكتمل بنجاح: تكون snapshot.hasData صحيحة، وتحتوي snapshot.data على البيانات.' },
          { term: 'Completed with Error', defEn: 'Future failed. snapshot.hasError is true; snapshot.error holds error object.', defAr: 'اكتمل بخطأ: تكون snapshot.hasError صحيحة، وتحتوي snapshot.error على تفاصيل الخطأ.' }
        ]
      },
      {
        id: 'async-await',
        titleEn: '3. async & await Syntax',
        titleAr: '3. استخدام الكلمات المفتاحية async و await',
        contentEn: 'Marking a function with async allows it to use the await keyword and causes it to automatically return a Future. The await keyword pauses the execution of THAT SPECIFIC async function until the awaited Future completes, without freezing the isolate thread.',
        contentAr: 'تحديد الدالة بكلمة async يتيح لها استخدام كلمة await ويجعلها ترجع Future تلقائياً. تقوم كلمة await بإيقاف تنفيذ تلك الدالة غير المتزامنة تحديداً حتى يكتمل الـ Future، دون أن تجمد خيط التطبيق الرئيسي إطلاقاً.',
        codeSnippet: `Future<String> fetchUserData() async {
  try {
    // Simulating 2-second network request
    await Future.delayed(const Duration(seconds: 2));
    return 'Ruqaih Salman';
  } catch (error) {
    throw Exception('Failed to load user: $error');
  }
}`,
        codeExplanationEn: 'The function returns Future<String>. The await pauses inside fetchUserData for 2 seconds. Any code calling this function can await it or pass it to a FutureBuilder.',
        codeExplanationAr: 'ترجع الدالة كائن Future<String>. توقف كلمة await الدالة لمدة ثانيتين، ويمكن استدعاؤها باستخدام await أو تمريرها إلى ويدجت FutureBuilder.'
      },
      {
        id: 'future-builder',
        titleEn: '4. FutureBuilder in Depth',
        titleAr: '4. الويدجت FutureBuilder بالتفصيل',
        contentEn: 'FutureBuilder connects a Future to the widget tree. It takes two primary arguments: future (the Future to watch) and builder (a function called whenever the Future status changes, receiving BuildContext and AsyncSnapshot<T>).',
        contentAr: 'يربط ويدجت FutureBuilder بين نتيجة الـ Future وشجرة الواجهة. يستقبل خاصيتين أساسيتين: future (كائن الـ Future المراد مراقبته) و builder (دالة تُستدعى مع كل تغير في حالة الـ Future وتستقبل سياق البناء ولقطة الحالة AsyncSnapshot).',
        codeSnippet: `class UserProfileWidget extends StatefulWidget {
  const UserProfileWidget({super.key});
  @override
  State<UserProfileWidget> createState() => _UserProfileWidgetState();
}

class _UserProfileWidgetState extends State<UserProfileWidget> {
  // CRITICAL RULE: Store the Future in initState to avoid re-fetching on rebuilds!
  late Future<String> _userFuture;

  @override
  void initState() {
    super.initState();
    _userFuture = fetchUserData();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<String>(
      future: _userFuture,
      builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        } else if (snapshot.hasError) {
          return Center(child: Text('Error: \${snapshot.error}'));
        } else if (snapshot.hasData) {
          return Center(child: Text('User: \${snapshot.data}', style: const TextStyle(fontSize: 22)));
        } else {
          return const Center(child: Text('No data found'));
        }
      },
    );
  }
}`,
        codeExplanationEn: 'The builder inspects snapshot.connectionState. If waiting, it returns CircularProgressIndicator. If snapshot.hasError is true, it shows error text. If snapshot.hasData is true, it displays snapshot.data.',
        codeExplanationAr: 'تفحص دالة البناء حالة snapshot.connectionState؛ إذا كانت waiting تعرض مؤشر تحميل، وإذا كانت snapshot.hasError صحيحة تعرض رسالة الخطأ، وإذا كانت snapshot.hasData صحيحة تعرض البيانات المسترجعة.'
      },
      {
        id: 'stream-builder',
        titleEn: '5. Streams and StreamBuilder',
        titleAr: '5. التدفقات (Streams) وويدجت StreamBuilder',
        contentEn: 'While a Future delivers a single value once, a Stream delivers multiple events over time (like a conveyor belt or live sensor). Functions returning a Stream are marked with async* and emit values using the yield keyword. StreamBuilder automatically listens to a Stream and rebuilds the UI on each new event.',
        contentAr: 'بينما يعيد الـ Future قيمة واحدة لمرة واحدة فقط، يوفر الـ Stream سلسلة متدفقة من القيم المتعددة عبر الزمن (مثل حساس مباشر أو ساعة). الدوال التي تُرجع Stream تُحدد بكلمة async* وتُصدر القيم باستخدام كلمة yield. يقوم StreamBuilder بالاستماع للتدفق تلقائياً وإعادة بناء الواجهة مع كل قيمة جديدة.',
        codeSnippet: `// 1. Generator function emitting a number every second:
Stream<int> countStream() async* {
  for (int i = 1; i <= 5; i++) {
    await Future.delayed(const Duration(seconds: 1));
    yield i; // Emit next value
  }
}

// 2. Consuming stream in UI:
StreamBuilder<int>(
  stream: countStream(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const CircularProgressIndicator();
    }
    return Text('Count: \${snapshot.data}');
  },
)`
      }
    ],

    commonMistakes: [
      {
        mistakeEn: 'Calling the async API directly inside FutureBuilder future: fetchUserData().',
        mistakeAr: 'استدعاء الدالة غير المتزامنة مباشرة داخل خاصية future: fetchUserData() في build().',
        correctionEn: 'Whenever the widget rebuilds (due to setState, keyboard opening, or theme changes), fetchUserData() will execute again from scratch, causing infinite network loops! Store it in initState.',
        correctionAr: 'عند حدوث أي إعادة بناء (Rebuild) للشاشة، سيتم إعادة استدعاء الدالة البرمجية مجدداً والدخول في حلقة طلبات لا نهائية! الصحيح تخزينها في initState.'
      },
      {
        mistakeEn: 'Believing async/await creates multi-threaded CPU parallel execution.',
        mistakeAr: 'الاعتقاد بأن async/await تنشئ مسارات معالجة متوازية على خيوط CPU متعددة.',
        correctionEn: 'Dart is single-threaded. async/await only yields execution during I/O waiting. Heavy CPU computation will still freeze the UI unless moved to an Isolate.',
        correctionAr: 'لغة دارت تعمل على خيط أحادي. كلمات async/await تؤجل التنفيذ فقط أثناء انتظار عمليات الإدخال والإخراج، بينما العمليات الحسابية الثقيلة ستجمد الواجهة ما لم تُنقل لـ Isolate منفصل.'
      }
    ],

    quickChecklist: [
      'Dart runs in a single-threaded Isolate powered by an Event Loop.',
      'Synchronous code runs immediately on the Call Stack; async callbacks wait in the Event Queue.',
      'A Future has 3 states: Uncompleted, Completed with Value, Completed with Error.',
      'await can only be used inside a function marked with async.',
      'FutureBuilder properties: future and builder.',
      'AsyncSnapshot ConnectionStates: none, waiting, active, done.',
      'snapshot.hasData checks for successful value; snapshot.hasError checks for exception.',
      'Stream emits multiple values over time using async* and yield.'
    ]
  },

  9: {
    id: 9,
    number: '09',
    titleEn: 'Local Data Storage (Offline Persistence)',
    titleAr: 'التخزين المحلي للبيانات (دون اتصال)',
    subtitleEn: 'SQLite (sqflite), SharedPreferences (Classic & Async/Cache), and File Storage',
    subtitleAr: 'قواعد بيانات SQLite، التفضيلات المشتركة SharedPreferences، وتخزين الملفات النصية و JSON',
    doctorExamFocus: 'THE ENTIRE CHAPTER IS INCLUDED IN THE EXAM. Covers offline storage mental model, lifetimes, SQLite Dog CRUD model (openDatabase, onCreate, insert, query, update, delete, ConflictAlgorithm), SharedPreferences primitives, SharedPreferencesAsync with Cache, and File Storage with path_provider and JSON.',
    doctorExamFocusAr: 'الفصل بالكامل مطلوب في الاختبار النهائي! يشمل مفاهيم التخزين المحلي، دورة حياة البيانات، تطبيق SQLite بنموذج Dog (فتح القاعدة، onCreate، الإضافة، الاستعلام، التعديل، الحذف، وحل التعارض)، SharedPreferences الكلاسيكية والحديثة بالكاش، وتخزين الملفات النصية و JSON بـ path_provider.',
    overviewEn: 'Local data persistence allows mobile apps to preserve user data offline across app launches without relying on remote servers. Lecture 9 explores the persistence mental model and 3 major storage solutions: 1) SQLite database for relational structured records, 2) SharedPreferences for lightweight key-value settings, and 3) File storage for raw text and serialized JSON documents.',
    overviewAr: 'يتيح التخزين المحلي لتطبيقات الهاتف الاحتفاظ ببيانات المستخدم على الجهاز دون اتصال بالإنترنت ودون الاعتماد على خوادم سحابية. تتناول المحاضرة التاسعة مفاهيم بقاء البيانات و3 حلول تخزين أساسية: 1) قواعد بيانات SQLite للبيانات المهيكلة والعلائقية، 2) SharedPreferences للإعدادات البسيطة بصيغة مفتاح وقيمة، و 3) تخزين الملفات للنصوص الخام وملفات JSON.',

    mentalModel: {
      titleEn: 'Persistence Mental Model & Data Lifetimes',
      titleAr: 'النموذج المفاهيمي للتخزين ودورة حياة البيانات',
      descriptionEn: 'Different storage mechanisms have drastically different lifetimes and survival scopes in mobile OS architectures. Understanding these distinctions is a core exam requirement.',
      descriptionAr: 'تختلف آليات التخزين في دورة حياتها وبقائها داخل نظام تشغيل الهاتف. فهم هذه الفروقات هو أحد أهم متطلبات الاختبار النهائي.',
      points: [
        { term: 'Widget State (Ephemeral)', defEn: 'Lives in the widget tree memory. Lost when the widget is unmounted or navigating away.', defAr: 'حالة مؤقتة تعيش في شجرة الويدجت. تضيع فور إغلاق الشاشة أو تدمير الويدجت.' },
        { term: 'Process Memory (RAM)', defEn: 'Lives while the app process runs. Survives ordinary rebuilds, but disappears completely when the app process is terminated or killed by the OS.', defAr: 'ذاكرة المعالج (RAM): تعيش أثناء تشغيل التطبيق، ولكنها تزول تماماً عند إنهاء معالج التطبيق من قبل النظام.' },
        { term: 'Persistent Local Storage (Disk)', defEn: 'Written to physical device storage (SQLite, SharedPreferences, Files). Survives process kill, device reboot, and app updates. Cleared on app uninstall.', defAr: 'التخزين الدائم على القرص: يُكتب على وحدة تخزين الهاتف (SQLite, SharedPreferences, Files). يبقى بعد إنهاء التطبيق وإعادة تشغيل الجهاز. يُحذف فقط عند إلغاء التثبيت.' },
        { term: 'Proof of Persistence', defEn: 'Save data -> Terminate app process -> Relaunch app -> Read and render restored data.', defAr: 'الإثبات الحقيقي للبقاء: حفظ البيانات -> إنهاء معالج التطبيق -> إعادة فتح التطبيق -> قراءة وعرض البيانات المسترجعة.' }
      ]
    },

    topics: [
      {
        id: 'sqlite-sqflite',
        titleEn: '1. SQLite Database with sqflite',
        titleAr: '1. قواعد بيانات SQLite وحزمة sqflite',
        contentEn: 'SQLite is an embedded relational SQL database engine. The sqflite package provides asynchronous SQLite support for Flutter. The classroom and exam standard is the Dog/Fido CRUD model.',
        contentAr: 'تعد SQLite قاعدة بيانات علائقية مدمجة تدعم استعلامات SQL الكاملة. توفر حزمة sqflite دعماً كاملاً غير متزامن في فلاتر. النموذج القياسي المعتمد في المحاضرة والاختبار هو نموذج الكلاب (Dog/Fido CRUD).',
        codeSnippet: `// 1. Dog Data Model
class Dog {
  final int id;
  final String name;
  final int age;

  Dog({required this.id, required this.name, required this.age});

  Map<String, dynamic> toMap() {
    return {'id': id, 'name': name, 'age': age};
  }
}

// 2. Open Database & Create Table
Future<Database> openDogDatabase() async {
  return openDatabase(
    join(await getDatabasesPath(), 'doggie_database.db'),
    onCreate: (db, version) {
      return db.execute(
        'CREATE TABLE dogs(id INTEGER PRIMARY KEY, name TEXT, age INTEGER)',
      );
    },
    version: 1,
  );
}

// 3. INSERT with ConflictAlgorithm
Future<void> insertDog(Dog dog, Database db) async {
  await db.insert(
    'dogs',
    dog.toMap(),
    conflictAlgorithm: ConflictAlgorithm.replace,
  );
}

// 4. QUERY All Dogs
Future<List<Dog>> getDogs(Database db) async {
  final List<Map<String, dynamic>> maps = await db.query('dogs');
  return List.generate(maps.length, (i) {
    return Dog(id: maps[i]['id'], name: maps[i]['name'], age: maps[i]['age']);
  });
}

// 5. UPDATE Dog (where & whereArgs)
Future<void> updateDog(Dog dog, Database db) async {
  await db.update(
    'dogs',
    dog.toMap(),
    where: 'id = ?',
    whereArgs: [dog.id],
  );
}

// 6. DELETE Dog
Future<void> deleteDog(int id, Database db) async {
  await db.delete(
    'dogs',
    where: 'id = ?',
    whereArgs: [id],
  );
}`,
        codeExplanationEn: 'The model has toMap() to serialize to SQLite column values. onCreate executes the DDL CREATE TABLE statement on first launch. whereArgs keeps user input parameterized to prevent SQL injection.',
        codeExplanationAr: 'يحتوي النموذج على دالة toMap() لتحويل الكائن إلى قيم أعمدة في الجدول. تنفذ دالة onCreate أمر إنشاء الجدول عند أول تشغيل. يضمن استخدام whereArgs فصل البيانات عن الاستعلام لحماية التطبيق من ثغرات SQL Injection.'
      },
      {
        id: 'shared-preferences-topic',
        titleEn: '2. SharedPreferences (Classic & Modern Async)',
        titleAr: '2. التفضيلات المشتركة SharedPreferences (الكلاسيكية والحديثة)',
        contentEn: 'SharedPreferences stores key-value pairs of primitive types (int, double, bool, String, List<String>). It is ideal for lightweight settings like dark mode, username, or login status.',
        contentAr: 'تُستخدم SharedPreferences لحفظ أزواج المفاتيح والقيم للأنواع الأولية البسيطة. تعد الخيار الأمثل للإعدادات الخفيفة مثل المظهر الداكن، اسم المستخدم، أو حالة تسجيل الدخول.',
        codeSnippet: `// Classic SharedPreferences
final prefs = await SharedPreferences.getInstance();
await prefs.setString('username', 'Ruqaih');
await prefs.setBool('isLoggedIn', true);
final String? username = prefs.getString('username');
final bool loggedIn = prefs.getBool('isLoggedIn') ?? false;

// Modern SharedPreferencesAsync (Flutter 3.44+)
final prefsAsync = SharedPreferencesAsync();
await prefsAsync.setString('auth_token', 'token_123');
final String? token = await prefsAsync.getString('auth_token');`,
        codeExplanationEn: 'Classic requires obtaining an instance via SharedPreferences.getInstance(). Modern SharedPreferencesAsync operates directly on the platform store without holding all keys in memory at startup.',
        codeExplanationAr: 'تتطلب الطريقة الكلاسيكية جلب كائن النسخة بـ getInstance()، بينما تعمل SharedPreferencesAsync الحديثة بشكل غير متزامن مباشر دون إبطاء بدء التطبيق بتحميل كل المفاتيح مسبقاً.'
      },
      {
        id: 'file-storage-topic',
        titleEn: '3. File Storage (dart:io & path_provider)',
        titleAr: '3. تخزين الملفات النصية و JSON (dart:io و path_provider)',
        contentEn: 'To save files to disk, combine path_provider (which provides platform-appropriate directory paths like getApplicationDocumentsDirectory) with dart:io (which provides File read and write methods).',
        contentAr: 'لحفظ الملفات على القرص، ندمج حزمة path_provider (التي توفر مسارات المجلدات المناسبة مثل getApplicationDocumentsDirectory) مع مكتبة dart:io (التي توفر كلاس File للقراءة والكتابة).',
        codeSnippet: `// 1. Locate documents directory
Future<File> get _counterFile async {
  final directory = await getApplicationDocumentsDirectory();
  return File('\${directory.path}/counter.txt');
}

// 2. Write String to file
Future<File> writeCounter(int count) async {
  final file = await _counterFile;
  return file.writeAsString('$count');
}

// 3. Read String from file
Future<int> readCounter() async {
  try {
    final file = await _counterFile;
    final contents = await file.readAsString();
    return int.parse(contents);
  } catch (e) {
    return 0; // fallback if file does not exist yet
  }
}

// 4. JSON File Storage
Future<void> saveSettingsJson(Map<String, dynamic> data) async {
  final dir = await getApplicationDocumentsDirectory();
  final file = File('\${dir.path}/settings.json');
  await file.writeAsString(jsonEncode(data));
}`,
        codeExplanationEn: 'getApplicationDocumentsDirectory() points to a directory the user cannot directly edit, preserved across reboots. jsonEncode serializes Maps to JSON text before saving.',
        codeExplanationAr: 'تشير getApplicationDocumentsDirectory() إلى مجلد مستندات التطبيق المحمي الذي يبقى بعد إعادة التشغيل. تحول jsonEncode كائنات دارت إلى نصوص JSON قبل كتابتها في الملف.'
      }
    ],

    commonMistakes: [
      {
        mistakeEn: 'Storing plaintext passwords in SharedPreferences.',
        mistakeAr: 'تخزين كلمات المرور الحساسة بنص صريح داخل SharedPreferences.',
        correctionEn: 'SharedPreferences is completely unencrypted XML on Android and Plist on iOS. It must NEVER be used to store passwords or financial data.',
        correctionAr: 'تخزن SharedPreferences البيانات بنصوص صريحة غير مشفرة (ملفات XML على أندرويد و Plist على iOS). يُمنع منعاً باتاً تخزين كلمات المرور أو البيانات الحساسة فيها.'
      },
      {
        mistakeEn: 'Hardcoding database schema modifications without increasing the version number.',
        mistakeAr: 'تعديل أوامر CREATE TABLE دون زيادة رقم إصدار قاعدة البيانات version.',
        correctionEn: 'onCreate only runs ONCE when the database file is first created. Future column changes require incrementing version and writing onUpgrade migration logic.',
        correctionAr: 'تنفذ دالة onCreate مرة واحدة فقط عند إنشاء ملف القاعدة لأول مرة. تعديل الأعمدة لاحقاً يتطلب زيادة رقم version وكتابة كود الترقية في دالة onUpgrade.'
      }
    ],

    quickChecklist: [
      'Entire chapter 9 is included in the exam!',
      'SQLite (sqflite) is best for large, relational, searchable data.',
      'SharedPreferences is best for simple key-value primitive settings.',
      'SharedPreferences is NOT encrypted.',
      'File storage combines path_provider and dart:io File.',
      'getApplicationDocumentsDirectory() persists files until the app is uninstalled.',
      'In SQLite, conflictAlgorithm: ConflictAlgorithm.replace replaces duplicate rows cleanly.',
      'where: "id = ?" and whereArgs: [id] prevent SQL injection.'
    ]
  },

  10: {
    id: 10,
    number: '10',
    titleEn: 'Online Data Storage & REST API',
    titleAr: 'التخزين السحابي وواجهات برمجة التطبيقات (REST API)',
    subtitleEn: 'JSON Parsing, Local Assets, REST APIs, PHP & MySQL CRUD Backend',
    subtitleAr: 'تحليل JSON، ملفات الأصول المحلية، واجهات REST، والربط مع خادم PHP وقاعدة MySQL لعمليات CRUD',
    doctorExamFocus: 'Included: API concepts, Request contract (method, endpoint, headers, body, status, response), JSON parsing (jsonDecode, Dart data models), Local JSON assets (ProductItem), Online JSON with FutureBuilder (RandomUser), REST HTTP methods (GET, POST, PUT, DELETE), PHP REST API backend with MySQL CRUD (getdata, adddata, editdata, deletedata), Android loopback alias 10.0.2.2, HTTP status codes. CRITICAL EXCLUSION: API WITH IMAGES IS STRICTLY EXCLUDED FROM THE EXAM!',
    doctorExamFocusAr: 'مطلوبة في الاختبار: مفاهيم الـ API، أجزاء الطلب الستة، تحليل صيغة JSON وتحويلها لنماذج كلاسات، قراءة أصول JSON المحلية (ProductItem)، جلب JSON من الإنترنت وعرضه بـ FutureBuilder (RandomUser)، طرق HTTP لعمليات CRUD، والربط مع سكربتات PHP وقاعدة MySQL (getdata, adddata, editdata, deletedata)، عنوان المحاكي 10.0.2.2، وأكواد الحالة. استثناء حاسم: الـ API مع رفع الصور غير مطلوب إطلاقاً في الاختبار!',
    overviewEn: 'Online data storage connects mobile apps to web servers and remote databases via Application Programming Interfaces (APIs). Lecture 10 covers reading local JSON asset files, requesting online JSON over HTTP, mapping JSON to Dart objects, and performing full Create, Read, Update, and Delete (CRUD) operations against a PHP REST API backed by a MySQL database.',
    overviewAr: 'يربط التخزين السحابي تطبيقات الهاتف بالخوادم وقواعد البيانات البعيدة عبر واجهات برمجة التطبيقات (API). تغطي المحاضرة العاشرة قراءة ملفات JSON المحلية من الأصول، استدعاء بيانات JSON عبر شبكة الإنترنت باستخدام HTTP، تحويل الـ JSON إلى كائنات دارت، وتنفيذ عمليات CRUD الكاملة (إضافة، عرض، تعديل، حذف) مع خادم PHP وقاعدة بيانات MySQL.',

    mentalModel: {
      titleEn: 'The 4-Layer Client-Server API Architecture',
      titleAr: 'المعمارية الرباعية للاتصال بين العميل والخادم',
      descriptionEn: 'Flutter mobile apps NEVER connect directly to MySQL database sockets. Instead, a REST API acts as the secure intermediary layer.',
      descriptionAr: 'لا يتصل تطبيق فلاتر إطلاقاً بقاعدة بيانات MySQL بشكل مباشر، بل تعمل واجهة REST API كطبقة وسيطة آمنة.',
      points: [
        { term: 'Layer 1: Flutter Client', defEn: 'Sends HTTP requests (GET, POST) using package:http and parses JSON responses into Dart UI widgets.', defAr: 'يرسل طلبات HTTP باستخدام حزمة http ويحول استجابات الـ JSON إلى ويدجت في الواجهة.' },
        { term: 'Layer 2: HTTP Network / Loopback', defEn: 'Transport layer. Android Emulator uses 10.0.2.2 to access localhost / XAMPP on the development PC.', defAr: 'طبقة نقل الشبكة. يستخدم محاكي أندرويد العنوان 10.0.2.2 للوصول إلى localhost على حاسوب المطور.' },
        { term: 'Layer 3: PHP REST API', defEn: 'Server-side scripts (getdata.php, adddata.php, etc.) that validate input, execute SQL queries, and return JSON headers.', defAr: 'سكربتات PHP على الخادم تتحقق من المدخلات، وتنفذ استعلامات SQL، وتعيد النتائج بصيغة JSON.' },
        { term: 'Layer 4: MySQL Database', defEn: 'Relational database securely stored behind the PHP server. Database credentials stay on the server.', defAr: 'قاعدة البيانات العلائقية المحمية خلف الخادم، حيث تبقى بيانات الاتصال سرية في الخادم فقط.' }
      ]
    },

    topics: [
      {
        id: 'api-contract',
        titleEn: '1. The API Request / Response Contract',
        titleAr: '1. عقد استدعاء الـ API وأجزاء الطلب والاستجابة',
        contentEn: 'Every HTTP API interaction follows a strict 6-part contract: 1) Method (GET, POST, PUT, DELETE), 2) Endpoint URL (/api/products), 3) Headers (Content-Type: application/json), 4) Request Body (data payload sent in POST/PUT), 5) Status Code (200, 201, 404, 500), 6) Response Body (returned JSON data).',
        contentAr: 'يتبع كل اتصال بـ API عقداً دقيقاً يتكون من 6 أجزاء: 1) طريقة الطلب (Method)، 2) عنوان نقطة النهاية (Endpoint)، 3) الترويسات (Headers)، 4) جسم الطلب (Body)، 5) كود حالة الاستجابة (Status Code)، 6) جسم الاستجابة (Response Payload).',
        points: [
          { term: 'GET', defEn: 'Retrieves data from the server. Never sends data in request body.', defAr: 'قراءة واسترجاع البيانات من الخادم دون إرسال بيانات في جسم الطلب.' },
          { term: 'POST', defEn: 'Sends data to the server to create a new record or submit a form.', defAr: 'إرسال بيانات جديدة إلى الخادم لإنشاء سجل جديد أو تسجيل دخول.' },
          { term: 'PUT / PATCH', defEn: 'Updates an existing resource on the server.', defAr: 'تعديل وتحديث سجل موجود مسبقاً في الخادم.' },
          { term: 'DELETE', defEn: 'Removes a resource from the server.', defAr: 'حذف سجل أو مورد من الخادم.' }
        ]
      },
      {
        id: 'json-parsing-models',
        titleEn: '2. JSON Parsing & Dart Data Models',
        titleAr: '2. تحليل بيانات JSON وبناء نماذج الكلاسات في دارت',
        contentEn: 'The dart:convert library provides jsonDecode() to convert raw JSON strings into Dart Maps or Lists. Model classes with factory fromJson constructors map dynamic data into strongly-typed Dart objects.',
        contentAr: 'توفر مكتبة dart:convert دالة jsonDecode() لتحويل نصوص الـ JSON إلى كائنات Map أو List. وتوفر دوال البناء factory fromJson داخل الكلاسات تحويلاً آمناً ومحدداً بالأنواع.',
        codeSnippet: `// 1. Dart Data Model
class ProductDataModel {
  int? id;
  String? name;
  String? category;
  String? price;
  String? oldPrice;

  ProductDataModel({this.id, this.name, this.category, this.price, this.oldPrice});

  // Factory constructor to parse JSON Map into Model instance
  ProductDataModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    category = json['category'];
    price = json['price'];
    oldPrice = json['oldPrice'];
  }
}

// 2. Parsing a JSON Array String:
List<ProductDataModel> parseProducts(String jsonString) {
  final List<dynamic> list = jsonDecode(jsonString);
  return list.map((item) => ProductDataModel.fromJson(item)).toList();
}`,
        codeExplanationEn: 'ProductDataModel.fromJson extracts dictionary keys matching the JSON property names. jsonDecode converts the string into a List of Maps.',
        codeExplanationAr: 'تستخرج دالة ProductDataModel.fromJson الحقول عبر مفاتيح مطابقة لنص الـ JSON. وتحول jsonDecode النص إلى قائمة من القواميس.'
      },
      {
        id: 'local-json-asset',
        titleEn: '3. Reading Local JSON Assets (ProductItem)',
        titleAr: '3. قراءة ملف JSON محلي من الأصول (ProductItem)',
        contentEn: 'To read a local JSON file in Flutter: 1) Add the file (e.g. assets/ProductItem.json); 2) Register it in pubspec.yaml under flutter -> assets; 3) Read it using DefaultAssetBundle or rootBundle.loadString(); 4) Parse and display with ListView.builder.',
        contentAr: 'لقراءة ملف JSON محلي: 1) إضافة الملف للمشروع؛ 2) تسجيل مساره في pubspec.yaml تحت assets؛ 3) قراءته برمجياً عبر rootBundle.loadString()؛ 4) تحليله وعرضه في قائمة ListView.builder.',
        codeSnippet: `Future<List<ProductDataModel>> readJsonData() async {
  // Load JSON string from app bundle assets
  final jsondata = await rootBundle.loadString('assets/ProductItem.json');
  final list = json.decode(jsondata) as List<dynamic>;
  return list.map((e) => ProductDataModel.fromJson(e)).toList();
}`
      },
      {
        id: 'php-mysql-crud',
        titleEn: '4. PHP REST API & MySQL CRUD Endpoints',
        titleAr: '4. الربط مع سكربتات PHP وقاعدة MySQL لعمليات CRUD',
        contentEn: 'The lecture implements an inventory database connecting Flutter to PHP scripts hosted on localhost (XAMPP htdocs).',
        contentAr: 'تطبق المحاضرة نظام إدارة منتجات متكامل يربط تطبيق فلاتر بسكربتات PHP مستضافة على خادم محلي (XAMPP htdocs).',
        codeSnippet: `// Android Emulator Loopback URL:
const String baseUrl = 'http://10.0.2.2/flutter_course_api';

// 1. READ / VIEW (getdata.php)
Future<List<dynamic>> getData() async {
  final response = await http.get(Uri.parse('$baseUrl/getdata.php'));
  if (response.statusCode == 200) {
    return jsonDecode(response.body);
  } else {
    throw Exception('Failed to load data');
  }
}

// 2. INSERT / CREATE (adddata.php)
Future<void> addData(String itemname, String itemcode, String price) async {
  final response = await http.post(
    Uri.parse('$baseUrl/adddata.php'),
    body: {
      'itemname': itemname,
      'itemcode': itemcode,
      'price': price,
    },
  );
  if (response.statusCode == 200 || response.statusCode == 201) {
    print('Item added successfully');
  }
}

// 3. UPDATE / EDIT (editdata.php)
Future<void> editData(String id, String itemname, String itemcode, String price) async {
  await http.post(
    Uri.parse('$baseUrl/editdata.php'),
    body: {
      'id': id,
      'itemname': itemname,
      'itemcode': itemcode,
      'price': price,
    },
  );
}

// 4. DELETE (deletedata.php)
Future<void> deleteData(String id) async {
  await http.post(
    Uri.parse('$baseUrl/deletedata.php'),
    body: {'id': id},
  );
}`,
        codeExplanationEn: 'Notice that in Android Emulator, 10.0.2.2 connects to the host computer localhost. The PHP scripts access MySQL and echo json_encode($result).',
        codeExplanationAr: 'لاحظ أن العنوان 10.0.2.2 داخل محاكي أندرويد يرتبط بـ localhost على جهاز الكمبيوتر. تستقبل سكربتات PHP البيانات وتتعامل مع MySQL ثم تعيد النتيجة بـ json_encode.'
      },
      {
        id: 'image-api-exclusion',
        titleEn: '5. CRITICAL EXAM NOTICE: Image API Exclusion',
        titleAr: '5. تنبيه امتحاني هام جداً: استبعاد رفع الصور من الاختبار',
        contentEn: 'THE PROFESSOR SPECIFICALLY ANNOUNCED: API WITH IMAGES IS NOT INCLUDED IN THE FINAL EXAM. MultipartRequest, image_picker for upload, and flutter_upload_images table are excluded from final exam questions.',
        contentAr: 'أعلنت الدكتورة رسمياً وبوضوح: رفع الصور والتعامل مع الصور عبر الـ API غير مطلوب إطلاقاً في الاختبار النهائي! لذا تم استبعاد أسئلة رفع الصور و MultipartRequest من بنك أسئلة الاختبار.',
        status: 'EXCLUDED FROM FINAL EXAM'
      }
    ],

    commonMistakes: [
      {
        mistakeEn: 'Using http://localhost or http://127.0.0.1 in the Android Emulator to connect to XAMPP.',
        mistakeAr: 'استخدام localhost أو 127.0.0.1 داخل محاكي أندرويد للاتصال بـ XAMPP.',
        correctionEn: 'Inside Android Emulator, localhost refers to the virtual Android phone itself, NOT your computer! Use http://10.0.2.2 to reach your development PC.',
        correctionAr: 'يشير localhost داخل المحاكي إلى جهاز الأندرويد نفسه وليس حاسوبك! يجب استخدام 10.0.2.2 للوصول إلى سيرفر حاسوبك المضيف.'
      },
      {
        mistakeEn: 'Connecting Flutter directly to MySQL database using database credentials in mobile code.',
        mistakeAr: 'محاولة الاتصال المباشر من كود فلاتر بقاعدة MySQL وتضمين كلمات مرور القاعدة في التطبيق.',
        correctionEn: 'Mobile apps must NEVER connect directly to a database socket. Communication must always go through a backend REST API (PHP, Node, etc.).',
        correctionAr: 'يُحظر في تطبيقات الهاتف الاتصال المباشر بسوكت قواعد البيانات. يجب دائماً أن يكون الاتصال عبر واجهة REST API وسيطة لحماية أمان البيانات.'
      },
      {
        mistakeEn: 'Studying multipart image upload for the final exam.',
        mistakeAr: 'تضييع وقت المراجعة في دراسة أكواد رفع الصور بالمحاضرة العاشرة.',
        correctionEn: 'API with Images is explicitly EXCLUDED from the final exam by the professor. Focus on standard text/number JSON CRUD operations.',
        correctionAr: 'أعلنت الدكتورة رسمياً استبعاد رفع الصور عبر الـ API من الاختبار النهائي. ركز فقط على عمليات CRUD العادية لبيانات النصوص والأرقام.'
      }
    ],

    quickChecklist: [
      'API Contract parts: Method, Endpoint, Headers, Body, Status code, Response payload.',
      'GET retrieves data; POST sends new data; PUT updates; DELETE removes.',
      'jsonDecode() converts raw JSON string to Dart Map or List.',
      'ProductDataModel.fromJson maps JSON fields into class instance variables.',
      'Local assets must be registered in pubspec.yaml and loaded with rootBundle.loadString().',
      'In Android Emulator, 10.0.2.2 is the loopback alias for localhost.',
      'Status 200 means OK; 201 means Created; 404 means Not Found; 500 means Server Error.',
      'API with Images is STRICTLY EXCLUDED from the final exam!'
    ]
  }
};
