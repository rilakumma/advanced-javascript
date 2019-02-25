import React, { Component } from "react";
import ContextChild from "./ContextChild";

function binder(obj, fn) {
  return function() {
    return fn.apply(obj, arguments);
  };
}

export class Context extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    // this.onClick = this.onClick.bind(this);\
    this.onClick = binder(this, this.onClick);
  }

  // arrow functons dont change the context...
  onClick() {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => console.log(this)
    );
  }

  render() {
    return (
      <div>
        <h1>Context</h1>
        <ContextChild onClick={this.onClick} />
        <div>Counter: {this.state.counter}</div>
      </div>
<<<<<<< HEAD
    );
  }
}

export default Context;
=======
    )
  }
}

export default Context
>>>>>>> 0075168a08833288fa2b6788eb03a3cb6116d341
