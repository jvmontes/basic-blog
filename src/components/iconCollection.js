import * as React from "react"
import * as styles from "./iconCollection.module.css"
import { SiJavascript, SiHtml5, SiCsswizardry, SiReact, SiGatsby, SiNetlify, SiGithub, SiGoogle } from 'react-icons/si'

import { IconContext } from "react-icons"

const IconCollection = () => (
    <div className={styles.container}>

        <a className={styles.linkContainer}>
            HTML5
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiHtml5></SiHtml5></span>
            </IconContext.Provider>
        </a>

        <a className={styles.linkContainer}>
            CSS
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiCsswizardry></SiCsswizardry></span>
            </IconContext.Provider>
        </a>

        <a className={styles.linkContainer}>
            JavaScript
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiJavascript></SiJavascript></span>
            </IconContext.Provider>
        </a>

        <a className={styles.linkContainer}>
            React
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiReact></SiReact></span>
            </IconContext.Provider>
        </a>

        <a className={styles.linkContainer}>
            Gatsby
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiGatsby></SiGatsby></span>
            </IconContext.Provider>
        </a>

        <a className={styles.linkContainer}>
            Netlify
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiNetlify></SiNetlify></span>
            </IconContext.Provider>
        </a>

        <a className={styles.linkContainer}>
            Github
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiGithub></SiGithub></span>
            </IconContext.Provider>
        </a>

        <a className={styles.linkContainer}>
            Google Domains
            <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
                <span><SiGoogle></SiGoogle></span>
            </IconContext.Provider>
        </a>
    </div>
)

export default IconCollection