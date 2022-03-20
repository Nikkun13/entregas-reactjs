import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initial = 0,stock,onAdd}) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div className="centrado">
            <div className="card tarjeta">
                <img className="card-img-top imagenProducto" src="https://i.ibb.co/bH8tKvW/Cerveza.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Cerveza Duff</h5>
                    <p className="card-text">La clásica cerveza en su presentación más común. Deliciosa.</p>
                    <p className="card-text"><b>5 U$D</b></p>
                    <div className="fondo">
                        <div className='masymenos'>
                            <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                            <p className="recuadroNumero">{count}</p>
                            <button className="btn btn-outline-secondary" onClick={increment}>+</button>
                        </div>
                        <button className="btn btn-secondary btn-block" onClick={() => onAdd(count)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <div className="card tarjeta">
                <img className="card-img-top imagenProducto" src="https://i.ibb.co/WxkMNnW/Llamarada.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Llamarada Moe</h5>
                    <p className="card-text">¿LLamarada Homero? No se de que me hablas, siempre fueron llamaradas Moe, porque las hago yo, Moe.</p>
                    <p className="card-text"><b>10 U$D</b></p>
                    <div className="fondo">
                        <div className='masymenos'>
                            <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                            <p className="recuadroNumero">{count}</p>
                            <button className="btn btn-outline-secondary" onClick={increment}>+</button>
                        </div>
                        <button className="btn btn-secondary btn-block" onClick={() => onAdd(count)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <div className="card tarjeta">
                <img className="card-img-top imagenProducto" src="https://i.ibb.co/Ks3Ng8n/Perfume.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Perfume en un sombrero de hombre con una ciruela flotando</h5>
                    <p className="card-text">Aunque no lo creas es muy comun, siempre tengo uno preparado.</p>
                    <p className="card-text"><b>50 U$D</b></p>
                    <div className="fondo">
                        <div className='masymenos'>
                            <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                            <p className="recuadroNumero">{count}</p>
                            <button className="btn btn-outline-secondary" onClick={increment}>+</button>
                        </div>
                        <button className="btn btn-secondary btn-block" onClick={() => onAdd(count)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Aca use la misma parte para poner los 3 productos, obviamente no se hace asi, solo queria ver como quedaba armado en la pagina

export default ItemCount