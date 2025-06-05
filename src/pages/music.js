import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
import "../styles/music.css"
import { FaInstagram, FaTiktok, FaSoundcloud } from "react-icons/fa"
import { IoLogoVenmo } from "react-icons/io5"

import LinkInBioItem from "../components/common/LinkInBioItem"

const MusicPage = () => {
  return (
    <Layout>
      <SEO title="Music" />
      <section className="linkinbio-container">
        <h2 className="linkinbio-header">
          <strong>J. Alberto Music</strong>
        </h2>
        <p className="linkinbio-subtext">
          Music · Technology · Abundance Mindset
        </p>

        <ul className="linkinbio-links">
          <LinkInBioItem
            href="https://soundcloud.com/jayalbertomusic"
            icon={FaSoundcloud}
            label="SoundCloud"
          ></LinkInBioItem>
          <LinkInBioItem
            href="https://www.instagram.com/j.albertomusic"
            icon={FaInstagram}
            label="Instagram"
          ></LinkInBioItem>
          <LinkInBioItem
            href="https://www.tiktok.com/@thejorgealberto"
            icon={FaTiktok}
            label="TikTok"
          ></LinkInBioItem>
          <LinkInBioItem
            href="https://venmo.com/u/Jorge-Viramontes"
            icon={IoLogoVenmo}
            label="Buy me a coffee ☕️ 💙"
          ></LinkInBioItem>
        </ul>
      </section>
    </Layout>
  )
}

export default MusicPage
