import styled from 'styled-components';
import Titulo from '../Titulo';
import Tags from './Tags';
import Populares from './Populares';
import Foto from './Foto';

const GaleriaContainer = styled.div`
    display: flex;
    gap: 2.4rem;
`;

const SecaoFluida = styled.section`
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
    flex-grow: 1;
`;

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo> Navegue pela galeria </Titulo>
                    {fotos.map((foto) => (
                        <Foto
                            key={foto.id}
                            foto={foto}
                        />
                    ))}
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
};
export default Galeria;
