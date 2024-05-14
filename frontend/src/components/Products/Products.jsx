import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../store/thunks/productsThunk.js'
import ProductsList from '../ProductsList/ProductsList.jsx'

const Products = () => {
    const dispatch = useDispatch()

    // get data
    const { data, error, loading } = useSelector(state => {
        return state.products
    })
    // console.log(`data: ${data}\nerror: ${error}\nloading: ${loading}`);

    // get searched results from store
    const results = useSelector(state => state.search.results)
    const searchedResults = results.length === 0 ? data : results
    const selectedCategories = useSelector(state => state.products.selectedCategories)

    // filter products based on selected categories
    const filteredProducts = searchedResults.filter(product => {
        return selectedCategories.length === 0 || selectedCategories.includes(product.category)
    })

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    } else if (error) {
        return <div>{error.message}</div>
    }

    return (
        <ProductsList data={filteredProducts} />
    )
}

export default Products