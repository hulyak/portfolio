import React from "react"
import resume from '../assets/hulya-karakaya.pdf';

import {
  FaGithub,
  FaLinkedin,
  FaDev,
  FaInbox,
  FaTwitterSquare,
  FaDownload
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/hulyak",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/hulya-karakaya/",
  },
  {
    id: 3,
    icon: <FaDownload className="social-icon"></FaDownload>,
    url: resume,
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/hulyakarkya",
  },
  {
    id: 4,
    icon: <FaDev className="social-icon"></FaDev>,
    url: "https://dev.to/hulyakarakaya",
  },
  {
    id: 5,
    icon: <FaInbox className="social-icon"></FaInbox>,
    url: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=hulyakarakayaa06@gmail.com#",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
