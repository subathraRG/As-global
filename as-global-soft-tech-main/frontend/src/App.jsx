import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProduct from "./components/UpdateProduct";
import BuyProduct from "./components/BuyProduct";
import Sales from "./components/Sales";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/buy/*" element={<BuyProduct />} />
          <Route path="/update/*" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
