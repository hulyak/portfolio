import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        image
        siteUrl
        twitterUsername
        siteTitle: title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    image,
    twitterUsername,
    siteUrl,
    author,
  } = site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

export default SEO
