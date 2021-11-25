import './CartWidget.css'

const CartWidget = ({cantidad}) =>{
    return(
        <a className='carrito' href='carrito.html'>  {cantidad} </a>
        
    )
}


export default CartWidget