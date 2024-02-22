import React from 'react';
import './projects.css';
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import weather from '../../assets/weather.png';
import game from '../../assets/game.png';
import simon from '../../assets/simon.png'
import drum from '../../assets/drum.png';

const Projects = () => {
    return (
        <div id="projects">
            <h2 className="projectHeading"> Projects</h2>
            <p className="projectIntro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero ac elit molestie fermentum. Fusce tempor, libero id fermentum ultricies, elit nulla pharetra est, vel efficitur nisi odio vel leo. Nullam auctor, urna eu commodo varius, lorem est pellentesque orci, ac tincidunt ipsum purus sit amet velit. Vivamus eu lectus metus. Nulla facilisi. Duis vitae sapien nec purus lacinia malesuada. In consequat euismod ante, eget vestibulum ipsum.</p>
            <div className="projectItems">
                <img src={html} alt="HTML" className='projectItem' />
                <img src={simon} alt= "SimonGame" className="projectItem" />
                <img src={drum} alt= "Drum" className="projectItem" />
                <img src={js} alt= "JavaScript" className="projectItem" />
                <img src={weather} alt= "API" className="projectItem" />
                <img src={game} alt= "Dice" className="projectItem" />               
            </div>
        </div>
    );
}

export default Projects;