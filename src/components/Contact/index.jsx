import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <h1>Contact</h1>
            </div>
            <div className="container">
                <div className="col-6">
                    <h2>Got an idea?</h2>
                    <p>Let's work together! I'd love to hear from you. You can get in touch with me using any of the social platforms or email address listed here!</p>
                </div>
                <div className="col-6">
                    <ul className="socials">
                        <li>
                            <Link 
                            to="https://www.linkedin.com/in/jaimie-hemmings-379786271/"
                            target="_blank" rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="https://github.com/JaimieHemmings"
                            target="_blank" rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="mailto:warbz@live.co.uk"
                            >
                                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact