import React from "react";

class Result extends React.Component {
  handleClick = () => {
    document.location.reload();
  };
  render() {
    return (
      <div class="wintext-container" id="restartwindow">
        <h1 id="wintext"></h1>
        <button class="wintext-button" onClick={this.handleClick}>
          <h5>Restart Game!</h5>
        </button>
      </div>
    );
  }
}

export default Result;
