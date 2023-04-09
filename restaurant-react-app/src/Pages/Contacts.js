import ContactsImage from '../Layout/ContactsImage';
import ContactsInfo from '../Layout/ContactsInfo';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

function Contacts() {
    return(
        <div>
            <Header/>
            <ContactsImage/>
            <ContactsInfo/>
            <Footer/>
        </div>
    );
}

export default Contacts;