import React from 'react';
import { ExternalLink, Github, Award, Calendar, Tag } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "EEG-Based Emotion Classification",
      description: "Advanced ensemble learning model for classifying emotions from EEG signals using deep neural networks and signal processing techniques.",
      image: "https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "Signal Processing", "Deep Learning"],
      category: "Research",
      status: "Published",
      date: "2023",
      links: {
        demo: "https://sambitsahu.notion.site/X-Ray-Diseases-Detection-COVID-19-3ad7ea5ee0e44e309d5996c335713aec",
        github: "https://github.com/SambitSahuIT"
      },
      highlights: [
        "Published in Springer Professional",
        "Novel ensemble approach",
        "95% accuracy achieved",
        "Real-time processing"
      ]
    },
    {
      title: "X-Ray Disease Detection System",
      description: "AI-powered medical imaging system for detecting COVID-19 and other respiratory diseases from chest X-rays using advanced computer vision.",
      image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "PyTorch", "OpenCV", "Medical Imaging"],
      category: "Healthcare AI",
      status: "Deployed",
      date: "2022",
      links: {
        demo: "https://sambitsahu.notion.site/X-Ray-Diseases-Detection-COVID-19-3ad7ea5ee0e44e309d5996c335713aec",
        github: "https://github.com/SambitSahuIT"
      },
      highlights: [
        "92% diagnostic accuracy",
        "Real-time analysis",
        "Medical validation",
        "Production deployment"
      ]
    },
    {
      title: "AI in 2030: Future Predictions",
      description: "Comprehensive research and analysis on the future of artificial intelligence, exploring trends, challenges, and opportunities in the next decade.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Research", "Data Analysis", "Trend Analysis", "AI Ethics"],
      category: "Research",
      status: "Published",
      date: "2023",
      links: {
        demo: "https://sambitsahu.notion.site/AI-in-2030-3b4210079ea04a66841c49a9023eec0c"
      },
      highlights: [
        "Comprehensive market analysis",
        "Future trend predictions",
        "Industry expert interviews",
        "Policy recommendations"
      ]
    },
    {
      title: "OKCL Connect with AI",
      description: "Intelligent networking platform that uses AI to connect professionals based on skills, interests, and career goals for meaningful collaborations.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Machine Learning"],
      category: "Web Application",
      status: "Live",
      date: "2023",
      links: {
        demo: "https://sambitsahu.notion.site/OKCL-Connect-with-AI-23befd6c05de4661a0f64ee025a7b344",
        github: "https://github.com/SambitSahuIT"
      },
      highlights: [
        "AI-powered matching",
        "Real-time messaging",
        "Professional networking",
        "Smart recommendations"
      ]
    },
    {
      title: "Natural Language Processing Suite",
      description: "Comprehensive NLP toolkit featuring sentiment analysis, text classification, and language understanding capabilities for business applications.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "NLTK", "Transformers", "FastAPI"],
      category: "NLP",
      status: "In Development",
      date: "2024",
      links: {
        github: "https://github.com/SambitSahuIT"
      },
      highlights: [
        "Multi-language support",
        "Real-time processing",
        "API-first design",
        "Scalable architecture"
      ]
    },
    {
      title: "Computer Vision Analytics",
      description: "Advanced computer vision system for object detection, facial recognition, and scene analysis using state-of-the-art deep learning models.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "YOLO", "OpenCV", "TensorFlow"],
      category: "Computer Vision",
      status: "Completed",
      date: "2023",
      links: {
        github: "https://github.com/SambitSahuIT"
      },
      highlights: [
        "Real-time detection",
        "High accuracy rates",
        "Multi-object tracking",
        "Edge deployment ready"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative AI/ML projects spanning research, healthcare, and practical applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-teal-400 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Published' ? 'bg-green-500 text-white' :
                    project.status === 'Live' ? 'bg-blue-500 text-white' :
                    project.status === 'Deployed' ? 'bg-purple-500 text-white' :
                    'bg-orange-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {project.date}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">{project.category}</span>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-3 h-3 text-teal-500 flex-shrink-0" />
                      <span className="text-xs">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-blue-100 mb-6">
              I'm always excited to work on innovative projects and explore new technologies. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/SambitSahuIT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};