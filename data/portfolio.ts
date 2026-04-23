export type Project = {
  slug: string;
  title: string;
  category: string;
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

export const siteConfig = {
  name: "Your Name",
  role: "Data Analyst",
  email: "hello@yourmail.com",
  linkedin: "https://www.linkedin.com/in/yourname",
  github: "https://github.com/yourusername"
};

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" }
];

export const aboutSummary =
  "I turn noisy spreadsheets, raw SQL tables, and loosely defined business questions into analysis that leaders can actually use. My workflow combines Python for cleaning and exploration, SQL for precision, and dashboards for fast decision-making. I care most about spotting what matters, explaining it clearly, and making insights actionable.";

export const aboutHighlights = [
  {
    title: "Python",
    description: "Automate cleaning, exploration, and repeatable analysis without living in manual spreadsheets."
  },
  {
    title: "SQL",
    description: "Write focused queries that surface trends, anomalies, and revenue drivers quickly."
  },
  {
    title: "Power BI",
    description: "Translate analysis into recruiter-friendly dashboards and stakeholder-ready stories."
  },
  {
    title: "Data Cleaning",
    description: "Standardize messy fields, fix quality issues, and create reliable datasets for reporting."
  },
  {
    title: "EDA",
    description: "Use exploratory analysis to uncover patterns before building a dashboard or making a recommendation."
  }
];

