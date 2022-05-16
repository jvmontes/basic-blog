import * as React from "react"

import * as styles from "./websiteFeature.module.css";
import { GatsbyImage } from 'gatsby-plugin-image'
import CommonButton from "./common/commonButton";

const WebsiteFeature = ({ name, slug, gatsbyImageData, mobileGatsbyImageData, imageAlt, description }) => (
	<div className={styles.container}>
		<h2>{name}</h2>
		{gatsbyImageData !== null &&
			<div className={styles.imageContainer}>
				<GatsbyImage image={gatsbyImageData} alt={imageAlt}>
				</GatsbyImage>
			</div>
		}
		{mobileGatsbyImageData !== null &&
			<div className={styles.mobileImageContainer}>
				<GatsbyImage image={mobileGatsbyImageData} alt={imageAlt}>
				</GatsbyImage>
			</div>
		}
		<p style={{ fontSize: `small` }}>{description}</p>
		<CommonButton buttonTitle="VISIT SITE" slug={slug} isGatsbyLink={false}></CommonButton>
	</div>
)

export default WebsiteFeature