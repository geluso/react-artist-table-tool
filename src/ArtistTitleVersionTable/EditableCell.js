import { useState } from "react";
import { ARTIST_DATA_SCHEMA } from "./artist_data";

function EditableCell({toggle, data, property, editCells, save}) {
    let editId = data.Id + "-" + property;
    let value = data[property];
    let [editValue, setEditValue] = useState(value);

    const handleChange = (ev) => {
        let newEditValue = ev.target.value;
        setEditValue(newEditValue);
    }

    const handleSave = () => {
        save(data.Id, property, editValue);
        toggle(editId);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    if (!editCells.has(editId)) {
        return <td onClick={() => toggle(editId)}>
            {value}
        </td>
    }

    const renderEditableType = () => {
        if (ARTIST_DATA_SCHEMA[property].type === "string") {
            return <input value={editValue} onChange={handleChange} />
        } else if (ARTIST_DATA_SCHEMA[property].type === "select") {
            return <select>
                {ARTIST_DATA_SCHEMA[property].options.map((option, index) => {
                    return <option>{option}</option>
                })}
            </select>
        } else if (ARTIST_DATA_SCHEMA[property].type === "multi-select") {
            return <div>
                {ARTIST_DATA_SCHEMA[property].options.map((option, index) => {
                    return <label>
                        <input type="checkbox" />
                        {option}
                    </label>
                })}
            </div>
        }
    }

    return <td>
        <form onSubmit={() => handleSubmit()}>
            {renderEditableType()}
            <button onClick={handleSave}>save</button>
            <button onClick={() => toggle(editId)}>cancel</button>
        </form>
    </td>
}

export default EditableCell;