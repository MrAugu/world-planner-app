import React from "react";
import { connect } from "react-redux";
import Loader from "./components/Loader";

class Planner extends React.Component { 
  constructor (props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  render () {
    return (
      <Loader />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

export default Planner = connect(mapStateToProps)(Planner);
