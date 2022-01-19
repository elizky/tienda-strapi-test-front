import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {

    const { contenido, imagen, published_at, titulo } = entrada[0]

    return (
        <Layout pagina={titulo}>
            <div className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs/`
    const resp = await fetch(url)
    const entradas = await resp.json()

    const paths = entradas.map(entrada => ({
        params: { url: entrada.url }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params: { url } }) {

    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const resp = await fetch(urlBlog)
    const entrada = await resp.json()

    return {
        props: {
            entrada: entrada
        }
    }
}

export default EntradaBlog
