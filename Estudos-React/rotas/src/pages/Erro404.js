import { useNavigate } from 'react-router-dom';

const Erro404 = () => {
    const navegar = useNavigate();
    
    return (
        <>
            <h1>Erro 404!</h1>
            <button
                onClick={() => {
                    navegar(-1);
                }}
            >
                Voltar
            </button>
        </>
    );
};
export default Erro404;
