import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      meaningOfLife: 12
    };
  }


  handleChange = (event) => {
    this.setState((prevState, prevProps) => {
      return {meaningOfLife: this.state.meaningOfLife + prevProps.increment}
    },
    () => console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>{this.state.meaningOfLife}</h1>
          <button onClick={this.handleChange}>Update State</button>
        </header>
      </div>
    );   
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Welcome Shambhu</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
