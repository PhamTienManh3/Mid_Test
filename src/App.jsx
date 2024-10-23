import { useState } from "react";
import "./App.css";
import { mockProductsData } from './Data.jsx'
import Navbar from "./Components/Navbar/Navbar";
import Introduce from "./Components/Introduce/Introduce";
import ProductLists from "./Components/ProductLists/ProductLists";

function App() {

  const [products, setProducts] = useState(mockProductsData);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
  }

  return (
    <div>
      <Navbar />
      <Introduce selectedProduct={selectedProduct} />
      <ProductLists products={products} handleSelectProduct={handleSelectProduct}/>      
    </div>
  );
}

export default App;
