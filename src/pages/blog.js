import { useStaticQuery, graphql } from "gatsby";
import * as React from "react"
import BlogPreview from "../components/blogPreview";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/global.css"

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query BlogPosts {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                        excerpt
                        slug
                        date(fromNow: true)
                    }
                }
            }
        }
    `)

    const blogPreviews = data.allMarkdownRemark.nodes.map((node) =>
        <BlogPreview
            key={node.frontmatter.slug}
            blogTitle={node.frontmatter.title || `Blog Title`}
            excerpt={node.frontmatter.excerpt || `Short description of the blog.`}
            date={node.frontmatter.date}
            slug={node.frontmatter.slug} />
    )

    return (
        <Layout>
            <div className="standardSpacing">
                <Seo title="Blog" />
                <h1>My Blog</h1>
                <p>Here's where I put all my random thoughts, straight from my head to your eyes.</p>
                <ul> {blogPreviews} </ul>
            </div>
        </Layout>
    )
}

export default BlogPage