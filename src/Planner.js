import React from "react";
import { connect } from "react-redux";
import { getAuthorization } from "./actions/authorization";

class Planner extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;
    console.log(getAuthorization(dispatch));
  }

  render () {
    return (
      <p>test lol</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

export default Planner = connect(mapStateToProps)(Planner);
