import React, {useState, useEffect} from "react";

const ClickCounter = () => {
    const button2Style = {...buttonStyle, ...{backgroundColor: 'red'}};
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
        <div>Click the below buttom to incriment the counter</div>
        <button style={buttonStyle} onClick={() => setCount(count+1)}>Click!

        </button>
        </div>
    );
}


export default ClickCounter;