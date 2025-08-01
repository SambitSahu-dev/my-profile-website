import React from 'react';
import { Brain, Code, Database, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Expertise",
      description: "Specialized in machine learning algorithms, deep learning, and neural networks with hands-on experience in real-world applications."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Training",
      description: "Proficient in Python, AI, Generative AI, IoT, and Data Analytics, with a focus on training young minds in emerging technologies."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Expert in data analysis, visualization, and building predictive models using advanced statistical techniques."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Published researcher with contributions number of cutting-edge AI methodologies on Springer."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm an AI/ML developer, trainer, and research enthusiast driven by a deep passion for advancing artificial intelligence through innovation and real-world impact.
            With a strong grounding in computer science, I’ve worked across development, training, and research, always aiming to bridge the gap between theory and application.
            I love exploring cutting-edge technologies, sharing knowledge through mentoring and training, and contributing to projects that push the boundaries of what AI and machine learning can achieve. Whether it’s building intelligent systems, experimenting with new models, or helping others grow in the field — I’m all in when it comes to shaping the future of AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">My Mission</h3>
            <p className="text-lg leading-relaxed text-center mb-8">
              To leverage the power of artificial intelligence and machine learning to solve complex real-world problems, 
              create innovative solutions, and contribute to the advancement of technology that benefits society. 
              I believe in the transformative potential of AI when applied thoughtfully and ethically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-blue-100">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-blue-100">Research Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};