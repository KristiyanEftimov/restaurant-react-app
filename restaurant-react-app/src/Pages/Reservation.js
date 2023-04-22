import Header from '../Layout/components/Header';
import Footer from '../Layout/components/Footer';
import ReservationImage from '../Layout/components/ReservationImage';
import ReservationForm from '../Layout/components/ReservationForm';

function Reservation() {
    return (
        <div>
            <Header/>
            <ReservationImage/>
            <ReservationForm />
            <Footer/>
        </div>
    );
}

export default Reservation;