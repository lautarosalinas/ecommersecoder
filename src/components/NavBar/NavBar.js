import './NavBar.css'
import CartWidget from '../../components/NavBar/CartWidget/CartWidget';


const NavBar = () => {
    return(
        <nav className='navBar'>
            <img className='logoNav' href="../src/img/reactLogo.png"/>
              <a className='buttons' href=".html"> inicio </a>
              <a className='buttons' href=".html"> Sobre Nosotros </a>
              <a className='buttons' href=".html"> Contacto </a> 
              <CartWidget cantidad={'3'}/> 
        </nav>
    )
}

export default NavBar