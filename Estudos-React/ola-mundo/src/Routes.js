import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Menu from './components/Menu';
import SobreMim from './pages/SobreMim';
import Inicio from './pages/Inicio';
import Rodape from 'components/Rodape';
import PaginaPadrao from 'components/PaginaPadrao';
import Post from 'pages/Post';
import NaoEncontrada from 'pages/NaoEncontrada';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Inicio />} />
                    <Route path="sobremim" element={<SobreMim />} />
                    
                </Route>
                <Route path="*" element={<NaoEncontrada/>} />
                <Route path='posts/:id' element={<Post/>}/>
            </Routes>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;
