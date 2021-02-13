import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import PizzaSize from "./PizzaSize";
import Toppings from './Checkbox'
import "./form.css";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Your name needs to be more than 2 characters long")
    .required("name needed"),

  'small 10" pizza': yup.string(),
  'medium 14" pizza': yup.string(),
  'large 16" pizza': yup.string(),
  'xlarge 18" pizza': yup.string(),
  special: yup.string(),

  terms: yup.boolean().oneOf([true], "please validate"),
});
export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    'small 10" pizza': yup.boolean().oneOf([true]),
    'medium 14" pizza': yup.boolean().oneOf([true]),
    'large 16" pizza': yup.boolean().oneOf([true]),
    'xlarge 18" pizza': yup.boolean().oneOf([true]),
    Toppings:'',
    // "Tomato Sauce": yup.boolean().oneOf([true]),
    // Chicken: yup.boolean().oneOf([true]),
    // Bacon: yup.boolean().oneOf([true]),
    // Steak: yup.boolean().oneOf([true]),
    // Cheese: yup.boolean().oneOf([true]),
    // Peppers: yup.boolean().oneOf([true]),
    // Pepperoni: yup.boolean().oneOf([true]),
    // special: "",
    // terms: false,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(valid);
    });
  }, [formState]);

  const [errState, setErrState] = useState({
    name: "",
    pizzaSize: "",
    terms: "",
  });

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("pizza submitted");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  // function pizzaDropdown() {
  //   return (
  //     <select>
  //       <option value='small 10" pizza'>Small 10" pizza</option>
  //       <option value='medium 14" pizza'>medium 14" pizza</option>
  //       <option value='large 16" pizza'>large 16" pizza</option>
  //       <option value='xlarge 10" pizza'>xlarge 18" pizza</option>
  //     </select>
  //   );
  // }

  return (
    <form onSubmit={formSubmit}>
      <ul>
        <label htmlFor="name">
          <div className="name-input">
            <input
              id="name"
              type="name"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={inputChange}
            />
          </div>
          {errState.name.length > 2 ? (
            <p ClassName="error">{errState.name}</p>
          ) : null}
        </label>

        <label htmlFor="pizzaDropdown">
          <PizzaSize />
        </label>
        <label htmlFor="pizzaBoxs">
          <Toppings />
        </label>
        <label htmlFor="special request">
          <input
            type="text"
            id="special"
            name="special"
            placeholder="need to ask a request?"
            value={formState.special}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="validate">
          <div>
            Are you Human?
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formState.terms}
              onChange={inputChange}
            />{" "}
          </div>
          {errState.terms.length > 1 ? (
            <p className="error">{errState.terms}</p>
          ) : null}
        </label>
        <button disabled={!buttonDisabled}>Place Order</button>
      </ul>
    </form>
  );
}
