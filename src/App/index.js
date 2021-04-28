import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/studentData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);
  return (
    <div>
      <Router>
        <NavBar />
      <h1>Hello World!</h1>
      <Routes students={students} setStudents={setStudents} />
      </Router>
    </div>
  );
}

export default App;
