import "./MenuBurger.scss";
import { Link } from "react-router-dom";

export default function MenuBurger(){

    let actif = false;

    function displayMenu(){
        const menu = document.querySelector(".menu");
        const animBurger = document.querySelector(".burger div:nth-of-type(2)");
        const map = document.querySelector(".la-map");
        if(animBurger && menu && !actif){
            menu.classList.add("display");
            animBurger.classList.add("actif");
            map? map.classList.add("remove"): console.log("");
            actif = true;
        }
        else if(animBurger && menu && actif){
            menu.classList.remove("display");
            animBurger.classList.remove("actif");
            map? map.classList.remove("remove"): console.log("");
            actif = false;
        }
    }

    return(
        <div className="MenuBurger">
            <div className="burger" onClick={displayMenu}>
                <div></div>
                <div></div>
            </div>
            <ul className="menu">
                <Link to="/coffee-shop"><li onClick={displayMenu}>Accueil</li></Link>
                <Link to="/contact"><li onClick={displayMenu}>Contact</li></Link>
                <Link to="/Menu"><li onClick={displayMenu}>Menu</li></Link>
                <Link to="/gallerie"><li onClick={displayMenu}>Gallerie</li></Link>
            </ul>
        </div>
    )
}