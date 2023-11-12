import { menuItems } from "@/data/menuItems"
import styles from "./Navigation.module.scss"
import Image from "next/image"

export default function Nav() {
    return(
        <ul className="headerRight">
          {
            menuItems.map(item => <li><a href={item.href}>{item.title}</a></li>)
          }
          {/* <li>
            <a href="#" className="">Home</a></li>
            <li><a href="#" >Contact</a></li>
            <li><a href="#" >About</a></li> */}
        </ul>
    )
}