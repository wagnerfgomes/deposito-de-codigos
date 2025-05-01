import Banner from "components/Banner"
import Titulo from "components/Titulo"
import styles from "./Favoritos.module.css"
import Card from "components/Card";
import { useFavoritos } from "Hooks/useFavoritos";

const Favoritos = () =>{
    const { favoritos } = useFavoritos()
    return (
        <>
            <Banner imagem={'favoritos'} />
            <div className={styles.conteudo}>
                <Titulo>Meus Favoritos</Titulo>
            </div>
            <div className={styles.cards}>
                {favoritos.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        capa={card.capa}
                        titulo={card.titulo}
                    />
                ))}
            </div>
        </>
    );
}
export default Favoritos