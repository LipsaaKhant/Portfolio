import React from "react";
import './footer.css';

const currentYear = new Date().getFullYear();
const Footer = () => {
    return(
        <footer className="footer">
            Copyright &#169; {currentYear} Lipsa Khant. All right received.
        </footer>
    );
}

export default Footer;