import React from 'react'
import './header.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/justin-chun/' target='_blank' rel='noopener noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/chunny22' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
        <a href='mailto: chunny0501@gmail.com'><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials