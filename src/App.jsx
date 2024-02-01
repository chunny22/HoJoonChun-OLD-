import React from 'react'
import { motion } from 'framer-motion'

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
      <motion.div
        animate={{ y: 0}}
        initial={{ y: 200}}
        transition={{ type: 'spring', 
                      stiffness: 60,
                      mass: 1,
                      delay: 1.7 }}
      ><Nav /></motion.div>
      <Experience />
      <Project />
      <Resume />
      <Footer />
    </>
  )
}

export default app