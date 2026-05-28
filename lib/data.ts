export type Course = {
  id: number;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  rating: number;
  price: string;
  description: string;
  instructor: string;
  curriculum: string[];
  skills: string[];
  image: string;
};

export type RoadmapStage = {
  stage: number;
  title: string;
  description: string;
  topics: string[];
  tools: string[];
};

export type Instructor = {
  id: number;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const courses: Course[] = [
  {
    id: 1,
    slug: "introduction-to-ai",
    title: "Introduction to AI",
    category: "AI Fundamentals",
    level: "Beginner",
    duration: "10 hours",
    lessons: 12,
    rating: 4.8,
    price: "Free",
    description: "Start your journey into the world of Artificial Intelligence. Learn the history, core concepts, and future of AI.",
    instructor: "Dr. Sarah Chen",
    curriculum: [
      "History of AI",
      "What is Artificial Intelligence?",
      "Narrow vs General AI",
      "Real-world AI Applications",
      "Ethical Considerations",
      "The Future of AI"
    ],
    skills: ["AI Literacy", "Conceptual Thinking", "Ethics", "Problem Solving", "Tech Awareness"],
    image: "https://picsum.photos/seed/course1/600/400"
  },
  {
    id: 2,
    slug: "python-for-ml",
    title: "Python for ML",
    category: "Machine Learning",
    level: "Beginner",
    duration: "15 hours",
    lessons: 18,
    rating: 4.9,
    price: "$49",
    description: "Master Python programming specifically for Machine Learning. Focus on libraries like NumPy, Pandas, and Matplotlib.",
    instructor: "Alex Rivera",
    curriculum: [
      "Python Basics for Data Science",
      "NumPy for Numerical Computing",
      "Pandas for Data Manipulation",
      "Data Visualization with Matplotlib",
      "Seaborn for Statistical Plots",
      "Exploratory Data Analysis"
    ],
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Analysis"],
    image: "https://picsum.photos/seed/course2/600/400"
  },
  {
    id: 3,
    slug: "prompt-engineering-mastery",
    title: "Prompt Engineering Mastery",
    category: "LLM Engineering",
    level: "Intermediate",
    duration: "8 hours",
    lessons: 10,
    rating: 4.7,
    price: "$29",
    description: "Learn the art and science of crafting effective prompts for Large Language Models like GPT-4 and Claude.",
    instructor: "Dr. Sarah Chen",
    curriculum: [
      "Foundations of Prompting",
      "Zero-Shot and Few-Shot Prompting",
      "Chain-of-Thought Techniques",
      "Prompt Optimization Patterns",
      "Handling Model Hallucinations",
      "Advanced Prompt Engineering"
    ],
    skills: ["Prompt Engineering", "LLM Interaction", "GPT-4", "Creative Writing", "Logic"],
    image: "https://picsum.photos/seed/course3/600/400"
  },
  {
    id: 4,
    slug: "build-ai-agents-with-langchain",
    title: "Build AI Agents with LangChain",
    category: "Agentic AI",
    level: "Advanced",
    duration: "20 hours",
    lessons: 25,
    rating: 4.9,
    price: "$99",
    description: "Create sophisticated AI agents that can reason, plan, and use tools to solve complex tasks using LangChain.",
    instructor: "Jordan Smith",
    curriculum: [
      "Introduction to LangChain",
      "LLM Chains and Sequences",
      "Memory Systems in AI Agents",
      "Tool and API Integration",
      "Building Custom Agents",
      "Agent Evaluation Frameworks"
    ],
    skills: ["LangChain", "AI Agents", "API Integration", "Python", "Autonomous Systems"],
    image: "https://picsum.photos/seed/course4/600/400"
  },
  {
    id: 5,
    slug: "fine-tuning-llms",
    title: "Fine-tuning LLMs",
    category: "LLM Engineering",
    level: "Advanced",
    duration: "12 hours",
    lessons: 15,
    rating: 4.8,
    price: "$79",
    description: "Learn how to specialize Large Language Models for your specific use cases through supervised fine-tuning.",
    instructor: "Alex Rivera",
    curriculum: [
      "When to Fine-tune vs RAG",
      "Dataset Preparation and Cleaning",
      "PEFT and LoRA Techniques",
      "Hyperparameter Tuning",
      "Evaluation with Benchmarks",
      "Model Quantization"
    ],
    skills: ["Fine-tuning", "LoRA", "PyTorch", "Hugging Face", "Model Evaluation"],
    image: "https://picsum.photos/seed/course5/600/400"
  },
  {
    id: 6,
    slug: "autogen-multi-agent-systems",
    title: "AutoGen Multi-Agent Systems",
    category: "Agentic AI",
    level: "Advanced",
    duration: "18 hours",
    lessons: 22,
    rating: 4.9,
    price: "$89",
    description: "Discover how to orchestrate multiple AI agents to collaborate and solve tasks autonomously using Microsoft's AutoGen.",
    instructor: "Jordan Smith",
    curriculum: [
      "AutoGen Fundamentals",
      "Multi-Agent Conversation Patterns",
      "Agent Customization and Roles",
      "Human-in-the-Loop Integration",
      "Code Execution Environments",
      "Complex Workflow Design"
    ],
    skills: ["AutoGen", "Multi-Agent Systems", "Collaboration Logic", "Python", "Orchestration"],
    image: "https://picsum.photos/seed/course6/600/400"
  },
  {
    id: 7,
    slug: "vector-databases-and-rag",
    title: "Vector Databases and RAG",
    category: "Tools and Frameworks",
    level: "Intermediate",
    duration: "14 hours",
    lessons: 16,
    rating: 4.7,
    price: "$59",
    description: "Master Retrieval Augmented Generation (RAG) by learning about vector embeddings and databases.",
    instructor: "Dr. Sarah Chen",
    curriculum: [
      "Understanding Embeddings",
      "Vector Database Landscape",
      "Pinecone vs Milvus vs Qdrant",
      "Implementing Semantic Search",
      "RAG Architecture Patterns",
      "Optimizing Retrieval Quality"
    ],
    skills: ["Vector Databases", "RAG", "Embeddings", "Search Engineering", "Qdrant"],
    image: "https://picsum.photos/seed/course7/600/400"
  },
  {
    id: 8,
    slug: "ai-deployment-with-fastapi",
    title: "AI Deployment with FastAPI",
    category: "Tools and Frameworks",
    level: "Intermediate",
    duration: "12 hours",
    lessons: 14,
    rating: 4.6,
    price: "$49",
    description: "Learn to build and deploy high-performance AI APIs using FastAPI and Docker.",
    instructor: "Alex Rivera",
    curriculum: [
      "FastAPI Basics",
      "Asynchronous API Design",
      "Serving ML Model Predictions",
      "Dockerizing AI Applications",
      "Scaling with Gunicorn",
      "Monitoring and Logging"
    ],
    skills: ["FastAPI", "Docker", "API Design", "Deployment", "Backend Engineering"],
    image: "https://picsum.photos/seed/course8/600/400"
  }
];

export const roadmapStages: RoadmapStage[] = [
  {
    stage: 1,
    title: "AI Beginner",
    description: "Master the fundamentals of Python and core mathematics for machine learning.",
    topics: ["Python Programming", "NumPy & Pandas", "Statistics", "Linear Algebra"],
    tools: ["Python", "Jupyter Notebooks", "NumPy", "Pandas"]
  },
  {
    stage: 2,
    title: "ML Engineer",
    description: "Learn to build and train traditional machine learning models and neural networks.",
    topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Deep Learning"],
    tools: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras"]
  },
  {
    stage: 3,
    title: "LLM Engineer",
    description: "Dive into Large Language Models, Prompt Engineering, and RAG systems.",
    topics: ["Prompt Engineering", "RAG (Retrieval Augmented Generation)", "Fine-tuning", "Vector Databases"],
    tools: ["OpenAI API", "LangChain", "Qdrant", "Hugging Face"]
  },
  {
    stage: 4,
    title: "Agentic AI Engineer",
    description: "Design autonomous multi-agent systems that can reason and execute tasks.",
    topics: ["AI Agents", "Multi-agent Systems", "Tool Use", "Autonomous Workflows"],
    tools: ["AutoGen", "CrewAI", "LangGraph", "LlamaIndex"]
  }
];

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Lead AI Scientist",
    bio: "Ph.D. in Computer Science with 10+ years of experience in Natural Language Processing and AI Ethics.",
    experience: "12 Years",
    image: "https://picsum.photos/seed/instructor1/200/200"
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Senior ML Engineer",
    bio: "Ex-Google ML Engineer specializing in model optimization and large-scale deployment systems.",
    experience: "8 Years",
    image: "https://picsum.photos/seed/instructor2/200/200"
  },
  {
    id: 3,
    name: "Jordan Smith",
    role: "Agentic AI Specialist",
    bio: "Pioneer in multi-agent orchestration and developer of several open-source Agentic frameworks.",
    experience: "6 Years",
    image: "https://picsum.photos/seed/instructor3/200/200"
  }
];

