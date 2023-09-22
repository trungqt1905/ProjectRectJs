import Headers from 'components/Header';
import ProductFeature from 'features/Product';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Abums';
import CountFeature from './features/Counter';
function App() {

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


