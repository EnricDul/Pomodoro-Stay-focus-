import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0
    }

    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId
    })
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false
            });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true
            });

            this.props.toggleInterval(this.state.isSession);
          }
        }
        this.props.updateTimerMinute()
        this.setState({
          timerSecond: 59
        })
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1
          }
        })
        break;

    }
  }

  stop() {
    clearInterval(this.state.intervalId);
  }

  reset() {
    this.stop();
    this.props.resetTimer();
    this.setState({
      timerSecond: 0
    })
  }

  render() {
    return (
      <section className="timer-box">
        <section className="timer-container">
          <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
          <span class="timer">{this.props.timerMinute}</span>
          <span class="timer">:</span>
          <span class="timer">{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
        </section>
        <section className="timer-action">
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Refresh</button>
        </section>
      </section>
    )
  }
}

export default Timer;