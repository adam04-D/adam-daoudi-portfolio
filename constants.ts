/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project, ExperienceItem, EducationItem, SkillCategory, Certification } from './types';

export const BRAND_NAME = 'Adam Daoudi';
export const ROLE = 'Data Scientist';
export const EMAIL = 'adamdaoudi04@gmail.com';
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/adam-daoudi-27bb92256/',
  github: 'https://github.com/adam04-D',
  sardia: 'https://sardia.me/',
};

export const ABOUT_ME = {
  title: 'Designed for impact.',
  paragraphs: [
    'I am a 2nd year Data Science Engineering student at INSEA Rabat. I believe that behind every complex dataset lies a quiet, elegant truth waiting to be uncovered.',
    'My expertise lies in Machine Learning, Deep Learning, and Reinforcement Learning. I strip away the noise, combining theoretical knowledge with hands-on experience to build intelligent systems that solve real-world problems.',
    'Proficient in building end-to-end AI solutions and Data Engineering pipelines. Driven by curiosity and a desire to continuously push the boundaries of what is possible with data.'
  ],
  currentFocus: 'Currently seeking Data Science internship opportunities'
};

export const PROJECTS: Project[] = [
  {
    id: 'greenflow-rabat',
    title: 'Greenflow Rabat',
    date: '2026',
    desc: 'Deep learning object detection system for urban traffic analysis. Identifies and tracks vehicles using bounding boxes to optimize traffic flow.',
    longDesc: 'Greenflow Rabat is an advanced traffic management solution designed for the evolving urban landscape of Rabat. By leveraging state-of-the-art computer vision, the system provides real-time vehicle counting and classification to help urban planners reduce congestion and improve road safety.',
    video: 'https://videos.pexels.com/video-files/854745/854745-hd_1920_1080_30fps.mp4',
    tags: ['Computer Vision', 'YOLO', 'Deep Learning', 'Python'],
    architecture: [
      'YOLOv8 for high-speed object detection',
      'ByteTrack for robust vehicle tracking across frames',
      'Custom filtering logic for specific traffic lanes',
      'OpenCV for real-time visualization'
    ],
    challenges: [
      'Optimizing inference speed for real-time processing on edge devices',
      'Handling occlusions in high-density traffic scenarios',
      'Adapting to varying lighting and weather conditions in urban environments'
    ],
    status: 'Beta'
  },
  {
    id: 'spi-ndvi',
    title: 'SPI-NDVI Forecasting',
    date: 'Dec 2025',
    desc: 'Time series forecasting for vegetation index prediction using satellite-derived data to monitor drought conditions.',
    longDesc: 'This project utilizes multi-source satellite data to forecast the Normalized Difference Vegetation Index (NDVI) based on the Standardized Precipitation Index (SPI). It provides early warning signs for drought, enabling proactive agricultural management.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    tags: ['TensorFlow', 'Keras', 'GeoPandas'],
    architecture: [
      'LSTM & GRU layers for sequential data modeling',
      'Google Earth Engine for large-scale data extraction',
      'Xarray for multidimensional climate data processing',
      'Matplotlib/Seaborn for spatiotemporal analysis'
    ],
    challenges: [
      'Aligning different spatial and temporal resolutions from various datasets',
      'Managing missing data in satellite observations due to cloud cover',
      'Capturing long-term dependencies in climate patterns'
    ],
    status: 'Research'
  },
  {
    id: 'omnisentinel',
    title: 'OmniSentinel',
    date: 'Dec 2025',
    desc: 'Intelligent AI audit system and chatbot for banking information retrieval, built with cloud-first architecture.',
    longDesc: 'OmniSentinel is a RAG (Retrieval-Augmented Generation) based system designed to streamline banking audits. It allows auditors to query vast amounts of internal documentation through a natural language interface, ensuring compliance and speed.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    tags: ['NLP', 'Hugging Face', 'n8n', 'REST API'],
    architecture: [
      'LangChain for RAG pipeline orchestration',
      'Pinecone vector database for efficient document retrieval',
      'Mistral-7B for high-quality response generation',
      'n8n for automated workflow integration'
    ],
    challenges: [
      'Ensuring data privacy and security for sensitive banking information',
      'Minimizing hallucinations in AI-generated compliance reports',
      'Scaling the system to handle thousands of complex documents'
    ],
    status: 'Beta'
  },
  {
    id: 'sardia-me',
    title: 'Sardia.me',
    date: '2025',
    desc: 'A personal literary archive and platform for creative writing, poetry, and philosophical essays.',
    longDesc: 'Sardia.me is a digital sanctuary for literature and thought. It serves as a personal archive where I explore the intersection of technology, philosophy, and creative expression through long-form essays and poetry.',
    image: '/sardia_img.webp',
    tags: ['Literature', 'Creative Writing', 'Philosophy', 'Web Design'],
    link: 'https://sardia.me/',
    architecture: [
      'Modern React architecture for seamless navigation',
      'Custom markdown parser for expressive literary layouts',
      'Responsive typography-focused design',
      'Framer Motion for subtle, organic animations'
    ],
    challenges: [
      'Designing a layout that prioritizes readability and focus',
      'Balancing aesthetic minimalism with functional archiving features',
      'Creating a unique "literary" atmosphere in a digital medium'
    ],
    status: 'Deployed'
  }
];

