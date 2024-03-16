import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import LoginSign from "./pages/LoginSign";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import mensBanner from './components/assets/banner_mens.png'
import womensBanner from './components/assets/banner_women.png'
import kidsBanner from './components/assets/banner_kids.png'

function App() {
  return <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}></Route>
      <Route path="/men" element={<ShopCategory category='men' banner={mensBanner}/>}></Route>
      <Route path="/women" element={<ShopCategory category='women' banner={womensBanner} />}></Route>
      <Route path="/kids" element={<ShopCategory category='kid' banner={kidsBanner} />}></Route>
      <Route path="/login" element={<LoginSign/>}></Route>
      <Route path="/Product" element={<Product/>}>
      <Route path=":ProductId" element={<Product/>}></Route>
      </Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>;
}

export default App;
