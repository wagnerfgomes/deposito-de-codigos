import { Link } from 'react-router-dom';

import listaPost from 'Data/dados';

const Home = () => {
    return (
        <>
            <h1>Pagina Home</h1>
            <ul>
                {listaPost.map((nome) => (
                    <li key={nome}>
                        <Link to={`/posts/${nome}`}>{nome}</Link>{' '}
                    </li>
                ))}
            </ul>
        </>
    );
};
export default Home;
