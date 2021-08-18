import React from "react";
import { connect } from "react-redux";
import Progress from "./Progress";

class Loader extends React.Component {
  constructor (props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  async componentDidMount () {
    
  }

  render () {
    if (this.props.loaded) return;
    return (
      <section className="loader-container">
        <p>Testting.</p>
        <Progress width={500} percent={this.props.load.loadProgress}></Progress>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default Loader = connect(mapStateToProps)(Loader);
