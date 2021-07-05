import * as React from "react"
import * as styles from "./iconCollection.module.css"
import { SiJavascript, SiHtml5, SiCsswizardry, SiReact, SiGatsby, SiNetlify, SiGithub, SiGoogle } from 'react-icons/si'

import { IconContext } from "react-icons"

const IconCollection = () => (
    <div className={styles.container}>
        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiHtml5></SiHtml5></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiCsswizardry></SiCsswizardry></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiJavascript></SiJavascript></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiReact></SiReact></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiGatsby></SiGatsby></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiNetlify></SiNetlify></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiGithub></SiGithub></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#1A1A1A", size: "4rem" }}>
            <span><SiGoogle></SiGoogle></span>
        </IconContext.Provider>
    </div>
)

export default IconCollection