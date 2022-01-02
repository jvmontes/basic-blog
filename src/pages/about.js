import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby"
import "../styles/global.css"
import AboutHeader from "../components/aboutHeader";

const bannerData = {
    title: "",
    subtitle: "",
    blurbText: `
    
    `,
    imageUrl: "",
    imageAlt: "",
    imageWidth: ""
}

const AboutPage = () => (
    <Layout>
        <div>
            <Seo title="About" />
            <AboutHeader></AboutHeader>

        </div>
    </Layout>
)

export default AboutPage