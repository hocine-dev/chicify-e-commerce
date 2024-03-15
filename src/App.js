import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import LoginSign from "./pages/LoginSign";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}></Route>
      <Route path="/men" element={<ShopCategory category='men'/>}></Route>
      <Route path="/women" element={<ShopCategory category='women'/>}></Route>
      <Route path="/kids" element={<ShopCategory category='kids'/>}></Route>
      <Route path="/login" element={<LoginSign/>}></Route>
      <Route path="/Product" element={<Product/>}>
      <Route path=":ProductId" element={<Product/>}></Route>
      </Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
