import React, { useState, useEffect } from 'react'

const Examples = () => {  
const [seconds, setSeconds] = useState(0);
const INCREASE = "Increace";
const DECREASE = "Decrease";
const [pageAttribute, setAttribute] = useState({type: "INCREASE"});
const toggle = () => {
	const p = pageAttribute;
	p.type = p.type === INCREASE ? DECREASE : INCREASE;
	setAttribute(p);
}

useEffect(()=> {
	const interval = setInterval(() => {
		setSeconds(seconds => seconds + 1)
	}, 1000);
	return () => {
		clearInterval(interval);
	  };
}, [])

const Users = [
    {
      id: '01',
      name: 'John Deo',
      email: 'john@gmail.com',
      phone: '202-555-0163'
    },
    {
      id: '02',
      name: 'Brad Pitt',
      email: 'fightclud@gmail.com',
      phone: '202-555-0106'
    },
  ];

	return (<>
	<div>This is timer clicking {seconds}</div>
	 <ul>
      {Users.map((data) => (
        <li key={data.id}> 
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <h>{data.phone}</h>
        </li>
      ))}
    </ul>
	<button onClick={() => toggle()}>{pageAttribute.type}</button>
	</>	  
	)  
}

export default Examples