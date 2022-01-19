import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'


const ListadoBlogs = ({ entradas }) => {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className={styles.blog}>
                {entradas.map(entrada => (
                    <Entrada key={entrada.id} entrada={entrada}></Entrada>
                ))}
            </div>
        </>
    )
}

export default ListadoBlogs
