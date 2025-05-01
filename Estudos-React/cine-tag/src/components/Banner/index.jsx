import styles from './Banner.module.css'
const Banner = ({imagem}) =>{
    return(
        <div className={styles.banner}>
            <img className={styles.imagem} src={`imagens/banner-${imagem}.png`} alt="" />
        </div>
    )
}
export default Banner