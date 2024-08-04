import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Cart, LoginSignup, Product, Shop, ShopCategory } from "./Pages";
import { Footer } from "./Components/Footer";
import { bannerKids, bannerMen, bannerWomen } from "./assets";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={bannerMen} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={bannerWomen} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={bannerKids} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <section className="padding-x">
        <Footer />
      </section>
    </>
  );
}

export default App;
