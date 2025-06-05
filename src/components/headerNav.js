import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./headerNav.module.css"

import { IconContext } from "react-icons"

import { FiBook, FiUser, FiMail, FiMusic } from "react-icons/fi"

const activeStyles = {
  textDecoration: `underline`,
  color: "#1A1A1A",
  textAlign: "center",
}

const HeaderNav = () => (
  <div className={styles.headerNav}>
    <Link
      to="/blog"
      className={styles.linkContainer}
      activeStyle={activeStyles}
    >
      <IconContext.Provider value={{ color: "#083f45", size: "1.5rem" }}>
        <span>
          <FiBook></FiBook>
        </span>
      </IconContext.Provider>
      Blog
    </Link>

    <Link
      to="/music"
      className={styles.linkContainer}
      activeStyle={activeStyles}
    >
      <IconContext.Provider value={{ color: "#083f45", size: "1.5rem" }}>
        <span>
          <FiMusic></FiMusic>
        </span>
      </IconContext.Provider>
      Music
    </Link>

    <Link
      to="/about"
      className={styles.linkContainer}
      activeStyle={activeStyles}
    >
      <IconContext.Provider value={{ color: "#083f45", size: "1.5rem" }}>
        <span>
          <FiUser></FiUser>
        </span>
      </IconContext.Provider>
      About
    </Link>

    <Link
      to="/contact-me"
      className={styles.linkContainer}
      activeStyle={activeStyles}
    >
      <IconContext.Provider value={{ color: "#083f45", size: "1.5rem" }}>
        <span>
          <FiMail></FiMail>
        </span>
      </IconContext.Provider>
      Contact
    </Link>
  </div>
)

export default HeaderNav
