import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    fontcolor: "black",
    bold: false,
    italic: false,
    underline: false
  };
  ChangeFontColor = color => {
    this.setState({ fontcolor: color });
  };
  ChangeFontStyle = style => {
    let statevalue = !this.state[style];
    this.setState({ [style]: statevalue });
  };
  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
          onClick={() => this.ChangeFontStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.ChangeFontColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.fontcolor,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
