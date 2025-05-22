import React from "react"
import { IconContext } from "react-icons"
import PropTypes from "prop-types"
import "../../styles/music.css"

const LinkInBioItem = ({ href, icon: Icon, label, color = "#083f45" }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="linkinbio-link"
      >
        <IconContext.Provider value={{ color, size: "1.5rem" }}>
          <span className="icon">
            <Icon />
          </span>
        </IconContext.Provider>
        <span className="label">{label}</span>
      </a>
    </li>
  )
}

LinkInBioItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default LinkInBioItem
