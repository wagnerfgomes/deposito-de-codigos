import { styled } from 'styled-components';
import BotaoIcone from '../../BotaoIcone';
import tags from '../Tags/tags.json';

const Figure = styled.figure`
    position: relative;
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Tag = styled.p`
    color: white;
    width: fit-content;
    position: absolute;
    padding: 0.5rem 1rem;
    top: 0.4rem;
    right: 0.4rem;
    border-radius: 1rem;
    background: rgba(217, 217, 217, 0.4);
`;

const Imagem = ({
    foto,
    expandida = false,
    aoZoomSolicitado,
    aoAternarFavorito,
}) => {
    const iconeFavorita = foto.favorita ? 'favorito-ativo' : 'favorito';
    const tagName = tags.find((tag) => tag.id === foto.tagId);
    return (
        <div>
            <Figure $expandida={expandida} id={`foto-${foto.id}`}>
                <Tag>{tagName.titulo}</Tag>
                <img src={foto.path} alt={foto.alt} />
                <figcaption>
                    <h3>{foto.titulo}</h3>
                    <Rodape>
                        <h4>{foto.fonte}</h4>
                        <BotaoIcone onClick={() => aoAternarFavorito(foto)}>
                            <img
                                src={`/icones/${iconeFavorita}.png`}
                                alt="Icone de favorito"
                            />
                        </BotaoIcone>
                        {!expandida && (
                            <BotaoIcone
                                aria-hidden={expandida}
                                onClick={() => aoZoomSolicitado(foto)}
                            >
                                <img
                                    src="/icones/expandir.png"
                                    alt="Icone de expandir"
                                />
                            </BotaoIcone>
                        )}
                    </Rodape>
                </figcaption>
            </Figure>
        </div>
    );
};

export default Imagem;
