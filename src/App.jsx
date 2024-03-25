import { useState } from "react";
import Simple_Component from "./components/Simple_Component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Simple_Component />
    </div>
  );
}

export default App;
