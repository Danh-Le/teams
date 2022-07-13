import React, { Component } from 'react';
import teams from './teams.json'
import './App.css';
import TeamInfo from './components/TeamInfo';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Teams</h1>
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
      </div>
    );
  }
}

export default App;
