import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import AboutImage from '../Layout/AboutImage';
import AboutInfo from '../Layout/AboutInfo';

function About() {
    return (
        <div className='about'>
            <Header/>
            <AboutImage/>
            <AboutInfo/>
            <Footer/>
        </div>
    );
}

export default About;