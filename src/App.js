import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAward,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaSun,
  FaMoon,
  FaArrowUp,
  FaCode
} from 'react-icons/fa';

import profilePic from './profile.jpeg';
import emailjs from '@emailjs/browser';
import resumeFile from './RESUME.pdf';

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

const roles = [
  "AI Automation & GenAI Developer",
  "Full Stack SaaS Builder",
  "Building RAG Systems & AI Agents",
  "BTech Computer Science Student",
  "Creating Real-World AI Solutions 🚀"
];

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
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
const [activeCategory, setActiveCategory] = useState('cryptography');
const [activeProjectCategory, setActiveProjectCategory] = useState('All');

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.pageYOffset > 300);
    });
    
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[textIndex];
    
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
  }, [charIndex, isDeleting, textIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
  
  // EmailJS configuration - Replace with your actual keys
  const SERVICE_ID = 'service_ds3e8zo';     // Get from EmailJS dashboard
  const TEMPLATE_ID = 'template_id159iu';   // Get from EmailJS dashboard
  const PUBLIC_KEY = 'vblpCG1W9AJnjqHpd';     // Get from EmailJS dashboard
  
  setFormStatus('Sending message...');
  
  // Prepare template parameters
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'chiranjeevibathula06@gmail.com', // Your email
    reply_to: formData.email
  };
  
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    
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
    title: 'AI Startup Launchpad',
    description:
      'Built a full-stack GenAI SaaS MVP that helps founders generate structured startup plans using AI. The platform includes secure authentication, project management, AI-powered startup plan generation, generation history tracking, and persistent user-specific data storage using Supabase and OpenAI.',
    image: require('./ai-startup-launchpad.png'),
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase Auth',
      'PostgreSQL',
      'OpenAI API',
      'GenAI'
    ],
    github: 'https://github.com/Chirubathula06/ai-startup-launchpad',
    live: 'https://ai-startup-launchpad.vercel.app/',
    category: '🚀 GenAI SaaS'
  },

  {
    title: 'RAG-Based AI Knowledge Assistant',
    description:
      'Built a Retrieval-Augmented Generation AI assistant using n8n and OpenAI that answers user queries strictly from uploaded documents. The system performs PDF extraction, embedding generation, semantic search, and context-aware response generation using vector databases and conversational memory.',
    image: require('./rag-ai-assistant.png'),
    tech: [
      'n8n',
      'OpenAI API',
      'GPT-4o mini',
      'RAG',
      'Vector Database',
      'OpenAI Embeddings',
      'Semantic Search',
      'PDF Processing',
      'AI Agents'
    ],
    github: 'https://github.com/Chirubathula06/document-rag-n8n',
    category: '🤖 RAG / GenAI'
  },

  {
    title: 'YouTube Video Learning Assistant',
    description:
      'Built an AI-powered learning assistant using n8n, OpenAI, and Qdrant that transforms YouTube videos into interactive learning experiences. The system extracts video transcripts, generates embeddings, performs semantic search using RAG, and provides contextual answers strictly from video knowledge.',
    image: require('./youtube-learning-assistant.png'),
    tech: [
      'n8n',
      'OpenAI API',
      'GPT-4o mini',
      'Qdrant',
      'RAG',
      'Vector Database',
      'Semantic Search',
      'YouTube Transcript API',
      'AI Agents'
    ],
    github: 'https://github.com/Chirubathula06/youtube-rag-n8n',
    category: '🤖 RAG / GenAI'
  },
  {
  title: 'Website RAG Chatbot',

  description:
    'An AI-powered Website Knowledge Assistant that transforms website content into an intelligent chatbot using RAG architecture, semantic search, OpenAI embeddings, and Qdrant vector database. The system crawls websites, stores vectorized knowledge, and generates grounded AI responses directly from website data.',

  image: require('./website-rag-chatbot.png'),

  tech: [
    'n8n',
    'OpenAI API',
    'GPT-4o Mini',
    'Qdrant',
    'RAG',
    'Semantic Search',
    'Vector DB',
    'JavaScript'
  ],

  github: 'https://github.com/Chirubathula06/website-rag-chatbot',
  category: '🤖 RAG / GenAI',
},

  {
    title: 'Telegram AI Assistant Bot',
    description:
      'An AI-powered Telegram assistant built using n8n workflow automation and OpenAI GPT-4o mini. The bot receives user messages in real time, processes queries using AI, and generates intelligent contextual responses automatically through Telegram integration.',
    image: require('./telegram-ai-bot.png'),
    tech: [
      'n8n',
      'OpenAI API',
      'GPT-4o mini',
      'Telegram Bot API',
      'JavaScript',
      'Workflow Automation'
    ],
    github: 'https://github.com/Chirubathula06/n8n-workflows',
    category: '⚡ AI Automation'
  },

  {
    title: 'AI-Powered Email Assistant',
    description:
      'Designed and deployed an AI-powered email assistant using n8n and OpenAI GPT-4o mini. The workflow automatically monitors incoming emails, analyzes content, generates professional AI-based replies, and creates Gmail reply drafts with human-in-the-loop verification.',
    image: require('./ai-email-assistant.png'),
    tech: [
      'n8n',
      'OpenAI API',
      'GPT-4o mini',
      'Gmail API',
      'Workflow Automation',
      'AI Agents'
    ],
    github: 'https://github.com/Chirubathula06/n8n-workflows',
    category: '⚡ AI Automation'
  },

  {
    title: 'Income Tax Management System',
    description:
      'A full-stack web application designed to calculate and manage employee income tax efficiently, providing detailed tax breakdowns based on income, deductions, and allowances with an intuitive user interface.',
    image: require('./income.png'),
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Chirubathula06/income-tax-management-system',
    live: 'https://incometaxmanagement.wuaze.com/?i=1',
    category: '💻 Full Stack'
  },

  {
    title: 'Leave Management System',
    description:
      'A web-based system for managing employee leave requests with admin dashboard, approval/rejection workflow, and email notifications with reasons. Includes OTP-based authentication and secure user management.',
    image: require('./leave.png'),
    tech: ['PHP', 'MySQL', 'JavaScript', 'PHPMailer'],
    github: 'https://github.com/Chirubathula06/leave-management-system',
    live: 'https://leave-management.kesug.com/leave-app/',
    category: '💻 Full Stack'
  },

  {
    title: 'Municipal Community Complaint System',
    description:
      'A platform for users to report and track complaints with category-wise management, admin dashboard, and notification system. Designed for efficient issue resolution and user engagement.',
    image: require('./complaint.png'),
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Chirubathula06/municipal-community-complaint-system',
    live: 'https://municipalcommunitycomplaint.free.nf/?i=1',
    category: '💻 Full Stack'
  },

  {
    title: 'Smart Cultivation System',
    description:
      'A smart agriculture-based web application designed to assist farmers in making better cultivation decisions using data-driven insights. The system helps monitor crop conditions, provides recommendations, and improves productivity through efficient resource management.',
    image: require('./cultivation.png'),
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Chirubathula06/smart-cultivation-system',
    live: 'https://smart-cultivation.kesug.com/smart_cultivation_system/',
    category: '💻 Full Stack'
  }
];
  const filteredProjects =
  activeProjectCategory === 'All'
    ? projects
    : projects.filter(
        (project) => project.category === activeProjectCategory
      );
