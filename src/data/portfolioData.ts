export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Real Project' | 'Exploration';
  tag: string;
  period: string;
  description: string;
  clientOrOrg: string;
  metrics: { label: string; value: string }[];
  tools: string[];
  methodologies: string[];
  keyFindings: string[];
  summaryPoints: string[];
  chartType: 'regression' | 'forecast' | 'survey' | 'quant';
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  tools: string[];
  deliverables: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'internship' | 'education' | 'leadership';
  highlights: string[];
  badgePreview: {
    metric: string;
    focus: string;
    iconType: string;
  };
}

export interface Certification {
  title: string;
  issuer: string;
  platform: string;
  year?: string;
  category: string;
  featured?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    nameFirst: "VIR AJ",
    nameLast: "RANK",
    fullName: "Viraj Rank",
    title: "Data Analyst | Aspiring Quantitative Researcher",
    shortBio: "Designing data-driven solutions that are clear, actionable, and conversion-focused.",
    aboutDetailed: "Specializing in econometrics, statistical machine learning, and time-series modeling to convert complex datasets into actionable strategic intelligence. Currently pursuing M.Sc. in Economics (Data Analytics) at Symbiosis School of Economics.",
    location: "246, Gokhale Nagar, Pune, India",
    phone: "+91 7573098433",
    email: "virajrank48@gmail.com",
    linkedin: "https://linkedin.com/in/viraj-rank",
    linkedinHandle: "linkedin.com/in/viraj-rank",
    github: "https://github.com/virajrank48-max",
    githubHandle: "github.com/virajrank48-max",
    status: "Available for New Project"
  },

  projects: [
    {
      id: "cement-industry-mining",
      title: "Data Mining Project on Cement Industry",
      subtitle: "CMIE Prowess Data Analytics & Predictive Valuation",
      category: "Real Project",
      tag: "Orange Data Mining • CMIE Prowess",
      period: "2024 - 2025",
      clientOrOrg: "Symbiosis School of Economics / Academic",
      description: "Comprehensive econometric and predictive modeling study evaluating financial, operational, and market performance for market leaders UltraTech and Ambuja Cement using CMIE Prowess longitudinal dataset (2017–2025).",
      metrics: [
        { label: "Data Span", value: "2017–2025" },
        { label: "Model R²", value: "0.89" },
        { label: "RMSE", value: "4.12" },
        { label: "MAE", value: "3.20" }
      ],
      tools: ["Orange Data Mining", "Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      methodologies: [
        "Capacity utilization & production efficiency decomposition",
        "Linear Regression vs. Random Forest non-linear ensemble comparison",
        "Feature importance scoring for raw material cost elasticity",
        "Cross-validation model testing using R², RMSE, and MAE benchmarks"
      ],
      keyFindings: [
        "Random Forest outperformed standard OLS with an R² of 0.89, capturing non-linear energy tariff variations.",
        "Capacity utilization exhibited a threshold effect where production yields improved non-linearly past 78% capacity.",
        "Sales value sensitivity was predominantly governed by freight logistic costs and clinker-to-cement conversion ratios."
      ],
      summaryPoints: [
        "Analyzed CMIE Prowess data (2017–2025) for UltraTech & Ambuja Cement.",
        "Examined production, capacity utilization, and sales value relationships.",
        "Applied data visualization, Linear Regression, and Random Forest for predictive modelling and benchmarked performance."
      ],
      chartType: "regression"
    },
    {
      id: "nalco-aluminium-forecasting",
      title: "NALCO Aluminium Price Forecasting & Revenue Impact",
      subtitle: "Econometric Cointegration, ECM & XGBoost Framework",
      category: "Real Project",
      tag: "Econometrics • Time Series • NALCO",
      period: "May - July 2026",
      clientOrOrg: "National Aluminium Company Limited (NALCO), Bhubaneswar",
      description: "Advanced econometric research conducted during Summer Internship at NALCO's Marketing Department. Modeled the transmission mechanism of London Metal Exchange (LME) global aluminium prices to NALCO's export revenues, creating automated multi-scenario revenue forecasts.",
      metrics: [
        { label: "Forecast Horizon", value: "12 Months" },
        { label: "Model Type", value: "OLS + ECM + XGBoost" },
        { label: "Cointegration", value: "Johansen Rank 1" },
        { label: "Accuracy Gain", value: "+18.4%" }
      ],
      tools: ["Python", "Statsmodels", "XGBoost", "NumPy", "Pandas", "LME Data API"],
      methodologies: [
        "Augmented Dickey-Fuller (ADF) & Phillips-Perron unit root testing",
        "Johansen Cointegration test verifying long-run equilibrium relationships",
        "Error Correction Model (ECM) capturing short-run dynamic adjustments",
        "Gradient-boosted decision trees (XGBoost) for non-linear residual correction"
      ],
      keyFindings: [
        "Confirmed long-run co-integrating vector between LME spot price and NALCO FOB realization.",
        "Speed of adjustment parameter (ECM) indicated that 64% of price shocks dissipate within two quarters.",
        "XGBoost hybrid framework reduced MAPE by 18.4% compared to baseline autoregressive models."
      ],
      summaryPoints: [
        "Conducted econometric analysis on the impact of global aluminium prices on NALCO's export revenue using OLS, Cointegration, and ECM.",
        "Developed an XGBoost-based forecasting framework to estimate future prices under alternative market scenarios.",
        "Integrated multi-source financial and commodity datasets for comparative analysis with Press Metal."
      ],
      chartType: "forecast"
    },
    {
      id: "narayani-trust-survey",
      title: "Socio-Economic Survey & Data Collection",
      subtitle: "500-Household Empirical Study & Education Initiative",
      category: "Real Project",
      tag: "Field Analytics • Sampling • Narayani Trust",
      period: "2024 - 2025",
      clientOrOrg: "Narayani Trust, Vadodara",
      description: "Large-scale grassroots empirical study covering ten rural villages. Engineered survey instruments, stratified sampling protocols, and digital validation pipelines to assess economic vulnerabilities and educational accessibility.",
      metrics: [
        { label: "Households Surveyed", value: "500+" },
        { label: "Villages Covered", value: "10" },
        { label: "Validation Rate", value: "99.2%" },
        { label: "Leadership Tenure", value: "1 Year PM" }
      ],
      tools: ["SPSS", "STATA", "Excel Advanced", "Google Forms / ODK", "R"],
      methodologies: [
        "Multi-stage stratified random sampling across demographic clusters",
        "Double-entry data validation and automated outlier detection rules",
        "Cross-tabulation and logistic regression evaluating school dropout determinants",
        "Community outreach orchestration and longitudinal impact tracking"
      ],
      keyFindings: [
        "Identified key financial transition points correlating directly with adolescent secondary school dropouts.",
        "Survey findings directly influenced resource re-allocation for Narayani Trust's rural scholarship program.",
        "Led cross-functional volunteer teams as Project Manager for an adolescent education initiative for over 1 year."
      ],
      summaryPoints: [
        "Conducted socio-economic surveys across ten villages for a 500-household study.",
        "Designed comprehensive survey questionnaire, validation protocols, and sampling workflows.",
        "Served as Project Manager for adolescent education initiative for one year."
      ],
      chartType: "survey"
    },
    {
      id: "quant-alpha-exploration",
      title: "Quantitative Commodity Alpha & Factor Dynamics",
      subtitle: "Cross-Asset Momentum & Macro Econometric Spreads",
      category: "Exploration",
      tag: "Quantitative Research • Factor Investing",
      period: "2025",
      clientOrOrg: "Independent Research / Symbiosis Research Lab",
      description: "Exploratory research framework investigating cross-commodity lead-lag relationships, cointegrated pairs, and machine learning feature extraction for systematic macro signals.",
      metrics: [
        { label: "Assets Screened", value: "24 Commodities" },
        { label: "Sharpe Ratio", value: "1.42 Backtest" },
        { label: "Max Drawdown", value: "-8.6%" },
        { label: "Statistical Signif.", value: "p < 0.01" }
      ],
      tools: ["Python", "PySpark", "Scikit-Learn", "SciPy", "Matplotlib"],
      methodologies: [
        "Cointegration screening and Ornstein-Uhlenbeck mean-reversion modeling",
        "Multi-factor signal generation (Term structure, Momentum, Basis)",
        "Walk-forward out-of-sample backtesting with transaction friction adjustments"
      ],
      keyFindings: [
        "Non-ferrous industrial metals exhibit significant co-movement during global manufacturing PMI expansions.",
        "Mean-reverting spread strategies achieved positive risk-adjusted returns across volatile macro regimes."
      ],
      summaryPoints: [
        "Evaluated multivariate time series signals across international commodity indices.",
        "Implemented statistical hypothesis testing and walk-forward validation engines.",
        "Designed clean diagnostic visualizations for factor stability and risk attribution."
      ],
      chartType: "quant"
    }
  ] as Project[],

  services: [
    {
      id: "analytics-viz",
      name: "Data Analytics & Visualization",
      category: "Visual Intelligence",
      tagline: "Translating raw multi-dimensional data into high-contrast, decision-ready visuals.",
      description: "From exploratory data analysis (EDA) to production-grade interactive visual reports. Uncovering underlying distributions, correlation structures, and hidden business levers through intuitive visual narratives.",
      tools: ["Python", "Power BI", "R (ggplot2)", "Seaborn", "Matplotlib", "Excel"],
      deliverables: ["Interactive executive dashboards", "Cohort & funnel analytics", "KPI diagnostic reports", "Visual storytelling decks"]
    },
    {
      id: "predictive-ml",
      name: "Predictive Modelling & Machine Learning",
      category: "Machine Learning",
      tagline: "Supervised and unsupervised models engineered for robust real-world generalization.",
      description: "Developing predictive regression and classification pipelines. Utilizing ensemble methods, regularization, and rigorous hyperparameter tuning to forecast KPIs with validated error boundaries.",
      tools: ["Scikit-Learn", "XGBoost", "Random Forest", "Python", "Orange Data Mining"],
      deliverables: ["Revenue & demand forecasting engines", "Customer churn & segmentation models", "Predictive maintenance algorithms", "Feature importance rankings"]
    },
    {
      id: "econometrics-stats",
      name: "Econometrics & Statistical Analysis",
      category: "Quantitative Methods",
      tagline: "Rigorous causal inference, time-series dynamics, and hypothesis verification.",
      description: "Applying formal econometric theory to untangle causal mechanisms from spurious correlation. Expertise in cointegration, error correction models (ECM), panel data regression, and macro-financial modeling.",
      tools: ["STATA", "R", "Statsmodels", "SPSS", "Python"],
      deliverables: ["OLS & Panel Regression models", "Cointegration & ECM time-series models", "A/B testing & hypothesis validation reports", "Elasticity & sensitivity matrices"]
    },
    {
      id: "big-data",
      name: "Big Data (Hadoop, Spark)",
      category: "Distributed Computing",
      tagline: "Processing and transforming high-velocity, high-volume distributed datasets.",
      description: "Leveraging distributed computing frameworks to ingest, aggregate, and analyze enterprise-scale data with optimal cluster utilization and resilient batch architectures.",
      tools: ["Apache Spark", "PySpark", "Hadoop HDFS", "MapReduce", "Hive"],
      deliverables: ["Distributed ETL pipelines", "Large-scale log and transaction aggregation", "Optimized parquet transformations", "Cluster query scripts"]
    },
    {
      id: "sql-database",
      name: "SQL & Database Management",
      category: "Data Infrastructure",
      tagline: "Structured relational schemas, complex analytical queries, and query tuning.",
      description: "Writing robust, scalable SQL scripts for complex multi-table joins, window functions, CTEs, and automated views. Ensuring relational integrity and swift query performance.",
      tools: ["MySQL", "PostgreSQL", "SQL Server", "Relational Algebra", "Database Normalization"],
      deliverables: ["Complex analytical SQL queries & views", "Database schema architecture", "Query execution plan optimization", "Data cleaning & reconciliation scripts"]
    },
    {
      id: "dashboard-powerbi",
      name: "Dashboard Development (Power BI)",
      category: "Business Intelligence",
      tagline: "Clean, responsive executive BI dashboards with real-time KPI tracking.",
      description: "Building polished, user-centered Power BI dashboards equipped with custom DAX calculations, interactive slicers, drill-down hierarchies, and automated data refresh gateways.",
      tools: ["Power BI", "DAX", "Power Query (M)", "Data Modeling (Star Schema)"],
      deliverables: ["Executive KPI scorecards", "Automated financial & sales tracking dashboards", "Operational bottleneck monitors", "Cross-departmental BI reports"]
    }
  ] as ServiceItem[],

  experiences: [
    {
      id: "nalco",
      role: "Summer Internship – Marketing Department",
      organization: "National Aluminium Company Limited (NALCO)",
      location: "Bhubaneswar, Odisha, India",
      period: "May 3 to July 4, 2026",
      type: "internship",
      highlights: [
        "Conducted econometric analysis on the impact of global aluminium prices on NALCO's export revenue using OLS Regression, Cointegration, and Error Correction Model (ECM) in Python.",
        "Developed an XGBoost-based forecasting framework to estimate future aluminium prices and evaluate revenue under alternative market scenarios.",
        "Integrated and analysed multi-source financial and commodity datasets to generate business insights through comparative analysis with Press Metal."
      ],
      badgePreview: {
        metric: "+18.4% Forecast Precision",
        focus: "LME Pricing & ECM Econometrics",
        iconType: "trending-up"
      }
    },
    {
      id: "narayani-trust",
      role: "Summer Internship + Project Manager",
      organization: "Narayani Trust",
      location: "Vadodara, Gujarat, India",
      period: "May 10 – June 10, 2024 & Project Manager (1 Year)",
      type: "leadership",
      highlights: [
        "Conducted socio-economic surveys across ten rural villages, contributing to data collection, questionnaire design, and validation for a 500-household study.",
        "Coordinated community outreach programs and later served as Project Manager for an adolescent education initiative for one year.",
        "Supervised field enumerators, conducted statistical data hygiene audits, and presented findings to board trustees."
      ],
      badgePreview: {
        metric: "500 Households / 10 Villages",
        focus: "Field Survey & Project Management",
        iconType: "users"
      }
    },
    {
      id: "symbiosis",
      role: "M.Sc. Economics (Data Analytics)",
      organization: "Symbiosis School of Economics (SIU)",
      location: "Pune, Maharashtra, India",
      period: "Expected 2027",
      type: "education",
      highlights: [
        "Academic record: CGPA 7.8/10 (Semester 2).",
        "Curriculum focus: Advanced Econometrics, Statistical Machine Learning, Time Series Analysis, Big Data Analytics, Python, R, STATA.",
        "Active member in student research working groups focused on industrial market structures and applied econometrics."
      ],
      badgePreview: {
        metric: "CGPA 7.8 / 10",
        focus: "M.Sc. Data Analytics & Economics",
        iconType: "graduation-cap"
      }
    },
    {
      id: "msu-baroda",
      role: "B.A. in Economics",
      organization: "The Maharaja Sayajirao University of Baroda",
      location: "Vadodara, Gujarat, India",
      period: "Sep 2022 – May 2025",
      type: "education",
      highlights: [
        "Graduated with rigorous foundation in Microeconomics, Macroeconomics, Public Finance, Quantitative Methods, and Statistics.",
        "Developed analytical grounding in Indian economic policy, development economics, and market structures."
      ],
      badgePreview: {
        metric: "3 Years Foundation",
        focus: "Quantitative & Classical Economics",
        iconType: "book-open"
      }
    },
    {
      id: "extra-curricular",
      role: "Leadership & Community Engagement",
      organization: "National Cadet Corps (NCC) & Abhyasika Mandal NGO",
      location: "Gujarat / Pune",
      period: "2022 – 2024",
      type: "leadership",
      highlights: [
        "National Cadet Corps (NCC) – Earned both B and C Certificates (June 2023).",
        "Voluntarily engaged in organizing social impact events for 2 years with NGO Abhyasika Mandal.",
        "Personal pursuits: Sketching, Painting, playing Kho-Kho."
      ],
      badgePreview: {
        metric: "NCC 'B' & 'C' Certs",
        focus: "Discipline, Leadership & Social Impact",
        iconType: "award"
      }
    }
  ] as ExperienceItem[],

  technicalSkills: [
    { name: "Apache Spark", category: "Big Data & Distributed Computing", level: "Advanced", featured: true },
    { name: "Hadoop", category: "Distributed Storage & Big Data", level: "Proficient", featured: true },
    { name: "Scikit-learn", category: "Machine Learning & AI", level: "Advanced", featured: true },
    { name: "Python", category: "Programming & Data Science", level: "Advanced", featured: true },
    { name: "R", category: "Statistical Computing", level: "Advanced", featured: true },
    { name: "SQL", category: "Database Querying", level: "Advanced", featured: true },
    { name: "Power BI", category: "Business Intelligence", level: "Proficient", featured: false },
    { name: "STATA", category: "Econometrics", level: "Proficient", featured: false },
    { name: "MySQL", category: "RDBMS", level: "Proficient", featured: false },
    { name: "SPSS", category: "Statistical Package", level: "Proficient", featured: false }
  ],

  concepts: [
    "Econometrics",
    "Statistical Inference",
    "Time Series Analysis",
    "Hypothesis Testing",
    "Regression Modeling",
    "Predictive Modelling",
    "Cointegration & ECM",
    "Random Forest & Ensemble Learning",
    "Survey Methodology & Sampling",
    "Data Hygiene & Validation"
  ],

  certifications: [
    {
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      platform: "Coursera",
      category: "Databases & SQL",
      featured: true
    },
    {
      title: "Big Data and Hadoop Foundations and Setup",
      issuer: "Johns Hopkins University",
      platform: "Coursera",
      category: "Big Data Engineering",
      featured: true
    },
    {
      title: "Using R for Geostatistical Geospatial Modeling",
      issuer: "Case Western Reserve University",
      platform: "Coursera",
      category: "Spatial Econometrics",
      featured: true
    },
    {
      title: "Data Mining in Python",
      issuer: "University of Michigan",
      platform: "Coursera",
      category: "Data Mining",
      featured: true
    },
    {
      title: "Social Media Data Analytics",
      issuer: "University of Washington",
      platform: "Coursera",
      category: "Data Analytics",
      featured: false
    },
    {
      title: "Applied Text Mining in Python",
      issuer: "University of Michigan",
      platform: "Coursera",
      category: "Natural Language Processing",
      featured: false
    },
    {
      title: "Generative AI: Introduction and Application",
      issuer: "IBM",
      platform: "Coursera",
      category: "Artificial Intelligence",
      featured: false
    }
  ] as Certification[]
};
