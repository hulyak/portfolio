import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Particles from "react-particles-js"

const particlesOptions = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#000",
    },
    opacity: {
      value: 0.5,
      anim: {
        enable: true,
      },
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: true,
        speed: 3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 0.2,
    },
  },
}

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg"  }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  // console.log(data);
  return (
    <header className="hero">
      <Particles id="particles-js" params={particlesOptions} />
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Hulya</h1>
            <h4>Frontend Developer</h4>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
