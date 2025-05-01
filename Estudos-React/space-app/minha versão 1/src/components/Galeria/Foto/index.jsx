import styled from 'styled-components';

const FotoContainer = styled.figure`
    display: flex;
    flex-direction: column;
    width: 44.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 2rem;
    
    .imagem {
        width: 44.8rem;
        height: 25.6rem;
        border-radius: 2rem 2rem 0 0;
        object-fit: cover;
    }
`;

const DadosContainer = styled.figcaption`
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.6rem;
    background: #001634;
    border-radius: 0 0 2rem 2rem;
    h3 {
        color: #fff;
        font-family: 'Gandhi Sans';
        font-size: 2rem;
        font-weight: 700;
    }

    footer{
        display: flex;
        justify-content: space-between;
    }

    footer > p {
        color: #fff;
        font-family: 'Gandhi Sans';
        font-size: 1.6rem;
        font-weight: 300; 
    }
`;

const IconesContainer = styled.div`
    display: flex;
    gap: 2rem;

    button {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
    }
    button > .icon {
        width: 100%;
        height: 100%;
    }
`;

const Foto = ({ foto }) => {
    return (
        <FotoContainer>
            <img className='imagem' src={foto.path} alt="" />
            <DadosContainer>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>Fonte: {foto.fonte}</p>
                    <IconesContainer>
                        <button>
                            <img className='icon' src="icones/favorito.png" alt="" />
                        </button>
                        <button>
                            <img className='icon' src="icones/expandir.png" alt="" />
                        </button>
                    </IconesContainer>
                </footer>
            </DadosContainer>
        </FotoContainer>
    );
};
export default Foto;
