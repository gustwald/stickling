import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './CurrentUser.scss';
import { getCurrentUser } from '../../Selector';

const CurrentUser = ({ currentUser }) => {
  if (!currentUser) return null;
  return (
    <div className="CurrentUser">
      <h3 className={styles.currentUser}>{currentUser.first}</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

CurrentUser.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CurrentUser);
