import ItemCount from '../ItemCount/ItemCount'
import Button from '../Button/Button'
import './Item.css'

const Item = ({product}) => {

    const onAdd = (quantity) => {
        quantity > 0 ? console.log(quantity) : console.log('Ingrese un valor mayor a 0')
      }

    return (
        <div className="card tarjeta" key={product.id}>
            <img className="card-img-top imagenProducto" src={product.img} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className='detalles'><Button label="Mas detalles"/></div>
                <p className="card-text"><b>{product.price} U$D</b></p>
                <ItemCount initial={0} stock={product.stock} onAdd={onAdd}/>
                <p className="card-text">Stock: {product.stock}</p>
            </div>
        </div>
    )
}

export default Item