import React, { useState } from "react";

import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  'small 10" pizza': yup.boolean().oneOf([true]),
  'medium 14" pizza': yup.boolean().oneOf([true]),
  'large 16" pizza': yup.boolean().oneOf([true]),
  'xlarge 18" pizza': yup.boolean().oneOf([true]),
});


function PizzaSize() {

  const [formState, setFormState] = useState({
items:''
  });

 const [errState, setErrState] = useState({
   items:''
 });

 const validate = (e) => {
   let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
   yup
     .reach(formSchema, e.target.name)
     .validate(value)
     .then((valid) => {
       setErrState({
         ...errState,
         [e.target.name]: "",
       });
     })
     .catch((err) => {
       setErrState({
         ...errState,
         [e.target.name]: err.errors[0],
       });
     });
 };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "option" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const [pizzaSize] = useState([
    {
      label: 'small 10 pizza',
      value: 'Small 10 pizza',
    },
    {
      label: 'medium 14 pizza',
      value: "medium 14 pizza",
    },
    {
      label: 'large 16 pizza',
      value: 'large 16 pizza',
    },
    {
      label: 'xlarge 18 pizza',
      value: 'xlarge 18 pizza',
    },
  ]);
  return (
    <select onChange={inputChange}>
      {pizzaSize.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default PizzaSize;

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
