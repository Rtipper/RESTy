import React from 'react';

import HeaderTitle from './header/headerTitle.js'
import HeaderRadio from './header/headerRadio.js'

import Footer from './footer/footer.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      words: "Type Something..."
    };
  }

  render() {
    return (
      <>
        <HeaderTitle />
        <div>
          {this.state.words}
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          {this.state.clicks}

          <button onClick={this.handleIncrement}>+</button>
        </div>
        <HeaderRadio />
        <Footer />
      </>
    );
  }

}

export default App;