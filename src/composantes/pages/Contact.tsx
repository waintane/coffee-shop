import "./Contact.scss";
import Map from "../UI/Map";

export default function Contact(){
    return(
        <div className="Contact">
            <div className="banniere">
                <div> Contact </div>
            </div>
            <div className="titre">
                    <h2>Location</h2>
            </div>
            <section className="page-content">
                <div className="information">
                    <h3>Café gentile parc avenue</h3>
                    <div className="info-content">
                        <div>
                            <p>Adresse : ewlwp plwe</p>
                            <p>seefl speflspef l</p>
                        </div>
                        <p>Tel: 111-111-1111</p>
                    </div>
                </div>
                <div className="map">
                    <Map/>
                </div>
                <div className="horaire">
                    <h3>Heure d'ouverture</h3>
                    <ul>
                        <li>Lundi 8h-21h</li>
                        <li>Mardi 8h-21h</li>
                        <li>Mercredi 8h-21h</li>
                        <li>Jeudi 8h-21h</li>
                        <li>Vendredi 8h-21h</li>
                        <li>Samedi 8h-21h</li>
                        <li>Dimanche 8h-21h</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}