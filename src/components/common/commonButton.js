import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./commonButton.module.css";
import { OutboundLink } from "gatsby-plugin-google-gtag"

const CommonButton = ({ buttonTitle, slug, isGatsbyLink }) => {

    return (
        <div>
            {isGatsbyLink
                ? <p><Link to={slug} className={styles.button}>{buttonTitle}</Link></p>
                : <OutboundLink target="_blank" rel="noreferrer" href={slug} className={styles.button}>{buttonTitle}</OutboundLink>
            }
        </div>
    )
}

export default CommonButton
