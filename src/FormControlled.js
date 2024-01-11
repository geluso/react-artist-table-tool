import { useState } from "react";

function FormControlled() {
    let [item, setItem] = useState('');
    let [items, setItems] = useState([]);

    const handleChange = (ev) => {
        let value = ev.target.value;
        if (!value.includes('e')) {
            setItem(value);
        }
    }

    const search = (ev) => {
        ev.preventDefault();
        let todo = ev.target.elements.todo.value;

        let newItems = [...items, todo];
        setItem('');
        setItems(newItems);
    }

    return <div>
        <div>
            <form onSubmit={search}>
                <input name="todo" value={item} onChange={handleChange} />
                <button type="submit">Add TODO</button>
            </form>    
        </div>

        <div>
            Adding: {item}
        </div>

        <div>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div> 
    </div>
}

export default FormControlled;