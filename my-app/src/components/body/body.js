import './body.css';
import React from 'react';

class Form extends React.Component {

  state = {
    urlInput : '',
    methodType: '',
    output: '',
  }

  goInput = (e) => {
    e.preventDefault()
    this.setState(
      { ...this.state, output: `${this.state.method} ${this.state.urlInput}`}
    )
  }

  handleChangeInput = (e) => {
    this.setState(
      { ...this.state, [e.target.name]: e.target.value }
    )
  }
  
    handleChangeMethod = (e) => {
    this.setState(
      { ...this.state.formValues, [e.target.name]: e.target.value }
    )
    console.log(e)
  }

  render() {
    return (
      <form onSubmit={this.goInput}>
        
        <div>
          URL: <input onChange={this.handleChangeInput} type="text" name="urlInput"/>
          <button>GO!</button>
        </div>
        <div className="radio">
          <label>
            <input onChange={this.handleChangeInput} type="radio" name="method" value="get" />
            GET
          </label>
          <label>
            <input onChange={this.handleChangeInput} type="radio" name="method" value="post" />
            POST
          </label>
          <label>
            <input onChange={this.handleChangeInput} type="radio" name="method" value="put" />
            PUT
          </label>
          <label>
            <input onChange={this.handleChangeInput} type="radio" name="method" value="delete" />
            DELETE
          </label>
        </div>

        <div className="results">
          <p>{this.state.output}</p>
        </div>

      </form>
    )
  }
}

export default Form 


// function Body() {
//   return (
//     <body>
//       <div>
//             <input type="text" />
//           </div>
//     </body>
//   )
// }

// export default Body;