const certificates = {
  cryptography: [
    {
      id: 1,
      title: 'Fundamentals of Cryptography',
      issuer: 'Infosys Springboard',
      date: 'December 2025',
      description: 'Completed Fundamentals of Cryptography, gaining knowledge of core concepts used to secure digital communication, including encryption techniques, cryptographic algorithms, and data protection methods.',
      image: cert1,
      credentialLink: 'https://verify.onwingspan.com',
      skills: ['Cryptography', 'Data Security', 'Encryption', 'Cybersecurity']
    },
    {
      id: 2,
      title: 'Python Case Study – Cryptography',
      issuer: 'Infosys Springboard',
      date: 'February 2026',
      description: 'Applied cryptographic concepts using Python through practical case studies, focusing on encryption, decryption, and secure data handling techniques.',
      image: cert3,
      credentialLink: 'https://verify.onwingspan.com',
      skills: ['Python', 'Cryptography', 'Encryption', 'Problem Solving']
    },
    {
      id: 3,
      title: 'Cryptography in IT Security & Hacking',
      issuer: 'Infosys Springboard',
      date: 'February 2026',
      description: 'Explored the role of cryptography in IT security and ethical hacking, understanding how encryption is used to protect systems and how vulnerabilities can be identified.',
      image: cert4,
      credentialLink: 'https://verify.onwingspan.com',
      skills: ['Ethical Hacking', 'Cryptography', 'Security Concepts', 'Cybersecurity']
    },
    {
      id: 4,
      title: 'Cryptography: Introduction to PKI',
      issuer: 'Infosys Springboard',
      date: 'February 2026',
      description: 'Studied Public Key Infrastructure (PKI), including digital certificates, key management, and secure communication using asymmetric encryption techniques.',
      image: cert5,
      credentialLink: 'https://verify.onwingspan.com',
      skills: ['PKI', 'Digital Certificates', 'Encryption', 'Cybersecurity']
    }
  ],
  cybersecurity: [
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      issuer: 'Infosys Springboard',
      date: 'December 2025',
      description: 'Learned the fundamentals of cybersecurity including threat analysis, risk management, network security, and best practices for protecting systems and data from cyber attacks.',
      image: cert2,
      credentialLink: 'https://verify.onwingspan.com',
      skills: ['Cybersecurity', 'Network Security', 'Risk Management', 'Threat Analysis']
    }
  ],
  aiPromptEngineering: [
    {
      id: 6,
      title: 'Introduction to Prompt Engineering',
      issuer: 'IBM',
      date: 'June 2024',
      description: 'Gained knowledge in designing effective prompts for AI models, understanding prompt optimization techniques, and improving AI-generated outputs.',
      image: cert7,
      skills: ['Prompt Engineering', 'AI', 'Generative AI', 'Problem Solving']
    },
    {
      id: 7,
      title: 'Introduction to ChatGPT',
      issuer: 'UPValenciaX',
      date: 'August 2024',
      description: 'Explored the fundamentals of ChatGPT, including its applications, capabilities, and usage in real-world scenarios for automation and content generation.',
      image: cert8,
      skills: ['ChatGPT', 'AI Tools', 'Automation', 'Generative AI']
    }
  ],
  problemSolvingCore: [
    {
      id: 8,
      title: 'Aptitude and Reasoning',
      issuer: 'GeeksforGeeks',
      date: 'December 2025',
      description: 'Developed strong analytical and logical reasoning skills, focusing on problem-solving techniques useful for competitive exams and technical interviews.',
      image: cert9,
      credentialLink: 'https://media.geeksforgeeks.org/courses/certificates/0c0dd43acc7c975c090164d7ed66f44b.pdf',
      skills: ['Aptitude', 'Logical Reasoning', 'Problem Solving']
    },
    {
      id: 9,
      title: 'GATE Set Go – CSE / DA',
      issuer: 'GeeksforGeeks',
      date: 'February 2026',
      description: 'Prepared for GATE with a focus on core computer science subjects including data structures, algorithms, and problem-solving techniques.',
      image: cert10,
      credentialLink: 'https://media.geeksforgeeks.org/courses/certificates/1c8fa77788e944d3e1d69c7dd80861f8.pdf',
      skills: ['Data Structures', 'Algorithms', 'GATE Preparation']
    },
    {
      id: 10,
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: 'December 2025',
      description: 'Demonstrated foundational problem-solving skills by successfully completing HackerRank\'s Problem Solving (Basic) certification, covering algorithms, data structures, and logical thinking.',
      image: cert11,
      credentialLink: 'https://www.hackerrank.com/certificates/54afdebbb471',
      skills: ['Problem Solving', 'Algorithms', 'Data Structures', 'Logical Thinking']
    },
    {
      id: 11,
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      date: 'December 2025',
      description: 'Demonstrated intermediate-level problem-solving skills by solving complex algorithmic challenges on HackerRank, focusing on data structures, optimization techniques, and efficient coding practices.',
      image: cert12,
      credentialLink: 'https://www.hackerrank.com/certificates',
      skills: ['Problem Solving', 'Algorithms', 'Data Structures', 'Optimization', 'Logical Thinking']
    }
  ],
  workshops: [
    {
      id: 12,
      title: 'AI Prompt Engineering Workshop',
      issuer: 'JNTUA College of Engineering, Anantapur',
      date: 'February 2026',
      description: 'Participated in a one-day workshop on AI Prompt Engineering, gaining insights into designing effective prompts and understanding how AI models generate responses for real-world applications.',
      image: cert14,
      skills: ['Prompt Engineering', 'Artificial Intelligence', 'Generative AI', 'Problem Solving']
    },
    {
      id: 13,
      title: 'Placement Preparation Programme',
      issuer: 'eDC IIT Delhi & Indian Institute of Placement',
      date: 'March 2026',
      description: 'Successfully completed a placement preparation programme focused on building essential skills required to secure high-paying job opportunities, including aptitude, communication, and interview strategies.',
      image: cert13,
      skills: ['Aptitude', 'Interview Preparation', 'Communication Skills', 'Career Development']
    },
    {
      id: 14,
      title: 'Campus to Corporate Workshop (R23)',
      issuer: 'JNTUA College of Engineering, Anantapur',
      date: 'November 2025',
      description: 'Completed a one-week domain-specific workshop focused on preparing students for the transition from campus to corporate, covering professional skills, industry expectations, and career readiness.',
      image: cert15,
      skills: ['Professional Skills', 'Corporate Readiness', 'Communication', 'Career Development']
    }
  ],
  achievements: [
    {
      id: 15,
      title: 'Merit Scholarship Award',
      issuer: 'JNTUA College of Engineering, Anantapur',
      date: '2024-2025',
      description: 'Awarded merit scholarship for outstanding academic performance, securing second position among students across multiple branches for the academic year 2024–25.',
      image: cert16,
      skills: ['Academic Excellence', 'Consistency', 'Discipline', 'Performance']
    }
  ]
};
if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            &lt;/&gt; Portfolio
          </div>
          <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
  {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
</div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
             <li><button className="nav-link-btn" onClick={() => scrollToSection('home')}>Home</button></li>
<li><button className="nav-link-btn" onClick={() => scrollToSection('about')}>About</button></li>
<li><button className="nav-link-btn" onClick={() => scrollToSection('skills')}>Skills</button></li>
<li><button className="nav-link-btn" onClick={() => scrollToSection('experience')}>Experience</button></li>
<li><button className="nav-link-btn" onClick={() => scrollToSection('projects')}>Projects</button></li>
<li><button className="nav-link-btn" onClick={() => scrollToSection('certifications')}>Certifications</button></li>
<li><button className="nav-link-btn" onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>

      {/* Hero Section */}
      <section id="home" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
        <div className="container hero">
          <motion.div 
            className="hero-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Hello, I'm</h2>
            <h1>Bathula Chiranjeevi</h1>
            <div className="typing-text">
              <span className="typed-cursor">{typedText}</span>
              <span className="cursor">|</span>
            </div>
            <p>
  AI Automation & GenAI Developer building intelligent workflows, RAG systems, and full-stack SaaS applications with modern AI technologies.
</p>
            <div className="btn-group">
  <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
    Hire Me
  </button>
  <button className="btn btn-outline" onClick={handleDownload}>
    <FaDownload style={{ marginRight: '8px' }} /> Download Resume
  </button>
</div>
            <div className="social-links">
              <a href="https://github.com/Chirubathula06" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/chiranjeevibathula" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href="https://www.instagram.com/chiru.bathula?igsh=MTFoaGwya2JlNWJpeQ==" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={profilePic} alt="Bathula Chiranjeevi - Profile" className="profile-img" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Who Am I?</h3>

<p>
I'm a passionate AI Automation & Full Stack Developer and BTech Computer Science student who enjoys building real-world AI applications, automation workflows, and scalable web platforms that solve meaningful problems.
</p>

<p>
I have hands-on experience developing full-stack SaaS applications, RAG-based AI systems, AI agents, and workflow automations using technologies like React, Next.js, OpenAI API, n8n, Supabase, and MySQL.
</p>

<p>
Currently, I’m working as an AI Automation & GenAI Intern at DeepDrishti.ai, building AI agents, automation workflows, and real-world AI solutions while continuously learning and exploring modern AI technologies.
</p>
              <div className="stats">
                <div className="stat-card">
                  <div className="stat-icon"><FaCode /></div>
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
              
                <div className="stat-card">
                  <div className="stat-icon"><FaAward /></div>
                  <div className="stat-value">15+</div>
                  <div className="stat-label">Certifications</div>
                </div>
              </div>
            </div>
            <div>
              <div className="education-card" style={{ backgroundColor: darkMode ? '#2d2d2d' : '#f5f5f5' }}>
  <h3 style={{ color: darkMode ? '#667eea' : '#333' }}>🎓 Education</h3>
  <p style={{ color: darkMode ? '#ccc' : '#666' }}>
    <strong style={{ color: darkMode ? 'white' : '#333' }}>B.Tech in Computer Science Engineering</strong><br />
    Jawaharlal Nehru Technological University Anantapur College Of Engineering (JNTUACEA), Ananthapuramu, 2023-2027<br />
    CGPA: 9.18/10
  </p>
  <p style={{ color: darkMode ? '#ccc' : '#666', marginTop: '1rem' }}>
    <strong style={{ color: darkMode ? 'white' : '#333' }}>Intermediate (Higher Secondary Education)</strong><br />
    Sri Vikas Junior College, Vinjamur, 2021-2023<br />
    Percentage: 98%
  </p>
</div>

<div className="education-card" style={{ backgroundColor: darkMode ? '#2d2d2d' : '#f5f5f5' }}>
  <h3 style={{ color: darkMode ? '#667eea' : '#333' }}>🚀 What I Do</h3>

  <p style={{ color: darkMode ? '#ccc' : '#666', lineHeight: '1.8' }}>
    ✓ Build full-stack web applications and AI-powered SaaS products<br />
    ✓ Develop AI automation workflows using n8n and OpenAI APIs<br />
    ✓ Create RAG-based AI systems with semantic search and embeddings<br />
    ✓ Design modern, responsive, and user-friendly interfaces<br />
    ✓ Integrate authentication, databases, and real-time AI features<br />
    ✓ Transform real-world ideas into scalable AI-driven solutions
  </p>
</div>           </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className="skills">
  <div className="container">
    <h2 className="section-title">Technical Skills</h2>

    {/* Skills Summary Badges */}
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
        {[
          'C',
          'Java',
          'Python',
          'HTML5/CSS3',
          'JavaScript',
          'React.js',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'PHP',
          'MySQL',
          'PostgreSQL',
          'Supabase',
          'OpenAI API',
          'n8n',
          'RAG',
          'Git/GitHub',
          'DSA',
          'OOP',
          'DBMS'
        ].map((skill, i) => (
          <span
            key={i}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.5rem 1.2rem',
              borderRadius: '25px',
              fontSize: '0.9rem'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="skills-grid">

      {/* Programming Languages */}
      <div className="skill-category">
        <h3>💻 Programming Languages</h3>

        {[
          ['⚡', 'C', '85%'],
          ['☕', 'Java', '80%'],
          ['🐍', 'Python', '85%'],
          ['📜', 'JavaScript', '85%'],
          ['📘', 'TypeScript', '75%']
        ].map(([icon, name, level], i) => (
          <div className="skill-item" key={i}>
            <div className="skill-info">
              <span className="skill-icon">{icon}</span>
              <span>{name}</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Web Development */}
      <div className="skill-category">
        <h3>🌐 Web Development</h3>

        {[
          ['📄', 'HTML5/CSS3', '90%'],
          ['⚛️', 'React.js', '85%'],
          ['▲', 'Next.js', '80%'],
          ['🎨', 'Tailwind CSS', '85%'],
          ['🐘', 'PHP', '75%']
        ].map(([icon, name, level], i) => (
          <div className="skill-item" key={i}>
            <div className="skill-info">
              <span className="skill-icon">{icon}</span>
              <span>{name}</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* AI & Automation */}
      <div className="skill-category">
        <h3>🤖 AI & Automation</h3>

        {[
          ['🧠', 'OpenAI API', '85%'],
          ['⚡', 'n8n Workflow Automation', '85%'],
          ['📚', 'RAG Systems', '80%'],
          ['🤖', 'AI Agents', '80%'],
          ['💬', 'Prompt Engineering', '80%']
        ].map(([icon, name, level], i) => (
          <div className="skill-item" key={i}>
            <div className="skill-info">
              <span className="skill-icon">{icon}</span>
              <span>{name}</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Databases & Backend */}
      <div className="skill-category">
        <h3>🗄️ Databases & Backend</h3>

        {[
          ['🐬', 'MySQL', '85%'],
          ['🐘', 'PostgreSQL', '75%'],
          ['🟢', 'Supabase', '80%'],
          ['🔐', 'Authentication & Security', '75%'],
          ['🔗', 'API Integration', '80%']
        ].map(([icon, name, level], i) => (
          <div className="skill-item" key={i}>
            <div className="skill-info">
              <span className="skill-icon">{icon}</span>
              <span>{name}</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Platforms */}
      <div className="skill-category">
        <h3>🛠️ Tools & Platforms</h3>

        {[
          ['🐙', 'Git & GitHub', '85%'],
          ['📝', 'VS Code', '90%'],
          ['☁️', 'Vercel', '75%'],
          ['📦', 'npm', '80%'],
          ['🧩', 'API Integration', '80%']
        ].map(([icon, name, level], i) => (
          <div className="skill-item" key={i}>
            <div className="skill-info">
              <span className="skill-icon">{icon}</span>
              <span>{name}</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Core Concepts */}
      <div className="skill-category">
        <h3>📚 Core Concepts</h3>

        {[
          ['🔄', 'Data Structures & Algorithms', '80%'],
          ['🎯', 'Object-Oriented Programming', '85%'],
          ['🗃️', 'DBMS', '85%'],
          ['🧠', 'Problem Solving', '85%'],
          ['⚙️', 'Software Development', '80%']
        ].map(([icon, name, level], i) => (
          <div className="skill-item" key={i}>
            <div className="skill-info">
              <span className="skill-icon">{icon}</span>
              <span>{name}</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
{/* Experience Section */}
<section id="experience" className="experience">
  <div className="container">
    <h2 className="section-title">Experience</h2>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>AI Automation & GenAI Intern</h3>
          <h4>DeepDrishti.ai</h4>
        </div>
        <span className="experience-date">May 2026 – Present</span>
      </div>

      <p className="experience-desc">
        Currently working on real-world AI automation, GenAI applications, RAG systems, AI agents, and full-stack AI SaaS products using modern AI and web technologies.
      </p>

      <ul className="experience-list">
        <li>
          Built AI automation workflows using n8n, OpenAI APIs, and AI agents for practical business use cases.
        </li>
        <li>
          Developed RAG-based AI systems using embeddings, semantic search, vector databases, and context-aware response generation.
        </li>
        <li>
          Designed and developed AI Startup Launchpad, a full-stack SaaS MVP for founders with authentication, project management, AI-generated startup plans, and generation history.
        </li>
        <li>
          Integrated OpenAI API through protected Next.js API routes and stored authenticated user data securely in Supabase with Row Level Security.
        </li>
        <li>
          Currently working on an AI Prior-Art Discovery Engine that uses embeddings, vector databases, RAG architecture, and knowledge graphs to enable semantic patent search, similar patent detection, novelty scoring, and claim overlap analysis.
        </li>
      </ul>

      <div className="experience-tech">
        {[
          'n8n',
          'OpenAI API',
          'GPT-4o mini',
          'RAG',
          'AI Agents',
          'Vector Databases',
          'Knowledge Graphs',
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Supabase',
          'PostgreSQL'
        ].map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-categories">
  {['All', '🚀 GenAI SaaS', '🤖 RAG / GenAI', '⚡ AI Automation', '💻 Full Stack'].map((category) => (
    <button
      key={category}
      className={`category-btn ${
        activeProjectCategory === category ? 'active' : ''
      }`}
      onClick={() => setActiveProjectCategory(category)}
    >
      {category}
    </button>
  ))}
</div>
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="project-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-content">
                  <span className="project-category-badge">
    {project.category}
  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
  {project.github && (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
      GitHub →
    </a>
  )}

  {project.live && (
    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
      Live Demo →
    </a>
  )}

  {project.demo && (
    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
      Watch Demo →
    </a>
  )}
</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Certifications Section with Modal */}
<section id="certifications" className="certifications">
  <div className="container">
    <h2 className="section-title">📜 Certifications & Achievements</h2>
{/* Category Tabs */}
<div className="category-tabs">
  <button 
    className={`category-tab ${activeCategory === 'cryptography' ? 'active' : ''}`}
    onClick={() => setActiveCategory('cryptography')}
  >
    🔐 Cryptography
  </button>
  <button 
    className={`category-tab ${activeCategory === 'cybersecurity' ? 'active' : ''}`}
    onClick={() => setActiveCategory('cybersecurity')}
  >
    🛡️ Cybersecurity
  </button>
  <button 
    className={`category-tab ${activeCategory === 'aiPromptEngineering' ? 'active' : ''}`}
    onClick={() => setActiveCategory('aiPromptEngineering')}
  >
    🤖 AI & Prompt Engineering
  </button>
  <button 
    className={`category-tab ${activeCategory === 'problemSolvingCore' ? 'active' : ''}`}
    onClick={() => setActiveCategory('problemSolvingCore')}
  >
    💡 Problem Solving & Core
  </button>
  <button 
    className={`category-tab ${activeCategory === 'workshops' ? 'active' : ''}`}
    onClick={() => setActiveCategory('workshops')}
  >
    🎓 Workshops
  </button>
  <button 
    className={`category-tab ${activeCategory === 'achievements' ? 'active' : ''}`}
    onClick={() => setActiveCategory('achievements')}
  >
    🏆 Achievements
  </button>
</div>
    <p className="cert-subtitle">Click on any certificate to view details</p>
    
    {/* Certifications Gallery */}
<div className="certifications-gallery">
  {certificates[activeCategory].map((cert, idx) => (
    <motion.div 
      key={cert.id}
      className="cert-gallery-card"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      onClick={() => {
        setSelectedCert(cert);
        setModalOpen(true);
      }}
    >
      <div className="cert-image-wrapper">
        <img src={cert.image} alt={cert.title} className="cert-gallery-image" />
        <div className="cert-overlay">
          <span className="view-details">Click to View Details</span>
        </div>
      </div>
      <h3 className="cert-gallery-title">{cert.title}</h3>
      <p className="cert-gallery-issuer">{cert.issuer}</p>
    </motion.div>
  ))}
</div>

{/* Show count of certificates */}
<div className="cert-count">
  Showing {certificates[activeCategory].length} certificates
</div>  </div>
</section>

{/* Modal Popup for Certificate Details */}
{modalOpen && selectedCert && (
  <div className="modal-overlay" onClick={() => setModalOpen(false)}>
    <motion.div 
      className="modal-content"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="modal-close" onClick={() => setModalOpen(false)}>
        <FaTimes />
      </button>
      
      <div className="modal-body">
        <div className="modal-image">
          <img src={selectedCert.image} alt={selectedCert.title} />
        </div>
        
        <div className="modal-details">
          <h2>{selectedCert.title}</h2>
          
          <div className="modal-info">
            <div className="info-row">
              <span className="info-label">🏢 Issued by:</span>
              <span className="info-value">{selectedCert.issuer}</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">📅 Issued:</span>
              <span className="info-value">{selectedCert.date}</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">📝 Description:</span>
              <p className="info-description">{selectedCert.description}</p>
            </div>
            
            <div className="info-row">
              <span className="info-label">⚡ Skills:</span>
              <div className="skills-tags">
                {selectedCert.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Only show verify button if credentialLink exists and not '#' */}
          {selectedCert.credentialLink && selectedCert.credentialLink !== '#' && (
            <div className="modal-actions">
              <a 
                href={selectedCert.credentialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="verify-btn"
              >
                Verify Certificate <FaExternalLinkAlt />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  </div>
)}
      {/* Contact Section */}
<section id="contact" className="contact">
  <div className="container">
    <h2 className="section-title">Get In Touch</h2>
    <div className="contact-container">
      <div className="contact-info">
        <h3>Let's Connect</h3>
        <p>I'm always interested in hearing about new opportunities, collaborations, or just having a chat. Feel free to reach out!</p>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>chiranjeevibathula06@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 9347631068</p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <textarea 
            rows="5" 
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn" disabled={formStatus === 'Sending message...'}>
          {formStatus === 'Sending message...' ? 'Sending...' : 'Send Message'}
        </button>
        {formStatus && (
          <div className={`status-message ${formStatus.includes('✅') ? 'success' : 'error'}`}>
            {formStatus}
          </div>
        )}
      </form>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-social">
          <a href="https://github.com/Chirubathula06" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/chiranjeevibathula/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/chiru.bathula?igsh=MTFoaGwya2JlNWJpeQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p>&copy; 2026 Bathula Chiranjeevi. All rights reserved. | Built with React.js</p>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <div className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

      {/* Add cursor animation style */}
      <style jsx="true">{`
        .cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typed-cursor {
          color: white;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}

export default App;