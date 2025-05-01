import styled from 'styled-components';
import Imagem from '../Galeria/Imagem';
import BotaoIcone from '../BotaoIcone';

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    width: 1156px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: none;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;

const ModalZoom = ({ foto, aoFechar, aoAternarFavorito }) => {
    return (
        <>
            {foto && (
                <>
                    <Overlay onClick={aoFechar} />
                    <DialogEstilizado open={!!foto}>
                        <Imagem
                            foto={foto}
                            expandida
                            aoAternarFavorito={aoAternarFavorito}
                        />
                        <form method="dialog">
                            <BotaoIcone formMethod="dialog" onClick={aoFechar}>
                                <img
                                    src="/icones/close.png"
                                    alt="Icone de fechar"
                                />
                            </BotaoIcone>
                        </form>
                    </DialogEstilizado>
                </>
            )}
        </>
    );
};
export default ModalZoom;
