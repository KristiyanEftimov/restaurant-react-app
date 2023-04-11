import '../Layout/css/App.css';
import Header from '../Layout/components/Header';
import LandingPage from '../Layout/components/LandingPage';
import RestaurantInfo from '../Layout/components/RestaurantInfo';
import Footer from '../Layout/components/Footer';

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
