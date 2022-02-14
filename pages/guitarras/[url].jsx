import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cart.slice";
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Guitarra = ({ guitarra }) => {

    const guitar = guitarra[0]
    const { descripcion, imagen, precio, nombre } = guitar
    const dispatch = useDispatch()

    return (
        <Layout pagina={`Guitarra ${nombre}`}>
            <div className={styles.guitarra2}>
                <Image layout='responsive' height={350} width={180} src={imagen.url} alt={`Imagen de ${nombre}`} ></Image>
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <div className={styles.formulario}>
                        <button onClick={() => dispatch(addToCart(guitar))} >Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ params: { url } }) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const resp = await fetch(urlGuitarra)
    const guitarra = await resp.json()

    return {
        props: {
            guitarra
        }
    }
}

export default Guitarra
