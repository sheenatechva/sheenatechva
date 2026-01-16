
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Lead Qualification Engine',
    tools: ['Zapier', 'Webhooks', 'Apollo', 'Google Sheets', 'Slack', 'Gmail', 'AI by Zapier'],
    description: 'An automated lead qualification system that enriches incoming leads, categorizes them by priority, and triggers the correct follow-up actions automatically.',
    imageUrl: 'https://i.imgur.com/I3N0ED8.png' // Placeholder for Image 2 (Workflow 1)
  },
  {
    id: '2',
    title: 'Lead Reply Detection & Status Tracking',
    tools: ['Gmail', 'Zapier', 'Asana'],
    description: 'An automation that monitors incoming email replies and updates task statuses automatically to track lead engagement in real time.',
    imageUrl: 'https://i.imgur.com/LAongnB.png' // Placeholder for Image 3 (Workflow 2)
  },
  {
    id: '3',
    title: 'Lead Lifecycle Automation Workflow',
    tools: ['Zapier', 'Asana', 'Google Drive', 'Gmail', 'AI by Zapier'],
    description: 'A complete lead lifecycle automation that reacts to task status changes and triggers the appropriate business actions from onboarding to closure.',
    imageUrl: 'https://i.imgur.com/T95dS0X.png' // Placeholder for Image 4 (Workflow 3)
  },
  {
    id: '4',
    title: 'Tier-Based Recommendation Email System',
    tools: ['Zapier', 'AI by Zapier', 'Gmail'],
    description: 'An AI-powered system that generates and sends personalized recommendation emails based on customer tiers.',
    imageUrl: 'https://i.imgur.com/I3N0ED8.png'
  }
];

export const SKILLS: Skill[] = [
  { name: 'AI Automation using Zapier' },
  { name: 'API Integration & Webhooks' },
  { name: 'Lead Qualification & Routing' },
  { name: 'Email Automation (Gmail + AI-generated emails)' },
  { name: 'CRM & Task Automation (Asana, Google Sheets)' },
  { name: 'Workflow Design & Optimization' },
  { name: 'Business Process Automation' }
];
