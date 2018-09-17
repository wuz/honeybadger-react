// @flow

export const formatComponentStack = str => {
  const lines = str.split(/\s*\n\s*/g);
  let ret = "";
  for (let line = 0, len = lines.length; line < len; line++) {
    if (lines[line].length) ret += `${ret.length ? "\n" : ""}${lines[line]}`;
  }
  return ret;
};

import React, { Component } from "react";

class HoneybadgerReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null
    };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
    const { client, beforeNotify } = this.props;
    if (info && info.componentStack)
      info.componentStack = formatComponentStack(info.componentStack);
    if (beforeNotify) client.beforeNotify(beforeNotify);
    client.beforeNotify((notice) => {
      notice.stack = info.componentStack;
    }));
    client.notify(error);
    this.setState({error, info});
  }
  render() {
    const { FallbackComponent } = this.props;
    const { error } = this.state;
    if (error) {
      const { FallbackComponent } = this.props;
      if (FallbackComponent) return React.createElement(FallbackComponent, this.state);
      return null;
    }
    return this.props.children;
  }
}

export default HoneybadgerReact;
