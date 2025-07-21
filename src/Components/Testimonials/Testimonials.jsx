import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref = {slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Student 1</h3>
                                <span>KCA,Amritsar</span>

                            </div>
                        </div>
                        <p>Khalsa College offers a solid academic structure with experienced faculty and a wide range of courses. I studied B.Sc. here, and the labs and facilities were excellent. The curriculum is updated and helps build both theory and practical skills.</p>
                    </div>
                </li>
                  <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Student 2</h3>
                                <span>KCA,Amritsar</span>

                            </div>
                        </div>
                        <p>The campus is one of the most beautiful in India — peaceful, historic, and full of energy. From cultural festivals to sports tournaments, there's always something happening. It truly balances education with extracurricular growth.</p>
                    </div>
                </li>
                  <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Student 3</h3>
                                <span>KCA,Amritsar</span>

                            </div>
                        </div>
                        <p>What stood out the most was the faculty. Professors are not only knowledgeable but also very supportive. They encourage questions and help you grow academically and personally. I really felt guided throughout my degree.</p>
                    </div>
                </li>
                  <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3> Student 4</h3>
                                <span>KCA,Amritsar</span>

                            </div>
                        </div>
                        <p>My three years at Khalsa College were the best of my life. I made great friends, learned valuable skills, and gained confidence. It's more than a college — it's a journey.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials