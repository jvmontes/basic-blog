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
            <h3>
                I'm a software engineer, musician, and writer.
            </h3>

            <p>
                I was born and raised in Chicago, IL, USA.
            </p>

            <p>
                I like to solve problems, write music, share stories, and build systems that work.
            </p>
            <p>
                I think we all have a unique story to be told, and it is my passion to share those stories with the world and leave our legacy.
            </p>
            <p>
                I believe in authentic personal connections to unravel the incredible possibilities within each of us.
            </p>
            <p>
                I believe in embracing the future of technology for the <em>betterment and advancement of all humans.</em>
            </p>

            <p>
                Contact me to talk about building your own website, see my work, read my blog, or check out some music I've written!
            </p>
        </div>
    </Layout>
)

export default AboutPage