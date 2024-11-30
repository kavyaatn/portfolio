const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/kavyaatn',
  title: 'KTN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kavya T N',
  role: 'An AIML Developer and Frontend enthusiast',
  description:
    'A motivated AI and Data Science professional skilled in Python, Machine Learning, Deep Learning, and NLP. Experienced in developing and deploying AI models, along with data analysis and visualization. I can contribute to the company by utilizing my skills to provide innovative solutions and support data-informed decision-making.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/kavya-tn-3ab793232',
    github: 'https://github.com/kavyaatn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Realtor clone',
    description: 'Real Estate website',
    stack: ['TailwindCSS', 'JavaScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/kavyaatn/realtor-clone',
    livePreview: 'https://website-clone-chi.vercel.app/',
  },
  {
    name: 'Prediction of Heart Attack possibility using Computational Algorithms',
    description:
      'Developed computational algorithms to predict heart attack risk using machine learning techniques and comparing them',
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Keras', 'Matplotlib'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Medical Image Generation and analysis using Diffusion Models',
    description:
      'Designed and implemented diffusion models for medical image generation and analysis',
    stack: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Anger and Happy Emotion Analysis for Speaker Recognition using Machine Learning Approach',
    description:
      'Conducted emotion analysis for speaker recognition by extracting prosodic features from audio signals using machine learning.',
    stack: ['Python', 'Librosa', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Deep Learning',
  'Natural Language Processing',
  'Flask',
  'HTML',
  'CSS',
  'Git',
  'Docker',
  'TailwindCSS',
  'Tableau',
  'JavaScript (Beginner)',
  'React (Beginner)',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kavyanagaraj15@gmail.com',
}

const publications = [
  {
    name: 'Analysis Of Heart Disease Possibility Using ML Algorithms',
    publication: 'IEEE 2023',
    livePreview: 'https://ieeexplore.ieee.org/abstract/document/10100993',
  },
  {
    name: 'Accident Detection in images and videos using CNN ,LSTM and X-AI',
    publication: 'I2CT-2024',
    livePreview: 'https://github.com',
  },
]

export { header, about, projects, skills, contact, publications }
