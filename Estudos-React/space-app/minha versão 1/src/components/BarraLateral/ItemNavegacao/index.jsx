import styled from 'styled-components';
const ItemEstilizado = styled.li`
    color: ${(props) => (props.$ativo ? '#7B78E5' : '#d9d9d9')};
    font-family: ${(props) => (props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular')};
    font-size: 2.4rem;
    display: inline-flex;
    gap: 1.8rem;
    white-space: nowrap;
    cursor: pointer;

    img {
        width: 3.2rem;
        height: 3.2rem;
    }
`;
const ItemNavegacao = ({
    iconeAtivo,
    iconeInativo,
    ativo = false,
    children,
}) => {
    return (
        <ItemEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemEstilizado>
    );
};
export default ItemNavegacao;
