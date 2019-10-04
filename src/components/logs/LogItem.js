import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention
              ? "pink-text text-darken-2"
              : "cyan-text text-darken-2"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="indigo-text">
          <span className="indigo-text text-darken-4">ID #{log.id}</span> last
          updated by{" "}
          <span className="indigo-text text-darken-4">{log.tech}</span> on{" "}
          <Moment parse="YYYY-MM-DDTHH:mm:ss" format="MMMM Do, YYYY, h:mm a">
            {log.date}
          </Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons indigo-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItem;
