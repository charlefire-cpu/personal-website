export interface NavItem {
  label: string
  href: string
}

export interface ExperienceRole {
  title: string
  company: string
  project?: string
  period: string
  highlights?: string[]
  compact?: boolean
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Profile {
  name: string
  title: string
  tagline: string
  about: string
  competencies: string[]
  skillGroups: SkillGroup[]
  experience: ExperienceRole[]
  education: {
    degree: string
    school: string
    year: string
  }
  resume: {
    description: string
    filePath: string
    fileName: string
  }
  contact: {
    message: string
    email: string
    linkedin?: string
    github?: string
    location: string
  }
  navigation: NavItem[]
}

export const profile: Profile = {
  name: 'Charmaine Buffe',
  title: 'Scrum Master | Project Manager',
  tagline:
    'Agile-focused Scrum Master and Project Manager with 10+ years of IT experience in software engineering, Agile delivery, enterprise releases, and banking and financial systems projects.',
  about:
    'I am an Agile-focused Scrum Master and Project Manager with over 10 years of IT experience across software engineering, Agile delivery, and banking and financial systems projects. I lead cross-functional teams, facilitate Agile transformation, manage enterprise releases, support production deployments, and drive end-to-end project delivery.\n\nMy background as a former Software Engineer gives me a strong technical foundation, enabling me to communicate effectively with business stakeholders, development teams, QA, operations, and leadership.',
  competencies: [
    'Agile & Scrum Methodologies',
    'IT Project Management',
    'Cross-Functional Team Leadership',
    'Risk & Stakeholder Management',
    'Software Development Lifecycle (SDLC)',
    'Enterprise Release Management',
    'Production Deployment Support',
    'Requirements, UAT, and Post-Go-Live Coordination',
    'Executive Reporting and Presentations',
    'Technical and Business Communication',
  ],
  skillGroups: [
    {
      category: 'Agile and Project Tools',
      skills: ['Jira', 'Confluence', 'Trello'],
    },
    {
      category: 'Programming and Backend Technologies',
      skills: ['PHP', 'Java', 'Spring Boot', 'REST APIs', 'GoLang'],
    },
    {
      category: 'Testing and Quality Assurance',
      skills: ['Katalon', 'Selenium', 'QA Automation', 'UAT Support'],
    },
    {
      category: 'Delivery and SDLC',
      skills: [
        'Agile Delivery',
        'SDLC',
        'Release Management',
        'Risk Management',
        'Deployment Support',
      ],
    },
  ],
  experience: [
    {
      title: 'Scrum Master',
      company: 'NCS PH (formerly Yondu, Inc.)',
      period: 'April 2022 – Present',
      highlights: [
        'Facilitate Scrum ceremonies and coach teams on Agile best practices.',
        'Remove blockers, monitor project progress, and manage risks across multiple teams and clients.',
        'Prepare and deliver reports and presentations for executives and external stakeholders.',
        'Partner with leadership to support Agile adoption, productivity, and collaboration.',
      ],
    },
    {
      title: 'Project Manager',
      company: 'NCS PH (formerly Yondu, Inc.)',
      project: 'Banking & Financial Services Project / MOCA Migration',
      period: '2024 – 2025',
      highlights: [
        'Delivered a multi-client payment processing and migration project.',
        'Coordinated IT, QA, Operations, and Relationship Managers throughout the delivery lifecycle.',
        'Managed requirements, UAT, deployment, and post-go-live activities.',
        'Developed contingency plans, technical briefs, training materials, and risk management updates.',
        'Oversaw deployment, escalations, and adoption support.',
      ],
    },
    {
      title: 'Software Engineer → Senior Software Engineer',
      company: 'NCS PH (formerly Yondu, Inc.)',
      period: 'June 2016 – April 2022',
      highlights: [
        'Contributed to e-commerce product development using Go and PHP.',
        'Designed and implemented backend systems for SMS processing and payroll using Java Spring Boot.',
        'Built and maintained APIs for backend processes and third-party client integrations.',
        'Implemented automated testing using Katalon and Selenium.',
        'Supported enterprise and client projects to ensure smooth delivery and technical accuracy.',
        'Mentored junior developers and collaborated with cross-functional teams to improve code quality and system performance.',
      ],
    },
    {
      title: 'Mid Software Engineer',
      company: 'Virtualidad / Vibal Publishing',
      period: 'November 2015 – June 2016',
      compact: true,
    },
    {
      title: 'Senior PHP Developer',
      company: 'Henderson Blake',
      period: 'May 2015 – November 2015',
      compact: true,
    },
    {
      title: 'Web Developer',
      company: 'Dev Touch Information Systems',
      period: 'June 2014 – April 2015',
      compact: true,
    },
    {
      title: 'Web / Software Developer',
      company: 'Eversun Software Corporation',
      period: 'May 2012 – June 2014',
      compact: true,
    },
    {
      title: 'PHP Programmer',
      company: 'Redfox Technologies',
      period: 'May 2011 – May 2012',
      compact: true,
    },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of the Philippines Los Baños',
    year: '2011',
  },
  resume: {
    description:
      'Download my professional resume for a detailed overview of my experience, skills, and career background.',
    filePath: '/resume/Charmaine-Buffe-Resume.pdf',
    fileName: 'Charmaine-Buffe-Resume.pdf',
  },
  contact: {
    message:
      'Interested in working together or exploring professional opportunities? Feel free to reach out by email or connect with me on LinkedIn.',
    email: 'charmbuffe@yahoo.com',
    linkedin: 'https://linkedin.com/in/charmbuffe',
    location: 'Cavite, Philippines',
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
}
