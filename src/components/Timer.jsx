import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

export default (props) => {
  return (
    <td className="table-2-1">
      <span
        className="timer"
        style={props.show ? { opacity: 1 } : { opacity: 0 }}
      >
        <span className="timer-digits">{props.time}</span>
        <ClockLoader
          color="rgb(161, 0, 0)"
          loading
          size={20}
          speedMultiplier={0.3}
        />
      </span>
    </td>
  );
};
