import styles from "../Phone/Phone.module.scss"

export default function Phone(){
    return(
        <div className={styles.phone}>
            <a href="tel:+78142332211" className={styles["phone__link"]}>+7(814)-233-22-11</a>
            <button className={styles["phone__button"]}>Заказать обратный звонок</button>
        </div>
    )
}