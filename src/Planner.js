import React from "react";
import { connect } from 'react-redux';

class Planner extends React.Component {
  render () {
    return (
      <p>test lol</p>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default Planner = connect(mapStateToProps)(Planner);
