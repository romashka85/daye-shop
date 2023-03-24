import * as React from 'react';
import "./check-box.css"

const Checkbox = ({ label, value, onChange }) => {	
	return (
	  <label className='checkbox-label'>
		<input type="checkbox" checked={value} onChange={onChange} className={value ? "checked" : ""}/>
		{label}
	  </label>
	);
  };

export default Checkbox;