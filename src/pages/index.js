import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IconCollection from "../components/iconCollection"
import HomeHeader from "../components/homeHeader"
import EmailSignup from "../components/emailSignup"
import SocialLinks from "../components/socialLinks"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <HomeHeader></HomeHeader>

    <h3>
      I'm a software engineer, musician, and writer.
    </h3>
    <p>
      I like to solve problems, write music, share stories, and build systems that work.
      I think we all have a unique story to be told, and it is my passion to share those stories with the world and leave our legacy.
      I believe in authentic personal connections to unravel the incredible possibilities within each of us.
      I believe in embracing the future of technology for the <em>betterment and advancement of all humans.</em>
    </p>
    <p>
      I was born and raised in Chicago, IL, USA.
      Contact me to talk about building your own website, see my work, read my blog, or check out some music I've written!
    </p>

    <h4>This is a website I’ve built completely from the ground up.</h4>

    <p>Here are just some of the different technologies I used to build this site:</p>

    <IconCollection></IconCollection>

    <p>Here are some of the benefits from building a website this way:</p>
    <ul>
      <li>No heavy bogged down WordPress integrations or generic pre-built themes.</li>
      <li>Customize as much as I want.</li>
      <li>Quickly deploy updates to the cloud as soon as I merge to the main branch.</li>
      <li>It's all open source, and you can check it out here on <a rel="noreferrer" target="_blank" href="https://github.com/jvmontes/basic-blog">Github</a>.</li>
    </ul>

    <h2>Thanks for visiting!</h2>

    <EmailSignup></EmailSignup>

    <SocialLinks></SocialLinks>

  </Layout>
)

export default IndexPage
