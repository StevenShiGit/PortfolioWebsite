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
    title: 'Software Engineer Intern',
    period: 'Sep 2024 - Dec 2024 • 4 mos',
    logo: 'logos/canadalife-logo.jpeg',
    bullets: [
      'Improved the Consent API’s GET endpoint to support agreement level tracking and recurring biennial consent, reducing redundant consent requests and ensuring compliance with Government of Canada privacy regulations for over 1.5 million members.',
      'Helped develop a backend microservice using Java Spring Boot to manage successor holders and beneficiaries for group wealth plans, allowing efficient plan ownership transitions for over 1.2 million users.',
      'Enhanced API reliability by using PostgreSQL, Postman, and Rancher logs from Kubernetes clusters to test and debug over 20 API endpoints.',
      'Streamlined microservice delivery by implementing automated GitLab CI/CD pipelines to build Docker images and deploy them to AWS EKS, greatly reducing manual overhead.',
      'Created unit tests using JUnit5 and Mockito for various APIs, increasing code coverage by up to 40%.'
    ]
  },
  {
    company: 'Oak Ridges Heart Clinic',
    title: 'Senior Software Engineer',
    period: '2023 — Present',
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


