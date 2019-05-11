import * as React from 'react';

export default class SearchBar extends React.Component<{}> {
  constructor(props: {}){
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e: React.FormEvent<HTMLInputElement>) : void => {
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label>Distance</label>
        <input onChange={this.handleChange}></input>
      </form>
    );
  }
}