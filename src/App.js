import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Domestic from './Components/Domestic';
import International from './Components/International';
import Loginform from './Components/Loginform';
import Signupform from './Components/Signupform';
import {Route, Routes} from 'react-router-dom';
import Home from'./Components/Home';
import BankStatementletter from './Components/BankStatementletter';
import CoverStatementletter from './Components/CoverStatementletter';
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import HotelReservition from './Pages/HotelReservition';
import Tickets from './Pages/Tickets';
import VisitVisa from './Pages/VisitVisa';
import UmrahPackages from './Pages/UmrahPackages';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TicketForm from './Components/TicketForm';
import Card from './Components/Card';
import OurServices from './Components/OurServices';
import Contact from './Pages/Contact';
import Flight from './Pages/Flight';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={< Tickets />}/>
        <Route exact path='/Flight' element={<Flight/>}/>
				<Route exact path='/HotelReservition' element={< HotelReservition />}/>
				<Route exact path='/UmrahPackages' element={< UmrahPackages />}/>
				<Route exact path='/Contact' element={< Contact />}/>
        <Route exact path='VisitVisa' element={<VisitVisa/>}/>

        <Route path='/BankStatementletter' element={<BankStatementletter/>}/>
        <Route path='/CoverStatementletter' element={<CoverStatementletter/>}/>
        <Route path='/Loginform' element={<Loginform/>}/>
        <Route path='/Signupform' element={<Signupform/>}/>
        <Route path='/Domestic' element={<Domestic/>}/>
        <Route path='International' element={<International/>}/>
      </Routes>
   {/* <Navbar/>
   <Header/>
   <Searchsection/>
   <Statementletter/>
   <Destinationdomestic/>
   <Destinationinternational/>
    <Bankletter/> 
    <Coverletter/>
    <Footer/>
   <Loginform/>
   <Signupform/> */}
    </div>
  );
}

export default App;
