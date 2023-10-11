import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import {GoDotFill} from 'react-icons/go'
import Header from '../Header'
import './index.css'

const PatcoProduction = () => (
  <div className="main-container">
    <div className="about-section">
      <Header />
      <div className="about-content">
        <h1 className="about-heading">PATCO PRODUCTIONS</h1>
        <p className="about-para">(Landing Video)</p>
        <div className="aboutcart-and-our-story-control">
          <div className="about-cart">
            <h1 className="about-cart-para">ABOUT US</h1>
            <div className="icon-cont">
              <hr className="horizontal-line" />
              <GoDotFill className="about-dot" />
            </div>
            <p className="delivering-quote">
              “DELIVERING STUNNING <br /> VISUAL NARRATIVES”
            </p>
            <p className="from-concept-para">
              <i>
                From concept to final edit, we tailor our production process to{' '}
                <br />
                suit you unique needs, ensuring the highest quality results.
              </i>{' '}
            </p>
          </div>
          <div className="our-story-cart">
            <p className="our-story-para">
              <span className="about-span">PATCO PRODUCTIONS</span>{' '}
              <i>
                has earned its reputation in
                <br /> the market for its services. We aim to grow as the most
                <br /> prominent firm for our Customers, Business Associates &
                <br />
                Stakeholders and we take pride that the intense vision of our
                <br />
                experienced personnel encourages us to create a niche in the
                industry by <br />
                serving clients across the globe.
              </i>
            </p>
            <h1 className="our-story-head">OUR STORY</h1>
            <div className="icon-cont">
              <GoDotFill className="story-dot" />
              <hr className="horizontal-line-story" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="last-about-para-name">about</h1>
    </div>
    <div className="process-section">
      <h1 className="process-heading">OUR CREATIVE VIDEO PRODUCTION PROCESS</h1>
      <div className="icon-cont">
        <GoDotFill className="circle-process-dot" />
        <hr className="process-hr-line" />
      </div>
      <div className="process-container-controller">
        <div>
          <div className="circle">.</div>
          <div className="container-on-circle">
            <h1 className="head-on-circle">SCRIPTING AND STORY BOARDING: </h1>
            <p className="para-on-circle">
              Pre-production and Shoot: Crafting compelling scripts and detailed
              storyboards that breathe life into your vision. With our
              Transforming ideas into captivating stories through expert
              scripting and meticulous storyboarding. Every word and frame is
              carefully crafted to captivate and engage your audience. Trust us
              to bring your vision to life with precision and creativity.
              Elevate your project with our comprehensive scripting and
              storyboarding services.
            </p>
          </div>
        </div>
        <div>
          <div className="circle">.</div>
          <div className="container-on-circle">
            <h1 className="head-on-circle">PRE-PRODUCTION AND SHOOT: </h1>
            <p className="para-on-circle">
              We focus on key elements to ensure a seamless shoot or video
              production. Our experienced team conducts thorough location
              scouting to find captivating settings that align with your
              creative vision. With a team of skilled professionals and state of
              the art equipment, we ensure a seamless and high-quality
              production experience. During production, we meticulously execute
              the plans and creative concepts developed during pre production.
            </p>
          </div>
        </div>
        <div>
          <div className="circle">.</div>
          <div className="container-on-circle">
            <h1 className="head-on-circle">POST PRODUCTION: </h1>
            <p className="para-on-circle">
              Pre-production and Shoot: Crafting compelling scripts and detailed
              storyboards that breathe life into your vision. With our
              Transforming ideas into captivating stories through expert
              scripting and meticulous storyboarding. Every word and frame is
              carefully crafted to captivate and engage your audience. Trust us
              to bring your vision to life with precision and creativity.
              Elevate your project with our comprehensive scripting and
              storyboarding services.
            </p>
          </div>
        </div>
      </div>
      <h1 className="process-last-para">process</h1>
    </div>
    <div className="testimonial-section">
      <div>
        <div className="blank-blue-card">.</div>
        <div className="white-card">
          <img
            src="https://patcoproductions.com/static/media/Outdoors-man-portrait_(cropped).adbfb49b65d384b6d1c0.jpg"
            alt="ig"
            className="white-card-img"
          />
          <p className="white-card-para">
            <i>
              Video lectures form the crux of IIDE’s student & corporate
              training curriculums. So creating content matching global
              education standards is paramount. TRC promptly adapted to brand
              guidelines & delivered quality animation that brought our experts
              explanation to life.
            </i>{' '}
          </p>
          <h1 className="founder-name">Bhumit Gor</h1>
          <span className="founder-designation">
            Co-Founder & Guitarist, Last Minute Band
          </span>
        </div>
      </div>
      <div>
        <h1 className="test-head">testimonials</h1>
        <div className="icon-cont">
          <GoDotFill className="circle-dot" />
          <hr className="hr-line-testimonial" />
        </div>
        <p className="test-para">
          <i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; What they <br />{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;say about <br /> our passion?
          </i>{' '}
        </p>
        <div className="icon-cont">
          <div className="icons-cont-left">
            <BsArrowLeft />
          </div>
          <div className="icons-cont-right">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PatcoProduction
