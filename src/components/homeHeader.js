
import React from 'react'
import * as styles from "./homeHeader.module.css"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../components/socialLinks"

const homeHeader = () => {
    return (
        <div className={styles.homeBanner}>
            <div className={styles.bannerDetails}>
                <div className={styles.title}>
                    Jorge Viramontes
                </div>

                <p className={styles.tagline}>
                    Entrepreneur, Engineer, and Empath
                </p>

                <div className={styles.description}>
                    <p>
                        Jorge brings over seven years of Fortune 500 consulting experience to the digital entrepreneurship realm from Chicago, IL.
                    </p>

                    <p>
                        He's the owner of Alacrán Digital Services, a digital media company focused on growing small businesses via personal relationships and coaching.
                    </p>

                    <p>
                        When he's not coding or creating content, he loves to travel, meeting new people, and listens to all kinds of music.
                    </p>
                </div>

                <SocialLinks></SocialLinks>
            </div>

            <div>
                <StaticImage
                    src="../images/hiking.jpg" alt="Headshot of Jorge"
                    placeholder="blurred"
                    layout="fixed"
                    width={340}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    style={{
                        margin: `auto auto 1.45rem`,
                        border: `2px solid black`
                    }}
                />
            </div>
        </div>
    )
}

export default homeHeader
