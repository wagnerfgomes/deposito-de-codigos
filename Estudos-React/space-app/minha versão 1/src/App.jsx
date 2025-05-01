import styled from 'styled-components';
import EstilosGlobais from './components/EstilosGLobais';
import Cabecalho from './components/Cabecalho';
import BarraLateral from './components/BarraLateral';
import Banner from './components/Banner';
import imagemBanner from './assets/banner.png';
import Galeria from './components/Galeria';
import fotos from './fotos.json'
import { useState } from 'react';

const FundoGradiente = styled.div`
    background: linear-gradient(
        175deg,
        #041833 4.16%,
        #04244f 48%,
        #154580 96.76%
    );
    width: 100%;
    min-height: 100vh;
`;

const AppContainer = styled.div`
    width: 144rem;
    max-width: 100%;
    margin: 0 auto;
`;

const MainContainer = styled.main`
    display: flex;
    gap: 2.4rem;
    justify-content: space-between;
`;

const ConteudoDaGaleria = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 2.4rem;
`;

const App = () => {
    const  [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
    return (
        <FundoGradiente>
            <AppContainer>
                <EstilosGlobais />
                <Cabecalho />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoDaGaleria>
                        <Banner imagemUrl={imagemBanner}>
                            A galeria mais completa de fotos do espaço!
                        </Banner>
                        <Galeria fotos={fotosDaGaleria} />
                    </ConteudoDaGaleria>
                </MainContainer>
            </AppContainer>
        </FundoGradiente>
    );
};

export default App;
