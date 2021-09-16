import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as styles from "../components/blogPreview.module.css";

const BlogPreview = ({ blogTitle, excerpt, date, slug, avatar }) => (
    <div className={styles.blog}>
        <div className={styles.description}>
            <h6>{date}</h6>
            <h2 className={styles.title}><Link to={slug}>{blogTitle}</Link></h2>
            <p className={styles.excerpt}>{excerpt}</p>
            <p><Link to={slug}>Read more</Link></p>
        </div>
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
