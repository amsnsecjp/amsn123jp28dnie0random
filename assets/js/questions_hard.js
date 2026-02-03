const QUESTIONS_HARD = [
    {
        id: "H01",
        category: "インシデント",
        text: "ランサムウェア被害。「身代金を払えば復元する」と言われた。推奨される対応は？",
        answer: "払わない",
        choices: ["払わない", "値切る", "支払う"],
        explanation: "支払っても復元される保証はなく、犯罪組織への資金提供になるため支払うべきではありません。"
    },
    {
        id: "H02",
        category: "標的型攻撃",
        text: "パスワード付きZIPファイルとパスワードが別送されてきた（PPAP）。セキュリティ上の評価は？",
        answer: "効果薄い",
        choices: ["非常に安全", "普通", "効果薄い"],
        explanation: "ウイルスチェックをすり抜ける手段として悪用されており、現在は推奨されていません。"
    },
    {
        id: "H03",
        category: "Web",
        text: "SQLインジェクション脆弱性への対策。根本的な修正方法は？",
        answer: "プレースホルダ",
        choices: ["プレースホルダ", "WAF導入", "入力値制限"],
        explanation: "WAFは緩和策です。根本修正にはプリペアドステートメント（プレースホルダ）の使用が必要です。"
    },
    {
        id: "H04",
        category: "認証",
        text: "SSHへのブルートフォース攻撃を防ぐため、廃止すべき認証方式は？",
        answer: "パスワード認証",
        choices: ["公開鍵認証", "多要素認証", "パスワード認証"],
        explanation: "パスワード認証は総当たりに弱いです。公開鍵認証への移行が推奨されます。"
    },
    {
        id: "H05",
        category: "サプライ",
        text: "取引先が攻撃を受けた。自社への影響として警戒すべき攻撃は？",
        answer: "なりすましメール",
        choices: ["なりすましメール", "DDoS攻撃", "SQLインジェクション"],
        explanation: "取引先になりすましたウイルスメールが送られてくる「サプライチェーン攻撃」のリスクが高まります。"
    },
    {
        id: "H06",
        category: "IoT",
        text: "IoT機器のマルウェア（Miraiなど）感染の最大の原因は？",
        answer: "初期パスワード",
        choices: ["初期パスワード", "Wi-Fiの弱さ", "Bluetooth"],
        explanation: "出荷時のデフォルトパスワードのまま運用されている機器が狙われます。"
    },
    {
        id: "H07",
        category: "内部不正",
        text: "退職予定者の大量データ持ち出しを検知。最初にとるべき措置は？",
        answer: "アカウント停止",
        choices: ["アカウント停止", "本人へ電話", "損害賠償請求"],
        explanation: "まずはアクセス権を遮断し、被害の拡大と証拠隠滅を防ぐのが最優先です。"
    },
    {
        id: "H08",
        category: "DDoS",
        text: "DDoS攻撃を受けた際、やってはいけない対応は？",
        answer: "サーバ再起動ループ",
        choices: ["IP遮断検討", "CDN利用", "サーバ再起動ループ"],
        explanation: "根本解決にならず、復旧作業の妨げになります。トラフィック緩和策が必要です。"
    },
    {
        id: "H09",
        category: "メール",
        text: "自社ドメインのなりすましを防ぐために設定すべきDNSレコードは？",
        answer: "SPF/DKIM/DMARC",
        choices: ["SPF/DKIM/DMARC", "SSL/TLS", "Aレコード"],
        explanation: "送信ドメイン認証技術（SPF, DKIM, DMARC）の設定が必要です。"
    },
    {
        id: "H10",
        category: "無線LAN",
        text: "現在、セキュリティ強度が低く解読容易とされるWi-Fi暗号化方式は？",
        answer: "WEP",
        choices: ["WPA3", "WPA2", "WEP"],
        explanation: "WEPは脆弱性が深刻で、容易に解読されます。絶対に使用してはいけません。"
    },
    {
        id: "H11",
        category: "ソーシャル",
        text: "「極秘案件なので通例の手順を省略して送金しろ」というCEOからの指示。対応は？",
        answer: "手順遵守",
        choices: ["手順遵守", "即時送金", "半額送金"],
        explanation: "ビジネスメール詐欺（BEC）の特徴です。例外を認めず、正規の手順・確認を行うべきです。"
    },
    {
        id: "H12",
        category: "ゼロトラスト",
        text: "ゼロトラストセキュリティモデルの基本的な考え方は？",
        answer: "全て信頼しない",
        choices: ["全て信頼しない", "内部は信頼する", "外部のみ監視"],
        explanation: "「決して信頼せず、常に検証する」がゼロトラストの原則です。"
    },
    {
        id: "H13",
        category: "ログ",
        text: "サイバー攻撃の発見にかかる平均日数を考慮し、ログ保存期間として不適切なのは？",
        answer: "1週間",
        choices: ["1年以上", "6ヶ月", "1週間"],
        explanation: "侵入から発覚まで数ヶ月かかることも珍しくありません。1週間では調査できません。"
    },
    {
        id: "H14",
        category: "脆弱性",
        text: "使用中のライブラリに脆弱性が見つかった。最も避けるべき対応は？",
        answer: "放置",
        choices: ["パッチ適用", "WAF回避設定", "放置"],
        explanation: "既知の脆弱性を放置することは、攻撃者にドアを開けているのと同じです。"
    },
    {
        id: "H15",
        category: "BYOD",
        text: "私物スマホの業務利用（BYOD）。紛失時の対策として導入すべき仕組みは？",
        answer: "MDM",
        choices: ["MDM", "GPSオフ", "パスコードなし"],
        explanation: "MDM（モバイルデバイス管理）によるリモートワイプ（遠隔消去）機能などが必須です。"
    },
    {
        id: "H16",
        category: "CSIRT",
        text: "インシデント対応チーム（CSIRT）。有事に備えて平時に行うべきことは？",
        answer: "対応訓練",
        choices: ["対応訓練", "解散", "給与計算"],
        explanation: "有事の際にスムーズに動けるよう、定期的な演習やフロー確認が必要です。"
    },
    {
        id: "H17",
        category: "メール",
        text: "標的型攻撃メールを開いてしまった。「何も起きなかった」時の判断は？",
        answer: "感染を疑う",
        choices: ["感染を疑う", "安全と判断", "PCを隠す"],
        explanation: "画面上で変化がなくても、裏でマルウェアが活動開始している可能性が高いです。"
    },
    {
        id: "H18",
        category: "物理",
        text: "サーバールーム入退室管理。最も信頼性が低い方法は？",
        answer: "手書きノート",
        choices: ["生体認証", "ICカード", "手書きノート"],
        explanation: "手書きは虚偽申告が可能であり、正確な証跡になりません。"
    },
    {
        id: "H19",
        category: "暗号化",
        text: "Webサイトの通信保護。Topページだけでなく全ページ暗号化することを何という？",
        answer: "常時SSL",
        choices: ["常時SSL", "一部SSL", "HTTP"],
        explanation: "Always On SSL（常時SSL化）が現在のウェブ標準です。"
    },
    {
        id: "H20",
        category: "法規",
        text: "EU等の海外顧客データを持つ場合、日本法の他に配慮すべき規制は？",
        answer: "GDPR",
        choices: ["GDPR", "HIPAA", "JIS"],
        explanation: "GDPR（一般データ保護規則）は域外適用されるため、対応が必要です。"
    }
];
