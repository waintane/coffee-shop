import "./Map.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD81LuBeoVdChUSbLcgqwXU7yDQrVyVfd8"
    });

    if(!isLoaded){
        return <div>Loading...</div>
    }
    return <LaMap/>;
}

function LaMap(){
    return <GoogleMap zoom={15} center={{lat:45.486370, lng: -73.587608}} mapContainerClassName="la-map"></GoogleMap>
}