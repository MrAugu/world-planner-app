import React from "react";
import { connect } from "react-redux";
import Progress from "./Progress";
import { getAuthorizationFromCache, getAuthorization } from "../actions/authorization";
import { updateProgress, getItemData, getWeatherData } from "../actions/loader";

class Loader extends React.Component {
  constructor (props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  async componentDidMount () {
    const { dispatch } = this.props;
    updateProgress(dispatch, 0, "Issuing an authorization..");
    let tokenData = await getAuthorizationFromCache(dispatch);
    if (!tokenData) tokenData = await getAuthorization(dispatch);
    updateProgress(dispatch, 5, "Loading item metadata..");
    await getItemData(dispatch, this.props, updateProgress, 40);
    await getWeatherData(dispatch, this.props, updateProgress, 45);
  }

  render () {
    if (this.props.loaded) return;
    return (
      <section className="loader-container">
        <div className="loader-content">
          <Progress width={250} percent={ this.props.load.loadProgress }></Progress>
          <b><p className="progress-text">{ this.props.load.loadMessage }</p></b>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default Loader = connect(mapStateToProps)(Loader);
