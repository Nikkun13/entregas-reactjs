import { getProducts } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts().then(response => (
            setProducts(response)
        ))
    },[])
    
    const onAdd = (quantity) => {
        console.log(quantity)
      }

    return(
        <>
        <h1 style={{color:'white'}}>{greeting}</h1>
        <div className="centrado">
            {products.map(product => <div className="card tarjeta" key={product.id}>
                <img className="card-img-top imagenProducto" src={product.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><b>{product.price} U$D</b></p>
                    <ItemCount initial={0} stock={product.stock} onAdd={onAdd}/>
                </div>
            </div>)}
        </div>
        </>
    )
}

export default ItemListContainer