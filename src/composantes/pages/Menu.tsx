import "./Menu.scss";
import dataDejeuner from "../../data/menu/dejeuner.json";
import dataDiner from "../../data/menu/diner.json";
import dataSouper from "../../data/menu/souper.json";
import ItemMenu from "../UI/ItemMenu";
import React, {useState} from "react";

export default function Menu(){

    const [data, refreshData] = useState<any>([]);

    let menu = dataDejeuner;

    if(data === "dejeuner"){
        menu = dataDejeuner;
    }
    else if(data === "souper"){
        menu = dataSouper;
    }
    else if(data === "diner"){
        menu = dataDiner;
    }

    return(
        <div className="Menu">
            <div className="banniere">
                <div> Menu </div>
            </div>
            <div className="filter">
                <div className="bouton" onClick={() => refreshData("dejeuner")}>Déjeuner</div>
                <div className="bouton" onClick={() => refreshData("diner")}>Diner</div>
                <div className="bouton" onClick={() => refreshData("souper")}>Souper</div>
            </div>

            <div className="contenue">
                {menu.map(e => <ItemMenu
                key = {e.id}
                nom = {e.nom}
                prix = {e.prix}
                description = {e.description}
                />)}
            </div>
        </div>
    )
}