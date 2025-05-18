import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: 0,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.key === "ArrowRight" && this.state.renderBall) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  }

  handleStartClick() {
    this.setState({ renderBall: true });
  }

  render() {
    return (
      <div className="playground">
        {!this.state.renderBall ? (
          <button className="start" onClick={this.handleStartClick}>
            Start
          </button>
        ) : (
          <div
            className="ball"
            style={{
              left: `${this.state.ballPosition}px`,
              position: "absolute",
              top: "100px",
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default App;
