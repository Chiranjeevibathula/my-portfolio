import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaInstagram, FaDownload, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaAward, FaBars, FaTimes, FaExternalLinkAlt,
  FaArrowUp, FaCode, FaBriefcase
} from 'react-icons/fa';

import profilePic from './profile.jpeg';
import emailjs from '@emailjs/browser';
import resumeFile from './RESUME.pdf';
import './styles.css';

import cert1 from './certificates/cert1.png';
import cert2 from './certificates/cert2.png';
import cert3 from './certificates/cert3.png';
import cert4 from './certificates/cert4.png';
import cert5 from './certificates/cert5.png';
import cert7 from './certificates/cert7.png';
import cert8 from './certificates/cert8.png';
import cert9 from './certificates/cert9.png';
import cert10 from './certificates/cert10.png';
import cert11 from './certificates/cert11.png';
import cert12 from './certificates/cert12.png';
import cert13 from './certificates/cert13.jpeg';
import cert14 from './certificates/cert14.jpeg';
import cert15 from './certificates/cert15.jpeg';
import cert16 from './certificates/cert16.jpeg';
import cert17 from './certificates/cert17.jpeg';
import cert18 from './certificates/cert18.jpeg';
import cert19 from './certificates/cert19.png';
import cert20 from './certificates/cert20.png';
import cert21 from './certificates/cert21.png';
import gateBadge from './certificates/gateBadge.png';

const roles = [
  'Generative AI Engineer',
  'AI Search & RAG Developer',
  'Full-Stack AI Developer',
  'AI Automation Engineer',
  'Building Intelligent AI Products 🚀'
];

const aiSignals = [
  'LLM', 'RAG', 'AI AGENT', 'VECTOR DB', 'SEMANTIC SEARCH',
  'GENAI', 'AUTOMATION', 'API', 'MODEL', 'EMBEDDINGS', 'WORKFLOW', 'NEURAL'
];

