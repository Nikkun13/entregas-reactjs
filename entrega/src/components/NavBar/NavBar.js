import { useState } from 'react'
import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from "../CartWidget/CarWidget"


const NavBar = () => {

    const [show, setShow] = useState(false)

    return(
        <>
        <div className="cantinero">
            <div className="logArea"><CartWidget className="carrito" /><Button label="Acceder"/></div>
            <img src="https://i.ibb.co/2ZCDqcg/cartelmoe.png" alt="moes" className="moes" />
            <div className="centrar">
                <div className="clickMoe" onClick={() => setShow(!show)}></div>
                {show ? <div className="globoUno"></div> : null}
            </div>
        </div>
        <div className="navegador">
            <ul className="menu">
                <li className="opcion"><Button label="Cervezas"/></li>
                <li className="opcion"><Button label="Tragos"/></li>
                <li className="opcion"><Button label="Productos Importados"/></li>
                <li className="opcion"><Button label="Aperitivos"/></li>
                <li className="opcion"><Button label="Fichas"/></li>
            </ul>
        </div>
        </>
    )
}

export default NavBar