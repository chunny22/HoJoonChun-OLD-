import React from 'react'
import { motion } from 'framer-motion'

import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <motion.div 
          className='container intro__container'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ type: 'tween', duration: 1 }}>
            <h5>Hello! My name is</h5>
            <h1>Justin Chun</h1>
            <h5 className='text-light'>New Grad CS Student</h5>
        </motion.div>
        
        <motion.div
          className='cta'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -50,  opacity: 0 }}
          transition={{ type: 'tween', duration: 1, delay: 0.7 }}
        ><CTA /></motion.div>
        
        <motion.div 
          className='container text__container'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -50,  opacity: 0 }}
          transition={{ type: 'tween', duration: 1, delay: 1.1 }}>
            <p className='text-medium'>
              Welcome to my web page!
              <br /><br />
              I am a recently graduated student from University of Ottawa, with a Honours Bachelor of Science in Computer Science.
              Coming all the way from South Korea, I have been living in Canada for about 8 years now, mostly living in Toronto. In here, 
              you can find out what I enjoy doing and what I am good at.
              <br /><br />
              In my spare time, I like to cook while listening to music, most of the time cooking Korean or Italian food. I also enjoy 
              spending time drinking coffee while listening to Jazz. Something about jazz is really soothing and it helps me to relax. 
              Which is why I'll be playing couple Jazz songs in the background while you are here, hoping it does the same to you too! 
              <br /><br />
              I have done numerous internships in the past, and I am currently looking for new opportunities as a new grad. I have done couple 
              of personal projects, along with a publication on arXiv. You can find out about all of them below in this site. If you'd like to 
              reach out, simply click on the 'Send Email' button up top or my social links on the left side of this site.
            </p>
        </motion.div>
        
        <HeaderSocial />

        <a href='#resume' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header