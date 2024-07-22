import React, { Component } from 'react';
import propTypes from 'prop-types';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <h3>{message}</h3>;
  }
}

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;