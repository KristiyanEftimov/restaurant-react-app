import '../Layout/css/App.css';
import Header from '../Layout/Header';
import LandingPage from '../Layout/LandingPage';
import RestaurantInfo from '../Layout/RestaurantInfo';
import Footer from '../Layout/Footer';

function Home() {
  return (
    <div>
      <Header/>
      <LandingPage/>
      <RestaurantInfo/>
      <Footer/>
    </div>
  );
}

export default Home;
