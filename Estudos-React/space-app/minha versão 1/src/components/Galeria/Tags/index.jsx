import styled from 'styled-components';
import tags from './tags.json';

const TagsEstilizadas = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`;

const TituloEstelizados = styled.p`
    color: #d9d9d9;
    font-family: 'Gandhi Sans';
    font-size: 2.4rem;
    margin: .6rem;
`;

const ButoesEstilizados = styled.button`
    padding: 1rem 0.8rem;
    border-radius: 1rem;
    background: rgba(217, 217, 217, 0.3);
    color: #d9d9d9;

    &:hover {
        border: 0.2rem solid #c98cf1;
        background: rgba(217, 217, 217, 0.542);
    }
`;

const Tags = () => {
    return (
        <TagsEstilizadas>
            <TituloEstelizados>Busque por tags:</TituloEstelizados>
            {tags.map((tag) => (
                <ButoesEstilizados key={tag.id}>{tag.titulo}</ButoesEstilizados>
            ))}
        </TagsEstilizadas>
    );
};
export default Tags;
