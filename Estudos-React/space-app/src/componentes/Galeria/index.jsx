import { styled } from 'styled-components';
import Titulo from '../Titulo';
import Populares from './Populares';
import Imagem from './Imagem';
import Tags from './Tags'

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAternarFavorito, aoSelecionarTag }) => {
    return (
        <>
            <Tags aoSelecionarTag={aoSelecionarTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map((foto) => (
                            <Imagem
                                aoAternarFavorito={aoAternarFavorito}
                                aoZoomSolicitado={aoFotoSelecionada}
                                key={foto.id}
                                foto={foto}
                            />
                        ))}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares fotos={fotos} />
            </GaleriaContainer>
        </>
    );
};

export default Galeria;
