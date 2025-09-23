import React, { useState } from 'react'

const skillCategories = {
  'Programming Languages': [
    { name: 'C++', logo: '/logos/cpp.png' },
    { name: 'Java', logo: '/logos/java.png' },
    { name: 'Python', logo: '/logos/python.jpeg' },
    { name: 'TypeScript', logo: '/logos/typescript.webp' }
  ],
  'Frontend Development': [
    { name: 'React', logo: '/logos/react.png' },
    { name: 'CSS3', logo: '/logos/css2.svg' },
    { name: 'Vue.js', logo: '/logos/vuejs.jpeg' },
    { name: 'Vite', logo: '/logos/vite.png' },
    { name: 'HTML5', logo: '/logos/html.png' },

  ],
  'Backend Development': [
    { name: 'Node.js', logo: '/logos/nodejs.png' },
    { name: 'FastAPI', logo: '/logos/fastapi.png' },
    { name: 'Flask', logo: '/logos/flask.jpg' },
    { name: 'Spring Boot', logo: '/logos/spring.svg' },
    { name: 'Express', logo: '/logos/expressjs.png' },
    { name: 'Django', logo: '/logos/django.png' },
    
  ],
  'Cloud & DevOps': [
    { name: 'AWS', logo: '/logos/aws.png' },
    { name: 'Docker', logo: '/logos/docker.png' },
    { name: 'azure', logo: '/logos/azure.png' },
    { name: 'Kubernetes', logo: '/logos/kubernetes.svg' },
    { name: 'Jenkins', logo: '/logos/jenkins.png' },
    { name: 'Google Cloud', logo: '/logos/googlecloud.jpg' },
  ],
 
  'Databases & Storage': [
    { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'Redis', logo: '/logos/redis.png' },
    { name: 'MySQL', logo: '/logos/mysql.png' },
  ],
  'Other Technologies': [
    { name: 'Git', logo: '/logos/git.png' },
    { name: 'Linux', logo: '/logos/linux.jpeg' },
    { name: 'Hugging Face', logo: '/logos/huggingf.png' },
    { name: 'VS Code', logo: '/logos/vscode.jpeg' },
    { name: 'Pytorch', logo: '/logos/pytorch.png' },
    { name: 'Jira', logo: '/logos/jira.webp' }
  ]
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Programming Languages')

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2>My Skills</h2>
        
        <div className="skills-nav">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`skill-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tools-grid">
          {skillCategories[activeCategory].map((tool) => (
            <div key={tool.name} className="tool-card">
              <img 
                src={tool.logo} 
                alt={`${tool.name} logo`} 
                className="tool-logo"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="tool-fallback" style={{ display: 'none' }}>
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

