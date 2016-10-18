import React, { Component} from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ""};
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    e.preventDefault();
    this.setState({ term: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();

    //we need to go fetch weather data
  }

  render() {
    return (
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input 
            placeholder="Find a five day forecast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-button">
            <button type="submit" className="btn btn-secondary">Submit</button> 
          </span>
        </form>
      );
  }
}