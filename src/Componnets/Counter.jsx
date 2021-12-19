import React, { useState } from "react";
import Button from "../Display_Components/Button";

function Counter(props) {

    const [count, setCount] = useState(0);
    function countUp() {
        setCount(count + 1);
    };
    function countDown() {
        setCount(count - 1);
    };
    function countZiro() {
        setCount(0);
    };
    return (
        <div>
            <Button onClick={countUp}>countUp</Button>
            <Button onClick={countDown}>countDown</Button>
            <Button onClick={countZiro}>countZiro</Button>
           <div> {count}</div>
        </div>
    )
}
export default Counter;