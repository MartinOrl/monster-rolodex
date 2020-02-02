import React from 'react';
import './App.css';
import {CardList} from "./components/cardList/cardList.jsx"
import {SearchBox} from './components/searchBox/searchBox'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }


  render() {
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='search monster' handleChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state))} />
        <CardList name='test' monsters={filteredMonsters}></CardList>
      </div>
    );
  };
};


export default App;
