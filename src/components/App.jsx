import React from "react";
import "../../scss/app.scss";
import BreakInterval from "./BreakInterval.jsx";
import SessionLength from "./SessionLength.jsx";
import Timer from "./Timer.jsx";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
    //Que fait cette fonction 34 : 42 min
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);

    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);

    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);

    this.onResetTimer = this.onResetTimer.bind(this);



  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 5
      }

    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 5

      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 5,
        timerMinute: prevState.sessionLength + 5
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 5,
        timerMinute: prevState.sessionLength - 5

      }
    })
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {

    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }


  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

  render() {
    return (
      <main>
        <BreakInterval breakInterval={this.state.breakLength}
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength} />
        <section className="interval-length-container">
          <SessionLength sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength} />
        </section>
        <Timer timerMinute={this.state.timerMinute}
          breakTimer={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer} />
      </main>

    )
  }
}

export default App;