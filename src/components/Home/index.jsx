import './index.css'
import { Link } from 'react-router-dom'
import ProfileImg from '../../assets/selfie.jpg'

const Home = () => {
    return (
        <section className="hero-wrap">
            <div className="container">
                <span class="subheading">Web Developer</span>
                <h1>I'm Jaimie <br />Hemmings</h1>
                <p><Link to="/about" className="btn btn-primary">More about me &#62;</Link> <a href="/" className="btn btn-white">Hire me &#62;</a></p>
            </div>
            <div className="overlay" style={{ 
                backgroundImage: `url(${ProfileImg})` 
            }}>

            </div>
        </section>
    )
}

export default Home