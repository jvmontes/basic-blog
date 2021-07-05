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

        <p>You might be wondering, why did Jorge make this page?</p>

        <p>I wanted to create a space where I could design the content you’re consuming right now. </p>

        <p>I wanted to create space to share my story, what I’ve done, and what I hope to accomplish. </p>

        <h3>It can be easy to let life happen without any intention.</h3>

        <p>
          Life can get busy, and before we know it, we end up running on the same wheel until one day we disappear.
        </p>

        <p>
          I wanted to utilize this space to take a more intentional look at my life to architect it the way I want.
        </p>

        <p>We are at an incredible inflection point in society where technology will play a major role for the next decades to come.</p>

        <p>With the power of technology, we can either take ownership of the changes ahead of us or fall victim to them.</p>

        <h3>
          I built this site because I wanted to take ownership and accountability over my life and my career.
        </h3>

        <p>
          On August 2nd, 2020, I was placed on furlough from my employer of seven years. It was in that moment that I experienced the feeling of having my entire livelihood pulled from underneath me.
        </p>

        <p>
          I was a young professional at a consulting firm, earning a six-figure salary, thinking I was on top of the world and how incredibly lucky I was to work where I did.
        </p>

        <p>
          I realized how quickly this fact could change, and I realized just how much certain things are out of my control.
        </p>

        <p>
          Although many things were outside of my control, I actually realized how I could start to shift things in my life such that I had more of a say on how things happened.
        </p>

        <p>
          I had the power to design my lifestyle, my career, my work, my digital persona, my personal portfolio, my mission, and my purpose.
        </p>

        <p>
          I have the power to set an intention for my life and live intentionally, everyday.
        </p>

        <h3>
          I built this site because I wanted to express myself via written work, software development, and music.
        </h3>

        <p>
          I love music, I love writing, and I love building things that help others or make others feel good.
        </p>

        <p>
          On this site, I will embark on a life-long journey of building systems that make our lives better, building community to better understand one-another, and share all the cool things I’ve found about life.
        </p>

        <p>
          I've had a variety of interests from technology, finances, and investing to music, art, and writing.
        </p>

        <p>
          I’ve found it difficult to create a place where I can share on all these topics I find intriguing, and I hope to grow this site as something that can serve those interests.
        </p>

        <p>
          Although several platforms exist such as TikTok, Instagram, YouTube, and Twitter, I think it’s important to reflect on crafting and owning our own narrative.
        </p>

        <p>
          We are all unique human beings, we all have our own unique story, and by sharing our story, we are able to better understand each other, hopefully leading to a world filled with more love and understanding.
        </p>

        <p>
          As technology and social media become more ubiquitous, I hope we embrace the opportunity to reflect on the possibilities available to us and use this power with a noble intention.
        </p>

        <p>
          That's my intention with this site: to embrace technology with a noble intention and share an authentic story, build connection, and open myself up to new possibilities and connections with others around the world.
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

      <p>
        My goal is to earn passive income via multiple revenue streams and build the house of my dreams.
      </p>

      <p>
        I hope to accomplish this goal by sharing what comes authentically from my source and having it resonate with others.
      </p>

      <p>
        We all have the power to own our own narratives. 
      </p>

      <p>
        Every story we’ve told ourselves about our capabilities or shortfalls is self-imposed, and we are the only ones who can shape our own perspective of ourselves. 
      </p>
      <p>
        Through forgiveness, we can build the future we want to see.
      </p>

      <h3>
        <em>What future will you build?</em>
      </h3>
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h3>This is a website I’ve built completely from the ground up.</h3>
 
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
      <h1>Thanks for visiting!</h1>
    </div>

    <EmailSignup></EmailSignup>

    <SocialLinks></SocialLinks>

  </Layout>
)

export default IndexPage
