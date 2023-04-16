import Header from '../Layout/components/Header';
import Footer from '../Layout/components/Footer';
import MenuImage from '../Layout/components/MenuImage';
import MenuInfo from '../Layout/components/MenuInfo';


function Menu() {
    return (
        <div>
            <Header/>
            <MenuImage/>
            <MenuInfo/>
            <Footer/>
        </div>
    );
}

export default Menu;