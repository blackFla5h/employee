import { StrictMode } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
      
      <StrictMode>
          <Signup />
         {/*  <Login/>
        <Dashboard/>*/}
      </StrictMode>
      
    </div>

  );
}

export default App;
