import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    const productos = [{tipo:'grafica', modelo:'1050ti', precio:'$11.400'}, {tipo:'CPU', modelo:'i5 6700k', precio:'$12.670'}, {tipo: 'RAM', modelo:'Hyper', precio:'$11.400'}]

    return(
        <button className='cargar'>cargar datos</button>
    )
}


export default ItemListContainer