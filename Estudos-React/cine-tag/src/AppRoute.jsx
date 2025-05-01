import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import PaginaPadrao from 'pages/PaginaPadrao';
import Player from 'pages/Player';
import { BrowserRouter, Route, Routes } from 'react-router';
import FavoritosProvider from 'Context/FavoritosContext';
import { DadosProvider } from 'Context/DadosContext';
import Erro404 from 'pages/Erro404';

function AppRoute() {
    return (
        <DadosProvider>
            <FavoritosProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaPadrao />}>
                            <Route index element={<Inicio />} />
                            <Route path="/favoritos" element={<Favoritos />} />
                            <Route path="player/:id" element={<Player />} />
                            <Route path="*" element={<Erro404 />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </FavoritosProvider>
        </DadosProvider>
    );
}

export default AppRoute;
