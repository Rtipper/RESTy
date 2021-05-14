import React from 'react';

import './App.css';

// HEADERS
import Header from './header/header.js'
// import HeaderRadio from './header/headerRadio.js'

// BODY
// import Body from './body/body.js'

// FOOTER
import Footer from './footer/footer.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      words: "Search Results Here.."
    };
  }

  handleChangeInput = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    let formValues = { ...this.state.formValues, [fieldName]: value}
    this.setState( {formValues} );

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( {...this.state, words: this.state.formValues.words} )
  }

  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" id="searchbox" name="words" onChange={this.handleChangeInput} />
          <button>Go!</button>
          </div>
          <div>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="stuff"  value="get" />
              <span>GET</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="stuff" value="post" />
              <span>POST</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="stuff" value="put" />
              <span>PUT</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="stuff" value="delete" />
              <span>DELETE</span>
            </label>
          </div>

        </form>
        <h2>{this.state.words}</h2>

        <Footer />
      </>
    );
  }

}

export default App;