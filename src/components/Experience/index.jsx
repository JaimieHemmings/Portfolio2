import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLocationPin,
    faBriefcase
  } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <section className="experience">
            <div className="container">
                <h1>Experience</h1>
            </div>
            <div className="container">
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2022</span>
                        <h2>Field Services Engineer</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Peripatetic</span>
                        <p>A peripatetic role where I worked as part of a large team to handle the deployment expansion, troubleshooting and maintenance of fiber optic broadband. </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2018</span>
                        <h2>IT Admin</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Cornwall</span>
                        <p>Responsible for managing and maintaining the company’s computer systems and networks, ensuring optimal performance, security and support for all users.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2017</span>
                        <h2>Developer</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Cardiff</span>
                        <p>Using HTML, CSS and JavaScript I developed front end elements of countless websites under the specifications laid out by the Design team. </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2015</span>
                        <h2>Front End Developer</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Cardiff</span>
                        <p>Here I was responsible for designing and developing user facing elements for several client websites using HTML, CSS and Javascript. </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2014</span>
                        <h2>Software tester</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Caerphilly</span>
                        <p>I played an important part in handling the quality assurance and bug finding in a complex international GPS based tracking software</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2013</span>
                        <h2>Technical Support</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Peripatetic</span>
                        <p>Providing remote and on-site support, I was the first point of contact for customers seeking technical assistance. Using my experience and knowledge I assisted in resolving the issue remotely or escalating the issue where necassary.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience