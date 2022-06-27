import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Woops. Something Went Wrong.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
