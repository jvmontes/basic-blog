import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IconCollection from "../components/iconCollection"
import HomeHeader from "../components/homeHeader"
import EmailSignup from "../components/emailSignup"
import SocialLinks from "../components/socialLinks"
import "../styles/global.css"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <HomeHeader></HomeHeader>

    <div className="welcomeContainer">
      <div className="copyContent">
        <h1>Welcome!</h1>

        <p>Thank you for visiting this page on the internet. You could have been anywhere else on the internet, but I'm glad you are here.</p>

        <h3><em>Jorge, why are you doing this?</em></h3>

        <p>You might be wondering, why did Jorge make this page? I wish I could say the reason is simple, but it’s actually very complex. I’ll do my best to simplify as much as possible. </p>

        <p>I wanted to create a space where I could design the content you’re consuming right now. I wanted to create space to share my story, what I’ve done, and what I’m hoping to accomplish. </p>

        <h3>It can be easy to just let go and let life happen without any intention.</h3>

        <p>
          Life gets busy, and before we know it, we run on the same wheel until one day we disappear from the Earth.
        </p>

        <p>
          I wanted to utilize this space to take a more intentional look at my life to architect it the way I want.
        </p>

        <h3>
          I wanted to take ownership, creativity, and accountability into action.
        </h3>

        <p>
          On this site, I will embark on a life-long journey of building systems that make our lives better, building community to better understand one-another, and share all the cool things I’ve found about life.
        </p>

        <p>
          I have a variety of interests from technology, finances, and investing to music, art, and writing. I’ve found it difficult to create a place where I can share on all these topics I find intriguing, and am hoping to grow this site as something that can serve those needs.
        </p>

        <p>
          There are several existing platforms, yes, such as TikTok, Instagram, YouTube, and Twitter just to name a few. I think it’s important to realize that although we can gain a following on these sites, it’s important to reflect on ownership of our own narrative.
        </p>
      </div>
    </div>

    <div className="copyContent">

      <h1>
        By building my own website,
      </h1>

      <h3>
        I am defining my narrative.
      </h3>

      <p>
        By building my own website,
      </p>

      <h3>
        I am building skills in website development.
      </h3>

      <p>
        By building my own website,
      </p>

      <h3>
        I am creating the story of my life and my legacy.
      </h3>

    </div>

    <div className="copyContent">
      <p>
        Currently, I do not have any children. My goal is to earn passive income via multiple revenue streams and build the house of my dreams. I hope to accomplish this goal by sharing what comes authentically from my source and having it resonate with others.
      </p>
      <p>
        I’ll finish this post with the thought that we all have the power to own our own narratives. Every story we’ve told ourselves about our capabilities or shortfalls is self-imposed, and we are the only ones who can shape our own perspective of ourselves. Through forgiveness, we can build the future we want to see.
      </p>
      <h3>
        What future will you build?
      </h3>
    </div>

    <div className="bioContainer">
      <div className="copyContent">
        <h3>
          I'm a software engineer, musician, and writer.
        </h3>
        <p>
          I like to solve problems, write music, share stories, and build systems that work.
          I think we all have a unique story to be told, and it is my passion to share those stories with the world and leave our legacy.
          I believe in authentic personal connections to unravel the incredible possibilities within each of us.
          I believe in embracing the future of technology for the <em>betterment and advancement of all humans.</em>
        </p>
        <p>
          I was born and raised in Chicago, IL, USA.
          Contact me to talk about building your own website, see my work, read my blog, or check out some music I've written!
        </p>

        <h4>This is a website I’ve built completely from the ground up.</h4>

        <p>Here are just some of the different technologies I used to build this site:</p>

        <IconCollection></IconCollection>

        <p>Here are some of the benefits from building a website this way:</p>
        <ul>
          <li>No heavy bogged down WordPress integrations or generic pre-built themes.</li>
          <li>Customize as much as I want.</li>
          <li>Quickly deploy updates to the cloud as soon as I merge to the main branch.</li>
          <li>It's all open source, and you can check it out here on <a rel="noreferrer" target="_blank" href="https://github.com/jvmontes/basic-blog">Github</a>.</li>
        </ul>

      </div>
    </div>

    <div className="copyContent">
      <h2>Thanks for visiting!</h2>
    </div>

    <EmailSignup></EmailSignup>

    <SocialLinks></SocialLinks>

  </Layout>
)

export default IndexPage
