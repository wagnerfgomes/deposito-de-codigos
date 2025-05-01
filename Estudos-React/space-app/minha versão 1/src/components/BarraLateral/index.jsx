import styled from 'styled-components';
import ItemNavegacao from './ItemNavegacao';

const ListaEstilizada = styled.ul`
    display: flex;
    flex-direction: column;
    width: 21.2rem;
    gap: 3rem;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        ativo
                        iconeAtivo={'/icones/home-ativo.png'}
                        iconeInativo={'/icones/home-inativo.png'}
                    >
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/mais-vistas-ativo.png'}
                        iconeInativo={'/icones/mais-vistas-inativo.png'}
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/mais-curtidas-ativo.png'}
                        iconeInativo={'/icones/mais-curtidas-inativo.png'}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/novas-ativo.png'}
                        iconeInativo={'/icones/novas-inativo.png'}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/surpreenda-me-ativo.png'}
                        iconeInativo={'/icones/surpreenda-me-inativo.png'}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    );
};
export default BarraLateral;
