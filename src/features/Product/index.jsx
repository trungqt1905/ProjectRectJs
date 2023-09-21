import { Route, Routes } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import { Box } from '@mui/material';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    return (
        <Box pt={4}>
            <Routes>
                <Route>
                    <Route path="/listpage" element={<ListPage />} />
                </Route>
            </Routes>
        </Box>
    );
}

export default ProductFeature;