import { Language } from "@/contexts/LanguageContext";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Teddy Richol",
      title: "Data Scientist | Analyst & Data Engineer",
      subtitle:
        "I build intelligent data solutions that combine  machine learning, data engineering and NLP to solve real-world problems.",
      cta: "View My Work",
      contact: "Get in Touch",
    },
    about: {
      title: "About Me",
      text: `I am a data scientist specialized in machine learning, Natural Language Processing,  
data engineering, and applied analytics. I’ve worked on real-world problems such as CV–job matching, 
geospatial analysis for public services, and environmental data projects in collaboration with research labs. 
I enjoy turning messy data into structured insights and building tools that are actually used by people.`,
    },
    skills: {
      title: "Technical Skills",
      categories: {
        languages: "Languages",
        frameworks: "ML / NLP Frameworks",
        tools: "Tools & Platforms",
        techniques: "Techniques",
      },
      items: {
        languages: ["Python", "SQL", "R", "Bash"],
        frameworks: [
          "spaCy",
          "Sentence-Transformers",
          "Scikit-learn",
          "TensorFlow",
          "PyTorch",
        ],
        tools: ["Git", "Docker", "VS Code", "Pandas", "Spark", "Streamlit"],
        techniques: [
          "NLP preprocessing",
          "Semantic embeddings",
          "Clustering",
          "Linear & tree-based models",
          "Geospatial analysis (GeoJSON)",
        ],
      },
    },
    experience: {
      title: "Experience",
      positions: [
        {
          role: "Data Scientist & NLP Engineer",
          company: "Mission Locale Nord Martinique",
          period: "2024",
          description: `Developed an end-to-end NLP system to automatically analyze CVs (PDF/Word), 
clean text, generate multilingual embeddings, and match candidates to job offers using semantic similarity. 
Built geospatial tools to detect whether job seekers live in QPV priority areas based on imperfect local addresses, 
using libpostal and open data from data.gouv. Designed a QR-code based check-in system to streamline 
candidate–employer meetings using the i-milo SQL-based software.`,
        },
        {
          role: "Computer Science & Excel Instructor",
          company: "Carro Foresta Sugidaira Kazorane, Nagano (Japan)",
          period: "2023",
          description: `Delivered introductory computing and Excel courses to a Japanese audience. 
Prepared course material in Japanese and supported learners during hands-on sessions over a two-month period.`,
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "NLP CV–Job Offer Matching System",
          description:
            "End-to-end Python NLP system that extracts text from CVs, cleans it, generates multilingual embeddings, and ranks job offers by semantic similarity and detected skills.",
          tags: ["Python", "spaCy", "Sentence-Transformers", "NLP"],
        },
        {
          title: "ICARUS CO₂ Probe – Data & Analytics (CNRS Collaboration)",
          description:
            "Data collection and analysis pipeline for a CO₂ balloon probe launched over Paris, processing sensor data and modeling pollution levels for an environmental report.",
          tags: ["Python", "Pandas", "Data Analysis"],
        },
        {
          title: "Real Estate Price Prediction (Valeurs Foncières)",
          description:
            "Exploratory analysis and baseline models on French property sales (Vitry 2015–2020), including preprocessing, feature engineering, and studying the impact of COVID-19.",
          tags: ["Python", "Pandas", "Machine Learning"],
        },
        {
          title: "Global Anthem Explorer – Interactive Globe",
          description:
            "In-progress data engineering project with a 3D interactive globe where each country reveals its historical national anthems, metadata, and audio playback. Includes web scraping, data cleaning, audio handling, and ETL pipelines.",
          tags: ["Data Engineering", "Web Scraping", "API", "ETL", "Frontend"],
        },
      ],
    },
    footer: {
      rights: "© 2025 All rights reserved.",
      contact: "Contact",
    },
  },

  fr: {
    nav: {
      about: "À Propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
      getInTouch: "Me Contacter",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Teddy Richol",
      title: "Data Scientist | Analyst & Data Engineer",
      subtitle:
        "Je conçois des solutions mêlant  data science, ingénierie data et NLP pour transformer des données brutes en outils concrets.",
      cta: "Voir mes projets",
      contact: "Me contacter",
    },
    about: {
      title: "À Propos de Moi",
      text: `Data Scientist spécialisé en machine learning, traitement automatique du langage (NLP)  
et en data engineering. J’ai travaillé sur des problématiques variées : matching CV–offres d’emploi, 
analyse géospatiale (QPV) pour le secteur public, projets de données environnementales en collaboration 
avec des laboratoires de recherche.  
J’apprécie particulièrement le fait de partir de données imparfaites pour construire des pipelines fiables 
et des outils utiles aux équipes métier.`,
    },
    skills: {
      title: "Compétences Techniques",
      categories: {
        languages: "Langages",
        frameworks: "Frameworks ML / NLP",
        tools: "Outils & Plateformes",
        techniques: "Techniques",
      },
      items: {
        languages: ["Python", "SQL", "R", "Bash"],
        frameworks: [
          "spaCy",
          "Sentence-Transformers",
          "Scikit-learn",
          "TensorFlow",
          "PyTorch",
        ],
        tools: ["Git", "Docker", "VS Code", "Pandas", "Spark", "Streamlit"],
        techniques: [
          "Prétraitement NLP",
          "Similarité sémantique",
          "Clustering",
          "Modèles linéaires / arbres",
          "Analyse géospatiale (GeoJSON)",
        ],
      },
    },
    experience: {
      title: "Expérience",
      positions: [
        {
          role: "Chargé Analyse de Données & Data Scientist",
          company: "Mission Locale Nord Martinique",
          period: "2024",
          description: `Développement d’une application NLP analysant des CV (PDF/Word), 
nettoyant les textes (lemmatisation, stopwords) et calculant la similarité avec les offres d’emploi 
via des embeddings sémantiques multilingues.  
Mise en place d’outils géospatiaux pour identifier les demandeurs en zone QPV, en traitant la particularité 
des adresses martiniquaises grâce à libpostal et aux données de data.gouv (LOI 3DS, article 169).  
Conception d’un système d’émargement par QR codes pour les rencontres candidats–employeurs (via i-milo).`,
        },
        {
          role: "Enseignement de l’outil informatique (Excel)",
          company: "Carro Foresta Sugadaira Kazorare, Nagano – Japon",
          period: "2023",
          description: `Enseignement de l’outil informatique et initiation à Excel à un public japonais, 
préparation des cours en japonais et animation du programme sur une période de deux mois.`,
        },
      ],
    },
    projects: {
      title: "Projets Phares",
      items: [
        {
          title: "Système NLP de Rapprochement CV–Offres d’Emploi",
          description:
            "Outil Python de traitement automatique du langage pour extraire, analyser et rapprocher les CV des offres selon leur similarité sémantique et les compétences détectées.",
          tags: ["Python", "spaCy", "Sentence-Transformers", "NLP"],
        },
        {
          title: "Projet ICARUS – Sondes CO₂ (Collaboration avec le CNRS)",
          description:
            "Projet de ballon sonde pour mesurer le taux de CO₂ au-dessus de Paris, avec traitement, modélisation et restitution des données pour un rapport sur la pollution.",
          tags: ["Python", "Pandas", "Analyse de données"],
        },
        {
          title: "Prédiction de Valeurs Foncières (Immobilier)",
          description:
            "Étude des ventes immobilières à Vitry (2015–2020) : nettoyage, analyse exploratoire, modélisation et analyse de l’impact de la COVID-19 sur le marché.",
          tags: ["Python", "Pandas", "Machine Learning"],
        },
        {
          title: "Global Anthem Explorer – Globe Interactif",
          description:
            "Projet data engineering en cours : globe 3D interactif permettant d’explorer l’historique des hymnes nationaux par pays, avec métadonnées, audio et pipelines de collecte (web scraping, ETL).",
          tags: ["Data Engineering", "Web Scraping", "API", "ETL", "Frontend"],
        },
      ],
    },
    footer: {
      rights: "© 2025 Tous droits réservés.",
      contact: "Contact",
    },
  },

  ja: {
    nav: {
      about: "自己紹介",
      skills: "スキル",
      experience: "経験",
      projects: "プロジェクト",
      contact: "お問い合わせ",
      getInTouch: "お問い合わせ",
    },
    hero: {
      greeting: "こんにちは、",
      name: "テディ・リショル です",
      title: "データサイエンティスト・データエンジニア",
      subtitle:
        "NLP・機械学習・データエンジニアリングを組み合わせ、実社会の課題を解決するデータソリューションを構築しています。",
      cta: "プロジェクトを見る",
      contact: "お問い合わせ",
    },
    about: {
      title: "自己紹介",
      text: `NLP、機械学習、データエンジニアリングに強みを持つデータサイエンティストです。
公共機関での分析業務や研究機関との共同プロジェクトなどを通して、
CVと求人のマッチング、地理空間解析（QPV）、環境データ分析などに取り組んできました。
複雑でノイズの多いデータから意味のある情報を抽出し、実務に役立つツールへと落とし込むことを得意としています。`,
    },
    skills: {
      title: "技術スキル",
      categories: {
        languages: "プログラミング言語",
        frameworks: "ML / NLP フレームワーク",
        tools: "ツール・プラットフォーム",
        techniques: "技術",
      },
      items: {
        languages: ["Python", "SQL", "R", "Bash"],
        frameworks: [
          "spaCy",
          "Sentence-Transformers",
          "Scikit-learn",
          "TensorFlow",
          "PyTorch",
        ],
        tools: ["Git", "Docker", "VS Code", "Pandas", "Spark", "Streamlit"],
        techniques: [
          "NLP前処理",
          "意味的類似度",
          "クラスタリング",
          "線形モデル・決定木",
          "地理空間解析（GeoJSON）",
        ],
      },
    },
    experience: {
      title: "経験",
      positions: [
        {
          role: "データサイエンティスト・NLPエンジニア",
          company: "ミッション・ローカル北マルティニーク",
          period: "2024年",
          description: `PDF/DOCXの履歴書からテキストを抽出し、NLP前処理・埋め込み生成・
求人票との意味的マッチングを行うシステムを開発。
マルティニーク特有の住所表記に対応しつつ、libpostalやdata.gouvのオープンデータを活用して
QPV（優先地域）判定のための地理情報ツールを構築。
さらに、i-miloを用いたQRコードによる出席管理システムも設計。`,
        },
        {
          role: "コンピュータ基礎（Excel）講師",
          company: "Carro Foresta Sugadaira Kazorare（長野県）",
          period: "2023年",
          description:
            "日本人受講者向けに、コンピュータ基礎およびExcel入門コースを担当。日本語で教材を作成し、約2ヶ月間の講座を実施。",
        },
      ],
    },
    projects: {
      title: "注目プロジェクト",
      items: [
        {
          title: "NLPによる履歴書–求人マッチングシステム",
          description:
            "履歴書テキストの抽出・前処理・埋め込み生成を行い、求人票との意味的類似度に基づいてマッチングを行うPythonベースのNLPシステム。",
          tags: ["Python", "spaCy", "Sentence-Transformers", "NLP"],
        },
        {
          title: "ICARUS CO₂ プロジェクト（CNRS共同研究）",
          description:
            "CO₂センサーを搭載した観測気球のデータ処理・解析を担当し、2018年のパリにおける大気汚染レポート作成のためのデータセットを構築。",
          tags: ["Python", "Pandas", "データ解析"],
        },
        {
          title: "不動産価格予測（Valeurs Foncières）",
          description:
            "フランス・Vitry地域（2015〜2020年）の不動産取引データを対象に、前処理・特徴量作成・機械学習モデル化を実施し、COVID-19の影響も分析。",
          tags: ["Python", "Pandas", "機械学習"],
        },
        {
          title: "Global Anthem Explorer（グローバル国歌アプリ）",
          description:
            "データエンジニアリングの習作として開発中。3Dインタラクティブ地球儀から各国を選ぶと、その国の歴代国歌・メタデータ・音声再生が表示されるアプリ。Webスクレイピング、データ整形、ETLパイプライン構築などを含む。",
          tags: ["Data Engineering", "Web Scraping", "API", "ETL", "Frontend"],
        },
      ],
    },
    footer: {
      rights: "© 2025 All rights reserved.",
      contact: "お問い合わせ",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
