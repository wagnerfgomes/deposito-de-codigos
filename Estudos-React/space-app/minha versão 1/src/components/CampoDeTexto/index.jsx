import styled from 'styled-components';

const InputContainer = styled.div`
    display: inline-flex;
    padding: 1.2rem 1.6rem;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    border: 0.2rem solid #c98cf1;
    border-radius: 1rem;

    input {
        width: 34rem;
        border: none;
        outline: none;
        background: transparent;
        font-size: 1.4rem;
        color: #fff
    }

    input::placeholder {
        color: #fff
    }

    img {
        width: 3.2rem;
        height: 3.2rem;
        cursor: pointer;
    }
`;

const CampoDeTexto = () => {
    return (
        <InputContainer>
            <input type="search" placeholder="O que você está procurando?" />
            <img src="/icones/search.svg" alt="" />
        </InputContainer>
    );
};
export default CampoDeTexto;
