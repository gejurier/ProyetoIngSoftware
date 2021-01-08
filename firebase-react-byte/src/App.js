import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import React from 'react';
import { useUser } from 'reactfire'
import userEvent from '@testing-library/user-event';

function App() {
  //const firebase= useFirebaseApp();
  //console.log(firebase);
  const user=useUser();
  return (
    <div className="App">
      { user.data && <p>Usuario: {user.data.email}</p>}
      <Auth />

    </div>
  );
}

export default App;
