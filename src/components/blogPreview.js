import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const BlogPreview = ({ blogTitle, excerpt, date, slug }) => (
    <div>
        <h3><Link to={slug}>{blogTitle}</Link></h3>
        <h5>{date}</h5>
        <p>{excerpt}</p>
        <p><Link to={slug}>Read more...</Link></p>
    </div>
)

BlogPreview.propTypes = {
    blogTitle: PropTypes.string,
    excerpt: PropTypes.string
}

BlogPreview.defaultProps = {
    blogTitle: ``,
    excerpt: ``
}

export default BlogPreview
