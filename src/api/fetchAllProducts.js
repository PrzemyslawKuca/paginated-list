const ITEMS_PER_PAGE = 5

export const fetchAllProducts = (page, searchId) => {
    return fetch(`https://reqres.in/api/products?per_page=${ITEMS_PER_PAGE}&page=${page}&id=${searchId}`)
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data.data) && data.data !== undefined) {
                data.data = [data.data]
            }
            return data;
        })
        .catch((err) => {
            throw(err)
        });
}
