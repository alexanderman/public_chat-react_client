import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Login from './components/Login';
import Chat from './components/Chat/Chat';
import getRandomAvatar from './services/avatars-service';


function App() {
  const [user, setUser] = useState(null);

  const login = (input) => {
    setUser({
      username: input,
      avatarUrl: getRandomAvatar()
    });
  }

  const logout = () => {
    setUser(null);
  }


  return (
    <div className="App">
      <Header user={user} logout={logout} />
      {!user 
        ? <Login onLogin={login} /> 
        : <Chat user={user} />}
    </div>
  );
}

export default App;
