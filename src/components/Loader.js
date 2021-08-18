import React from "react";
import { connect } from "react-redux";
import Progress from "./Progress";
import { getAuthorizationFromCache, getAuthorization } from "../actions/authorization";

class Loader extends React.Component {
  constructor (props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  async componentDidMount () {
    const { dispatch } = this.props;
    let tokenData = await getAuthorizationFromCache(dispatch);
    if (!tokenData) tokenData = await getAuthorization(dispatch);
    
  }

  render () {
    if (this.props.loaded) return;
    return (
      <section className="loader-container">
        <div className="loader-content">
          <Progress width={300} percent={this.props.load.loadProgress / 100}></Progress>
          <p className="progress-text">{ this.props.load.loadMessage }</p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default Loader = connect(mapStateToProps)(Loader);
