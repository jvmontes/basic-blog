import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { bannerContainer, title, subtitle, contentContainer, image } from "./bannerComponent.module.css"

const BannerComponent = (titleText, subtitleText, blurbText, imageUrl, imageAlt, imageWidth) => {
    return (
        <div className={bannerContainer}>
            <div className={contentContainer}>
                {/* Wrap in if text is present from parameters */}
                <div className={title}>
                    {titleText}
                </div>

                {/* Wrap in if text is present from parameters */}
                <div className={subtitle}>
                    {subtitleText}
                </div>

                {/* Wrap in if text is present from parameters */}
                <div>
                    {blurbText}
                </div>
            </div>

            {/* Wrap in if text is present from parameters */}
            <div className={image}>
                <StaticImage
                    src={imageUrl} alt={imageAlt}
                    placeholder='blurred'
                    layout='fixed'
                    width={imageWidth}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    >
                </StaticImage>
            </div>
        </div>
    )
}
