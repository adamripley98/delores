import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions/sidebarActions';
import NavLinks from './NavLinks';

class Nav extends Component {
  render() {
    return (
      <div id="nav-wrapper">
        <nav id="nav">
          <h4 className="title">
            Delores
          </h4>

          <div id="toggle" className={this.props.active ? 'active' : ''} onClick={this.props.toggleSidebar}>
            <span className="bar" id="first" />
            <span className="bar" id="second" />
            <span className="bar" id="third" />
          </div>

          <NavLinks />
        </nav>
      </div>
    );
  }
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sidebarState }) => {
  return sidebarState;
};

// Allows us to dispatch a changeName event by calling this.props.changeFullName
// NOTE this is necessary for redux state to render on nav bar
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
  };
};

// Redux config
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
