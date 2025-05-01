import MenuLink from "../MenuLink"
import style from "./Menu.module.css"


export default function Menu(){
   
    return(
        <header>
            <nav className={style.navegacao}>
                <MenuLink to={'/'}>
                    Início
                </MenuLink>
                <MenuLink to={'/sobremim'}>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}