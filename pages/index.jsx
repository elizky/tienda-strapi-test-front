import Layout from '../components/Layout'

import ListadoGuitarras from '../components/ListadoGuitarras'
import Bloque from '../components/Curso'
import ListadoBlogs from '../components/ListadoBlogs'

export default function Home({ guitarras, curso, blog }) {

  return (
    <Layout pagina={'index'} guitarra={guitarras[0]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <ListadoGuitarras guitarras={guitarras}></ListadoGuitarras>
      </main>
      <Bloque bloque={curso}></Bloque>
      <section className="contenedor">
        <ListadoBlogs entradas={blog}></ListadoBlogs>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/bloque`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ])

  const [guitarras, curso, blog] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      blog
    }
  }
}