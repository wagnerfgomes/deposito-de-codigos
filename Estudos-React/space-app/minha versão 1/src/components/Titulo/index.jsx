import styled from 'styled-components';

const TituloGaleria = styled.h2`
width: 100%;
    color: #7b78e5;
    font-size: 3.2rem;
    text-align: ${(props) =>
        props.$alinhamento ? props.$alinhamento : 'left'};
    flex-grow: 1;
`;

const Titulo = ({ children, alinhamento }) => {
    return <TituloGaleria $alinhamento={alinhamento}>{children}</TituloGaleria>;
};
export default Titulo;
