import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {

    async function getArticle() {
        const response = await fetch('https://dev.to/api/articles?username=hulyakarakaya');
        const data = await response.json();
        console.log(data);
    }

  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        description
        id
        slug
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
