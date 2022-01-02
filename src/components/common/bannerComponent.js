import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { bannerContainer, title, subtitle, contentContainer, image } from "./bannerComponent.module.css"

const BannerComponent = ({ titleText, subtitleText, firstBlurbText, secondBlurbText, gatsbyImageData, imageAlt }) => {
    return (
        <div className={bannerContainer}>
            <div className={contentContainer}>
                {/* Wrap in if text is present from parameters */}
                <div className={title}>
                    {titleText}
                </div>

                {/* Wrap in if text is present from parameters */}
                <h4 className={subtitle}>
                    {subtitleText}
                </h4>

                {/* Wrap in if text is present from parameters */}
                <p>
                    {firstBlurbText}
                </p>

                <p>
                    {secondBlurbText}
                </p>
            </div>

            {gatsbyImageData !== null &&
                <div className={image}>
                    <GatsbyImage
                        image={gatsbyImageData} alt={imageAlt}
                    >
                    </GatsbyImage>
                </div>
            }
        </div>
    )
}

export default BannerComponent

BannerComponent.propTypes = {
    titleText: PropTypes.string,
    subtitleText: PropTypes.string,
    firstBlurbText: PropTypes.string,
    secondBlurbText: PropTypes.string,
    gatsbyImageData: PropTypes.object,
    imageAlt: PropTypes.string,
}

BannerComponent.defaultProps = {
    titleText: 'Title Text',
    subtitleText: 'This is the subtitle', 
    firstBlurbText: 'This is a short blurb. This will give additional details about the component. Check it out!',
    secondBlurbText: 'This is a second line in the short blurb. It also should not be too long.'
}
