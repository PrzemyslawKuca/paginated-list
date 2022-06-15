import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext";
import {CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ProductItem from "../productItem/productItem";
import './productsTable.css'

const ProductsTable = () => {
    const {products, loading, error} = useContext(ProductContext);

    return (
        <div id={'productsTable'}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (error || products?.data === undefined) && !loading &&
                            <TableRow>
                                <TableCell align="center" colSpan={3}>No results</TableCell>
                            </TableRow>
                        }
                        {
                            !loading && !error && products?.data?.map((product) => {
                                return <ProductItem key={product.id} product={product}/>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {loading && <div className={'loading'}><CircularProgress/></div>}
        </div>
    )
}

export default ProductsTable