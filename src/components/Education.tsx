import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Technology (M.Tech)",
      field: "Information Technology",
      institution: "Odisha University of Technology and Research",
      institutionUrl: 'https://outr.ac.in/',
      location: "Bhubaneswar",
      period: "2020 - 2022",
      grade: "CGPA: 8.5/10",
      description: "Specialized in Artificial Intelligence, Machine Learning, and Data Structures. Completed comprehensive coursework in algorithms, software engineering, and computer systems.",
      highlights: [
        "Specialized in AI/ML and Data Science",
        "Final year thesis on EEG-based emotion classification",
        "Active member of Computer Science Society",
        "Published a Research Paper at First International Conference, ICIICC 2022, Springer "
      ],
      courses: [
        "Machine Learning",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems"
      ]
    },
        {
      degree: "Master of Computer Application (MCA)",
      field: "Computer Application",
      institution: "Ravenshaw University",
      institutionUrl: 'https://ravenshawuniversity.ac.in/',
      location: "Cuttcak",
      period: "2016 - 2019",
      grade: "Percentage: 85%",
      description: "Focused on Mathematics and Science subjects with strong foundation in analytical thinking and problem-solving.",
      highlights: [
        "Mathematics and Science specialization",
        "Strong foundation in analytical thinking",
        "Participated in state level debate competation. ",
        "Class Representative and Placement Co-ordinater",
        "Chief Editor of Yearly Magazine *NIRANJANA*. "
      ],
      courses: ["C", "C++","JAVA","Data Structure","Computer Architecture","Software Engineering","AI"]
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      field: "Mathematics",
      institution: "K.S.U.B. Degree College,Bhanjanagr",
      institutionUrl: 'https://ksubcollege.edu.in',
      location: "Berhampur University",
      period: "2013 - 2016",
      grade: "Percentage: 69.28%",
      description: "Focused on Mathematics and Science subjects with strong foundation in analytical thinking and problem-solving.",
      highlights: [
        "Mathematics and Science specialization",
        "Strong foundation in analytical thinking",
        "Winner of inter and intra college debate competations."
      ],
      courses: [ "Analytical Mathematics","Discrete Mathematics", "Physics","Electronics" ]
    },
        {
      degree: "+2",
      field: "Science",
      institution: "OM BHURBHUVAH SVAH RESIDENTIAL CUM DAY SCHOLAR COLLEGE, BERHAMPUR",
      location: "Berhampur",
      period: "2011 - 2013",
      grade: "Percentage: 64.00%",
      description: "Focused on Mathematics and Science subjects with strong foundation in analytical thinking and problem-solving.",
      highlights: [
        "Mathematics and Science specialization",
        "Starting foundation in Computer Science."
      ],
      courses: ["Mathematics","Physics", "Chemistry", "Information Technology","English", "Odia"]
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Coursera (Stanford University)",
      date: "2023",
      description: "Comprehensive course covering supervised learning, unsupervised learning, and neural networks"
    },
    {
      title: "Deep Learning Specialization",
      provider: "Coursera (deeplearning.ai)",
      date: "2023",
      description: "Advanced deep learning concepts including CNNs, RNNs, and Transformers"
    },
    {
      title: "Data Science Certificate",
      provider: "IBM",
      date: "2022",
      description: "Complete data science workflow from data collection to model deployment"
    },
    {
      title: "Python for Data Science",
      provider: "edX (MIT)",
      date: "2022",
      description: "Advanced Python programming for data analysis and machine learning"
    }
  ];

    return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey in computer science and artificial intelligence
          </p>
        </div>
        
        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Academic Background</h3>
          
          {education.map((edu, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-blue-500 to-teal-500"></div>
              )}
              
              <div className="flex items-start">
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <GraduationCap size={24} />
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <div className="text-lg font-semibold text-blue-600 mb-2">{edu.field}</div>
                        <a 
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer underline decoration-transparent hover:decoration-blue-600 mb-2 inline-block"
                        >
                          {edu.institution}
                        </a>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500 mt-4 md:mt-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} />
                          <span className="font-semibold text-green-600">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>
                    
                    {/* Highlights */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-3">
                            <Award className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Relevant Courses */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Relevant Subjects</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, cIndex) => (
                          <span 
                            key={cIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications 
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
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
        </div>*/}
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-blue-100 mb-6">
              I believe in lifelong learning and staying updated with the latest developments in AI/ML and technology.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};