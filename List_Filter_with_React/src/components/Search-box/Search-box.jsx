import { Component } from "react";

class Searchbox extends Component {
  render() {
    return (
      <input
        className={this.props.Searchbox}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default Searchbox;
