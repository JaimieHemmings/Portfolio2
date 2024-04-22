import './index.css'
import NovaPage from '../../assets/nova-landing.png'
import NovaMobile from '../../assets/nova-mobile.png'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h1>Portfolio</h1>
            </div>

            <div className="container">
                <div className="col-12">
                    <h2>Nova Beauty</h2>
                    <img src={NovaPage} alt="Nova Beauty Landing Page" />
                    <p className="quote">
                        "I let Jaimie take complete creative control of the entire site and couldn't be happier with the outcome!"
                    </p>
                </div>
                <div className="col-6">
                    <img className="mobile-preview" src={NovaMobile} alt="Nova Beauty Mobile Site" />
                </div>
                <div className="col-6">
                    <p>Nova Beauty is a small Cornwall based company providing holistic beauty and therapy treatments. Using a range of different approaches Nova Beauty never fails to provide relief from aches and pains, revitalise you and give your confidence a much needed boost!</p>
                    <p>Nova Beauty came to me looking for a new website which could help in providing urther outreach and online presence in ever growing digital world. The brand colours are bold contrasts of lights and darks which I used to create an engaging user interface and bring boldness and positivity to the overall design aesthetic.</p>
                    <p>Additionally the client wanted to bring focus to the range of services offered at the salon.</p>
                    <p><a href="https://www.novabeauty.uk/" target="_blank" className="btn btn-primary">Visit Site</a></p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio