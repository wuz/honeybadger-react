import React, { Component } from "react";
import { render } from "react-dom";
import HoneybadgerReact from "../../lib";
import Honeybadger from 'honeybadger-js';
import "./styles.css";

const API_KEY = "API_KEY_HERE";

const hb = Honeybadger.factory({
  apiKey: API_KEY,
  environment: "development",
  onerror: false
});

const FallbackComponent = () => <div>There was an error!</div>;

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = { doARenderError: false }
  }

  throwError () {
    try {
      // potentially buggy code goes here
      // for this example, we're just throwing an error explicitly, but you do not need this syntax in your try clause.
      throw new Error('Bad Thing!')
    } catch (e) {
      console.log('a handled error was sent to our dashboard.')
      hb.notify(e, 'Don’t worry - I handled it.')
    }
  }

  triggerRenderError () {
    this.setState({ doARenderError: true })
  }

  render () {
    return (
      <div>
        <h1>Use the buttons below to trigger errors!</h1>
        <p>
          <button onClick={this.throwError}>Handled error</button>
        </p>
        <p>
          <button onClick={() => this.triggerRenderError()}>Trigger a render error</button>
          {this.state.doARenderError
            ? <span>{ this.state.doARenderError.non.existent.property }</span>
            : null
          }
        </p>
      </div>
    )
  }
}

render(
  <HoneybadgerReact client={hb} FallbackComponent={FallbackComponent}>
    <Demo />
  </HoneybadgerReact>, 
document.getElementById("app"));
