/* Landing per-screen dictionaries (zh-Hant / en) — loaded only by index.html.
   Mirrors the SCREENS array in index.html: per screen id, name/title/desc
   override the source; specs and chips override as arrays index-aligned with
   the source. A missing id or field falls back to the zh-Hans source, so
   partial updates never blank out a screen. */
window.LU_SCREENS = {
  'zh-Hant': {
    o1: {
      name: 'Splash 啟動頁', title: 'Splash · 呼吸燈',
      desc: '啟動第一印象：呼吸燈動畫——燈泡由暗到亮緩慢起伏（2.8s 週期），光環雙層錯相位擴散，隱喻「點亮知識」。無文字轟炸，一個「開啟」按鈕。',
      specs: [{ t: '呼吸燈動畫', d: '純 CSS 實現：雙層 halo 徑向漸變錯相位縮放 + 燈泡 drop-shadow 輝光，暗→亮循環呼應品牌主張。' }],
      chips: ['品牌動畫', '呼吸燈', '零文案']
    },
    o2: {
      name: '引導·診斷', title: '引導 1/4 · 10分鐘診斷',
      desc: '引導頁 1/4：上半部分賣點（放大鏡對準知識樹紅點的大圖 + 一句話價值），下半部分順勢完成首診學科選擇。',
      specs: [
        { t: '講一個功能', d: '每頁只講一個功能點：大圖佔視覺中心，文案不超過兩行。' },
        { t: '順勢設定', d: '介紹診斷就順手選首診學科——設定在學習賣點時自然完成，不是填表。' }
      ],
      chips: ['單功能點', '大圖', '首診學科', '可跳過']
    },
    o3: {
      name: '引導·每日練習', title: '引導 2/4 · 每天 3 分鐘',
      desc: '引導頁 2/4：賣點（靶心 + 3 分鐘環形進度）+ 順勢設定每日練習提醒時間。',
      specs: [{ t: '提醒時間', d: '三個生活化時段一鍵選，本地通知不需要帳號和網絡權限。' }],
      chips: ['單功能點', '提醒時間', '本地通知']
    },
    o4: {
      name: '引導·60s挑戰', title: '引導 3/4 · 60 秒挑戰',
      desc: '引導頁 3/4：賣點（60s 圓環 + 閃電）+ 順勢設定預設挑戰難度（三檔圖示化）。',
      specs: [{ t: '預設難度', d: '與 4.7.3 三檔一致；強調「每次開局還能換」降低選擇壓力。' }],
      chips: ['單功能點', '預設難度', '三檔']
    },
    o5: {
      name: '引導·激勵與建檔', title: '引導 4/4 · 點亮成長',
      desc: '引導頁 4/4：賣點（金質勳章 + 光點等級條）+ 最後一步建檔（暱稱/年級/積分顯示開關），點「開始第一次診斷」進入主流程。',
      specs: [
        { t: '建檔收尾', d: '必要資訊壓到最後一頁：暱稱+年級+一個激勵開關，30 秒內完成。' },
        { t: '閉環', d: '5 頁看完 4 個賣點，設定也做完了——Landing 與 Onboarding 合一。' }
      ],
      chips: ['單功能點', '建檔', '積分開關', '進入主流程']
    },
    s2: {
      name: '首頁 Dashboard', title: '首頁 · 今日概覽',
      desc: '家長核心入口，卡點跨學科聚合（數學/語文/英語各自著色徽標）。頂部積分膠囊實時顯示「光點」餘額，60s 挑戰作為第三個快捷入口。',
      specs: [
        { t: '多孩切換', d: '頭像條支援多孩家庭，每個孩子獨立的檔案、知識樹、積分與勳章。' },
        { t: '跨學科聚合', d: '練習單、卡點清單、動態流均跨學科合併，家長無需切換 App 或模式。' },
        { t: '無卡點空態', d: '全部歸檔時不硬出題，顯示「建議 N 天後複查」。' }
      ],
      chips: ['跨學科', '多孩', '光點積分', '60s 入口']
    },
    s3: {
      name: '學科選擇', title: '學科與範圍選擇',
      desc: '診斷入口：學科卡展示各包概況與現存卡點數；範圍按課標-年級自動推薦，超綱內容硬鎖定不可選。',
      specs: [
        { t: '課標鎖', d: '範圍只能收縮不能擴張——「100以內」對一上學生鎖定，超綱校驗來自節點的 standardRef 欄位。' },
        { t: '學科卡', d: '每卡顯示包內知識點規模與現存卡點，診斷優先級一目瞭然。' }
      ],
      chips: ['學科包', '課標鎖', '範圍推薦', '10分鐘']
    },
    s4: {
      name: '診斷進行中', title: '診斷引擎 · 操作面板',
      desc: '家長持機導航：大字題面 + 三鍵判定 + 讀題計時。倒計時與動態島同步，麵包屑暴露知識樹位置。',
      specs: [
        { t: '計時口徑', d: '「📢 讀完了 <svg class="ic"><use href="#i-play"/></svg>」才起計——家長讀題時間不污染孩子反應時間。' },
        { t: '三鍵語義', d: '<svg class="ic"><use href="#i-bolt"/></svg> 秒答（BKT 正向）/ <svg class="ic"><use href="#i-check"/></svg> 答對但慢（0.7 權重）/ <svg class="ic"><use href="#i-cross"/></svg> 答錯（觸發鑽取）。' },
        { t: '強制斷電', d: '10 分鐘歸零立即停止，斷電≠失敗，已發現卡點正常入報告。' }
      ],
      chips: ['倒計時', '讀題計時', '三鍵判定', '斷電保護']
    },
    s5: {
      name: '鑽取引導', title: '向下鑽取 Drill-down',
      desc: '答錯不給答案，給家長話術：照唸即可把粗粒度失敗拆成原子卡點，下方可視化決策樹實時展示鑽取全貌——當前節點琥珀高亮，對/錯分支各通向下一問或卡點結論。',
      specs: [
        { t: '話術即內容資產', d: '引導語來自 SubjectPack 的 drillTree，教研編寫、隨包熱更新；決策樹由 drillTree 數據直接渲染。' },
        { t: '終止與回歸', d: '到葉節點或連對 2 子問即停，回 probing 探測其他分支，一次診斷可出多卡點。' },
        { t: '交叉確認', d: '換等價題再問一次排除偶然失誤（Q1b 分支），確認通過降級「關注」。' }
      ],
      chips: ['drillTree', '家長話術', '可視化決策樹', '交叉確認']
    },
    s6: {
      name: '診斷報告', title: '診斷報告 Report',
      desc: '10 分鐘的產出物：卡點清單 + 知識樹快照 + 下一步建議，一鍵轉化為當日練習。',
      specs: [
        { t: '樹快照', d: '唯讀快照聚焦當前卡點上下三代：父節點／當前層（含兄弟節點）／子卡點，三代之外收起，完整互動圖譜見第 7 屏。' },
        { t: '行動閉環', d: '報告底部直達「今天先練拆數」，診斷立即轉化為練習。' }
      ],
      chips: ['卡點清單', '樹快照', '下一步', '長圖/PDF']
    },
    s7: {
      name: '知識圖譜', title: '原子知識圖譜 Graph View',
      desc: '完整互動圖譜：左→右可摺疊樹承載全部知識節點，子樹可 −/＋n 收起展開，支援拖動平移與雙檔縮放；點擊任意節點即紅色高亮其完整前置依賴鏈——「這題不會，原來是三層之前的地基鬆了」。',
      specs: [
        { t: '左→右可摺疊樹', d: '深層 DAG 縱向太擠，改為橫向層級樹：根在左、葉在右，未複習分支預設摺疊為 ＋n 徽標，一屏看全主幹。' },
        { t: '導航三件套', d: '拖動平移 + ＋/−/⤢ 縮放按鈕 + 點擊節點高亮祖先鏈；摺疊狀態與選中節點互不干擾。' },
        { t: '與清單同源', d: '圖譜與 List View 共享同一數據，只是兩種視圖，狀態實時一致；語文英語各有自己的圖譜。' }
      ],
      chips: ['左→右樹', '摺疊展開', '拖動平移', '縮放', '依賴鏈高亮']
    },
    s8: {
      name: '卡點清單', title: '卡點清單 List View',
      desc: '跨學科卡點總帳：學科徽標區分來源，按狀態排序（紅>橙>黃），單卡顯示 P(L) 折算進度。',
      specs: [
        { t: '進度條語義', d: '三段格 = 3 個秒答日，BKT P(L)≥0.85 的 UI 折算。' },
        { t: '頑固卡點', d: '≥7 天未出艙或二次激活 ≥3 次 → 推送教學策略，可回退前置或暫停。' }
      ],
      chips: ['跨學科', 'x/3 進度', 'P(L)', '頑固升級']
    },
    s9: {
      name: '數學練習（口報）', title: '數學 · 家長口報模式',
      desc: '每日 3~5 題，100% 對準激活卡點。家長口述、孩子口答，話術降級保暢通。',
      specs: [
        { t: '加權出題', d: 'w = (1−P(L))×遺忘衰減；7 天去重；同節點相鄰兩次強制換題型。' },
        { t: '超時不判負', d: '30 秒無判定彈「再等等 / 標記不會」。' },
        { t: '積分聯動', d: '每次秒答 +10<svg class="ic"><use href="#i-bulb"/></svg>，即時在麵包屑預告收益（見積分系統）。' }
      ],
      chips: ['3分鐘', 'BKT 加權', '話術降級', '+10<svg class="ic"><use href="#i-bulb"/></svg>']
    },
    s10: {
      name: '兒童卡片模式', title: '練習 · 兒童卡片模式',
      desc: '孩子自己操作的暖黃護眼主題：超大數字鍵盤、無計時器、無「錯」字。答對 → 星星彈入；答錯 → 「再試試看～」，可重試一次。',
      specs: [
        { t: '零壓力', d: '無分數、無倒計時顯示、無對錯計分板，進度用星星不用數字。' },
        { t: '輸入回顯', d: '題目卡底部大號「？」佔位，孩子敲鍵盤即實時顯示輸入數字，與算式合成完整等式。' },
        { t: '判定回流', d: '卡片模式同樣上報秒答/猶豫/答錯三級觀測給 BKT——只是孩子看不見計時。' },
        { t: '適齡', d: '適合能認鍵盤的較大孩子；低幼仍推薦家長口報。' },
        { t: '兒童鎖', d: '退出需長按 1.5 秒（圓環進度提示），防止孩子誤觸返回家長界面。' }
      ],
      chips: ['暖黃護眼', '大鍵盤', '星星進度', 'BKT 回流']
    },
    s11: {
      name: '語文練習（拼音）', title: '語文 · 拼音識字練習',
      desc: '語文包沿用同一引擎：拼音節點 = 聲母/韻母/整體認讀 + 易混對（b-d、p-q）；識字節點 = 常用字 300/600/1000 分級 + 形近字；寫字節點 = 筆順筆畫 + 田字格描紅（真實字形數據）。',
      specs: [
        { t: '易混對設計', d: '形近聲母成對呈現對比卡，鑽取樹沿「聽音 → 認形 → 書寫空筆」下探。' },
        { t: '識字卡', d: '識字節點配象形提示與常用詞例（如「木/林/森」字族），同樣參數化輪換。' },
        { t: '秒答閾值', d: '認讀類閾值 3s，拼讀組詞類 8s——分題型閾值規則跨學科生效。' }
      ],
      chips: ['拼音', '易混對', '識字 1000', '田字格', '分題型閾值']
    },
    s12: {
      name: '英語練習（拼讀）', title: '英語 · 自然拼讀（含音頻）',
      desc: '英語的特殊性：卡點在發音與聽力，家長發音未必標準——所有音頻由 App 標準音庫（TTS/真人錄音）播放，家長只做裁判不做示範。',
      specs: [
        { t: '互動模式例外', d: '這是英語包與數/語的本質差異：聲音載體從「家長口述」換成「標準音頻」，診斷引擎不變，QuestionPlayer 多一種音頻題型。' },
        { t: '拼讀路徑', d: '音素意識 → 字母音 → CVC 拼讀 → 聽音辨詞；鑽取沿「聽不出 → 分不清 → 讀不準」下探。' },
        { t: '發音評估不做', d: '孩子口語輸出仍由家長按鍵判定，不做 AI 發音打分（準確率不足以支撐低幼場景）。' }
      ],
      chips: ['標準音頻', '聽音辨音', 'CVC', '家長裁判']
    },
    s13: {
      name: '60s 挑戰入口', title: '60s 挑戰 · 入口與規則',
      desc: '面向孩子的限時快答模式：題源為完整題庫，孩子自選簡單/中等/難三檔，60 秒沿「熱身→爬升→衝頂」難度曲線衝頂；答錯不懲罰，題目收進錯題鞏固佇列第二天接著練——玩也是診斷。',
      specs: [
        { t: '全題庫 + 三檔', d: '不再限於已點亮節點；檔位決定難度曲線主峰區間，積分按難度係數 ×1/×1.5/×2 加權，敢選難的賺得多。' },
        { t: '難度曲線', d: '開局 2 題熱身（−1檔）建立心流，中段爬升，最後 15 秒衝頂（+1）；答錯回落半檔、連對 3 題升半檔，規則對孩子透明。' },
        { t: '三不原則', d: '不扣分、不排名、不限時懲罰：答錯只是打斷連擊並進錯題鞏固，成績永遠只與「昨天的自己」比。' }
      ],
      chips: ['完整題庫', '三檔難度', '難度曲線', '零懲罰', '每日2次']
    },
    s14: {
      name: '60s 挑戰進行', title: '60s 挑戰 · 進行中',
      desc: '孩子視角的挑戰界面：大圓環倒計時、連擊徽章、實時光點計數。數字鍵盤與兒童卡片模式一致，熟悉的操作零學習成本。',
      specs: [
        { t: '倒計時環', d: '60 秒環形進度，最後 10 秒變紅+輕觸感，但不播放催促音效（低壓）。' },
        { t: '連擊反饋', d: '3 連對點燃連擊徽章，之後每題 +2<svg class="ic"><use href="#i-bulb"/></svg>；答錯徽章熄滅但不清分數。' },
        { t: '數據回流', d: '挑戰作答寫入 PracticeEvent（source=challenge），答錯/猶豫為 BKT 負證據，秒答為正證據；答錯題同步進錯題鞏固佇列。' }
      ],
      chips: ['圓環計時', '連擊徽章', '難度檔指示', '實時積分', '數據回流']
    },
    s15: {
      name: '60s 挑戰結果', title: '60s 挑戰 · 結算',
      desc: '結算頁 = 激勵三合一 + 錯題回收：成績構成透明（含難度係數）、新紀錄對比昨天的自己、勳章即時彈出，答錯/超時題明確告知「明天優先練」。',
      specs: [
        { t: '成績透明', d: '積分構成逐項列出（含難度係數行），規則可預期是激勵系統可信的前提。' },
        { t: '勳章聯動', d: '挑戰專屬勳章（閃電手/百題斬/七連擊）在此發放，入勳章牆。' },
        { t: '錯題鞏固鉤子', d: '答錯/超時題列入回收清單：次日 3 分鐘練習優先插入、連對 2 次出庫、清單頁帶「來自挑戰」標籤；答錯節點 P(L) 同步下調。' }
      ],
      chips: ['新紀錄', '成績構成', '錯題鞏固', '勳章彈卡']
    },
    s16: {
      name: '出艙慶祝', title: '消卡出艙 Clearance',
      desc: '三條件齊備（P(L)≥0.85 + ≥2 秒答日 + 第 7 天抽檢）才出艙。出艙 = 三重激勵同時發放：節點點亮 + 100 光點 + 里程碑勳章檢查。',
      specs: [
        { t: 'BKT 防猜對', d: '顯式猜對參數 P(G)：填空 0.20、選擇 0.25~0.33；猜對一次 P(L) 僅至 ~0.4。' },
        { t: '激勵疊加', d: '積分給「每次努力」，勳章給「里程碑」，出艙動畫給「儀式感」——三層激勵頻率互補。' },
        { t: '出艙≠遺忘', d: '歸檔入月度抽檢池；鞏固題連錯 2 次 → 二次激活，P(L) 降回 0.5。' }
      ],
      chips: ['三條件出艙', '+100<svg class="ic"><use href="#i-bulb"/></svg>', '勳章彈卡', 'confetti']
    },
    s17: {
      name: '勳章牆', title: '點亮勳章牆',
      desc: '收集體系：金/銀/銅燈座分級 + 學科專屬勳章（拼音先鋒/計算小將/ABC 達人），未解鎖顯示進度（8/10）而非空白。',
      specs: [
        { t: '三學科勳章', d: '點亮進度分母變為三科合計 90 個節點；學科專屬勳章引導均衡點亮。' },
        { t: '零壓力', d: '無分數無排名無斷裂懲罰；「穩如磐石」呼應消卡復發率 KPI。' }
      ],
      chips: ['收集體系', '學科勳章', '進度可見', '零排名']
    },
    s18: {
      name: '成就積分', title: '光點積分系統（新增）',
      desc: '積分系統「光點」：與勳章互補——勳章獎勵稀缺的里程碑，光點獎勵每一次日常努力。燈語等級（螢火蟲→小太陽）給長期目標。',
      specs: [
        { t: '第一原則：只增不減', d: '光點永不扣減、永不過期、無商城無消耗——它是「成就度量」，不是「貨幣」。答錯扣分會瞬間毀掉低壓原則。' },
        { t: '與勳章分工', d: '光點 = 高頻小額（每題）；勳章 = 低頻大額（里程碑）；等級 = 超長期（月為單位）。三層頻率互補，全程無懲罰。' },
        { t: '防刷設計', d: '60s 挑戰每日限 2 次；練習積分只在靶向練習內發放；診斷積分每次診斷僅一次——積分曲線與真實學習行為強綁定。' },
        { t: '家長可關', d: '設定裡可對孩子隱藏積分數（保留等級燈語），適配不想引入任何數字激勵的家庭。' }
      ],
      chips: ['只增不減', '燈語等級', '防刷', '可隱藏']
    },
    s19: {
      name: '積分明細', title: '光點明細 · 流水',
      desc: '積分流水頁：每一筆收入對應真實學習行為（時間/節點/模型數據），孩子看得懂「光點從哪來」，家長可審計激勵是否失真。',
      specs: [
        { t: '可審計', d: '流水同時是家長的學習日誌——比單獨的「學習報告」更輕量，孩子自己也會翻。' },
        { t: '無支出頁', d: '因為只增不減，所以沒有「消費記錄」，流水永遠只有進賬。' }
      ],
      chips: ['流水可審計', '只進不出', '學習日誌']
    },
    s20: {
      name: '練習完成', title: '練習完成 · 今日總結',
      desc: '3 分鐘結束頁：各卡點進展一目瞭然（含 BKT 狀態的 UI 折算）、今日光點收穫、距離出艙的預期管理。',
      specs: [
        { t: '預期管理', d: '「還差 1 個秒答日」讓家長和孩子對出艙有確定預期——確定性本身就是激勵。' },
        { t: '斷簽寬容提醒', d: '若昨天未練，此處溫和提示「進度保留著，隨時繼續」，絕不顯示 streak 斷裂。' }
      ],
      chips: ['進展折算', '光點收穫', '預期管理']
    },
    s21: {
      name: '歷史歸檔', title: '歷史歸檔 · 已點亮記錄',
      desc: '已消卡的全史：發現→出艙週期、抽檢記錄、二次激活標記。底部彙總平均消卡週期與 30 天復發率——這正是 BKT 模型的驗收 KPI。',
      specs: [
        { t: '復發可見', d: '二次激活節點明確標記（⚠️ 複練中），不粉飾——復發率是模型健康度，不是孩子的失敗。' },
        { t: '導出', d: '此頁可導出 PDF，發給老師就是一份精準的學習診斷史。' }
      ],
      chips: ['消卡全史', '週期統計', '復發率', 'PDF']
    },
    s22: {
      name: '設定', title: '設定',
      desc: '全部可調參數集中一處：分題型秒答閾值、挑戰限次、積分顯示開關、iCloud 同步、資料匯出。',
      specs: [
        { t: '分題型閾值', d: '口算 3s / 應用題 8s 分設——一個閾值走天下是上一版踩過的坑。' },
        { t: '積分開關', d: '「對孩子顯示積分數」可關：保留燈語等級、隱藏數字，尊重不同家庭的激勵觀。' }
      ],
      chips: ['分題型閾值', '挑戰限次', '積分開關', 'iCloud']
    },
    s26: {
      name: '田字格寫字', title: '寫字 · 田字格描紅',
      desc: '基於 HanziWriter Swift 版：真實字形輪廓（Make Me a Hanzi 數據）+ 中線引導逐筆動畫；「我來寫」進入書寫測驗——起點亮點提示，起點/終點/軌跡貼合實時判定，錯筆紅閃重寫。',
      specs: [
        { t: '真實字形數據', d: '內置常用 1000 字全量 hanzi-writer 數據（輪廓 SVG + 筆順中線 2.3MB），描紅覆蓋每一個高頻字。' },
        { t: '逐筆動畫', d: 'median 加粗描邊作遮罩逐段揭示真實字形，與 hanzi-writer 官方同算法；帶筆序數字。' },
        { t: '書寫判定', d: '起點近 + 終點近 + 60% 軌跡貼合中線判通過；錯 ≤1 筆計「寫好了」，照常回流 BKT/秒答/積分。' }
      ],
      chips: ['田字格', '筆順動畫', '書寫測驗', '1000字', 'BKT 回流']
    },
    s27: {
      name: '子女檔案管理', title: '子女檔案 · 多孩切換',
      desc: '多孩家庭：最多 5 個檔案，profileID 作用域隔離全部兒童數據；首頁頭像條一鍵切換，重啟記住上次使用的娃。',
      specs: [
        { t: '上限 5 個', d: 'PRD 約束：多孩支援上限 5，超出按鈕置灰。' },
        { t: '級聯刪除', d: '刪除檔案同時清理該子女進度/積分/勳章/錯題/挑戰記錄，彈窗二次確認。' }
      ],
      chips: ['多孩', '上限5', '數據隔離', '級聯刪除']
    },
    s28: {
      name: '頭像設定', title: '頭像設定',
      desc: '頭像 = 調色盤底色 + 自然系圖示徽標（無 emoji，與生產一致）；首頁點頭像或設定頁進入，改暱稱同頁完成。',
      specs: [{ t: '生產標準', d: '圓形色底 + SF Symbol 風格線稿圖示，與 App 內 AvatarBadge 組件 1:1 對應。' }],
      chips: ['頭像', '調色盤', '圖示徽標']
    },
    s29: {
      name: '新建檔案', title: '新建子女檔案',
      desc: '暱稱 / 年級 / 頭像 / 學科一步建完，建立即切換為新檔案；首次啟動無檔案時強制先建檔，再進引導。',
      specs: [{ t: '首啟流程', d: '無檔案 → 強制建檔 → 引導頁 → 首頁；有檔案 → 直接進入上次使用的子女。' }],
      chips: ['建檔', '學科選擇', '頭像']
    },
    s30: {
      name: '資料匯出', title: '資料匯出',
      desc: 'PRD 4.5.3 三種格式落地：PDF 報告（老師/機構）、JSON 備份（遷移）、CSV 日誌（家長分析），系統 ShareLink 分享。',
      specs: [{ t: '脫敏按娃', d: '多孩家庭匯出只含當前子女，絕不串檔。' }],
      chips: ['PDF', 'JSON', 'CSV', '分享']
    },
    s31: {
      name: 'AI 變式題', title: 'AI 變式題（可選）',
      desc: 'PRD 4.3.5 可選增強：解決題庫不足時的變式題；設定留在本機，失敗降級是純本地產品的底線。',
      specs: [{ t: '可選非必需', d: '不設定也能完整使用——這是產品原則，不是技術限制。' }],
      chips: ['LLM', '可選', '本地降級']
    },
    s32: {
      name: '學科內容包', title: '學科內容包 · 熱更新',
      desc: 'SubjectPack 與 App 版本解耦：新學科/擴字表/修話術都可熱更新下發，節點 ID 永不重用保證歷史數據不懸空。',
      specs: [{ t: '識字 v1.1.0', d: '本次更新：常用字 300/600/1000 分級 + 1000 字田字格真實字形描紅。' }],
      chips: ['內容包', '熱更新', 'Schema 校驗', '原子替換']
    },
    s33: {
      name: '教學建議', title: '教學建議 · 卡點教練卡',
      desc: '每個卡點的家長教練卡：成因診斷 → 實物/圖示/符號三步教學路徑 → 可直接照說的話術 → 頑固卡點策略（回退前置/降難度/暫停）。話術與鑽取樹同源，教學路徑來自教研拆解資產。',
      specs: [
        { t: '三層內容同源', d: '成因=診斷鑽取結論；話術=drillTree 家長腳本；策略=Scheduler 頑固卡點規則（≥7 天未出艙或二次激活 ≥3 次觸發）。' },
        { t: '可照做', d: '每一步給工具（小棒/十格框）、給天數預期、給退出條件——家長零教研背景也能執行。' },
        { t: '語音示範', d: 'TTS 連讀家長話術約 15 秒，給語氣與節奏參考，家長不必自己揣摩怎麼開口。' },
        { t: '不替代練習', d: '教學建議是「怎麼教」，練習頁是「天天練」；頁尾一鍵回到練習，閉環不割裂。' }
      ],
      chips: ['成因診斷', '三步教學法', '家長話術', '頑固卡點', '回退前置']
    },
    s34: {
      name: '勳章詳情', title: '勳章詳情 · 三維旋轉',
      desc: '點亮後的勳章可點入：A 三維旋轉（雙面幣 Y 軸 6s/圈 + 高光隨相位掃過，Apple Watch 式）+ B Splash 同款呼吸光暈（背景低聲量）。記錄點亮日期與當時場景，可分享給家人。',
      specs: [
        { t: '雙面幣', d: '正面勳章圖案，背面開燈燈紋——翻過去也是我們的產品語言。' },
        { t: 'A+B 組合', d: '三維旋轉製造「哇」時刻，呼吸光暈維持燈語統一；解鎖瞬間仍走出艙彈卡+彩帶，不重複造。' },
        { t: '上下文回填', d: 'MedalRecord 記錄 unlockedContext（如「破十法出艙」），點亮故事可回溯。' }
      ],
      chips: ['三維旋轉', '呼吸光暈', '雙面幣', '點亮故事', '分享']
    }
  },

  en: {
    o1: {
      name: 'Splash Screen', title: 'Splash · Breathing Lamp',
      desc: 'The first impression at launch: a breathing-lamp animation — the bulb slowly pulses from dim to bright (2.8s cycle) with two halo layers expanding out of phase, a metaphor for lighting up knowledge. No wall of text; a single Start button.',
      specs: [{ t: 'Breathing-lamp animation', d: 'Pure CSS: two halo layers of radial gradients scaling out of phase, plus a drop-shadow glow on the bulb; the dim-to-bright loop echoes the brand promise.' }],
      chips: ['Brand motion', 'Breathing lamp', 'Zero copy']
    },
    o2: {
      name: 'Onboarding · Diagnosis', title: 'Onboarding 1/4 · 10-Minute Diagnosis',
      desc: 'Onboarding page 1 of 4: the top half sells one idea (a magnifier zeroing in on the red dot in the knowledge tree + a one-line value promise); the bottom half completes the first-diagnosis subject pick along the way.',
      specs: [
        { t: 'One idea per page', d: 'Each page presents exactly one feature: a large visual at the center, copy kept under two lines.' },
        { t: 'Settings in passing', d: 'Introducing diagnosis doubles as picking the first subject — setup completes naturally while selling the value, not as a form.' }
      ],
      chips: ['One idea', 'Hero visual', 'First subject', 'Skippable']
    },
    o3: {
      name: 'Onboarding · Daily Practice', title: 'Onboarding 2/4 · 3 Minutes a Day',
      desc: 'Onboarding page 2 of 4: the pitch (a bullseye + a 3-minute ring progress) plus the daily-practice reminder time, set in passing.',
      specs: [{ t: 'Reminder time', d: 'Three everyday time slots to pick with one tap; local notifications need no account or network permission.' }],
      chips: ['One idea', 'Reminder time', 'Local notifications']
    },
    o4: {
      name: 'Onboarding · 60s Rush', title: 'Onboarding 3/4 · 60-Second Rush',
      desc: 'Onboarding page 3 of 4: the pitch (60s ring + lightning bolt) plus the default rush difficulty (three iconized levels), set in passing.',
      specs: [{ t: 'Default difficulty', d: 'Same three levels as section 4.7.3; emphasizing "you can change it every run" lowers choice pressure.' }],
      chips: ['One idea', 'Default difficulty', '3 levels']
    },
    o5: {
      name: 'Onboarding · Incentives & Profile', title: 'Onboarding 4/4 · Lighting Up Growth',
      desc: 'Onboarding page 4 of 4: the pitch (a gold medal + the Light-Points level bar) and the final profile step (nickname / grade / points-display toggle); tapping Start First Diagnosis enters the main flow.',
      specs: [
        { t: 'Profile at the end', d: 'All required info is squeezed onto the last page: nickname + grade + one incentive toggle, done within 30 seconds.' },
        { t: 'Closed loop', d: 'Five pages deliver four selling points and finish setup in the same pass — landing and onboarding in one.' }
      ],
      chips: ['One idea', 'Profile', 'Points toggle', 'Enter main flow']
    },
    s2: {
      name: 'Home Dashboard', title: 'Home · Today at a Glance',
      desc: 'The parent\'s main entry: stuck points aggregated across subjects (Math / Chinese / English, each with its own colored badge). The points capsule up top shows the live Light-Points balance; the 60s Rush is the third quick entry.',
      specs: [
        { t: 'Multi-child switch', d: 'The avatar strip supports multi-child families; each child gets an independent profile, knowledge tree, points, and medals.' },
        { t: 'Cross-subject aggregation', d: 'Practice sheets, the stuck-point list, and the activity feed merge across subjects — no app or mode switching for parents.' },
        { t: 'Empty state, no stuck points', d: 'When everything is archived the app does not force questions; it shows "review suggested in N days".' }
      ],
      chips: ['Cross-subject', 'Multi-child', 'Light Points', '60s entry']
    },
    s3: {
      name: 'Subject Selection', title: 'Subject & Scope Selection',
      desc: 'Diagnosis entry: subject cards show each pack\'s overview and current stuck-point count; scope is auto-recommended by curriculum standard and grade, with beyond-scope content hard-locked.',
      specs: [
        { t: 'Curriculum lock', d: 'Scope can only shrink, never grow — "within 100" is locked for a first-semester grader; the beyond-scope check comes from each node\'s standardRef field.' },
        { t: 'Subject cards', d: 'Each card shows the pack\'s knowledge-node count and live stuck points — diagnosis priority at a glance.' }
      ],
      chips: ['Subject packs', 'Curriculum lock', 'Scope suggestion', '10 minutes']
    },
    s4: {
      name: 'Diagnosis in Progress', title: 'Diagnosis Engine · Control Panel',
      desc: 'Parent-held navigation: large-type question, three judgment buttons, and read-aloud timing. The countdown syncs with Dynamic Island; breadcrumbs expose the position in the knowledge tree.',
      specs: [
        { t: 'What the timer measures', d: 'Timing starts only after "done reading <svg class="ic"><use href="#i-play"/></svg>" — the parent\'s read-aloud time never pollutes the child\'s reaction time.' },
        { t: 'Three-button semantics', d: '<svg class="ic"><use href="#i-bolt"/></svg> instant answer (positive BKT evidence) / <svg class="ic"><use href="#i-check"/></svg> correct but slow (0.7 weight) / <svg class="ic"><use href="#i-cross"/></svg> wrong (triggers drill-down).' },
        { t: 'Hard cutoff', d: 'When the 10 minutes hit zero it stops immediately — cutoff is not failure; stuck points already found go into the report as usual.' }
      ],
      chips: ['Countdown', 'Read-aloud timing', '3-button judgment', 'Cutoff protection']
    },
    s5: {
      name: 'Drill-Down Guidance', title: 'Drill-Down',
      desc: 'A wrong answer reveals no answer — the parent gets a script instead: read it aloud to break a coarse failure into atomic stuck points, while the decision tree below visualizes the whole drill-down live — the current node highlighted amber, right/wrong branches leading to the next question or a stuck-point conclusion.',
      specs: [
        { t: 'Scripts are content assets', d: 'Prompts come from the SubjectPack drillTree — authored by curriculum research, hot-updated with the pack; the decision tree renders straight from drillTree data.' },
        { t: 'Stop and return', d: 'Stops at a leaf node or after 2 consecutive correct sub-questions, then returns to probing other branches; one diagnosis can surface multiple stuck points.' },
        { t: 'Cross-check', d: 'Asks an equivalent question once more to rule out slips (Q1b branch); passing demotes the finding to "watch".' }
      ],
      chips: ['drillTree', 'Parent scripts', 'Decision tree', 'Cross-check']
    },
    s6: {
      name: 'Diagnosis Report', title: 'Diagnosis Report',
      desc: 'What 10 minutes produces: a stuck-point list, a knowledge-tree snapshot, and next-step suggestions — one tap turns it into today\'s practice.',
      specs: [
        { t: 'Tree snapshot', d: 'The read-only snapshot focuses on three generations around each stuck point: parent / current level (with siblings) / child stuck points; everything beyond is collapsed — the full interactive graph is screen 7.' },
        { t: 'Action loop', d: 'The report footer links straight to "practice number-splitting first today" — diagnosis converts into practice instantly.' }
      ],
      chips: ['Stuck list', 'Tree snapshot', 'Next steps', 'Long image / PDF']
    },
    s7: {
      name: 'Knowledge Graph', title: 'Atomic Knowledge Graph',
      desc: 'The full interactive graph: a left-to-right collapsible tree carrying every knowledge node; subtrees collapse and expand as −/＋n, with drag-pan and two-mode zoom. Tapping any node highlights its entire prerequisite chain in red — "can\'t do this one? The foundation cracked three layers back."',
      specs: [
        { t: 'Left-to-right collapsible tree', d: 'A deep DAG is too cramped vertically, so it becomes a horizontal hierarchy: root at the left, leaves at the right; unrevised branches collapse into ＋n badges by default, keeping the trunk visible in one screen.' },
        { t: 'Navigation trio', d: 'Drag to pan, ＋/−/⤢ zoom buttons, and tap-to-highlight the ancestor chain; collapse state and selection never interfere.' },
        { t: 'Same source as the list', d: 'The graph and List View share the same data — just two views with live-consistent state; Chinese and English each have their own graph.' }
      ],
      chips: ['L→R tree', 'Collapse & expand', 'Drag pan', 'Zoom', 'Prerequisite highlight']
    },
    s8: {
      name: 'Stuck-Point List', title: 'Stuck-Point List View',
      desc: 'The cross-subject ledger of stuck points: subject badges mark the source, sorted by status (red > amber > yellow); each card shows P(L)-derived progress.',
      specs: [
        { t: 'Progress bar semantics', d: 'Three segments = 3 instant-answer days — the UI rendering of BKT P(L)≥0.85.' },
        { t: 'Stubborn stuck points', d: 'Not cleared for ≥7 days or re-activated ≥3 times → teaching strategies are pushed, with options to step back to prerequisites or pause.' }
      ],
      chips: ['Cross-subject', 'x/3 progress', 'P(L)', 'Stubborn escalation']
    },
    s9: {
      name: 'Math Practice (Oral)', title: 'Math · Parent Read-Aloud Mode',
      desc: '3–5 questions a day, 100% aimed at active stuck points. The parent reads aloud, the child answers aloud; scripts degrade gracefully to keep it flowing.',
      specs: [
        { t: 'Weighted selection', d: 'w = (1−P(L)) × forgetting decay; 7-day dedup; consecutive sessions on the same node are forced to switch question types.' },
        { t: 'No timeout penalty', d: 'With no judgment for 30 seconds, a prompt offers "wait a bit longer / mark as unknown".' },
        { t: 'Points integration', d: 'Every instant answer earns +10 <svg class="ic"><use href="#i-bulb"/></svg>, with the gain previewed live in the breadcrumb (see the points system).' }
      ],
      chips: ['3 minutes', 'BKT weighting', 'Script fallback', '+10<svg class="ic"><use href="#i-bulb"/></svg>']
    },
    s10: {
      name: 'Kids Card Mode', title: 'Practice · Kids Card Mode',
      desc: 'A warm, eye-friendly theme the child operates alone: an oversized number pad, no timer, and the word "wrong" appears nowhere. Correct → a star pops in; wrong → "try again~", with one retry.',
      specs: [
        { t: 'Zero pressure', d: 'No scores, no visible countdown, no right/wrong scoreboard — progress shown as stars, never numbers.' },
        { t: 'Input echo', d: 'A large "？" placeholder sits at the bottom of the question card; as the child taps the pad, the digit shows live and completes the equation.' },
        { t: 'Judgment flows back', d: 'Card mode still reports the three-level observation (instant / hesitant / wrong) to BKT — the child just never sees the clock.' },
        { t: 'Age fit', d: 'Suits older kids who can read a keypad; for younger ones, parent read-aloud is still recommended.' },
        { t: 'Child lock', d: 'Exiting needs a 1.5-second long press (with a ring progress hint) so an accidental tap can\'t fling the child back to the parent UI.' }
      ],
      chips: ['Warm & eye-friendly', 'Big keypad', 'Star progress', 'BKT feedback']
    },
    s11: {
      name: 'Chinese Practice (Pinyin)', title: 'Chinese · Pinyin & Character Practice',
      desc: 'The Chinese pack runs on the same engine: pinyin nodes = initials/finals/syllables + confusable pairs (b-d, p-q); character nodes = the 300/600/1000 graded high-frequency characters plus look-alikes; writing nodes = stroke order + Tianzige tracing (real glyph data).',
      specs: [
        { t: 'Confusable-pair design', d: 'Look-alike initials appear as paired contrast cards; the drill tree digs down along "hear it → recognize it → write the missing stroke".' },
        { t: 'Character cards', d: 'Character nodes carry pictographic hints and common word examples (the 木/林/森 family), rotated by the same parameterized engine.' },
        { t: 'Instant-answer thresholds', d: 'Recognition questions: 3s; blending and word-building: 8s — per-question-type thresholds apply across subjects.' }
      ],
      chips: ['Pinyin', 'Confusable pairs', '1000 characters', 'Tianzige grid', 'Per-type thresholds']
    },
    s12: {
      name: 'English Practice (Phonics)', title: 'English · Phonics (with Audio)',
      desc: 'What makes English different: the stuck points are in pronunciation and listening, and a parent\'s pronunciation may not be standard — all audio plays from the app\'s standard voice bank (TTS / human recordings); the parent only judges, never models.',
      specs: [
        { t: 'Interaction-mode exception', d: 'The essential difference from Math and Chinese: the audio carrier swaps "parent reads aloud" for "standard audio"; the diagnosis engine is unchanged — QuestionPlayer simply gains an audio question type.' },
        { t: 'Phonics path', d: 'Phonemic awareness → letter sounds → CVC blending → listen-and-pick; drilling digs along "can\'t hear it → can\'t tell them apart → can\'t read it right".' },
        { t: 'No pronunciation scoring', d: 'The child\'s spoken output is still judged by parent taps — no AI pronunciation scoring (accuracy is not good enough for young kids).' }
      ],
      chips: ['Standard audio', 'Listen & discern', 'CVC', 'Parent as judge']
    },
    s13: {
      name: '60s Rush Entry', title: '60s Rush · Entry & Rules',
      desc: 'A timed quick-answer mode built for kids: questions come from the full item bank, kids pick easy/medium/hard, and 60 seconds ride a warm-up → climb → peak difficulty curve. Wrong answers carry no penalty — they join the reinforcement queue for tomorrow. Play is diagnosis too.',
      specs: [
        { t: 'Full bank + 3 levels', d: 'No longer limited to lit-up nodes; the level sets where the difficulty curve peaks, and points are weighted ×1/×1.5/×2 by difficulty — the bold earn more.' },
        { t: 'Difficulty curve', d: 'Two warm-up questions (−1 level) build flow, the middle climbs, and the last 15 seconds peak (+1); a miss drops half a level, 3 in a row raises half — rules fully transparent to the child.' },
        { t: 'Three noes', d: 'No deductions, no rankings, no time-pressure penalties: a miss only breaks the streak and joins reinforcement; results are compared with "yesterday\'s self" only.' }
      ],
      chips: ['Full item bank', '3 levels', 'Difficulty curve', 'Zero penalty', '2 runs daily']
    },
    s14: {
      name: '60s Rush In Progress', title: '60s Rush · In Progress',
      desc: 'The challenge from the child\'s view: a big countdown ring, streak badge, and live Light-Points counter. The number pad matches Kids Card Mode — familiar controls, zero learning cost.',
      specs: [
        { t: 'Countdown ring', d: 'A 60-second ring; the last 10 seconds turn red with a light haptic — but no hurrying sound effects (low pressure).' },
        { t: 'Streak feedback', d: 'Three in a row lights the streak badge; every question after earns +2 <svg class="ic"><use href="#i-bulb"/></svg>. A miss dims the badge but never clears points.' },
        { t: 'Data flows back', d: 'Rush answers write PracticeEvent (source=challenge); wrong or hesitant answers are negative BKT evidence, instant ones positive; misses sync into the reinforcement queue.' }
      ],
      chips: ['Ring timer', 'Streak badge', 'Level indicator', 'Live points', 'Data feedback']
    },
    s15: {
      name: '60s Rush Results', title: '60s Rush · Settlement',
      desc: 'The settlement page = three incentives in one plus miss recovery: transparent score breakdown (difficulty multiplier included), new records compared with yesterday\'s self, medals popping instantly, and missed or timed-out questions clearly promised priority practice tomorrow.',
      specs: [
        { t: 'Transparent scoring', d: 'Every component of the score is listed (difficulty multiplier included) — predictable rules are what make an incentive system trustworthy.' },
        { t: 'Medal hookup', d: 'Rush-exclusive medals (Quick Hands / Hundred Questions / Seven Streak) are awarded here and go to the medal wall.' },
        { t: 'Miss-reinforcement hook', d: 'Missed or timed-out questions join the recovery list: inserted first into the next day\'s 3-minute practice, removed after 2 consecutive corrects, tagged "from Rush" on the list; the node\'s P(L) drops in sync.' }
      ],
      chips: ['New record', 'Score breakdown', 'Miss reinforcement', 'Medal pop-up']
    },
    s16: {
      name: 'Clearance Celebration', title: 'Clearance',
      desc: 'Clearance only when three conditions align (P(L)≥0.85 + ≥2 instant-answer days + a day-7 spot check). Clearing fires three incentives at once: the node lights up + 100 Light Points + a milestone-medal check.',
      specs: [
        { t: 'BKT guards against lucky guesses', d: 'An explicit guess parameter P(G): 0.20 for fill-ins, 0.25–0.33 for multiple choice; one lucky guess only lifts P(L) to about 0.4.' },
        { t: 'Stacked incentives', d: 'Points reward every effort, medals reward milestones, and the clearance animation brings ceremony — three incentive layers with complementary frequency.' },
        { t: 'Cleared is not forgotten', d: 'Cleared items archive into the monthly spot-check pool; 2 consecutive misses on reinforcement re-activate the node and reset P(L) to 0.5.' }
      ],
      chips: ['3-condition clearance', '+100<svg class="ic"><use href="#i-bulb"/></svg>', 'Medal pop-up', 'confetti']
    },
    s17: {
      name: 'Medal Wall', title: 'Lighting Up the Medal Wall',
      desc: 'A collection system: gold/silver/bronze lamp bases plus subject-exclusive medals (Pinyin Pioneer / Little Calculator / ABC Ace); locked medals show progress (8/10) instead of blank space.',
      specs: [
        { t: 'Three-subject medals', d: 'The lighting-progress denominator becomes the 90 nodes total across three subjects; subject-exclusive medals steer balanced lighting.' },
        { t: 'Zero pressure', d: 'No scores, no rankings, no streak penalties; the Rock Steady medal mirrors the clearance-relapse KPI.' }
      ],
      chips: ['Collection', 'Subject medals', 'Visible progress', 'No rankings']
    },
    s18: {
      name: 'Achievement Points', title: 'Light-Points System (New)',
      desc: 'The points system "Light Points": complementary to medals — medals reward rare milestones, Light Points reward every daily effort. Lamp levels (Firefly → Little Sun) provide the long-term goal.',
      specs: [
        { t: 'First principle: never decrease', d: 'Light Points are never deducted, never expire, with no shop and no spending — they measure achievement, they are not currency. Deducting for wrong answers would instantly destroy the low-pressure principle.' },
        { t: 'Division of labor with medals', d: 'Light Points = high-frequency small rewards (per question); medals = low-frequency large ones (milestones); levels = ultra-long-term (monthly). Three complementary frequencies, zero penalties throughout.' },
        { t: 'Anti-farming design', d: 'The Rush is capped at 2 runs daily; practice points only accrue in targeted practice; diagnosis points once per diagnosis — the points curve is tightly bound to real learning.' },
        { t: 'Parent can turn it off', d: 'Settings can hide the point count from the child (lamp levels stay) — for families that want no numeric incentives at all.' }
      ],
      chips: ['Never decreases', 'Lamp levels', 'Anti-farming', 'Hideable']
    },
    s19: {
      name: 'Points Ledger', title: 'Light-Points Ledger',
      desc: 'The points ledger: every credit maps to a real learning act (time / node / model data), so the child can see where points come from and the parent can audit whether incentives ring true.',
      specs: [
        { t: 'Auditable', d: 'The ledger doubles as the parent\'s learning journal — lighter than a standalone report, and kids browse it themselves.' },
        { t: 'No spending page', d: 'Because points never decrease, there is no spending history — the ledger only ever shows income.' }
      ],
      chips: ['Auditable ledger', 'Income only', 'Learning journal']
    },
    s20: {
      name: 'Practice Complete', title: 'Practice Complete · Today\'s Summary',
      desc: 'The 3-minute wrap-up: every stuck point\'s progress at a glance (with the UI rendering of BKT state), today\'s Light-Points harvest, and expectation management toward clearance.',
      specs: [
        { t: 'Expectation management', d: '"One instant-answer day to go" gives parent and child a certain expectation of clearance — certainty itself is motivating.' },
        { t: 'Forgiving streak reminder', d: 'If yesterday was missed, a gentle note says your progress is kept and you can continue anytime; a broken streak is never shown.' }
      ],
      chips: ['Progress rendering', 'Points harvest', 'Expectation mgmt']
    },
    s21: {
      name: 'History Archive', title: 'History · Cleared Records',
      desc: 'The full history of cleared items: discovery-to-clearance cycles, spot-check records, re-activation flags. The footer aggregates mean clearance cycle and 30-day relapse rate — exactly the BKT model\'s acceptance KPI.',
      specs: [
        { t: 'Relapse made visible', d: 'Re-activated nodes are clearly flagged (re-practicing), never sugarcoated — relapse rate measures model health, not the child\'s failure.' },
        { t: 'Export', d: 'This page exports to PDF — send it to a teacher and it reads as a precise learning-diagnosis history.' }
      ],
      chips: ['Full clear history', 'Cycle stats', 'Relapse rate', 'PDF']
    },
    s22: {
      name: 'Settings', title: 'Settings',
      desc: 'Every tunable in one place: per-question-type instant thresholds, rush limits, the points-display toggle, iCloud sync, and data export.',
      specs: [
        { t: 'Per-type thresholds', d: 'Mental math 3s / word problems 8s, set separately — one global threshold was the previous version\'s pitfall.' },
        { t: 'Points toggle', d: 'Show the child the point count can be turned off: lamp levels stay, numbers hide — respecting each family\'s incentive philosophy.' }
      ],
      chips: ['Per-type thresholds', 'Rush limits', 'Points toggle', 'iCloud']
    },
    s26: {
      name: 'Tianzige Handwriting', title: 'Writing · Tianzige Tracing',
      desc: 'Built on the Swift port of HanziWriter: real glyph outlines (Make Me a Hanzi data) plus median-guided per-stroke animation. My Turn enters the writing test — a glowing start-point hint, live judging of start, end, and trace fit, and a red flash to rewrite wrong strokes.',
      specs: [
        { t: 'Real glyph data', d: 'Bundles the full hanzi-writer data for the 1,000 most common characters (outline SVG + stroke medians, 2.3MB) — tracing covers every high-frequency character.' },
        { t: 'Per-stroke animation', d: 'A thickened median stroke acts as a mask revealing the real glyph segment by segment — the same algorithm as official hanzi-writer, with stroke-order numbers.' },
        { t: 'Writing judgment', d: 'Near start + near end + 60% trace fit to the median passes; up to 1 wrong stroke still counts as well written and flows back into BKT / instant-answer / points as usual.' }
      ],
      chips: ['Tianzige grid', 'Stroke animation', 'Writing test', '1000 chars', 'BKT feedback']
    },
    s27: {
      name: 'Child Profile Management', title: 'Child Profiles · Multi-Child Switch',
      desc: 'Multi-child families: up to 5 profiles, with profileID scoping isolating all child data; the home avatar strip switches in one tap, and relaunching remembers the last child.',
      specs: [
        { t: 'Limit of 5', d: 'PRD constraint: multi-child support caps at 5; the button grays out beyond that.' },
        { t: 'Cascading delete', d: 'Deleting a profile also clears that child\'s progress, points, medals, misses, and rush records, behind a confirmation dialog.' }
      ],
      chips: ['Multi-child', 'Limit 5', 'Data isolation', 'Cascade delete']
    },
    s28: {
      name: 'Avatar Settings', title: 'Avatar Settings',
      desc: 'An avatar = a palette base color + a nature-themed icon badge (no emoji, matching production); enter from the home avatar or Settings, and rename on the same page.',
      specs: [{ t: 'Production standard', d: 'A round color base + SF-Symbol-style line icon, 1:1 with the in-app AvatarBadge component.' }],
      chips: ['Avatar', 'Palette', 'Icon badge']
    },
    s29: {
      name: 'New Profile', title: 'New Child Profile',
      desc: 'Nickname, grade, avatar, and subjects created in one step, switching to the new profile on creation; a first launch with no profile forces profile creation before onboarding.',
      specs: [{ t: 'First-launch flow', d: 'No profile → forced creation → onboarding → home; with a profile → straight into the last-used child.' }],
      chips: ['Profile creation', 'Subject pick', 'Avatar']
    },
    s30: {
      name: 'Data Export', title: 'Data Export',
      desc: 'PRD 4.5.3 ships three formats: PDF reports (teachers / institutions), JSON backups (migration), and CSV logs (parent analysis), shared via the system ShareLink.',
      specs: [{ t: 'Per-child anonymization', d: 'In multi-child families the export contains only the current child — never cross-contaminated.' }],
      chips: ['PDF', 'JSON', 'CSV', 'Share']
    },
    s31: {
      name: 'AI Variant Questions', title: 'AI Variant Questions (Optional)',
      desc: 'The optional enhancement of PRD 4.3.5: variant questions when the item bank runs dry; configuration stays on-device, and graceful failure is the baseline of a fully local product.',
      specs: [{ t: 'Optional, not required', d: 'The app is fully usable without it — a product principle, not a technical limitation.' }],
      chips: ['LLM', 'Optional', 'Local fallback']
    },
    s32: {
      name: 'Subject Content Packs', title: 'Subject Packs · Hot Updates',
      desc: 'SubjectPacks are decoupled from app versions: new subjects, larger character lists, or script fixes all ship via hot update; node IDs are never reused, so historical data never dangles.',
      specs: [{ t: 'Literacy v1.1.0', d: 'This update: the 300/600/1000 graded character lists + real-glyph Tianzige tracing for all 1,000 characters.' }],
      chips: ['Content pack', 'Hot update', 'Schema validation', 'Atomic swap']
    },
    s33: {
      name: 'Teaching Tips', title: 'Teaching Tips · Stuck-Point Coach Card',
      desc: 'A parent coach card per stuck point: cause diagnosis → a three-step teaching path (concrete / pictorial / symbolic) → scripts you can read verbatim → strategies for stubborn points (step back to prerequisites, lower difficulty, or pause). Scripts share the drill tree\'s source; teaching paths come from curriculum-research assets.',
      specs: [
        { t: 'Three layers, one source', d: 'Causes = drill-down conclusions; scripts = drillTree parent scripts; strategies = Scheduler stubborn-point rules (triggered by ≥7 days uncleared or ≥3 re-activations).' },
        { t: 'Followable as-is', d: 'Every step names its tool (counting sticks / ten-frames), an expected day count, and an exit condition — executable with zero teaching background.' },
        { t: 'Voice demo', d: 'TTS reads the parent script aloud in about 15 seconds, a reference for tone and pacing — no guessing how to open the conversation.' },
        { t: 'Not a replacement for practice', d: 'Tips are how to teach; the practice page is practice daily; a one-tap return at the page foot keeps the loop unbroken.' }
      ],
      chips: ['Cause diagnosis', '3-step teaching', 'Parent scripts', 'Stubborn points', 'Prerequisite rollback']
    },
    s34: {
      name: 'Medal Detail', title: 'Medal Detail · 3D Spin',
      desc: 'Lit medals are tappable: a 3D spin (a two-sided coin making one Y-axis turn every 6 seconds, highlight sweeping with the phase, Apple Watch style) plus the Splash breathing glow (low-key background). The lighting date and context are recorded and shareable with family.',
      specs: [
        { t: 'Two-sided coin', d: 'Medal art on the front, the LightUp lamp motif on the back — even the flip side speaks the product\'s language.' },
        { t: 'A+B combo', d: 'The 3D spin makes the wow moment and the breathing glow keeps lamp language consistent; the unlock instant still plays the clearance pop-up and confetti, nothing remade.' },
        { t: 'Context backfill', d: 'MedalRecord stores unlockedContext (for example Ten-Break Subtraction cleared) so each lighting-up story is traceable.' }
      ],
      chips: ['3D spin', 'Breathing glow', 'Two-sided coin', 'Lighting stories', 'Share']
    }
  }
};
