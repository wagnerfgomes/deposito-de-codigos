import { Link } from "react-router-dom"

const Menu = () =>{
    return(
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/contato'}>Contato</Link>
        </nav>
    )
}
export default Menu