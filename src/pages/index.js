import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IconCollection from "../components/iconCollection"
import HomeHeader from "../components/homeHeader"
import EmailSignup from "../components/emailSignup"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/index.css"

import { IconContext } from "react-icons"
import { FiBook } from 'react-icons/fi'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <HomeHeader></HomeHeader>

    <div>
      <Link to="/blog" className="linkContainer">
        <IconContext.Provider value={{ color: "#1A1A1A", size: "2rem" }}>
          <span><FiBook></FiBook></span>
        </IconContext.Provider>
        Blog
      </Link>
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1>I built this website from the ground up.</h1>

        <p>Here the different technologies I used to build this site:</p>
      </div>

      <IconCollection></IconCollection>

      <div className="copyContent">
        <p>Here are some of the benefits from building a website this way:</p>
        <ul>
          <li>No heavy bogged down WordPress integrations or generic pre-built themes.</li>
          <li>Customize as much as I want.</li>
          <li>Quickly deploy updates to the cloud as soon as I merge to the main branch.</li>
          <li>It's all open source, and you can check it out here on <a rel="noreferrer" target="_blank" href="https://github.com/jvmontes/basic-blog">Github</a>.</li>
        </ul>

      </div>
    </div>

    <EmailSignup></EmailSignup>

  </Layout>
)

export default IndexPage
