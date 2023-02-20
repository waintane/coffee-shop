import "./MenuBurger.scss";
import { Link } from "react-router-dom";

export default function MenuBurger(){
    return(
        <div>
            <ul>
                <Link to="/coffee-shop"><li>Accueil</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/Menu"><li>Menu</li></Link>
                <Link to="/gallerie"><li>Gallerie</li></Link>
            </ul>
        </div>
    )
}