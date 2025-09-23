import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Software', 'Web', 'Full Stack', 'ML', 'Backend']
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 100 : 150) // Faster when deleting
    
    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section className="hero">
      <div className="container">
        <h1>Hi, I'm Steven</h1>
        <p className="typing-line">
          I am a <span className="typing-text">{currentText}</span>
          <span className="cursor">|</span>Developer
        </p>
      </div>
    </section>
  )
}





