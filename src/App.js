
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';

import User from './pages/User';
import Dash from './pages/Dash';


function App() {
  return (
    <>
      <div className="app">

        <Routes>
        <Route path='/' element={<Register />} />
         

          <Route path='/user' element={<User />} />
          <Route path='/dashboard' element={<Dash />} />     
             </Routes>
       
      </div>
    </>
  );
}

export default App;
