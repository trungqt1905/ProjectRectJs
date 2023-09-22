import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "api/productApi";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";

ListPage.propTypes = {

};

const useStyles = makeStyles(themes => ({
    root: {

    },
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        marginTop: '22px',
        paddingBottom: '22px',
    }
}))

function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);

    const [loading, setLoading] = useState(true);

    const [filters, setFilter] = useState({
        _limit: 9,
        _page: 1,
        _sort: 'salePrice:ASC'
    });

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 9,
        total: 10,
    });

    const handlePageChange = (e, page) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            _page: page
        }));
    };

    const handleSortChange = (newSortValue) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            _sort: newSortValue,
        }));
    };

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to get products list', error);
            }

            setLoading(false);
        })();
    }, [filters]);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0} >Left column</Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0} >
                            <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                            {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}

                            <Box className={classes.pagination}>
                                <Pagination count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    color="primary"
                                    onChange={handlePageChange}
                                />
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}

export default ListPage;