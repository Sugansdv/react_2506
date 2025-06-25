import React, { useState } from 'react';
import { initialData } from './data/initialData';
import Board from './components/Board';
import Navbar from './components/Navbar';

const App = () => {
  const [data, setData] = useState(initialData);

  return (
    <>
      <Navbar />
      <div className="container">
        <Board boardData={data} setBoardData={setData} />
      </div>
    </>
  );
};

export default App;
