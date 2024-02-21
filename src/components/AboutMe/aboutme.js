import React from "react";
import './aboutme.css';

const AboutMe = () => {
    return (
        <div className="about-me-container" id="aboutMe">
            <section id="intro-section">
                <h1 className="intro-heading">Profile</h1>
                <p className="intro-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero ac elit molestie fermentum. Fusce tempor, libero id fermentum ultricies, elit nulla pharetra est, vel efficitur nisi odio vel leo. Nullam auctor, urna eu commodo varius, lorem est pellentesque orci, ac tincidunt ipsum purus sit amet velit. Vivamus eu lectus metus. Nulla facilisi. Duis vitae sapien nec purus lacinia malesuada. In consequat euismod ante, eget vestibulum ipsum.</p>
            </section>
            
            <div className="sections-container">
                <section id="education" className="horizontal-section">
                    <h2 className="section-heading">Education</h2>
                    <div className="edu-details">
                        <div className="edu-item">
                            <h3 className="degree">MSc. Computer Science</h3> 
                            <span className="uniName">[Lakehead University]</span>
                        </div>
                        <p className="degree-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, ex id gravida vulputate, purus libero interdum quam, sit amet placerat justo ligula eget libero. Duis ut felis a quam eleifend luctus.</p>
                        <div className="edu-item">
                            <h3 className="degree">Bachelors in Computer Engineering</h3>
                            <span className="uniName">[Gujarat Technological University]</span>
                        </div>
                        <p className="degree-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, ex id gravida vulputate, purus libero interdum quam, sit amet placerat justo ligula eget libero. Duis ut felis a quam eleifend luctus.</p>
                    </div>
                </section>

                <section id="experience" className="horizontal-section">
                    <h2 className="section-heading">Experience</h2>
                    <div className="exp-details">
                        <div className="exp-item">
                            <h3 className="position">Jr. Software Developer</h3>
                            <span className="company">[Arccus Inc.]</span>
                        </div>
                        <p className="exp-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, ex id gravida vulputate, purus libero interdum quam, sit amet placerat justo ligula eget libero. Duis ut felis a quam eleifend luctus.</p>
                        <div className="exp-item">
                            <h3 className="position">Business Development Executive</h3>
                            <span className="company">[Alian Software]</span>
                        </div>
                        <p className="exp-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, ex id gravida vulputate, purus libero interdum quam, sit amet placerat justo ligula eget libero. Duis ut felis a quam eleifend luctus.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutMe;
