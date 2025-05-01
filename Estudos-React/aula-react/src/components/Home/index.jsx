import { useState } from 'react';
import Post from '../Post';
import Mensagens from '../Mensagens';

export default function Home({ handleLogin }) {
    const [componente, setComponente] = useState('');

    const handleComponete = (comp) => setComponente(comp);

    switch (componente) {
        case 'post':
            return (
                <div>
                    <h1>Home</h1>
                    <button onClick={() => handleComponete('mensg')}>
                        Mensagem
                    </button>
                    <button onClick={handleLogin}>Logout</button>
                    <Post />
                </div>
            );
        case 'mensg':
            return (
                <div>
                    <h1>Home</h1>
                    <button onClick={() => handleComponete('post')}>
                        Post
                    </button>
                    <button onClick={handleLogin}>Logout</button>
                    <Mensagens />
                </div>
            );

        default:
            return (
                <div>
                    <h1>Home</h1>
                    <button onClick={() => handleComponete('post')}>
                        Post
                    </button>
                    <button onClick={() => handleComponete('mensg')}>
                        Mensagem
                    </button>
                    <button onClick={handleLogin}>Logout</button>
                </div>
            );
    }
}
