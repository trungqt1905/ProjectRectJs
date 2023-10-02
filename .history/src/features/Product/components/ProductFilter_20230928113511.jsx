import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import FilterByCategory from './Filter/FilterByCategory';
import FilterByPrice from './Filter/FilterByPrice';
import FilterBySevice from './Filter/FilterBySevice';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;

        const newFilters = {
            ...filters,
            "category.id": newCategoryId,
        };
        onChange(newFilters);
    }

    const handlePriceChange = (values) => {
        console.log(values);
        if (onChange) {
            onChange(values);
        }
    }

    const handleChange = (values) => {
        if (onChange) onChange(values);
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterBySevice filter={filters} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilter;