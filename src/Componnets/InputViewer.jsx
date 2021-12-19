
import React, { useState } from 'react';
import Input from '../Display_Components/Input';
import Button from '../Display_Components/Button';

function InputViewer() {
    const [text, setText] = useState('');
    const [viewText, setViewText] = useState('');
    function changeHandler(e) {
        setText(e.target.value);
    };
    function clickHandler(e) {
        setViewText(text);
    };
    function clearHandler(e) {
        setViewText();
    }
    return (
        <div>
            <div>{viewText}</div>
            <Input onChange={changeHandler} type="text" />
            <Button onClick={clickHandler}>Click me</Button>
            <button onClick={clearHandler}>Clear div</button>
        </div>
    );
}
export default InputViewer;
