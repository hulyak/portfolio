import React from "react"
import { FaCode, FaServer, FaDatabase,FaCloud, FaCodeBranch, FaRegQuestionCircle, FaFigma} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "front end",
    text: `HTML | CSS | SASS | Bootstrap| JavaScript | Typescript | React | Redux | Gatsby | Graphql`,
  },
    {
    id: 1,
    icon: <FaFigma className="service-icon" />,
    title: "design",
    text: `Figma | AdobeXD`,
  },
  {
    id: 2,
    icon: <FaServer className="service-icon" />,
    title: "back end",
    text: `Node JS | Express | Python`,
  },
  {
    id: 3,
    icon: <FaDatabase className="service-icon" />,
    title: "databases",
    text: `SQL | MongoDB | Mongoose | PostgreSQL | MySQL`,
  },
  {
    id: 3,
    icon: <FaCodeBranch className="service-icon" />,
    title: "version control",
    text: `Git | Github`,
  },
  {
    id: 3,
    icon: <FaCloud className="service-icon" />,
    title: "cloud",
    text: `AWS | Google Cloud | DigitalOcean | Firebase`,
  },
  {
    id: 3,
    icon: <FaRegQuestionCircle className="service-icon" />,
    title: "testing",
    text: `Selenium | WebDriver IO | Jest | Cypress | Mocha | Chai | Jasmine`,
  },
]
