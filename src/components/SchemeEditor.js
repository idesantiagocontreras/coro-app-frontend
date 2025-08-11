import React, { useState } from 'react';

const SchemeEditor = ({ scheme, setScheme }) => {
  const [localScheme, setLocalScheme] = useState(scheme);

  const updateScheme = () => {
    setScheme(localScheme);
  };

  return (
    <div>
      <textarea 
        value={localScheme || ''}
        onChange={(e) => setLocalScheme(e.target.value)}
        rows="10"
        cols="50"
      />
      <br />
      <button onClick={updateScheme}>Update Scheme</button>
    </div>
  );
};

export default SchemeEditor;