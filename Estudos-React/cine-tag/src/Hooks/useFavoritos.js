import { useContext } from 'react';
import { FavoritosContext } from '../Context/FavoritosContext';

export const useFavoritos = () => {
    const {favoritos, setFavoritos} = useContext(FavoritosContext);

    function favoritar(novoFavorito) {
        const favoritosRepetidos = favoritos.some(
            (item) => item.id === novoFavorito.id
        );
        let novaLista = [...favoritos];
       
        if (!favoritosRepetidos) {
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavoritos(novaLista);
    }

    return { favoritos, favoritar };
};
