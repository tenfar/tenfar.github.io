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
        meta: '生效日期：2026 年 8 月 24 日 · 版本 v1.0 · 開發者：Tenfar Lin',
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
        p_future: '現版本唯一的聯網相關代碼是家長可選的「AI 變式題」（需家長自行填入自己的 API 密鑰），首發版本已停用，因此現版本不存在任何網絡資料傳輸。若未來版本提供需要聯網的可選功能，我們會先更新本政策、明確告知資料去向，再隨版本發佈。',
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
        meta: 'Effective date: August 24, 2026 · Version v1.0 · Developer: Tenfar Lin',
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
        p_future: 'The only network-related code in the current version is the optional parent-controlled "AI variant questions" (which require a parent-supplied API key); it is disabled at launch, so this version transmits no data at all. If a future version offers optional online features, we will update this policy first — stating clearly where data goes — before releasing it.',
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
    if (/(hant|zh-tw|zh-hk|zh-mo)/.test(nav)) return 'zh-Hant';
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

  window.LU = { LANGS: LANGS, get lang() { return current; }, t: t, tGrp: tGrp, apply: apply, set: set };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
