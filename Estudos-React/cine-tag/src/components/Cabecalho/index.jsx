import { Link } from 'react-router';
import styles from './Cabecalho.module.css';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src="imagens/logo.png" alt="Logo cine-tag" />
            </Link>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    Home
                </Link>
                <Link className={styles.link} to="/favoritos">
                    Favoritos
                </Link>
            </nav>
        </header>
    );
};
export default Cabecalho;
