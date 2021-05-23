import React from 'react';
import './Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      method: this.props.method,
      body: ''
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handler(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          URL: <input name="url" value={this.state.url} onChange={this.handleChange} />
        </div>
        <div className="radio">
          
          <label>
            <input type="radio" name="method" value="get" checked={this.state.method === "get"} onChange={this.handleChange} />
            GET
          </label>
          
          <label>
            <input type="radio" name="method" value="post" checked={this.state.method === "post"} onChange={this.handleChange} />
            POST
          </label>

          <label>
            <input type="radio" name="method" value="put" checked={this.state.method === "put"} onChange={this.handleChange} />
            PUT
          </label>
          
          <label>
            <input type="radio" name="method" value="delete" checked={this.state.method === "delete"} onChange={this.handleChange} />
            DELETE
          </label>
        </div>
        
        <label>
          <textarea name="body" onChange={this.handleChange}></textarea>
        </label>
        <button class="catchEm">CATCH EM' ALL!</button>
      </form>
    );
  }
}

export default Form;