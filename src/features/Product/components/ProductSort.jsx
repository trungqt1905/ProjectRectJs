import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue);
    }
    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            textColor='primary'
            aria-label="basic tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
            <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;