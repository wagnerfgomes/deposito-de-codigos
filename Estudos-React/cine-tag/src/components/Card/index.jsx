import { Link } from 'react-router';
import styles from './Card.module.css';
import { useFavoritos } from 'Hooks/useFavoritos';
const Card = ({ capa, titulo, id }) => {
    const { favoritos, favoritar } = useFavoritos();
    return (
        <Link className={styles.card} to={`player/${id}`}>
            <img className={styles.imagem} src={capa} alt="" />
            <div className={styles.descricao}>
                <h3 className={styles.titulo}>{titulo}</h3>

                <img
                    className={styles.icone}
                    src={`imagens/${
                        favoritos.some((item) => item.id === id)
                            ? 'favorite'
                            : 'favorite_outline'
                    }.png`}
                    alt=""
                    onClick={(event) => {
                        favoritar({ id, titulo, capa });
                    }}
                />
            </div>
        </Link>
    );
};
export default Card;
