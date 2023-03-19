import { BsSearch } from "react-icons/bs";
import React from "react";
import s from "./searchBar.module.scss";

interface IProps {
  value: string | number | readonly string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class SearchBar extends React.Component<IProps, unknown> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className={s.main}>
        <BsSearch />
        <input
          type={"search"}
          className={s.input}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
