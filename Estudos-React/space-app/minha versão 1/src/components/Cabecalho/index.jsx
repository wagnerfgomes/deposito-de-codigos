import styled from 'styled-components';
import Logo from '/imagens/logo.png';
import CampoDeTexto from '../CampoDeTexto';

const HeaderEstilizado = styled.header`
    padding: 6rem 0;
    display: flex;
    justify-content: space-between;

    img {
        max-height: 6.5rem;
    }
`;

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src={Logo} alt="" />
            <CampoDeTexto />
        </HeaderEstilizado>
    );
};
export default Cabecalho;
