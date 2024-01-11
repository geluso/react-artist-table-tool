// Create a new file called ControlledTweetInput.js
// create a piece of state called `text` with useState
// return an input with `value={text}`
// display char count {text.length} / 140 below the text input
// prevent state from being updated if someone enters more than 140 chars
// Place <ControlledTweetInput /> inside App.js to run it.

import './App.css';
import { useState } from 'react';

function ControlledTweetInput() {
    let [text, setText] = useState('');

    const handleChange = (ev) => {
        let value = ev.target.value;
        if (value.length <= 140) {
            setText(value.toUpperCase());
        }
    }

    return (
        <div>
            <div>
                <input value={text} onChange={handleChange} />
                {text.length}/140
            </div>
        </div>
    );
}

export default ControlledTweetInput;
