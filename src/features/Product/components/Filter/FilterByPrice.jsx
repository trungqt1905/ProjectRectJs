import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@mui/styles";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

FilterByPrice.propTypes = {
    onChange: PropTypes.func
};

const useStyles = makeStyles({
    root: {

    },
    title: {
        textAlign: 'center',
        color: '#1976d2',
    },
    filterPrice: {
        padding: 0,
        textAlign: 'center',
    },
    button: {
        marginTop: '10px',
        textAlign: 'center',
        marginBottom : '10px',
    }
});


function FilterByPrice({ onChange }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        // console.log(values);
        if (onChange) onChange(values)
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        });
    }
    return (
        <Box>
            <Typography sx={{ fontSize: 17 }} className={classes.title} variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
            <hr color='#1976d2'></hr>
            <Box>
                <Box className={classes.filterPrice}>
                    <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                </Box>

                <Box className={classes.title} ><span>
                    <ArrowDownwardIcon sx={{ fontSize: 20 }}></ArrowDownwardIcon>
                </span></Box>

                <Box className={classes.filterPrice}>
                    <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
                </Box>

                <Box className={classes.button}>
                    <Button variant="outlined" color="primary" onClick={handleSubmit}>Áp dụng</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default FilterByPrice;