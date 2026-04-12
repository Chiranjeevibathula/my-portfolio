import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, 
  FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt,
  FaHtml5, FaJs, FaJava, FaAward,
  FaBriefcase, FaBars, FaTimes, FaExternalLinkAlt,
  FaSun, FaMoon, FaArrowUp, FaCode
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si';

import profilePic from './profile.jpeg';
import emailjs from '@emailjs/browser';
// Import all certificates (PDF and images)
import cert1 from './certificates/cert1.png';
import cert2 from './certificates/cert2.png';
import cert3 from './certificates/cert3.png';
import cert4 from './certificates/cert4.png';
import cert5 from './certificates/cert5.png';
import cert6 from './certificates/cert6.png';
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

  const roles = [
  "Full Stack Developer",
  "BTech CSE Student",
  "Building Real-World Web Applications",
  "Aspiring Tech Entrepreneur 🚀",
  "Problem Solver & DSA Enthusiast"
];
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
  }, [charIndex, isDeleting, textIndex, roles]);

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
  // Direct download from public folder
  const pdfUrl = '/RESUME.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
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
      title: 'Income Tax Management System',
      description: 'A full-stack web application designed to calculate and manage employee income tax efficiently, providing detailed tax breakdowns based on income, deductions, and allowances with an intuitive user interface.',
      image: require('./income.png'),
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Chirubathula06/income-tax-management-system',
      live: 'https://incometaxmanagement.wuaze.com/?i=1'
    },
    {
      title: 'Leave Management System',
    description: 'A web-based system for managing employee leave requests with admin dashboard, approval/rejection workflow, and email notifications with reasons. Includes OTP-based authentication and secure user management.',
    image: require('./leave.png'),
    tech: ['PHP', 'MySQL', 'JavaScript', 'PHPMailer'],
      github: 'https://github.com/Chirubathula06/leave-management-system',
      live: 'https://leave-management.kesug.com/leave-app/'
    },
    {
      title: 'Municipal Community Complaint System',
    description: 'A platform for users to report and track complaints with category-wise management, admin dashboard, and notification system. Designed for efficient issue resolution and user engagement.',
    image: require('./complaint.png'),
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Chirubathula06/municipal-community-complaint-system',
      live: 'https://municipalcommunitycomplaint.free.nf/?i=1'
    },
{
  title: 'Smart Cultivation System',
  description: 'A smart agriculture-based web application designed to assist farmers in making better cultivation decisions using data-driven insights. The system helps monitor crop conditions, provides recommendations, and improves productivity through efficient resource management and modern technology integration.',
  image: require('./cultivation.png'),
  tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  github: 'https://github.com/Chirubathula06/smart-cultivation-system',
  live: 'https://smart-cultivation.kesug.com/smart_cultivation_system/'
}
  ];
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
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
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
            <p>Full Stack Developer building real-world web applications with React & PHP — exploring AI to create smarter, impactful digital solutions.</p>
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
I'm a passionate Full Stack Developer and BTech Computer Science student who enjoys building real-world web applications that solve meaningful problems. I specialize in developing dynamic and scalable solutions using React, PHP, and MySQL.
</p>

<p>
I have hands-on experience creating projects like an Income Tax Management System and a Leave Management System, focusing on both functionality and user experience. I'm also exploring Artificial Intelligence to expand my skill set and build smarter, future-ready applications.
</p>

<p>
Driven by curiosity and innovation, I continuously learn new technologies and aim to grow as a developer while working towards becoming a tech entrepreneur.
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
              <div className="education-card">
                <h3>🎓 Education</h3>
                <p><strong>B.Tech in Computer Science Engineering</strong><br />Jawaharlal Nehru Technological University Anantapur College Of Engineering(JNTUACEA),Ananthapuramu, 2023-2027<br />CGPA: 9.18/10</p>
                <p style={{ marginTop: '1rem' }}><strong>Intermediate (Higher Secondary Education)</strong><br />Sri Vikas Junior College,Vinjamur, 2021-2023<br />Percentage: 98%</p>
              </div>
              <div className="education-card">
                <h3>💼 What I Do</h3>

<p>
✓ Create end-to-end web applications from concept to deployment<br />
✓ Convert complex requirements into simple, functional solutions<br />
✓ Design modern, responsive, and user-centric interfaces<br />
✓ Build robust backend systems with efficient data handling<br />
✓ Apply problem-solving skills to develop optimized solutions<br />
✓ Continuously learn and evolve towards AI-powered development
</p>              </div>
            </div>
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
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>C</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>Java</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>Python</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>HTML5/CSS3</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>JavaScript</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>React.js</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>Node.js</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>PHP</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>MySQL</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>Git/GitHub</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>DSA</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>OOP</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>DBMS</span>
    <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '25px', fontSize: '0.9rem' }}>OS</span>
  </div>
</div>
    <div className="skills-grid">
      
      {/* Programming Languages */}
      <div className="skill-category">
        <h3>💻 Programming Languages</h3>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">⚡</span>
            <span>C</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">☕</span>
            <span>Java</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🐍</span>
            <span>Python</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Web Technologies */}
      <div className="skill-category">
        <h3>🌐 Web Technologies</h3>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">📄</span>
            <span>HTML5/CSS3</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">📜</span>
            <span>JavaScript</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">⚛️</span>
            <span>React.js</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🟢</span>
            <span>Node.js</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🐘</span>
            <span>PHP</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Databases */}
      <div className="skill-category">
        <h3>🗄️ Databases</h3>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🐬</span>
            <span>MySQL</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">📊</span>
            <span>Database Design</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🔍</span>
            <span>Querying</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="skill-category">
        <h3>🛠️ Tools & Platforms</h3>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">⎇</span>
            <span>Git</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🐙</span>
            <span>GitHub</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">📝</span>
            <span>VS Code</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🗄️</span>
            <span>XAMPP</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">💾</span>
            <span>MySQL Workbench</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <div className="skill-category">
        <h3>📚 Core Concepts</h3>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🔄</span>
            <span>Data Structures & Algorithms</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🎯</span>
            <span>Object-Oriented Programming</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">🗃️</span>
            <span>DBMS</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span className="skill-icon">⚙️</span>
            <span>Operating Systems</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress" 
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
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
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">GitHub →</a>
                    <a href={project.live} className="project-link">Live Demo →</a>
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