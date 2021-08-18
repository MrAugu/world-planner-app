import * as React from "react";
import "../styles/progress.css";

class ProgressBar extends React.Component {
  render () {
    return (
      <div className="progress-div" style={{ width: this.props.width}}>
        <div style={{ width: `${this.props.percent / 100 * this.props.width}px` }} className="progress">
        </div>
      </div>
    );
  }
}

export default ProgressBar;
