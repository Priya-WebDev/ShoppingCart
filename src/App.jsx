
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar from './components/Navbar'
import  Shop  from "./pages/shop/Shop";
import  Contact  from "./pages/Contact";
import  Cart  from "./pages/cart/Cart";
import CheckOut from "./pages/Checkout";
import { ShopContextProvider } from "./context/Shop-Context";

function App() {
  return (
    <>
    
    <div className="py-3 mb-2  text-center text-white font-bold text-3xl bg-gray-900">
        ShopEase
      </div>
    <div className="w-full h-auto min-h-screen">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    </>
  );
}

export default App;
