import React from 'react';
import No from './components/No';
import Yes from './components/Yes';

import './App.css';

const IS_CORONAVIRUS_ACTIVE = true;

function App() {
  return (
    <main className="App">
      {IS_CORONAVIRUS_ACTIVE ? <No /> : <Yes />}
    </main>
  );
}

export default App;
