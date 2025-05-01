import { Colaborador } from '../Colaborador';
import './Times.css';

export default function Times(props) {
    return (
        (props.colaboradores.length > 0) ? <section
            className="time"
            style={{ backgroundColor: props.corSecundaria }}
        >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nomeTime}</h3>

            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        key = {colaborador.Nome}
                        cor = {props.corPrimaria}
                        imagem={colaborador.Imagem}
                        nome={colaborador.Nome}
                        cargo={colaborador.Cargo}
                    />
                ))}
            </div>
        </section> : ''
    );
}
