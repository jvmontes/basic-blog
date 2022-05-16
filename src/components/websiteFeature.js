import * as React from "react"

import * as styles from "./websiteFeature.module.css";

const WebsiteFeature = ({name, slug, description}) => (
	<div className={styles.container}>
		<h2 style={{ textAlign: `center` }}>{name}</h2>
		<p style={{ fontSize: `small` }}>{description}</p>
	</div>
)

export default WebsiteFeature