import ContactsImage from '../Layout/components/ContactsImage';
import ContactsInfo from '../Layout/components/ContactsInfo';
import Header from '../Layout/components/Header';
import Footer from '../Layout/components/Footer';

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