import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
    return (
        <Layout pagina={'nosotros'}>
            <main className='contenedor'>
                <h2 className='heading'> Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros' />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, aliquam molestie metus sed, venenatis maximus nisi.
                            Cras vestibulum finibus magna non porta. Nulla faucibus dictum sapien, tristique gravida nunc faucibus et.
                            In dictum, odio eu accumsan dignissim, massa justo semper lorem, sed iaculis ex leo a enim. Vestibulum nulla lorem,
                            placerat eu accumsan nec, viverra vel magna. Ut elit lectus, consequat nec nunc sed, commodo aliquet nisi.
                            Sed fermentum dapibus arcu. Fusce dolor eros, cursus in porttitor non, dignissim vitae lacus.
                        </p>

                        <p>Suspendisse vel sodales mi, nec feugiat augue. Sed commodo accumsan diam, ut scelerisque lorem consectetur faucibus.
                            Aenean lobortis accumsan libero, quis posuere arcu volutpat quis. Vestibulum ultrices nunc id diam commodo euismod.
                            Vivamus posuere, elit ornare blandit vestibulum, magna leo iaculis tellus, eu vehicula mi dui ut velit. Morbi rhoncus dictum ante id tempor.
                            Quisque sit amet lectus in ex laoreet euismod a nec urna. Morbi sem ex, hendrerit eget dignissim sed, auctor id justo.
                        </p>

                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
