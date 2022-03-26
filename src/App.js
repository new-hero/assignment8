import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Cartproduct from './components/Cartproduct/Cartproduct';



function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);

  return (
    <div className="App">
      <Header />
      <Shop products={products} />
    </div>
  );
}

export default App;
