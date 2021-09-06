import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../assets/css/sidebar.module.css";

export default function Sidebar({ collapse }) {
  return (
    <aside
      className={styles.sidebar}
      style={{ flex: collapse ? ".07" : ".27" }}
    >
      <ul className={styles.siderbar__menu}>
        <li>
          <NavLink exact to="/" activeClassName={styles.active}>
            {" "}
            <i className="far fa-lightbulb"></i>{" "}
            <span className={collapse && styles.only_icons}>Notes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/reminders" activeClassName={styles.active}>
            {" "}
            <i className="far fa-bell"></i>{" "}
            <span className={collapse && styles.only_icons}>Reminders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/archive" activeClassName={styles.active}>
            {" "}
            <i className="far fa-file-archive"></i>{" "}
            <span className={collapse && styles.only_icons}>Archive</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bin" activeClassName={styles.active}>
            {" "}
            <i className="far fa-trash-alt"></i>{" "}
            <span className={collapse && styles.only_icons}>Bin</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
