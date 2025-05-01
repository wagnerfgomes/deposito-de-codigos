import 'bootstrap/dist/css/bootstrap.min.css';

export function Card(props){
    return(
        <div className="container-sm bg-dark p-4">
            <img src={props.url} alt={`Foto de perfil de ${props.nome}`} />
            <h1 className='text-info'>{props.nome}</h1>
            <p className='text-light'>{props.texto}</p>
        </div>
        
    )
}