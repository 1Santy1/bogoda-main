import Logo from "../Logo/Logo"
import Nav from "../Navigation/Navigation"
import Phone from "../Phone/Phone"
import styles from "./Header.module.scss"

export default function Header() {
    return (
      <header>
        <div className={`container ${styles.headerWrapper}`}>
          <Logo />
          <Nav />
          <Phone/>
        </div>
      </header>
    )
}