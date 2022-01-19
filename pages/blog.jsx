import Layout from '../components/Layout'
import ListadoBlogs from '../components/ListadoBlogs'


const Blog = ({ entradas }) => {

    return (
        <Layout pagina={'blog'}>
            <main className="contenedor">
                <ListadoBlogs entradas={entradas}></ListadoBlogs>
            </main>
        </Layout>
    )
}

export async function getStaticProps() {

    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const resp = await fetch(url)
    const entradas = await resp.json()

    return {
        props: {
            entradas
        }
    }
}

export default Blog
