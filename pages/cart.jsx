import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/Cart.module.css';

const CartPage = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator, guitarra) => accumulator + guitarra.quantity * guitarra.precio, 0
        );
    };

    const comprar = async () => {
        const pedido = {
            total: getTotalPrice(),
            productos: cart.map(prod => ({
                nombre: prod.nombre,
                cantidad: prod.quantity,
                precio: prod.precio
            })),
            cliente: {
                nombre: 'asd',
                apellido: 'png',
                direccion: {
                    calle: 'oiyugfs',
                    numero: 123
                }
            }
        }
        // console.log('pedido', pedido);
        const url = `https://tienda-strapi-test.herokuapp.com/pedidos`
        const resp = await fetch(url, { method: 'POST', body: JSON.stringify(pedido), headers: { 'Content-Type': 'application/json' } })
        const res = await resp.json()
        console.log('res', res);
        alert(res)
    }

    return (
        <Layout pagina={'cart'}>
            <main className="contenedor">
                <div className={styles.container}>
                    {cart.length === 0 ? (
                        <h1>Your Cart is Empty!</h1>
                    ) : (
                        <>
                            <div className={styles.header}>
                                <div>Image</div>
                                <div>Product</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div>Actions</div>
                                <div>Total Price</div>
                            </div>
                            {cart.map(guitarra => (
                                <div className={styles.body} key={guitarra.id}>
                                    <div className={styles.image}>
                                        <Image src={guitarra.imagen.url} height="126" width="65" />
                                    </div>
                                    <p>{guitarra.nombre}</p>
                                    <p>$ {guitarra.precio}</p>
                                    <p>{guitarra.quantity}</p>
                                    <div className={styles.buttons}>
                                        <button onClick={() => dispatch(incrementQuantity(guitarra.id))}>
                                            +
                                        </button>
                                        <button onClick={() => dispatch(decrementQuantity(guitarra.id))}>
                                            -
                                        </button>
                                        <button onClick={() => dispatch(removeFromCart(guitarra.id))}>
                                            x
                                        </button>
                                    </div>
                                    <p>$ {guitarra.quantity * guitarra.precio}</p>
                                </div>
                            ))}
                            <h2>Grand Total: $ {getTotalPrice()}</h2>
                            <button onClick={() => comprar()}>Comprar</button>
                        </>
                    )}
                </div>
            </main>
        </Layout>

    );
};

export default CartPage;
