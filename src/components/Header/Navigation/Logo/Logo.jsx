import Link from "next/link"
import styles from "./Logo.module.scss"
import Image from "next/image"

export default function Logo(){
    return(
        <Link href="/"><Image width={171} height={66} src="/img/Logo.png" alt="Logo"/></Link>
    )
}