import React from "react";
import Watch from "../Display_Components/Watch";

function DateStatic(){
    const date = new Date().toString();
    return(
        <span>You entered the site on that date <Watch  milliseconds={date}/></span>
       
    );
}
export default DateStatic;