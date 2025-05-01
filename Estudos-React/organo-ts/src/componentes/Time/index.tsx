import { IColaborador } from '../../compartilhado/interface/IColaborador';
import Colaborador from '../Colaborador/index';
import './Time.css';

interface TimeProps {
    nome: string;
    colaboradores: IColaborador[];
    corPrimaria: string;
    corSecundaria: string;
}

const Time = ({
    nome,
    colaboradores,
    corPrimaria,
    corSecundaria,
}: TimeProps) => {
    const css = { backgroundColor: corSecundaria };

    return colaboradores.length > 0 ? (
        <section className="time" style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador) => (
                    <Colaborador
                        corDeFundo={corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        data={colaborador.data}
                    />
                ))}
            </div>
        </section>
    ) : (
        <></>
    );
};

export default Time;
