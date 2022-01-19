import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'


const Guitarra = ({ guitarra }) => {
    const { nombre, url, descripcion, precio, imagen } = guitarra

    const imagenUrl = imagen ? imagen.url : '/img/nodisponible.png'

    return (
        <div className={styles.guitarra}>
            {imagen
                ? <Image layout='responsive' height={350} width={180} src={imagenUrl} alt={`Imagen de ${nombre}`} ></Image>
                : <p className={styles.descripcion}>imagen no disponible</p>
            }

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver Producto</a>
                </Link>

            </div>
        </div>
    )
}

export default Guitarra
