export type Project = {
  slug: string;
  title: string;
  category: string;
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
  caseStudy: {
    problemStatement: string;
    datasetDescription: string;
    approach: string[];
    keyInsights: string[];
    businessImpact: string[];
  };
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

export type Education = {
  institution: string;
  credential: string;
  period: string;
  location: string;
  detail: string;
};

export type Certification = {
  title: string;
  issuer: string;
};

export type LeadershipHighlight = {
  title: string;
  organization: string;
  detail: string;
};

export const siteConfig = {
  name: "Kartik Parasher",
  role: "Junior Data Scientist",
  role: "Data & AI Engineer",
  email: "kartikparasher2001@gmail.com",
  phone: "+91 8969809515",
  location: "Noida / Jamshedpur, India",
  linkedin: "https://www.linkedin.com/in/kartikparasher",
  github: "https://github.com/KartikParasher01"
  github: "https://github.com/KartikParasher01",
  summary:
    "Data & AI Engineer skilled in Python, SQL, PySpark, ETL, Airflow, FastAPI, Azure OpenAI, and Pinecone. Experienced in building production-oriented data pipelines, REST APIs, AI-powered applications, and search systems, with hands-on experience across AWS and Azure."
};

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/#contact" }
];

export const aboutSummary =
  "I am a Junior Data Scientist building at the intersection of data engineering, analytics, and applied AI. My work combines Python, PySpark, SQL, ETL pipelines, Airflow, cloud orchestration, APIs, and Generative AI to turn raw business data into reliable production-ready workflows. At TradeIndia, I have worked on large-scale deduplication, workflow automation, vector-search APIs, and keyword generation systems with a strong focus on data quality, speed, and business impact.";
export const aboutSummary = siteConfig.summary;

export const aboutHighlights = [
  {
    title: "ETL Pipelines",
    description: "Build and automate data preparation flows focused on validation, deduplication, and matching for reliable downstream use."
    title: "ETL & Data Engineering",
    description:
      "Design and deploy production-grade pipelines for data validation, deduplication, and record matching across large-scale enterprise datasets."
  },
  {
    title: "PySpark",
    description: "Process and transform larger datasets with scalable Python-first workflows built for production-style data work."
    title: "PySpark & Big Data",
    description:
      "Process and transform multi-gigabyte B2B datasets with PySpark, cutting processing time by ~80%."
  },
  {
    title: "Airflow & Cloud",
    description: "Orchestrate recurring jobs with Apache Airflow and cloud services like AWS Glue, AWS S3, and Azure Batch."
    title: "Airflow & Cloud Orchestration",
    description:
      "Automate recurring business-critical DAGs using Apache Airflow, AWS Glue, AWS S3, and Azure Batch."
  },
  {
    title: "APIs & Search",
    description: "Develop API-backed data applications, including vector search workflows using FastAPI and modern embedding stacks."
    title: "APIs & Vector Search",
    description:
      "Build low-latency FastAPI services utilizing Azure OpenAI embeddings, Pinecone, and dynamic metadata filtering for semantic product search."
  },
  {
    title: "Generative AI",
    description: "Apply AI workflows to keyword generation, discoverability, and practical business use cases grounded in real data systems."
    title: "Applied Generative AI",
    description:
      "Architect LLM-powered systems including automated long-tail keyword generators and agentic web research assistants with Tavily and Groq."
  }
];

