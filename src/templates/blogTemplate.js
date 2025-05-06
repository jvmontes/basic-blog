import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, file } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const logoImage = getImage(file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <div className="standardSpacing">
        <div className="blog-post-container">
          <div className="blog-post">
            <div className="blog-post-header">
              <GatsbyImage
                image={logoImage}
                alt="Jorge Viramontes logo"
                style={{ marginBottom: "1rem" }}
              ></GatsbyImage>
            </div>
            <h1>{frontmatter.title}</h1>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
    file(relativePath: { eq: "jv-logo-full-soft-cream.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 320
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
  }
`
