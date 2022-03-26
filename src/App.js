import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Shop from './components/Shop/Shop';




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
      <Questions />
    </div>
  );
}

export default App;
