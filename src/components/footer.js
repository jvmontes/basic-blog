import * as React from "react"
import * as styles from "./footer.module.css"

const Footer = () => (

    <footer className={styles.footer}>
            <span> Built with <span className={styles.purpleText}>love</span> by <a className={styles.footerLink + ` ` + styles.purpleText} href="https://www.alacranstudio.com/"
                    target="_blank" rel="noreferrer">Alacrán Studio</a> © {new Date().getFullYear()}.
            </span>
    </footer>
)

export default Footer
