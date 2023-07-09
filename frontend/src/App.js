import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Todo from './pages/Todo';
function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const [userId, setUserId] = useState('')

  return (
    <div className="App">
      {
        isUserLoggedIn
          ? <div><Todo userId={userId} /></div>
          : <div><Login setIsUserLoggedIn={setIsUserLoggedIn} setUserId={setUserId} /></div>
      }
    </div>
  );
}

export default App;
