import type { Project } from '../types'
import tbXrayImg from '../images/negative.png'
import aiChatbotImg from '../images/ai.png'
import fraudDetectionImg from '../images/ff.png'
import privLensImg from '../images/privlens.png' // make sure to add an image

export const projects: Project[] = [
  {
    id: 'privlens',
    title: 'PrivLens',
    description:
      'Built PrivLens, detecting faces, text, documents, and vehicle number plates in uploaded images using Google Vision API, achieving 99% detection accuracy. Implemented automatic privacy protection, blurring sensitive information like faces and number plates, protecting over 90% of detected personal identifiers. Processed and analyzed hundreds of images per minute with a TypeScript/React/Node.js stack, ensuring fast and reliable privacy-preserving operations.',
    tech: ['TypeScript', 'React', 'Node.js', 'Google Vision API'],
    github: 'https://github.com/shresthajeevan/PrivLens',
    image: privLensImg
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Chatbot',
    description:
      'Developed a real-time AI chatbot using Gemini API with a React frontend and Node.js backend. Implemented secure authentication, performance tuning, and session storage in MongoDB to support contextual multi-turn conversations.',
    tech: ['React', 'Node.js', 'Gemini API', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/shresthajeevan/AI-Chatbot.git',
    image: aiChatbotImg
  },
  {
    id: 'fraud-detection',
    title: 'Financial Fraud Detection',
    description:
      'Engineered fraud detection models using Logistic Regression and Random Forest. Performed feature engineering, preprocessing and evaluated models with precision/recall/F1 metrics to improve detection accuracy.',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Random Forest', 'XGBoost'],
    github: 'https://github.com/shresthajeevan/Financial-Fraud-Detection.git',
    image: fraudDetectionImg
  },
  {
    id: 'tb-xray',
    title: 'TB Chest X-ray Detection System',
    description:
      'Built a web-based diagnostic tool (Streamlit) using DenseNet121 transfer learning and Grad-CAM for explainability. Preprocessed images with OpenCV and used augmentation to boost accuracy.',
    tech: ['Python', 'DenseNet121', 'PyTorch', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/parastiware/Final_Project.git',
    image: tbXrayImg
  }
]
