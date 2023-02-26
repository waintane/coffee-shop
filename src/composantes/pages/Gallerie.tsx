import "./Gallerie.scss";

export default function Gallerie(){
    return(
        <div className="Gallerie">
            <div className="banniere">
                <div> Gallerie </div>
            </div>

            <div className="titre">
                    <h2>Gallerie</h2>
            </div>

            <div className="img">
                <div>
                    <img src= {require('../../img/a-propos.jpg')} alt="a-propos" />
                </div>
                <div>
                    <img src= {require('../../img/gallerie3.jpg')} alt="a-propos" />
                </div>
                <div>
                    <img src= {require('../../img/gallerie4.jpg')} alt="a-propos" />
                </div>
                <div>
                    <img src= {require('../../img/gallerie5.jpg')} alt="a-propos" />
                </div>
                <div>
                    <img src= {require('../../img/gallerie6.jpg')} alt="a-propos" />
                </div>
            </div>
        </div>
    )
}