import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../common";
import s from "./Headre.module.scss";

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={s.main}>
        <ul>
          <li>
            <Link to={Paths.CURRENT}>Main</Link>
          </li>
          <li>
            <Link to={Paths.ABOUT}>About</Link>
          </li>
        </ul>
      </div>
    );
  }
}