export const stats: Stat[] = [
  { label: "Students", value: "12,000+" },
  { label: "Courses", value: "8+" },
  { label: "Instructors", value: "3+" },
  { label: "Completion Rate", value: "94%" }
];

export const testimonials: Testimonial[] = [
  {
    name: "Emily Watson",
    role: "Software Developer",
    text: "The Agentic AI course completely changed how I think about software. Building multi-agent systems is the future, and this course is the best way to learn it.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    text: "Clear, concise, and incredibly practical. The transition from ML to LLM engineering was seamless thanks to the structured roadmap.",
    rating: 5
  },
  {
    name: "Sophia Martinez",
    role: "AI Hobbyist",
    text: "As a beginner, I was intimidated by AI, but the Introduction to AI course made everything so accessible. I'm now halfway through the ML track!",
    rating: 5
  }
];

export const faqs: FAQ[] = [
  {
    question: "What are the prerequisites for the courses?",
    answer: "For beginners, a basic understanding of computer use is enough. For technical tracks, familiarity with basic programming (ideally Python) is recommended."
  },
  {
    question: "How long does it take to complete a track?",
    answer: "Each track takes approximately 4-8 weeks to complete, depending on your prior experience and the amount of time you can dedicate each week."
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes, every course comes with a verified digital certificate that you can share on LinkedIn or with potential employers."
  },
  {
    question: "What are the job prospects for AI Engineers?",
    answer: "AI Engineering is one of the fastest-growing fields in tech. Our graduates have found roles as ML Engineers, LLM Specialists, and AI Solutions Architects."
  }
];