function AIAtmosphere() {
  return (
    <div className="ai-atmosphere" aria-hidden="true">
      <div className="reactor-core"><span /><span /><span /></div>
      <div className="neural-orbit orbit-one" />
      <div className="neural-orbit orbit-two" />
      <div className="neural-orbit orbit-three" />

      <div className="data-rain">
        {Array.from({ length: 42 }).map((_, i) => (
          <span key={i} style={{ '--i': i }}>
            {i % 4 === 0 ? '01' : i % 4 === 1 ? 'AI' : i % 4 === 2 ? 'RAG' : '</>'}
          </span>
        ))}
      </div>

      <div className="ai-symbol-cloud">
        {aiSignals.map((signal, i) => (
          <span key={signal} style={{ '--i': i }}>{signal}</span>
        ))}
      </div>

      <div className="energy-lines">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('aiMl');
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);

    const handleScroll = () => setShowScrollTop(window.pageYOffset > 300);
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    document.body.classList.add('dark-mode');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const currentRole = roles[textIndex];
    let timer;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 45);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 85);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1600);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Chiranjeevi_Bathula_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_ds3e8zo';
    const TEMPLATE_ID = 'template_id159iu';
    const PUBLIC_KEY = 'vblpCG1W9AJnjqHpd';

    setFormStatus('Sending message...');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'chiranjeevibathula06@gmail.com',
      reply_to: formData.email
    };

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      if (response.status === 200) {
        setFormStatus('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('❌ Failed to send message. Please try again or contact me directly via email.');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const projects = [
    {
      title: 'AI Prior Art Discovery Engine',
      description: 'Contributed to the development of an AI-powered Prior Art Discovery Engine during my internship. The platform leverages semantic search, vector embeddings, and Large Language Models to discover relevant patents, assess invention novelty, analyze claim overlap, visualize patent relationships through a knowledge graph, and generate comprehensive prior-art discovery reports.',
      image: require('./ai-prior-art-discovery-engine.png'),
      tech: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Python', 'Sentence Transformers', 'Qdrant', 'OpenAI API', 'ReportLab', 'Docker', 'REST APIs'],
      github: 'https://github.com/Chiranjeevibathula/ai-prior-art-discovery-engine',
      category: '🏢 Internship Project'
    },
    {
      title: 'RankForge AI',
      description: 'An AI-powered Intelligent Candidate Discovery & Ranking System built for large-scale recruitment. RankForge AI processes candidate profiles using a hybrid multi-signal ranking engine that combines technical fit, retrieval relevance, behavioral indicators, production experience, and risk detection to generate an explainable Top-N candidate shortlist. The system also provides transparent ranking reasons, score visualization, downloadable ranked results, and an interactive Streamlit demo.',
      image: require('./rankforge-ai.png'),
      tech: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Information Retrieval', 'NLP', 'Candidate Ranking', 'Explainable AI', 'JSONL Processing', 'CSV Export'],
      github: 'https://github.com/Chiranjeevibathula/redrob-ai-candidate-ranking',
      live: 'https://redrob-ai-candidate-ranking.streamlit.app',
      category: '🧠 AI Search & Ranking'
    },
    {
      title: 'Opportunity OS',
      description: 'Built a full-stack AI-powered mobile application that helps students, developers, researchers, founders, and professionals discover verified scholarships, internships, hackathons, fellowships, grants, startup programs, research opportunities, and government benefits. Features AI-based opportunity matching, trust scoring, personalized recommendations, opportunity tracking, secure authentication, and Supabase-powered backend infrastructure.',
      image: require('./opportunity-os.jpeg'),
      tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'AI Matching Engine', 'Authentication', 'Mobile App Development', 'EAS Build', 'UI/UX Design'],
      github: 'https://github.com/Chiranjeevibathula/opportunity-os',
      live: 'https://github.com/Chiranjeevibathula/opportunity-os/releases/download/v1.0.1/Opportunity-OS-v1.0.1.apk',
      category: '📱 Mobile App'
    },
    {
      title: 'AI Startup Launchpad',
      description: 'Built a full-stack GenAI SaaS MVP that helps founders generate structured startup plans using AI. The platform includes secure authentication, project management, AI-powered startup plan generation, generation history tracking, and persistent user-specific data storage using Supabase and OpenAI.',
      image: require('./ai-startup-launchpad.png'),
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase Auth', 'PostgreSQL', 'OpenAI API', 'GenAI'],
      github: 'https://github.com/Chiranjeevibathula/ai-startup-launchpad',
      live: 'https://ai-startup-launchpad.vercel.app/',
      category: '🚀 GenAI SaaS'
    },
    {
      title: 'RAG-Based AI Knowledge Assistant',
      description: 'Built a Retrieval-Augmented Generation AI assistant using n8n and OpenAI that answers user queries strictly from uploaded documents. The system performs PDF extraction, embedding generation, semantic search, and context-aware response generation using vector databases and conversational memory.',
      image: require('./rag-ai-assistant.png'),
      tech: ['n8n', 'OpenAI API', 'GPT-4o mini', 'RAG', 'Vector Database', 'OpenAI Embeddings', 'Semantic Search', 'PDF Processing', 'AI Agents'],
      github: 'https://github.com/Chiranjeevibathula/document-rag-n8n',
      category: '🤖 RAG / GenAI'
    },
    {
      title: 'YouTube Video Learning Assistant',
      description: 'Built an AI-powered learning assistant using n8n, OpenAI, and Qdrant that transforms YouTube videos into interactive learning experiences. The system extracts video transcripts, generates embeddings, performs semantic search using RAG, and provides contextual answers strictly from video knowledge.',
      image: require('./youtube-learning-assistant.png'),
      tech: ['n8n', 'OpenAI API', 'GPT-4o mini', 'Qdrant', 'RAG', 'Vector Database', 'Semantic Search', 'YouTube Transcript API', 'AI Agents'],
      github: 'https://github.com/Chiranjeevibathula/youtube-rag-n8n',
      category: '🤖 RAG / GenAI'
    },
    {
      title: 'Website RAG Chatbot',
      description: 'An AI-powered Website Knowledge Assistant that transforms website content into an intelligent chatbot using RAG architecture, semantic search, OpenAI embeddings, and Qdrant vector database. The system crawls websites, stores vectorized knowledge, and generates grounded AI responses directly from website data.',
      image: require('./website-rag-chatbot.png'),
      tech: ['n8n', 'OpenAI API', 'GPT-4o Mini', 'Qdrant', 'RAG', 'Semantic Search', 'Vector DB', 'JavaScript'],
      github: 'https://github.com/Chiranjeevibathula/website-rag-chatbot',
      category: '🤖 RAG / GenAI'
    },
    {
      title: 'Telegram AI Assistant Bot',
      description: 'An AI-powered Telegram assistant built using n8n workflow automation and OpenAI GPT-4o mini. The bot receives user messages in real time, processes queries using AI, and generates intelligent contextual responses automatically through Telegram integration.',
      image: require('./telegram-ai-bot.png'),
      tech: ['n8n', 'OpenAI API', 'GPT-4o mini', 'Telegram Bot API', 'JavaScript', 'Workflow Automation'],
      github: 'https://github.com/Chiranjeevibathula/n8n-workflows',
      category: '⚡ AI Automation'
    },
    {
      title: 'AI-Powered Email Assistant',
      description: 'Designed and deployed an AI-powered email assistant using n8n and OpenAI GPT-4o mini. The workflow automatically monitors incoming emails, analyzes content, generates professional AI-based replies, and creates Gmail reply drafts with human-in-the-loop verification.',
      image: require('./ai-email-assistant.png'),
      tech: ['n8n', 'OpenAI API', 'GPT-4o mini', 'Gmail API', 'Workflow Automation', 'AI Agents'],
      github: 'https://github.com/Chiranjeevibathula/n8n-workflows',
      category: '⚡ AI Automation'
    },
    {
      title: 'AI Prompt Vault',
      description: 'A full-stack AI prompt management platform where users can securely create, organize, search, favorite, edit, delete, and copy AI prompts. Built with JWT authentication, MongoDB Atlas, responsive UI, and deployed on Render.',
      image: require('./ai-prompt-vault.jpeg'),
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Chiranjeevibathula/ai-prompt-vault',
      live: 'https://ai-prompt-vault-zbdc.onrender.com',
      category: '💻 Full Stack'
    },
    {
      title: 'Income Tax Management System',
      description: 'A full-stack web application designed to calculate and manage employee income tax efficiently, providing detailed tax breakdowns based on income, deductions, and allowances with an intuitive user interface.',
      image: require('./income.png'),
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Chiranjeevibathula/income-tax-management-system',
      live: 'https://incometaxmanagement.wuaze.com/?i=1',
      category: '💻 Full Stack'
    },
    {
      title: 'Leave Management System',
      description: 'A web-based system for managing employee leave requests with admin dashboard, approval/rejection workflow, and email notifications with reasons. Includes OTP-based authentication and secure user management.',
      image: require('./leave.png'),
      tech: ['PHP', 'MySQL', 'JavaScript', 'PHPMailer'],
      github: 'https://github.com/Chiranjeevibathula/leave-management-system',
      live: 'https://leave-management.kesug.com/leave-app/',
      category: '💻 Full Stack'
    },
    {
      title: 'Municipal Community Complaint System',
      description: 'A platform for users to report and track complaints with category-wise management, admin dashboard, and notification system. Designed for efficient issue resolution and user engagement.',
      image: require('./complaint.png'),
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Chiranjeevibathula/municipal-community-complaint-system',
      live: 'https://municipalcommunitycomplaint.free.nf/?i=1',
      category: '💻 Full Stack'
    },
    {
      title: 'Smart Cultivation System',
      description: 'A smart agriculture-based web application designed to assist farmers in making better cultivation decisions using data-driven insights. The system helps monitor crop conditions, provides recommendations, and improves productivity through efficient resource management.',
      image: require('./cultivation.png'),
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Chiranjeevibathula/smart-cultivation-system',
      live: 'https://smart-cultivation.kesug.com/smart_cultivation_system/',
      category: '💻 Full Stack'
    }
  ];

  const filteredProjects = activeProjectCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeProjectCategory);

  const certificates = {
    cryptography: [
      { id: 1, title: 'Fundamentals of Cryptography', issuer: 'Infosys Springboard', date: 'December 2025', description: 'Completed Fundamentals of Cryptography, gaining knowledge of core concepts used to secure digital communication, including encryption techniques, cryptographic algorithms, and data protection methods.', image: cert1, credentialLink: 'https://verify.onwingspan.com', skills: ['Cryptography', 'Data Security', 'Encryption', 'Cybersecurity'] },
      { id: 2, title: 'Python Case Study – Cryptography', issuer: 'Infosys Springboard', date: 'February 2026', description: 'Applied cryptographic concepts using Python through practical case studies, focusing on encryption, decryption, and secure data handling techniques.', image: cert3, credentialLink: 'https://verify.onwingspan.com', skills: ['Python', 'Cryptography', 'Encryption', 'Problem Solving'] },
      { id: 3, title: 'Cryptography in IT Security & Hacking', issuer: 'Infosys Springboard', date: 'February 2026', description: 'Explored the role of cryptography in IT security and ethical hacking, understanding how encryption is used to protect systems and how vulnerabilities can be identified.', image: cert4, credentialLink: 'https://verify.onwingspan.com', skills: ['Ethical Hacking', 'Cryptography', 'Security Concepts', 'Cybersecurity'] },
      { id: 4, title: 'Cryptography: Introduction to PKI', issuer: 'Infosys Springboard', date: 'February 2026', description: 'Studied Public Key Infrastructure (PKI), including digital certificates, key management, and secure communication using asymmetric encryption techniques.', image: cert5, credentialLink: 'https://verify.onwingspan.com', skills: ['PKI', 'Digital Certificates', 'Encryption', 'Cybersecurity'] }
    ],
    cybersecurity: [
      { id: 5, title: 'Cybersecurity Fundamentals', issuer: 'Infosys Springboard', date: 'December 2025', description: 'Learned the fundamentals of cybersecurity including threat analysis, risk management, network security, and best practices for protecting systems and data from cyber attacks.', image: cert2, credentialLink: 'https://verify.onwingspan.com', skills: ['Cybersecurity', 'Network Security', 'Risk Management', 'Threat Analysis'] }
    ],
    aiMl: [
      {
        id: 17,
        title: 'Natural Language Processing',
        issuer: 'NPTEL - IIT Kharagpur',
        date: 'Apr 2026',
        image: cert17,
        description: 'Successfully completed the NPTEL Natural Language Processing course, gaining knowledge of text processing, language modeling, machine learning techniques, and modern NLP concepts.',
        skills: ['Natural Language Processing', 'Artificial Intelligence', 'Machine Learning', 'Text Processing', 'Language Models'],
        credentialLink: 'https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs45/NOC26CS45S105020168204227715.pdf'
      },
      {
        id: 19,
        title: 'GenAI Powered Data Analytics Job Simulation',
        issuer: 'Tata Group (Forage)',
        date: 'Jun 2026',
        image: cert19,
        description: 'Completed Tata Group’s GenAI Powered Data Analytics Job Simulation through Forage, gaining practical experience in exploratory data analysis, predictive modeling, data storytelling, and AI-driven business insights.',
        skills: ['Generative AI', 'Data Analytics', 'Predictive Modeling', 'Data Storytelling', 'Business Intelligence'],
        credentialLink: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a29971e89f90499ab7c1d04_1781171695436_completion_certificate.pdf?raw=1'
      },
      { id: 6, title: 'Introduction to Prompt Engineering', issuer: 'IBM', date: 'June 2024', description: 'Gained knowledge in designing effective prompts for AI models, understanding prompt optimization techniques, and improving AI-generated outputs.', image: cert7, skills: ['Prompt Engineering', 'AI', 'Generative AI', 'Problem Solving'] },
      { id: 7, title: 'Introduction to ChatGPT', issuer: 'UPValenciaX', date: 'August 2024', description: 'Explored the fundamentals of ChatGPT, including its applications, capabilities, and usage in real-world scenarios for automation and content generation.', image: cert8, skills: ['ChatGPT', 'AI Tools', 'Automation', 'Generative AI'] }
    ],
    problemSolvingCore: [
      {
        id: 20,
        title: 'Quantitative Research Job Simulation',
        issuer: 'JPMorgan Chase & Co. (Forage)',
        date: 'Jun 2026',
        image: cert20,
        description: 'Completed JPMorgan Chase & Co. Quantitative Research Job Simulation through Forage, working on price data analysis, credit risk assessment, financial research, and quantitative problem-solving tasks.',
        skills: ['Quantitative Research', 'Data Analysis', 'Credit Risk Analysis', 'Financial Modeling', 'Analytical Thinking'],
        credentialLink: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_6a29971e89f90499ab7c1d04_1781176257402_completion_certificate.pdf?raw=1'
      },
      { id: 8, title: 'Aptitude and Reasoning', issuer: 'GeeksforGeeks', date: 'December 2025', description: 'Developed strong analytical and logical reasoning skills, focusing on problem-solving techniques useful for competitive exams and technical interviews.', image: cert9, credentialLink: 'https://media.geeksforgeeks.org/courses/certificates/0c0dd43acc7c975c090164d7ed66f44b.pdf', skills: ['Aptitude', 'Logical Reasoning', 'Problem Solving'] },
      { id: 9, title: 'GATE Set Go – CSE / DA', issuer: 'GeeksforGeeks', date: 'February 2026', description: 'Prepared for GATE with a focus on core computer science subjects including data structures, algorithms, and problem-solving techniques.', image: cert10, credentialLink: 'https://media.geeksforgeeks.org/courses/certificates/1c8fa77788e944d3e1d69c7dd80861f8.pdf', skills: ['Data Structures', 'Algorithms', 'GATE Preparation'] },
      { id: 10, title: 'Problem Solving (Basic)', issuer: 'HackerRank', date: 'December 2025', description: 'Demonstrated foundational problem-solving skills by successfully completing HackerRank\'s Problem Solving (Basic) certification, covering algorithms, data structures, and logical thinking.', image: cert11, credentialLink: 'https://www.hackerrank.com/certificates/54afdebbb471', skills: ['Problem Solving', 'Algorithms', 'Data Structures', 'Logical Thinking'] },
      { id: 11, title: 'Problem Solving (Intermediate)', issuer: 'HackerRank', date: 'December 2025', description: 'Demonstrated intermediate-level problem-solving skills by solving complex algorithmic challenges on HackerRank, focusing on data structures, optimization techniques, and efficient coding practices.', image: cert12, credentialLink: 'https://www.hackerrank.com/certificates', skills: ['Problem Solving', 'Algorithms', 'Data Structures', 'Optimization', 'Logical Thinking'] }
    ],
    workshops: [
      { id: 13, title: 'Placement Preparation Programme', issuer: 'eDC IIT Delhi & Indian Institute of Placement', date: 'March 2026', description: 'Successfully completed a placement preparation programme focused on building essential skills required to secure high-paying job opportunities, including aptitude, communication, and interview strategies.', image: cert13, skills: ['Aptitude', 'Interview Preparation', 'Communication Skills', 'Career Development'] },
      { id: 12, title: 'AI Prompt Engineering Workshop', issuer: 'JNTUA College of Engineering, Anantapur', date: 'February 2026', description: 'Participated in a one-day workshop on AI Prompt Engineering, gaining insights into designing effective prompts and understanding how AI models generate responses for real-world applications.', image: cert14, skills: ['Prompt Engineering', 'Artificial Intelligence', 'Generative AI', 'Problem Solving'] },
      { id: 14, title: 'Campus to Corporate Workshop (R23)', issuer: 'JNTUA College of Engineering, Anantapur', date: 'November 2025', description: 'Completed a one-week domain-specific workshop focused on preparing students for the transition from campus to corporate, covering professional skills, industry expectations, and career readiness.', image: cert15, skills: ['Professional Skills', 'Corporate Readiness', 'Communication', 'Career Development'] }
    ],
    achievements: [
      { id: 15, title: 'Merit Scholarship Award', issuer: 'JNTUA College of Engineering, Anantapur', date: '2024-2025', description: 'Awarded merit scholarship for outstanding academic performance, securing second position among students across multiple branches for the academic year 2024–25.', image: cert16, skills: ['Academic Excellence', 'Consistency', 'Discipline', 'Performance'] },
      {
        id: 21,
        title: 'LeetCode Algorithm Deconstructor Badge',
        issuer: 'LeetCode',
        date: '2026',
        image: cert21,
        description: 'Earned the Algorithm Deconstructor Badge on LeetCode by demonstrating strong problem-solving skills, algorithmic thinking, and the ability to analyze and optimize complex coding challenges.',
        skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Logical Thinking', 'Competitive Programming'],
        credentialLink: 'https://leetcode.com/medal/?showImg=0&id=10423372&isLevel=false'
      },
      {
  id: 22,
  title: "GATE 2026 Qualified (CSE)",
  issuer: "Indian Institute of Technology (IIT) Guwahati",
  date: "2026",
  image: gateBadge, // create a simple GATE achievement card instead of the scorecard
  description:
    "Qualified the Graduate Aptitude Test in Engineering (GATE) 2026 in Computer Science & Information Technology on my first attempt, demonstrating strong fundamentals in Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Theory of Computation, and Computer Architecture.",
  skills: [
    "Computer Science Fundamentals",
    "Algorithms",
    "Data Structures",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "Theory of Computation"
  ]
},
      {
        id: 18,
        title: 'All India NCAT 2026',
        issuer: 'Naukri Campus',
        date: 'Jun 2026',
        image: cert18,
        description: 'Successfully participated in the All India NCAT 2026 (Naukri Campus Aptitude Test), demonstrating aptitude, logical reasoning, problem-solving, and analytical thinking skills.',
        skills: ['Aptitude', 'Logical Reasoning', 'Problem Solving', 'Analytical Thinking', 'Career Assessment'],
        credentialLink: 'https://www.naukri.com/campus/certificates/nc_ai_ncat_participation_may_2026/v0/6a1995fe542fee52d1240175?utm_source=certificate&utm_medium=copy&utm_campaign=6a1995fe542fee52d1240175'
      }
    ]
  };

  if (loading) {
    return (
      <div className="loading">
        <AIAtmosphere />
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="portfolio-shell">
      <AIAtmosphere />

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>&lt;/&gt; Portfolio</div>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((item) => (
              <li key={item}>
                <button className="nav-link-btn" onClick={() => scrollToSection(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home">
        <div className="container hero">
          <motion.div className="hero-content" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2>Hello, I'm</h2>
            <h1>Bathula Chiranjeevi</h1>

            <div className="typing-text">
              <span className="typed-cursor">{typedText}</span>
              <span className="cursor">|</span>
            </div>

            <p>
              Generative AI Engineer & Full-Stack Developer building intelligent AI products,
              RAG systems, semantic search applications, AI automations, and scalable web &
              mobile solutions.
            </p>

            <div className="btn-group">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Hire Me</button>
              <button className="btn btn-outline" onClick={handleDownload}>
                <FaDownload style={{ marginRight: '8px' }} /> Download Resume
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/Chiranjeevibathula" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/chiranjeevibathula" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href="https://www.instagram.com/chiru.bathula?igsh=MTFoaGwya2JlNWJpeQ==" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div className="hero-image" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <img src={profilePic} alt="Bathula Chiranjeevi - Profile" className="profile-img" />
          </motion.div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <h3>Who Am I?</h3>

              <p>I'm a passionate <strong>Generative AI Engineer</strong> and Computer Science undergraduate who enjoys building intelligent software that solves real-world problems using AI. I love turning complex ideas into practical products that combine AI with modern web and mobile technologies.</p>

              <p>My experience spans <strong>LLMs, Retrieval-Augmented Generation (RAG), AI agents, semantic search, vector databases, AI automation, and full-stack application development</strong>. I've built AI-powered patent intelligence systems, candidate ranking platforms, SaaS applications, mobile apps, and intelligent assistants using React, FastAPI, OpenAI, Qdrant, n8n, Supabase, and PostgreSQL.</p>

              <p>During my internship at <strong>DeepDrishti.ai</strong>, I contributed to an AI Prior-Art Discovery Engine and gained hands-on experience building production-oriented AI applications. I'm continuously exploring emerging AI technologies and creating scalable, impactful software for real-world use cases.</p>

              <div className="stats">
                <div className="stat-card"><div className="stat-icon"><FaCode /></div><div className="stat-value">13+</div><div className="stat-label">Projects</div></div>
                <div className="stat-card"><div className="stat-icon"><FaBriefcase /></div><div className="stat-value">1</div><div className="stat-label">Internship Experience</div></div>
                <div className="stat-card"><div className="stat-icon"><FaAward /></div><div className="stat-value">20+</div><div className="stat-label">Certifications</div></div>
              </div>
            </div>

            <div>
              <div className="education-card">
                <h3>🎓 Education</h3>
                <p><strong>B.Tech in Computer Science Engineering</strong><br />Jawaharlal Nehru Technological University Anantapur College Of Engineering (JNTUACEA), Ananthapuramu, 2023-2027<br />CGPA: 9.18/10</p>
                <p style={{ marginTop: '1rem' }}><strong>Intermediate (Higher Secondary Education)</strong><br />Sri Vikas Junior College, Vinjamur, 2021-2023<br />Percentage: 98%</p>
              </div>

              <div className="education-card">
                <h3>🚀 What I Do</h3>
                <p>✓ Build AI-powered web and mobile applications<br />✓ Develop Generative AI products using LLMs and RAG<br />✓ Design semantic search systems with vector databases<br />✓ Create AI automation workflows and intelligent AI agents<br />✓ Build scalable full-stack SaaS platforms and REST APIs<br />✓ Transform real-world ideas into production-ready AI solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills" className="skills">
  <div className="container">
    <h2 className="section-title">Technical Skills</h2>

    <div className="skills-summary">
      {[
        'Python', 'Java', 'C', 'JavaScript', 'TypeScript',
        'React.js', 'Next.js', 'FastAPI', 'Tailwind CSS',
        'OpenAI API', 'RAG', 'AI Agents', 'n8n',
        'Qdrant', 'Supabase', 'PostgreSQL', 'Git/GitHub', 'Docker'
      ].map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>

    <div className="skills-grid">
      {[
        ['🤖 Generative AI & LLMs', [
          ['🧠', 'OpenAI API', '90%'],
          ['📚', 'RAG Systems', '90%'],
          ['🤖', 'AI Agents', '85%'],
          ['💬', 'Prompt Engineering', '90%'],
          ['🔎', 'Semantic Search', '85%']
        ]],
        ['⚡ AI Automation', [
          ['⚙️', 'n8n Workflow Automation', '90%'],
          ['🔗', 'API Integration', '90%'],
          ['🌐', 'REST APIs', '85%'],
          ['📨', 'AI Workflow Design', '85%'],
          ['🚀', 'Business Automation', '80%']
        ]],
        ['💻 Full-Stack Development', [
          ['⚛️', 'React.js', '90%'],
          ['▲', 'Next.js', '85%'],
          ['🐍', 'FastAPI', '85%'],
          ['🎨', 'Tailwind CSS', '85%'],
          ['📱', 'React Native & Expo', '80%']
        ]],
        ['🗄️ Databases & Vector Search', [
          ['🟢', 'Supabase', '85%'],
          ['🐘', 'PostgreSQL', '80%'],
          ['🐬', 'MySQL', '85%'],
          ['🔍', 'Qdrant Vector DB', '85%'],
          ['📦', 'Embeddings', '85%']
        ]],
        ['👨‍💻 Programming Languages', [
          ['🐍', 'Python', '90%'],
          ['📜', 'JavaScript', '85%'],
          ['📘', 'TypeScript', '80%'],
          ['☕', 'Java', '80%'],
          ['⚡', 'C', '80%']
        ]],
        ['🛠️ Tools & Core Concepts', [
          ['🐙', 'Git & GitHub', '90%'],
          ['🐳', 'Docker', '80%'],
          ['🧩', 'Problem Solving', '90%'],
          ['🔄', 'DSA', '85%'],
          ['🗃️', 'DBMS & OOP', '85%']
        ]]
      ].map(([title, items]) => (
        <div className="skill-category" key={title}>
          <h3>{title}</h3>

          {items.map(([icon, name, level]) => (
            <div className="skill-item" key={name}>
              <div className="skill-info">
                <span className="skill-icon">{icon}</span>
                <span>{name}</span>
              </div>

              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: '0%' }}
                  whileInView={{ width: level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>
    

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="experience-card">
            <div className="experience-header">
              <div><h3>Generative AI Engineer Intern</h3><h4>DeepDrishti.ai</h4></div>
              <span className="experience-date">May 2026 – June 2026</span>
            </div>

            <p className="experience-desc">Completed a two-month internship focused on building AI-powered applications, intelligent automation workflows, and Retrieval-Augmented Generation (RAG) solutions. Contributed to the development of an AI Prior Art Discovery Engine while gaining hands-on experience with Large Language Models, semantic search, vector databases, AI agents, and full-stack AI application development.</p>

            <ul className="experience-list">
              <li>Contributed to the development of an AI-powered Prior Art Discovery Engine that enables semantic patent search, novelty assessment, claim overlap analysis, and automated prior-art report generation.</li>
              <li>Implemented semantic search pipelines using Sentence Transformers and Qdrant Vector Database to retrieve relevant patents based on contextual similarity.</li>
              <li>Integrated OpenAI APIs to generate AI-driven insights, explainable patent analysis, and intelligent response generation.</li>
              <li>Built AI automation workflows using n8n and AI agents to automate business processes and integrate external services through APIs.</li>
              <li>Worked with FastAPI, React, REST APIs, and Docker to develop and integrate scalable AI-powered backend and frontend components.</li>
              <li>Strengthened practical expertise in Generative AI, Retrieval-Augmented Generation (RAG), Vector Databases, Prompt Engineering, Knowledge Graphs, and AI-powered application development.</li>
            </ul>

            <div className="experience-tech">
              {['Python', 'FastAPI', 'React', 'TypeScript', 'OpenAI API', 'n8n', 'AI Agents', 'RAG', 'Sentence Transformers', 'Qdrant', 'Vector Databases', 'Knowledge Graphs', 'Docker', 'REST APIs', 'Git'].map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>

          <div className="project-categories">
            {['All', '🏢 Internship Project', '🧠 AI Search & Ranking', '📱 Mobile App', '🚀 GenAI SaaS', '🤖 RAG / GenAI', '⚡ AI Automation', '💻 Full Stack'].map((category) => (
              <button key={category} className={`category-btn ${activeProjectCategory === category ? 'active' : ''}`} onClick={() => setActiveProjectCategory(category)}>{category}</button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <motion.div key={idx} className="project-card" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.06 }} whileHover={{ y: -10 }}>
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-content">
                  <span className="project-category-badge">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">{project.tech.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}</div>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub →</a>}
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">{project.category === '📱 Mobile App' ? '📲 Download APK →' : 'Live Demo →'}</a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Watch Demo →</a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">📜 Certifications & Achievements</h2>

          <div className="category-tabs">
            {[
              ['aiMl', '🤖 AI & Machine Learning'],
              ['achievements', '🏆 Achievements'],
              ['problemSolvingCore', '💡 Problem Solving & Core'],
              ['cryptography', '🔐 Cryptography'],
              ['cybersecurity', '🛡️ Cybersecurity'],
              ['workshops', '🎓 Workshops']
            ].map(([key, label]) => (
              <button key={key} className={`category-tab ${activeCategory === key ? 'active' : ''}`} onClick={() => setActiveCategory(key)}>{label}</button>
            ))}
          </div>

          <p className="cert-subtitle">Click on any certificate to view details</p>

          <div className="certifications-gallery">
            {certificates[activeCategory].map((cert, idx) => (
              <motion.div key={cert.id} className="cert-gallery-card" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -10, scale: 1.03 }} onClick={() => { setSelectedCert(cert); setModalOpen(true); }}>
                <div className="cert-image-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-gallery-image" />
                  <div className="cert-overlay"><span className="view-details">Click to View Details</span></div>
                </div>
                <h3 className="cert-gallery-title">{cert.title}</h3>
                <p className="cert-gallery-issuer">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>

          <div className="cert-count">Showing {certificates[activeCategory].length} certificates</div>
        </div>
      </section>

      {modalOpen && selectedCert && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <motion.div className="modal-content" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', duration: 0.5 }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}><FaTimes /></button>

            <div className="modal-body">
              <div className="modal-image"><img src={selectedCert.image} alt={selectedCert.title} /></div>

              <div className="modal-details">
                <h2>{selectedCert.title}</h2>

                <div className="modal-info">
                  <div className="info-row"><span className="info-label">🏢 Issued by:</span><span className="info-value">{selectedCert.issuer}</span></div>
                  <div className="info-row"><span className="info-label">📅 Issued:</span><span className="info-value">{selectedCert.date}</span></div>
                  <div className="info-row"><span className="info-label">📝 Description:</span><p className="info-description">{selectedCert.description}</p></div>
                  <div className="info-row"><span className="info-label">⚡ Skills:</span><div className="skills-tags">{selectedCert.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div></div>
                </div>

                {selectedCert.credentialLink && selectedCert.credentialLink !== '#' && (
                  <div className="modal-actions">
                    <a href={selectedCert.credentialLink} target="_blank" rel="noopener noreferrer" className="verify-btn">
                      Verify Certificate <FaExternalLinkAlt />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm always interested in hearing about new opportunities, collaborations, or just having a chat. Feel free to reach out!</p>

              <div className="contact-details">
                <div className="contact-item"><FaEnvelope className="contact-icon" /><div><h4>Email</h4><p>chiranjeevibathula06@gmail.com</p></div></div>
                <div className="contact-item"><FaPhone className="contact-icon" /><div><h4>Phone</h4><p>+91 9347631068</p></div></div>
                <div className="contact-item"><FaMapMarkerAlt className="contact-icon" /><div><h4>Location</h4><p>Andhra Pradesh, India</p></div></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group"><input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
              <div className="form-group"><input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /></div>
              <div className="form-group"><textarea rows="5" placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required /></div>
              <button type="submit" className="submit-btn" disabled={formStatus === 'Sending message...'}>{formStatus === 'Sending message...' ? 'Sending...' : 'Send Message'}</button>
              {formStatus && <div className={`status-message ${formStatus.includes('✅') ? 'success' : 'error'}`}>{formStatus}</div>}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-social">
          <a href="https://github.com/Chiranjeevibathula" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/chiranjeevibathula/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/chiru.bathula?igsh=MTFoaGwya2JlNWJpeQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p>&copy; 2026 Bathula Chiranjeevi. All rights reserved. | Built with React.js</p>
      </footer>

      {showScrollTop && <div className="scroll-top" onClick={scrollToTop}><FaArrowUp /></div>}
    </div>
  );
}

export default App;