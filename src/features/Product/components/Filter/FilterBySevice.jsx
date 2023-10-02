import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from 'prop-types';

FilterBySevice.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
};

const useStyles = makeStyles({
    root: {
        marginTop: '20px'
    },
    li_service: {
        margin: '0px',
        padding: '0px',
        marginLeft: '14px',
    },
    title: {
        textAlign: 'center',
        color: '#1976d2',
    },
});


function FilterBySevice({ filters = {}, onChange }) {
    const classes = useStyles();

    const handleChange = (e) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        onChange({ [name]: checked });
    }

    return (
        <Box className={classes.root}>
            <hr color='#1976d2'></hr>
            <Typography sx={{ fontSize: 17 }} className={classes.title} variant="subtitle2">DỊCH VỤ</Typography>
            <hr color='#1976d2'></hr>
            {[
                { values: 'isPromotion', label: 'Có khuyến mãi' },
                { values: 'isFreeShip', label: 'Vận Chuyển miễn phí' }].map((service) => (
                    <ul className={classes.li_service} key={service.values}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={filters[service.values]}
                                    onChange={handleChange}
                                    name={service.values}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </ul>
                ))}
        </Box >
    );
}

export default FilterBySevice;