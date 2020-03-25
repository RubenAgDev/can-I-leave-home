import React from 'react';
import No from './components/No';
import Yes from './components/Yes';

import './App.css';

const PANDEMIC = true;

function App() {
  return (
    <main className="App">
      {PANDEMIC ? <No /> : <Yes />}
    </main>
  );
}

export default App;
