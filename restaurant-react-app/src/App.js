import './App.css';
import Menu from './Menu/Menu';
import Header from './Layout/Header';
import LandingPage from './Layout/LandingPage';
import RestaurantInfo from './Layout/RestaurantInfo';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <RestaurantInfo/>
      <Footer/>
    </div>
  );
}

export default App;
