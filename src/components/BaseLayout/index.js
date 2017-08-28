import React, { Component } from 'react';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
