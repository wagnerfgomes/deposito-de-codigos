import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './Player.module.css';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { DadosContext } from 'Context/DadosContext';

const Player = () => {
    const dados = useContext(DadosContext);
    const parametros = useParams();
    const video = dados.find((dado) => dado.id === Number(parametros.id));

    return (
        <>
            <Banner imagem="player" />
            <div className={styles.conteudo}>
                <Titulo>Player</Titulo>
            </div>
            <div className={styles.video}>
                <iframe
                    width="1000"
                    height="562"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen='true'
                ></iframe>
            </div>
        </>
    );
};
export default Player;
