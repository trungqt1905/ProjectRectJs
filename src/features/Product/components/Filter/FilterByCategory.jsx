import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import categoryApi from 'api/categoryApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles({
    root: {

    },
    title: {
        textAlign: 'center',
        color: '#1976d2',
        paddingTop: '14px',
    },
    ul: {
        margin: 0,
        padding: 0,
        '& > li': {
            '&:hover': {
                color: '#1976d2'
            },
        }
    },
    filterCategory: {
        listStyleType: 'none',
        cursor: 'pointer',
        marginLeft: '16px',
        padding: '6px 0px',
    }
});

function FilterByCategory({ onChange }) {
    const classes = useStyles();
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name: x.name
                })))
            } catch (error) {
                console.log('failed to list category', error);
            }
        })();
    }, []);

    const handleCategoryOnclick = (category) => {
        if (onChange) {
            onChange(category.id);
            console.log(category.name)
        }
    };

    return (
        <Box>
            <Typography sx={{ fontSize: 17 }} className={classes.title}>DANH MỤC SẢN PHẨM </Typography>
            <hr color='#1976d2'></hr>
            <ul className={classes.ul}>
                {categoryList.map((category) => (
                    <li className={classes.filterCategory} key={category.id} onClick={() => handleCategoryOnclick(category)}>
                        {category.name}
                    </li>
                ))}
            </ul>
            <hr color='#1976d2'></hr>
        </Box >
    );
}

export default FilterByCategory;

