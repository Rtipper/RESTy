import React from 'react';
import './App.scss';


import axios from 'axios';

// HEADER
import Header from './components/header/header.js';
// import HeaderRadio from './header/headerRadio.js'

// BODY / FORM
import Form from './components/body/body.js';

// FOOTER
import Footer from './components/footer/footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlInput: '',
      method: '',
      search: '',
      headers: '',
      results: ''
    };
  }

  goInput = async (e) => {
    e.preventDefault();
    if (this.state.method === 'get' && this.state.urlInput) {
      this.setState(
        { ...this.state, search: `${this.state.method} ${this.state.urlInput}` }
      );
      await axios.get(this.state.urlInput)
        .then(res => {
          this.setState(
            { ...this.state, headers: res.headers, results: res.data.results }
          );
        });
    }
  }

  handleChangeInput = (e) => {
    this.setState(
      { ...this.state, [e.target.name]: e.target.value }
    );
  }

  //   handleChangeMethod = (e) => {
  //   this.setState(
  //     { ...this.state.formValues, [e.target.name]: e.target.value }
  //   )
  //   console.log(e)
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clicks: 0,
  //     words: "Search Results Here.."
  //   };
  // }

  // handleChangeInput = (e) => {
  //   let fieldName = e.target.name;
  //   let value = e.target.value;
  //   let formValues = { ...this.state.formValues, [fieldName]: value }
  //   this.setState({ formValues });

  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({ ...this.state, words: this.state.formValues.words })
  // }

  render() {
    return (
      <>
        <div className="my-app">
          <Header />
          <Form
            handleChange={this.handleChangeInput}
            goInput={this.goInput}
            headers={this.state.headers}
            search={this.state.search}
            results={this.state.results}
          />
          <Footer />
        </div>
      </>
    );
  }

}

export default App;