import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './Inicio.module.css';
import Card from 'components/Card';
import { useContext } from 'react';
import { DadosContext } from 'Context/DadosContext';

const Inicio = () => {
    const dados = useContext(DadosContext);
    return (
        <>
            <Banner imagem="home" />
            <div className={styles.conteudo}>
                <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
                <div className={styles.cards}>
                    {dados.map((card) => (
                        <Card key={card.id} id={card.id} capa={card.capa} titulo={card.titulo} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default Inicio;
