import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png'
import burgerMenu from '../../assets/menuIcon.png'
import closeMenu from '../../assets/closeIcon.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className="desktopMenu">
                <Link className='desktopMenuListItem' activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={200} >Home</Link>
                <Link className='desktopMenuListItem' activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-100} duration={200}>About Me</Link>
                <Link className='desktopMenuListItem' activeClass="active" to="projects" spy={true} smooth={true} offset={-90} duration={200}>Projects</Link>
                <Link className='desktopMenuListItem' activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={200}>Contact</Link>
            </div>
            <button className="desktopMenuBtn" onClick={ () => {
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});}
            }>Contact Me </button>
            
            <img src={ showMenu===true?closeMenu: burgerMenu} alt='Menu' className='mobMenu' onClick={() =>setShowMenu((prev)=>!prev)} />
            <div className="burgerMenu" style={ {display: showMenu? 'flex': 'none'}} >
                <Link className='burgerMenuListItem' activeClass="active" to="intro" onClick={()=> setShowMenu(false)} spy={true} smooth={true} offset={-100} duration={200} >Home</Link>
                <Link className='burgerMenuListItem' activeClass="active" to="aboutMe" onClick={()=> setShowMenu(false)} spy={true} smooth={true} offset={-100} duration={200}>About Me</Link>
                <Link className='burgerMenuListItem' activeClass="active" to="projects" onClick={()=> setShowMenu(false)} spy={true} smooth={true} offset={-90} duration={200}>Projects</Link>
                <Link className='burgerMenuListItem' activeClass="active" to="contact" onClick={()=> setShowMenu(false)} spy={true} smooth={true} offset={-80} duration={200}>Contact</Link>
            </div>
        </nav>
        
        
    )
}

export default Navbar