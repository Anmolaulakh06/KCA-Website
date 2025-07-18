import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/myPlayIcon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() => {
              setPlayState(true)
            }} />
        </div>
        <div className="about-right">
            <h3>ABOUT COLLEGE</h3>
            <h2>Khalsa College Legacy</h2>
            <p>Khalsa College, founded in 1892 in Amritsar, is a historic institution known for combining academic excellence with Sikh values. Its stunning architecture, designed by Bhai Ram Singh, blends Mughal, Sikh, and Gothic styles, making it a cultural landmark.</p>
            <p>he college offers undergraduate and postgraduate courses in arts, science, commerce, agriculture, and more. Affiliated with Guru Nanak Dev University and accredited with an 'A' grade by NAAC, it features modern labs, libraries, hostels, and sports facilities. The agricultural wing has played a key role in Punjab’s farming development.</p>
            <p>Khalsa College encourages all-round growth, producing top athletes, professionals, and leaders. It remains a beacon of quality education, tradition, and progressive learning for generations of students.</p>
        </div>
    </div>
  )
}

export default About