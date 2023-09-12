import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function TodoFeature() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/:todoId" element={<DetailPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default TodoFeature;