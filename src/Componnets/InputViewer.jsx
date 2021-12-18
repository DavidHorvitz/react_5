
import React, { useState } from 'react';
import Input from '../Display_Components/Input';

function InputViewer() {
    const [text, setText] = useState('');
    const [viewText, setViewText] = useState('');
    function changeHandler(e) {
        setText(e.target.value);
    };
    function clickHandler(e) {
        setViewText(text);
    };
    return (
        <div>
            <span>{viewText}</span>
            <input onChange={changeHandler} type="text" />
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
}
export default InputViewer;
