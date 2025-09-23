import React from 'react'

export default function Navbar({ onToggleTheme, isDark }) {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#" className="brand">Steven Shi</a>
        <nav>
          <a href="#timeline">Work</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        
        </nav>
      </div>
    </header>
  )
}



