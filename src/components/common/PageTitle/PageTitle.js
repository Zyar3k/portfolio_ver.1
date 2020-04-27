import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.scss';

const PageTitle = ({ children }) => (
  <div className="page-title">
    {children}
  </div>
);

PageTitle.propTypes = {
  children: PropTypes.string,
};

export default PageTitle;