export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'pda-intern',
    role: 'Data Science Intern',
    company: "Pôle Digital de l'Agriculture",
    location: 'Rabat',
    period: 'July - August 2025',
    description: [
      'Developed ML models for drought monitoring using SPI-NDVI indices, enabling accurate prediction of vegetation stress patterns.',
      'Built end-to-end data pipelines for processing satellite imagery and climate data from multiple sources.',
      'Created predictive models achieving high accuracy in forecasting drought conditions.',
      'Designed interactive data visualizations and dashboards for stakeholder presentations.'
    ],
    tags: ['Python', 'Machine Learning', 'QGIS', 'Pandas', 'Scikit-Learn'],
    image: '/stage.webp'
  }
];

export const EXTRACURRICULAR_ACTIVITIES: ExperienceItem[] = [
  {
    id: 'goc4-leader',
    role: 'Secretary General & Head of Sponsoring Cellule',
    company: 'INSEA Innovation Edge',
    location: 'Rabat',
    period: '2025 - 2026',
    description: [
      'Leading the organizational efforts for "Game of Codes 4," a premier national programming event at INSEA.',
      'Coordinating internal teams and administrative operations as Secretary General to ensure high-quality execution.',
      'Spearheading sponsoring and partnerships, contributing to a record-breaking edition with significantly increased media impact.',
      'Managing high-level stakeholder relations and securing strategic partnerships to scale the event\'s footprint.'
    ],
    tags: ['Leadership', 'Event Management', 'Sponsorship', 'Public Relations'],
    image: '/goc4.webp'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'insea',
    school: 'INSEA Rabat',
    degree: 'Data Science Engineering',
    period: '2024 - 2027',
    description: 'Currently in 2nd year, focusing on advanced machine learning techniques, statistical analysis, and data-driven decision making.',
    logo: '/insea.webp'
  },
  {
    id: 'cpge',
    school: 'CPGE Ibn Abdoun',
    degree: 'Preparatory Classes - MPSI/MP',
    period: '2022 - 2024',
    description: 'Intensive program in Mathematics, Physics, and Engineering Sciences. Built strong foundations in analytical thinking and problem-solving.',
    logo: '/logocpge.webp'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'LLMs', 'RAG']
  },
  {
    title: 'Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'Pandas', 'Scikit-learn', 'NumPy']
  },
  {
    title: 'Programming',
    skills: ['Python', 'C', 'Java', 'JavaScript']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'SQL', 'n8n']
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA' },
  { title: 'Deep Learning in Python', issuer: 'DataCamp' },
  { title: 'Advanced Deep Learning with Keras', issuer: 'DataCamp' }
];

