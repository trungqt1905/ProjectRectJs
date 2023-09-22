import { Box, Typography } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHODER } from 'constants';
import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail.url}` : THUMBNAIL_PLACEHODER
    return (
        <Box padding={1}>
            <Box padding={1} minHeight="225px">
                <img src={thumbnailUrl}
                    alt={product.name} width='100%'>
                </img>
            </Box>

            <Typography variant='body2' paddingLeft={1}>
                {product.name}
            </Typography>

            <Typography variant='body2' paddingLeft={1}>
                <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
                    {(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format([product.salePrice]))}
                </Box>

                {product.promotionPercent > 0
                    ? ` -${product.promotionPercent}%` : ``}
            </Typography>
        </Box>
    );
}

export default Product;