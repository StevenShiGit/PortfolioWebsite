import React from 'react'

const projects = [
  {
    title: 'Stock News Sentiment Dashboard',
    description: 'A stock dashboard that analyzes financial news with natural language processing to display market sentiment',
    tags: ['React', 'Node.js', 'MySQL', 'Flask', 'Python', 'Pytorch'],
    link: 'https://github.com/StevenShiGit/StockDashboardNLTK'
  },
  {
    title: '2D Platform Fighting Game',
    description: '2D fighting game where players can pick up items and fight',
    tags: ['Java', 'Swing GUI', 'OOP'],
    link: 'https://github.com/StevenShiGit/Platformer-Fighting-Game'
  },
  {
    title: 'Portfolio Website',
    description: 'The website you\'re on right now',
    tags: ['Vite', 'React', 'CSS', 'Next.js'],
    link: 'https://github.com/StevenShiGit/PortfolioWebsite'
  },
  
  
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <a key={p.title} className="card" href={p.link} target="_blank" rel="noreferrer">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
          
        </div>
      </div>
    </section>
  )
}




