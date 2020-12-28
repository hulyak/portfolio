import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <Footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy; {new Date().getFullYear()}</h4>
        <span>Hulya Karakaya</span>all rights reserved
      </div>
    </Footer>
  )
}

export default Footer
