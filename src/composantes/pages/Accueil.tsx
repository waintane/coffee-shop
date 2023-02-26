import "./Accueil.scss"
import { Link } from "react-router-dom";

export default function Accueil(){
    return(
        <div className="Accueil">
            <div className="banniere">
                
                <div className="container">
                    <Link to="/contact"> <div className="description">Contact</div></Link>
                </div>
                <div className="container">
                    <Link to="/menu"> <div className="description">Menu</div></Link>
                </div>
                <div className="container">
                <Link to="/gallerie"> <div className="description">Gallerie</div></Link>
                </div>
            </div>

            <div className="a-propos">
                <div className="titre">
                    <h2>À propos</h2>
                </div>
                <div className="img"></div>
                <div className="texte">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                         invidunt ut labore et dolore magn
                    </p>
                    <p>  
                        a aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
                        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    </p>
                </div>
            </div>

            <div className="menu">
                <div className="titre">
                    <h2>Menu</h2>
                </div>
                <div className="img"></div>
                <div className="texte">
                    <p>
                    Lorem ipsum dolor sit amet, con  setetur sadipscing elitr, s  ed diam n onumy 
                    </p>
                    <p>
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed  diam voluptua. 
                    At vero eos et acc  usam    et
                    </p>
                </div>
                <Link to="/menu"> <div className="bouton"> Menu </div></Link>
            </div>
        </div>
    )
}