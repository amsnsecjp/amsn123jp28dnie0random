const QUESTIONS_EXPERT = [
    {
        id: "X01",
        category: "ストラテジ系",
        text: "将来のあるべき姿を設定し、そこから現在の行動を考える手法はどれか。",
        answer: "バックキャスティング",
        choices: ["PoC", "バックキャスティング", "フォアキャスティング"],
        explanation: "将来の目標から現在の行動を導く考え方の事を示しています。"
    },
    {
        id: "X02",
        category: "ストラテジ系",
        text: "企業の経営資源を価値や希少性の観点から評価する分析手法はどれか。",
        answer: "VRIO",
        choices: ["SWOT", "VRIO", "PPM"],
        explanation: "経営資源の競争優位性を評価する分析手法の事を示しています。"
    },
    {
        id: "X03",
        category: "ストラテジ系",
        text: "IT技術を活用して金融サービスを提供する分野を何というか。",
        answer: "フィンテック",
        choices: ["IoT", "フィンテック", "RPA"],
        explanation: "ITを活用した金融サービスの事を示しています。"
    },
    {
        id: "X04",
        category: "ストラテジ系",
        text: "市場成長率と市場占有率を用いて事業を分類する分析手法はどれか。",
        answer: "PPM",
        choices: ["SWOT", "PPM", "KPI"],
        explanation: "事業ポートフォリオを分析する手法の事を示しています。"
    },
    {
        id: "X05",
        category: "ストラテジ系",
        text: "組織の目標達成度を測るために用いる重要な評価指標はどれか。",
        answer: "KPI",
        choices: ["ROI", "KPI", "KGI"],
        explanation: "目標達成度を測る重要業績評価指標の事を示しています。"
    },

    {
        id: "X06",
        category: "マネジメント系",
        text: "サービス提供者と利用者の間でサービス水準を定めた合意書はどれか。",
        answer: "SLA",
        choices: ["SLA", "NDA", "SLM"],
        explanation: "サービス品質を定めた合意書の事を示しています。"
    },
    {
        id: "X07",
        category: "マネジメント系",
        text: "短い期間で機能を繰り返し開発していく手法はどれか。",
        answer: "アジャイル",
        choices: ["ウォーターフォール", "アジャイル", "V字"],
        explanation: "短期間で繰り返し開発する手法の事を示しています。"
    },
    {
        id: "X08",
        category: "マネジメント系",
        text: "プロジェクト全体の完了日程を左右する最長の工程はどれか。",
        answer: "クリティカルパス",
        choices: ["WBS", "クリティカルパス", "PERT"],
        explanation: "プロジェクト全体期間を左右する最長工程の事を示しています。"
    },
    {
        id: "X09",
        category: "マネジメント系",
        text: "問題の原因を体系的に整理して図で表す手法はどれか。",
        answer: "特性要因図",
        choices: ["散布図", "特性要因図", "管理図"],
        explanation: "問題の原因を体系的に整理する図の事を示しています。"
    },
    {
        id: "X10",
        category: "マネジメント系",
        text: "リスクを発生確率と影響度の2軸で評価する手法はどれか。",
        answer: "リスクマトリクス",
        choices: ["SWOT", "リスクマトリクス", "回帰分析"],
        explanation: "リスクの重要度を評価する手法の事を示しています。"
    },

    {
        id: "X11",
        category: "テクノロジ系",
        text: "電源を切ると保存内容が消えてしまう主記憶装置はどれか。",
        answer: "DRAM",
        choices: ["ROM", "DRAM", "フラッシュ"],
        explanation: "電源を切るとデータが消える揮発性メモリの事を示しています。"
    },
    {
        id: "X12",
        category: "テクノロジ系",
        text: "ドメイン名をIPアドレスに変換する仕組みはどれか。",
        answer: "DNS",
        choices: ["DNS", "DHCP", "FTP"],
        explanation: "ドメイン名とIPアドレスを対応付ける仕組みの事を示しています。"
    },
    {
        id: "X13",
        category: "テクノロジ系",
        text: "データベースの検索を高速化するために利用される仕組みはどれか。",
        answer: "インデックス",
        choices: ["インデックス", "スキーマ", "正規化"],
        explanation: "データ検索を高速化する仕組みの事を示しています。"
    },
    {
        id: "X14",
        category: "テクノロジ系",
        text: "公開鍵と秘密鍵の2つの鍵を用いる暗号方式はどれか。",
        answer: "RSA",
        choices: ["AES", "RSA", "SHA"],
        explanation: "公開鍵と秘密鍵を用いる暗号方式の事を示しています。"
    },
    {
        id: "X15",
        category: "テクノロジ系",
        text: "Webアプリケーションへの攻撃を防ぐために導入される仕組みはどれか。",
        answer: "WAF",
        choices: ["VPN", "WAF", "IDS"],
        explanation: "Webアプリケーションを攻撃から守る仕組みの事を示しています。"
    },
    {
        id: "X16",
        category: "テクノロジ系",
        text: "多数の端末から同時に大量の通信を送り付け、サービスを停止させる攻撃はどれか。",
        answer: "DDoS",
        choices: ["DDoS", "フィッシング", "ブルートフォース"],
        explanation: "複数の端末から分散して行われる攻撃の事を示しています。"
    },
    {
        id: "X17",
        category: "テクノロジ系",
        text: "画像や映像の描画処理を専門に担当する装置はどれか。",
        answer: "GPU",
        choices: ["CPU", "GPU", "NIC"],
        explanation: "画像処理を専門に行う装置の事を示しています。"
    },
    {
        id: "X18",
        category: "テクノロジ系",
        text: "デジタル証明書を発行し、公開鍵の正当性を保証する機関はどれか。",
        answer: "CA",
        choices: ["CA", "SSL", "VPN"],
        explanation: "デジタル証明書を発行する認証機関の事を示しています。"
    },
    {
        id: "X19",
        category: "テクノロジ系",
        text: "情報の内容を第三者に読み取られないようにするための対策はどれか。",
        answer: "暗号化",
        choices: ["暗号化", "冗長化", "バックアップ"],
        explanation: "情報の機密性を確保する対策の事を示しています。"
    },
    {
        id: "X20",
        category: "テクノロジ系",
        text: "不正アクセスを検知して管理者に通知する仕組みはどれか。",
        answer: "IDS",
        choices: ["IDS", "IPS", "DMZ"],
        explanation: "不正侵入を検知する仕組みの事を示しています。"
    },

    {
        id: "X21",
        category: "ストラテジ系",
        text: "製品やサービスの品質を継続的に管理するための国際規格はどれか。",
        answer: "ISO9001",
        choices: ["ISO9001", "ISMS", "ITIL"],
        explanation: "品質マネジメントの国際規格の事を示しています。"
    },
    {
        id: "X22",
        category: "ストラテジ系",
        text: "必要な物を、必要な時に、必要な量だけ生産する方式はどれか。",
        answer: "JIT",
        choices: ["JIT", "OEM", "BPO"],
        explanation: "必要な物を必要な時に生産する方式の事を示しています。"
    },
    {
        id: "X23",
        category: "ストラテジ系",
        text: "業界の競争状況を5つの要因で分析する手法はどれか。",
        answer: "ファイブフォース",
        choices: ["ファイブフォース", "3C", "SWOT"],
        explanation: "業界の競争構造を分析する手法の事を示しています。"
    },
    {
        id: "X24",
        category: "ストラテジ系",
        text: "企業の一定期間における収益と費用を示す財務諸表はどれか。",
        answer: "損益計算書",
        choices: ["損益計算書", "貸借対照表", "CF計算書"],
        explanation: "一定期間の収益と費用を示す財務諸表の事を示しています。"
    },
    {
        id: "X25",
        category: "ストラテジ系",
        text: "複数の企業が共同で出資して設立する新会社を何というか。",
        answer: "JV",
        choices: ["JV", "M&A", "持株会社"],
        explanation: "複数企業が共同で設立する会社の事を示しています。"
    },

    {
        id: "X26",
        category: "マネジメント系",
        text: "プロジェクトにおいて実施する作業の範囲を定義し管理する活動はどれか。",
        answer: "スコープ管理",
        choices: ["スコープ管理", "品質管理", "資源管理"],
        explanation: "プロジェクトの作業範囲を管理する活動の事を示しています。"
    },
    {
        id: "X27",
        category: "マネジメント系",
        text: "組織の業務が適正に行われるように整備される仕組みはどれか。",
        answer: "内部統制",
        choices: ["内部統制", "ITIL", "CMMI"],
        explanation: "組織の健全な運営を確保する仕組みの事を示しています。"
    },
    {
        id: "X28",
        category: "マネジメント系",
        text: "利用者がシステムの使い方を確認するための文書はどれか。",
        answer: "利用マニュアル",
        choices: ["利用マニュアル", "SLA", "要件定義書"],
        explanation: "利用方法をまとめた文書の事を示しています。"
    },
    {
        id: "X29",
        category: "マネジメント系",
        text: "開始日と終了日が定められた一時的な業務活動はどれか。",
        answer: "プロジェクト",
        choices: ["プロジェクト", "運用", "保守"],
        explanation: "期限と目的が明確な一時的活動の事を示しています。"
    },
    {
        id: "X30",
        category: "マネジメント系",
        text: "要求の変化に対応しながら短い期間で開発を繰り返す手法はどれか。",
        answer: "アジャイル",
        choices: ["アジャイル", "ウォーターフォール", "V字"],
        explanation: "短期間で反復しながら進める開発手法の事を示しています。"
    },

    {
        id: "X31",
        category: "テクノロジ系",
        text: "話した内容を文字データに変換する技術はどれか。",
        answer: "音声認識",
        choices: ["音声認識", "OCR", "音声合成"],
        explanation: "音声を文字データに変換する技術の事を示しています。"
    },
    {
        id: "X32",
        category: "テクノロジ系",
        text: "サーバやネットワークなどの基盤を提供するクラウドサービス形態はどれか。",
        answer: "IaaS",
        choices: ["IaaS", "SaaS", "PaaS"],
        explanation: "サーバやネットワークなどの基盤を提供するクラウド形態の事を示しています。"
    },
    {
        id: "X33",
        category: "テクノロジ系",
        text: "データの重複を排除して効率的に管理することを何というか。",
        answer: "冗長排除",
        choices: ["冗長排除", "高速化", "暗号化"],
        explanation: "データの重複をなくす目的の事を示しています。"
    },
    {
        id: "X34",
        category: "テクノロジ系",
        text: "複数の中継点を経由して通信を行う方式はどれか。",
        answer: "マルチホップ",
        choices: ["マルチホップ", "MIMO", "LTE"],
        explanation: "複数の中継点を経由して通信する方式の事を示しています。"
    },
    {
        id: "X35",
        category: "テクノロジ系",
        text: "バックアップを世代ごとに管理する方式はどれか。",
        answer: "GFS",
        choices: ["GFS", "差分", "増分"],
        explanation: "世代ごとにバックアップを管理する方式の事を示しています。"
    },
    {
        id: "X36",
        category: "テクノロジ系",
        text: "Webブラウザ上で動作するスクリプト言語の実行形態はどれか。",
        answer: "ブラウザ実行",
        choices: ["ブラウザ実行", "サーバ専用", "機械語"],
        explanation: "Webブラウザ上で実行されるスクリプト言語の事を示しています。"
    },
    {
        id: "X37",
        category: "テクノロジ系",
        text: "ネットワーク上で機器を識別するための番号はどれか。",
        answer: "IPアドレス",
        choices: ["IPアドレス", "ポート番号", "ドメイン名"],
        explanation: "ネットワーク上で機器を識別する番号の事を示しています。"
    },
    {
        id: "X38",
        category: "テクノロジ系",
        text: "SSD内のデータを完全に消去するための方法はどれか。",
        answer: "Secure Erase",
        choices: ["Secure Erase", "フォーマット", "削除"],
        explanation: "SSDを完全に消去する方法の事を示しています。"
    },
    {
        id: "X39",
        category: "テクノロジ系",
        text: "無線LANのアクセスポイント名を表示しないようにすることによる効果はどれか。",
        answer: "隠蔽",
        choices: ["隠蔽", "暗号化", "高速化"],
        explanation: "無線LANの存在を目立たなくする効果の事を示しています。"
    },
    {
        id: "X40",
        category: "テクノロジ系",
        text: "多数の端末を利用して標的に同時攻撃を行う手法はどれか。",
        answer: "DDoS",
        choices: ["DDoS", "フィッシング", "ブルートフォース"],
        explanation: "複数の端末から分散して行われる攻撃の事を示しています。"
    }
];

