import type { Project } from '../types'
import tbXrayImg from '../images/negative.png'
import aiChatbotImg from '../images/ai.png'
import fraudDetectionImg from '../images/ff.png'

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI-Chatbot',
    description:
      'Developed a real-time AI chatbot using Gemini API with a React frontend and Node.js backend. Implemented secure authentication, performance tuning, and session storage in MongoDB to support contextual multi-turn conversations.',
    tech: ['React', 'Node.js', 'Gemini API', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/jeevanshrestha/ai-chatbot',
    image: aiChatbotImg
  },
  {
    id: 'fraud-detection',
    title: 'Financial Fraud Detection',
    description:
      'Engineered fraud detection models using Logistic Regression and Random Forest. Performed feature engineering, preprocessing and evaluated models with precision/recall/F1 metrics to improve detection accuracy.',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Random Forest', 'XGBoost'],
    github: 'https://github.com/jeevanshrestha/financial-fraud-detection',
    image: fraudDetectionImg
  },
  {
    id: 'tb-xray',
    title: 'TB Chest X-ray Detection System',
    description:
      'Built a web-based diagnostic tool (Streamlit) using DenseNet121 transfer learning and Grad-CAM for explainability. Preprocessed images with OpenCV and used augmentation to boost accuracy.',
    tech: ['Python', 'DenseNet121', 'PyTorch', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/jeevanshrestha/tb-xray-detection',
    image: tbXrayImg
  }
]
