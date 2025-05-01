import dados from 'json/db.json';
import { createContext } from 'react';

export const DadosContext = createContext();

DadosContext.displayName = 'Dados';

export function DadosProvider({ children }) {
    return (
        <DadosContext.Provider value={dados}>
            {children}
        </DadosContext.Provider>
    );
}
