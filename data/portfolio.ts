export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: string;
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
  shortDescription: string;
  spotlight: string;
  tools: string[];
  previewPoints: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  architectureSteps?: {
    step: string;
    label: string;
    desc: string;
  }[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  impact: string;
  metrics: {
    label: string;
    value: string;
  }[];
  outcomes: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
  isCurrent?: boolean;
};

export type SkillGroup = {
  title: string;
  count: string;
  items: string[];
};

export type Certification = {
  title: string;
  issuer: string;
};

export const siteConfig = {
  name: "Kartik Parasher",
  role: "Data & AI Engineer",
  subRole: "Junior Data Scientist",
  email: "Kartikparasher2001@gmail.com",
  phone: "+91 8969809515",
  location: "Noida / Jamshedpur, India",
  timezone: "UTC+05:30",
  status: "Open to Data & AI Engineer roles",
  githubUser: "KartikParasher01",
  github: "https://github.com/KartikParasher01",
  linkedin: "https://www.linkedin.com/in/kartikparasher",
  resumeUrl: "/Kartik Parasher_resume.pdf",
  summary:
    "Data & AI Engineer skilled in Python, SQL, PySpark, ETL, Airflow, FastAPI, Azure OpenAI, and Pinecone. Experienced in building production-oriented data pipelines, REST APIs, AI-powered applications, and search systems, with hands-on experience across AWS and Azure."
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const typedPhrases = [
  "Data & AI Engineer · ETL, PySpark & LLM Systems",
  "I build production data & AI pipelines.",
  "From large-scale deduplication to vector search.",
  "Open to Data & AI Engineer roles →"
];

export const aboutData = {
  bioParagraphs: [
    "I am a Data & AI Engineer and Junior Data Scientist focused on designing robust data pipelines, scalable search systems, and applied AI applications. My work spans high-throughput PySpark distributed computing, automated Airflow orchestration across AWS and Azure, and production-facing REST APIs.",
    "At TradeIndia, I engineered a PySpark-based deduplication system cutting processing time by ~80% on multi-million row datasets, built a FastAPI vector search microservice powered by Azure OpenAI embeddings and Pinecone, and implemented Generative AI workflows for catalog discoverability.",
    "I hold a Bachelor of Business Administration from Birla Institute of Technology (BIT) (GPA: 7.29) and continuous technical training across PW Skills, HackerRank, and BIT Mesra. I focus on building systems where precision, scalability, and measurable business impact meet."
  ],
  motto: "# Turn complex raw data into high-signal production systems",
  rightNow: [
    { key: "building", val: "ResearchPilot AI · autonomous web intelligence agent" },
    { key: "scaling", val: "PySpark ETL · ~80% faster B2B deduplication" },
    { key: "indexing", val: "Vector Search · FastAPI + Pinecone + Azure OpenAI" },
    { key: "status", val: "open_to_roles = True" }
  ],
  interests: [
    "PySpark Big Data",
    "Airflow Orchestration",
    "Vector Search & Pinecone",
    "Agentic Workflows",
    "LLM Fine-Tuning",
    "ETL Architecture",
    "Cloud Pipelines"
  ]
};

export const careerTimeline: TimelineItem[] = [
  {
    year: "2021 — 2024",
    title: "Bachelor of Business Administration",
    organization: "Birla Institute of Technology (BIT), Ranchi",
    description: "Cumulative GPA: 7.29. Built a quantitative foundation in business analytics, operations research, statistics, and decision systems."
  },
  {
    year: "MAY 2023 — JULY 2023",
    title: "Intern — RDE Norms Analysis Project",
    organization: "Tata Steel Limited, Jamshedpur",
    description: "Analyzed impact of emission norms on product demand to identify customer preference shifts. Evaluated product alignment with regulatory changes to identify segments with ~10% growth potential."
  },
  {
    year: "AUG 2025 — FEB 2026",
    title: "Intern – Trainee-Data Science",
    organization: "TradeIndia, Noida",
    description: "Cleaned and validated scraped external datasets, matching records against internal company data to identify and tag qualified leads for sales outreach (~1 day per cycle)."
  },
  {
    year: "FEB 2026 — PRESENT",
    title: "Junior Data Scientist",
    organization: "TradeIndia, Noida",
    description: "Designed PySpark deduplication pipeline cutting processing time by ~80%. Automated Airflow DAGs across AWS Glue and Azure Batch. Built FastAPI vector search API using Azure OpenAI and Pinecone.",
    isCurrent: true
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Engineering",
    count: "07",
    items: [
      "ETL Pipelines",
      "Data Validation",
      "Deduplication",
      "Data Matching",
      "EDA",
      "Apache Airflow",
      "PySpark"
    ]
  },
  {
    title: "Programming & Databases",
    count: "06",
    items: [
      "Python (Pandas, NumPy)",
      "PySpark",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "BigQuery"
    ]
  },
  {
    title: "AI & Application Development",
    count: "07",
    items: [
      "FastAPI",
      "Pydantic",
      "Gradio",
      "Azure OpenAI",
      "Pinecone",
      "LLM Applications",
      "Prompt Engineering"
    ]
  },
  {
    title: "Cloud & Deployment",
    count: "05",
    items: ["AWS S3", "AWS Glue", "Azure Batch", "Render", "Docker"]
  },
  {
    title: "Visualization & Reporting",
    count: "05",
    items: [
      "Power BI",
      "MS Excel (Advanced)",
      "PowerPoint",
      "EDA",
      "Statistical Segmentation"
    ]
  },
  {
    title: "Tools & Certifications",
    count: "06",
    items: [
      "GitHub",
      "Docker",
      "PW Skills Data Analytics",
      "HackerRank SQL Intermediate",
      "LinkedIn Excel",
      "Deloitte / Tata Simulations"
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "researchpilot-ai",
    title: "ResearchPilot AI — Web Research Assistant",
    category: "AI & Web Intelligence",
    year: "2026",
    status: "LIVE ON RENDER",
    repoUrl: "https://github.com/KartikParasher01/ResearchPilot-AI",
    liveUrl: "https://researchpilot-ai.onrender.com",
    featured: true,
    shortDescription:
      "AI-powered web research assistant that converts user questions into targeted search queries, retrieves web sources, scrapes relevant content, and generates structured research reports using an LLM.",
    spotlight:
      "Implemented a modular research pipeline with query planning, URL deduplication, web scraping, source attribution, confidence scoring, and Pydantic-based response validation. Deployed on Render with Gradio UI.",
    tools: [
      "Python",
      "Gradio",
      "Groq / OpenAI API",
      "Tavily Search",
      "BeautifulSoup",
      "Pydantic",
      "GitHub",
      "Render"
    ],
    previewPoints: [
      "Converts complex user inquiries into targeted search queries via automated query planning.",
      "Performs real-time web scraping, URL deduplication, and source attribution with confidence scoring.",
      "Enforces schema compliance and deterministic report formatting using Pydantic validation.",
      "Deployed on Render with a public web interface using Gradio and production-ready environment configuration."
    ],
    metrics: [
      { label: "Architecture", value: "Multi-Source Agentic" },
      { label: "Validation", value: "Pydantic Schema Strict" },
      { label: "Deployment", value: "Render Live Public Web" },
      { label: "API Engines", value: "Tavily + Groq LLM" }
    ],
    architectureSteps: [
      {
        step: "01",
        label: "Query Planner",
        desc: "Transforms natural language inquiries into decomposed multi-hop search queries."
      },
      {
        step: "02",
        label: "Tavily & URL Scraper",
        desc: "Retrieves high-signal web sources, deduplicates URLs, and scrapes content with BeautifulSoup."
      },
      {
        step: "03",
        label: "Pydantic Validator",
        desc: "Enforces strict response schema, source attribution, and algorithmic confidence scoring."
      },
      {
        step: "04",
        label: "Groq LLM Synthesis",
        desc: "Generates audit-ready structured markdown research reports with verified citations."
      }
    ]
  },
  {
    slug: "pyspark-deduplication-pipeline",
    title: "PySpark B2B Deduplication & Record Matching",
    category: "Big Data Engineering",
    year: "2026",
    status: "PRODUCTION",
    repoUrl: "https://github.com/KartikParasher01",
    featured: false,
    shortDescription:
      "Designed and deployed a distributed PySpark-based deduplication pipeline to match large-scale B2B datasets at TradeIndia, cutting processing time by ~80%.",
    spotlight:
      "Engineered SHA-256 hash matching and partition tuning on multi-million row B2B datasets across AWS S3 and AWS Glue.",
    tools: ["PySpark", "Apache Airflow", "AWS Glue", "AWS S3", "Python"],
    previewPoints: [
      "Slashing batch runtime from 14.5 hours to 2.8 hours through distributed partition pruning.",
      "Automated recurring execution using Apache Airflow DAGs and AWS Glue serverless compute."
    ],
    metrics: [
      { label: "Speedup", value: "~80% cut in runtime" },
      { label: "Scale", value: "Multi-million records" },
      { label: "Orchestration", value: "Apache Airflow" }
    ]
  },
  {
    slug: "fastapi-vector-search",
    title: "TradeIndia Semantic Product Search API",
    category: "AI & Vector Search",
    year: "2026",
    status: "PRODUCTION",
    repoUrl: "https://github.com/KartikParasher01",
    featured: false,
    shortDescription:
      "Built a FastAPI vector search microservice enabling AI-driven semantic product search across TradeIndia's product catalog using Azure OpenAI embeddings and Pinecone.",
    spotlight:
      "Delivered sub-50ms query latency with dynamic metadata filtering across 1,000+ commercial categories.",
    tools: [
      "FastAPI",
      "Azure OpenAI",
      "Pinecone",
      "PostgreSQL",
      "Docker"
    ],
    previewPoints: [
      "Sub-50ms response latency with vector embeddings and hybrid metadata indexing.",
      "Integrated Generative AI workflows to auto-generate high-relevance long-tail keywords."
    ],
    metrics: [
      { label: "Latency", value: "Sub-50ms API" },
      { label: "Vector DB", value: "Pinecone Index" },
      { label: "Embeddings", value: "Azure OpenAI" }
    ]
  },
  {
    slug: "india-road-accident-analysis",
    title: "India Road Accident Analysis",
    category: "Public Safety Analytics",
    year: "2024",
    status: "SHIPPED",
    repoUrl: "https://github.com/KartikParasher01/IndiaRoadAccidentAnalysis",
    featured: false,
    shortDescription:
      "Analyzed 12,000+ accident records to uncover high-risk driver segments, peak accident periods, and behavioral patterns for targeted safety interventions.",
    spotlight:
      "Exploratory data analysis pinpointed the 18-50 age group and weekend nights as top accident risk concentration cohorts.",
    tools: ["Python", "Pandas", "Seaborn", "Excel", "EDA"],
    previewPoints: [
      "Cleaned and standardized 12,000+ raw records for disciplined exploratory analysis.",
      "Produced actionable policy-ready recommendations based on age and timing severity."
    ],
    metrics: [
      { label: "Dataset", value: "12,000+ records" },
      { label: "Risk Cohort", value: "Age 18-50" },
      { label: "Method", value: "Exploratory EDA" }
    ]
  },
  {
    slug: "spotify-dashboard",
    title: "Spotify Stream Analysis & Dashboard",
    category: "Consumer Media Analytics",
    year: "2024",
    status: "SHIPPED",
    repoUrl: "https://github.com/KartikParasher01/spotify-stream-analysis",
    featured: false,
    shortDescription:
      "Developed an interactive Power BI dashboard analyzing top-streamed songs, artist concentration, and track-level listening dynamics.",
    spotlight:
      "Constructed custom DAX measures and Power Query ETL transformations to turn streaming data into a clear self-service executive reporting layer.",
    tools: ["Power BI", "Power Query", "DAX", "MS Excel"],
    previewPoints: [
      "Engineered automated ETL flows in Power Query for data cleansing and normalization.",
      "Designed an interactive multi-view dashboard illustrating artist reach and listening trends."
    ],
    metrics: [
      { label: "Tool", value: "Power BI + DAX" },
      { label: "Data Flow", value: "Power Query ETL" },
      { label: "Output", value: "Executive Dashboard" }
    ]
  },
  {
    slug: "sql-music-store-analysis",
    title: "SQL Music Store Revenue Driver Analysis",
    category: "Revenue & Customer Analytics",
    year: "2024",
    status: "SHIPPED",
    repoUrl: "https://github.com/KartikParasher01/SQL_Music_Store_analysis",
    featured: false,
    shortDescription:
      "Answered core commercial questions around top customer tiers, genre growth, market concentration, and geographic revenue drivers using layered SQL.",
    spotlight:
      "Authored multi-table joins, CTEs, and window functions on relational schema to isolate high-value customer segments and regional demand.",
    tools: ["SQL", "PostgreSQL", "CTEs", "Window Functions"],
    previewPoints: [
      "Analyzed customer lifetime value, invoice distributions, and genre popularity across markets.",
      "Identified that top customer percentiles generated an outsized share of global revenue."
    ],
    metrics: [
      { label: "Engine", value: "PostgreSQL" },
      { label: "Techniques", value: "CTEs & Window Funcs" },
      { label: "Domain", value: "Revenue Drivers" }
    ]
  }
];

export const certificationsOrTraining: Certification[] = [
  {
    title: "Data Analytics (Python, SQL, Power BI, Excel)",
    issuer: "PW Skills"
  },
  {
    title: "SQL Intermediate",
    issuer: "HackerRank"
  },
  {
    title: "Excel for Data Analysis",
    issuer: "LinkedIn"
  },
  {
    title: "Business Analytics & Decision Making",
    issuer: "BIT Mesra"
  },
  {
    title: "Data Visualization Job Simulations",
    issuer: "TATA, Accenture, Deloitte"
  },
  {
    title: "Product Management",
    issuer: "Udemy"
  }
];

export const fallbackGitHub = {
  profile: {
    public_repos: 8,
    followers: 2,
    stars: 3
  },
  repos: [
    {
      name: "ResearchPilot-AI",
      description: "AI-powered web research assistant with query planning, Tavily search, BeautifulSoup, and Groq LLM synthesis.",
      language: "Python",
      stargazers_count: 2,
      fork: false,
      updated_at: "2026-09-01T00:00:00Z",
      html_url: "https://github.com/KartikParasher01/ResearchPilot-AI"
    },
    {
      name: "IndiaRoadAccidentAnalysis",
      description: "EDA on 12,000+ accident records identifying high-risk driver cohorts and peak accident periods.",
      language: "Jupyter Notebook",
      stargazers_count: 1,
      fork: false,
      updated_at: "2026-08-15T00:00:00Z",
      html_url: "https://github.com/KartikParasher01/IndiaRoadAccidentAnalysis"
    },
    {
      name: "spotify-stream-analysis",
      description: "Interactive Power BI dashboard and streaming data analysis with DAX and Power Query.",
      language: "Power BI",
      stargazers_count: 1,
      fork: false,
      updated_at: "2026-07-20T00:00:00Z",
      html_url: "https://github.com/KartikParasher01/spotify-stream-analysis"
    },
    {
      name: "SQL_Music_Store_analysis",
      description: "PostgreSQL analysis exploring customer value, genre performance, and market concentration.",
      language: "SQL",
      stargazers_count: 0,
      fork: false,
      updated_at: "2026-06-10T00:00:00Z",
      html_url: "https://github.com/KartikParasher01/SQL_Music_Store_analysis"
    }
  ]
};
