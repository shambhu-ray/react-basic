import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearcBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      searchField: '',
      monsters: []
    };
  }

  /**
   * Life cucle hook
   */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value}, () => console.log(this.state));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearcBox placeholder='search monsters'
        handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
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
