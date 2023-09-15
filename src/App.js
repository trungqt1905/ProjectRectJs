import Headers from 'components/Header';
import { useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import productsApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Abums';
import CountFeature from './features/Counter';
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        limit: 10
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
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/todos/*" element={<CountFeature />} />
          <Route path="/albums/*" element={<AlbumFeature />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router >
      Footer
    </div >
  );
}

export default App;


