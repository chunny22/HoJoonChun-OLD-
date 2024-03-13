import React from 'react'
import { Document } from '@react-pdf/renderer';
import './resume.css'

const Resume = () => {
  return (
    <section id='resume'>
      <h2>My Resume</h2>
      <Document file="../src/assets/resume.pdf"></Document>
    </section>
  )
}

export default Resume