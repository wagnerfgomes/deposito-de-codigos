import styled from 'styled-components';
import Titulo from '../../Titulo';

const ColunaFoto = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
`;

const Imagem = styled.img`
    max-width: 21.2rem;
    width: 100%;
    border-radius: 2rem;
`;

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #c98cf1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = ({ fotos }) => {
    return (
        <section style={{ minWidth: 212 }}>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFoto>
                {fotos.map((foto) => (
                    <Imagem key={foto.id} src={foto.path} alt={foto.titulo} />
                ))}
            </ColunaFoto>
            <Botao>Ver mais</Botao>
        </section>
    );
};

export default Populares;
