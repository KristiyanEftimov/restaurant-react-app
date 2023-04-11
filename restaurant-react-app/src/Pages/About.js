import Header from '../Layout/components/Header';
import Footer from '../Layout/components/Footer';
import AboutImage from '../Layout/components/AboutImage';
import AboutInfo from '../Layout/components/AboutInfo';

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