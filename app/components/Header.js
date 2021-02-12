import React from 'react';

import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => (
  <header>
    <div className="d-flex justify-content-between">
      <p className="card-title">{title}</p>
      <Button text={showAdd ? 'close' : '+ Add'} onClick={onAdd} />
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  showAdd: PropTypes.bool,
};

export default Header;
