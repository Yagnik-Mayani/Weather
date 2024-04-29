import { useState } from "react";
import Bottom from "./Bottom.jsx";
import Weather from "./Weather.jsx";

export default function FullWeather() {
    let[infor,newinformation]=useState({
        city:"",
        temp:"",
        humidity:"",
        tempMin:"",
        tempMax:"",
        feelsLike:"",
    });

    let updateinfo = (newinfo) => {
        newinformation(newinfo);
    }
    return( 
        <> 
    <Weather update={updateinfo}/>
    <Bottom info={infor}/>
    </>
    );
}