const QUESTIONS_EASY = [
    {
        id: "E01",
        category: "メール",
        text: "「至急！支払い確認」という不審なメール。やってはいけない行動は？",
        answer: "リンクを開く",
        choices: ["無視する", "リンクを開く"],
        explanation: "リンクを開くと詐欺サイトに誘導される危険があります。無視が正解です。"
    },
    {
        id: "E02",
        category: "メール",
        text: "友人から不自然なURLが届いた。安全な対応は？",
        answer: "本人確認",
        choices: ["本人確認", "URLを開く"],
        explanation: "乗っ取りの可能性があります。電話などで本人に確認するのが安全です。"
    },
    {
        id: "E03",
        category: "Wi-Fi",
        text: "鍵のないフリーWi-Fiで見つかると危険な行動は？",
        answer: "買い物する",
        choices: ["動画を見る", "買い物する"],
        explanation: "暗号化されていない通信でクレジットカードなどを入力するのは危険です。"
    },
    {
        id: "E04",
        category: "パスワード",
        text: "「password123」のようなパスワード設定。これは安全？",
        answer: "危険",
        choices: ["安全", "危険"],
        explanation: "推測されやすいパスワードは、すぐに破られるため危険です。"
    },
    {
        id: "E05",
        category: "PC管理",
        text: "離席時の画面ロック。正しい対応は？",
        answer: "ロックする",
        choices: ["ロックする", "そのまま"],
        explanation: "短時間でも必ずロックしましょう。"
    },
    {
        id: "E06",
        category: "USB",
        text: "落ちていたUSBメモリ。危険な行動は？",
        answer: "PCに挿す",
        choices: ["届ける", "PCに挿す"],
        explanation: "ウイルス感染のリスクがあるため、決してPCに挿してはいけません。"
    },
    {
        id: "E07",
        category: "スマホ",
        text: "「ウイルス感染」の警告が出た。やってはいけないのは？",
        answer: "修復を押す",
        choices: ["タブを閉じる", "修復を押す"],
        explanation: "ボタンを押すと不正アプリを入れられます。無視して閉じるのが正解です。"
    },
    {
        id: "E08",
        category: "電話",
        text: "PCサポートを名乗る不審な電話。「ソフトを入れて」と言われたら？",
        answer: "電話を切る",
        choices: ["電話を切る", "従う"],
        explanation: "サポート詐欺です。相手にせず電話を切りましょう。"
    },
    {
        id: "E09",
        category: "SNS",
        text: "「現金プレゼント」の怪しい投稿。危険な対応は？",
        answer: "応募・拡散",
        choices: ["無視", "応募・拡散"],
        explanation: "個人情報収集や詐欺の拡散に加担することになります。"
    },
    {
        id: "E10",
        category: "アップデート",
        text: "OSのアップデート通知。正しい行動は？",
        answer: "更新する",
        choices: ["更新する", "放置する"],
        explanation: "セキュリティの穴を塞ぐため、早めの更新が重要です。"
    },
    {
        id: "E11",
        category: "物理",
        text: "カフェで離席する際、してはいけないことは？",
        answer: "置きっぱなし",
        choices: ["持ち歩く", "置きっぱなし"],
        explanation: "盗難や画面覗き見のリスクがあります。"
    },
    {
        id: "E12",
        category: "メール",
        text: "不在通知のSMS（スミッシング）。正しい確認方法は？",
        answer: "公式アプリ",
        choices: ["公式アプリ", "記載のURL"],
        explanation: "SMS内のURLは詐欺サイトの可能性があります。公式アプリから確認しましょう。"
    },
    {
        id: "E13",
        category: "ソフト",
        text: "違法な海賊版ソフトの使用。リスクがあるのは？",
        answer: "ＤＬする",
        choices: ["使わない", "ＤＬする"],
        explanation: "海賊版にはウイルスが仕込まれていることが多いです。"
    },
    {
        id: "E14",
        category: "パスワード",
        text: "付箋でパスワードを貼る行為。セキュリティ上どう？",
        answer: "危険",
        choices: ["安全", "危険"],
        explanation: "誰でも見られる状態は非常に危険です。"
    },
    {
        id: "E15",
        category: "データ",
        text: "許可のない個人クラウドへのデータ保存は？",
        answer: "禁止行為",
        choices: ["許可", "禁止行為"],
        explanation: "シャドーITによる情報漏洩の原因となります。"
    },
    {
        id: "E16",
        category: "物理",
        text: "知らない人を入館させる「共連れ」。正しい対応は？",
        answer: "断る",
        choices: ["断る", "入れてあげる"],
        explanation: "優しさにつけこむ侵入手段です。きっぱり断りましょう。"
    },
    {
        id: "E17",
        category: "メール",
        text: "ファイル名「請求書.pdf.exe」。これを開くのは？",
        answer: "危険",
        choices: ["安全", "危険"],
        explanation: "二重拡張子のウイルスファイルです。開くと感染します。"
    },
    {
        id: "E18",
        category: "SNS",
        text: "オフィスの様子をSNSにアップする際、危険なのは？",
        answer: "資料が写る",
        choices: ["背景を確認", "資料が写る"],
        explanation: "写り込んだ資料から機密情報が漏れることがあります。"
    },
    {
        id: "E19",
        category: "設定",
        text: "共用PCでブラウザに「パスワードを保存」するのは？",
        answer: "避けるべき",
        choices: ["便利", "避けるべき"],
        explanation: "他人になりすましログインされる危険があります。"
    },
    {
        id: "E20",
        category: "認証",
        text: "2段階認証の設定。セキュリティ強度は？",
        answer: "高まる",
        choices: ["高まる", "変わらない"],
        explanation: "パスワードだけに頼らないため、安全性は大きく向上します。"
    }
];
