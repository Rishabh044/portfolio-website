import { Experience, Project, Skill, Certification, PersonalInfo } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Rishabh Hedaoo',
  title: 'Software Engineer',
  location: 'Pune, India',
  email: 'thefast490@gmail.com',
  linkedin: 'https://linkedin.com/in/rishabh-hedaoo-0503bb1b9',
  github: 'https://github.com/Rishabh044',
  summary: `Data Engineer with Databricks Data Engineer Associate Certification.
    Currently building scalable data pipelines, LLM gateway systems, and RAG applications at Overstand Labs.
    IIT BHU graduate proficient in SQL, Python, Power BI, and modern data stack.
    Passionate about transforming data into actionable insights.`
}

export const experiences: Experience[] = [
  {
    company: 'Overstand Labs (YC W25)',
    role: 'Software Engineer',
    duration: 'Feb 2025 - Present',
    location: 'Pune, India',
    description: 'Building scalable data pipelines and LLM gateway systems at a YC-backed startup.',
    highlights: [
      'Developing production-grade RAG applications',
      'Building ETL optimization systems',
      'Working on LLM gateway infrastructure'
    ]
  },
  {
    company: 'Tredence Inc.',
    role: 'Analyst / Data Engineer',
    duration: 'Jul 2024 - Feb 2025',
    location: 'Bangalore, India',
    description: 'Worked on data engineering and analytics solutions for enterprise clients.',
    highlights: [
      'Built data pipelines using Databricks',
      'Developed analytics dashboards with Power BI',
      'Optimized SQL queries for large-scale data processing'
    ]
  },
  {
    company: 'Newton School',
    role: 'SME (Data Science)',
    duration: 'Apr 2024 - Jul 2024',
    location: 'Remote',
    description: 'Subject Matter Expert creating educational content for data science courses.',
    highlights: [
      'Created curriculum for data science modules',
      'Mentored students on ML and analytics concepts'
    ]
  },
  {
    company: 'Keitai Technologies',
    role: 'Business Analyst',
    duration: 'May 2023 - Jul 2023',
    location: 'Remote',
    description: 'Analyzed business requirements and translated them into technical specifications.'
  },
  {
    company: 'Ambitio',
    role: 'Frontend Developer',
    duration: 'May 2023 - Jun 2023',
    location: 'Remote',
    description: 'Developed frontend features using React.js for the education platform.'
  }
]

export const skills: Skill[] = [
  {
    category: 'Data Engineering',
    items: ['Databricks', 'Palantir Foundry', 'Apache Spark', 'ETL Pipelines', 'Data Modeling']
  },
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'C++']
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    category: 'AI/ML',
    items: ['RAG Systems', 'LLM Integration', 'Transformers', 'NLP', 'Sentiment Analysis']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis']
  },
  {
    category: 'Tools & Cloud',
    items: ['Azure', 'Power BI', 'Git', 'Docker', 'Vercel']
  }
]

export const projects: Project[] = [
  {
    title: 'Simple RAG',
    description: 'A lightweight RAG system that scrapes web content, creates embeddings, and provides a semantic search API for intelligent document retrieval.',
    technologies: ['Python', 'LangChain', 'Embeddings', 'FastAPI'],
    githubUrl: 'https://github.com/Rishabh044/simple-rag',
    featured: true
  },
  {
    title: 'Audiophile E2E Pipeline',
    description: 'End-to-end data pipeline that extracts data from Crinacle\'s Headphone databases, transforms and loads it for analysis.',
    technologies: ['Python', 'ETL', 'Data Pipeline', 'Pandas'],
    githubUrl: 'https://github.com/Rishabh044/audiophile-e2e-pipeline',
    featured: true
  },
  {
    title: 'Airbnb Data Science Project',
    description: 'Data science project analyzing factors that most affect Airbnb listing prices using statistical techniques and ML models.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
    githubUrl: 'https://github.com/Rishabh044/Airbnb-Data-Science-Project',
    featured: true
  },
  {
    title: 'Shoe Price Tracker',
    description: 'Web scraping application that tracks shoe prices across e-commerce platforms and notifies users of price drops.',
    technologies: ['Python', 'Web Scraping', 'BeautifulSoup', 'Automation'],
    githubUrl: 'https://github.com/Rishabh044/shoe-price-tracker',
    featured: true
  },
  {
    title: 'Crypto Analyser',
    description: 'Cryptocurrency analysis tool providing insights and visualizations for crypto market trends.',
    technologies: ['JavaScript', 'React', 'Charts', 'API Integration'],
    githubUrl: 'https://github.com/Rishabh044/crypto-analyser',
    featured: true
  },
  {
    title: 'Web3.0 Blockchain App',
    description: 'Full-stack Web 3.0 application built with React and Solidity, enabling blockchain transactions.',
    technologies: ['React', 'Solidity', 'Ethereum', 'Web3.js'],
    githubUrl: 'https://github.com/Rishabh044/project_web3.0',
    featured: true
  },
  {
    title: 'YouTube Clone',
    description: 'A YouTube clone application replicating core features like video browsing and playback.',
    technologies: ['JavaScript', 'React', 'YouTube API', 'CSS'],
    githubUrl: 'https://github.com/Rishabh044/yt-clone'
  },
  {
    title: 'WhatsApp Clone',
    description: 'Real-time messaging application clone with chat functionality.',
    technologies: ['JavaScript', 'React', 'Firebase', 'Real-time DB'],
    githubUrl: 'https://github.com/Rishabh044/Whatsapp-clone'
  },
  {
    title: 'Crypto App',
    description: 'Dashboard displaying top 100 cryptocurrencies using CoinGecko API with real-time data.',
    technologies: ['JavaScript', 'React', 'CoinGecko API', 'Charts'],
    githubUrl: 'https://github.com/Rishabh044/Crypto-app'
  },
  {
    title: 'Classforma',
    description: 'Classroom management platform for organizing courses and student interactions.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Rishabh044/classforma'
  }
]

export const certifications: Certification[] = [
  { name: 'Databricks Certified Data Engineer Associate', issuer: 'Databricks' },
  { name: 'Azure Databricks & Spark For Data Engineers', issuer: 'Udemy' },
  { name: 'Microsoft Power BI Desktop for Business Intelligence', issuer: 'Udemy' },
  { name: 'Advanced Business Analytics Specialization', issuer: 'Coursera' },
  { name: 'Mathematics for ML and Data Science Specialization', issuer: 'Coursera' },
  { name: 'The Ultimate MySQL Bootcamp', issuer: 'Udemy' },
  { name: 'Introduction to Blockchain Technologies', issuer: 'Coursera' }
]

export const education = {
  institution: 'Indian Institute of Technology (BHU), Varanasi',
  degree: 'Bachelor of Technology (B.Tech)',
  duration: 'Aug 2020 - Oct 2024',
  location: 'Varanasi, India'
}
