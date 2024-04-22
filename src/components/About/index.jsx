import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPython,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import ProfileIMG from '../../assets/profileimg.jpg'
import './index.css'

const About = () => {

    const responsive = {
        all: {
          breakpoint: { max: 4000, min: 769 },
          items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2
        }
    }

    return (
        <>
        <section className="about-me">
            <div className="container">
                <h1>About Me</h1>
            </div>
            <div className="container flex">
                <div className="col-6">
                    <img src={ProfileIMG} />
                </div>
                <div className="col-6">
                    <span className="subheading">
                        About Me
                    </span>
                    <h2>A Web Developer Based in Cornwall</h2>
                    <p>I'm an ambitious web developer looking for a role in an established IT company with the opportunity to work the latest technologies and further my goal of becoming a full stack developer while working an challenging and diverse projects.</p>
                    <p>I am a naturally curious and confident individual, continuously working on improving my abilities one problem at a time.</p>
                    <p>I am a family oriented person, with a beautiful daughter, an aquarium hobbyist and guitar killer that is tech obsessed.</p>
                </div>
            </div>
        </section>

        <section className="tech">
            <div className="container">
                <ul>
                    <li><FontAwesomeIcon icon={faPython} color="#4b8bbe" /></li>
                    <li><FontAwesomeIcon icon={faHtml5} color="#F06529" /></li>
                    <li><FontAwesomeIcon icon={faCss3} color="#28A4D9" /></li>
                    <li><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></li>
                    <li><FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /></li>
                    <li><FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /></li>
                </ul>
            </div>
        </section>

        <section className="testimonials">
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={500}
                itemClass="carousel-item-testimonials"
                removeArrowOnDeviceType={["all", "mobile"]}
            >
                <div>
                    <h3>Nova Beauty</h3>
                    <span className="title">Client</span>
                    <p>Amazing communication, organisation and a wonderful end product</p>
                </div>
                <div>
                    <h3>IT Pie</h3>
                    <span className="title">Employer</span>
                    <p>A great asset to the team who always delivered amazing results!</p>
                </div>
                <div>
                    <h3>Uprise VSI</h3>
                    <span className="title">Client</span>
                    <p>Jaimie always added value and insight onto everything he collaborated on</p>
                </div>
            </Carousel>
        </section>
        </>
    )
}

export default About