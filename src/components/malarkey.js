import React from 'react';
import malarkey from 'malarkey';

const options = {
  typeSpeed: 50,
  deleteSpeed: 50,
  pauseDuration: 5000,
  repeat: true
};

class Malarkey extends React.Component {
  state = {
    text: ''
  };

  componentDidMount() {
    malarkey(text => {
      this.setState({
        text: text
      });
    }, options)
      .type('a Freelance')
      .pause()
      .delete()
      .type('a Software engineer')
      .pause()
      .delete()
      .type('a Javascript Enthusiast')
      .pause()
      .delete();
  }

  render() {
    return <span className="malarkey">{this.state.text}</span>;
  }
}

export default Malarkey;
