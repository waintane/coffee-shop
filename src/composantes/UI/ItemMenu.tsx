import "./ItemMenu.scss";

interface IPROPS{
    nom:string,
    prix:Number,
    description:String
}

export default function ItemMenu({nom,prix,description}:IPROPS){
    return(
        <div className="ItemMenu">
            <div className="nom">
                <h4> {nom} </h4>
                <p> {prix.toString() + "$"} </p>
            </div>
            <p className="description"> {description} </p>
        </div>
    )
}