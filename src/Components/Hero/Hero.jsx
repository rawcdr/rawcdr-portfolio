import React from 'react'
import './Hero.css'
import profile_img from '../../assets/cropped_circle_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Aditya Raj Biswal,</span> ML x Front-End Dev @ VITC.</h1>
      <p>I'm a pre-final year student at VIT Chennai, passionate about frontend development and currently exploring the world of AI and machine learning. New to the domain but driven to learn, I'm excited to soon experience corporate life and apply my skills in real-world tech.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" style={{ cursor: "pointer" }} onClick={() => window.open("/Aditya_Raj_Biswal.pdf", "_blank")} >My resume</div>
      </div>
    </div>
  )
}

export default Hero
