import React, { useState, useEffect} from 'react';

const GadgetList = (props) => {
  
  const [count, setCount] = useState(0);
  useEffect(() => { document.title = '${count} clicks counted'})
  

  return (
    <main>
      <h2>Headphones</h2>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {props.items.map((item) => (
          <li
            key={item.id}
            style={{borderBottom: "1px solid black", paddingBottom: "0.2"}}>
            <h3 style={{ marginBottom: "0.2em "}}>{item.title}</h3>
            <span style={{ color: "red", fontWeight: "bold" }}>
              £{item.price}
            </span>
          </li>
        ))}
      </ul>
      <div style={{ color: "purple"}}> Current count: {count}</div>
      <button onClick={() => setCount(count +1)}>Click</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <button onClick={() => setCount(Math.max(count -1,0))}>UnClick</button>
    </main>
  );
}

export default GadgetList;
