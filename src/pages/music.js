import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
import "../styles/music.css"
import { FaInstagram } from "react-icons/fa"
import { IconContext } from "react-icons"
import LinkInBioItem from "../components/common/LinkInBioItem"

const MusicPage = () => {
  return (
    <Layout>
      <SEO title="Music" />
      <section className="linkinbio-container">
        <h2 className="linkinbio-header">Connect with Jorge Viramontes</h2>
        <p className="linkinbio-subtext">Music · Tech · Creativity</p>
        <ul className="linkinbio-links">
          <LinkInBioItem
            href="https://www.instagram.com/j.albertomusic"
            icon={FaInstagram}
            label="Instagram"
          ></LinkInBioItem>
          <li>
            <a
              href="https://www.tiktok.com/@thejorgealberto"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/jayalbertomusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud
            </a>
          </li>
          <li>
            <a
              href="https://venmo.com/u/jorgemontes"
              target="_blank"
              rel="noopener noreferrer"
              className="linkinbio-cta"
            >
              💛 Support via Venmo
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default MusicPage
