const QUESTIONS_EXPERT = [
    {
        id: "X01",
        category: "暗号技術",
        text: "PFS (Perfect Forward Secrecy) の主な利点は何か？",
        answer: "過去の通信保護",
        choices: ["過去の通信保護", "高速化", "鍵長短縮"],
        explanation: "秘密鍵が漏洩しても、過去にさかのぼって通信内容が解読されない性質（前方秘匿性）を持ちます。"
    },
    {
        id: "X02",
        category: "攻撃手法",
        text: "「Active Directory」の管理者権限奪取を狙う「Golden Ticket」攻撃。悪用されるのは？",
        answer: "Kerberos",
        choices: ["Kerberos", "LDAP", "SMB"],
        explanation: "Kerberos認証のTGT（Ticket Granting Ticket）を偽造し、ドメイン管理者として振る舞う攻撃です。"
    },
    {
        id: "X03",
        category: "Web",
        text: "XSS（クロスサイトスクリプティング）対策として「HttpOnly」属性をCookieに付与する効果は？",
        answer: "JSアクセス不可",
        choices: ["JSアクセス不可", "暗号化", "期限延長"],
        explanation: "JavaScriptからのCookie読み取り（document.cookie）を禁止し、セッションハイジャックを防ぎます。"
    },
    {
        id: "X04",
        category: "ネットワーク",
        text: "DNSキャッシュポイズニング攻撃への対策として有効な技術は？",
        answer: "DNSSEC",
        choices: ["DNSSEC", "SSL/TLS", "WAF"],
        explanation: "DNS応答の正当性を電子署名で検証するDNSSEC（Domain Name System Security Extensions）が有効です。"
    },
    {
        id: "X05",
        category: "マルウェア",
        text: "ファイルレスマルウェア（Fileless Malware）が主に悪用するWindowsの機能は？",
        answer: "PowerShell",
        choices: ["PowerShell", "Notepad", "Paint"],
        explanation: "ディスク上にファイルを残さず、PowerShellやWMIなどの正規ツールを悪用してメモリ上で実行されます。"
    },
    {
        id: "X06",
        category: "クラウド",
        text: "AWSにおける「S3バケットの公開設定不備」を防ぐための機能は？",
        answer: "Block Public Access",
        choices: ["Block Public Access", "VPC Peering", "Direct Connect"],
        explanation: "S3 Block Public Access機能を有効にすることで、意図しない公開を強制的にブロックできます。"
    },
    {
        id: "X07",
        category: "認証",
        text: "FIDO2認証において、認証器（Authenticator）とサーバー間でやり取りされるのは？",
        answer: "署名付きデータ",
        choices: ["署名付きデータ", "生体情報", "パスワード"],
        explanation: "生体情報はデバイス内に留まり、サーバーには電子署名されたデータのみが送信されます。"
    },
    {
        id: "X08",
        category: "メール",
        text: "DMARCレポートにおいて「SPFはPassだが位置がずれている」状態を示す用語は？",
        answer: "Alignment Fail",
        choices: ["Alignment Fail", "Hard Fail", "Soft Fail"],
        explanation: "Header FromドメインとEnvelope Fromドメインが一致していない（アライメント不一致）状態です。"
    },
    {
        id: "X09",
        category: "インシデント",
        text: "フォレンジック調査において「揮発性情報の保全順序」として正しいのは？",
        answer: "メモリ→ディスク",
        choices: ["メモリ→ディスク", "ディスク→メモリ", "ログ→メモリ"],
        explanation: "電源を切ると消える揮発性の高い情報（メモリ、ネットワーク接続）から順に保全するのが原則（Order of Volatility）です。"
    },
    {
        id: "X10",
        category: "IoT",
        text: "自動車のCAN（Controller Area Network）通信のセキュリティ課題は？",
        answer: "暗号化がない",
        choices: ["暗号化がない", "速度が遅い", "無線のみ"],
        explanation: "標準的なCANプロトコルには暗号化や認証の仕組みがなく、物理アクセスされるとなりすましが容易です。"
    },
    {
        id: "X11",
        category: "防御手法",
        text: "EDR（Endpoint Detection and Response）の主目的は？",
        answer: "事後検知・対応",
        choices: ["事後検知・対応", "侵入防止", "資産管理"],
        explanation: "侵入されることを前提に、侵入後の挙動検知、調査、封じ込めなどの対処を迅速化するソリューションです。"
    },
    {
        id: "X12",
        category: "攻撃手法",
        text: "サプライチェーン攻撃において「ソフトウェアのビルド工程」にマルウェアを混入させる手法は？",
        answer: "改ざん",
        choices: ["改ざん", "盗聴", "DDoS"],
        explanation: "正規のソフト開発環境やビルドパイプラインを侵害し、正規の署名付きマルウェアを配布させる高度な攻撃です。"
    },
    {
        id: "X13",
        category: "脆弱性",
        text: "CVSS（共通脆弱性評価システム）において「攻撃の容易さ」を示す指標は？",
        answer: "Exploitability",
        choices: ["Exploitability", "Impact", "Temporal"],
        explanation: "基本評価基準（Base Metrics）の中で、攻撃元、攻撃条件の複雑さなどを評価する項目です。"
    },
    {
        id: "X14",
        category: "Web",
        text: "CSRF（クロスサイトリクエストフォージェリ）の対策として最も有効なのは？",
        answer: "トークン埋込",
        choices: ["トークン埋込", "IP制限", "SSL化"],
        explanation: "予測困難なワンタイムトークンをフォームに埋め込み、送信時に検証することで対策します。"
    },
    {
        id: "X15",
        category: "ネットワーク",
        text: "「ゼロトラスト」において、アクセスのたびに動的に認可を決定するコンポーネントは？",
        answer: "PDP",
        choices: ["PDP", "PEP", "VPN"],
        explanation: "PDP (Policy Decision Point) がポリシーに基づいてアクセス可否を判断し、PEP (Policy Enforcement Point) が制御します。"
    },
    {
        id: "X16",
        category: "暗号技術",
        text: "量子コンピュータの実用化により、解読の危険性が最も高まるとされる暗号方式は？",
        answer: "RSA",
        choices: ["RSA", "AES", "OTP"],
        explanation: "素因数分解の困難性に依存するRSAなどの公開鍵暗号は、ショアのアルゴリズムにより解読される恐れがあります。"
    },
    {
        id: "X17",
        category: "法規",
        text: "改正個人情報保護法において、漏洩発生時の報告義務の対象となるのは？",
        answer: "権利侵害の恐れ",
        choices: ["権利侵害の恐れ", "全ての漏洩", "100件以上"],
        explanation: "個人の権利利益を害するおそれがある事態（要配慮個人情報、財産的被害の恐れなど）に報告が義務化されました。"
    },
    {
        id: "X18",
        category: "監査",
        text: "ISMS（ISO/IEC 27001）において「適用宣言書（SoA）」とは何か？",
        answer: "管理策の選択",
        choices: ["管理策の選択", "方針の宣言", "証拠の提示"],
        explanation: "規格の附属書Aにある管理策の中から、組織が適用する管理策と適用しない理由を明確にした文書です。"
    },
    {
        id: "X19",
        category: "攻撃手法",
        text: "「水飲み場型攻撃（Watering Hole Attack）」のターゲットは？",
        answer: "特定の組織",
        choices: ["特定の組織", "無差別", "個人PC"],
        explanation: "標的となる組織のユーザーがよく閲覧するWebサイトを改ざんし、待ち伏せしてマルウェアに感染させる手法です。"
    },
    {
        id: "X20",
        category: "サーバー",
        text: "Linuxサーバーで、特権昇格（Root化）を防ぐために制限すべきコマンド機能は？",
        answer: "SUID",
        choices: ["SUID", "Chmod", "Grep"],
        explanation: "所有者の権限で実行されるSUID（Set User ID）ビットが付いたファイルは、脆弱性をついた特権昇格に悪用されやすいです。"
    }
];
