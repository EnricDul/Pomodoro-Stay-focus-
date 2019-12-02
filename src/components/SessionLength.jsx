import React from "react";

function SessionLength(props) {

  function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }

  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  return (
    <section className="interval-container">
      <button onClick={decreaseSession}>-</button>
      <p>{props.sessionLength}</p>
      <button onClick={increaseSession}>+</button>
    </section>
  );
}


export default SessionLength;