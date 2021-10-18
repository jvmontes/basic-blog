import * as React from "react"

import "../styles/global.css"
import "../styles/index.css"

import IconCollection from "../components/iconCollection"
import HomeHeader from "../components/homeHeader"
import EmailSignup from "../components/forms/emailSignup"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <HomeHeader></HomeHeader>

    <div className="bioContainer">
      <div className="copyContent">

        <h1>I built this website from the ground up.</h1>

        <p>Here the different technologies I used to build this site:</p>
      </div>

      <IconCollection></IconCollection>

      <div className="copyContent">
        <p>Here are some of the benefits from building a website this way:</p>
        <ul>
          <li>Unlimited customization and freedom around design.</li>
          <li>Lightweight implementation using simple Javascript.</li>
          <li>Quickly deploy iterative updates.</li>
          <li>It's all open source, and you can check it out here on <OutboundLink rel="noreferrer" target="_blank" href="https://github.com/jvmontes/basic-blog">Github</OutboundLink>.</li>
        </ul>

      </div>
    </div>

    <EmailSignup></EmailSignup>

  </Layout>
)

export default IndexPage
