import "./Entete.scss";
import MenuBurger from "./MenuBurger";
import { Link } from "react-router-dom";

export default function Entete(){
    return(
        <div className="Entete">
            <MenuBurger/>
            <Link to="/coffee-shop"><h1>CAFÉ GENTILE</h1></Link>
        </div>
    )
}