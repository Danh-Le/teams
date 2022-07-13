import React, { Components } from 'react';
import teams from './teams.json'
import './App.css';
import TeamInfo from './components/TeamInfo';
import Counter from './components/counter';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 10,
    }
  }
  handleClickMoins = () => {
    if (this.state.count > 1) {
      let counterMoins = this.state.count - 1
      this.setState({count: counterMoins})
  }
}
handleClickPlus = () => {
    if (this.state.count < teams.length-1) {
  let counterPlus = this.state.count + 1
  this.setState({count: counterPlus})
  }
}


  render() {
    return (
      <div class="teams">
        <h1>Teams</h1>
          <Counter
          count={this.state.count}
          substract={this.handleClickMoins}
          increment={this.handleClickPlus}
          />
      <article class="teamsCard">
      {teams.map(member => {
        return (
          <TeamInfo
          shortName={member.shortName}
          crestUrl={member.crestUrl}
          venue={member.venue}
          address={member.address}
          email={member.email}
          tel={member.tel}
          founded={member.founded}
          />
        )
      })}
      </article> 
      </div>
    );
  }
}

export default App;
