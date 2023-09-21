import { Box, Typography } from '@mui/material';
import { THUMBNAIL_PLACEHODER } from 'constants';
import { STATIC_HOST } from 'constants';
import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail.url}` : THUMBNAIL_PLACEHODER
    return (
        <Box padding={1}>
            <Box padding={1}>
                <img src={thumbnailUrl}
                    alt={product.name} width='100%'>
                </img>
            </Box>

            <Typography variant='body2'>{product.name}</Typography>
            <Typography variant='body2'>{product.salePrice} - {product.promotionPercent}</Typography>
        </Box>
    );
}

export default Product;