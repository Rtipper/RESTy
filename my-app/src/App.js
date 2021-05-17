import React from 'react';

import './App.css';

// HEADERS
import Header from './components/header/header.js'
// import HeaderRadio from './header/headerRadio.js'

// BODY
import Form from './components/body/body.js'

// FOOTER
import Footer from './components/footer/footer.js';


class App extends React.Component {

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
          <Form />
          <Footer />
        </div>
      </>
    );
  }

}

export default App;