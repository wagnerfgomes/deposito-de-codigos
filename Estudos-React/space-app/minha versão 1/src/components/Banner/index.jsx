import styled from 'styled-components';

const TituloEstilizado = styled.figure`
    background: url(${(props) => props.$imagemUrl}) no-repeat center;
    background-size: cover;
    border-radius: 2rem;
    opacity: 0.8;
    padding: 9.2rem 6.4rem;

    h1 {
        color: white;
        font-size: 4rem;
        width: 30rem;
    }
`;
const Banner = ({ imagemUrl, children }) => {
    return (
        <TituloEstilizado $imagemUrl={imagemUrl}>
            <h1>{children}</h1>
        </TituloEstilizado>
    );
};
export default Banner;
