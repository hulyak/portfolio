import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  const isOpen = false;
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" :  "" }`}>
      {/* toggle sidebar */}
      <button className="close-btn">
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass="sidebar-links" />
        <SocialLinks styleClass="sidebar-icons" />
      </div>
    </aside>
  )
}

export default Sidebar
  