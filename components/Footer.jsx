import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>&copy; {currentYear} Headphones Store All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer