import React, { useState, useEffect } from "react";

function PizzaSize() {

 
    const [items] = useState([
        {
            label: 'small 10" pizza',
            value: 'Small 10" pizza'
        },
        {
            label: 'medium 14" pizza',
            value: 'medium 14 pizza'
        },
        {
            label: 'large 16" pizza',
            value: 'large 16" pizza'
        },
        {
            label: 'xlarge 10" pizza',
            value:'xlarge 18" pizza'
        }
    ])
  return (
 <select>
  {items.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>
  );
}

export default PizzaSize



    
          {
            /* <select>
            <option
              id="pizzaSize"
              type="dropDown"
              value={'small'}
              onChange={inputChange}
            >
              Small 10" pizza
            </option>
            <option
              id="pizzaSize"
              type="dropDown"
              value={formState.pizzaSize}
              onChange={inputChange}
            >
              medium 14" pizza
            </option>
            <option
              id="pizzaSize"
              type="dropDown"
              value={formState.pizzaSize}
              onChange={inputChange}
            >
              large 16" pizza
            </option>
            <option
              id="pizzaSize"
              type="dropDown"
              value={formState.pizzaSize}
              onChange={inputChange}
            >
              xlarge 18" pizza
            </option>
          </select> */
          }