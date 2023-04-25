import './Layout/css/App.css';
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './Pages/About';
import Reservation from './Pages/Reservation';
import Menu from './Pages/Menu';
import Header from './Layout/components/Header';
import Footer from './Layout/components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reservation' element={<Reservation/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
