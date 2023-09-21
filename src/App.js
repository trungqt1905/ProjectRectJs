import Headers from 'components/Header';
import { useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import productsApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Abums';
import CountFeature from './features/Counter';
import ProductFeature from 'features/Product';
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      const productList = await productsApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">

      <Router>
        <Headers />
        <Routes>
          <Route path="/todos/*" element={<CountFeature />} />

          <Route path="/albums/*" element={<AlbumFeature />} />

          <Route path='/products/*' element={<ProductFeature />} />
          <Route path="/" element={<Navigate to="/products/listpage" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;


