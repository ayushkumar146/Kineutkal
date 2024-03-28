import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Homepage from "./components/dashboard/fp";
import First from "./components/contents/first/first";
import Notify from "./components/contents/error/notify";
import User from "./components/userdata/userdata";

function App() {
  return (
    <Router> {/* Wrap Routes with BrowserRouter */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/Dashboard' element={<First />} />
        <Route exact path='/loginerror' element={<Notify />} />
        <Route exact path='/Home' element={<User />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
