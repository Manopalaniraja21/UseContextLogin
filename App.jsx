// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Dashboard from './DashBoard/DashBoard';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import ParentComponent from './components/Memo/ReactMemoHook';
import CounterComponent from './components/Memo/ReactMemoHook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/dashboard' element={<PrivateRouter element={<Dashboard />} />} />
          <Route path='/memo' element={<CounterComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
