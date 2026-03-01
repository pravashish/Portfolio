// ============================================================
//  PORTFOLIO DATA
//  ─────────────────────────────────────────────────────────
//  Option A — Auto-fill from your resume (recommended):
//    python update_portfolio.py resume.pdf
//
//  Option B — Edit this file manually.
//
//  Leave any field as "" to hide it from the site.
// ============================================================

const PORTFOLIO = {

  // ── Basic info ──────────────────────────────────────────
  "name":     "Your Name",
  "title":    "Data Engineer",
  "tagline":  "I build reliable data pipelines, scalable architectures, and turn raw data into business value.",
  "location": "City, Country",

  // ── Social links ────────────────────────────────────────
  // Leave any field as "" to hide it from the site
  "socials": {
    "email":    "you@email.com",
    "linkedin": "https://linkedin.com/in/yourname",
    "github":   "https://github.com/yourname",
    "medium":   "",
    "leetcode": "",
    "twitter":  "",
    "kaggle":   "",
    "website":  ""
  },

  // ── About section ───────────────────────────────────────
  "about": {
    "bio": [
      "Hi! I'm a <strong>Data Engineer</strong> passionate about building robust data infrastructure. I design and maintain pipelines that power analytics and ML workflows.",
      "I work across the modern data stack — from ingestion and transformation to orchestration and delivery — helping teams make sense of their data at scale.",
      "Outside work I enjoy exploring new data tools and contributing to open-source projects."
    ],
    "highlights": [
      { "icon": "⚙️", "title": "Data Pipelines",       "desc": "ETL/ELT pipelines that move and transform data reliably at scale." },
      { "icon": "🏗️", "title": "Data Architecture",    "desc": "Designing lakes, warehouses, and lakehouses for analytical workloads." },
      { "icon": "📊", "title": "Analytics Engineering", "desc": "Transforming raw data into clean, trusted datasets for BI and reporting." }
    ]
  },

  // ── Skills ──────────────────────────────────────────────
  "skills": [
    { "category": "Languages & Query",      "tags": ["Python", "SQL", "Bash", "Scala"] },
    { "category": "Data Processing",        "tags": ["Apache Spark", "Kafka", "dbt", "Pandas"] },
    { "category": "Cloud & Storage",        "tags": ["AWS", "Azure", "GCP", "Snowflake", "Delta Lake"] },
    { "category": "Orchestration & DevOps", "tags": ["Airflow", "Prefect", "Docker", "Kubernetes", "Git"] },
    { "category": "Databases & Warehouses", "tags": ["PostgreSQL", "Redshift", "BigQuery", "MongoDB"] },
    { "category": "Visualization & BI",     "tags": ["Power BI", "Tableau", "Grafana", "Metabase"] }
  ],

  // ── Projects ────────────────────────────────────────────
  "projects": [
    {
      "title":  "Real-time Data Pipeline",
      "desc":   "Streaming pipeline using Kafka and Spark Structured Streaming processing 10M+ events/day with sub-second latency on AWS EKS.",
      "tags":   ["Kafka", "Spark", "AWS", "Python"],
      "github": "https://github.com/yourname/project-1",
      "demo":   ""
    },
    {
      "title":  "Data Warehouse Migration",
      "desc":   "Migrated legacy DWH to Snowflake, reducing query times by 70% and infrastructure costs by 40% using dbt and Airflow.",
      "tags":   ["Snowflake", "dbt", "Airflow", "SQL"],
      "github": "https://github.com/yourname/project-2",
      "demo":   ""
    },
    {
      "title":  "Medallion Architecture Platform",
      "desc":   "Bronze/Silver/Gold architecture on Azure Data Lake with Delta Lake, exposing curated datasets to Power BI dashboards.",
      "tags":   ["Azure", "Delta Lake", "PySpark", "Power BI"],
      "github": "https://github.com/yourname/project-3",
      "demo":   ""
    }
  ],

  // ── Experience ──────────────────────────────────────────
  "experience": [
    {
      "role":    "Senior Data Engineer",
      "company": "Company Name",
      "period":  "Jan 2023 – Present",
      "bullets": [
        "Designed and maintained ELT pipelines processing 5TB+ of data daily using Apache Spark and Airflow.",
        "Led migration from on-prem Hadoop to AWS ecosystem (S3, Glue, Redshift), reducing costs by 35%.",
        "Implemented dbt models and data quality checks, reducing reporting errors by 60%."
      ]
    },
    {
      "role":    "Data Engineer",
      "company": "Previous Company",
      "period":  "Jun 2021 – Dec 2022",
      "bullets": [
        "Built real-time ingestion pipelines using Kafka and Spark Streaming for IoT sensor data.",
        "Modeled core business entities in Snowflake following Data Vault methodology.",
        "Automated monitoring and alerting for pipeline failures using PagerDuty and Slack."
      ]
    }
  ]

};
