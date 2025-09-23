import React, { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const isDark = theme === 'dark'

  const themeClass = useMemo(() => (isDark ? 'theme-dark' : 'theme-light'), [isDark])

  return (
    <div className={themeClass}>
      <Navbar onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')} isDark={isDark} />
      <main>
        <Hero />
       
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
