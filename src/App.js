import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(1);
  function a() {
    setValue(value + 1);
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={a}>Click</button>
      <h1>helloo</h1>
    </div>
  );
}

export default App;
