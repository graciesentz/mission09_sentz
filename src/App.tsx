import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="card">
        <h2>{school}</h2>
        <h3>{name}</h3>
        <p>
          {city}, {state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {teamsData.teams.map((oneTeam, index) => (
        <Team key={index} {...oneTeam} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>NCAA Basketball</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
