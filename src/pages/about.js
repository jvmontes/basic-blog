import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/global.css"

const AboutPage = () => (
    <Layout>
        <div className="standardSpacing">
            <Seo title="About" />
            <h1>About Me</h1>
            <p>Thanks for visiting my website today. Here's a little bit more about me.</p>
        </div>
    </Layout>
)

export default AboutPage