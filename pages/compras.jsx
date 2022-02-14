import Compra from '../components/Compra';
import Layout from '../components/Layout';
import styles from '../styles/Cart.module.css';

const Compras = ({ compras }) => {

    return (
        <Layout pagina={'compras'}>
            <main className="contenedor">
                <div className={styles.container}>
                    {compras.length === 0 ? (
                        <h1>Your compras is Empty!</h1>
                    ) : (
                        <>
                            {
                                compras.map(compra => (
                                    <Compra key={compra.id} compra={compra}></Compra>
                                ))
                            }
                        </>
                    )}
                </div>
            </main>
        </Layout>

    );
};

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/pedidos`
    const respuesta = await fetch(url)
    const compras = await respuesta.json()

    return {
        props: {
            compras
        }
    }
}

export default Compras;
