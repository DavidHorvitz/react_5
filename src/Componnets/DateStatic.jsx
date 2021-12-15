import React from "react";
import Watch from "./Watch";

function DateStatic(){
    const date = new Date().toString();
    return(
        <div>You entered the site on that date  <Watch  milliseconds={date}/></div>
       
    );
}
export default DateStatic;