export type Project = {
  slug: string;
  title: string;
  category: string;
  repoUrl: string;
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
  email: "kartikparasher2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/kartikparasher",
  github: "https://github.com/KartikParasher01"
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

export const aboutHighlights = [
  {
    title: "ETL Pipelines",
    description: "Build and automate data preparation flows focused on validation, deduplication, and matching for reliable downstream use."
  },
  {
    title: "PySpark",
    description: "Process and transform larger datasets with scalable Python-first workflows built for production-style data work."
  },
  {
    title: "Airflow & Cloud",
    description: "Orchestrate recurring jobs with Apache Airflow and cloud services like AWS Glue, AWS S3, and Azure Batch."
  },
  {
    title: "APIs & Search",
    description: "Develop API-backed data applications, including vector search workflows using FastAPI and modern embedding stacks."
  },
  {
    title: "Generative AI",
    description: "Apply AI workflows to keyword generation, discoverability, and practical business use cases grounded in real data systems."
  }
];

export const projects: Project[] = [
  {
    slug: "india-road-accident-analysis",
    title: "India Road Accident Analysis",
    category: "Public Safety Analytics",
    repoUrl: "https://github.com/KartikParasher01/IndiaRoadAccidentAnalysis",
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
    repoUrl: "https://github.com/KartikParasher01/SQL_Music_Store_analysis",
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
  },
  {
    title: "Data Engineering",
    items: ["ETL Pipelines", "Data Validation", "Deduplication", "Data Matching", "FastAPI"]
  },
  {
    title: "Databases & Search",
    items: ["SQL", "PostgreSQL", "MySQL", "BigQuery", "Pinecone"]
  },
  {
    title: "Cloud & Orchestration",
    items: ["Apache Airflow", "AWS Glue", "AWS S3", "Azure Batch", "Azure OpenAI"]
  },
  {
    title: "Reporting & BI",
    items: [
      "Power BI",
      "Power Query",
      "MS Excel (Advanced)",
      "EDA",
      "Business Storytelling"
    ]
  },
  {
    title: "Tools & AI Workflows",
    items: [
      "GitHub",
      "Google Sheets",
      "ChatGPT",
      "Generative AI",
      "Elastic APM",
      "PowerPoint"
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "TradeIndia",
    role: "Junior Data Scientist",
    period: "Feb 2026 - Present",
    location: "Noida, India",
    impact:
      "Build production-facing data and AI workflows that improve data quality, reduce processing time, automate recurring processes, and support semantic search and product discoverability.",
    metrics: [
      { label: "Processing gain", value: "~80% faster" },
      { label: "Core stack", value: "PySpark + Airflow" },
      { label: "AI layer", value: "Azure OpenAI + Pinecone" }
    ],
    outcomes: [
      "Designed and deployed a PySpark-based deduplication pipeline to match large-scale B2B datasets and cut processing time by approximately 80%.",
      "Built ETL validation and record-matching logic to improve data reliability before downstream sales, search, and analytics use.",
      "Automated recurring workflows with Apache Airflow, AWS Glue, Azure Batch, and AWS S3 to improve scalability and reduce manual effort.",
      "Built a FastAPI vector-search API for semantic product search using Azure OpenAI embeddings, Pinecone, dynamic metadata filtering, PostgreSQL, and Elastic APM.",
      "Implemented Generative AI long-tail keyword generation workflows to improve product discoverability and search relevance.",
      "Partnered with stakeholders on data extraction requests and converted business needs into production-ready data solutions."
    ]
  },
  {
    company: "TradeIndia",
    role: "Intern - Trainee Data Science",
    period: "Aug 2025 - Feb 2026",
    location: "Noida, India",
    impact:
      "Built a practical foundation in data quality, scraped-data validation, lead qualification, and stakeholder delivery while supporting sales-focused data workflows.",
    metrics: [
      { label: "Cycle time", value: "~1 day manual process" },
      { label: "Business user", value: "Sales team" },
      { label: "Focus", value: "Qualified leads" }
    ],
    outcomes: [
      "Cleaned and validated scraped external datasets before matching them against internal company data.",
      "Tagged qualified leads for the sales team by comparing external records with internal profile and product information.",
      "Performed recurring manual matching and tagging cycles that took around one day per cycle, directly feeding sales outreach and contract acquisition efforts.",
      "Collaborated with stakeholders on data extraction requests and delivered production-ready datasets for business review.",
      "Gained hands-on exposure to recurring data-preparation workflows, cloud storage, and orchestration-oriented thinking."
    ]
  },
  {
    company: "Tata Steel Limited",
    role: "Intern - RDE Norms Analysis Project",
    period: "May 2023 - Jul 2023",
    location: "Jamshedpur, India",
    impact:
      "Analyzed market and product implications of changing emission norms to support commercial understanding and strategy discussions.",
    metrics: [
      { label: "Growth signal", value: "~10% potential" },
      { label: "Lens", value: "Regulatory demand" },
      { label: "Output", value: "Sales strategy insights" }
    ],
    outcomes: [
      "Analyzed the impact of emission norms on product demand to identify shifts in customer preference.",
      "Evaluated product alignment with regulatory changes to uncover potential market opportunities.",
      "Generated insights that supported sales strategy by identifying segments with approximately 10% growth potential.",
      "Translated regulatory trend analysis into decision-support findings for commercial and market-focused discussion."
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Birla Institute of Technology",
    credential: "Bachelor of Business Administration",
    period: "2021 - 2024",
    location: "Ranchi, India",
    detail: "Cumulative GPA: 7.29"
  },
  {
    institution: "Vivek Vidyalaya",
    credential: "Central Board of Secondary Education (CBSE)",
    period: "2019 - 2021",
    location: "Jamshedpur, India",
    detail: "Senior secondary education"
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
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
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
