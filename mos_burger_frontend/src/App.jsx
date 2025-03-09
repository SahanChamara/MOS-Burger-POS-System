import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./component/signin/SignIn";
import MosBurgerLandPage from "./component/landingPage/MosBurgerLandPage";
import PlaceOrderPage from "./component/placeOrderPage/PlaceOrderPage";
import StockManagement from "./component/stockManagement/StockManagement";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<MosBurgerLandPage />} />
          <Route path="/placeOrder" element={<PlaceOrderPage />} />
          <Route path="/stock" element={<StockManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
