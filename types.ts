/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Project {
  id: string;
  title: string;
  date: string;
  desc: string;
  longDesc?: string;
  image?: string;
  video?: string;
  tags: string[];
  link?: string;
  github?: string;
  architecture?: string[];
  challenges?: string[];
  status?: 'Deployed' | 'Beta' | 'Research';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}
