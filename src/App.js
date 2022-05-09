import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${process.env.REAC_APP_API_URL}/users`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello my app with vercel</h1>
        <ul>
          {users.map(user => (
            <li>{user.firstName} {user.lastName}</li>
          ))}
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
