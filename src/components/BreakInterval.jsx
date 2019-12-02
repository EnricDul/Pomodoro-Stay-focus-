import React from "react";

function BreakInterval(props) {

  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    }
    props.decreaseBreak();
  }

  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  }
  return (
    <section className="interval-container">
      <button onClick={decreaseCounter}>-</button>
      <p>{props.breakInterval}</p>
      <button onClick={increaseCounter}>+</button>
    </section>
  );
}


export default BreakInterval;