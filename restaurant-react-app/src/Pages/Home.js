import '../Layout/css/App.css';
import LandingPage from '../Layout/components/LandingPage';
import RestaurantInfo from '../Layout/components/RestaurantInfo';

function Home() {
  return (
    <div>
      <LandingPage/>
      <RestaurantInfo/>
    </div>
  );
}

export default Home;
