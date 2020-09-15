import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";

const ingredients = yup.object().shape({
  "Tomato Sauce": yup.string(),
  Chicken: yup.string(),
  Bacon: yup.string(),
  Steak: yup.string(),
  Cheese: yup.string(),
  Peppers: yup.string(),
  Pepperoni: yup.string(),
});



export default function Toppings() {
  const [formState, setFormState] = useState({
    ing:''
  });
  //   const [buttonDisabled, setButtonDisabled] = useState(true);
  //   useEffect(() => {
  //     formSchema.isValid(formState).then((valid) => {
  //       setButtonDisabled(valid);
  //     });
  //   }, [formState]);

  const [errState, setErrState] = useState({
ing:''
  });

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(ingredients, e.target.name)
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
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const [ing] = useState([
    {
      label: "Tomato Sauce",
      value: "Sauce",
      id: "sauce-Tomato",
    },
    {
      label: "Chicken",
      value: "Meat",
      id: "meat-Chicken",
    },
    {
      label: "Bacon",
      value: "Meat ",
      id: "meat-Bacon",
    },
    {
      label: "Steak",
      value: "Meat",
      id: "meat-Steak",
    },
    {
      label: "Cheese",
      value: "Toppings",
      id: "ing-Cheese",
    },
    {
      label: "Peppers",
      value: "Toppings",
      id: "ing-Peppers",
    },
    {
      label: "Pepperoni",
      value: "Toppings",
      id: "ing-Pepperoni",
    },
  ]);
  return (
    <div>
      {ing.map(({ label, value }) => (
        <div key={value} value={value} onChange={inputChange}>
          {label}
          <input type="checkbox" id="ing" name={label} onSubmit={inputChange} />
        </div>
      ))}
      {/* <div key={"Sauce"} value={"Sauce"} onChange={inputChange}>
        {"Tomato Sauce"}
        <input type="checkbox" id="sauce-Tomato" name={"Tomato Sauce"} />
      </div>{" "}
      <div key={"Chicken"} value={"Meat"} onChange={inputChange}>
        {"Chicken"}
        <input type="checkbox" id="toppings-Chicken" name={"Chicken"} />
      </div>{" "} */}
    </div>
  );
}

