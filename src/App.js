import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'm1'
        },
        {
          name: 'Drakula',
          id: 'm1'
        },
        {
          name: 'Zombie',
          id: 'm1'
        },

      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}> { monster.name } </h1>)
        }
      </div>
    );
  };
};


export default App;
