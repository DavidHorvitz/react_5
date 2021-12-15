import React from "react";

function Watch(props) {
    const date = new Date(props.milliseconds);
    const options = { weekday: 'long', hour: 'numeric',
     minute: 'numeric', second: 'numeric' };

    const time = date.toLocaleDateString('he-IL', options)
    return(
        <div>{time}</div>
    )

}
export default Watch;