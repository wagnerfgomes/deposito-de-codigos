import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegidtrada} from 'assets/marca_registrada.svg'

const Rodape = () =>{
    return(
        <footer className={styles.rodape}>
            <MarcaRegidtrada/>
            Desenvolvido por Wagner
        </footer>
    )
}
export default Rodape