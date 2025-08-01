import React from 'react';
import { Code2, Database, Brain, Globe, PenTool as Tool, Cpu,GraduationCap, Calendar, MapPin, Award, BookOpen  } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 95 },
        { name: "Keras", level: 88 },
        { name: "OpenCV", level: 80 },
        { name: "NLTK", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "C", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 92 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
        { name: "Plotly", level: 75 },
        { name: "Jupyter", level: 95 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Flask", level: 85 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 82 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Tool className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Google Cloud", level: 68 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Specialized Areas",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      skills: [
        { name: "Deep Learning", level: 88 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 80 },
        { name: "Signal Processing", level: 82 },
        { name: "Statistical Analysis", level: 90 },
        { name: "Model Deployment", level: 85 }
      ]
    }
  ];
    const certifications = [
    {
      title: "Hands-on approach to AI for real-world applications",
      provider: "IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
      date: "2025",
      description: "Comprehensive course covering Machine Learning, Deep Learning,Neural Networks and Gen AI by IIT Kharagpur faculties.I have secured Certificate of Completion with 152/200 Marks.",
      link:"https://www.tcsion.com/iDH/user/credential/view/1016-91d3239f-4254-11f0-86b9-005056b47784"
    },
    {
      title: "Large Multimodal Model Prompting with Gemini!",
      provider: "Deeplearning.ai",
      date: "2024",
      description: "Best practices for multimodal prompting using Google’s Gemini model.",
      link:"https://learn.deeplearning.ai/accomplishments/17cca4a9-c88f-44ef-abac-03c069730c1f?usp=sharing"
    },
    {
      title: "PCAP - Programming Essentials in Python",
      provider: "CISCO Network Academy",
      date: "2021",
      description: "Complete understanding of Python and Gemnini."
    },
    {
      title: "Fundamentals of Facial Recognition",
      provider: "Microsoft",
      date: "2023",
      description: "Advanced Python programming for data store, train the model and machine learning",
      link:"https://learn.microsoft.com/api/achievements/share/en-us/SambitSubhasishSahu-6485/BLF7847D?sharingId=2AA1504DC92D8665",
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning machine learning, data science, and full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
                {/* Certifications */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Certifications & Online Learning</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-lg text-white flex-shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.link ? (
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:underline"
                        >
                          {cert.title}
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h4>
                    <div className="text-blue-600 font-semibold mb-2">{cert.provider}</div>
                    <div className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};