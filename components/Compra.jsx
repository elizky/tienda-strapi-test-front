import styles from '../styles/Compra.module.css'
import { formatearFecha } from '../helpers'


const Compra = ({ compra }) => {
    console.log('compra', compra);
    const { cliente, productos, published_at, total } = compra

    return (
        <div className={styles.compra}>

            <div className={styles.cliente}>
                <h4>Envio para</h4>
                <p>{cliente.nombre} {cliente.apellido}</p>
                <p>Pedido el {formatearFecha(published_at)}</p>
            </div>
            <div>
                {productos.map(prod => (
                    <div className={styles.prod}>
                        <p>Producto {prod.nombre} </p>
                        <p> x {prod.cantidad}</p>
                        <p>${prod.precio}</p>
                    </div>
                ))}
            </div>
            <h3>Total: ${total}</h3>
        </div>
    )
}

export default Compra




