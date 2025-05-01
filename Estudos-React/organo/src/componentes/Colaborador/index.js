import './Colaborador.css'

export function Colaborador(props){
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: props.cor}}>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}