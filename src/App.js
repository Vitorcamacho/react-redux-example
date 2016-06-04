import React from 'react';
import { Link } from 'react-router';
console.log("asdasdasd");
class App extends React.Component {
  constructor() {
    super();
    this.message = 'Header Message';
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">{this.message} </Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
