import { Dai_Banna_SIL } from "next/font/google";
import styles from "./page.module.scss";
import Nav from "@/components/Header/Navigation/Navigation/Navigation";

export default function Home() {
  return (
    <div className="wrapper">  
      <div className="content">
        <h1>Guider</h1>
        <h3>About company</h3>
        <p>Основана в 2006 году</p>
      </div>
    </div>
  );
}
