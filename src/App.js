import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Destinationdomestic from './Components/Destinationdomestic';
import Loginform from './Components/Loginform';
import Signupform from './Components/Signupform';
import {Route, Routes} from 'react-router-dom';
import Home from'./Components/Home';
import BankStatementletter from './Components/BankStatementletter';
import CoverStatementletter from './Components/CoverStatementletter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/BankStatementletter' element={<BankStatementletter/>}/>
        <Route path='/CoverStatementletter' element={<CoverStatementletter/>}/>
        <Route path='/Loginform' element={<Loginform/>}/>
        <Route path='/Signupform' element={<Signupform/>}/>
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
