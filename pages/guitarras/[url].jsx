import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Guitarra = ({ guitarra }) => {

    const { descripcion, imagen, precio, nombre } = guitarra[0]

    return (
        <Layout pagina={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image layout='responsive' height={350} width={180} src={imagen.url} alt={`Imagen de ${nombre}`} ></Image>
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <form className={styles.formulario} action="">
                        {/* <label htmlFor="">Cantidad</label>
                        <select name="" id="">
                            <option value="">--Seleccione--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}
                        <input type="submit" value="Agregar al Carrito" />
                    </form>
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
