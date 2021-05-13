import React from 'react';

import HeaderTitle from './header/headerTitle.js'
import HeaderRadio from './header/headerRadio.js'

import Body from './body/body.js'

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
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
        </div>
        <HeaderRadio />
        <Body />
        <Footer />
      </>
    );
  }

}

export default App;