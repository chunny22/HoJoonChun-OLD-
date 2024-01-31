import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Project from './components/project/Project'
import Experience from './components/experience/Experience'
import Resume from './components/resume/Resume'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <Project />
      <Experience />
      <Resume />
      <Footer />
    </>
  )
}

export default app