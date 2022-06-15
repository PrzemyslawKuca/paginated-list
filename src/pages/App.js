import {useContext} from "react";
import {ProductContext} from "../contexts/ProductContext";
import {Pagination, TextField,} from "@mui/material";
import ProductsTable from "../components/productsTable/ProductsTable";
import './App.css';

function App() {
    const {products, page, setPage, searchId, setSearchId} = useContext(ProductContext);

    const changeUrlParams = (page, searchId) =>{
        window.history.replaceState(null, null, `?page=${page}&searchId=${searchId}`)
    }

    const handlePaginationChange = (event, value) => {
        setPage(value)
        changeUrlParams(value, searchId)
    }

    const handleInputChange = (event) => {
        setSearchId(event.target.value)
        changeUrlParams(page, event.target.value)
    }

    return (
        <div id={'home'}>
            <TextField
                fullWidth
                label="Search by ID"
                type={'number'}
                value={searchId}
                onChange={handleInputChange}
            />
            <ProductsTable/>
            <div className={'pagination'}>
                <Pagination count={products?.total_pages} page={page} onChange={handlePaginationChange} shape="rounded"/>
            </div>
        </div>
    );
}

export default App;