export const projects: Project[] = [
  {
    slug: "researchpilot-ai",
    title: "ResearchPilot AI — Web Research Assistant",
    category: "AI & Web Intelligence",
    repoUrl: "https://github.com/KartikParasher01/ResearchPilot-AI",
    liveUrl: "https://researchpilot-ai.onrender.com",
    featured: true,
    shortDescription:
      "Built an AI-powered web research assistant that converts user questions into targeted search queries, retrieves web sources, scrapes relevant content, and generates structured research reports using an LLM.",
    spotlight:
      "Implemented a modular research pipeline with query planning, URL deduplication, web scraping, source attribution, confidence scoring, and Pydantic-based response validation, deployed on Render.",
    tools: [
      "Python",
      "Gradio",
      "Groq / OpenAI API",
      "Tavily Search",
      "BeautifulSoup",
      "Pydantic",
      "Render"
    ],
    previewPoints: [
      "Converts complex user inquiries into targeted multi-hop search queries via automated query planning.",
      "Performs real-time web scraping, URL deduplication, and source attribution with confidence scoring.",
      "Enforces schema compliance and deterministic report formatting using Pydantic validation.",
      "Production-ready deployment on Render with responsive Gradio interface and environment-based secret isolation."
    ],
    metrics: [
      { label: "Architecture", value: "Multi-Source Agentic" },
      { label: "Validation", value: "Pydantic Schema Strict" },
      { label: "Deployment", value: "Render Live Public Web" },
      { label: "API Engines", value: "Tavily + Groq LLM" }
    ],
    caseStudy: {
      problemStatement:
        "Modern research requires sifting through hundreds of search results, filtering spam or duplicate domains, reading dense articles, and extracting verified citations. Manual research is slow, error-prone, and unstructured. The goal was to build an end-to-end automated research agent that synthesizes deep, citation-backed intelligence reports in seconds.",
      datasetDescription:
        "Dynamic live web index accessed through the Tavily Search API, coupled with BeautifulSoup web scraping on retrieved URLs for full text ingestion, content sanitization, and structured context window preparation.",
      approach: [
        "Built a query planning layer that takes complex natural language queries and decomposes them into focused search terms.",
        "Engineered an automated deduplication and web-scraping pipeline using Tavily Search and BeautifulSoup to retrieve high-signal web sources while pruning noise.",
        "Integrated Groq's high-speed inference engine (OpenAI-compatible) for ultra-fast document synthesis and structured markdown report generation.",
        "Implemented strict Pydantic models for response schema validation, citation attribution, and automated confidence scoring.",
        "Packaged and deployed the entire application with an interactive Gradio web UI on Render with environment-based configuration management."
      ],
      keyInsights: [
        "Query decomposition significantly improves relevance compared to passing raw queries directly into search engines.",
        "Deterministic URL deduplication prevents LLM hallucination and duplicate citation weight.",
        "Pydantic validation eliminates schema breakdown during complex structured report generation.",
        "High-throughput inference with Groq ensures sub-5-second executive summaries even across multi-source queries."
      ],
      businessImpact: [
        "Cuts web research and report synthesis time from hours to seconds for competitive intelligence and market analysis.",
        "Provides reproducible, audit-ready source attribution and confidence indicators for every generated finding.",
        "Demonstrates production-ready full-stack AI engineering combining APIs, scraping, LLMs, and cloud deployment."
      ]
    }
  },
  {
    slug: "india-road-accident-analysis",
    title: "India Road Accident Analysis",
    category: "Public Safety Analytics",
    repoUrl: "https://github.com/KartikParasher01/IndiaRoadAccidentAnalysis",
    featured: false,
    shortDescription:
      "Analyzed 12,000+ accident records to uncover high-risk driver segments, peak accident periods, and behavior patterns that could support targeted safety interventions.",
    spotlight:
      "Trend analysis showed the 18-50 age group and weekends as strong risk indicators, helping narrow where prevention messaging and safety action should focus.",
    tools: ["Python", "Pandas", "Seaborn", "Excel"],
    previewPoints: [
      "Cleaned and standardized a 12,000+ row accident dataset for reliable exploratory analysis.",
      "Compared severity by driver age, timing, and accident patterns to produce policy-ready recommendations."
    ],
    metrics: [
      { label: "Dataset", value: "12,000+ accident records" },
      { label: "Primary Goal", value: "High-risk segment detection" },
      { label: "Output", value: "EDA-driven insight deck" }
    ],
    caseStudy: {
      problemStatement:
        "Raw accident data often shows volume but not where the most actionable risk patterns lie. The goal was to turn a large accident dataset into a view of which age groups, time patterns, and behaviors deserved the most attention from a road-safety perspective.",
      datasetDescription:
        "The project used a dataset of 12,000+ accident records with fields related to age, timing, and severity. The data needed cleaning and standardization before it could support trustworthy trend comparisons.",
      approach: [
        "Cleaned and standardized the accident records in Python so trend analysis was based on consistent categories.",
        "Performed exploratory analysis across age groups, timing, and accident concentration to detect risk-heavy segments.",
        "Used grouped summaries and visual comparisons to isolate patterns tied to higher-risk driver cohorts and periods.",
        "Converted the findings into a story focused on safety action, not just descriptive reporting."
      ],
      keyInsights: [
        "The 18-50 age group emerged as the strongest high-risk driver segment in the dataset.",
        "Weekend patterns showed elevated risk, making them more actionable than daily averages alone.",
        "Peak accident periods became easier to isolate after cleaning and standardizing the raw records.",
        "The project showed how simple but disciplined EDA can produce targeted safety recommendations from public data."
      ],
      businessImpact: [
        "Supported targeted safety interventions by identifying where risk was concentrated instead of treating all segments equally.",
        "Provided clearer evidence for focused awareness and policy recommendations around high-risk age groups and periods.",
        "Demonstrated the ability to turn a 12,000+ row dataset into prioritized, decision-ready insight."
      ]
    }
  },
  {
    slug: "spotify-dashboard",
    title: "Spotify Dashboard (Power BI)",
    category: "Consumer Media Analytics",
    repoUrl: "https://github.com/KartikParasher01/spotify-stream-analysis",
    featured: false,
    shortDescription:
      "Developed an interactive Power BI dashboard to analyze top-streamed songs, artist performance, and track-level listening trends in a clear, recruiter-friendly format.",
    spotlight:
      "The dashboard translated raw streaming data into an easy-to-scan story around top songs, artist reach, and reporting-ready music trends.",
    tools: ["Power BI", "Power Query", "DAX", "Excel"],
    previewPoints: [
      "Cleaned and transformed streaming data in Power Query for accurate reporting and comparison.",
      "Designed a user-friendly dashboard layout with calculated columns and visuals that improved storytelling."
    ],
    metrics: [
      { label: "Dataset", value: "Top-streamed song data" },
      { label: "Primary Goal", value: "Artist and song performance analysis" },
      { label: "Output", value: "Interactive Power BI dashboard" }
    ],
    caseStudy: {
      problemStatement:
        "Streaming data can be difficult to understand without a reporting layer that clearly surfaces which songs and artists are performing best. The goal was to build a dashboard that made top-stream trends easy to explore and present.",
      datasetDescription:
        "The dataset included top-streamed songs, artist-level information, and fields that could be transformed into performance and trend views. It was cleaned and prepared in Power Query before dashboard design.",
      approach: [
        "Performed data cleaning and transformation in Power Query to improve consistency and reporting accuracy.",
        "Created custom calculated columns and structured the data for easy slicing and comparison in Power BI.",
        "Designed visuals around top-streamed songs, artist performance, and trend discovery rather than raw tables.",
        "Used layout and presentation thinking to make the dashboard easy to scan and explain."
      ],
      keyInsights: [
        "Artist-level comparison surfaced performance concentration more clearly than raw track tables alone.",
        "Top-stream analysis became more intuitive once the raw dataset was transformed into a dashboard-first structure.",
        "Calculated fields and interaction design improved the story the dashboard could tell, not just the visuals it displayed.",
        "The project highlighted the importance of layout and transformation in making BI outputs useful."
      ],
      businessImpact: [
        "Created a cleaner self-serve reporting experience around streaming performance and artist trends.",
        "Demonstrated practical Power BI skills across Power Query, calculated columns, interaction design, and presentation clarity.",
        "Showed the ability to transform raw data into an accessible dashboard story for non-technical viewers."
      ]
    }
  },
  {
    slug: "sql-music-store-analysis",
    title: "SQL Music Store Analysis",
    category: "Revenue and Customer Analytics",
    category: "Revenue & Customer Analytics",
    repoUrl: "https://github.com/KartikParasher01/SQL_Music_Store_analysis",
    featured: false,
    shortDescription:
      "Used SQL to answer business questions around top customers, genre performance, market concentration, and overall revenue drivers in a music store dataset.",
    spotlight:
      "A small set of countries and customer segments accounted for an outsized share of revenue, making targeted retention more important than broad promotions.",
    tools: ["SQL", "PostgreSQL", "CTEs", "Window Functions"],
    previewPoints: [
      "Solved business questions with joins, aggregations, CTEs, and ranking logic.",
      "Connected customer behavior, geography, and genre sales to revenue-focused recommendations."
    ],
    metrics: [
      { label: "Dataset", value: "Relational sales schema" },
      { label: "Primary Goal", value: "Revenue driver analysis" },
      { label: "Output", value: "Query-based insight pack" }
    ],
    caseStudy: {
      problemStatement:
        "Business teams often need fast answers from transactional data, but raw tables rarely reveal which customers, markets, and products drive revenue. The goal was to use SQL to answer those questions in a clear, structured way.",
      datasetDescription:
        "The project used a relational music store schema with customers, invoices, invoice lines, tracks, genres, artists, and employees. It was ideal for practicing business analysis through joins, ranking, and revenue aggregation.",
      approach: [
        "Defined a set of business questions around customer value, top-selling genres, revenue by geography, and employee-linked sales.",
        "Wrote layered SQL queries using joins, common table expressions, aggregate functions, and window functions.",
        "Validated each answer against the schema so the final insights were traceable back to clear business logic.",
        "Organized the findings to show not just what happened, but what a business could do next."
      ],
      keyInsights: [
        "Revenue was heavily concentrated in a handful of countries, making market prioritization more important than equal global effort.",
        "Top customers contributed meaningfully more than the median customer, which pointed to retention and loyalty as valuable growth levers.",
        "Genre performance changed by market, so blanket catalog pushes would miss local demand patterns.",
        "SQL alone can uncover highly actionable commercial insight when questions are framed around outcomes rather than tables."
      ],
      businessImpact: [
        "Made revenue concentration visible so sales and marketing effort could focus on the highest-value segments first.",
        "Provided a reusable set of SQL patterns for ranking customers, comparing markets, and evaluating category performance.",
        "Demonstrated analytical thinking that links database querying directly to business recommendations."
      ]
    }
  }
];

