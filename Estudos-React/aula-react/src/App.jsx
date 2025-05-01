import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
    const [login, setLogin] = useState(false);
    
    function handleLogin(evento) {
        evento.preventDefault();
        setLogin(!login);
    }
    
    return (
        <div className="App">
          {login ? <Home handleLogin={handleLogin} /> : <Login handleLogin={handleLogin} />}
        </div>
    );
}

export default App;
