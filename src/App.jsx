import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { LoginSignup, Product, Shop, ShopCategory } from "./Pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory state="men" />} />
        <Route path="/women" element={<ShopCategory state="women" />} />
        <Route path="/kids" element={<ShopCategory state="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path="/:id" element={<Product />} />
        </Route>
        <Route />
        <Route path="/loginSignup" element={<LoginSignup />} />
      </Routes>
    </>
  );
}

export default App;
