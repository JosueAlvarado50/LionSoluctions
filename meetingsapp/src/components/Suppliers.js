import React, { useRef, useState } from "react";
import classes from "./Suppliers.module.css";
import Select from "react-select";
const horario = [
  { value: "7", disp: true },
  { value: "8", disp: true },
  { value: "9", disp: true },
  { value: "10", disp: true },
  { value: "11", disp: true },
  { value: "12", disp: true },
  { value: "13", disp: true },
  { value: "14", disp: true },
];
const options = [
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
];

const Suppliers = () => {
  const [enteredInitalDate, setEnteredInitalDate] = useState("");
  const [enteredFinalDate, setEnteredFinalDate] = useState("");

  const initialDateInput = useRef("");
  const initialDateInputHandler = (event) => {
    const value = event.value;
    console.log(value);
    setEnteredInitalDate(value);
    console.log(enteredInitalDate);
    validarHoraInicial(enteredFinalDate);
    for (let index = 0; index < horario.length; index++) {
      const element = horario[index];
      console.log(element);
      if (element.value === value) {
        if (element.disp === true) {
          console.log("Hora Disponible");
          horario.map(function (dato) {
            if (dato.value === value) {
              dato.disp = false;
            }
            return dato;
          });
        } else {
          console.log("No se encuentra Disponible");
          return;
        }
      }
    }
    console.log(horario);
  };
  const finalDateInput = useRef("");
  const finallDateInputHandler = (event) => {
    const value = event.value;
    console.log(value);
    setEnteredFinalDate(value);
    console.log(enteredFinalDate);
  };
  const validarHoraInicial = (enteredInitalDate) => {
    for (let index = 0; index < horario.length; index++) {
      const element = horario[index];
      if (element.value === enteredInitalDate) {
        if (element.disp === true) {
          console.log("Hora Disponible");
        } else {
          console.log("No se encuentra Disponible");
          return;
        }
      }
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredInitialvalue = initialDateInput.current.value;
    console.log(enteredInitialvalue);
    const enteredFinalValue = finalDateInput.current.value;
    console.log(enteredFinalValue);
  };

  return (
    <div className={classes.suppliersContainer}>
      <form onSubmit={submitFormHandler} className={classes.form}>
        <div className={classes.selectors}>
          <label>Hora de Inicio</label>
          <Select
            options={options}
            onChange={initialDateInputHandler}
            ref={initialDateInput}
          ></Select>
          <label>{enteredInitalDate} </label>
        </div>
        <div className={classes.selectors}>
          <label>Hora de finalizacion</label>
          <Select
            options={options}
            ref={finalDateInput}
            onChange={finallDateInputHandler}
          ></Select>
          <label>{enteredFinalDate} </label>
        </div>
      </form>
    </div>
  );
};
export default Suppliers;
