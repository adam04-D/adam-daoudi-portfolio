/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project, ExperienceItem, EducationItem, SkillCategory, Certification, JournalArticle } from './types';

export const BRAND_NAME = 'Adam Daoudi';
export const ROLE = 'Data Science & Engineering';
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
    'My specialization lies in Deep Learning and Statistical Modeling. I strip away the noise, combining theoretical knowledge with hands-on experience to build intelligent systems that make a real impact.',
    'Proficient in Machine Learning and Data Engineering, with strong skills in Python and SQL. Driven by curiosity and a desire to continuously learn in the ever-evolving field of Data Science.'
  ],
  currentFocus: 'Currently seeking PFA internship opportunities in Deep Learning'
};

export const PROJECTS: Project[] = [
  {
    id: 'greenflow-rabat',
    title: 'Greenflow Rabat',
    date: '2026',
    desc: 'Deep learning object detection system for urban traffic analysis. Identifies and tracks vehicles using bounding boxes to optimize traffic flow.',
    video: 'https://videos.pexels.com/video-files/854745/854745-hd_1920_1080_30fps.mp4',
    tags: ['Computer Vision', 'YOLO', 'Deep Learning', 'Python']
  },
  {
    id: 'spi-ndvi',
    title: 'SPI-NDVI Forecasting',
    date: 'Dec 2025',
    desc: 'Time series forecasting for vegetation index prediction using satellite-derived data to monitor drought conditions.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    tags: ['TensorFlow', 'Keras', 'GeoPandas']
  },
  {
    id: 'omnisentinel',
    title: 'OmniSentinel',
    date: 'Dec 2025',
    desc: 'Intelligent AI audit system and chatbot for banking information retrieval, built with cloud-first architecture.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    tags: ['NLP', 'Hugging Face', 'n8n', 'REST API']
  },
  {
    id: 'sardia-me',
    title: 'Sardia.me',
    date: '2025',
    desc: 'A personal literary archive and platform for creative writing, poetry, and philosophical essays.',
    image: './media/sardia_img.png',
    tags: ['Literature', 'Creative Writing', 'Philosophy', 'Web Design'],
    link: 'https://sardia.me/'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'goc4-leader',
    role: 'Secretary General & Sponsoring Lead',
    company: 'Game of Codes 4 (INSEA)',
    location: 'Rabat',
    period: '2025 - 2026',
    description: [
      'Contributed to the organization and sponsorship of "Game of Codes," a premier national programming event.',
      'Coordinated internal teams and led sponsor promotion, contributing to a record-breaking edition with significantly increased media impact and attendance.',
      'Managed high-level stakeholder relations and secured strategic partnerships to scale the event\'s footprint.'
    ],
    tags: ['Leadership', 'Sponsorship', 'Event Management', 'Public Relations'],
    image: './media/goc4.jpg'
  },
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
    image: './media/stage.jpeg'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'insea',
    school: 'INSEA Rabat',
    degree: 'Data Science Engineering',
    period: '2024 - 2027',
    description: 'Currently in 2nd year, focusing on advanced machine learning techniques, statistical analysis, and data-driven decision making.'
  },
  {
    id: 'cpge',
    school: 'CPGE Ibn Abdoun',
    degree: 'Preparatory Classes - MPSI/MP',
    period: '2022 - 2024',
    description: 'Intensive program in Mathematics, Physics, and Engineering Sciences. Built strong foundations in analytical thinking and problem-solving.'
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

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Geometry of Data",
        date: "April 12, 2026",
        excerpt: "Why the search for intelligence in machines mirrors our search for meaning in noise.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-text-muted" },
                "We live in a world of high-dimensional noise. Every signal, every pixel, every sensor reading is a point in a vast, dark space. To find intelligence is to find the manifold—the quiet shape hidden within the static."
            ),
            React.createElement("p", { className: "mb-8 text-text-muted" },
                "Data is not just numbers; it is a footprint of reality. When we train neural networks, we are essentially teaching machines to see the invisible structure of our world."
            )
        )
    }
];
