const questions = [
    {
        "question": "Mozart isn't ____ he lived in the 18th century.",
        "options": [
            "a. traditional",
            "b. surprising",
            "c. useful",
            "d. contemporary"
        ],
        "answer": "d",
        "explanation": {
            "en": "Mozart is considered contemporary to the 18th century, not traditional.",
            "ar": "يُعتبر موزارت معاصرًا للقرن الثامن عشر وليس تقليديًا."
        }
    },
    {
        "question": "____ the homework yesterday?",
        "options": [
            "a. Do you do",
            "b. Does you do",
            "c. Did you do",
            "d. Did you did"
        ],
        "answer": "c",
        "explanation": {
            "en": "The correct past tense form is 'Did you do'.",
            "ar": "الشكل الصحيح للماضي هو 'Did you do'."
        }
    },
    {
        "question": "She learned in Paris, the capital of France, ____ she got her PhD.",
        "options": [
            "a. who",
            "b. where",
            "c. which",
            "d. that"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Where' is used to refer to a place, in this case, Paris.",
            "ar": "'Where' تُستخدم للإشارة إلى مكان، في هذه الحالة، باريس."
        }
    },
    {
        "question": "There was construction on the way to work, so we took another ____.",
        "options": [
            "a. method",
            "b. victim",
            "c. approach",
            "d. route"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Route' refers to an alternative path or way.",
            "ar": "'Route' تشير إلى طريق أو مسار بديل."
        }
    },
    {
        "question": "Choose the wrong sentence:",
        "options": [
            "a. Alps is located in southern Europe.",
            "b. Alps are located in southern Europe.",
            "c. Alp's location is in southern Europe.",
            "d. The location of the Alps is in Southern Europe."
        ],
        "answer": "a",
        "explanation": {
            "en": "'Alps' is plural, so it should be 'are located'.",
            "ar": "'Alps' هي جمع، لذا يجب أن تكون 'are located'."
        }
    },
    {
        "question": "Last year, he ____ a book about life in ancient China.",
        "options": [
            "a. wrote",
            "b. was reading",
            "c. read",
            "d. reading"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Wrote' is the correct past tense form of 'write'.",
            "ar": "'Wrote' هي الشكل الصحيح في الماضي لكلمة 'write'."
        }
    },
    {
        "question": "Hani ____ for his new position as CEO of the company.",
        "options": [
            "a. emerged",
            "b. congratulated",
            "c. retained",
            "d. consented"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Congratulated' is the correct verb for expressing good wishes for a new position.",
            "ar": "'Congratulated' هو الفعل الصحيح للتعبير عن التهاني لمنصب جديد."
        }
    },
    {
        "question": "We ____ action movies since our childhood.",
        "options": [
            "a. have loved",
            "b. was loving",
            "c. have been loving",
            "d. love"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Have loved' is the correct present perfect form for actions starting in the past and continuing.",
            "ar": "'Have loved' هو الشكل الصحيح في المضارع التام للأفعال التي بدأت في الماضي وتستمر."
        }
    },
    {
        "question": "Some banks ask customers to ____ a password.",
        "options": [
            "a. remove",
            "b. rob",
            "c. select",
            "d. remind"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Select' is the correct verb for choosing a password.",
            "ar": "'Select' هو الفعل الصحيح لاختيار كلمة مرور."
        }
    },
    {
        "question": "Government should ____ jobs to unemployed people.",
        "options": [
            "a. create",
            "b. provide",
            "c. get",
            "d. change"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Provide' is the correct verb meaning to supply jobs.",
            "ar": "'Provide' هو الفعل الصحيح بمعنى توفير الوظائف."
        }
    },
    {
        "question": "If we have time, we ____ go shopping.",
        "options": [
            "a. will",
            "b. would",
            "c. would have",
            "d. might"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Will' indicates a future possibility given time.",
            "ar": "'Will' تشير إلى احتمال مستقبلي إذا توفر الوقت."
        }
    },
    {
        "question": "My children ____ at 2 pm on Saturday.",
        "options": [
            "a. have arrived",
            "b. had arrived",
            "c. arrive",
            "d. will arrive"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Will arrive' is the correct future tense form.",
            "ar": "'Will arrive' هو الشكل الصحيح في المستقبل."
        }
    },
    {
        "question": "I have a friend ____ never invited me to his birthday.",
        "options": [
            "a. whom",
            "b. who",
            "c. whose",
            "d. which"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Who' is the correct pronoun for referring to a person.",
            "ar": "'Who' هو الضمير الصحيح للإشارة إلى شخص."
        }
    },
    {
        "question": "Thomas Edison is a great scientist ____ the inventor of the light bulb.",
        "options": [
            "a. who",
            "b. which",
            "c. who's",
            "d. whom"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Who's' is a contraction of 'who is', which is appropriate here.",
            "ar": "'Who's' هي اختصار لـ 'who is' وهي مناسبة هنا."
        }
    },
    {
        "question": "____ Ahmad late? No, he ____. ",
        "options": [
            "a. Does/Doesn't",
            "b. Do/don't",
            "c. is/isn't",
            "d. was/wasn't"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Is/Isn't' is the correct form to ask and answer about Ahmad's lateness.",
            "ar": "'Is/Isn't' هو الشكل الصحيح للسؤال والإجابة عن تأخر أحمد."
        }
    },
    {
        "question": "The White House, ____ is the president's house, is in Washington.",
        "options": [
            "a. where",
            "b. who",
            "c. whose",
            "d. which"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Which' is used to provide additional information about a thing.",
            "ar": "'Which' تُستخدم لتقديم معلومات إضافية عن شيء."
        }
    },
    {
        "question": "New York City, ____ is the city of millions of people, has a high crime rate increase.",
        "options": [
            "a. which",
            "b. where",
            "c. whose",
            "d. who's"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Which' provides extra information about New York City.",
            "ar": "'Which' تقدم معلومات إضافية عن مدينة نيويورك."
        }
    },
    {
        "question": "I will keep playing the piano, as far as I'm ____. ",
        "options": [
            "a. creative",
            "b. concerned",
            "c. wise",
            "d. interesting"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Concerned' means as long as I care about it.",
            "ar": "'Concerned' تعني طالما أهتم بذلك."
        }
    },
    {
        "question": "____ is rich in potassium.",
        "options": [
            "a. The banana",
            "b. Bananas",
            "c. The bananas",
            "d. Banana"
        ],
        "answer": "a",
        "explanation": {
            "en": "Bananas are known for being rich in potassium.",
            "ar": "الموز معروف بأنه غني بالبوتاسيوم."
        }
    },
    {
        "question": "Look out, the boy ____.",
        "options": [
            "a. is falling",
            "b. fell",
            "c. is going to fall",
            "d. falls"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Is going to fall' indicates an immediate future action.",
            "ar": "'Is going to fall' تشير إلى فعل مستقبلي وشيك."
        }
    },
    {
        "question": "Our reading book ____ at Jarir store.",
        "options": [
            "a. is selling",
            "b. is sold",
            "c. sold",
            "d. selling"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Is sold' is the correct passive form indicating the book's status.",
            "ar": "'Is sold' هو الشكل الصحيح المبني للمجهول الذي يشير إلى حالة الكتاب."
        }
    },
    {
        "question": "____ bad?",
        "options": [
            "a. Is this flower smelling",
            "b. Do this flower smell",
            "c. Does this flower smell",
            "d. Have this flower smell"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Does this flower smell' is the correct form for asking about the flower's smell.",
            "ar": "'Does this flower smell' هو الشكل الصحيح للسؤال عن رائحة الزهرة."
        }
    },
    {
        "question": "The professor persuaded ____ the test.",
        "options": [
            "a. to them do",
            "b. them do",
            "c. to do",
            "d. them to do"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Persuaded them to do' is the correct structure.",
            "ar": "'Persuaded them to do' هو التركيب الصحيح."
        }
    },
    {
        "question": "She was writing something ____ the computer.",
        "options": [
            "a. in",
            "b. on",
            "c. at",
            "d. by"
        ],
        "answer": "b",
        "explanation": {
            "en": "'On the computer' is the correct preposition.",
            "ar": "'On the computer' هو حرف الجر الصحيح."
        }
    },
    {
        "question": "My cousin ____ friend got the reward, will be hired as a general manager.",
        "options": [
            "a. who",
            "b. whom",
            "c. whose",
            "d. which"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Whose' indicates possession, referring to the friend's reward.",
            "ar": "'Whose' تشير إلى الملكية، مشيرة إلى مكافأة الصديق."
        }
    },
    {
        "question": "Which sentence has wrong capitalization:",
        "options": [
            "a. India is a developing country.",
            "b. india is a developing country.",
            "c. Ali met his brother.",
            "d. They can stay in Madrid."
        ],
        "answer": "b",
        "explanation": {
            "en": "'India' should be capitalized.",
            "ar": "يجب أن تكون 'India' مكتوبة بحرف كبير."
        }
    },
    {
        "question": "Catalan ____ in some areas in Spain, especially Barcelona city.",
        "options": [
            "a. is speaking",
            "b. speaks",
            "c. speaking",
            "d. is spoken"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Is spoken' is the correct passive form indicating the language's use.",
            "ar": "'Is spoken' هو الشكل الصحيح المبني للمجهول الذي يشير إلى استخدام اللغة."
        }
    },
    {
        "question": "The artist made a ____  of swan to decorate the entrance of the palace.",
        "options": [
            "a. cane",
            "b. sculpture",
            "c. process",
            "d. jug"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Sculpture' is the correct word for an art piece made of a swan.",
            "ar": "'Sculpture' هي الكلمة الصحيحة لقطعة فنية مصنوعة على شكل بجعة."
        }
    },
    {
        "question": "If we spend all of our ____, we will be in debt.",
        "options": [
            "a. income",
            "b. safe",
            "c. gate",
            "d. earnings"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Income' refers to the money earned, which if spent, can lead to debt.",
            "ar": "'Income' تشير إلى المال المكتسب، والذي إذا تم إنفاقه يمكن أن يؤدي إلى الديون."
        }
    },
    {
        "question": "Which word doesn't have the same meaning as gather:",
        "options": [
            "a. collect",
            "b. form a group",
            "c. separate",
            "d. assemble"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Separate' means to divide, which is the opposite of 'gather'.",
            "ar": "'Separate' تعني الفصل، وهو عكس 'gather'."
        }
    },
    {
        "question": "Trump ____ Nobel prize.",
        "options": [
            "a. is win",
            "b. win",
            "c. won't win",
            "d. not win"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Won't win' is the correct future negative form.",
            "ar": "'Won't win' هو الشكل الصحيح للنفي في المستقبل."
        }
    },
    {
        "question": "Hijab ____ the neck and the head.",
        "options": [
            "a. wrap",
            "b. is wrapping",
            "c. wrapped",
            "d. wraps"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Wraps' is the correct present tense form indicating an ongoing action.",
            "ar": "'Wraps' هو الشكل الصحيح في المضارع الذي يشير إلى فعل مستمر."
        }
    },
    {
        "question": "When the semester ____, students will be happy.",
        "options": [
            "a. ending",
            "b. is ending",
            "c. ends",
            "d. end"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Ends' is the correct future tense form indicating completion.",
            "ar": "'Ends' هو الشكل الصحيح في المستقبل الذي يشير إلى الانتهاء."
        }
    },
    {
        "question": "My grandma ____ for 13 years and she still drives.",
        "options": [
            "a. has driven",
            "b. was driving",
            "c. drove",
            "d. has been driving"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Has been driving' indicates an action that started in the past and continues.",
            "ar": "'Has been driving' تشير إلى فعل بدأ في الماضي وما زال مستمرا."
        }
    },
    {
        "question": "This car ____ in Japan.",
        "options": [
            "a. made",
            "b. is making",
            "c. is made",
            "d. has made"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Is made' is the correct passive form indicating where the car is produced.",
            "ar": "'Is made' هو الشكل الصحيح المبني للمجهول الذي يشير إلى مكان صنع السيارة."
        }
    },
    {
        "question": "Sugar ____ from sugar cane after several steps.",
        "options": [
            "a. processes",
            "b. is processed",
            "c. is processing",
            "d. processed"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Is processed' is the correct passive form indicating the process of making sugar.",
            "ar": "'Is processed' هو الشكل الصحيح المبني للمجهول الذي يشير إلى عملية صنع السكر."
        }
    },
    {
        "question": "He ____ pizza last night.",
        "options": [
            "a. eat",
            "b. eats",
            "c. ate",
            "d. didn't"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Ate' is the correct past tense form of 'eat'.",
            "ar": "'Ate' هو الشكل الصحيح في الماضي لكلمة 'eat'."
        }
    },
    {
        "question": "He ____ sacked from his job.",
        "options": [
            "a. get",
            "b. got",
            "c. have",
            "d. was"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Got' is the correct past tense form indicating he was fired.",
            "ar": "'Got' هو الشكل الصحيح في الماضي الذي يشير إلى أنه تم فصله."
        }
    },
    {
        "question": "He has arrive just ____ time.",
        "options": [
            "a. in",
            "b. on",
            "c. at",
            "d. by"
        ],
        "answer": "b",
        "explanation": {
            "en": "'On time' is the correct phrase indicating punctuality.",
            "ar": "'On time' هي العبارة الصحيحة التي تشير إلى الدقة في الوقت."
        }
    },
    {
        "question": "When you analyze something, you'll be able to ____ it.",
        "options": [
            "a. collect",
            "b. survive",
            "c. study",
            "d. suspect"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Study' is the correct verb indicating thorough examination.",
            "ar": "'Study' هو الفعل الصحيح الذي يشير إلى الفحص الشامل."
        }
    },
    {
        "question": "The man ____ daughter has robbed the bank, has died.",
        "options": [
            "a. who",
            "b. whose",
            "c. whom",
            "d. who's"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Whose' indicates possession, referring to the daughter.",
            "ar": "'Whose' تشير إلى الملكية، مشيرة إلى الابنة."
        }
    },
    {
        "question": "Which sentence from the following isn't correct:",
        "options": [
            "a. Everyone is here.",
            "b. All people are there.",
            "c. Everyone are here.",
            "d. They are all here."
        ],
        "answer": "c",
        "explanation": {
            "en": "'Everyone are' is incorrect; it should be 'Everyone is'.",
            "ar": "'Everyone are' غير صحيح؛ يجب أن تكون 'Everyone is'."
        }
    },
    {
        "question": "If you exercise daily, you ____ fit.",
        "options": [
            "a. will being",
            "b. will be",
            "c. would be",
            "d. would have been"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Will be' is the correct future tense form.",
            "ar": "'Will be' هو الشكل الصحيح في المستقبل."
        }
    },
    {
        "question": "The plane ____ at 8 pm tonight.",
        "options": [
            "a. will arrive",
            "b. will be arriving",
            "c. will have arrived",
            "d. is arriving"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Will be arriving' is the correct future continuous form.",
            "ar": "'Will be arriving' هو الشكل الصحيح للمستقبل المستمر."
        }
    },
    {
        "question": "____ he attending the wedding?",
        "options": [
            "a. Does",
            "b. Are",
            "c. Will",
            "d. Is"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Is' is the correct form to ask about attendance.",
            "ar": "'Is' هو الشكل الصحيح للسؤال عن الحضور."
        }
    },
    {
        "question": "Arabic ____ main language in Cairo and some other Arabian capitals.",
        "options": [
            "a. speaks",
            "b. spoke",
            "c. is speaken",
            "d. is speaking"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Is spoken' is the correct passive form.",
            "ar": "'Is spoken' هو الشكل الصحيح المبني للمجهول."
        }
    },
    {
        "question": "The man, ____ you spoke, is my son's basketball coach.",
        "options": [
            "a. who",
            "b. to whom",
            "c. whom",
            "d. whose"
        ],
        "answer": "b",
        "explanation": {
            "en": "'To whom' is the correct phrase indicating whom you spoke to.",
            "ar": "'To whom' هي العبارة الصحيحة التي تشير إلى من تحدثت إليه."
        }
    },
    {
        "question": "My daughter ____ lives in Pennsylvania, loves animals so much.",
        "options": [
            "a. who",
            "b. whose",
            "c. whom",
            "d. which"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Who' is the correct pronoun for referring to a person.",
            "ar": "'Who' هو الضمير الصحيح للإشارة إلى شخص."
        }
    },
    {
        "question": "If you study hard, you ____ the exam.",
        "options": [
            "a. will pass",
            "b. would pass",
            "c. would passed",
            "d. would have passed"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Will pass' is the correct future tense form indicating success.",
            "ar": "'Will pass' هو الشكل الصحيح في المستقبل الذي يشير إلى النجاح."
        }
    },
    {
        "question": "While they ____, the chef ____  the food.",
        "options": [
            "a. talked/cooked",
            "b. were talking/cooked",
            "c. was talking/cooked",
            "d. were talking/was cooked"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Were talking/cooked' is the correct past continuous and simple past combination.",
            "ar": "'Were talking/cooked' هو الجمع الصحيح بين الماضي المستمر والماضي البسيط."
        }
    },
    {
        "question": "Ali is interested ____ reading short stories.",
        "options": [
            "a. in",
            "b. on",
            "c. for",
            "d. at"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Interested in' is the correct preposition.",
            "ar": "'Interested in' هو حرف الجر الصحيح."
        }
    },
    {
        "question": "She designed a new ____ for the company.",
        "options": [
            "a. logo",
            "b. evidence",
            "c. labor",
            "d. billion"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Logo' is the correct term for a company's design symbol.",
            "ar": "'Logo' هو المصطلح الصحيح لرمز تصميم الشركة."
        }
    },
    {
        "question": "We ____ you are lying.",
        "options": [
            "a. think",
            "b. thinks",
            "c. is thinking",
            "d. are thinking"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Think' is the correct present tense form.",
            "ar": "'Think' هو الشكل الصحيح في المضارع."
        }
    },
    {
        "question": "____ at 8:30 yesterday?",
        "options": [
            "a. Did you work",
            "b. Were you working",
            "c. Was you working",
            "d. Did you working"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Were you working' is the correct past continuous form.",
            "ar": "'Were you working' هو الشكل الصحيح للماضي المستمر."
        }
    },
    {
        "question": "____  can beat Messi?",
        "options": [
            "a. who",
            "b. which",
            "c. what",
            "d. whose"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Who' is the correct interrogative pronoun for a person.",
            "ar": "'Who' هو الضمير الاستفهامي الصحيح لشخص."
        }
    },
    {
        "question": "Spaghetti is a type of ____",
        "options": [
            "a. crop",
            "b. content",
            "c. wheat",
            "d. pasta"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Pasta' is the correct category for spaghetti.",
            "ar": "'Pasta' هو التصنيف الصحيح للسباغيتي."
        }
    },
    {
        "question": "At this time tomorrow, Maryam ____ to Malaysia.",
        "options": [
            "a. will fly",
            "b. will have flown",
            "c. are flying",
            "d. will be flying"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Will be flying' is the correct future continuous form.",
            "ar": "'Will be flying' هو الشكل الصحيح للمستقبل المستمر."
        }
    },
    {
        "question": "This supermarket has a ____ of fruits and vegetables.",
        "options": [
            "a. contemporary",
            "b. check-in",
            "c. humidity",
            "d. selection"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Selection' refers to a variety of items available.",
            "ar": "'Selection' تشير إلى مجموعة متنوعة من العناصر المتاحة."
        }
    },
    {
        "question": "If you ____ fat and sugar, you will lose weight.",
        "options": [
            "a. cut down",
            "b. back up",
            "c. choose",
            "d. own"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Cut down' means to reduce intake, which leads to weight loss.",
            "ar": "'Cut down' تعني تقليل الاستهلاك، مما يؤدي إلى فقدان الوزن."
        }
    },
    {
        "question": "The elephant is one of the biggest animals ____ on earth.",
        "options": [
            "a. whose lives",
            "b. who lives",
            "c. which lives",
            "d. that live"
        ],
        "answer": "d",
        "explanation": {
            "en": "'That live' is the correct form for plural animals.",
            "ar": "'That live' هو الشكل الصحيح للحيوانات بصيغة الجمع."
        }
    },
    {
        "question": "I hate vegetables. I ____ eat carrots.",
        "options": [
            "a. often",
            "b. never",
            "c. usually",
            "d. currently"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Never' indicates a strong dislike and absence of action.",
            "ar": "'Never' تشير إلى كراهية قوية وغياب الفعل."
        }
    },
    {
        "question": "It was raining and there was a flash of ____.",
        "options": [
            "a. lightning",
            "b. planet",
            "c. device",
            "d. rain"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Lightning' is the correct term for a flash during a storm.",
            "ar": "'Lightning' هو المصطلح الصحيح للوميض أثناء العاصفة."
        }
    },
    {
        "question": "The Saudi government has a ____ to be achieved in 2030.",
        "options": [
            "a. vision",
            "b. material",
            "c. chimmney",
            "d. compass"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Vision' refers to a strategic plan or goal.",
            "ar": "'Vision' تشير إلى خطة أو هدف استراتيجي."
        }
    },
    {
        "question": "The two companies ____ together for 10 years now.",
        "options": [
            "a. have been working",
            "b. were worked",
            "c. has worked",
            "d. work"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Have been working' indicates an ongoing collaboration.",
            "ar": "'Have been working' تشير إلى تعاون مستمر."
        }
    },
    {
        "question": "The doctor told me it would take two weeks to ____ entirely.",
        "options": [
            "a. recover",
            "b. hope",
            "c. expect",
            "d. decide"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Recover' means to get better after an illness or injury.",
            "ar": "'Recover' تعني التحسن بعد مرض أو إصابة."
        }
    },
    {
        "question": "The Nile is the longest river in the whole planet.",
        "options": [
            "a. @",
            "b. a",
            "c. the",
            "d. an"
        ],
        "answer": "c",
        "explanation": {
            "en": "'The' is the correct article for specifying the Nile.",
            "ar": "'The' هو الأداة الصحيحة لتحديد النيل."
        }
    },
    {
        "question": "Sarah is over there, she's ____ a blue t-shirt.",
        "options": [
            "a. wearing",
            "b. putting",
            "c. have",
            "d. current"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Wearing' is the correct verb for having clothes on.",
            "ar": "'Wearing' هو الفعل الصحيح لارتداء الملابس."
        }
    },
    {
        "question": "All cars must have a spare ____ by law.",
        "options": [
            "a. tire",
            "b. display",
            "c. source",
            "d. purpose"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Tire' is the correct term for an essential car part.",
            "ar": "'Tire' هو المصطلح الصحيح لجزء أساسي من السيارة."
        }
    },
    {
        "question": "Buildings that are ____ will be more costly than other ones.",
        "options": [
            "a. waterfront",
            "b. terrified",
            "c. interested",
            "d. useless"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Waterfront' indicates a prime location that is typically more expensive.",
            "ar": "'Waterfront' تشير إلى موقع رئيسي يكون عادةً أكثر تكلفة."
        }
    },
    {
        "question": "The African elephant, ____ ears are big, can use them for its advantage.",
        "options": [
            "a. whom",
            "b. who's",
            "c. whose",
            "d. who"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Whose' indicates possession, referring to the elephant's ears.",
            "ar": "'Whose' تشير إلى الملكية، مشيرة إلى آذان الفيل."
        }
    },
    {
        "question": "All countries must have ____ for area separation.",
        "options": [
            "a. borders",
            "b. category",
            "c. announcement",
            "d. sculpture"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Borders' are essential for defining areas.",
            "ar": "'Borders' ضرورية لتحديد المناطق."
        }
    },
    {
        "question": "Hamad is an old man with great ____.",
        "options": [
            "a. wisdom",
            "b. percentage",
            "c. income",
            "d. structure"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Wisdom' refers to his great knowledge and experience.",
            "ar": "'Wisdom' تشير إلى معرفته وخبرته الكبيرة."
        }
    },
    {
        "question": "Trees increase ____ especially in arid areas.",
        "options": [
            "a. vegetation",
            "b. solutions",
            "c. structure",
            "d. instrument"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Vegetation' refers to plant life, which increases with trees.",
            "ar": "'Vegetation' تشير إلى الحياة النباتية، التي تزيد بوجود الأشجار."
        }
    },
    {
        "question": "Which of the following isn't a musical instrument?",
        "options": [
            "a. flute",
            "b. drum",
            "c. horn",
            "d. souvenir"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Souvenir' is an item kept as a reminder, not a musical instrument.",
            "ar": "'Souvenir' هو عنصر يُحتفظ به كتذكار، وليس آلة موسيقية."
        }
    },
    {
        "question": "The ____ of the mall is in a pyramid shape.",
        "options": [
            "a. design",
            "b. sink",
            "c. vendor",
            "d. track"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Design' refers to the structure or layout.",
            "ar": "'Design' تشير إلى الهيكل أو التخطيط."
        }
    },
    {
        "question": "Rescuers engaged to ____ the man who was sinking in the lake.",
        "options": [
            "a. rescue",
            "b. remove",
            "c. decide",
            "d. grant"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Rescue' is the correct verb for saving someone in danger.",
            "ar": "'Rescue' هو الفعل الصحيح لإنقاذ شخص في خطر."
        }
    },
    {
        "question": "Which word means the same as 'particularly'?",
        "options": [
            "a. especially",
            "b. rapidly",
            "c. quietly",
            "d. remedy"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Especially' means particularly.",
            "ar": "'Especially' تعني خصوصا."
        }
    },
    {
        "question": "Dr. Michael, ____ the English literature professor, will move to Ireland.",
        "options": [
            "a. whom",
            "b. who's",
            "c. whose",
            "d. who"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Who's' is a contraction of 'who is', appropriate here.",
            "ar": "'Who's' هي اختصار لـ 'who is'، وهي مناسبة هنا."
        }
    },
    {
        "question": "I like going to the library in Keifan because it has a ____ of books.",
        "options": [
            "a. variety",
            "b. sculpture",
            "c. restriction",
            "d. pedestrian"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Variety' refers to a wide range of books.",
            "ar": "'Variety' تشير إلى مجموعة واسعة من الكتب."
        }
    },
    {
        "question": "People must cross the road through the ____.",
        "options": [
            "a. pedestrian walk",
            "b. lights",
            "c. scent",
            "d. construction"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Pedestrian walk' is the correct term for a crossing path.",
            "ar": "'Pedestrian walk' هو المصطلح الصحيح لمسار العبور."
        }
    },
    {
        "question": "People in earthquake regions find difficulty to ____.",
        "options": [
            "a. categorise",
            "b. survive",
            "c. lack",
            "d. urbanise"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Survive' is the correct verb indicating the challenge of living through earthquakes.",
            "ar": "'Survive' هو الفعل الصحيح الذي يشير إلى تحدي العيش خلال الزلازل."
        }
    },
    {
        "question": "The man ____ spoke was my son's basketball coach.",
        "options": [
            "a. to whom",
            "b. who",
            "c. to who",
            "d. whose"
        ],
        "answer": "a",
        "explanation": {
            "en": "'To whom' is the correct phrase indicating whom you spoke to.",
            "ar": "'To whom' هي العبارة الصحيحة التي تشير إلى من تحدثت إليه."
        }
    },
    {
        "question": "The word 'brilliantly' means ____.",
        "options": [
            "a. brightly",
            "b. gloomy",
            "c. substantially",
            "d. historically"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Brightly' is the correct synonym for 'brilliantly'.",
            "ar": "'Brightly' هو المرادف الصحيح لـ 'brilliantly'."
        }
    },
    {
        "question": "I am pleased to know that you passed the exam. When ____ you ____ the interview?",
        "options": [
            "a. are/having",
            "b. will/have",
            "c. will/having",
            "d. are going to/having"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Will have' is the correct future form.",
            "ar": "'Will have' هو الشكل الصحيح في المستقبل."
        }
    },
    {
        "question": "People were ____ when they saw the high building.",
        "options": [
            "a. inspired",
            "b. curious",
            "c. victim",
            "d. separate"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Inspired' means to be positively affected by something.",
            "ar": "'Inspired' تعني أن تتأثر بشيء بشكل إيجابي."
        }
    },
    {
        "question": "The mummy's head ____ its body.",
        "options": [
            "a. apparent",
            "b. obvious",
            "c. attached to",
            "d. particularly"
        ],
        "answer": "c",
        "explanation": {
            "en": "'Attached to' means being physically connected to something.",
            "ar": "'Attached to' تعني أن تكون متصلة جسديًا بشيء."
        }
    },
    {
        "question": "John is a polite boy. He is always ____ to his parents.",
        "options": [
            "a. content",
            "b. scrumptious",
            "c. gang",
            "d. obedient"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Obedient' means following the rules and listening to others.",
            "ar": "'Obedient' تعني اتباع القواعد والاستماع للآخرين."
        }
    },
    {
        "question": "To 'put the pressure on' means ____.",
        "options": [
            "a. to act in an outlandish way",
            "b. to follow up with the manager",
            "c. to have an impact on",
            "d. to act in the same way"
        ],
        "answer": "c",
        "explanation": {
            "en": "'To have an impact on' means to influence something or someone.",
            "ar": "'To have an impact on' تعني التأثير على شيء أو شخص."
        }
    },
    {
        "question": "Provided the room is big enough, divider doors will be a ____.",
        "options": [
            "a. convincing",
            "b. practical solution",
            "c. carry on",
            "d. layer"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Practical solution' means an effective and workable answer.",
            "ar": "'Practical solution' تعني إجابة فعالة وقابلة للتطبيق."
        }
    },
    {
        "question": "The medicine is very ____ as it worked very quickly.",
        "options": [
            "a. effective",
            "b. luxurious",
            "c. obedient",
            "d. vulnerable"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Effective' means it achieved the desired result quickly.",
            "ar": "'Effective' تعني أنها حققت النتيجة المطلوبة بسرعة."
        }
    },
    {
        "question": "____ you learning how to play the guitar?",
        "options": [
            "a. weren't",
            "b. didn't",
            "c. hasn't",
            "d. haven't"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Weren't' is the correct form for asking a negative question in past continuous.",
            "ar": "'Weren't' هو الشكل الصحيح لطرح سؤال نفي في الماضي المستمر."
        }
    },
    {
        "question": "Choose the correct sentence from the following:",
        "options": [
            "a. My friends rented a house on the beach last summer.",
            "b. My friends last summer rented a house on the beach.",
            "c. My friends on the beach rented a house last summer.",
            "d. My friends rented a house last summer on the beach."
        ],
        "answer": "a",
        "explanation": {
            "en": "'My friends rented a house on the beach last summer' is the correct sentence structure.",
            "ar": "'My friends rented a house on the beach last summer' هي التركيب الصحيح للجملة."
        }
    },
    {
        "question": "Choose the correct sentence from the following:",
        "options": [
            "a. My husband was working so I went shopping.",
            "b. My husband was working, so I went shopping.",
            "c. My husband was working, but I went shopping.",
            "d. My husband was working because I went shopping."
        ],
        "answer": "b",
        "explanation": {
            "en": "'My husband was working, so I went shopping' is the correct sentence structure.",
            "ar": "'My husband was working, so I went shopping' هي التركيب الصحيح للجملة."
        }
    },
    {
        "question": "'Injury' means ____.",
        "options": [
            "a. to cause harm",
            "b. to treat an ailment",
            "c. to swallow a tablet",
            "d. to reschedule an appointment"
        ],
        "answer": "a",
        "explanation": {
            "en": "'To cause harm' is the correct definition of 'injury'.",
            "ar": "'To cause harm' هو التعريف الصحيح لـ 'injury'."
        }
    },
    {
        "question": "Choose the wrong sentence:",
        "options": [
            "a. I have to get some money.",
            "b. There is some money.",
            "c. There is an money.",
            "d. I have no money."
        ],
        "answer": "c",
        "explanation": {
            "en": "'There is an money' is incorrect; it should be 'There is some money'.",
            "ar": "'There is an money' غير صحيح؛ يجب أن تكون 'There is some money'."
        }
    },
    {
        "question": "Ali: I don't have time to stop at the supermarket for milk.\nSalem: Don't Worry. I ____ it for you",
        "options": [
            "a. get",
            "b. am going to",
            "c. am getting to get",
            "d. will get"
        ],
        "answer": "d",
        "explanation": {
            "en": "'Will get' is the correct future tense form.",
            "ar": "'Will get' هو الشكل الصحيح في المستقبل."
        }
    },
    {
        "question": "We will ____ someone to clean the office once a week.",
        "options": [
            "a. hire",
            "b. damage",
            "c. swim",
            "d. risk"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Hire' is the correct verb for employing someone.",
            "ar": "'Hire' هو الفعل الصحيح لتوظيف شخص."
        }
    },
    {
        "question": "When he was young, he ____.",
        "options": [
            "a. don't smoked",
            "b. didn't smoke",
            "c. not smoking",
            "d. don't smoking"
        ],
        "answer": "b",
        "explanation": {
            "en": "'Didn't smoke' is the correct past tense negative form.",
            "ar": "'Didn't smoke' هو الشكل الصحيح للنفي في الماضي."
        }
    },
    {
        "question": "Sally did an ____ job for the company so they increased her salary.",
        "options": [
            "a. amazing",
            "b. purpose",
            "c. vehicle",
            "d. grant"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Amazing' describes the quality of the work done.",
            "ar": "'Amazing' تصف جودة العمل المنجز."
        }
    },
    {
        "question": "____ you sick yesterday?",
        "options": [
            "a. were",
            "b. are",
            "c. did",
            "d. was"
        ],
        "answer": "a",
        "explanation": {
            "en": "'Were you sick' is the correct past tense form.",
            "ar": "'Were you sick' هو الشكل الصحيح في الماضي."
        }
    }
];
