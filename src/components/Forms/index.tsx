import React, { createRef, RefObject } from "react";

export class Forms extends React.Component {
  inputRef: RefObject<HTMLInputElement> = createRef();

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
      </div>
    );
  }
}
