import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from "./aboutHeader.module.css"

const AboutHeader = () => {
    return (
        <div>
            <div className={styles.aboutBanner}>
                <div className={styles.bannerDetails}>
                    <div className={styles.title}>
                        About Me
                    </div>

                    <p>
                        Hi! Thanks for being here.
                    </p>

                    <p>
                        My name is Jorge, and I want to build a better future for our world, together. I've worked for over seven years as a technical consultant, helping Fortune 500 businesses adopt Agile methodologies in their software development practices. I've worked on teams building iPhone apps, iPad apps, Angular web apps, and Java APIs. I've dabbled in the Internet of Things, and understand the basics of machine learning and AI.
                    </p>

                    <p>
                        After all those experiences, I've chosen that my renewed focus for 2022 is to build great front-end experiences for small businesses and build the tools they need to excel in a digital-first economy. I focus on website building, content management systems, customer relationship management, website design, and search engine optimization.
                    </p>
                </div>

                <div className={styles.bannerImage}>
                    <StaticImage
                        src="../images/jorge-smiling-small.jpg" alt="Headshot of Jorge"
                        width={340}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        style={{
                            margin: `auto auto 1.45rem`
                        }}
                    />
                </div>
            </div>
            <div className={styles.aboutBanner}>
                <p>
                    My goal is to bring all of the years of experience and expertise I've accumulated through my technical career to bring a best-in-class service to all my clients. By hyper-focusing on creating a great process and workflow that consistenly exceeds client expectations, while also building close, personal relationships with those I work with, I hope to build a successful business I can carry with me through the upcoming years as we settle into a world post-pandemic.
                </p>

                <p>
                    Another goal of mine is to provide my engineering and leadership skills as a service to an organization to better advance us all as a human society. Ultimately, I want to ensure I am "building business for good."
                </p>

                <p>
                    As I grow through life and faithfully step into my 30's, I am also taking on a spiritual journey, as I look to deepen my relationship to the source energy, God, the universe, and live life mindfully and be present. Meditation, mindfulness, and gratitude are a huge part of who I am today.
                </p>

                <p>
                    If you're interested in discussing a website you're looking to update or build but just don't have the time or resources available, I'd love to learn more and see if we're a good fit. Send me a message, and let's talk!
                </p>

                <p>
                    Once again, thanks for being here. I hope you have a lovely day. 
                </p>
            </div>
        </div>
    )
}

export default AboutHeader
