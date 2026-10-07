let uiLanguage='ar';try{const saved=localStorage.getItem('cm-language');if(['ar','en','fr'].includes(saved))uiLanguage=saved}catch{}
const UI_TRANSLATIONS={"مواعيد الكرة":{"en":"Football Fixtures","fr":"Football Fixtures"},"اللغة":{"en":"Language","fr":"Langue"},"البحث":{"en":"Search","fr":"Recherche"},"المباريات":{"en":"Matches","fr":"Matchs"},"البطولات":{"en":"Leagues","fr":"Compétitions"},"المفضلة":{"en":"Favorites","fr":"Favoris"},"الأخبار":{"en":"News","fr":"Actualités"},"المشاهدة":{"en":"Watch","fr":"Regarder"},"ملعبك الرقمي":{"en":"Your digital stadium","fr":"Votre stade numérique"},"كرة القدم، أقرب إليك.":{"en":"Football, closer to you.","fr":"Le football, plus proche de vous."},"مركز المباريات":{"en":"Match center","fr":"Centre des matchs"},"مواعيد المباريات والنتائج تُحمّل من ESPN وتتحدّث أثناء فتح الصفحة. المباريات وترتيب البطولات من المصدر، حسب التغطية المتاحة. تابع فريقك من تفاصيل المباراة أو جدول الترتيب.":{"en":"Fixtures, scores and standings come from ESPN and refresh while the page is open, subject to coverage. Follow teams from match details or league tables.","fr":"Les matchs, scores et classements proviennent d’ESPN et sont actualisés pendant l’ouverture de la page, selon la couverture. Suivez vos équipes depuis les détails ou le classement."},"مباريات اليوم والغد • توقيت المغرب":{"en":"Today and tomorrow • Morocco time","fr":"Aujourd’hui et demain • Heure du Maroc"},"إغلاق":{"en":"Close","fr":"Fermer"},"البطولة المغربية":{"en":"Moroccan Botola","fr":"Botola marocaine"},"البطولة الاحترافية المغربية":{"en":"Moroccan professional league","fr":"Championnat professionnel marocain"},"الدوري الإنجليزي":{"en":"Premier League","fr":"Premier League anglaise"},"الدوري الإسباني":{"en":"LaLiga","fr":"Liga espagnole"},"دوري أبطال أوروبا":{"en":"UEFA Champions League","fr":"Ligue des champions UEFA"},"الدوري الإيطالي":{"en":"Serie A","fr":"Serie A italienne"},"الدوري الألماني":{"en":"Bundesliga","fr":"Bundesliga allemande"},"الدوري الفرنسي":{"en":"Ligue 1","fr":"Ligue 1 française"},"مباريات كرة القدم":{"en":"Football matches","fr":"Matchs de football"},"الفريق المضيف":{"en":"Home team","fr":"Équipe à domicile"},"الفريق الضيف":{"en":"Away team","fr":"Équipe à l’extérieur"},"لم تبدأ":{"en":"Not started","fr":"Pas commencé"},"غير متاح":{"en":"Unavailable","fr":"Indisponible"},"لم يُعلن المصدر قناة ناقلة":{"en":"No broadcaster listed by the source","fr":"Aucun diffuseur indiqué par la source"},"تعذّر الاتصال؛ تُعرض آخر بيانات محفوظة لهذا التاريخ.":{"en":"Connection failed; showing saved data for this date.","fr":"Connexion impossible ; affichage des données enregistrées pour cette date."},"تعذّر تحميل هذا التاريخ، ولا توجد نسخة محفوظة له.":{"en":"Could not load this date; no saved copy is available.","fr":"Impossible de charger cette date ; aucune copie enregistrée."},"تعذّر تحديث بعض الأيام الأخرى.":{"en":"Some other dates could not be refreshed.","fr":"Certaines autres dates n’ont pas pu être actualisées."},"تعذّر تحميل المباريات. تحقق من الإنترنت وأعد المحاولة.":{"en":"Could not load matches. Check your connection and try again.","fr":"Impossible de charger les matchs. Vérifiez la connexion et réessayez."},"جارٍ تحديث المباريات…":{"en":"Refreshing matches…","fr":"Actualisation des matchs…"},"تُعرض آخر نسخة محمّلة أثناء الاتصال.":{"en":"Showing the last loaded copy while connecting.","fr":"Dernière copie chargée affichée pendant la connexion."},"بيانات محفوظة — قد تكون النتائج والمواعيد تغيّرت.":{"en":"Saved data — scores and kickoff times may have changed.","fr":"Données enregistrées — les scores et horaires peuvent avoir changé."},"بيانات هذا التاريخ غير متاحة حاليًا.":{"en":"Data for this date is currently unavailable.","fr":"Les données de cette date sont actuellement indisponibles."},"المصدر:":{"en":"Source:","fr":"Source :"},"وقت جلب البيانات:":{"en":"Data retrieved:","fr":"Données récupérées :"},"تعذّر حفظ نسخة على الجهاز.":{"en":"Could not save a copy on this device.","fr":"Impossible d’enregistrer une copie sur cet appareil."},"تحديث":{"en":"Refresh","fr":"Actualiser"},"لا توجد مباريات هنا":{"en":"No matches here","fr":"Aucun match ici"},"لا توجد مباريات مطابقة في بيانات المصدر. تغطية البطولات تعتمد على المصدر.":{"en":"No matching fixtures in the source data. League coverage depends on the source.","fr":"Aucun match correspondant dans les données. La couverture dépend de la source."},"تفاصيل":{"en":"Details","fr":"Détails"},"ضد":{"en":"vs","fr":"contre"},"كان مباشرًا عند آخر جلب البيانات":{"en":"Was live when last retrieved","fr":"Était en direct lors de la dernière récupération"},"كان مباشرًا عند آخر جلب":{"en":"Was live when last retrieved","fr":"Était en direct lors de la dernière récupération"},"حذف من":{"en":"Remove from","fr":"Retirer des"},"إضافة إلى":{"en":"Add to","fr":"Ajouter aux"},"مبارياتك المفضلة":{"en":"Your favorites","fr":"Vos favoris"},"الأخبار الرياضية":{"en":"Sports news","fr":"Actualités sportives"},"المشاهدة الرسمية":{"en":"Official viewing","fr":"Diffusion officielle"},"تفاصيل البطولة":{"en":"League details","fr":"Détails de la compétition"},"الفريق المفضّل":{"en":"Favorite team","fr":"Équipe favorite"},"البحث عن فريق أو بطولة":{"en":"Search teams or leagues","fr":"Rechercher une équipe ou une compétition"},"أمس":{"en":"Yesterday","fr":"Hier"},"اليوم":{"en":"Today","fr":"Aujourd’hui"},"غدًا":{"en":"Tomorrow","fr":"Demain"},"اختر التاريخ":{"en":"Choose a date","fr":"Choisir une date"},"تاريخ المباريات":{"en":"Match date","fr":"Date des matchs"},"الكل":{"en":"All","fr":"Tous"},"مباشر":{"en":"Live","fr":"En direct"},"قادمة":{"en":"Upcoming","fr":"À venir"},"انتهت":{"en":"Finished","fr":"Terminés"},"توقيت المغرب":{"en":"Morocco time","fr":"Heure du Maroc"},"مباريات محفوظة ومباريات فرقك: أمس واليوم وغدًا":{"en":"Saved matches and your teams: yesterday, today and tomorrow","fr":"Matchs favoris et de vos équipes : hier, aujourd’hui et demain"},"الترتيب من المصدر ومباريات البطولة":{"en":"Source standings and league matches","fr":"Classement et matchs de la compétition"},"مصدر الأخبار لم يُربط بعد":{"en":"News source not connected yet","fr":"Source d’actualités pas encore connectée"},"ستظهر الأخبار هنا بعد اختيار مصدر موثوق. لا توجد أخبار فعلية في هذه النسخة.":{"en":"News will appear after a reliable source is connected. This version has no news feed.","fr":"Les actualités apparaîtront après la connexion d’une source fiable. Cette version n’a pas de fil d’actualités."},"معلومات أساسية محفوظة؛ قد تكون تغيّرت منذ جلبها.":{"en":"Saved match information; it may have changed since retrieval.","fr":"Informations enregistrées ; elles peuvent avoir changé depuis la récupération."},"الموعد بتوقيت المغرب":{"en":"Kickoff in Morocco time","fr":"Coup d’envoi à l’heure du Maroc"},"الملعب":{"en":"Stadium","fr":"Stade"},"القناة حسب المصدر":{"en":"Broadcaster listed by the source","fr":"Diffuseur indiqué par la source"},"القنوات المذكورة قد تخص بلد المصدر؛ لا تؤكد توفر النقل في المغرب.":{"en":"Listed broadcasters may apply to another country; availability in Morocco is not confirmed.","fr":"Les diffuseurs indiqués peuvent concerner un autre pays ; la diffusion au Maroc n’est pas confirmée."},"تفاصيل المباراة على":{"en":"Match details on","fr":"Détails du match sur"},"جارٍ تحميل التشكيلة والإحصائيات وأحداث المباراة…":{"en":"Loading lineups, statistics and match events…","fr":"Chargement des compositions, statistiques et événements…"},"تحقّق من جدول خدمات المشاهدة الرسمية لمعرفة توفر هذه المباراة.":{"en":"Check official viewing schedules for availability of this match.","fr":"Consultez les programmes des diffuseurs officiels pour ce match."},"خدمات المشاهدة الرسمية":{"en":"Official viewing services","fr":"Services de diffusion officielle"},"شاهد من المصدر":{"en":"Watch from the source","fr":"Regarder depuis la source"},"القنوات والباقات الرياضية العربية":{"en":"Arab sports channels and packages","fr":"Chaînes et offres sportives arabes"},"شغّل قناة الرياضية هنا، أو افتح خدمات الاشتراك على موقعها الرسمي. تحقّق من جدول الناقل لمعرفة المباراة المتاحة.":{"en":"Play Arriyadia here or open official subscription services. Check the broadcaster’s schedule.","fr":"Lancez Arriyadia ici ou ouvrez les services d’abonnement officiels. Consultez le programme du diffuseur."},"الرياضية • البث الرسمي":{"en":"Arriyadia • Official broadcast","fr":"Arriyadia • Diffusion officielle"},"شاهد قناة الرياضية داخل المنصة":{"en":"Watch Arriyadia in the app","fr":"Regardez Arriyadia dans l’application"},"عند التشغيل يُحمّل مشغّل":{"en":"Playback loads the","fr":"La lecture charge le lecteur"},"الخارجي. توفر البرامج والمباريات يخضع لقيود المصدر.":{"en":"external player. Availability depends on source restrictions.","fr":"externe. La disponibilité dépend des restrictions de la source."},"تشغيل البث هنا":{"en":"Play broadcast here","fr":"Lancer le direct ici"},"إذا لم يعمل المشغّل أو ظهرت قيود للمشاهدة:":{"en":"If playback fails or viewing is restricted:","fr":"Si la lecture échoue ou est restreinte :"},"افتح الرياضية على":{"en":"Open Arriyadia on","fr":"Ouvrir Arriyadia sur"},"دليل المصادر •":{"en":"Source directory •","fr":"Répertoire des sources •"},"جهة":{"en":"providers","fr":"fournisseurs"},"بث وخدمات ومصادر بانتظار الربط":{"en":"Broadcasts, services and sources awaiting connection","fr":"Diffusions, services et sources en attente de connexion"},"بحث عن قناة أو دولة":{"en":"Search channels or countries","fr":"Rechercher une chaîne ou un pays"},"مثال: الكأس، مصر، الإمارات":{"en":"Example: Al Kass, Egypt, UAE","fr":"Exemple : Al Kass, Égypte, Émirats"},"طريقة المشاهدة":{"en":"Viewing method","fr":"Mode de diffusion"},"كل المصادر":{"en":"All sources","fr":"Toutes les sources"},"داخل المنصة":{"en":"In the app","fr":"Dans l’application"},"مصادر رسمية خارجية":{"en":"Official external sources","fr":"Sources officielles externes"},"باقات واشتراكات":{"en":"Packages and subscriptions","fr":"Offres et abonnements"},"بانتظار الربط":{"en":"Awaiting connection","fr":"En attente de connexion"},"المصادر المرتبطة متحقّق من هويتها، لكن التشغيل من المغرب وتوفر كل مباراة غير مضمون. الجهات بانتظار الربط لا تتوفر لها مشاهدة هنا. هذا دليل موسّع وليس حصرًا نهائيًا لكل قناة عربية.":{"en":"Linked sources have verified identities, but playback in Morocco and match availability are not guaranteed. Unconnected providers have no playback here. This directory is not exhaustive.","fr":"L’identité des sources liées a été vérifiée, mais la lecture au Maroc et chaque match ne sont pas garantis. Les fournisseurs non connectés ne proposent pas de lecture ici. Ce répertoire n’est pas exhaustif."},"كيف تبدأ المشاهدة؟":{"en":"How to start watching","fr":"Comment commencer à regarder"},"اضغط":{"en":"Select","fr":"Sélectionnez"},"للرياضية، أو افتح خدمة الاشتراك.":{"en":"for Arriyadia, or open a subscription service.","fr":"pour Arriyadia, ou ouvrez un service d’abonnement."},"ابحث عن المباراة في جدول الخدمة.":{"en":"Find the match in the service’s schedule.","fr":"Trouvez le match dans le programme du service."},"سجّل الدخول أو اشترك إذا كانت الخدمة تتطلب ذلك.":{"en":"Sign in or subscribe if required.","fr":"Connectez-vous ou abonnez-vous si nécessaire."},"بث الرياضية يُعرض عبر مشغّل المصدر داخل المنصة.":{"en":"Arriyadia uses the source’s embedded player.","fr":"Arriyadia utilise le lecteur intégré de la source."},"يفتح على موقعه. لا تُؤكد هذه الصفحة نقل مباراة محددة.":{"en":"opens on its website. This page does not confirm any specific match broadcast.","fr":"s’ouvre sur son site. Cette page ne confirme pas la diffusion d’un match précis."},"آخر تحقق من المصادر: 5 أكتوبر 2026":{"en":"Sources last checked: 5 October 2026","fr":"Dernière vérification des sources : 5 octobre 2026"},"مشغّل البث الرسمي لقناة الرياضية":{"en":"Official Arriyadia player","fr":"Lecteur officiel d’Arriyadia"},"إيقاف المشغّل":{"en":"Stop player","fr":"Arrêter le lecteur"},"تشغيل الرياضية هنا":{"en":"Play Arriyadia here","fr":"Lancer Arriyadia ici"},"المشاهدة والباقات الرسمية":{"en":"Official viewing and packages","fr":"Diffusion et offres officielles"},"فتح المصدر الرسمي":{"en":"Open official source","fr":"Ouvrir la source officielle"},"المشاهدة غير مرتبطة":{"en":"Viewing not connected","fr":"Diffusion non connectée"},"لا توجد مصادر مطابقة. جرّب اسمًا آخر.":{"en":"No matching sources. Try another name.","fr":"Aucune source correspondante. Essayez un autre nom."},"من":{"en":"of","fr":"sur"},"مصدرًا":{"en":"sources","fr":"sources"},"الترتيب":{"en":"Standings","fr":"Classement"},"انتهت مهلة الاتصال. تحقق من الإنترنت وأعد المحاولة.":{"en":"Connection timed out. Check your connection and retry.","fr":"Délai de connexion dépassé. Vérifiez la connexion et réessayez."},"تعذّر تحميل الترتيب من المصدر. أعد المحاولة.":{"en":"Could not load standings. Please retry.","fr":"Impossible de charger le classement. Réessayez."},"جارٍ تحميل الترتيب من المصدر…":{"en":"Loading standings…","fr":"Chargement du classement…"},"بيانات ترتيب محفوظة — قد تكون تغيّرت.":{"en":"Saved standings — they may have changed.","fr":"Classement enregistré — il peut avoir changé."},"تحديث الترتيب":{"en":"Refresh standings","fr":"Actualiser le classement"},"المركز":{"en":"Rank","fr":"Rang"},"الفريق":{"en":"Team","fr":"Équipe"},"لعب":{"en":"Played","fr":"Joués"},"فاز":{"en":"Won","fr":"Victoires"},"تعادل":{"en":"Drawn","fr":"Nuls"},"خسر":{"en":"Lost","fr":"Défaites"},"له":{"en":"GF","fr":"BP"},"عليه":{"en":"GA","fr":"BC"},"الفارق":{"en":"GD","fr":"Diff."},"النقاط":{"en":"Points","fr":"Points"},"إعادة المحاولة":{"en":"Retry","fr":"Réessayer"},"الترتيب غير متاح من مصدر البيانات لهذه البطولة. لا توجد بيانات تجريبية معروضة.":{"en":"Standings are unavailable for this league. No sample data is shown.","fr":"Le classement n’est pas disponible pour cette compétition. Aucune donnée fictive n’est affichée."},"العودة إلى البطولات":{"en":"Back to leagues","fr":"Retour aux compétitions"},"البرنامج والنتائج والترتيب على موقع الجامعة المغربية":{"en":"Fixtures, results and standings on the FRMF website","fr":"Programme, résultats et classement sur le site de la FRMF"},"فتح صفحة الترتيب على":{"en":"Open standings on","fr":"Ouvrir le classement sur"},"مباريات البطولة: أمس واليوم وغدًا":{"en":"League matches: yesterday, today and tomorrow","fr":"Matchs de la compétition : hier, aujourd’hui et demain"},"المباريات غير متاحة حاليًا. عد إلى قسم المباريات للتحديث.":{"en":"Matches unavailable. Return to Matches to refresh.","fr":"Matchs indisponibles. Retournez à la rubrique Matchs pour actualiser."},"إلغاء متابعة":{"en":"Unfollow","fr":"Ne plus suivre"},"متابعة":{"en":"Follow","fr":"Suivre"},"تتابع":{"en":"Following","fr":"Abonné"},"الفرق التي تتابعها (":{"en":"Teams you follow (","fr":"Équipes suivies ("},"تابع فريقًا من تفاصيل المباراة أو جدول ترتيب البطولة. افتح فريقك لعرض مبارياته القادمة ونتائجه.":{"en":"Follow a team from match details or standings. Open its page for fixtures and results.","fr":"Suivez une équipe depuis les détails ou le classement. Ouvrez sa page pour ses matchs et résultats."},"مباريات الفريق":{"en":"Team matches","fr":"Matchs de l’équipe"},"لم تتابع أي فريق بعد.":{"en":"You are not following any teams yet.","fr":"Vous ne suivez aucune équipe pour le moment."},"تعذّر تحميل جزء من مباريات الفريق؛ المعروض هو ما توفر من المصدر.":{"en":"Some team matches could not be loaded; showing available source data.","fr":"Une partie des matchs n’a pas pu être chargée ; les données disponibles sont affichées."},"تعذّر تحميل مباريات الفريق. تحقق من الإنترنت وأعد المحاولة.":{"en":"Could not load team matches. Check your connection and retry.","fr":"Impossible de charger les matchs de l’équipe. Vérifiez la connexion et réessayez."},"جارٍ تحميل مباريات الفريق…":{"en":"Loading team matches…","fr":"Chargement des matchs de l’équipe…"},"مباريات محفوظة — قد تكون المواعيد والنتائج تغيّرت.":{"en":"Saved matches — times and scores may have changed.","fr":"Matchs enregistrés — les horaires et scores peuvent avoir changé."},"توقيت المغرب • تغطية المباريات حسب المصدر":{"en":"Morocco time • Coverage depends on the source","fr":"Heure du Maroc • Couverture selon la source"},"المباريات القادمة":{"en":"Upcoming matches","fr":"Matchs à venir"},"آخر النتائج":{"en":"Recent results","fr":"Derniers résultats"},"جدول هذا الفريق غير متاح من المصدر حاليًا.":{"en":"This team’s schedule is currently unavailable.","fr":"Le calendrier de cette équipe est actuellement indisponible."},"العودة إلى المفضلة":{"en":"Back to favorites","fr":"Retour aux favoris"},"تحديث مباريات الفريق":{"en":"Refresh team matches","fr":"Actualiser les matchs de l’équipe"},"لا توجد مباريات متاحة في بيانات المصدر.":{"en":"No matches available in the source data.","fr":"Aucun match disponible dans les données de la source."},"تابع البيانات على موقع الجامعة الملكية المغربية لكرة القدم. الروابط تفتح في المتصفح؛ لم يُربط جلب الترتيب تلقائيًا داخل التطبيق بعد.":{"en":"View data on the FRMF website. Links open in your browser; automatic standings retrieval is not connected yet.","fr":"Consultez les données sur le site de la FRMF. Les liens s’ouvrent dans le navigateur ; la récupération automatique du classement n’est pas encore connectée."},"البرنامج والنتائج":{"en":"Fixtures and results","fr":"Programme et résultats"},"الترتيب الرسمي":{"en":"Official standings","fr":"Classement officiel"},"ابحث بالعربية أو بالاسم الأصلي":{"en":"Search in Arabic or by original name","fr":"Recherchez en arabe ou avec le nom original"},"مثال: ريال مدريد، أرسنال، الدوري الإنجليزي":{"en":"Example: Real Madrid, Arsenal, Premier League","fr":"Exemple : Real Madrid, Arsenal, Premier League"},"البحث يشمل البطولات المدعومة، ودليل فرقها، والمباريات المحمّلة.":{"en":"Search covers supported leagues, their team directories and loaded matches.","fr":"La recherche couvre les compétitions prises en charge, leurs équipes et les matchs chargés."},"جارٍ تحميل دليل الفرق من":{"en":"Loading the team directory from","fr":"Chargement du répertoire des équipes depuis"},"إعادة تحميل دليل الفرق":{"en":"Reload team directory","fr":"Recharger le répertoire des équipes"},"اكتب اسم فريق أو بطولة للبحث.":{"en":"Enter a team or league name.","fr":"Saisissez le nom d’une équipe ou d’une compétition."},"البطولات (":{"en":"Leagues (","fr":"Compétitions ("},"الفرق (":{"en":"Teams (","fr":"Équipes ("},"عرض مباريات الفريق":{"en":"View team matches","fr":"Voir les matchs de l’équipe"},"تظهر أول 40 نتيجة؛ اكتب اسمًا أدق لتقليل النتائج.":{"en":"Showing the first 40 results. Refine your search.","fr":"Les 40 premiers résultats sont affichés. Affinez votre recherche."},"المباريات المحمّلة (":{"en":"Loaded matches (","fr":"Matchs chargés ("},"لا توجد نتائج مطابقة في البيانات المتاحة. جرّب الاسم الأصلي أو اسمًا آخر.":{"en":"No matching results. Try the original name or another name.","fr":"Aucun résultat correspondant. Essayez le nom original ou un autre nom."},"تعرض الفرق من آخر دليل محفوظ أثناء التحديث.":{"en":"Showing the last saved team directory while refreshing.","fr":"Dernier répertoire enregistré affiché pendant l’actualisation."},"تعذّر تحديث دليل الفرق؛ المعروض من آخر نسخة محفوظة.":{"en":"Could not refresh the directory; showing the last saved copy.","fr":"Impossible d’actualiser le répertoire ; dernière copie enregistrée affichée."},"تعذّر تحميل دليل الفرق. يمكنك البحث في البطولات والبيانات المحمّلة.":{"en":"Could not load the team directory. You can search leagues and loaded data.","fr":"Impossible de charger le répertoire. Vous pouvez rechercher dans les compétitions et données chargées."},"دليل الفرق جزئي؛ تعذّر تحميل بعض البطولات.":{"en":"Partial directory; some leagues could not be loaded.","fr":"Répertoire partiel ; certaines compétitions n’ont pas pu être chargées."},"تعذّر تحميل دليل الفرق.":{"en":"Could not load the team directory.","fr":"Impossible de charger le répertoire des équipes."},"تعذّر تحديث التفاصيل؛ تُعرض النسخة المحفوظة.":{"en":"Could not refresh details; showing the saved copy.","fr":"Impossible d’actualiser les détails ; copie enregistrée affichée."},"تعذّر تحميل تفاصيل المباراة من المصدر. المعلومات الأساسية ما زالت متاحة.":{"en":"Could not load match details. Basic information remains available.","fr":"Impossible de charger les détails du match. Les informations de base restent disponibles."},"الاستحواذ %":{"en":"Possession %","fr":"Possession %"},"التسديدات على المرمى":{"en":"Shots on target","fr":"Tirs cadrés"},"التسديدات":{"en":"Shots","fr":"Tirs"},"الركنيات":{"en":"Corners","fr":"Corners"},"الأخطاء":{"en":"Fouls","fr":"Fautes"},"التسلل":{"en":"Offsides","fr":"Hors-jeu"},"البطاقات الصفراء":{"en":"Yellow cards","fr":"Cartons jaunes"},"البطاقات الحمراء":{"en":"Red cards","fr":"Cartons rouges"},"التصديات":{"en":"Saves","fr":"Arrêts"},"التمريرات":{"en":"Passes","fr":"Passes"},"الإحصائيات غير متاحة من المصدر لهذه المباراة حتى الآن.":{"en":"Statistics are not available for this match yet.","fr":"Les statistiques de ce match ne sont pas encore disponibles."},"المضيف":{"en":"Home","fr":"Domicile"},"الضيف":{"en":"Away","fr":"Extérieur"},"الإحصائية":{"en":"Statistic","fr":"Statistique"},"الخطة:":{"en":"Formation:","fr":"Formation :"},"التشكيلة الأساسية غير معلنة في المصدر.":{"en":"Starting lineup has not been announced by the source.","fr":"La composition de départ n’est pas annoncée par la source."},"التشكيلة الأساسية":{"en":"Starting lineup","fr":"Composition de départ"},"البدلاء (":{"en":"Substitutes (","fr":"Remplaçants ("},"التشكيلة غير متاحة من المصدر حتى الآن.":{"en":"Lineups are not available yet.","fr":"Les compositions ne sont pas encore disponibles."},"بطاقة حمراء":{"en":"Red card","fr":"Carton rouge"},"بطاقة صفراء":{"en":"Yellow card","fr":"Carton jaune"},"تبديل":{"en":"Substitution","fr":"Remplacement"},"هدف عكسي":{"en":"Own goal","fr":"But contre son camp"},"ركلة جزاء ضائعة":{"en":"Missed penalty","fr":"Penalty manqué"},"هدف":{"en":"Goal","fr":"But"},"حدث":{"en":"Event","fr":"Événement"},"تفاصيل غير متاحة":{"en":"Details unavailable","fr":"Détails indisponibles"},"لا توجد أهداف أو بطاقات أو تبديلات متاحة في بيانات المصدر حتى الآن.":{"en":"No goals, cards or substitutions available in the source data yet.","fr":"Aucun but, carton ou remplacement disponible dans les données pour le moment."},"تفاصيل محفوظة — قد تكون تغيّرت منذ آخر جلب.":{"en":"Saved details — they may have changed since retrieval.","fr":"Détails enregistrés — ils peuvent avoir changé depuis la récupération."},"وقت جلب التفاصيل:":{"en":"Details retrieved:","fr":"Détails récupérés :"},"تحديث التفاصيل":{"en":"Refresh details","fr":"Actualiser les détails"},"إحصائيات المباراة":{"en":"Match statistics","fr":"Statistiques du match"},"الأهداف والبطاقات والتبديلات":{"en":"Goals, cards and substitutions","fr":"Buts, cartons et remplacements"},"التشكيلة":{"en":"Lineups","fr":"Compositions"},"حارس مرمى":{"en":"Goalkeeper","fr":"Gardien"},"دفاع":{"en":"Defender","fr":"Défenseur"},"وسط":{"en":"Midfielder","fr":"Milieu"},"هجوم":{"en":"Forward","fr":"Attaquant"},"الرياضية المغربية":{"en":"Arriyadia Morocco","fr":"Arriyadia Maroc"},"المغرب":{"en":"Morocco","fr":"Maroc"},"مشغّل داخل المنصة":{"en":"In-app player","fr":"Lecteur intégré"},"البث الرسمي عبر":{"en":"Official broadcast via","fr":"Diffusion officielle via"},"، حسب برمجة القناة وقيود المصدر.":{"en":", subject to channel schedules and source restrictions.","fr":", selon la programmation et les restrictions de la source."},"المنطقة العربية":{"en":"Arab region","fr":"Région arabe"},"اشتراك":{"en":"Subscription","fr":"Abonnement"},"خدمة رياضية باشتراك. تحقّق من الباقة وتوفر المباراة في بلدك.":{"en":"Sports subscription service. Check the package and match availability in your country.","fr":"Service sportif par abonnement. Vérifiez l’offre et la disponibilité dans votre pays."},"الباقات وخيارات المشاهدة الرسمية لشبكة":{"en":"Official packages and viewing options for","fr":"Offres et options de diffusion officielles de"},"لا يشمل هذا الدليل تفعيل الاشتراك.":{"en":"This directory does not activate subscriptions.","fr":"Ce répertoire n’active pas les abonnements."},"الكأس • شووف":{"en":"Al Kass • Shoof","fr":"Al Kass • Shoof"},"قطر":{"en":"Qatar","fr":"Qatar"},"موقع بث رسمي":{"en":"Official streaming site","fr":"Site de diffusion officiel"},"القنوات والبرامج والمباريات المتاحة عبر منصة الكأس الرسمية.":{"en":"Channels, shows and matches on the official Al Kass platform.","fr":"Chaînes, émissions et matchs sur la plateforme officielle Al Kass."},"ثمانية":{"en":"Thmanyah","fr":"Thmanyah"},"السعودية":{"en":"Saudi Arabia","fr":"Arabie saoudite"},"منصة مشاهدة":{"en":"Viewing platform","fr":"Plateforme de diffusion"},"محتوى ومباريات الكرة السعودية. شروط المشاهدة والتغطية حسب المنصة والبلد.":{"en":"Saudi football content. Viewing conditions depend on the platform and country.","fr":"Contenu de football saoudien. Les conditions dépendent de la plateforme et du pays."},"شاهد • الرياضة":{"en":"Shahid • Sports","fr":"Shahid • Sport"},"حسب الباقة":{"en":"Depends on package","fr":"Selon l’offre"},"قسم الرياضة الرسمي؛ تحقّق من القنوات والاشتراك المتاح لحسابك.":{"en":"Official sports section; check channels and your subscription.","fr":"Rubrique sportive officielle ; vérifiez les chaînes et votre abonnement."},"دبي الرياضية":{"en":"Dubai Sports","fr":"Dubai Sports"},"الإمارات":{"en":"United Arab Emirates","fr":"Émirats arabes unis"},"صفحة بث رسمي":{"en":"Official live page","fr":"Page de direct officielle"},"صفحة البث الحي لدبي الرياضية 1. توفر الحدث يخضع لحقوق النقل.":{"en":"Dubai Sports 1 live page. Availability depends on broadcasting rights.","fr":"Direct de Dubai Sports 1. La disponibilité dépend des droits de diffusion."},"أبوظبي الرياضية":{"en":"Abu Dhabi Sports","fr":"Abu Dhabi Sports"},"موقع رسمي":{"en":"Official website","fr":"Site officiel"},"موقع الشبكة الرسمي. قد تختلف خدمات البث المفتوحة وخدمات الاشتراك بحسب المنافسة.":{"en":"Official network website. Free and subscription viewing may vary by competition.","fr":"Site officiel du réseau. La diffusion gratuite ou par abonnement varie selon la compétition."},"الشارقة الرياضية • مرايا":{"en":"Sharjah Sports • Maraya","fr":"Sharjah Sports • Maraya"},"تطبيق رسمي":{"en":"Official app","fr":"Application officielle"},"تطبيق مرايا الرسمي لهيئة الشارقة، لمتابعة قنواتها وبرامجها.":{"en":"Official Maraya app for Sharjah channels and programs.","fr":"Application officielle Maraya pour les chaînes et programmes de Sharjah."},"عُمان الرياضية • عين":{"en":"Oman Sports • Ayn","fr":"Oman Sports • Ayn"},"عُمان":{"en":"Oman","fr":"Oman"},"صفحة عُمان الرياضية في منصة عين الرسمية.":{"en":"Oman Sports on the official Ayn platform.","fr":"Oman Sports sur la plateforme officielle Ayn."},"الكويت الرياضية":{"en":"Kuwait Sports","fr":"Kuwait Sports"},"الكويت":{"en":"Kuwait","fr":"Koweït"},"بوابة الناقل":{"en":"Broadcaster portal","fr":"Portail du diffuseur"},"بوابة وزارة الإعلام الكويتية للوصول إلى قنوات تلفزيون الكويت.":{"en":"Kuwait Ministry of Information portal for Kuwait TV channels.","fr":"Portail du ministère de l’Information du Koweït pour ses chaînes de télévision."},"السعودية الرياضية • الأولى":{"en":"Saudi Sports • Aloula","fr":"Saudi Sports • Aloula"},"منصة هيئة الإذاعة والتلفزيون السعودية؛ ابحث عن القناة ضمن القنوات المباشرة.":{"en":"Saudi Broadcasting Authority platform; find the channel among live channels.","fr":"Plateforme de l’Autorité audiovisuelle saoudienne ; recherchez la chaîne dans les directs."},"شاشا • الرياضة":{"en":"Shasha • Sports","fr":"Shasha • Sport"},"محتوى رياضي ومباريات على المنصة. تحقّق من التغطية والاشتراك حسب بلدك.":{"en":"Sports content and matches. Check coverage and subscription for your country.","fr":"Contenu sportif et matchs. Vérifiez la couverture et l’abonnement dans votre pays."},"لا يوجد بث مؤكّد":{"en":"No confirmed broadcast","fr":"Aucune diffusion confirmée"},"لم نثبت خدمة بث حالية لهذه الشبكة. لا نعرض رابطًا مباشرًا غير مؤكّد؛ تصفّح ثمانية وشاهد للتحقق من الخيارات الحالية.":{"en":"No current streaming service confirmed for this network. Check Thmanyah and Shahid for current options.","fr":"Aucun service de diffusion actuel confirmé pour ce réseau. Consultez Thmanyah et Shahid pour les options actuelles."},"البحرين الرياضية":{"en":"Bahrain Sports","fr":"Bahrain Sports"},"البحرين":{"en":"Bahrain","fr":"Bahreïn"},"بانتظار مصدر بث":{"en":"Awaiting a broadcast source","fr":"En attente d’une source de diffusion"},"لم يُربط مصدر رسمي مؤكّد للمشاهدة بعد.":{"en":"No confirmed official viewing source connected yet.","fr":"Aucune source officielle confirmée n’est encore connectée."},"مصر":{"en":"Egypt","fr":"Égypte"},"الرابعة الرياضية":{"en":"Al Rabia Sports","fr":"Al Rabia Sports"},"العراق":{"en":"Iraq","fr":"Irak"},"باقات رياضية":{"en":"Sports packages","fr":"Offres sportives"},"القسم الرياضي الرسمي. تحقّق من الباقة والمنافسة وتوفرها في بلدك.":{"en":"Official sports section. Check the package, competition and country availability.","fr":"Rubrique sportive officielle. Vérifiez l’offre, la compétition et la disponibilité dans votre pays."},"الأردنية الرياضية":{"en":"Jordan Sports","fr":"Jordan Sports"},"الأردن":{"en":"Jordan","fr":"Jordanie"},"بوابة مؤسسة الإذاعة والتلفزيون الأردنية، وتتضمن القناة الرياضية.":{"en":"Jordan Radio and Television portal, including the sports channel.","fr":"Portail de la Radio-Télévision jordanienne, incluant la chaîne sportive."},"Full Time":{"ar":"انتهت","en":"Full time","fr":"Terminé"},"Final":{"ar":"انتهت","en":"Final","fr":"Terminé"},"Scheduled":{"ar":"لم تبدأ","en":"Scheduled","fr":"Programmé"},"Halftime":{"ar":"استراحة بين الشوطين","en":"Half-time","fr":"Mi-temps"},"In Progress":{"ar":"مباشر","en":"Live","fr":"En direct"},"Postponed":{"ar":"مؤجلة","en":"Postponed","fr":"Reporté"},"Canceled":{"ar":"ملغاة","en":"Canceled","fr":"Annulé"},"Cancelled":{"ar":"ملغاة","en":"Cancelled","fr":"Annulé"},"Suspended":{"ar":"متوقفة","en":"Suspended","fr":"Suspendu"},"اللاعبون":{"en":"Players","fr":"Joueurs"},"الهدافون":{"en":"Top scorers","fr":"Buteurs"},"تعذّر تحميل قائمة اللاعبين. أعد المحاولة.":{"en":"Could not load the squad. Please retry.","fr":"Impossible de charger l’effectif. Réessayez."},"جارٍ تحميل قائمة اللاعبين…":{"en":"Loading the squad…","fr":"Chargement de l’effectif…"},"قائمة لاعبين محفوظة — قد تكون تغيّرت.":{"en":"Saved squad — it may have changed.","fr":"Effectif enregistré — il peut avoir changé."},"قائمة الفريق (":{"en":"Squad (","fr":"Effectif ("},"لم يوفر المصدر قائمة لاعبين لهذا الفريق.":{"en":"The source has no squad list for this team.","fr":"La source ne fournit pas d’effectif pour cette équipe."},"حراس المرمى":{"en":"Goalkeepers","fr":"Gardiens"},"المدافعون":{"en":"Defenders","fr":"Défenseurs"},"لاعبو الوسط":{"en":"Midfielders","fr":"Milieux"},"المهاجمون":{"en":"Forwards","fr":"Attaquants"},"مراكز أخرى":{"en":"Other positions","fr":"Autres postes"},"الرقم":{"en":"Number","fr":"Numéro"},"اللاعب":{"en":"Player","fr":"Joueur"},"العمر":{"en":"Age","fr":"Âge"},"ملف اللاعب":{"en":"Player profile","fr":"Profil du joueur"},"فتح على ESPN":{"en":"Open on ESPN","fr":"Ouvrir sur ESPN"},"قائمة اللاعبين غير متاحة لهذا الفريق من المصدر.":{"en":"The source has no squad data for this team.","fr":"L’effectif de cette équipe n’est pas disponible dans la source."},"تحديث اللاعبين":{"en":"Refresh players","fr":"Actualiser les joueurs"},"تعذّر تحميل الهدافين. أعد المحاولة.":{"en":"Could not load top scorers. Please retry.","fr":"Impossible de charger les buteurs. Réessayez."},"جارٍ تحميل الهدافين…":{"en":"Loading top scorers…","fr":"Chargement des buteurs…"},"قائمة هدافين محفوظة — قد تكون تغيّرت.":{"en":"Saved top scorers — the table may have changed.","fr":"Classement des buteurs enregistré — il peut avoir changé."},"قائمة الهدافين حسب البيانات المتاحة من المصدر؛ قد لا تشمل كل اللاعبين.":{"en":"Top scorers from available source data; the list may not include every player.","fr":"Buteurs selon les données disponibles ; la liste peut ne pas inclure tous les joueurs."},"الأهداف":{"en":"Goals","fr":"Buts"},"المشاركات":{"en":"Appearances","fr":"Matchs joués"},"التمريرات الحاسمة":{"en":"Assists","fr":"Passes décisives"},"لم يوفر المصدر قائمة هدافين لهذه البطولة حتى الآن.":{"en":"The source has no top scorers list for this league yet.","fr":"La source ne fournit pas encore de liste de buteurs pour cette compétition."},"قائمة الهدافين غير متاحة لهذه البطولة من المصدر.":{"en":"Top scorers are unavailable for this league.","fr":"Les buteurs sont indisponibles pour cette compétition."},"تحديث الهدافين":{"en":"Refresh top scorers","fr":"Actualiser les buteurs"},"المركز في الملعب":{"en":"Position","fr":"Poste"},"مشاهدة البث المجاني داخل التطبيق":{"en":"Watch free broadcasts in the app","fr":"Regarder les directs gratuits dans l’application"},"مصادر مشاهدة أخرى وباقات الاشتراك":{"en":"Other viewing sources and subscriptions","fr":"Autres sources et abonnements"},"الأولى المغربية":{"en":"Al Aoula Morocco","fr":"Al Aoula Maroc"},"قناة رياضية؛ المباريات المعروضة حسب برمجتها وحقوق البث.":{"en":"Sports channel; matches depend on its schedule and broadcast rights.","fr":"Chaîne sportive ; les matchs dépendent du programme et des droits de diffusion."},"قناة عامة قد تنقل مباريات؛ تحقّق من البرنامج قبل المشاهدة.":{"en":"General channel that may show matches; check its schedule.","fr":"Chaîne généraliste pouvant diffuser des matchs ; consultez son programme."},"لم يُؤكّد نقل هذه المباراة على القنوات أدناه. تحقّق من برنامج القناة؛ البث يعرض برنامجها الحالي.":{"en":"This match is not confirmed on the channels below. Check their schedules; the stream shows the current channel program.","fr":"La diffusion de ce match n’est pas confirmée sur les chaînes ci-dessous. Consultez le programme ; le direct affiche le programme actuel."},"عرض القنوات دون تحديد مباراة":{"en":"View channels without a selected match","fr":"Voir les chaînes sans match sélectionné"},"بث رسمي مجاني":{"en":"Free official broadcasts","fr":"Directs officiels gratuits"},"المشاهدة داخل التطبيق":{"en":"Watch in the app","fr":"Regarder dans l’application"},"اختر قناة وشغّل بثها الرسمي هنا. المباريات المتاحة تختلف حسب برنامج القناة وحقوق النقل في بلدك.":{"en":"Choose a channel and play its official stream here. Available matches depend on schedules and broadcast rights in your country.","fr":"Choisissez une chaîne et lancez son direct officiel ici. Les matchs disponibles dépendent du programme et des droits dans votre pays."},"مجاني":{"en":"Free","fr":"Gratuit"},"المشغّل الرسمي":{"en":"Official player","fr":"Lecteur officiel"},"بث القناة داخل التطبيق":{"en":"Channel stream in the app","fr":"Direct de la chaîne dans l’application"},"البث المباشر يحتاج اتصالًا بالإنترنت.":{"en":"Live streaming requires an internet connection.","fr":"Le direct nécessite une connexion Internet."},"تشغيل البث المجاني":{"en":"Play free broadcast","fr":"Lancer le direct gratuit"},"جارٍ تحميل صفحة المشغّل الرسمي…":{"en":"Loading the official player…","fr":"Chargement du lecteur officiel…"},"اضغط تشغيل لبدء مشاهدة القناة.":{"en":"Press play to watch the channel.","fr":"Appuyez sur Lecture pour regarder la chaîne."},"إيقاف البث":{"en":"Stop broadcast","fr":"Arrêter le direct"},"إعادة تشغيل المشغّل":{"en":"Reload player","fr":"Recharger le lecteur"},"ملء الشاشة":{"en":"Full screen","fr":"Plein écran"},"برنامج قناة الرياضية":{"en":"Arriyadia schedule","fr":"Programme d’Arriyadia"},"فتح القناة على موقعها الرسمي":{"en":"Open the official channel site","fr":"Ouvrir le site officiel de la chaîne"},"إذا ظهرت قيود أو لم يبدأ الفيديو، جرّب إعادة تشغيل المشغّل أو افتح موقع القناة. بعض المباريات قد لا تكون متاحة عبر الإنترنت.":{"en":"If viewing is restricted or video does not start, reload the player or open the channel site. Some matches may not be available online.","fr":"Si la diffusion est restreinte ou la vidéo ne démarre pas, rechargez le lecteur ou ouvrez le site de la chaîne. Certains matchs peuvent être indisponibles en ligne."},"اضغط زر التشغيل داخل المشغّل. يمكن تكبير الفيديو من أزراره.":{"en":"Press play inside the player. Use its controls to enlarge the video.","fr":"Appuyez sur Lecture dans le lecteur. Utilisez ses commandes pour agrandir la vidéo."},"تعذّر تحميل المشغّل. أعد تشغيله أو افتح موقع القناة.":{"en":"Could not load the player. Reload it or open the channel site.","fr":"Impossible de charger le lecteur. Rechargez-le ou ouvrez le site de la chaîne."},"إذا لم يظهر الفيديو، أعد تشغيل المشغّل أو افتح الموقع الرسمي.":{"en":"If video does not appear, reload the player or open the official site.","fr":"Si la vidéo ne s’affiche pas, rechargez le lecteur ou ouvrez le site officiel."},"استخدم زر ملء الشاشة داخل المشغّل إذا كان متاحًا.":{"en":"Use the player’s full-screen control if available.","fr":"Utilisez le bouton plein écran du lecteur s’il est disponible."},"انقطع الاتصال بالإنترنت. أعد تشغيل البث بعد عودة الاتصال.":{"en":"Internet connection lost. Restart the stream once connected.","fr":"Connexion Internet interrompue. Relancez le direct après reconnexion."},"هسبورت":{"en":"Hesport","fr":"Hesport"},"هسبورت • العربية":{"en":"Hesport • Arabic","fr":"Hesport • arabe"},"ESPN • الإنجليزية":{"en":"ESPN • English","fr":"ESPN • anglais"},"مصدر الأخبار":{"en":"News source","fr":"Source des actualités"},"تحديث الأخبار":{"en":"Refresh news","fr":"Actualiser les actualités"},"فتح موقع المصدر":{"en":"Open source website","fr":"Ouvrir le site de la source"},"عناوين الأخبار بلغتها الأصلية؛ الواجهة تدعم اللغات الثلاث. اقرأ التفاصيل في موقع المصدر.":{"en":"Headlines remain in their original language; the interface supports three languages. Read the full story on the source website.","fr":"Les titres restent dans leur langue originale ; l’interface propose trois langues. Lisez l’article complet sur le site de la source."},"جارٍ تحميل الأخبار…":{"en":"Loading news…","fr":"Chargement des actualités…"},"أخبار محفوظة — قد توجد أخبار أحدث لدى المصدر.":{"en":"Saved news — newer stories may be available at the source.","fr":"Actualités enregistrées — la source peut proposer des articles plus récents."},"تعذّر تحميل الأخبار. أعد المحاولة أو افتح موقع المصدر.":{"en":"Could not load news. Retry or open the source website.","fr":"Impossible de charger les actualités. Réessayez ou ouvrez le site de la source."},"وقت جلب الأخبار":{"en":"News fetched at","fr":"Actualités récupérées le"},"قراءة الخبر على موقع المصدر ↗":{"en":"Read on source website ↗","fr":"Lire sur le site de la source ↗"},"لم يوفر المصدر أخبارًا قابلة للعرض الآن.":{"en":"No displayable news is available from this source right now.","fr":"Aucune actualité affichable n’est disponible pour cette source actuellement."},"مشاركة المباراة":{"en":"Share match","fr":"Partager le match"},"موعد المباراة":{"en":"Kickoff","fr":"Coup d’envoi"},"النتيجة النهائية":{"en":"Final score","fr":"Score final"},"النتيجة عند آخر جلب البيانات":{"en":"Score when last fetched","fr":"Score lors de la dernière récupération"},"النتيجة حسب آخر البيانات المتاحة":{"en":"Score from latest available data","fr":"Score selon les dernières données disponibles"},"معلومات محفوظة؛ قد تكون تغيّرت.":{"en":"Saved information; it may have changed.","fr":"Informations enregistrées ; elles peuvent avoir changé."},"الموعد والنتيجة حسب بيانات ESPN وقت المشاركة.":{"en":"Schedule and score reflect ESPN data available at sharing time.","fr":"L’horaire et le score reflètent les données ESPN disponibles au moment du partage."},"معاينة نص المشاركة":{"en":"Preview share text","fr":"Aperçu du texte à partager"},"اختيار تطبيق للمشاركة":{"en":"Choose an app to share","fr":"Choisir une application de partage"},"نسخ النص":{"en":"Copy text","fr":"Copier le texte"},"إغلاق المعاينة":{"en":"Close preview","fr":"Fermer l’aperçu"},"اختر التطبيق ثم المستلم لإرسال النص.":{"en":"Choose the app, then the recipient to send the text.","fr":"Choisissez l’application, puis le destinataire pour envoyer le texte."},"تعذّرت المشاركة. يمكنك نسخ النص وإرساله.":{"en":"Sharing failed. You can copy and send the text.","fr":"Le partage a échoué. Vous pouvez copier et envoyer le texte."},"يمكنك نسخ النص وإرساله عبر التطبيق الذي تختاره.":{"en":"Copy and send the text using your preferred app.","fr":"Copiez et envoyez le texte avec l’application de votre choix."},"تم نسخ نص المباراة.":{"en":"Match text copied.","fr":"Texte du match copié."},"حدّد النص وانسخه يدويًا من المعاينة.":{"en":"Select and copy the text manually from the preview.","fr":"Sélectionnez et copiez manuellement le texte depuis l’aperçu."},"المواجهات السابقة":{"en":"Head-to-head matches","fr":"Confrontations précédentes"},"المواجهات المكتملة التي يوفرها المصدر؛ قد لا تشمل كل التاريخ بين الفريقين.":{"en":"Completed meetings available from the source; this may not cover the teams’ full history.","fr":"Rencontres terminées disponibles auprès de la source ; elles peuvent ne pas couvrir tout l’historique des deux équipes."},"آخر مواجهة متاحة":{"en":"Latest available meeting","fr":"Dernière rencontre disponible"},"تفاصيل المواجهة على ESPN":{"en":"Meeting details on ESPN","fr":"Détails de la rencontre sur ESPN"},"لا تتوفر مواجهات سابقة في البيانات المحمّلة لهذه المباراة.":{"en":"No previous meetings are available in the loaded data for this match.","fr":"Aucune confrontation précédente n’est disponible dans les données chargées pour ce match."}};
UI_TRANSLATIONS["الخروج من التطبيق"]={en:"Exit app",fr:"Quitter l’application"};
UI_TRANSLATIONS["سياسة الخصوصية"]={en:"Privacy policy",fr:"Politique de confidentialité"};
UI_TRANSLATIONS["مواعيد المباريات والنتائج"]={en:"Fixtures and results",fr:"Matchs et résultats"};
const originalTexts=new WeakMap(),originalAttributes=new WeakMap();
const translationKeys=Object.keys(UI_TRANSLATIONS).sort((a,b)=>b.length-a.length);
const escapedKeys=translationKeys.map(key=>key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
const translationPattern=new RegExp('(?<![؀-ۿ])('+escapedKeys.join('|')+')(?![؀-ۿ])','g');
const sportsProviders = [["الرياضية المغربية", "المغرب", "inside", "مشغّل داخل المنصة", "https://snrtlive.ma/ar/arryadia", "البث الرسمي عبر SNRT Live، حسب برمجة القناة وقيود المصدر."], ["TOD by beIN", "المنطقة العربية", "paid", "اشتراك", "https://www.tod.tv/", "خدمة رياضية باشتراك. تحقّق من الباقة وتوفر المباراة في بلدك."], ["beIN SPORTS / CONNECT", "المنطقة العربية", "paid", "اشتراك", "https://www.bein.com/watchbeinsports/", "الباقات وخيارات المشاهدة الرسمية لشبكة beIN. لا يشمل هذا الدليل تفعيل الاشتراك."], ["الكأس • شووف", "قطر", "official", "موقع بث رسمي", "https://shoof.alkass.net/", "القنوات والبرامج والمباريات المتاحة عبر منصة الكأس الرسمية."], ["ثمانية", "السعودية", "official", "منصة مشاهدة", "https://app.thmanyah.com/", "محتوى ومباريات الكرة السعودية. شروط المشاهدة والتغطية حسب المنصة والبلد."], ["شاهد • الرياضة", "المنطقة العربية", "paid", "حسب الباقة", "https://shahid.mbc.net/ar/sports", "قسم الرياضة الرسمي؛ تحقّق من القنوات والاشتراك المتاح لحسابك."], ["دبي الرياضية", "الإمارات", "official", "صفحة بث رسمي", "https://www.dubaisports.ae/content/dubaisports/livestreaming/channel-1.html", "صفحة البث الحي لدبي الرياضية 1. توفر الحدث يخضع لحقوق النقل."], ["أبوظبي الرياضية", "الإمارات", "official", "موقع رسمي", "https://adsports.ae/", "موقع الشبكة الرسمي. قد تختلف خدمات البث المفتوحة وخدمات الاشتراك بحسب المنافسة."], ["الشارقة الرياضية • مرايا", "الإمارات", "official", "تطبيق رسمي", "https://play.google.com/store/apps/details?id=com.maraya", "تطبيق مرايا الرسمي لهيئة الشارقة، لمتابعة قنواتها وبرامجها."], ["عُمان الرياضية • عين", "عُمان", "official", "صفحة بث رسمي", "https://ayn.om/live/159", "صفحة عُمان الرياضية في منصة عين الرسمية."], ["الكويت الرياضية", "الكويت", "official", "بوابة الناقل", "https://www.media.gov.kw/", "بوابة وزارة الإعلام الكويتية للوصول إلى قنوات تلفزيون الكويت."], ["السعودية الرياضية • الأولى", "السعودية", "official", "بوابة الناقل", "https://aloula.sba.sa/", "منصة هيئة الإذاعة والتلفزيون السعودية؛ ابحث عن القناة ضمن القنوات المباشرة."], ["شاشا • الرياضة", "الكويت", "paid", "حسب الباقة", "https://beta.shasha.com/", "محتوى رياضي ومباريات على المنصة. تحقّق من التغطية والاشتراك حسب بلدك."], ["SSC", "السعودية", "pending", "لا يوجد بث مؤكّد", null, "لم نثبت خدمة بث حالية لهذه الشبكة. لا نعرض رابطًا مباشرًا غير مؤكّد؛ تصفّح ثمانية وشاهد للتحقق من الخيارات الحالية."], ["البحرين الرياضية", "البحرين", "pending", "بانتظار مصدر بث", null, "لم يُربط مصدر رسمي مؤكّد للمشاهدة بعد."], ["ON Sport / ON Time Sports", "مصر", "pending", "بانتظار مصدر بث", null, "لم يُربط مصدر رسمي مؤكّد للمشاهدة بعد."], ["الرابعة الرياضية", "العراق", "pending", "بانتظار مصدر بث", null, "لم يُربط مصدر رسمي مؤكّد للمشاهدة بعد."], ["STARZPLAY Sports", "المنطقة العربية", "paid", "باقات رياضية", "https://starzplay.com/ar/sports", "القسم الرياضي الرسمي. تحقّق من الباقة والمنافسة وتوفرها في بلدك."], ["الأردنية الرياضية", "الأردن", "official", "بوابة الناقل", "https://www.jrtv.gov.jo/", "بوابة مؤسسة الإذاعة والتلفزيون الأردنية، وتتضمن القناة الرياضية."]];
const leagues = [{
  name: 'البطولة المغربية',
  icon: '🇲🇦',
  code: null,
  official: 'https://frmf.ma/botola-pro/d1'
}, {
  name: 'الدوري الإنجليزي',
  icon: '🏆',
  code: 'eng.1',
  aliases: ['English Premier League']
}, {
  name: 'الدوري الإسباني',
  icon: '🇪🇸',
  code: 'esp.1',
  aliases: ['Spanish LALIGA', 'Spanish LaLiga']
}, {
  name: 'دوري أبطال أوروبا',
  icon: '⭐',
  code: 'uefa.champions',
  aliases: ['UEFA Champions League']
}, {
  name: 'الدوري الإيطالي',
  icon: '🇮🇹',
  code: 'ita.1',
  aliases: ['Italian Serie A']
}, {
  name: 'الدوري الألماني',
  icon: '🇩🇪',
  code: 'ger.1',
  aliases: ['German Bundesliga']
}, {
  name: 'الدوري الفرنسي',
  icon: '🇫🇷',
  code: 'fra.1',
  aliases: ['French Ligue 1']
}];
let matches = [];
const zone = 'Africa/Casablanca';
let dataState = 'loading',
  dataError = '',
  updatedAt = null,
  requestSerial = 0;
function escapeText(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c]);
}
function offsetKey(offset) {
  const base = dateKey(new Date());
  return dateKey(new Date(`${base}T12:00:00Z`).getTime() + offset * 86400000);
}
function dayLabel(offset) {
  return new Intl.DateTimeFormat(uiLocale(), {
    timeZone: zone,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${offsetKey(offset)}T12:00:00Z`));
}
function parseFixtures(data) {
  if (!Array.isArray(data.events)) throw new Error('invalid response');
  return data.events.flatMap(event => {
    const c = event.competitions?.[0],
      home = c?.competitors?.find(t => t.homeAway === 'home'),
      away = c?.competitors?.find(t => t.homeAway === 'away');
    if (!home || !away || !event.date || !Number.isFinite(Date.parse(event.date))) return [];
    const linkCode = (event.links || []).map(x => x.href?.match(/\/league\/([^/?#]+)/)?.[1]).find(Boolean);
    const linkedLeague = leagues.find(x => x.code === linkCode);
    const league = event.league || event.leagues?.[0] || c.league || (data.leagues?.[0]?.name ? data.leagues[0] : null);
    const leagueCode = league?.slug || linkCode || null;
    const leagueName = linkedLeague?.name || league?.name || leagueCode || 'مباريات كرة القدم';
    let l = leagues.findIndex(x => x.name === leagueName || (x.aliases || []).includes(leagueName) || leagueCode && x.code === leagueCode);
    if (l < 0) {
      l = leagues.length;
      leagues.push({
        name: leagueName,
        icon: '⚽',
        code: leagueCode
      });
    }
    const state = event.status?.type || c.status?.type || {};
    const status = state.completed ? 'finished' : state.state === 'in' ? 'live' : 'upcoming';
    const kickoff = new Intl.DateTimeFormat(uiLocale(), {
      timeZone: zone,
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).format(new Date(event.date));
    const hTeam = registerTeam({
      id: String(home.team?.id || home.id || ''),
      name: home.team?.displayName || home.team?.name || 'الفريق المضيف',
      logo: home.team?.logo || home.team?.logos?.[0]?.href,
      code: leagueCode
    });
    const aTeam = registerTeam({
      id: String(away.team?.id || away.id || ''),
      name: away.team?.displayName || away.team?.name || 'الفريق الضيف',
      logo: away.team?.logo || away.team?.logos?.[0]?.href,
      code: leagueCode
    });
    return [{
      hTeam,
      aTeam,
      id: String(event.id),
      l,
      h: home.team?.displayName || home.team?.name || 'الفريق المضيف',
      a: away.team?.displayName || away.team?.name || 'الفريق الضيف',
      date: dateKey(new Date(event.date)),
      kickoff,
      status,
      score: status === 'upcoming' ? kickoff : `${scoreValue(home.score)} : ${scoreValue(away.score)}`,
      time: state.description || 'لم تبدأ',
      venue: c.venue?.fullName || 'غير متاح',
      channels: (c.broadcasts || []).flatMap(b => b.names || []).join('، ') || 'لم يُعلن المصدر قناة ناقلة',
      source: event.links?.find(x => x.href?.startsWith('https://www.espn.com/'))?.href || 'https://www.espn.com/soccer/scoreboard',
      demo: false
    }];
  });
}
function dateKey(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: zone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date);
  const get = t => parts.find(p => p.type === t).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
async function fetchFixtureDate(key, signal) {
  const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/all/scoreboard?dates=${key.replaceAll('-', '')}&limit=1000`, {
    signal
  });
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const data = await response.json();
  if (!Array.isArray(data.events)) throw new Error('invalid response');
  return data;
}
function selectedDate() {
  return calendarDate || offsetKey(day);
}
function validDate(key) {
  return /^\d{4}-\d{2}-\d{2}$/.test(key) && Number.isFinite(Date.parse(key + 'T12:00:00Z')) && dateKey(new Date(key + 'T12:00:00Z')) === key;
}
function calendarLabel() {
  return new Intl.DateTimeFormat(uiLocale(), {
    timeZone: zone,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(selectedDate() + 'T12:00:00Z'));
}
function formatSavedTime(time) {
  return new Intl.DateTimeFormat(uiLocale(), {
    timeZone: zone,
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(new Date(time));
}
function cacheRead(key) {
  const entry = persistentCache[key];
  return entry && Number.isFinite(entry.time) && entry.data != null ? entry : null;
}
function cacheWrite(key, data) {
  try {
    const next = {
      ...persistentCache,
      [key]: {
        time: Date.now(),
        data
      }
    };
    let json = JSON.stringify(next);
    const keys = Object.keys(next).filter(k => k !== key).sort((a, b) => Number(a.startsWith('news:')) - Number(b.startsWith('news:')) || next[a].time - next[b].time);
    while ((json.length > 2200000 || Object.keys(next).length > 36) && keys.length) {
      delete next[keys.shift()];
      json = JSON.stringify(next);
    }
    if (json.length > 2200000) throw new Error('large');
    localStorage.setItem('cm-data-cache-v1', json);
    persistentCache = next;
    cacheSaveFailed = false;
    return true;
  } catch {
    cacheSaveFailed = true;
    return false;
  }
}
function rebuildFixtures() {
  const rows = [...fixtureDays].flatMap(([key, entry]) => parseFixtures(entry.data).map(m => ({
    ...m,
    _cached: !freshFixtureDates.has(key)
  })));
  matches = [...new Map(rows.map(m => [m.id, m])).values()].sort((a, b) => a.date.localeCompare(b.date) || a.kickoff.localeCompare(b.kickoff));
}
function restoreFixtureCache() {
  Object.entries(persistentCache).filter(([key]) => key.startsWith('fixtures:')).sort((a, b) => a[1].time - b[1].time).slice(-12).forEach(([key, entry]) => {
    const date = key.slice(9);
    if (validDate(date) && Array.isArray(entry.data?.events)) {
      try {
        parseFixtures(entry.data);
        fixtureDays.set(date, entry);
      } catch {}
    }
  });
  rebuildFixtures();
  if (fixtureDays.has(selectedDate())) {
    dataState = 'cached';
    updatedAt = new Date(fixtureDays.get(selectedDate()).time);
  }
}
async function loadFixtures({
  selectedOnly = false
} = {}) {
  const serial = ++requestSerial;
  fixtureController?.abort();
  fixtureController = new AbortController();
  const controller = fixtureController;
  const target = selectedDate();
  if (!fixtureDays.has(target)) {
    const saved = cacheRead('fixtures:' + target);
    if (saved && Array.isArray(saved.data?.events)) {
      try {
        parseFixtures(saved.data);
        fixtureDays.set(target, saved);
        rebuildFixtures();
      } catch {}
    }
  }
  const dates = selectedOnly ? [target] : [...new Set([-1, 0, 1].map(offsetKey).concat(target))];
  dataState = 'loading';
  dataError = '';
  if (view === 'matches' || view === 'favorites') render();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const results = await Promise.allSettled(dates.map(key => fetchFixtureDate(key, controller.signal)));
    if (serial !== requestSerial) return;
    results.forEach((result, index) => {
      const key = dates[index];
      if (result.status === 'fulfilled') {
        const entry = {
          time: Date.now(),
          data: result.value
        };
        fixtureDays.set(key, entry);
        freshFixtureDates.add(key);
        cacheWrite('fixtures:' + key, result.value);
      } else freshFixtureDates.delete(key);
    });
    while (fixtureDays.size > 12) {
      const oldest = [...fixtureDays].filter(([key]) => key !== target).sort((a, b) => a[1].time - b[1].time)[0];
      if (!oldest) break;
      fixtureDays.delete(oldest[0]);
      freshFixtureDates.delete(oldest[0]);
    }
    rebuildFixtures();
    const entry = fixtureDays.get(selectedDate());
    dataState = entry ? freshFixtureDates.has(selectedDate()) ? 'ready' : 'cached' : 'error';
    updatedAt = entry ? new Date(entry.time) : null;
    if (results.some(r => r.status === 'rejected')) dataError = dataState === 'cached' ? 'تعذّر الاتصال؛ تُعرض آخر بيانات محفوظة لهذا التاريخ.' : dataState === 'error' ? 'تعذّر تحميل هذا التاريخ، ولا توجد نسخة محفوظة له.' : 'تعذّر تحديث بعض الأيام الأخرى.';
  } catch {
    if (serial !== requestSerial) return;
    dataState = fixtureDays.has(selectedDate()) ? 'cached' : 'error';
    dataError = 'تعذّر تحميل المباريات. تحقق من الإنترنت وأعد المحاولة.';
  } finally {
    clearTimeout(timer);
  }
  if (view === 'matches' || view === 'favorites') render();
}
function scheduleStatus() {
  const entry = fixtureDays.get(selectedDate());
  let message = '';
  if (dataState === 'loading') message = 'جارٍ تحديث المباريات…' + (entry ? ' تُعرض آخر نسخة محمّلة أثناء الاتصال.' : '');else if (dataState === 'cached') message = 'بيانات محفوظة — قد تكون النتائج والمواعيد تغيّرت.';else if (dataState === 'error') message = 'بيانات هذا التاريخ غير متاحة حاليًا.';else message = 'المصدر: ESPN';
  if (entry) message += ' • وقت جلب البيانات: ' + formatSavedTime(entry.time);
  if (dataError) message += ' • ' + dataError;
  if (cacheSaveFailed) message += ' • تعذّر حفظ نسخة على الجهاز.';
  return `<div class="schedule-status ${dataState === 'cached' ? 'cached-note' : ''}" role="${dataState === 'error' ? 'alert' : 'status'}">${escapeText(message)} <button class="pill" data-refresh="1">تحديث</button></div>`;
}
let selectedLeague = 0,
  standingsState = 'idle',
  standingsGroups = [],
  standingsError = '',
  standingsUpdated = null,
  standingsSerial = 0;
const teamRegistry = new Map();
let followedTeams;
try {
  followedTeams = new Map(JSON.parse(localStorage.getItem('cm-followed-teams') || '[]').filter(x => x?.id && x?.name).map(x => [String(x.id), x]));
} catch {
  followedTeams = new Map();
}
let selectedTeam = null,
  teamMatches = [],
  teamLoadState = 'idle',
  teamLoadError = '',
  teamSerial = 0;
let searchQuery = '',
  searchState = 'idle',
  searchWarning = '',
  searchDirectory = new Map(),
  searchSerial = 0;
let detailSerial = 0,
  detailMatchId = null,
  detailController = null;
const summaryCache = new Map();
let calendarDate = null,
  fixtureController = null;
const fixtureDays = new Map(),
  freshFixtureDates = new Set();
let persistentCache = {},
  cacheSaveFailed = false;
try {
  const saved = JSON.parse(localStorage.getItem('cm-data-cache-v1') || '{}');
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) persistentCache = Object.fromEntries(Object.entries(saved).filter(([key, entry]) => entry && Number.isFinite(entry.time) && entry.data != null));
} catch {}
let standingsCached = false,
  teamCached = false,
  teamUpdated = null;
let teamTab='matches',leagueTab='standings';let rosterState={key:'',state:'idle',data:null,time:null,cached:false,error:''},scorersState={key:'',state:'idle',data:null,time:null,cached:false,error:''};let rosterSerial=0,scorersSerial=0,rosterController=null,scorersController=null;
const newsSources={hesport:{name:'هسبورت',label:'هسبورت • العربية',language:'ar',home:'https://www.hesport.com/',url:'https://www.hesport.com/feed'},espn:{name:'ESPN',label:'ESPN • الإنجليزية',language:'en',home:'https://www.espn.com/soccer/',url:'https://site.api.espn.com/apis/site/v2/sports/soccer/all/news?limit=30'}};
let selectedNewsSource=uiLanguage==='ar'?'hesport':'espn';try{const n=localStorage.getItem('cm-news-source');if(Object.hasOwn(newsSources,n))selectedNewsSource=n}catch{}
let newsState={source:'',state:'idle',items:[],time:null,cached:false,error:''},newsSerial=0,newsController=null;
const freeChannels=[
{id:'arryadia',name:'الرياضية المغربية',provider:'SNRT Live',player:'https://snrt.player.easybroadcast.io/events/73_arryadia_k2tgcj0',official:'https://snrtlive.ma/ar/arryadia',schedule:'https://www.snrt.ma/fr/node/4070',note:'قناة رياضية؛ المباريات المعروضة حسب برمجتها وحقوق البث.'},
{id:'alaoula',name:'الأولى المغربية',provider:'SNRT Live',player:'https://snrt.player.easybroadcast.io/events/73_aloula_w1dqfwm',official:'https://snrtlive.ma/ar/al-aoula',schedule:null,note:'قناة عامة قد تنقل مباريات؛ تحقّق من البرنامج قبل المشاهدة.'}
];let selectedFreeChannel='arryadia',freeStreamStarted=false,freeWatchMatch=null,freePlayerTimer=null;
let favorites;
try {
  favorites = new Set(JSON.parse(localStorage.getItem('cm-favorites') || '[]'));
} catch {
  favorites = new Set();
}
;
let view = 'matches',
  day = 0,
  filter = 'all';
const content = document.querySelector('#content'),
  title = document.querySelector('#title'),
  dialog = document.querySelector('#detail');
function team(name, info) {
  return `<span class="team">${teamBadge(info || {
    name
  })}<span>${escapeText(arabicTeamName(name))}</span></span>`;
}
function cards(list) {
  if (!list.length) return '<div class="empty"><strong>لا توجد مباريات هنا</strong>لا توجد مباريات مطابقة في بيانات المصدر. تغطية البطولات تعتمد على المصدر.</div>';
  return leagues.map((l, i) => {
    const rows = list.filter(m => m.l === i);
    return rows.length ? `<div class="league-header"><span>${l.icon}</span><h2>${escapeText(l.name)}</h2><small>• ESPN</small></div>${rows.map(m => `<article class="match"><button class="match-open" data-match="${m.id}" aria-label="تفاصيل ${escapeText(m.h)} ضد ${escapeText(m.a)}">${team(m.h, m.hTeam)}<span class="score">${escapeText(m.score)}<small class="${m.status === 'live' && !m._cached ? 'live' : ''}">${escapeText(m._cached && m.status === 'live' ? 'كان مباشرًا عند آخر جلب' : m.time)}</small></span>${team(m.a, m.aTeam)}</button><button class="star ${favorites.has(m.id) ? 'saved' : ''}" data-fav="${m.id}" aria-label="${favorites.has(m.id) ? 'حذف من' : 'إضافة إلى'} المفضلة" aria-pressed="${favorites.has(m.id)}">${favorites.has(m.id) ? '★' : '☆'}</button></article>`).join('')}` : '';
  }).join('');
}
function render() {
  if(view!=='watch'){freeStreamStarted=false;clearTimeout(freePlayerTimer)}
  setText(document.querySelector('#count'), favorites.size + followedTeams.size);
  setText(title, {
    matches: 'المباريات',
    leagues: 'البطولات',
    favorites: 'مبارياتك المفضلة',
    news: 'الأخبار الرياضية',
    watch: 'المشاهدة الرسمية',
    league: 'تفاصيل البطولة',
    team: 'الفريق المفضّل',
    search: 'البحث عن فريق أو بطولة'
  }[view]);
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.dataset.view === (view === 'league' ? 'leagues' : view === 'team' ? 'favorites' : view)));
  if (view === 'search') {
    renderSearch();
    return;
  }
  if (view === 'team') {
    renderTeamPage();
    return;
  }
  if (view === 'league') {
    renderLeague();
    return;
  }
  if (view === 'matches') {
    setHTML(content, `<div class="toolbar"><div class="days">${[[-1, 'أمس'], [0, 'اليوم'], [1, 'غدًا']].map(([v, t]) => `<button class="pill ${selectedDate() === offsetKey(v) ? 'selected' : ''}" data-day="${v}" aria-pressed="${selectedDate() === offsetKey(v)}">${t}<small>${offsetKey(v)}</small></button>`).join('')}</div><label class="calendar-control" for="match-date">اختر التاريخ<input id="match-date" type="date" value="${selectedDate()}" aria-label="تاريخ المباريات"></label><div class="filters">${[['all', 'الكل'], ['live', 'مباشر'], ['upcoming', 'قادمة'], ['finished', 'انتهت']].map(([v, t]) => `<button class="pill ${filter === v ? 'selected' : ''}" data-filter="${v}">${t}</button>`).join('')}</div></div><div class="schedule-heading"><h2>${calendarLabel()}</h2><span>توقيت المغرب</span></div>${scheduleStatus()}${fixtureDays.has(selectedDate()) ? cards(matches.filter(m => m.date === selectedDate() && (filter === 'all' || m.status === filter))) : ''}`);
  } else if (view === 'watch') {
    setHTML(content, watchHub());
    document.querySelector('#provider-search').addEventListener('input', filterProviders);
    document.querySelector('#provider-type').addEventListener('change', filterProviders);
    filterProviders();bindFreePlayer();
  } else if (view === 'favorites') {
    setHTML(content, renderFollowedTeams() + scheduleStatus() + (matches.length ? '<h2>مباريات محفوظة ومباريات فرقك: أمس واليوم وغدًا</h2>' + cards(matches.filter(m => [-1, 0, 1].map(offsetKey).includes(m.date) && (favorites.has(m.id) || followedTeams.has(m.hTeam?.id) || followedTeams.has(m.aTeam?.id)))) : ''));
  } else if (view === 'leagues') {
    setHTML(content, `<div class="grid">${leagues.map((l, i) => `<button class="league-card" data-league="${i}"><span>${l.icon}</span><h2>${escapeText(l.name)}</h2><small>الترتيب من المصدر ومباريات البطولة</small></button>`).join('')}</div>`);
  } else {
    renderNews();
  }
}
function openMatch(id) {
  const m = [...matches, ...teamMatches].find(x => x.id === id);
  if (!m) return;
  setHTML(document.querySelector('#detail-body'), `<p class="eyebrow">${escapeText(leagues[m.l].name)} • ESPN</p><div class="detail-teams">${team(m.h, m.hTeam)} × ${team(m.a, m.aTeam)}</div><div class="follow-actions">${followButton(m.hTeam)}${followButton(m.aTeam)}</div><div class="detail-score" dir="ltr">${escapeText(m.score)}</div><p style="text-align:center">${escapeText(m._cached && m.status === 'live' ? 'كان مباشرًا عند آخر جلب البيانات' : m.time)}</p>${m._cached ? '<p class="cached-note">معلومات أساسية محفوظة؛ قد تكون تغيّرت منذ جلبها.</p>' : ''}<div class="stat"><span>الموعد بتوقيت المغرب</span><b>${m.date} • ${m.kickoff}</b></div><div class="stat"><span>الملعب</span><b>${escapeText(m.venue)}</b></div><div class="stat"><span>القناة حسب المصدر</span><b>${escapeText(m.channels)}</b></div><p class="detail-note">القنوات المذكورة قد تخص بلد المصدر؛ لا تؤكد توفر النقل في المغرب.</p><a class="secondary-link" href="${escapeText(m.source)}" target="_self" rel="noopener noreferrer">تفاصيل المباراة على ESPN</a><section class="match-sharing"><button class="pill" id="preview-match-share">↗ مشاركة المباراة</button><div id="match-share-preview"></div></section><section id="match-extra" class="match-extra" aria-live="polite"><p>جارٍ تحميل التشكيلة والإحصائيات وأحداث المباراة…</p></section><div class="match-watch"><h2>المشاهدة</h2><p>تحقّق من جدول خدمات المشاهدة الرسمية لمعرفة توفر هذه المباراة.</p><button id="show-free-watch" class="watch-link">▷ مشاهدة البث المجاني داخل التطبيق</button><button id="show-watch" class="watch-link">خدمات المشاهدة الرسمية</button></div>`);
  document.querySelector('#preview-match-share').onclick=()=>previewMatchShare(m);
  document.querySelector('#show-free-watch').onclick=()=>openFreeWatch(m.id);
  document.querySelector('#show-watch').onclick = () => {
    dialog.close();
    view = 'watch';
    render();
  };
  if (!dialog.open) dialog.showModal();
  loadMatchSummary(m);
}
document.querySelector('nav').addEventListener('click', e => {
  const b = e.target.closest('[data-view]');
  if (b) {
    view = b.dataset.view;
    render();
    if (view === 'search' && searchState === 'idle') loadSearchDirectory();
    if(view==='news'&&(newsState.source!==selectedNewsSource||newsState.state==='idle'||newsState.state==='error'||Date.now()-newsState.time>300000))loadNews();
  }
});
content.addEventListener('click', e => {
  let b = e.target.closest('button');
  if (!b) return;
  if(b.dataset.newsRefresh){loadNews();return}
  if(b.dataset.freeChannel){startFreeChannel(b.dataset.freeChannel);return}else if(b.dataset.freeRetry){startFreeChannel(selectedFreeChannel);return}else if(b.dataset.freeStop){stopFreeStream();return}else if(b.dataset.freeFullscreen){fullscreenFreePlayer();return}else if(b.dataset.clearWatchMatch){freeWatchMatch=null;render();return}
  if(b.dataset.teamTab){teamTab=b.dataset.teamTab;if(teamTab==='players')loadRoster();else render();return}else if(b.dataset.leagueTab){leagueTab=b.dataset.leagueTab;if(leagueTab==='scorers')loadScorers();else render();return}else if(b.dataset.rosterRefresh){loadRoster();return}else if(b.dataset.scorersRefresh){loadScorers();return}
  if (b.dataset.searchRefresh) {
    loadSearchDirectory();
  } else if (b.dataset.teamRefresh) {
    loadTeamSchedule();
  } else if (b.dataset.team) {
    openTeam(b.dataset.team);
  } else if (b.dataset.follow) {
    toggleFollow(b.dataset.follow);
  } else if (b.dataset.favoritesBack) {
    view = 'favorites';
    render();
  } else if (b.dataset.standingsRefresh) {
    loadLeagueStandings();
  } else if (b.dataset.refresh) {
    loadFixtures();
  } else if (b.dataset.play === 'arryadia') {
    startArryadia();
  } else if (b.dataset.stop) {
    stopFreeStream();
  } else if (b.dataset.day !== undefined) {
    day = Number(b.dataset.day);
    calendarDate = null;
    filter = 'all';
    loadFixtures({
      selectedOnly: true
    });
  } else if (b.dataset.filter) {
    filter = b.dataset.filter;
    render();
  } else if (b.dataset.fav) {
    const id = b.dataset.fav;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    try {
      localStorage.setItem('cm-favorites', JSON.stringify([...favorites]));
    } catch {}
    render();
  } else if (b.dataset.match) {
    openMatch(b.dataset.match);
  } else if (b.dataset.league !== undefined) {
    openLeague(Number(b.dataset.league));
  } else if (b.dataset.back) {
    view = 'leagues';
    render();
  }
});
document.querySelector('#close').onclick = () => dialog.close();
dialog.addEventListener('click', e => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  }
});
initLanguageUI();
restoreFixtureCache();
render();
loadFixtures();
setInterval(() => {
  if (document.visibilityState === 'visible') loadFixtures();
}, 120000);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') loadFixtures();
});
function watchHub(){return freeWatchHub()+`<details id="other-viewing-services" class="other-services"><summary>مصادر مشاهدة أخرى وباقات الاشتراك</summary><section class="provider-directory"><div class="directory-heading"><h2>دليل المصادر • ${sportsProviders.length} جهة</h2><span>بث وخدمات ومصادر بانتظار الربط</span></div><div class="directory-controls"><label>بحث عن قناة أو دولة<input id="provider-search" type="search" placeholder="مثال: الكأس، مصر، الإمارات" autocomplete="off"></label><label>طريقة المشاهدة<select id="provider-type"><option value="all">كل المصادر</option><option value="inside">داخل المنصة</option><option value="official">مصادر رسمية خارجية</option><option value="paid">باقات واشتراكات</option><option value="pending">بانتظار الربط</option></select></label></div><p class="detail-note">المصادر المرتبطة متحقّق من هويتها، لكن التشغيل من المغرب وتوفر كل مباراة غير مضمون. الجهات بانتظار الربط لا تتوفر لها مشاهدة هنا. هذا دليل موسّع وليس حصرًا نهائيًا لكل قناة عربية.</p><p id="provider-results" aria-live="polite"></p><div id="provider-grid" class="grid watch-grid">${providerCards(sportsProviders)}</div></section></details>`}
function startArryadia(){startFreeChannel('arryadia')}
function providerCards(list) {
  return list.map(([name, country, type, tag, url, note]) => `<article class="watch-card provider-item"><div class="provider directory-brand">${name}<small>${country}</small></div><span class="provider-tag">${tag}</span><p>${note}</p>${type === 'inside' ? '<button class="watch-link" data-play="arryadia">تشغيل الرياضية هنا</button>' : url ? `<a class="watch-link" href="${url}" target="_self" rel="noopener noreferrer">${type === 'paid' ? 'المشاهدة والباقات الرسمية' : 'فتح المصدر الرسمي'}</a>` : '<span class="unavailable">المشاهدة غير مرتبطة</span>'}</article>`).join('') || '<div class="empty">لا توجد مصادر مطابقة. جرّب اسمًا آخر.</div>';
}
function filterProviders() {
  const q = document.querySelector('#provider-search').value.trim().normalize('NFKC');
  const type = document.querySelector('#provider-type').value;
  const list = sportsProviders.filter(p => (type === 'all' || p[2] === type) && (!q || normalizeSearch(p[0] + ' ' + p[1] + ' ' + tr(p[0] + ' ' + p[1])).includes(normalizeSearch(q))));
  setHTML(document.querySelector('#provider-grid'), providerCards(list));
  setText(document.querySelector('#provider-results'), `${list.length} من ${sportsProviders.length} مصدرًا`);
}
function parseStandings(data, code = '') {
  const groups = [];
  function visit(node) {
    if (node.standings?.entries?.length) {
      const table = node.standings;
      groups.push({
        name: node.name || table.displayName || 'الترتيب',
        season: table.seasonDisplayName || '',
        rows: table.entries.map(entry => {
          const stats = Object.fromEntries((entry.stats || []).map(stat => [stat.name, stat.displayValue ?? stat.value]));
          const info = registerTeam({
            id: String(entry.team?.id || ''),
            name: entry.team?.displayName || entry.team?.name || '—',
            logo: entry.team?.logos?.[0]?.href || entry.team?.logo,
            code
          });
          return {
            name: info.name,
            info,
            stats
          };
        })
      });
    }
    (node.children || []).forEach(visit);
  }
  visit(data);
  return groups;
}
function openLeague(id) {
  selectedLeague = id;
  leagueTab='standings';
  view = 'league';
  standingsGroups = [];
  standingsUpdated = null;
  standingsError = '';
  standingsState = 'loading';
  render();
  loadLeagueStandings();
}
async function loadLeagueStandings() {
  const serial = ++standingsSerial,
    l = leagues[selectedLeague];
  standingsState = 'loading';
  standingsError = '';
  standingsGroups = [];
  standingsCached = false;
  const saved = cacheRead('standings:' + l.code);
  if (saved) {
    try {
      standingsGroups = parseStandings(saved.data, l.code);
      if (standingsGroups.length) {
        standingsState = 'ready';
        standingsUpdated = new Date(saved.time);
        standingsCached = true;
      }
    } catch {}
  }
  render();
  if (!l.code) {
    standingsState = 'unavailable';
    render();
    return;
  }
  const controller = new AbortController(),
    timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(`https://site.web.api.espn.com/apis/v2/sports/soccer/${encodeURIComponent(l.code)}/standings`, {
      signal: controller.signal
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const raw = await response.json();
    const groups = parseStandings(raw, l.code);
    if (serial !== standingsSerial) return;
    if (!groups.length) {
      standingsState = 'unavailable';
    } else {
      standingsGroups = groups;
      standingsState = 'ready';
      standingsUpdated = new Date();
      standingsCached = false;
      cacheWrite('standings:' + l.code, raw);
    }
  } catch (error) {
    if (serial !== standingsSerial) return;
    standingsState = standingsGroups.length ? 'ready' : 'error';
    standingsCached = standingsGroups.length > 0;
    standingsError = error.name === 'AbortError' ? 'انتهت مهلة الاتصال. تحقق من الإنترنت وأعد المحاولة.' : 'تعذّر تحميل الترتيب من المصدر. أعد المحاولة.';
  } finally {
    clearTimeout(timeout);
  }
  if (view === 'league') render();
}
function renderLeague() {
  if(leagueTab==='scorers'){renderScorersPage();return}
  const l = leagues[selectedLeague];
  const stat = (row, name) => escapeText(row.stats[name] ?? '—');
  let body = '';
  if (standingsState === 'loading') body = '<p class="schedule-status" role="status">جارٍ تحميل الترتيب من المصدر…</p>';else if (standingsState === 'ready') body = `<p class="schedule-status">${standingsCached ? 'بيانات ترتيب محفوظة — قد تكون تغيّرت. ' : ''}${standingsError ? escapeText(standingsError) + ' • ' : ''}المصدر: ESPN • وقت جلب البيانات: ${new Intl.DateTimeFormat(uiLocale(), {
    timeZone: zone,
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(standingsUpdated)} <button class="pill" data-standings-refresh="1">تحديث الترتيب</button></p>` + standingsGroups.map(g => `<h3>${escapeText(g.name)}</h3>${g.season ? `<p>${escapeText(g.season)}</p>` : ''}<div class="standings-scroll"><table><thead><tr><th>المركز</th><th>الفريق</th><th>لعب</th><th>فاز</th><th>تعادل</th><th>خسر</th><th>له</th><th>عليه</th><th>الفارق</th><th>النقاط</th></tr></thead><tbody>${g.rows.map(r => `<tr><td>${stat(r, 'rank')}</td><td><button class="team-profile-link" data-team="${escapeText(r.info.id)}">${team(r.name, r.info)}</button>${followButton(r.info, true)}</td><td>${stat(r, 'gamesPlayed')}</td><td>${stat(r, 'wins')}</td><td>${stat(r, 'ties')}</td><td>${stat(r, 'losses')}</td><td>${stat(r, 'pointsFor')}</td><td>${stat(r, 'pointsAgainst')}</td><td dir="ltr">${stat(r, 'pointDifferential')}</td><td><b>${stat(r, 'points')}</b></td></tr>`).join('')}</tbody></table></div>`).join('');else if (standingsState === 'error') body = `<p role="alert">${escapeText(standingsError)}</p><button class="pill" data-standings-refresh="1">إعادة المحاولة</button>`;else body = '<p class="schedule-status">الترتيب غير متاح من مصدر البيانات لهذه البطولة. لا توجد بيانات تجريبية معروضة.</p>';
  const url = l.official || (l.code ? `https://www.espn.com/soccer/table/_/league/${encodeURIComponent(l.code)}` : null);
  setHTML(content, `<button class="back" data-back="1">العودة إلى البطولات</button><h2>${l.icon} ${escapeText(l.name)}</h2>${leagueTabs()}${selectedLeague === 0 ? moroccoHub() : body}${url ? `<p><a class="secondary-link" href="${escapeText(url)}" target="_self" rel="noopener noreferrer">${l.official ? 'البرنامج والنتائج والترتيب على موقع الجامعة المغربية' : 'فتح صفحة الترتيب على ESPN'}</a></p>` : ''}<h3>مباريات البطولة: أمس واليوم وغدًا</h3>${matches.length ? cards(matches.filter(m => m.l === selectedLeague && [-1, 0, 1].map(offsetKey).includes(m.date))) : '<p>المباريات غير متاحة حاليًا. عد إلى قسم المباريات للتحديث.</p>'}`);
}
function scoreValue(value) {
  return typeof value === 'object' && value !== null ? value.displayValue ?? value.value ?? '—' : value ?? '—';
}
function safeLogo(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' && u.hostname === 'a.espncdn.com' ? u.href : '';
  } catch {
    return '';
  }
}
function registerTeam(info) {
  info = {
    ...info,
    id: String(info.id || ''),
    logo: safeLogo(info.logo)
  };
  if (info.id) {
    const old = teamRegistry.get(info.id) || followedTeams.get(info.id) || {};
    info = {
      ...old,
      ...info,
      code: info.code || old.code,
      logo: info.logo || old.logo
    };
    teamRegistry.set(info.id, info);
  }
  return info;
}
function teamBadge(info) {
  const logo = safeLogo(info.logo);
  return `<span class="team-badge ${logo ? 'has-logo' : ''}">${logo ? `<img src="${escapeText(logo)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : ''}<span class="initials">${escapeText(arabicTeamName(info.name || '').slice(0, 2))}</span></span>`;
}
function followButton(info, compact = false) {
  if (!info?.id) return '';
  const active = followedTeams.has(info.id);
  return `<button class="follow-button ${active ? 'following' : ''}" data-follow="${escapeText(info.id)}" aria-pressed="${active}" aria-label="${active ? 'إلغاء متابعة' : 'متابعة'} ${escapeText(arabicTeamName(info.name))}">${compact ? active ? '★' : '☆' : (active ? '★ تتابع ' : '☆ متابعة ') + escapeText(arabicTeamName(info.name))}</button>`;
}
function toggleFollow(id) {
  const info = teamRegistry.get(id) || followedTeams.get(id);
  if (!info) return;
  followedTeams.has(id) ? followedTeams.delete(id) : followedTeams.set(id, info);
  try {
    localStorage.setItem('cm-followed-teams', JSON.stringify([...followedTeams.values()]));
  } catch {}
  render();
  const body = document.querySelector('#detail-body');
  body.querySelectorAll('[data-follow]').forEach(button => {
    const t = teamRegistry.get(button.dataset.follow) || followedTeams.get(button.dataset.follow);
    if (t) setOuterHTML(button, followButton(t));
  });
}
function renderFollowedTeams() {
  return `<section class="followed-section"><h2>الفرق التي تتابعها (${followedTeams.size})</h2><p>تابع فريقًا من تفاصيل المباراة أو جدول ترتيب البطولة. افتح فريقك لعرض مبارياته القادمة ونتائجه.</p>${followedTeams.size ? `<div class="grid">${[...followedTeams.values()].map(t => {
    registerTeam(t);
    return `<article class="followed-card">${team(t.name, t)}<button class="pill selected" data-team="${escapeText(t.id)}">مباريات الفريق</button>${followButton(t)}</article>`;
  }).join('')}</div>` : '<div class="empty">لم تتابع أي فريق بعد.</div>'}</section>`;
}
function openTeam(id) {
  const t = teamRegistry.get(id) || followedTeams.get(id);
  if (!t) return;
  selectedTeam = t;
  teamTab='matches';
  view = 'team';
  teamMatches = [];
  teamLoadState = 'loading';
  render();
  loadTeamSchedule();
}
async function loadTeamSchedule() {
  const serial = ++teamSerial,
    t = selectedTeam;
  teamMatches = [];
  teamLoadState = 'loading';
  teamLoadError = '';
  teamCached = false;
  const saved = cacheRead('team:' + t?.code + ':' + t?.id);
  if (saved && Array.isArray(saved.data)) {
    try {
      teamMatches = parseTeamResponses(saved.data, t, true);
      teamLoadState = 'ready';
      teamCached = true;
      teamUpdated = saved.time;
    } catch {}
  }
  render();
  if (!t?.code) {
    teamLoadState = 'unavailable';
    render();
    return;
  }
  const controller = new AbortController(),
    timer = setTimeout(() => controller.abort(), 25000);
  try {
    const base = `https://site.api.espn.com/apis/site/v2/sports/soccer/${encodeURIComponent(t.code)}/teams/${encodeURIComponent(t.id)}/schedule`;
    const responses = await Promise.allSettled(['', '?fixture=true'].map(async suffix => {
      const response = await fetch(base + suffix, {
        signal: controller.signal
      });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const data = await response.json();
      if (!Array.isArray(data.events)) throw new Error('invalid');
      return data;
    }));
    if (serial !== teamSerial) return;
    const successful = responses.filter(r => r.status === 'fulfilled');
    if (!successful.length) throw new Error('unavailable');
    const raw = successful.map(r => r.value);
    teamMatches = parseTeamResponses(raw, t, false);
    teamCached = false;
    teamUpdated = Date.now();
    cacheWrite('team:' + t.code + ':' + t.id, raw);
    teamLoadState = 'ready';
    if (successful.length < 2) teamLoadError = 'تعذّر تحميل جزء من مباريات الفريق؛ المعروض هو ما توفر من المصدر.';
  } catch (error) {
    if (serial !== teamSerial) return;
    teamLoadState = saved ? 'ready' : 'error';
    teamCached = !!saved;
    teamLoadError = 'تعذّر تحميل مباريات الفريق. تحقق من الإنترنت وأعد المحاولة.';
  } finally {
    clearTimeout(timer);
  }
  if (view === 'team') render();
}
function renderTeamPage() {
  if(teamTab==='players'){renderRosterPage();return}
  const t = selectedTeam;
  if (!t) return;
  let body = '';
  if (teamLoadState === 'loading') body = '<p role="status">جارٍ تحميل مباريات الفريق…</p>';else if (teamLoadState === 'ready') {
    const upcoming = teamMatches.filter(m => m.status !== 'finished').sort((a, b) => Date.parse(a.date + 'T' + a.kickoff) - Date.parse(b.date + 'T' + b.kickoff)).slice(0, 8);
    const recent = teamMatches.filter(m => m.status === 'finished').sort((a, b) => b.date.localeCompare(a.date) || b.kickoff.localeCompare(a.kickoff)).slice(0, 5);
    body = `${teamCached ? '<p class="cached-note">مباريات محفوظة — قد تكون المواعيد والنتائج تغيّرت.</p>' : ''}<p class="detail-note">${teamUpdated ? 'وقت جلب البيانات: ' + formatSavedTime(teamUpdated) + ' • ' : ''}المصدر: ESPN • توقيت المغرب • تغطية المباريات حسب المصدر</p>${teamLoadError ? `<p>${escapeText(teamLoadError)}</p>` : ''}<h3>المباريات القادمة</h3>${datedTeamCards(upcoming)}<h3>آخر النتائج</h3>${datedTeamCards(recent)}`;
  } else body = `<p role="alert">${teamLoadState === 'unavailable' ? 'جدول هذا الفريق غير متاح من المصدر حاليًا.' : escapeText(teamLoadError)}</p>`;
  setHTML(content, `<button class="back" data-favorites-back="1">العودة إلى المفضلة</button><h2>${team(t.name, t)}</h2>${followButton(t)}${teamTabs()}<button class="pill" data-team-refresh="1">تحديث مباريات الفريق</button>${body}`);
}
function datedTeamCards(rows) {
  return rows.length ? rows.map(m => `<p class="team-match-date">${escapeText(m.date)} • ${escapeText(m.kickoff)}</p>${cards([m])}`).join('') : '<p class="schedule-status">لا توجد مباريات متاحة في بيانات المصدر.</p>';
}
function moroccoHub() {
  return `<section class="morocco-hub"><h3>البطولة الاحترافية المغربية</h3><p>تابع البيانات على موقع الجامعة الملكية المغربية لكرة القدم. الروابط تفتح في المتصفح؛ لم يُربط جلب الترتيب تلقائيًا داخل التطبيق بعد.</p><div class="morocco-links"><a class="watch-link" href="https://frmf.ma/botola-pro/d1" target="_self">البرنامج والنتائج</a><a class="watch-link" href="https://frmf.ma/botola-pro/d1/classement" target="_self">الترتيب الرسمي</a></div></section>`;
}
function arabicAlias(name) {
  return {
    'Manchester City': 'مانشستر سيتي',
    'Arsenal': 'أرسنال',
    'Liverpool': 'ليفربول',
    'Chelsea': 'تشيلسي',
    'Manchester United': 'مانشستر يونايتد',
    'Tottenham Hotspur': 'توتنهام',
    'Newcastle United': 'نيوكاسل يونايتد',
    'Aston Villa': 'أستون فيلا',
    'Everton': 'إيفرتون',
    'Sunderland': 'سندرلاند',
    'Leeds United': 'ليدز يونايتد',
    'West Ham United': 'وست هام يونايتد',
    'Wolverhampton Wanderers': 'وولفرهامبتون',
    'Real Madrid': 'ريال مدريد',
    'Barcelona': 'برشلونة',
    'Atlético Madrid': 'أتلتيكو مدريد',
    'Atletico Madrid': 'أتلتيكو مدريد',
    'Sevilla': 'إشبيلية',
    'Valencia': 'فالنسيا',
    'Villarreal': 'فياريال',
    'Real Betis': 'ريال بيتيس',
    'Real Sociedad': 'ريال سوسيداد',
    'Athletic Club': 'أتلتيك بلباو',
    'Bayern Munich': 'بايرن ميونخ',
    'Borussia Dortmund': 'بوروسيا دورتموند',
    'Bayer Leverkusen': 'باير ليفركوزن',
    'RB Leipzig': 'لايبزيغ',
    'Paris Saint-Germain': 'باريس سان جيرمان',
    'Marseille': 'مارسيليا',
    'AS Monaco': 'موناكو',
    'Lyon': 'ليون',
    'Lille': 'ليل',
    'Juventus': 'يوفنتوس',
    'Internazionale': 'إنتر ميلان',
    'Inter Milan': 'إنتر ميلان',
    'AC Milan': 'ميلان',
    'Napoli': 'نابولي',
    'AS Roma': 'روما',
    'Lazio': 'لاتسيو',
    'Atalanta': 'أتالانتا',
    'Fiorentina': 'فيورنتينا',
    'Morocco': 'المغرب',
    'France': 'فرنسا',
    'Spain': 'إسبانيا',
    'Portugal': 'البرتغال',
    'England': 'إنجلترا',
    'Germany': 'ألمانيا',
    'Argentina': 'الأرجنتين',
    'Brazil': 'البرازيل'
  }[name] || name;
}
document.addEventListener('error', event => {
  const image = event.target;
  if (image.tagName === 'IMG' && image.closest('.team-badge')) {
    image.hidden = true;
    image.closest('.team-badge').classList.remove('has-logo');
  }
}, true);
document.querySelector('#detail-body').addEventListener('click', event => {
  const button = event.target.closest('[data-follow]');
  if (button) toggleFollow(button.dataset.follow);
});
function normalizeSearch(text) {
  return String(text || '').normalize('NFKD').replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').toLowerCase().trim();
}
function searchMatches(text) {
  const q = normalizeSearch(searchQuery);
  return normalizeSearch(text).includes(q);
}
function renderSearch() {
  setHTML(content, `<section class="search-panel"><label for="global-search">ابحث بالعربية أو بالاسم الأصلي</label><input id="global-search" type="search" value="${escapeText(searchQuery)}" placeholder="مثال: ريال مدريد، أرسنال، الدوري الإنجليزي" autocomplete="off"><p class="detail-note">البحث يشمل البطولات المدعومة، ودليل فرقها، والمباريات المحمّلة.</p><div id="search-results" aria-live="polite"></div></section>`);
  renderSearchResults();
}
function renderSearchResults() {
  const target = document.querySelector('#search-results');
  if (!target) return;
  let status = searchState === 'loading' ? '<p role="status">جارٍ تحميل دليل الفرق من ESPN…</p>' : '';
  if (searchWarning) status += `<p role="status">${escapeText(searchWarning)}</p><button class="pill" data-search-refresh="1">إعادة تحميل دليل الفرق</button>`;
  if (!normalizeSearch(searchQuery)) {
    setHTML(target, status + '<p class="schedule-status">اكتب اسم فريق أو بطولة للبحث.</p>');
    return;
  }
  const foundLeagues = leagues.map((l, id) => ({
    ...l,
    id
  })).filter(l => searchMatches(l.name + ' ' + tr(l.name) + ' ' + l.code + ' ' + (l.aliases || []).join(' ')));
  const available = new Map([...teamRegistry, ...followedTeams, ...searchDirectory]);
  const foundTeams = [...available.values()].filter(t => searchMatches(t.name + ' ' + arabicAlias(t.name)));
  const foundMatches = [...new Map([...matches, ...teamMatches].map(m => [m.id, m])).values()].filter(m => searchMatches(m.h + ' ' + arabicAlias(m.h) + ' ' + m.a + ' ' + arabicAlias(m.a) + ' ' + leagues[m.l]?.name));
  const leagueHTML = foundLeagues.length ? `<h2>البطولات (${foundLeagues.length})</h2><div class="grid">${foundLeagues.map(l => `<button class="league-card" data-league="${l.id}"><span>${l.icon}</span><h3>${escapeText(l.name)}</h3></button>`).join('')}</div>` : '';
  const teamHTML = foundTeams.length ? `<h2>الفرق (${foundTeams.length})</h2><div class="grid">${foundTeams.slice(0, 40).map(t => {
    registerTeam(t);
    return `<article class="followed-card">${team(t.name, t)}<button class="pill" data-team="${escapeText(t.id)}">عرض مباريات الفريق</button>${followButton(t)}</article>`;
  }).join('')}</div>${foundTeams.length > 40 ? '<p>تظهر أول 40 نتيجة؛ اكتب اسمًا أدق لتقليل النتائج.</p>' : ''}` : '';
  const matchHTML = foundMatches.length ? `<h2>المباريات المحمّلة (${foundMatches.length})</h2>${datedTeamCards(foundMatches.slice(0, 20))}` : '';
  setHTML(target, status + leagueHTML + teamHTML + matchHTML + (!foundLeagues.length && !foundTeams.length && !foundMatches.length ? '<div class="empty">لا توجد نتائج مطابقة في البيانات المتاحة. جرّب الاسم الأصلي أو اسمًا آخر.</div>' : ''));
}
async function loadSearchDirectory() {
  const serial = ++searchSerial;
  searchState = 'loading';
  searchWarning = '';
  const saved = cacheRead('directory');
  if (saved && Array.isArray(saved.data)) {
    searchDirectory = new Map(saved.data.filter(t => t.id && t.name).map(t => [t.id, registerTeam(t)]));
    searchWarning = 'تعرض الفرق من آخر دليل محفوظ أثناء التحديث.';
  }
  renderSearchResults();
  const controller = new AbortController(),
    timeout = setTimeout(() => controller.abort(), 20000);
  const codes = ['eng.1', 'esp.1', 'ita.1', 'ger.1', 'fra.1', 'uefa.champions'];
  try {
    const results = await Promise.allSettled(codes.map(async code => {
      const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${code}/teams?limit=1000`, {
        signal: controller.signal
      });
      if (!response.ok) throw new Error('unavailable');
      const data = await response.json();
      const list = (data.sports || []).flatMap(sport => (sport.leagues || []).flatMap(league => league.teams || []));
      if (!list.length) throw new Error('empty');
      return list.filter(item => item.team?.id && item.team?.displayName).map(({
        team: t
      }) => ({
        id: String(t.id),
        name: t.displayName,
        logo: t.logos?.[0]?.href || t.logo,
        code
      }));
    }));
    if (serial !== searchSerial) return;
    const good = results.filter(r => r.status === 'fulfilled');
    if (!good.length) {
      searchState = 'error';
      searchWarning = (saved ? 'تعذّر تحديث دليل الفرق؛ المعروض من آخر نسخة محفوظة. ' : '') + 'تعذّر تحميل دليل الفرق. يمكنك البحث في البطولات والبيانات المحمّلة.';
    } else {
      const directory = new Map();
      good.flatMap(r => r.value).forEach(t => {
        if (!directory.has(t.id)) directory.set(t.id, registerTeam(t));
      });
      searchDirectory = directory;
      searchState = 'ready';
      searchWarning = '';
      cacheWrite('directory', [...directory.values()]);
      if (good.length < codes.length) searchWarning = 'دليل الفرق جزئي؛ تعذّر تحميل بعض البطولات.';
    }
  } catch {
    if (serial === searchSerial) {
      searchState = 'error';
      searchWarning = 'تعذّر تحميل دليل الفرق.';
    }
  } finally {
    clearTimeout(timeout);
  }
  if (view === 'search') renderSearchResults();
}
content.addEventListener('input', event => {
  if (event.target.id === 'global-search') {
    searchQuery = event.target.value;
    renderSearchResults();
  }
});
function parseMatchSummary(data) {
  if (!data || typeof data !== 'object' || !data.header && !data.boxscore && !data.rosters && !data.keyEvents) throw new Error('invalid summary');
  const stats = (data.boxscore?.teams || []).filter(t => Array.isArray(t.statistics));
  const rosters = (data.rosters || []).filter(t => Array.isArray(t.roster));
  const events = (data.keyEvents || []).filter(e => {
    const type = String(e.type?.type || e.type?.text || '').toLowerCase();
    return e.scoringPlay || /goal|card|substitution/.test(type);
  });
  return {
    stats,
    rosters,
    events,
    headToHead: parseHeadToHead(data),
    competition: data.header?.competitions?.[0]
  };
}
async function loadMatchSummary(match, force = false) {
  detailController?.abort();
  detailController = new AbortController();
  const controller = detailController,
    serial = ++detailSerial;
  detailMatchId = match.id;
  const target = document.querySelector('#match-extra');
  if (!target) return;
  let cached = summaryCache.get(match.id);
  const saved = cacheRead('summary:' + match.id);
  if (!cached && saved) {
    cached = {
      parsed: saved.data,
      time: saved.time,
      fromDisk: true
    };
    summaryCache.set(match.id, cached);
  }
  if (!force && cached && Date.now() - cached.time < 60000) {
    renderMatchSummary(cached.parsed, cached.time, !!cached.fromDisk);
    return;
  }
  if (cached) renderMatchSummary(cached.parsed, cached.time, true);else setHTML(target, '<p role="status">جارٍ تحميل التشكيلة والإحصائيات وأحداث المباراة…</p>');
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${encodeURIComponent(leagues[match.l]?.code || 'all')}/summary?event=${encodeURIComponent(match.id)}`, {
      signal: controller.signal
    });
    if (!response.ok) throw new Error('unavailable');
    const parsed = parseMatchSummary(await response.json());
    if (serial !== detailSerial || !dialog.open) return;
    const time = Date.now();
    summaryCache.set(match.id, {
      parsed,
      time
    });
    cacheWrite('summary:' + match.id, compactSummary(parsed));
    renderMatchSummary(parsed, time);
  } catch (error) {
    if (serial !== detailSerial || !dialog.open) return;
    if (cached) {
      renderMatchSummary(cached.parsed, cached.time, true);
      insertHTML(target, 'afterbegin', '<p role="alert">تعذّر تحديث التفاصيل؛ تُعرض النسخة المحفوظة.</p>');
      return;
    }
    setHTML(target, '<p role="alert">تعذّر تحميل تفاصيل المباراة من المصدر. المعلومات الأساسية ما زالت متاحة.</p><button class="pill" data-detail-refresh="1">إعادة المحاولة</button>');
  } finally {
    clearTimeout(timeout);
  }
}
function renderMatchSummary(parsed, time, cached = false) {
  const target = document.querySelector('#match-extra');
  if (!target) return;
  const home = parsed.stats.find(t => t.homeAway === 'home') || parsed.stats[0],
    away = parsed.stats.find(t => t.homeAway === 'away') || parsed.stats[1];
  const labels = {
    possessionPct: 'الاستحواذ %',
    totalShots: 'التسديدات',
    shotsOnTarget: 'التسديدات على المرمى',
    wonCorners: 'الركنيات',
    foulsCommitted: 'الأخطاء',
    offsides: 'التسلل',
    yellowCards: 'البطاقات الصفراء',
    redCards: 'البطاقات الحمراء',
    saves: 'التصديات',
    totalPasses: 'التمريرات'
  };
  let statsHTML = '<p class="detail-note">الإحصائيات غير متاحة من المصدر لهذه المباراة حتى الآن.</p>';
  if (home && away) {
    const h = Object.fromEntries(home.statistics.map(s => [s.name, s.displayValue ?? s.value])),
      a = Object.fromEntries(away.statistics.map(s => [s.name, s.displayValue ?? s.value]));
    const keys = Object.keys(labels).filter(k => h[k] != null || a[k] != null);
    if (keys.length) statsHTML = `<div class="stats-table"><table><thead><tr><th>${escapeText(arabicTeamName(home.team?.displayName || 'المضيف'))}</th><th>الإحصائية</th><th>${escapeText(arabicTeamName(away.team?.displayName || 'الضيف'))}</th></tr></thead><tbody>${keys.map(k => `<tr><td>${escapeText(h[k] ?? '—')}</td><th>${labels[k]}</th><td>${escapeText(a[k] ?? '—')}</td></tr>`).join('')}</tbody></table></div>`;
  }
  const lineupsHTML = parsed.rosters.length ? parsed.rosters.map(roster => {
    const starters = roster.roster.filter(p => p.starter === true),
      bench = roster.roster.filter(p => p.starter === false);
    const row = player => `<li><span class="jersey-number">${escapeText(player.jersey || '—')}</span><span>${escapeText(player.athlete?.displayName || player.athlete?.fullName || 'غير متاح')}</span><small>${escapeText(positionLabel(player.position))}</small></li>`;
    return `<section class="lineup-team"><h3>${escapeText(arabicTeamName(roster.team?.displayName || 'الفريق'))}</h3>${roster.formation ? `<p class="detail-note">الخطة: <span dir="ltr">${escapeText(roster.formation)}</span></p>` : ''}${starters.length ? `<h4>التشكيلة الأساسية</h4><ul class="lineup-list">${starters.map(row).join('')}</ul>` : '<p>التشكيلة الأساسية غير معلنة في المصدر.</p>'}${bench.length ? `<details><summary>البدلاء (${bench.length})</summary><ul class="lineup-list">${bench.map(row).join('')}</ul></details>` : ''}</section>`;
  }).join('') : '<p class="detail-note">التشكيلة غير متاحة من المصدر حتى الآن.</p>';
  const eventsHTML = parsed.events.length ? `<ol class="match-timeline">${parsed.events.map(event => {
    const type = String(event.type?.type || event.type?.text || '').toLowerCase();
    const label = /red/.test(type) ? '🟥 بطاقة حمراء' : /yellow/.test(type) ? '🟨 بطاقة صفراء' : /substitution/.test(type) ? '🔄 تبديل' : /own/.test(type) ? '⚽ هدف عكسي' : /penalty.*miss|miss.*penalty/.test(type) ? 'ركلة جزاء ضائعة' : event.scoringPlay || /goal/.test(type) ? '⚽ هدف' : event.type?.text || 'حدث';
    const names = (event.participants || []).map(p => p.athlete?.displayName).filter(Boolean).join('، ');
    return `<li><span class="event-minute" dir="ltr">${escapeText(event.clock?.displayValue || '—')}</span><div><b>${escapeText(label)}</b><p>${escapeText(names || event.shortText || event.text || 'تفاصيل غير متاحة')}</p>${event.team?.displayName ? `<small>${escapeText(arabicTeamName(event.team.displayName))}</small>` : ''}</div></li>`;
  }).join('')}</ol>` : '<p class="detail-note">لا توجد أهداف أو بطاقات أو تبديلات متاحة في بيانات المصدر حتى الآن.</p>';
  const competition = parsed.competition,
    hc = competition?.competitors?.find(c => c.homeAway === 'home'),
    ac = competition?.competitors?.find(c => c.homeAway === 'away');
  if (hc && ac && competition.status?.type?.state !== 'pre') setText(document.querySelector('.detail-score'), `${scoreValue(hc.score)} : ${scoreValue(ac.score)}`);
  setHTML(target, `${cached ? '<p class="cached-note">تفاصيل محفوظة — قد تكون تغيّرت منذ آخر جلب.</p>' : ''}<p class="detail-note">المصدر: ESPN • وقت جلب التفاصيل: ${formatSavedTime(time)} <button class="pill" data-detail-refresh="1">تحديث التفاصيل</button></p>${renderHeadToHead(parsed.headToHead)}<div class="detail-section"><h2>إحصائيات المباراة</h2>${statsHTML}</div><div class="detail-section"><h2>الأهداف والبطاقات والتبديلات</h2>${eventsHTML}</div><div class="detail-section"><h2>التشكيلة</h2>${lineupsHTML}</div>`);
}
function positionLabel(position) {
  return {
    Goalkeeper: 'حارس مرمى',
    Defender: 'دفاع',
    Midfielder: 'وسط',
    Forward: 'هجوم'
  }[position?.name] || position?.displayName || position?.name || '';
}
document.querySelector('#detail-body').addEventListener('click', event => {
  if (event.target.closest('[data-detail-refresh]')) {
    const match = [...matches, ...teamMatches].find(m => m.id === detailMatchId);
    if (match) loadMatchSummary(match, true);
  }
});
dialog.addEventListener('close', () => {
  detailSerial++;
  detailController?.abort();
});
content.addEventListener('change', event => {
  if(event.target.id==='news-source'){const id=event.target.value;if(!Object.hasOwn(newsSources,id))return;selectedNewsSource=id;try{localStorage.setItem('cm-news-source',id)}catch{}loadNews();return}
  if (event.target.id === 'match-date') {
    const value = event.target.value;
    if (!validDate(value)) return;
    calendarDate = value;
    filter = 'all';
    loadFixtures({
      selectedOnly: true
    });
  }
});
window.addEventListener('online', () => {
  if (view === 'matches' || view === 'favorites') loadFixtures();else if (view === 'team' && selectedTeam){if(teamTab==='players')loadRoster();else loadTeamSchedule()}else if (view === 'league'){if(leagueTab==='scorers')loadScorers();else loadLeagueStandings()}
});
function parseTeamResponses(raw, teamInfo, cached) {
  return [...new Map(raw.flatMap(data => parseFixtures({
    ...data,
    leagues: [{
      name: leagues.find(l => l.code === teamInfo.code)?.name || teamInfo.code,
      slug: teamInfo.code
    }]
  })).map(m => [m.id, {
    ...m,
    _cached: cached
  }])).values()].filter(m => m.hTeam.id === teamInfo.id || m.aTeam.id === teamInfo.id);
}
function compactSummary(parsed) {
  return {
    stats: parsed.stats.map(t => ({
      homeAway: t.homeAway,
      team: {
        displayName: t.team?.displayName
      },
      statistics: t.statistics.map(s => ({
        name: s.name,
        displayValue: s.displayValue,
        value: s.value
      }))
    })),
    rosters: parsed.rosters.map(t => ({
      team: {
        displayName: t.team?.displayName
      },
      formation: t.formation,
      roster: t.roster.map(p => ({
        starter: p.starter,
        jersey: p.jersey,
        position: p.position,
        athlete: {
          displayName: p.athlete?.displayName,
          fullName: p.athlete?.fullName
        }
      }))
    })),
    events: parsed.events.map(e => ({
      type: e.type,
      clock: e.clock,
      scoringPlay: e.scoringPlay,
      participants: (e.participants || []).map(p => ({
        athlete: {
          displayName: p.athlete?.displayName
        }
      })),
      shortText: e.shortText,
      text: e.text,
      team: {
        displayName: e.team?.displayName
      }
    })),
    headToHead: parsed.headToHead || [],
    competition: parsed.competition ? {
      status: parsed.competition.status,
      competitors: parsed.competition.competitors?.map(c => ({
        homeAway: c.homeAway,
        score: c.score
      }))
    } : null
  };
}
function uiLocale(){return {ar:'ar-MA',en:'en-GB',fr:'fr-FR'}[uiLanguage]}
function arabicTeamName(name){return uiLanguage==='ar'?arabicAlias(name):name}
function tr(value){const text=String(value??'');if(uiLanguage==='ar')return UI_TRANSLATIONS[text]?.ar||text;return text.replace(translationPattern,key=>UI_TRANSLATIONS[key]?.[uiLanguage]||key).replaceAll('،',',').replaceAll('؛',';').replaceAll('؟','?')}
function localizeElement(root){
 const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
 while(node=walk.nextNode()){
  if(node.parentElement?.closest('script,style,[data-native-language-labels]'))continue;
  if(!originalTexts.has(node))originalTexts.set(node,node.nodeValue);
  node.nodeValue=tr(originalTexts.get(node));
 }
 const elements=[...(root.nodeType===1?[root]:[]),...root.querySelectorAll('*')];
 for(const element of elements){
  if(element.closest('[data-native-language-labels]')&&element.tagName!=='SELECT')continue;
  let attributes=originalAttributes.get(element);if(!attributes){attributes={};originalAttributes.set(element,attributes)}
  for(const name of ['aria-label','placeholder','title'])if(element.hasAttribute(name)){if(!(name in attributes))attributes[name]=element.getAttribute(name);element.setAttribute(name,tr(attributes[name]))}
 }
}
function setHTML(element,html){element.innerHTML=html;localizeElement(element);return html}
function setText(element,text){element.textContent=tr(text);for(const child of element.childNodes)if(child.nodeType===3)originalTexts.set(child,String(text??''));return text}
function localizedHTML(html){const template=document.createElement('template');template.innerHTML=html;localizeElement(template.content);return template.innerHTML}
function setOuterHTML(element,html){element.outerHTML=localizedHTML(html);return html}
function insertHTML(element,position,html){element.insertAdjacentHTML(position,localizedHTML(html))}
function applyLanguage(){
 document.documentElement.lang=uiLanguage;document.documentElement.dir=uiLanguage==='ar'?'rtl':'ltr';
 localizeElement(document.body);document.querySelector('#language-select').value=uiLanguage;
 document.title={ar:'مواعيد الكرة | المباريات والبطولات',en:'Football Fixtures | Matches and leagues',fr:'Football Fixtures | Matchs et compétitions'}[uiLanguage];
}
function initLanguageUI(){
 applyLanguage();document.querySelector('#language-select').addEventListener('change',event=>{
  if(!['ar','en','fr'].includes(event.target.value))return;uiLanguage=event.target.value;
  try{localStorage.setItem('cm-language',uiLanguage)}catch{}
  applyLanguage();render();if(dialog.open&&detailMatchId)openMatch(detailMatchId);
 });
}

function teamTabs(){return `<div class="profile-tabs"><button class="pill ${teamTab==='matches'?'selected':''}" data-team-tab="matches" aria-pressed="${teamTab==='matches'}">مباريات الفريق</button><button class="pill ${teamTab==='players'?'selected':''}" data-team-tab="players" aria-pressed="${teamTab==='players'}">اللاعبون</button></div>`}
function leagueTabs(){return `<div class="profile-tabs"><button class="pill ${leagueTab==='standings'?'selected':''}" data-league-tab="standings" aria-pressed="${leagueTab==='standings'}">الترتيب</button><button class="pill ${leagueTab==='scorers'?'selected':''}" data-league-tab="scorers" aria-pressed="${leagueTab==='scorers'}">الهدافون</button></div>`}
function playerURL(athlete){const href=athlete.links?.find(l=>l.rel?.includes('playercard'))?.href;try{const u=new URL(href);if(u.protocol==='https:'&&u.hostname==='www.espn.com'&&u.pathname.startsWith('/soccer/player/'))return u.href}catch{}return athlete.id?`https://www.espn.com/soccer/player/_/id/${encodeURIComponent(athlete.id)}`:null}
function parseRoster(raw,expectedTeam){
 if(!Array.isArray(raw?.athletes))throw new Error('invalid roster');
 if(raw.team?.id&&String(raw.team.id)!==String(expectedTeam.id))throw new Error('wrong team');
 const entries=raw.athletes.flatMap(a=>Array.isArray(a.items)?a.items.map(p=>({...p,position:p.position||{name:a.position}})):[a]);
 const players=entries.filter(a=>a&&(a.displayName||a.fullName)).map(a=>({id:String(a.id||''),name:a.displayName||a.fullName,jersey:a.jersey??'—',position:a.position||{},age:Number.isFinite(a.age)?a.age:null,photo:safeLogo(a.headshot?.href),url:playerURL(a)}));
 return {season:raw.season?.displayName||raw.season?.name||'',players};
}
async function loadRoster(){
 const t=selectedTeam;if(!t)return;const key='roster:'+t.code+':'+t.id,serial=++rosterSerial;
 rosterController?.abort();rosterController=new AbortController();const controller=rosterController;
 rosterState={key,state:'loading',data:null,time:null,cached:false,error:''};const saved=cacheRead(key);
 if(saved){try{rosterState={key,state:'ready',data:parseRoster(saved.data,t),time:saved.time,cached:true,error:''}}catch{}}
 render();if(!t.code){rosterState.state='unavailable';render();return}
 const timer=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${encodeURIComponent(t.code)}/teams/${encodeURIComponent(t.id)}/roster`,{signal:controller.signal});
  if(!response.ok)throw new Error('unavailable');const raw=await response.json(),data=parseRoster(raw,t);
  if(serial!==rosterSerial)return;rosterState={key,state:'ready',data,time:Date.now(),cached:false,error:''};cacheWrite(key,raw);
 }catch{if(serial!==rosterSerial)return;rosterState.state=rosterState.data?'ready':'error';rosterState.cached=!!rosterState.data;rosterState.error='تعذّر تحميل قائمة اللاعبين. أعد المحاولة.'}
 finally{clearTimeout(timer)}
 if(view==='team'&&teamTab==='players'&&selectedTeam.id===t.id)render();
}
function renderRosterPage(){
 const t=selectedTeam;if(!t)return;let body='';
 if(rosterState.key!=='roster:'+t.code+':'+t.id||rosterState.state==='loading')body='<p role="status">جارٍ تحميل قائمة اللاعبين…</p>';
 else if(rosterState.state==='ready'){
  const data=rosterState.data;
  body=`${rosterState.cached?'<p class="cached-note">قائمة لاعبين محفوظة — قد تكون تغيّرت.</p>':''}${rosterState.error?`<p role="alert">${escapeText(rosterState.error)}</p>`:''}<p class="detail-note">المصدر: ESPN • وقت جلب البيانات: ${formatSavedTime(rosterState.time)}</p>${data.season?`<p>${escapeText(data.season)}</p>`:''}<h3>قائمة الفريق (${data.players.length})</h3>`;
  if(!data.players.length)body+='<p>لم يوفر المصدر قائمة لاعبين لهذا الفريق.</p>';
  else{
   const positions=[['Goalkeeper','حراس المرمى'],['Defender','المدافعون'],['Midfielder','لاعبو الوسط'],['Forward','المهاجمون'],['other','مراكز أخرى']];
   body+=positions.map(([position,label])=>{
    const list=data.players.filter(p=>position==='other'?!positions.slice(0,4).some(([name])=>p.position.name===name):p.position.name===position);
    return list.length?`<h3>${label}</h3><div class="player-table-scroll"><table class="player-table"><thead><tr><th>الرقم</th><th>اللاعب</th><th>المركز في الملعب</th><th>العمر</th><th>ملف اللاعب</th></tr></thead><tbody>${list.map(p=>`<tr><td><span class="jersey-number">${escapeText(p.jersey)}</span></td><td>${teamBadge({name:p.name,logo:p.photo})}<span class="player-name">${escapeText(p.name)}</span></td><td>${escapeText(positionLabel(p.position))}</td><td>${p.age??'—'}</td><td>${p.url?`<a class="secondary-link" href="${escapeText(p.url)}" target="_self" rel="noopener noreferrer">فتح على ESPN</a>`:'—'}</td></tr>`).join('')}</tbody></table></div>`:'';
   }).join('');
  }
 }else body=`<p role="alert">${rosterState.state==='unavailable'?'قائمة اللاعبين غير متاحة لهذا الفريق من المصدر.':escapeText(rosterState.error)}</p>`;
 setHTML(content,`<button class="back" data-favorites-back="1">العودة إلى المفضلة</button><h2>${team(t.name,t)}</h2>${followButton(t)}${teamTabs()}<button class="pill" data-roster-refresh="1">تحديث اللاعبين</button>${body}`);
}
function parseScorers(raw,expectedCode){
 if(!Array.isArray(raw?.stats))throw new Error('invalid scorers');
 if(raw.league?.slug&&raw.league.slug!==expectedCode)throw new Error('wrong league');
 const group=raw.stats.find(s=>s.name==='goalsLeaders');
 if(!group)return {season:raw.season?.displayName||'',players:[]};
 if(!Array.isArray(group.leaders))throw new Error('invalid leaders');
 const players=group.leaders.flatMap(row=>{
  const a=row.athlete;if(!a||!(a.displayName||a.fullName))return [];
  const stats=Object.fromEntries((a.statistics||[]).map(s=>[s.name,s]));
  const goals=stats.totalGoals?.value??row.value;if(typeof goals!=='number'||!Number.isFinite(goals)||goals<0)return [];
  const rawTeam=a.team||row.team;const teamInfo=rawTeam?.id?registerTeam({id:String(rawTeam.id),name:rawTeam.displayName||rawTeam.name||'غير متاح',logo:rawTeam.logos?.[0]?.href||rawTeam.logo,code:expectedCode}):null;
  return [{id:String(a.id||''),name:a.displayName||a.fullName,goals,appearances:stats.appearances?.displayValue??stats.appearances?.value??'—',assists:stats.goalAssists?.displayValue??stats.goalAssists?.value??'—',team:teamInfo,url:playerURL(a)}];
 }).sort((a,b)=>b.goals-a.goals);
 let rank=0;players.forEach((p,index)=>{if(index===0||p.goals!==players[index-1].goals)rank=index+1;p.rank=rank});
 return {season:raw.season?.displayName||raw.season?.name||'',players};
}
async function loadScorers(){
 const league=leagues[selectedLeague],key='scorers:'+league.code,serial=++scorersSerial;
 scorersController?.abort();scorersController=new AbortController();const controller=scorersController;
 scorersState={key,state:'loading',data:null,time:null,cached:false,error:''};const saved=cacheRead(key);
 if(saved){try{scorersState={key,state:'ready',data:parseScorers(saved.data,league.code),time:saved.time,cached:true,error:''}}catch{}}
 render();if(!league.code){scorersState.state='unavailable';render();return}
 const timer=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await fetch(`https://site.web.api.espn.com/apis/site/v2/sports/soccer/${encodeURIComponent(league.code)}/statistics`,{signal:controller.signal});
  if(!response.ok)throw new Error('unavailable');const raw=await response.json(),data=parseScorers(raw,league.code);
  if(serial!==scorersSerial)return;scorersState={key,state:'ready',data,time:Date.now(),cached:false,error:''};cacheWrite(key,raw);
 }catch{if(serial!==scorersSerial)return;scorersState.state=scorersState.data?'ready':'error';scorersState.cached=!!scorersState.data;scorersState.error='تعذّر تحميل الهدافين. أعد المحاولة.'}
 finally{clearTimeout(timer)}
 if(view==='league'&&leagueTab==='scorers'&&leagues[selectedLeague].code===league.code)render();
}
function renderScorersPage(){
 const l=leagues[selectedLeague];let body='';
 if(scorersState.key!=='scorers:'+l.code||scorersState.state==='loading')body='<p role="status">جارٍ تحميل الهدافين…</p>';
 else if(scorersState.state==='ready'){
  const data=scorersState.data;
  body=`${scorersState.cached?'<p class="cached-note">قائمة هدافين محفوظة — قد تكون تغيّرت.</p>':''}${scorersState.error?`<p role="alert">${escapeText(scorersState.error)}</p>`:''}<p class="detail-note">المصدر: ESPN • وقت جلب البيانات: ${formatSavedTime(scorersState.time)}</p>${data.season?`<p>${escapeText(data.season)}</p>`:''}<p class="detail-note">قائمة الهدافين حسب البيانات المتاحة من المصدر؛ قد لا تشمل كل اللاعبين.</p>`;
  body+=data.players.length?`<div class="player-table-scroll"><table class="scorers-table"><thead><tr><th>المركز</th><th>اللاعب</th><th>الفريق</th><th>الأهداف</th><th>المشاركات</th><th>التمريرات الحاسمة</th></tr></thead><tbody>${data.players.map(p=>`<tr><td>${p.rank}</td><td>${p.url?`<a class="secondary-link" href="${escapeText(p.url)}" target="_self" rel="noopener noreferrer">${escapeText(p.name)}</a>`:escapeText(p.name)}</td><td>${p.team?`<button class="team-profile-link" data-team="${escapeText(p.team.id)}">${team(p.team.name,p.team)}</button>`:'—'}</td><td><b class="goals-count">${p.goals}</b></td><td>${escapeText(p.appearances)}</td><td>${escapeText(p.assists)}</td></tr>`).join('')}</tbody></table></div>`:'<p>لم يوفر المصدر قائمة هدافين لهذه البطولة حتى الآن.</p>';
 }else body=`<p role="alert">${scorersState.state==='unavailable'?'قائمة الهدافين غير متاحة لهذه البطولة من المصدر.':escapeText(scorersState.error)}</p>`;
 setHTML(content,`<button class="back" data-back="1">العودة إلى البطولات</button><h2>${l.icon} ${escapeText(l.name)}</h2>${leagueTabs()}<button class="pill" data-scorers-refresh="1">تحديث الهدافين</button>${body}`);
}

function freeWatchHub(){
 const channel=freeChannels.find(c=>c.id===selectedFreeChannel)||freeChannels[0];
 const context=freeWatchMatch?`<section class="free-watch-context"><h3>${escapeText(arabicTeamName(freeWatchMatch.h))} × ${escapeText(arabicTeamName(freeWatchMatch.a))}</h3><p>${escapeText(freeWatchMatch.date)} • ${escapeText(freeWatchMatch.kickoff)} • توقيت المغرب</p><p>لم يُؤكّد نقل هذه المباراة على القنوات أدناه. تحقّق من برنامج القناة؛ البث يعرض برنامجها الحالي.</p><button class="pill" data-clear-watch-match="1">عرض القنوات دون تحديد مباراة</button></section>`:'';
 return `<div class="watch-intro"><span class="eyebrow">بث رسمي مجاني</span><h2>المشاهدة داخل التطبيق</h2><p>اختر قناة وشغّل بثها الرسمي هنا. المباريات المتاحة تختلف حسب برنامج القناة وحقوق النقل في بلدك.</p></div>${context}<div class="free-channel-list">${freeChannels.map(c=>`<button class="free-channel ${c.id===selectedFreeChannel?'selected':''}" data-free-channel="${c.id}" aria-pressed="${c.id===selectedFreeChannel}"><strong>${escapeText(c.name)}</strong><small>مجاني • ${c.provider}</small></button>`).join('')}</div><section class="player-section"><div class="player-heading"><h2>${escapeText(channel.name)}</h2><span>SNRT Live</span></div><p class="detail-note">${escapeText(channel.note)}</p><div id="player-area" class="player-area">${freeStreamStarted?`<iframe id="free-live-frame" src="${channel.player}" title="${escapeText(tr('المشغّل الرسمي')+' — '+tr(channel.name))}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen></iframe>`:`<div class="player-start"><strong>بث القناة داخل التطبيق</strong><p>البث المباشر يحتاج اتصالًا بالإنترنت.</p><button class="watch-link" data-free-channel="${channel.id}">▷ تشغيل البث المجاني</button></div>`}</div><p id="free-player-status" class="detail-note" role="status">${freeStreamStarted?'جارٍ تحميل صفحة المشغّل الرسمي…':'اضغط تشغيل لبدء مشاهدة القناة.'}</p><div class="free-player-controls">${freeStreamStarted?'<button class="pill" data-free-stop="1">إيقاف البث</button><button class="pill" data-free-retry="1">إعادة تشغيل المشغّل</button><button class="pill" data-free-fullscreen="1">ملء الشاشة</button>':''}${channel.schedule?`<a class="pill secondary-link" href="${channel.schedule}" target="_self" rel="noopener noreferrer">برنامج قناة الرياضية</a>`:''}<a class="pill secondary-link" href="${channel.official}" target="_self" rel="noopener noreferrer">فتح القناة على موقعها الرسمي</a></div><p class="detail-note">إذا ظهرت قيود أو لم يبدأ الفيديو، جرّب إعادة تشغيل المشغّل أو افتح موقع القناة. بعض المباريات قد لا تكون متاحة عبر الإنترنت.</p></section>`;
}
function openFreeWatch(id){freeWatchMatch=[...matches,...teamMatches].find(m=>m.id===id)||null;dialog.close();view='watch';freeStreamStarted=false;render()}
function startFreeChannel(id){if(!freeChannels.some(c=>c.id===id))return;selectedFreeChannel=id;freeStreamStarted=true;view='watch';render()}
function stopFreeStream(){freeStreamStarted=false;clearTimeout(freePlayerTimer);render()}
function bindFreePlayer(){
 clearTimeout(freePlayerTimer);const frame=document.querySelector('#free-live-frame'),status=document.querySelector('#free-player-status');
 if(!frame||!status)return;
 frame.addEventListener('load',()=>{if(!frame.isConnected)return;clearTimeout(freePlayerTimer);setText(status,'اضغط زر التشغيل داخل المشغّل. يمكن تكبير الفيديو من أزراره.')});
 frame.addEventListener('error',()=>{if(frame.isConnected)setText(status,'تعذّر تحميل المشغّل. أعد تشغيله أو افتح موقع القناة.')});
 freePlayerTimer=setTimeout(()=>{if(frame.isConnected)setText(status,'إذا لم يظهر الفيديو، أعد تشغيل المشغّل أو افتح الموقع الرسمي.')},15000);
}
async function fullscreenFreePlayer(){
 const area=document.querySelector('#player-area'),status=document.querySelector('#free-player-status');if(!area)return;
 try{if(area.requestFullscreen)await area.requestFullscreen();else throw new Error('unsupported')}catch{if(status)setText(status,'استخدم زر ملء الشاشة داخل المشغّل إذا كان متاحًا.')}
}
window.addEventListener('offline',()=>{if(view==='watch'){const status=document.querySelector('#free-player-status');if(status)setText(status,'انقطع الاتصال بالإنترنت. أعد تشغيل البث بعد عودة الاتصال.')}});

function safeNewsURL(value,source){
 try{const u=new URL(value),host=source==='hesport'?'hesport.com':'espn.com';if(u.protocol==='https:'&&[host,'www.'+host].includes(u.hostname)&&!u.username&&!u.password&&u.pathname!=='/')return u.href}catch{}return null;
}
function normalizeNews(rows,source){
 if(!Array.isArray(rows))throw new Error('invalid news');
 const byURL=new Map();for(const row of rows){
  const url=safeNewsURL(row.url,source),headline=typeof row.headline==='string'?row.headline.trim().slice(0,500):'',time=Date.parse(row.published);
  if(!url||!headline||!Number.isFinite(time))continue;
  if(!byURL.has(url))byURL.set(url,{headline,url,published:new Date(time).toISOString()});
 }
 return [...byURL.values()].sort((a,b)=>b.published.localeCompare(a.published)).slice(0,30);
}
function parseNewsRSS(xml){
 const doc=new DOMParser().parseFromString(xml,'application/xml');
 if(doc.querySelector('parsererror')||!doc.querySelector('rss > channel'))throw new Error('invalid RSS');
 return normalizeNews([...doc.querySelectorAll('channel > item')].map(item=>({headline:item.querySelector('title')?.textContent,url:item.querySelector('link')?.textContent,published:item.querySelector('pubDate')?.textContent})),'hesport');
}
async function loadNews(){
 const source=selectedNewsSource,serial=++newsSerial;newsController?.abort();newsController=new AbortController();const controller=newsController;
 newsState={source,state:'loading',items:[],time:null,cached:false,error:''};const saved=cacheRead('news:'+source);
 if(saved){try{newsState.items=normalizeNews(saved.data,source);newsState.time=saved.time;newsState.cached=true}catch{}}
 if(view==='news')render();const timer=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await fetch(newsSources[source].url,{signal:controller.signal});if(!response.ok)throw new Error('fetch failed');
  let items;if(source==='hesport')items=parseNewsRSS(await response.text());else{const raw=await response.json();if(!Array.isArray(raw.articles))throw new Error('invalid news');items=normalizeNews(raw.articles.map(a=>({headline:a.headline,url:a.links?.web?.href,published:a.published})),source)}
  if(serial!==newsSerial)return;newsState={source,state:'ready',items,time:Date.now(),cached:false,error:''};cacheWrite('news:'+source,items);
 }catch{if(serial!==newsSerial)return;newsState.state=newsState.items.length?'ready':'error';newsState.error='تعذّر تحميل الأخبار. أعد المحاولة أو افتح موقع المصدر.'}
 finally{clearTimeout(timer)}
 if(view==='news'&&selectedNewsSource===source)render();
}
function renderNews(){
 const source=newsSources[selectedNewsSource],state=newsState.source===selectedNewsSource?newsState:{state:'idle',items:[]};
 let status=state.state==='loading'?'<p role="status">جارٍ تحميل الأخبار…</p>':'';
 if(state.cached)status+='<p class="cached-note">أخبار محفوظة — قد توجد أخبار أحدث لدى المصدر.</p>';
 if(state.error)status+=`<p role="alert">${escapeText(state.error)}</p>`;
 if(state.time)status+=`<p class="detail-note">وقت جلب الأخبار: ${formatSavedTime(state.time)} • توقيت المغرب</p>`;
 let articles=state.items.map(item=>`<article class="news-card"><div class="news-meta"><span>${escapeText(source.name)}</span><time datetime="${item.published}">${escapeText(formatSavedTime(Date.parse(item.published)))}</time></div><h2 dir="${source.language==='ar'?'rtl':'ltr'}" lang="${source.language}" data-news-headline>${escapeText(item.headline)}</h2><a class="watch-link" href="${escapeText(item.url)}" target="_self" rel="noopener noreferrer">قراءة الخبر على موقع المصدر ↗</a></article>`).join('');
 if(state.state==='ready'&&!state.items.length)articles='<div class="empty">لم يوفر المصدر أخبارًا قابلة للعرض الآن.</div>';
 setHTML(content,`<div class="news-toolbar"><label for="news-source">مصدر الأخبار<select id="news-source">${Object.entries(newsSources).map(([id,c])=>`<option value="${id}" ${id===selectedNewsSource?'selected':''}>${escapeText(c.label)}</option>`).join('')}</select></label><button class="pill" data-news-refresh="1" ${state.state==='loading'?'disabled':''}>تحديث الأخبار</button><a class="pill secondary-link" href="${source.home}" target="_self" rel="noopener noreferrer">فتح موقع المصدر</a></div><p class="detail-note">عناوين الأخبار بلغتها الأصلية؛ الواجهة تدعم اللغات الثلاث. اقرأ التفاصيل في موقع المصدر.</p>${status}<div class="news-list">${articles}</div>`);
 // Preserve source headlines verbatim, independently of interface translation.
 document.querySelectorAll('[data-news-headline]').forEach((node,index)=>{node.textContent=state.items[index].headline});
}
window.addEventListener('online',()=>{if(view==='news')loadNews()});

function matchShareText(m){
 const lines=[tr('مواعيد الكرة')+' ⚽',arabicTeamName(m.h)+' × '+arabicTeamName(m.a),tr(leagues[m.l]?.name||'مباريات كرة القدم'),tr('موعد المباراة')+': '+m.date+' • '+m.kickoff+' ('+tr('توقيت المغرب')+')'];
 if(m.status==='finished')lines.push(tr('النتيجة النهائية')+': '+m.score);
 else if(m.status==='live')lines.push(tr(m._cached?'النتيجة عند آخر جلب البيانات':'النتيجة حسب آخر البيانات المتاحة')+': '+m.score);
 lines.push(tr(m._cached?'معلومات محفوظة؛ قد تكون تغيّرت.':'الموعد والنتيجة حسب بيانات ESPN وقت المشاركة.'));
 try{const u=new URL(m.source);if(u.protocol==='https:'&&['espn.com','www.espn.com'].includes(u.hostname))lines.push(u.href)}catch{}
 return lines.join('\n');
}
function previewMatchShare(m){
 const text=matchShareText(m),area=document.querySelector('#match-share-preview');if(!area)return;
 const href='https://appassets.androidplatform.net/actions/share?text='+encodeURIComponent(text)+'&title='+encodeURIComponent(tr('مشاركة المباراة'));
 setHTML(area,`<label for="match-share-text">معاينة نص المشاركة</label><textarea id="match-share-text" readonly rows="8" dir="${uiLanguage==='ar'?'rtl':'ltr'}"></textarea><div class="share-actions"><a id="send-match-share" class="watch-link" href="${escapeText(href)}">اختيار تطبيق للمشاركة</a><button class="pill" id="copy-match-share">نسخ النص</button><button class="pill" id="close-match-share">إغلاق المعاينة</button></div><p id="match-share-status" class="detail-note" role="status">اختر التطبيق ثم المستلم لإرسال النص.</p>`);
 document.querySelector('#match-share-text').value=text;
 document.querySelector('#copy-match-share').onclick=()=>copyMatchShare(text);
 document.querySelector('#close-match-share').onclick=()=>setHTML(area,'');
 document.querySelector('#send-match-share').onclick=async event=>{
  if(location.hostname==='appassets.androidplatform.net')return;
  event.preventDefault();if(navigator.share){try{await navigator.share({title:tr('مشاركة المباراة'),text})}catch(e){if(e.name!=='AbortError')setText(document.querySelector('#match-share-status'),'تعذّرت المشاركة. يمكنك نسخ النص وإرساله.')}}else setText(document.querySelector('#match-share-status'),'يمكنك نسخ النص وإرساله عبر التطبيق الذي تختاره.');
 };
}
async function copyMatchShare(text){
 const status=document.querySelector('#match-share-status'),field=document.querySelector('#match-share-text');
 try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(text);else{field.focus();field.select();if(!document.execCommand('copy'))throw new Error('copy failed')}if(status?.isConnected)setText(status,'تم نسخ نص المباراة.')}catch{if(field?.isConnected){field.focus();field.select()}if(status?.isConnected)setText(status,'حدّد النص وانسخه يدويًا من المعاينة.');}
}

function parseHeadToHead(data){
 const current=data.header?.competitions?.[0],currentID=String(current?.id||data.header?.id||''),cutoff=Date.parse(current?.date||data.header?.date),pair=(current?.competitors||[]).map(c=>String(c.team?.id||c.id||'')).filter(Boolean).sort();
 if(pair.length!==2||pair[0]===pair[1])return [];
 const rows=(Array.isArray(data.seasonseries)?data.seasonseries:[]).filter(s=>s.type==='head-to-head').flatMap(s=>Array.isArray(s.events)?s.events:[]),results=new Map();
 for(const event of rows){
  const id=String(event.id||''),time=Date.parse(event.date),status=event.statusType||event.status?.type||{},competitors=Array.isArray(event.competitors)?event.competitors:[],ids=competitors.map(c=>String(c.team?.id||c.id||'')).sort();
  if(!id||id===currentID||!Number.isFinite(time)||Number.isFinite(cutoff)&&time>=cutoff||!(status.completed===true||status.state==='post'||event.status==='post')||ids.length!==2||ids[0]!==pair[0]||ids[1]!==pair[1])continue;
  const home=competitors.find(c=>c.homeAway==='home'),away=competitors.find(c=>c.homeAway==='away');if(!home?.team?.displayName||!away?.team?.displayName)continue;
  const hs=scoreValue(home.score),as=scoreValue(away.score);if(!/^\d+$/.test(String(hs))||!/^\d+$/.test(String(as)))continue;
  const url='https://www.espn.com/soccer/match/_/gameId/'+encodeURIComponent(id);
  if(!/^\d+$/.test(id))continue;
  results.set(id,{id,date:new Date(time).toISOString(),home:home.team.displayName,away:away.team.displayName,homeScore:String(hs),awayScore:String(as),competition:String(event.competitionName||''),url});
 }
 return [...results.values()].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,10);
}
function renderHeadToHead(rows){
 const list=Array.isArray(rows)?rows:[];
 const body=list.length?`<p class="detail-note">المواجهات المكتملة التي يوفرها المصدر؛ قد لا تشمل كل التاريخ بين الفريقين.</p><div class="head-to-head-list">${list.map((row,index)=>`<article class="head-to-head-row">${index===0?'<span class="eyebrow">آخر مواجهة متاحة</span>':''}<p class="detail-note"><time datetime="${escapeText(row.date)}">${escapeText(new Intl.DateTimeFormat(uiLocale(),{timeZone:zone,day:'numeric',month:'short',year:'numeric'}).format(new Date(row.date)))}</time>${row.competition?' • '+escapeText(row.competition):''}</p><div class="head-to-head-teams"><span>${escapeText(arabicTeamName(row.home))}</span><b dir="ltr">${escapeText(row.homeScore)} : ${escapeText(row.awayScore)}</b><span>${escapeText(arabicTeamName(row.away))}</span></div><a class="secondary-link" href="${escapeText(row.url)}" target="_self" rel="noopener noreferrer">تفاصيل المواجهة على ESPN</a></article>`).join('')}</div>`:'<p class="detail-note">لا تتوفر مواجهات سابقة في البيانات المحمّلة لهذه المباراة.</p>';
 return `<section class="detail-section head-to-head"><h2>المواجهات السابقة</h2>${body}</section>`;
}

// Use a user-initiated link so the native activity can confirm and close.
document.querySelector("#exit-app").addEventListener("click",event=>{event.currentTarget.href="https://appassets.androidplatform.net/actions/exit?lang="+encodeURIComponent(uiLanguage)});
