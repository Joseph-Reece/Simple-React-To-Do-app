import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (
  <button className="btn btn-info" type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
