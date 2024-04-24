import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLocationPin,
    faBriefcase
  } from '@fortawesome/free-solid-svg-icons'
import Layout from '../Layout'

const Experience = () => {
    return (
        <>
        <Layout />
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
                        <span className="date">2021</span>
                        <h2>Frontend Developer</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Cardiff</span>
                        <p>Working in an agile environment I was responsible for building the 
                        client-side portions of websites with a custom C# CMS using various 
                        technologies including HTML, CSS and JavaScript, along with numerous 
                        frameworks such as SASS, React and bootstrap. All websites were 
                        developed with a mobile first mindset and I worked alongside a team 
                        of UI/UX designers and QA to ensure the website was built in 
                        compliance with the design brief.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2019</span>
                        <h2>IT Admin</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Cornwall</span>
                        <p>Here, as part of a small team I contributed to the installation, 
                        configuration and maintenance of all aspects of hardware and 
                        software including network installation and expansion, ensuring the 
                        internal IT systems remained robust and efficient using a variety of 
                        methods such as end user training, troubleshooting and network 
                        management.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2015</span>
                        <h2>Technical Support Specialist</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Caerphilly</span>
                        <p></p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} color="#fff" />
                        </div>
                        <span className="date">2014</span>
                        <h2>1st Line Technical Support</h2>
                        <span className="location"><FontAwesomeIcon icon={faLocationPin} color="#d5c455" /> Cardiff</span>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience