import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";
import "../../App.css";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Log deleted..." });
  };
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
          onClick={() => setCurrent(log)}
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
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons indigo-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog, setCurrent }
)(LogItem);
