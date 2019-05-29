import React, { Component } from 'react'
import { Input } from 'antd';

class AddNote extends Component {
  state = {
    text: ''
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addNote(this.state);
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label></label>
          <Input placeholder="Add a new note..." type="text" onChange={this.handleChange} value={this.state.text} />
        </form>
      </div>
    )
  }
}

export default AddNote