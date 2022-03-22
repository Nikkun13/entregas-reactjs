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
        <div>
            <div className='masymenos'>
                <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                <p className="recuadroNumero">{count}</p>
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            </div>
            <button className="btn btn-secondary btn-block" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

// Aca use la misma parte para poner los 3 productos, obviamente no se hace asi, solo queria ver como quedaba armado en la pagina

export default ItemCount