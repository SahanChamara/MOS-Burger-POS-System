import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/signin/SignIn';
import MosBurgerLandPage from './component/landingPage/MosBurgerLandPage';
import PlaceOrderPage from './component/placeOrderPage/PlaceOrderPage';




function App() {
  return (
    <div className="App">     

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/home' element={<MosBurgerLandPage/>} />  
          <Route path='/placeOrder' element={<PlaceOrderPage/>} />                  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