export const projects: Project[] = [
  {
    slug: "india-road-accident-analysis",
    title: "India Road Accident Analysis",
    category: "Public Safety Analytics",
    shortDescription:
      "Analyzed accident severity patterns across time, road types, and vehicle categories to show where prevention efforts should focus first.",
    spotlight:
      "Night-time incidents were fewer than daytime incidents, but they consistently carried higher severity across major road corridors.",
    tools: ["Python", "Pandas", "Seaborn", "Excel"],
    previewPoints: [
      "Compared accident severity by road class, vehicle type, and time-of-day.",
      "Built a clean exploratory workflow that turned raw records into intervention-ready insights."
    ],
    metrics: [
      { label: "Dataset", value: "Accident-level records" },
      { label: "Primary Goal", value: "Severity hotspot detection" },
      { label: "Output", value: "EDA-driven insight deck" }
    ],
    caseStudy: {
      problemStatement:
        "Raw road accident data can be overwhelming because counts alone do not show where the most severe incidents happen or which conditions consistently increase risk. The goal was to move from raw incidents to a practical view of severity drivers.",
      datasetDescription:
        "The analysis used structured accident records covering geography, road category, vehicle involvement, timing, and severity indicators. The data needed cleaning for category consistency and easier comparison across dimensions.",
      approach: [
        "Cleaned and standardized categorical fields in Python so state, road-type, and vehicle labels could be compared reliably.",
        "Performed exploratory analysis on severity distribution, time patterns, and accident concentration across categories.",
        "Used grouped summaries and visual comparisons to isolate combinations with the highest share of severe accidents.",
        "Translated the findings into a clear narrative aimed at safety planning rather than raw descriptive reporting."
      ],
      keyInsights: [
        "National highways and dense urban corridors showed a disproportionate share of high-severity accidents compared with lower-traffic road classes.",
        "Late evening and night windows were not always the highest by volume, but they were consistently stronger risk periods for severe incidents.",
        "Two-wheelers and pedestrian-related collisions repeatedly surfaced among the most vulnerable scenarios.",
        "Location-level comparison worked better than national averages for highlighting where targeted action would matter most."
      ],
      businessImpact: [
        "Created a stronger basis for hotspot-first road safety interventions instead of broad, low-priority responses.",
        "Helped frame decisions around lighting, signage, enforcement, and awareness campaigns by risk profile rather than intuition.",
        "Demonstrated the ability to turn a public dataset into a decision-ready analysis with clear prioritization."
      ]
    }
  },
  {
    slug: "spotify-dashboard",
    title: "Spotify Dashboard (Power BI)",
    category: "Consumer Media Analytics",
    shortDescription:
      "Designed an interactive Power BI dashboard to explore artist performance, track popularity, and audio-feature trends in one recruiter-friendly view.",
    spotlight:
      "Track popularity was shaped by a mix of release recency and audio profile, but a few artists captured a heavily concentrated share of attention.",
    tools: ["Power BI", "Power Query", "DAX", "Excel"],
    previewPoints: [
      "Modeled track-level music data into a clean, filterable dashboard with executive-style KPIs.",
      "Used DAX measures to compare artist reach, genre performance, and popularity trends over time."
    ],
    metrics: [
      { label: "Dataset", value: "Track and artist metadata" },
      { label: "Primary Goal", value: "Trend and performance monitoring" },
      { label: "Output", value: "Interactive Power BI dashboard" }
    ],
    caseStudy: {
      problemStatement:
        "Large entertainment datasets are difficult to scan without a dashboard that lets users compare artists, genres, and track characteristics quickly. The goal was to turn raw track data into a story-driven dashboard that made music trends easy to evaluate.",
      datasetDescription:
        "The dataset contained track attributes such as popularity, release details, artist names, genre-like groupings, and audio features including danceability, energy, and tempo. It was suited for dimensional modeling and KPI design in Power BI.",
      approach: [
        "Cleaned the raw file in Power Query and prepared consistent artist, release-year, and audio-feature fields.",
        "Built a simple star-style model to support slicers, trend views, and reusable DAX measures.",
        "Created KPIs and comparison visuals for popularity, artist concentration, feature distribution, and release patterns.",
        "Focused the layout on quick scanning so a recruiter or stakeholder could understand the dashboard within seconds."
      ],
      keyInsights: [
        "Popularity was concentrated among a relatively small set of artists, which made artist-level comparison more valuable than average track views alone.",
        "Recent releases often gained stronger visibility, but audio profile still influenced which tracks sustained attention.",
        "High-energy and danceable tracks appeared frequently among top-performing segments, suggesting a strong relationship between listenability and reach.",
        "A well-structured dashboard made it much easier to move from curiosity to specific drill-down questions."
      ],
      businessImpact: [
        "Showed how dashboard design can compress a broad entertainment dataset into a fast, self-serve decision layer.",
        "Created an example of stakeholder-friendly reporting where filters, KPIs, and visuals answer different levels of questions cleanly.",
        "Highlighted strong Power BI fundamentals: modeling, DAX thinking, visual hierarchy, and interaction design."
      ]
    }
  },
  {
    slug: "sql-music-store-analysis",
    title: "SQL Music Store Analysis",
    category: "Revenue and Customer Analytics",
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
    title: "Programming",
    items: ["Python", "Pandas", "NumPy", "Jupyter Notebook"]
  },
  {
    title: "Tools",
    items: ["Power BI", "Excel", "Power Query", "Git"]
  },
  {
    title: "Databases",
    items: ["SQL", "PostgreSQL", "MySQL", "Relational Modeling"]
  },
  {
    title: "Visualization",
    items: ["Dashboard Design", "EDA", "Seaborn", "Business Storytelling"]
  }
];

export const experiences = [
  {
    company: "TradeIndia",
    role: "Data Analyst Intern",
    period: "Internship Experience",
    impact:
      "Turned fragmented marketplace and campaign data into cleaner reporting views that made supplier and lead performance easier to evaluate.",
    outcomes: [
      "Reduced manual reporting effort by structuring recurring datasets into reusable tables and analysis-ready summaries.",
      "Helped surface stronger-performing categories and lead quality patterns so stakeholders could focus on higher-intent segments faster."
    ]
  },
  {
    company: "Tata Steel",
    role: "Data Analyst Intern",
    period: "Internship Experience",
    impact:
      "Worked with operational data to highlight patterns that supported clearer plant-level monitoring and faster root-cause discussions.",
    outcomes: [
      "Converted scattered operational logs into more usable reporting formats for trend analysis and day-to-day review.",
      "Used data exploration to identify recurring production or quality patterns, helping teams prioritize where deeper investigation was needed."
    ]
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
    value: "linkedin.com/in/yourname",
    href: siteConfig.linkedin
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: siteConfig.github
  }
];
