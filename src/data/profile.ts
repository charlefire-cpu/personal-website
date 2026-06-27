export interface NavItem {
  label: string
  href: string
}

export interface HeroCta {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'outline'
  download?: string
}

export interface SectionMeta {
  id?: string
  title: string
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

export interface ContactLabels {
  email: string
  linkedin: string
  github: string
  location: string
}

export const RESUME_PATH = '/resume/Charmaine-Buffe-Resume.pdf'
export const RESUME_FILENAME = 'Charmaine-Buffe-Resume.pdf'

export interface Profile {
  name: string
  navBrand: string
  title: string
  summary: string
  about: string[]
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
    buttonLabel: string
  }
  contact: {
    message: string
    email: string
    linkedin?: string
    github?: string
    location: string
    labels: ContactLabels
  }
  hero: {
    id: string
    ctas: HeroCta[]
  }
  sections: {
    about: SectionMeta
    coreCompetencies: SectionMeta
    technicalSkills: SectionMeta
    experience: SectionMeta & { previousRolesTitle: string }
    education: SectionMeta
    resume: SectionMeta
    contact: SectionMeta
  }
  navigation: NavItem[]
  footer: {
    rightsReserved: string
  }
}

export const profile: Profile = {
  name: 'Charmaine Buffe',
  navBrand: 'Charmaine',
  title: 'Scrum Master | Project Manager',
  summary:
    'Agile-focused Scrum Master and Project Manager with 10+ years of IT experience across software engineering, Agile delivery, enterprise releases, and banking/financial systems projects.',
  about: [
    'Charmaine Buffe is an Agile-focused Scrum Master and Project Manager with over 10 years of IT experience across software engineering, Agile delivery, and banking/financial systems projects. She has experience leading cross-functional teams, facilitating Agile transformation, managing enterprise releases, supporting production deployments, and driving end-to-end project delivery.',
    'Her background as a former Software Engineer gives her a strong technical foundation, allowing her to bridge communication between business stakeholders, development teams, QA, operations, and leadership.',
  ],
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
      company: 'NCS PH formerly Yondu, Inc.',
      period: 'April 2022 – Present',
      highlights: [
        'Facilitates Scrum ceremonies and coaches teams on Agile best practices.',
        'Removes blockers, monitors project progress, and manages risks across multiple teams and clients.',
        'Prepares and delivers reports and presentations for executives and external stakeholders.',
        'Partners with leadership to support Agile adoption, productivity, and collaboration.',
      ],
    },
    {
      title: 'Project Manager',
      company: 'NCS PH formerly Yondu, Inc.',
      project: 'Banking & Financial Services Project / MOCA Migration',
      period: '2024 – 2025',
      highlights: [
        'Delivered a multi-client payment processing and migration project.',
        'Coordinated IT, QA, Operations, and Relationship Managers.',
        'Managed requirements, UAT, deployment, and post-go-live activities.',
        'Developed contingency plans, technical briefs, training materials, and risk management updates.',
        'Oversaw deployment, escalations, and adoption support.',
      ],
    },
    {
      title: 'Software Engineer → Senior Software Engineer',
      company: 'NCS PH formerly Yondu, Inc.',
      period: 'June 2016 – April 2022',
      highlights: [
        'Contributed to the development of e-commerce products using GoLang and PHP.',
        'Designed and implemented backend programs for SMS processing and payroll systems using Java Spring Boot.',
        'Built and maintained APIs for backend processes and third-party client integrations.',
        'Implemented automated testing using Katalon and Selenium.',
        'Supported enterprise and client projects, ensuring smooth delivery and technical accuracy.',
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
      'Download a copy of my professional resume for a detailed overview of my experience, skills, and employment background.',
    filePath: RESUME_PATH,
    fileName: RESUME_FILENAME,
    buttonLabel: 'Download Resume',
  },
  contact: {
    message:
      'Interested in working together or discussing professional opportunities? Feel free to reach out through email or connect with me professionally.',
    email: 'charmbuffe@yahoo.com',
    linkedin: 'https://linkedin.com/in/charmbuffe',
    location: 'Cavite, Philippines',
    labels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
    },
  },
  hero: {
    id: 'home',
    ctas: [
      { label: 'View Experience', href: '#experience', variant: 'outline' },
      {
        label: 'Download Resume',
        href: RESUME_PATH,
        variant: 'primary',
        download: RESUME_FILENAME,
      },
    ],
  },
  sections: {
    about: { id: 'about', title: 'About' },
    coreCompetencies: { id: 'skills', title: 'Core Competencies' },
    technicalSkills: { title: 'Technical Skills' },
    experience: {
      id: 'experience',
      title: 'Professional Experience',
      previousRolesTitle: 'Previous Roles',
    },
    education: { id: 'education', title: 'Education' },
    resume: { id: 'resume', title: 'Resume' },
    contact: { id: 'contact', title: 'Contact' },
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
  footer: {
    rightsReserved: 'All rights reserved.',
  },
}
