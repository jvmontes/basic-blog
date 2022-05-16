import * as React from "react"

import "../styles/global.css"
import "../styles/index.css"

import IconCollection from "../components/iconCollection"
import HomeHeader from "../components/homeHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WebsiteFeature from "../components/websiteFeature"

import CommonButton from "../components/common/commonButton"

const soundCloudTextStyle = {
  fontSize: `14px`,
  lineBreak: `anywhere`,
  wordBreak: `normal`,
  overflow: "hidden",
  whiteSpace: `nowrap`,
  textOverflow: `ellipsis`,
  fontFamily: `Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif`,
  fontWeight: `100`,
  color: "#000", 
  textDecoration: "none"
}

const soundCloudComponentStyle = {
  marginBottom: `2rem`
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <HomeHeader></HomeHeader>

    <div className="bioContainer">
      <div className="copyContent">

        <h1 style={{ textAlign: `center` }}>Websites</h1>

        <p>In 2021, I resigned from my career in corporate consulting and wanted to help local business owners build their own website. This allowed me to gain some additional experience building front-end experiences while also providing a valuable service to others.
          Gatsby is an intuitive tool that leverages the JAMstack to quickly build safe, scalable websites in a modern way using React and GraphQL. Check out some of the websites I've built for some pretty cool organizations.
        </p>

        <div className="websitesWrapper">
          <WebsiteFeature name="Device Fix Inc." slug="https://www.devicefixinc.com" description="Device Fix Inc. is located on 18th street in the Pilsen neighborhood of Chicago. They had a Facebook and Instagram page, but did not yet have a website landing page." ></WebsiteFeature>
          <WebsiteFeature name="Restorying Co-op" slug="https://www.restoryingcoop.com" description="Restorying Co-op was an organization that embraced the change from the pandemic. They had a placeholder site on SquareSpace and needed someone to build it out to accurately portray their organization and the work they do." ></WebsiteFeature>
        </div>

      </div>  
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1 style={{ textAlign: `center` }}>Music</h1>

        <p>I've been playing music since 2005, when I learned how to play the guitar at lessons offered through the church choir.
          After that, some friends and I formed a band by the name of Makeshift and played several shows at different venues throughout Chicago.
        </p>
        <p>After that, I played in the church choir for over ten years, and have recently been creating music under my own name and sound.
          This has been an incredibly introspective journey into the question of what's possible. When we have freedom to create, there's so much available.
          This is my exploration into what's possible in my own life. I hope you enjoy, feel free to listen to all my music here.
        </p>

        <div style={soundCloudComponentStyle}>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/732231520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style={soundCloudTextStyle}>
            <a href="https://soundcloud.com/jayalbertomusic" title="J. Alberto" target="_blank" style={{ color: "#000", textDecoration: "none" }}>J. Alberto</a> ·
            <a href="https://soundcloud.com/jayalbertomusic/when-i-try-to-speak-2019-mix" title="When I Try To Speak (2019 Mix)" target="_blank" style={{ color: "#000", textDecoration: "none" }}>When I Try To Speak (2019 Mix)</a>
          </div>
        </div>

        <div style={soundCloudComponentStyle}>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367405325&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style={soundCloudTextStyle}>
            <a href="https://soundcloud.com/jayalbertomusic" title="J. Alberto" target="_blank" style={{ color: "#000", textDecoration: "none" }}>J. Alberto</a> ·
            <a href="https://soundcloud.com/jayalbertomusic/silver-lining" title="Silver Lining [Demo]" target="_blank" style={{ color: "#000", textDecoration: "none" }}>Silver Lining [Demo]</a>
          </div>
        </div>

        <div style={soundCloudComponentStyle}>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308215759&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style={soundCloudTextStyle}>
            <a href="https://soundcloud.com/jayalbertomusic" title="J. Alberto" target="_blank" style={{ color: "#000", textDecoration: "none" }}>J. Alberto</a> ·
            <a href="https://soundcloud.com/jayalbertomusic/ready-set" title="Ready, Set" target="_blank" style={{ color: "#000", textDecoration: "none" }}>Ready, Set</a>
          </div>
        </div>

      </div>

    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1 style={{ textAlign: `center` }}>I built this website from the ground up.</h1>

        <p>Here the different technologies I used to build this site:</p>
      </div>

      <IconCollection></IconCollection>

      <div className="copyContent">
        <p>Here are some of the benefits from building a website this way:</p>
        <ul>
          <li>Unlimited customization and freedom around design.</li>
          <li>Lightweight implementation using simple Javascript.</li>
          <li>Quickly deploy iterative updates.</li>
          <li>It's all open source, and you can check it out here on <a rel="noreferrer" target="_blank" href="https://github.com/jvmontes/basic-blog">Github</a>.</li>
        </ul>

      </div>
    </div>

    <div className="bioContainer">
      <div className="copyContent">

        <h1 style={{ textAlign: `center` }}>A Final Word</h1>

        <p>Hey, I just wanted to say, I really appreciate that you came and checked out my website. From one human to another, it means a lot.
          I believe that gratitude is what grounds us in our lives and if we're able to express and accept gratitude, it will immensly increase the quality of our lives.
        </p>

        <p>
          This project has taken me a long time to build, but I'm happy with where it stands. Utilizing the modern tools available to us, I was able to build a modern-looking website
          to authentically share my story, for a low cost and less effort than you'd think. I have the freedom to add whatever I see fit, and I'm able to really share myself authentically.
          I hope you enjoyed your stay, and I hope you find peace, love, and light for yourself in your life. And I really mean that.
        </p>

        <p>Peace ✌🏼</p>
      </div>

    </div>

  </Layout>
)

export default IndexPage
