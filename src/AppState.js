import { useState } from 'react';

function AppState() {
    let [isExpanded, setIsExpanded] = useState(false);

    const toggleIsExpanded = () => {
        let newIsExpanded = !isExpanded;
        setIsExpanded(newIsExpanded);
    }

    let collapsed = <span>️➡️</span>;
    let expanded = <span>⬇️</span>;

    let icon = collapsed;
    if (isExpanded) {
        icon = expanded;
    }
    
    return <div>
        <h1>App State</h1>
        <ul>
            <li onClick={toggleIsExpanded}>{icon} History</li>
            {isExpanded && <ul>
                <li>Early Efforts</li>
                <li>2000s</li>
                <li>2010-present</li>
            </ul>}
        </ul>
    </div>
}

export default AppState;