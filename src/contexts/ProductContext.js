import {createContext, useEffect, useState} from 'react';
import {fetchAllProducts} from "../api/fetchAllProducts";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const url = new URL(window.location.href);
    const [page, setPage] = useState(parseInt(url.searchParams.get('page')) || 1)
    const [searchId, setSearchId] = useState(url.searchParams.get('searchId') || '')
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchAllProducts(page, searchId)
            .then((products) => {
                setProducts(products)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [page, searchId])

    return (
        <ProductContext.Provider value={{products, loading, error, page, setPage, searchId, setSearchId}}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;