export const skillGroups = [
  {
    title: "Programming & Processing",
    items: ["Python", "PySpark", "Pandas", "NumPy"]
    title: "Data Engineering",
    description: "Production pipelines, deduplication & orchestration",
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
    title: "Data Engineering",
    items: ["ETL Pipelines", "Data Validation", "Deduplication", "Data Matching", "FastAPI"]
    title: "Programming & Databases",
    description: "Core algorithms, data structures & data engines",
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
    title: "Databases & Search",
    items: ["SQL", "PostgreSQL", "MySQL", "BigQuery", "Pinecone"]
    title: "AI & Application Development",
    description: "LLMs, vector indexing & high-performance APIs",
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
    title: "Cloud & Orchestration",
    items: ["Apache Airflow", "AWS Glue", "AWS S3", "Azure Batch", "Azure OpenAI"]
    title: "Cloud & Deployment",
    description: "Cloud compute, object storage & serverless hosting",
    items: [
      "AWS S3",
      "AWS Glue",
      "Azure Batch",
      "Render"
    ]
  },
  {
    title: "Reporting & BI",
    title: "Visualization & Reporting",
    description: "Executive dashboards & data-driven narratives",
    items: [
      "Power BI",
      "Power Query",
      "MS Excel (Advanced)",
      "EDA",
      "Business Storytelling"
      "PowerPoint"
    ]
  },
  {
    title: "Tools & AI Workflows",
    title: "Tools & Infrastructure",
    description: "Developer tools, containers & version control",
    items: [
      "GitHub",
      "Google Sheets",
      "ChatGPT",
      "Generative AI",
      "Elastic APM",
      "PowerPoint"
      "Docker"
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "TradeIndia",
    role: "Junior Data Scientist",
    period: "Feb 2026 - Present",
    period: "Feb 2026 – Present",
    location: "Noida, India",
    impact:
      "Build production-facing data and AI workflows that improve data quality, reduce processing time, automate recurring processes, and support semantic search and product discoverability.",
      "Architect and maintain scalable PySpark deduplication systems, automated Airflow DAGs across AWS and Azure, and production-facing vector search APIs.",
    metrics: [
      { label: "Processing gain", value: "~80% faster" },
      { label: "Core stack", value: "PySpark + Airflow" },
      { label: "AI layer", value: "Azure OpenAI + Pinecone" }
      { label: "Processing Gain", value: "~80% cut in runtime" },
      { label: "Vector Search", value: "Azure OpenAI + Pinecone" },
      { label: "Orchestration", value: "Airflow + AWS Glue + Azure Batch" }
    ],
    outcomes: [
      "Designed and deployed a PySpark-based deduplication pipeline to match large-scale B2B datasets and cut processing time by approximately 80%.",
      "Built ETL validation and record-matching logic to improve data reliability before downstream sales, search, and analytics use.",
      "Automated recurring workflows with Apache Airflow, AWS Glue, Azure Batch, and AWS S3 to improve scalability and reduce manual effort.",
      "Built a FastAPI vector-search API for semantic product search using Azure OpenAI embeddings, Pinecone, dynamic metadata filtering, PostgreSQL, and Elastic APM.",
      "Implemented Generative AI long-tail keyword generation workflows to improve product discoverability and search relevance.",
      "Partnered with stakeholders on data extraction requests and converted business needs into production-ready data solutions."
      "Designed and deployed a PySpark-based deduplication pipeline to match large-scale B2B datasets, cutting processing time by ~80%.",
      "Automated recurring workflows using Apache Airflow, AWS Glue, and Azure Batch, improving pipeline scalability and reducing manual effort.",
      "Built a FastAPI vector search API enabling AI-driven semantic product search across the company's product catalog, using Azure OpenAI embeddings, Pinecone, and dynamic metadata filtering.",
      "Implemented Generative AI-based long-tail keyword generation workflows to improve product discoverability and search relevance."
    ]
  },
  {
    company: "TradeIndia",
    role: "Intern - Trainee Data Science",
    period: "Aug 2025 - Feb 2026",
    role: "Intern – Trainee-Data Science",
    period: "Aug 2025 – Feb 2026",
    location: "Noida, India",
    impact:
      "Built a practical foundation in data quality, scraped-data validation, lead qualification, and stakeholder delivery while supporting sales-focused data workflows.",
      "Spearheaded data cleaning, external record matching, and automated lead tagging to fuel enterprise sales outreach pipelines.",
    metrics: [
      { label: "Cycle time", value: "~1 day manual process" },
      { label: "Business user", value: "Sales team" },
      { label: "Focus", value: "Qualified leads" }
      { label: "Cycle Impact", value: "~1 day per cycle" },
      { label: "Stakeholders", value: "Sales & Outreach" },
      { label: "Data Quality", value: "Production-ready datasets" }
    ],
    outcomes: [
      "Cleaned and validated scraped external datasets before matching them against internal company data.",
      "Tagged qualified leads for the sales team by comparing external records with internal profile and product information.",
      "Performed recurring manual matching and tagging cycles that took around one day per cycle, directly feeding sales outreach and contract acquisition efforts.",
      "Collaborated with stakeholders on data extraction requests and delivered production-ready datasets for business review.",
      "Gained hands-on exposure to recurring data-preparation workflows, cloud storage, and orchestration-oriented thinking."
      "Cleaned and validated scraped external datasets, matching records against internal company data to identify and tag qualified leads for the sales team.",
      "Manually performed this data matching and tagging process (~1 day per cycle), directly feeding sales outreach and contract acquisition efforts.",
      "Collaborated with stakeholders to handle data extraction requests and deliver production-ready data solutions."
    ]
  },
  {
    company: "Tata Steel Limited",
    role: "Intern - RDE Norms Analysis Project",
    period: "May 2023 - Jul 2023",
    role: "Intern - RDE Norms Analysis project",
    period: "May 2023 – July 2023",
    location: "Jamshedpur, India",
    impact:
      "Analyzed market and product implications of changing emission norms to support commercial understanding and strategy discussions.",
      "Delivered strategic regulatory impact analysis on Real Driving Emissions (RDE) norms, forecasting demand shifts across steel product lines.",
    metrics: [
      { label: "Growth signal", value: "~10% potential" },
      { label: "Lens", value: "Regulatory demand" },
      { label: "Output", value: "Sales strategy insights" }
      { label: "Market Opportunity", value: "~10% growth potential" },
      { label: "Domain", value: "Automotive & Industrial Steel" },
      { label: "Strategic Focus", value: "Emission Compliance" }
    ],
    outcomes: [
      "Analyzed the impact of emission norms on product demand to identify shifts in customer preference.",
      "Evaluated product alignment with regulatory changes to uncover potential market opportunities.",
      "Generated insights that supported sales strategy by identifying segments with approximately 10% growth potential.",
      "Translated regulatory trend analysis into decision-support findings for commercial and market-focused discussion."
      "Analyzed impact of emission norms on product demand to identify shifts in customer preferences.",
      "Evaluated product alignment with regulatory changes to identify potential market opportunities.",
      "Generated insights to support sales strategy, identifying segments with ~10% growth potential."
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Birla Institute of Technology",
    credential: "Bachelor of Business Administration",
    period: "2021 - 2024",
    period: "2021 – 2024",
    location: "Ranchi, India",
    detail: "Cumulative GPA: 7.29"
  },
  {
    institution: "Vivek Vidyalaya",
    credential: "Central Board of Secondary Education (CBSE)",
    period: "2019 - 2021",
    period: "2019 – 2021",
    location: "Jamshedpur, India",
    detail: "Senior secondary education"
    detail: "Senior Secondary Education (CBSE)"
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
    issuer: "Tata, Accenture, and Deloitte"
    issuer: "TATA, Accenture, Deloitte"
  },
  {
    title: "Product Management",
    issuer: "Udemy"
  }
];

export const leadershipHighlights: LeadershipHighlight[] = [
  {
    title: "Media Head",
    organization: "Research and Development Society",
    detail:
      "Led event communications, content coordination, and campaign execution to improve audience engagement."
      "Led media and communications for events by managing content and coordinating campaigns to improve engagement."
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\\s+/g, "")}`
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kartikparasher",
    href: siteConfig.linkedin
  },
  {
    label: "GitHub",
    value: "github.com/KartikParasher01",
    href: siteConfig.github
  }
];
