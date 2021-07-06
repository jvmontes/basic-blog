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

        <p>With the power of technology, we can either take ownership of the changes ahead of us or fall victim to them.</p>

        <h3>
          I built this site because I wanted to take ownership and accountability over my life and my career.
        </h3>

        <p>
          On August 2nd, 2020, I was placed on furlough from my employer of seven years. It was in that moment that I experienced the feeling of having my entire livelihood pulled from underneath me.
          I was a young professional at a consulting firm, earning a six-figure salary, thinking I was on top of the world and how incredibly lucky I was to work where I did.
        </p>

        <p>
          I realized how quickly this fact could change, and I realized just how much certain things are out of my control. 
          I was able to come back to my employer after a couple of months of being in limbo, but I realized that my passions didn't lie in the work I was doing. 
          This granted me a blessing in disguise to reassess how I'm spending my time and what future I'm working towards, and if I'm truly feeling fulfillment from it. 
        </p>

        <p>
          I have the power to design my lifestyle, my career, my work, my digital persona, my personal portfolio, my mission, and my purpose.
          I have the power to set an intention for my life and live intentionally, everyday.
        </p>

        <h3>
          I built this site because I wanted to express myself via written work, software development, and music.
        </h3>

        <p>
          I love music, I love writing, and I love building things that help others or make others feel good.
          On this site, I will embark on a life-long journey of building systems that make our lives better, building community to better understand one-another, and share all the cool things I’ve found about life.
        </p>

        <p>
          I've had a variety of interests from technology, finances, and investing to music, art, and writing.
          I’ve found it difficult to create a place where I can share on all these topics I find intriguing, and I hope to grow this site as something that can serve those interests.
        </p>

        <p>
          We are all unique human beings, we all have our own unique story, and by sharing our story, we are able to better understand each other, hopefully leading to a world filled with more love and understanding.
          As technology and social media become more ubiquitous, I hope we embrace the opportunity to reflect on the possibilities available to us and use this power with a noble intention.
        </p>

        <p>
          That's my intention with this site: to embrace technology with a noble intention and share an authentic story, build connection, and open myself up to new possibilities and connections with others around the world.
        </p>
      </div>
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1>I built this website from the ground up.</h1>
 
        <p>Here the different technologies I used to build this site:</p>

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
