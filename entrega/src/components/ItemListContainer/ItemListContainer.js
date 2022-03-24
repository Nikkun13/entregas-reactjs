import { getProducts } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts().then(response => (
            setProducts(response)
        ))
    },[])

    return(
        <>
        <h1 style={{color:'white'}}>{greeting}</h1>
        <ItemList products={products} />
        </>
    )
}

export default ItemListContainer