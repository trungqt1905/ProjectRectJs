import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import AlbumFeature from './features/Abums';
import TodoFeatures from './features/Todo';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productsApi from './api/productApi';
import CountFeature from './features/Counter';
import Headers from 'components/Header';
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


