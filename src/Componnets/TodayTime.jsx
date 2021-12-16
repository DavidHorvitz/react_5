import React ,{useState} from "react";
import Watch from "../Display_Components/Watch";

function TodayTime(){
    const [time ,setTime] = useState(Date.now());
    function getTime(){
        setTime(Date.now());
    }
    setInterval(getTime,1000);
    return(
       <Watch milliseconds={time}/>
    )
}
export default TodayTime;
