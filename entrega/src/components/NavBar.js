import './NavBar.css'
import Button from './Button/Button'

const NavBar = () => {
    return(
        <>
        <div className="cantinero">
            <img src="../imagenes/globo.png" alt="globo"></img>
        </div>
        <div className="navegador">
            <ul className="menu">
                <li className="opcion"><Button /></li>
                <li className="opcion"><Button /></li>
                <li className="opcion"><Button /></li>
                <li className="opcion"><Button /></li>
                <li className="opcion"><Button /></li>
            </ul>
        </div>
        </>
    )
}

export default NavBar