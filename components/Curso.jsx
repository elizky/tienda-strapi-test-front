import styles from '../styles/Bloque.module.css'

const Bloque = ({ bloque }) => {
    const { titulo, contenido, imagen } = bloque


    return (
        <section >
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </div>

            <style jsx>{`
                section{
                    padding: 5rem 0;
                    margin-top: 5rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url})
                }
            `}
            </style>
        </section>
    )
}

export default Bloque
