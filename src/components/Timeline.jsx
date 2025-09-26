import React, { useState } from 'react'

function getInitials(name) {
  if (!name) return ''
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts[parts.length - 1]?.[0] ?? ''
  return (first + last).toUpperCase()
}

const roles = [
  {
    company: 'Canada Life',
    title: 'Software Engineer',
    period: 'May 2025 - Aug 2025 • 4 mos',
    logo: 'logos/canadalife-logo.jpeg',
    bullets: [
      'Developed an internal private markets capital management API using Django and PostgreSQL, enabling portfolio teams to oversee over $7.9 billion in private debt investments and automate capital call processes.',
      'Integrated observability and alerting into a wealth management transfer system using Kafka, Prometheus, and Grafana, helping detect bottlenecks and automate alerts for over 100 daily ownership transfers.',
      'Improved the Consent API microservice with Java Spring Boot and PostgreSQL to support agreement-level tracking and recurring biennial consent, reducing redundant consent requests and ensuring compliance with privacy regulations for over 1.5 million members.',
      'Streamlined microservice delivery by implementing automated GitLab CI/CD pipelines to build Docker images and deploy them to AWS EKS, greatly reducing manual overhead.'
    ]
  },
  {
    company: 'Oak Ridges Heart Clinic',
    title: 'Full Stack Developer',
    period: 'Sep 2024 - Dec 2024 • 4 mos',
    logo: 'logos/ohrc-logo3.png',
    bullets: [
      'Developed a Python program to automate the conversion of patient files to HL7 format using OpenAI API and prompt engineering, reducing document processing time from 3 minutes to 15 seconds.',
      'Utilized localized LLMs imported from HuggingFace to detect sensitive patient information and redact it, ensuring compliance with patient confidentiality laws.',
      'Created a user login system with Node.js, MySQL, and TypeScript for account authentication, authorization, and password resets, improving data security and resolving over 30 login-related complaints.',
      'Built a patient dashboard using React and deployed it with Azure and nginx, allowing patients to log nutrition and exercise while using a Python algorithm to detect health abnormalities. Adopted by 60% of clinic patients, greatly enhancing patient care.'
    ]
  },

]

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section id="timeline" className="section">
      <div className="container">
        <h2>Work</h2>
        <ol className="timeline">
          {roles.map((role, index) => {
            const isOpen = openIndex === index
            return (
              <li className="timeline-item" key={role.company + role.period}>
                <div className="timeline-marker" />
                <article className={`work-card ${isOpen ? 'open' : ''}`}>
                  <button
                    className="work-header"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="work-left">
                      {role.logo ? (
                        <img className="work-logo" src={role.logo} alt={`${role.company} logo`} loading="lazy" />
                      ) : (
                        <div className="work-logo initials" aria-hidden>{getInitials(role.company)}</div>
                      )}
                      <div className="work-titles">
                        <h3>{role.company} - {role.title}</h3>
                        <span className="muted">{role.period}</span>
                      </div>
                    </div>
                    <span className={`chevron ${isOpen ? 'rotate' : ''}`}>›</span>
                  </button>
                  <div className="work-details" hidden={!isOpen}>
                    <ul>
                      {role.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}


