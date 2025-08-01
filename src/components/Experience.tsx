import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Associate Software Developer",
      company: "Odisha Knowledge Corporation Limited",
      companyLink: "https://www.okcl.org",
      location: "Bhubaneswar, Odisha",
      period: "09/2023 - Present",
      type: "AI/ML Development, Training and Project Management",
      description: "Leading research initiatives in emerging technologies for edu tech sector, focusing on AI and IoT based development and managing different projects.",
      achievements: [ 
        "Published research on ensemble learning models for EEG-based emotion classification",
        "Developed novel deep learning approaches for biomedical signal processing",
        "Collaborated with international research teams on cutting-edge AI projects",
        "Mentored junior researchers and contributed to open-source ML libraries"
      ]
    },
    {
      title: "AI/ML Intern",
      company: "ProdigalAI",
      companyLink: "https://www.prodigalai.com/",
      location: "Delhi",
      period: "02/2023 to 07/2023",
      type: "AI/ML Research and Development",
      description: "Designed and implemented machine learning solutions for various domains including healthcare, computer vision, and natural language processing.",
      achievements: [
        "Built X-Ray disease detection systems using advanced CNN architectures",
        "Developed COVID-19 classification models with high accuracy rates",
        "Created end-to-end ML pipelines for production deployment",
        "Optimized model performance and reduced inference time by 40%"
      ]
    },
    {
      title: "IT Faculty",
      company: "National Institute of Electronics and Information Technology",
      companyLink: "https://www.nielit.gov.in/bhubaneswar/index.php",
      location: "Bhubaneswar",
      period: "2021 - 2023",
      type: "Trainer, Examination Head",
      description: "Gained hands-on experience in data analysis, model development, and deployment while working on real-world business challenges.",
      achievements: [
        "Analyzed large datasets to extract actionable business insights",
        "Developed predictive models for customer behavior analysis",
        "Created interactive dashboards for data visualization",
        "Implemented automated data processing workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through diverse roles in AI/ML research, training, development and project management.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-blue-500 to-teal-500"></div>
              )}
              
              <div className="flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        {exp.companyLink ? (
                          <a 
                            href={exp.companyLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-blue-600 hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <div className="text-lg font-semibold text-blue-600">
                            {exp.company}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Research' ? 'bg-purple-100 text-purple-700' :
                          exp.type === 'Development' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {exp.type}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-blue-100 mb-6">
              I'm always excited to work on innovative AI/ML projects and collaborate with forward-thinking teams.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
