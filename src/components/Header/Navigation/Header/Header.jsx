import Logo from "../Logo/Logo"
import Nav from "../Navigation/Navigation"
import styles from "./Header.module.scss"

export default function Header() {
    return (
      <header>
        <div className="container">
          <Logo />
          <Nav />
        </div>
      </header>
    )
}