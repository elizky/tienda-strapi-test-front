import Guitarra from './Guitarra'
import styles from '../styles/ListadoGuitarras.module.css'


const ListadoGuitarras = ({ guitarras }) => {

    return (
        <div className={styles.listado}>
            {guitarras.map(guitarra => (
                <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))}
        </div>
    )
}

export default ListadoGuitarras
