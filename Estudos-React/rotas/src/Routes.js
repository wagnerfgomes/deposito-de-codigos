import Menu from 'components/Menu';
import Contato from 'pages/Contato';
import Erro404 from 'pages/Erro404';
import Home from 'pages/Home';
import PaginaPadrao from 'pages/PaginaPadrao';
import Post from 'pages/Post';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contato" element={<Contato />} />
                </Route>
                <Route path="*" element={<Erro404 />} />
                <Route path='posts/:id' element={<Post/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
