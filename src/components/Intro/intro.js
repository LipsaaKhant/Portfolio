import React from "react";
import './intro.css'
import bg from '../../assets/pc.png'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi there!!</span>
                <span className="introduction">I'm <span className="introName"> Lipsa</span> <br /> Web Developer</span>
                <p className="introPara"> A Master of Science graduate, with a strong foundation and experience in programming principles and software engineering across diverse platforms.
                I code cool websites and app leveraging lastest technolgoies.</p>
            </div>
            <div style={{padding:'5px'}}>
                <center><img src= {bg} alt="" className="bg" /></center>  
            </div>
            
        </section>
    )

}

export default Intro;