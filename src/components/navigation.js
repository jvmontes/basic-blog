import React, { Component } from 'react'
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import * as styles from "./navigation.module.scss"

const MenuItems = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/about",
        title: "About",
    },
    {
        path: "/blog",
        title: "Blog",
    },
    {
        path: "/contact",
        title: "Contact",
    },
]

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { showMenu: false }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState(state => ({
            showMenu: !state.showMenu,
        }))
    }

    render() {
        const listMenuItems = MenuItems.map((menuItem, index) => (
            <ListLink key={index} tp={menuItem.path}>
                {menuItem.title}
            </ListLink>
        ))
        return (
            <nav className={styles.siteNavigation} sx={navStyle.menu}>
                <button
                    onClick={this.handleToggleClick}
                    className={styles.menuTrigger + (this.state.showMenu ? " is-active" : "")}
                >
                    <div className={styles.iconMenuLine}>
                        <RiMenu3Line />
                    </div>
                    <div className={styles.iconMenuClose}>
                        <RiCloseLine />
                    </div>
                </button>
                <ul>
                    {listMenuItems}
                    <div sx={navStyle.border}></div>
                    {/* <div sx={navStyle.theme}>
                        <Theme />
                    </div> */}
                </ul>
            </nav>
        )
    }
}

const navStyle = {
    menu: {
        ul: {
            bg: "siteColor",
        },
    },
    theme: {
        display: ["block", "block", "block", "none"],
        p: " 25px 20px 20px",
    },
    border: {
        bg: "borderColor",
        borderTop: "1px solid transparent",
        display: ["block", "block", "block", "none"],
    },
}
