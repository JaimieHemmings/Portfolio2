import { Link } from 'react-router-dom'
import ProfileImg from '../../assets/selfie.jpg'
import './index.css'

const Home = () => {
    return (
        <section className="hero-wrap">
            <div className="container">
                <span className="subheading">Web Developer</span>
                <h1>I'm Jaimie <br />Hemmings</h1>
                <p>
                    <Link to="/about" className="btn btn-primary">More about me &#62;</Link>
                    <Link to="/contact" className="btn btn-white">Hire me &#62;</Link>
                </p>
            </div>
            <div className="overlay" style={{ 
                backgroundImage: `url(${ProfileImg})` 
            }}>

            </div>
        </section>
    )
}

export default Home