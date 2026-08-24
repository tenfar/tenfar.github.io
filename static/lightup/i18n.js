/* LightUp public site i18n — shared engine + page dictionaries.
   Source language is zh-Hans (baked into each page's HTML); zh-Hant / en
   dictionaries override it at runtime. No external dependencies, no network
   requests — deliberately: the privacy page must stay third-party-free.
   Adding a language = add a LANGS entry + a dict below, nothing else. */
(function () {
  var LANGS = [
    { code: 'zh-Hans', label: '简体' },
    { code: 'zh-Hant', label: '繁體' },
    { code: 'en', label: 'EN' }
  ];
  var STORAGE_KEY = 'lightup-lang';

  var DICTS = {
    'zh-Hant': {
      privacy: {
        __title: '開燈 LightUp · 隱私政策',
        __desc: '開燈 LightUp 隱私政策：不收集任何用戶資料，所有資料僅保存在裝置本機。',
        h1: '開燈 LightUp 隱私政策',
        meta: '生效日期：2026 年 8 月 24 日 · 版本 v1.1 · 開發者：Tenfar Lin',
        lead: '<strong>「開燈 LightUp」不收集任何用戶資料。</strong>App Store 隱私標籤為「不收集資料」。本頁用平實的語言說明這款應用程式如何對待你和孩子的資料。',
        h_notdo: '我們不做的事',
        li1: '不收集任何個人資料——姓名、年齡、聯絡方式、裝置識別碼，一概不收集',
        li2: '不提供帳號體系——無需註冊、無需登入，因此不存在你的帳號資料',
        li3: '不接入任何廣告、追蹤、統計分析或社交類第三方元件',
        li4: '不使用廣告識別碼（IDFA），不做任何形式的用戶追蹤或畫像',
        li5: '不含應用程式內購買',
        li6: '現版本不向任何伺服器發起網絡請求',
        h_local: '資料只存在這台裝置上',
        p_local: '孩子的學習記錄、練習進度與家長設定等全部資料，僅保存在裝置本地（系統資料庫與系統偏好儲存）。本應用不具備任何雲端同步能力，也沒有任何伺服器在「另一端」留存資料。移除應用程式即徹底刪除全部資料。',
        h_mic: '麥克風與跟讀錄音',
        p_mic: '跟讀練習需要用麥克風錄製孩子的聲音。錄音<strong>只保存在這台裝置上</strong>，供家長重聽確認——不上載、不共享，也不用於任何自動分析。系統會在首次使用麥克風時彈出視窗徵求許可，你可以隨時在系統設定中關閉它。',
        h_child: '兒童私隱',
        p_child: '「開燈」面向 5–8 歲兒童及其家長設計。我們對所有年齡段的用戶一視同仁：不收集任何人的任何資料，兒童亦然。家長移除應用程式，即可刪除全部本地資料。',
        h_perm: '權限一覽',
        p_perm: '本應用僅申請「麥克風」一項權限，用途見上文；不申請通訊錄、照片、位置等任何其他權限。',
        h_future: '關於未來的聯網功能',
        p_f0: '現版本唯一的聯網相關功能是家長可選的「AI 變式題」，首發版本已停用，因此現版本不發起任何網絡請求。未來版本若啟用該功能，資料去向如下：',
        p_f1: '<strong>完全可選，預設不可見</strong>：僅當家長在「設定 → AI 變式題」中自行填入第三方 AI 服務的 API 密鑰後，功能入口才會出現；不設定，應用就與現在完全一樣，零聯網。',
        p_f2: '<strong>傳送什麼</strong>：僅為生成練習題所需的當次上下文——孩子所在年級與學期、本次練習盲點的名稱與難度、題型、以及本次已做過的題目原文（最多 20 條，用於避免重複出題）。不傳送姓名等任何身份資料；也不傳送錄音——跟讀錄音只保存在本機（見上文「麥克風與跟讀錄音」）。',
        p_f3: '<strong>傳送到哪裡</strong>：僅傳送至家長自行設定的服務端點（留空時為 OpenAI 或 Anthropic 的官方地址，也可填自建閘道或轉接服務）。API 密鑰僅作為請求標頭發往該端點，不寫入任何日誌；開發者既看不到密鑰，也看不到傳送的內容。',
        p_f4: '<strong>離開裝置之後</strong>：資料到達家長所選服務後的儲存與處理，由該服務商的私隱政策約束；本應用不再傳送其他任何內容。',
        p_f5: '本應用若在未來新增任何其他聯網功能，同樣會先更新本政策、明確告知資料去向，再隨版本發佈。',
        h_update: '政策更新',
        p_update: '若應用程式的資料處理方式發生變化，本頁面將同步更新，並標註新的生效日期。',
        h_contact: '聯絡我們',
        p_contact: '對私隱方面有任何疑問，請電郵聯絡：<a href="mailto:tenfar@gmail.com">tenfar@gmail.com</a>',
        footer: '© 2026 開燈 LightUp · <a href="./support.html">支援與常見問題</a>'
      },
      support: {
        __title: '開燈 LightUp · 支援與常見問題',
        __desc: '開燈 LightUp 支援頁：聯絡方式與常見問題。',
        h1: '開燈 LightUp · 支援與常見問題',
        meta: '更新日期：2026 年 8 月 24 日',
        lead: '遇到問題或有建議，請電郵聯絡 <a href="mailto:tenfar@gmail.com">tenfar@gmail.com</a>，我們會盡快回覆。',
        q1: '錄音會上載嗎？',
        a1: '不會。跟讀錄音只保存在裝置本機，供家長重聽確認，不上載、不共享。詳見<a href="./privacy.html">私隱政策</a>。',
        q2: '需要註冊帳號嗎？',
        a2: '不需要。「開燈」沒有帳號體系，打開即用。',
        q3: '資料會備份到雲端嗎？',
        a3: '不會。所有資料僅存在本機，應用不具備雲端同步能力；移除應用程式會刪除全部資料，請自行留意需要保留的內容。',
        q4: '有廣告或內購嗎？',
        a4: '沒有。應用不含廣告、追蹤與應用程式內購買。',
        q5: '怎麼安裝「開燈」？',
        a5: '現版本透過 Apple TestFlight 面向受邀測試者提供（香港區）。收到邀請後，按提示在 TestFlight 應用中安裝即可。',
        q6: '跟讀沒有聲音 / 無法錄音？',
        a6: '請依次檢查：系統「設定 → 開燈」中麥克風權限是否開啟；裝置的音量與靜音開關；重新啟動應用再試。仍然不行請電郵聯絡我們，並附上機型與系統版本。',
        footer: '© 2026 開燈 LightUp · <a href="./privacy.html">私隱政策</a>'
      },
      home: {
        __title: '開燈 LightUp · 孩子卡在哪裡，開燈照給你看',
        __desc: '開燈 LightUp：數學/語文/英語三學科微觀盲點診斷、每日 3 分鐘靶向練習、60 秒點亮挑戰、光點與勳章。數據全在本機，不收集任何資料。',
        eyebrow: '數學 · 語文 · 英語',
        h1: '孩子卡在哪裡，開燈照給你看',
        p: '微觀盲點診斷與每日 3 分鐘靶向練習。所有資料只存在這台裝置上。',
        f1t: '10 分鐘，找到具體盲點',
        f1p: '每學科約 10 分鐘的診斷，把「沒開竅」翻譯成一個個具體盲點：不是「數學不好」，而是「進位口算還沒穩」。',
        f2t: '每天 3 分鐘，只練不會的',
        f2p: '針對盲點自動出題，口算、拼音、拼讀都做成孩子能自己上手的卡片；答錯進錯題隊列，零扣分。',
        f3t: '60 秒點亮挑戰',
        f3p: '練穩的知識點解鎖 60 秒挑戰：60 格逐格點亮，不倒數、不排名，只和上次的自己比。',
        f4t: '光點與勳章，看得見的進步',
        f4p: '光點只增不減，勳章只記錄「你做到過」——沒有分數排名，點亮一盞燈就是進步。',
        /* card-internal UI text (LIG-283): same layout as zh-Hans, only the
           language differs; knowledge-node names are learning-content samples
           and convert wholesale (product variant map: 里程 keeps 里). */
        c1_sub: '數學',
        c1_meta: '已答 27 題 · 用時 9 分 32 秒',
        c1_h: '發現微觀盲點',
        c1_g1: '5以內加減',
        c1_g1lv: '盲點位於 L2',
        c1_g2: '進位口算',
        c1_g2lv: '盲點位於 L1',
        c1_g3: '認識圖形',
        c1_g3lv: '盲點 · 待確認',
        c1_cta: '去練習，先點亮第一個盲點',
        c3_lv: '🍃 中等檔',
        c3_s1: '已答對',
        c3_s2: '已答題',
        c3_s3: '正確率',
        c4_title: '小滿的點亮牆',
        c4_sub: '每照亮一個盲點，就點亮一盞燈',
        c4_rung: '<b>Lv.3 點點亮</b> · 光點 920',
        c4_next: '再得 120 光點升級',
        c4_prog: '點亮進度',
        c4_m1: '初點燈',
        c4_m2: '拼音點亮',
        c4_m3: '計算點亮',
        c4_m4: '錯題清零',
        c4_m5: '點亮里程',
        c4_m6: '識字點亮',
        c4_m7: '燈火通明',
        c4_m8: '長明燈',
        priv: '數據全在本機 · 不收集任何資料',
        privl: '隱私政策 ›',
        footer: '© 2026 開燈 LightUp · <a href="./privacy.html">隱私政策</a> · <a href="./support.html">支持與常見問題</a>'
      },
      landing: {
        __title: '開燈 LightUp · 全量 Mock UI（35 Screens）',
        live: '數學 · 語文 · 英語 · 60s挑戰 · 積分勳章',
        eyebrow: 'Complete UI Mock · 全量頁面',
        h1: '孩子卡在哪裡，<br><em>開燈</em>照給你看。',
        p: '全部 35 屏：三學科（數學/語文/英語）診斷與練習、60s 挑戰模式、成就積分 + 勳章雙激勵體系。左側按流程分組切換，右側為各屏規則說明。',
        footer: '© 2026 開燈 LightUp<span style="margin:0 12px;color:var(--matcha-l)">·</span><a href="./privacy.html" style="color:var(--matcha);text-decoration:none">私隱政策</a><span style="margin:0 12px;color:var(--matcha-l)">·</span><a href="./support.html" style="color:var(--matcha);text-decoration:none">支援與常見問題</a>',
        toast: '演示：此動作為彈層/即時反饋，無頁面跳轉',
        grps: {
          'A · 引导': 'A · 引導',
          'B · 首页与学科': 'B · 首頁與學科',
          'C · 诊断引擎': 'C · 診斷引擎',
          'D · 三学科练习': 'D · 三學科練習',
          'E · 60s 挑战': 'E · 60s 挑戰',
          'F · 激励体系': 'F · 激勵體系',
          'G · 练习收尾': 'G · 練習收尾',
          'H · V2.1 新增': 'H · V2.1 新增'
        }
      }
    },

    en: {
      privacy: {
        __title: 'LightUp · Privacy Policy',
        __desc: 'LightUp privacy policy: no user data is collected; everything stays on your device.',
        h1: 'LightUp (开灯) Privacy Policy',
        meta: 'Effective date: August 24, 2026 · Version v1.1 · Developer: Tenfar Lin',
        lead: '<strong>LightUp does not collect any user data.</strong> Our App Store privacy label is "Data Not Collected". This page explains in plain language how the app treats your child\'s data and yours.',
        h_notdo: 'What we never do',
        li1: 'We collect no personal information — no name, age, contact details, or device identifiers',
        li2: 'No accounts — nothing to sign up or log in to, so no account data exists',
        li3: 'No ads, tracking, analytics, or social third-party components',
        li4: 'No advertising identifier (IDFA), no user tracking or profiling of any kind',
        li5: 'No in-app purchases',
        li6: 'The current version makes no network requests to any server',
        h_local: 'Your data stays on this device',
        p_local: 'Learning records, practice progress, and parent settings are stored only on the device (system database and system preferences). The app has no cloud-sync capability, and no server keeps data "on the other end". Deleting the app removes all of its data for good.',
        h_mic: 'Microphone & read-aloud recordings',
        p_mic: 'Read-aloud practice uses the microphone to record your child\'s voice. Recordings <strong>stay on this device only</strong> for parents to replay and review — never uploaded, never shared, never analyzed automatically. iOS asks for permission the first time the microphone is used, and you can revoke it anytime in system Settings.',
        h_child: 'Children\'s privacy',
        p_child: 'LightUp is designed for children aged 5–8 and their parents. We treat every user the same at every age: no data is collected from anyone, children included. A parent deleting the app deletes all local data.',
        h_perm: 'Permissions at a glance',
        p_perm: 'The app requests exactly one permission — the microphone, used as described above. It never asks for contacts, photos, location, or anything else.',
        h_future: 'About future online features',
        p_f0: 'The only network-related feature in the current version is the optional, parent-controlled "AI variant questions"; it is disabled at launch, so this version makes no network requests at all. If a future version enables it, here is exactly where the data will go:',
        p_f1: '<strong>Fully optional, invisible by default</strong>: the feature only appears after a parent enters their own API key for a third-party AI service under "Settings → AI Variant Questions". Without it, the app behaves exactly as it does today — zero networking.',
        p_f2: '<strong>What is sent</strong>: only the context needed to generate practice questions — the child\'s grade and term, the name and difficulty of the knowledge point being practiced, the question format, and the text of questions already answered this session (up to 20, to avoid repeats). No name or other identity information is sent, and recordings are never sent — read-aloud recordings stay on this device (see "Microphone & read-aloud recordings" above).',
        p_f3: '<strong>Where it goes</strong>: only to the endpoint the parent configures (the official OpenAI or Anthropic address when left blank; a self-hosted gateway or relay also works). The API key is sent only as a request header to that endpoint and is never written to any log; the developer can see neither the key nor the content sent.',
        p_f4: '<strong>After it leaves the device</strong>: storage and processing at the chosen service are governed by that provider\'s privacy policy; the app sends nothing else.',
        p_f5: 'If any other online feature is added in the future, this policy will likewise be updated — stating clearly where the data goes — before that version ships.',
        h_update: 'Policy updates',
        p_update: 'If the app\'s data practices ever change, this page will be updated with a new effective date.',
        h_contact: 'Contact us',
        p_contact: 'For any privacy questions, email <a href="mailto:tenfar@gmail.com">tenfar@gmail.com</a>',
        footer: '© 2026 LightUp (开灯) · <a href="./support.html">Support & FAQ</a>'
      },
      support: {
        __title: 'LightUp · Support & FAQ',
        __desc: 'LightUp support page: how to contact us and frequently asked questions.',
        h1: 'LightUp · Support & FAQ',
        meta: 'Updated: August 24, 2026',
        lead: 'Questions or feedback? Email <a href="mailto:tenfar@gmail.com">tenfar@gmail.com</a> and we will get back to you as soon as we can.',
        q1: 'Are recordings uploaded?',
        a1: 'No. Read-aloud recordings stay on the device for parents to replay and review — never uploaded or shared. See the <a href="./privacy.html">Privacy Policy</a>.',
        q2: 'Do I need an account?',
        a2: 'No. LightUp has no accounts — just open and use it.',
        q3: 'Is data backed up to the cloud?',
        a3: 'No. All data stays on the device; the app has no cloud sync. Deleting the app deletes everything, so keep anything you want to preserve.',
        q4: 'Any ads or in-app purchases?',
        a4: 'None. The app contains no ads, tracking, or in-app purchases.',
        q5: 'How do I install LightUp?',
        a5: 'The current version is available to invited testers via Apple TestFlight (Hong Kong region). Once invited, follow the instructions to install it from the TestFlight app.',
        q6: 'No sound on read-aloud / recording not working?',
        a6: 'Check in order: microphone permission under system Settings → LightUp; device volume and the mute switch; then restart the app. If it still fails, email us with your device model and OS version.',
        footer: '© 2026 LightUp (开灯) · <a href="./privacy.html">Privacy Policy</a>'
      },
      home: {
        __title: 'LightUp · Where your child gets stuck, LightUp shows you',
        __desc: 'LightUp: micro-level blind spot diagnosis across Math / Chinese / English, a 3-minute targeted practice each day, a 60-second Light-Up Challenge, points and medals. All data stays on the device — nothing collected.',
        eyebrow: 'Math · Chinese · English',
        h1: 'Where your child gets stuck,<br>LightUp shows you.',
        p: 'Micro-level gap diagnosis and a 3-minute targeted practice every day. All data stays on this device.',
        f1t: 'Find the exact blind spots in 10 minutes',
        f1p: 'A roughly 10-minute per-subject diagnosis translates “just not getting it” into concrete blind spots: not “bad at math,” but “carrying in addition isn\u2019t solid yet.”',
        f2t: '3 minutes a day, only what\u2019s missing',
        f2p: 'Questions are generated for the blind spots — mental math, pinyin, phonics — as cards kids can work on their own. Wrong answers go to a review queue; nothing is ever deducted.',
        f3t: 'The 60-second Light-Up Challenge',
        f3p: 'Solid knowledge unlocks a 60-second challenge: 60 cells light up one by one. No countdown, no rankings — only against your last self.',
        f4t: 'Points and medals, progress you can see',
        f4p: 'Points only go up; medals only record “you did it.” No scores, no rankings — every lamp lit is visible progress.',
        /* card-internal UI text (LIG-283): translations verbatim from the app's
           Localizable.xcstrings where they exist (盲点→blind spot(s) per official
           entries); knowledge-node names are learning-content samples and stay
           Chinese, matching app behavior. */
        c1_sub: 'Math',
        c1_meta: '27 answered · 9 min 32 s',
        c1_h: 'Blind spots found',
        c1_g1: '5以内加减',
        c1_g1lv: 'Gap at L2',
        c1_g2: '进位口算',
        c1_g2lv: 'Gap at L1',
        c1_g3: '认识图形',
        c1_g3lv: 'Gap · to confirm',
        c1_cta: 'Practice — light up the first blind spot',
        c3_lv: '🍃 Medium',
        c3_s1: 'Correct',
        c3_s2: 'Answered',
        c3_s3: 'Accuracy',
        c4_title: "小满's Lit Wall",
        c4_sub: 'Every blind spot you light up lights a lamp',
        c4_rung: '<b>Lv.3 Sparks</b> · 920 points',
        c4_next: '120 points to level up',
        c4_prog: 'Lighting progress',
        c4_m1: 'First Light',
        c4_m2: 'Pinyin Lit',
        c4_m3: 'Calc Lit',
        c4_m4: 'Zero Wrong',
        c4_m5: 'Lit Miles',
        c4_m6: 'Word Lit',
        c4_m7: 'All Aglow',
        c4_m8: 'Eternal Lamp',
        priv: 'All data on-device · Nothing collected',
        privl: 'Privacy Policy ›',
        footer: '© 2026 LightUp (开灯) · <a href="./privacy.html">Privacy Policy</a> · <a href="./support.html">Support & FAQ</a>'
      },
      landing: {
        __title: 'LightUp · Complete UI Mock (35 Screens)',
        live: 'Math · Chinese · English · 60s Rush · Points & Medals',
        eyebrow: 'Complete UI Mock · All Screens',
        h1: 'Where your child gets stuck,<br><em>LightUp</em> shows you.',
        p: 'All 35 screens: three-subject (Math / Chinese / English) diagnosis and practice, a 60-second challenge mode, and a dual-incentive system of achievement points plus medals. The left rail groups screens by flow; the right panel explains each screen\'s rules.',
        footer: '© 2026 LightUp (开灯)<span style="margin:0 12px;color:var(--matcha-l)">·</span><a href="./privacy.html" style="color:var(--matcha);text-decoration:none">Privacy Policy</a><span style="margin:0 12px;color:var(--matcha-l)">·</span><a href="./support.html" style="color:var(--matcha);text-decoration:none">Support & FAQ</a>',
        toast: 'Demo: this action shows an overlay / instant feedback, no page navigation',
        grps: {
          'A · 引导': 'A · Onboarding',
          'B · 首页与学科': 'B · Home & Subjects',
          'C · 诊断引擎': 'C · Diagnosis Engine',
          'D · 三学科练习': 'D · Practice (3 Subjects)',
          'E · 60s 挑战': 'E · 60s Rush',
          'F · 激励体系': 'F · Incentives',
          'G · 练习收尾': 'G · Wrapping Up',
          'H · V2.1 新增': 'H · New in V2.1'
        }
      }
    }
  };

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && DICTS[saved]) return saved;
    var nav = '';
    if (typeof navigator !== 'undefined') {
      nav = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
    }
    if (nav.indexOf('en') === 0) return 'en';
    /* Chinese locales (incl. zh-HK/TW/MO) default to Simplified — the product's
       primary language; Traditional readers read Simplified passively and the
       switcher is one tap away. Only non-Chinese visitors get auto-English.
       (Live-site behavior since LIG-280; synced here so deploys don't roll it back.) */
    return 'zh-Hans';
  }

  var current = detect();

  function page() {
    return (document.body && document.body.dataset.page) || 'landing';
  }
  function dict() {
    return (DICTS[current] && DICTS[current][page()]) || {};
  }
  /* t(key): translated string for this page, or undefined → caller keeps source HTML */
  function t(key) {
    var d = dict();
    return Object.prototype.hasOwnProperty.call(d, key) ? d[key] : undefined;
  }
  /* tGrp(src): landing nav group label */
  function tGrp(src) {
    var d = dict();
    return (d.grps && d.grps[src]) || src;
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll('[data-i]').forEach(function (el) {
      var v = t(el.getAttribute('data-i'));
      if (v !== undefined) el.innerHTML = v;
    });
    var title = t('__title');
    if (title) document.title = title;
    var desc = t('__desc');
    var md = document.querySelector('meta[name="description"]');
    if (desc && md) md.setAttribute('content', desc);
    document.querySelectorAll('.langs button[data-lang]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === current);
    });
    window.dispatchEvent(new CustomEvent('lu-lang', { detail: { lang: current } }));
  }

  function set(lang) {
    if (!DICTS[lang]) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.langs button[data-lang]');
    if (b) set(b.getAttribute('data-lang'));
  });

  window.LU = { LANGS: LANGS, get lang() { return current; }, t: t, tGrp: tGrp, apply: apply, set: set, DICTS: DICTS };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
