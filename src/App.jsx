import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default app