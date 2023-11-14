import { menuItems } from "@/data/menuItems"
import styles from "./Navigation.module.scss"
import Image from "next/image"

export default function Nav() {
    return(
          <ul className={styles.nav}>
            {
            menuItems.map(item => <li cl className={styles.items}><a href={item.href} className={styles.link}>{item.title}</a></li>)
            }
          </ul>  
    )
}

{/* <li>
<a href="#" className="">Home</a></li>
<li><a href="#" >Contact</a></li>
<li><a href="#" >About</a></li> */}