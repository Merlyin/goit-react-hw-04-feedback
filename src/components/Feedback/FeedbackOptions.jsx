import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    render() {
        const {options, onLeaveFeedback} = this.props;
        return (
            <div className={css.buttons}>
                {options.map(option => (
                    <button
                        className={css.button}
                        key={option}
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                ))}
            </div>
        )
    }
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;