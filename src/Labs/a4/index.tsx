import React, { useState } from "react";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingOnEvent";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
      const [counter, setCounter] = useState(123);
  return(
    <>
      <h1>Assignment 4</h1>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <ChildStateComponent
        counter={counter}
        setCounter={setCounter} />
      <ReduxExamples/>
    </>
  );
};
export default Assignment4;