import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/signin/SignIn';
import Land from './component/landingPage/Land';



function App() {
  return (
    <div className="App">     

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/home' element={<Land/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
