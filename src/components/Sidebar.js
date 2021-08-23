import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../assets/css/sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.siderbar__menu}>
        <li>
          <NavLink exact to="/" activeClassName={styles.active}>
            {" "}
            <i className="far fa-lightbulb"></i> <span>Notes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/reminders" activeClassName={styles.active}>
            {" "}
            <i className="far fa-bell"></i> <span>Reminders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/archive" activeClassName={styles.active}>
            {" "}
            <i className="far fa-file-archive"></i> <span>Archive</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bin" activeClassName={styles.active}>
            {" "}
            <i className="far fa-trash-alt"></i> <span>Bin</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
