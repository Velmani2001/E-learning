import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Courses from './Pages/Courses'





function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={<Courses />}></Route>
      </Routes>
    </Router>
  );
}

export default App;