import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {


  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='medium'>Next concert stats in ...</h1>
          <h1 className='x-large'>6 DAYS 14 HOURS 3 MINUTES</h1>
          <p className='lead'>
            An exclusive event for CENTURY21 Agents and friends.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              REGISTER FOR FREE
            </Link>
            {/* <Link to='/login' className='btn btn-light'>
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
