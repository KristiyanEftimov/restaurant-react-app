import './Layout/css/App.css';
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
