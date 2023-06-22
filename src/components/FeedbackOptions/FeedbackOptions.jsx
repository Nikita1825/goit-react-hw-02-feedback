import React from 'react';
import css from "./feedback.module.css"
import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedbackClick }) {
  return (
    <ul className={css.listBtn}>
      {options.map(option => {
        return (
          <li key={option}>
            <button className={css.btn} type="button" onClick={() => onLeaveFeedbackClick(option)}>
              {option}{' '}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedbackClick: PropTypes.func.isRequired,
};