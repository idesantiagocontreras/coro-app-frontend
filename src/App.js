import React, { useState, useEffect } from 'react';
import SchemeEditor from './components/SchemeEditor';
import TimeSelector from './components/TimeSelector';

function App() {
  const [liturgicalTime, setLiturgicalTime] = useState('');
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    if (liturgicalTime) {
      // Consult the backend for the corresponding scheme
      fetch(`/api/schemes/${liturgicalTime}`)
        .then(response => response.json())
        .then(data => setScheme(data));
    }
  }, [liturgicalTime]);

  return (
    <div className="App">
      <h1>Organizador Litúrgico de Cantos</h1>
      <TimeSelector onSelect={setLiturgicalTime} />
      {scheme && <SchemeEditor scheme={scheme} setScheme={setScheme} />}
    </div>
  );
}

export default App;