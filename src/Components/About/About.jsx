import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profileimgg.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a pre-final year student at VIT Chennai, passionate about frontend development and currently exploring the world of machine learning. I’ve interned as an ML Intern at AnkerCloud, where I gained hands-on experience with real-world Gen AI projects, AWS and GCP.</p>
                <p>With a strong drive to learn and build, I enjoy combining design with intelligence to create impactful digital solutions. I'm excited to step into the corporate world and grow as a developer.</p>
                <p>College: VIT Chennai, Chennai, Tamil Nade, 600127, India</p>
                <p>Experience: ML Intern at AnkerCloud, Frontend Developer Intern at Code Aplha</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YRS OF LEARNING & DEV</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>INTERNSHIPS & COLLABORATIONS</p>
        </div>
      </div>
    </div>
  )
}

export default About
