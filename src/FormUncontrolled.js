import { useState } from "react";

function FormUncontrolled() {
    let [items, setItems] = useState([]);

    const search = (ev) => {
        ev.preventDefault();
        let todo = ev.target.elements.todo.value;

        let newItems = [...items, todo];
        setItems(newItems);
    }

    return <div>
        <div>
            <form onSubmit={search}>
                <input name="todo" />
                <button type="submit">Add TODO</button>
            </form>    
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

export default FormUncontrolled;