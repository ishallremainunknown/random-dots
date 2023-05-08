import { ButtonHTMLAttributes, useState } from "react";

import "./App.css";

function App() {
  type Dots = {
    x: number;
    y: number;
  };
  const [dot, setDot] = useState<Dots[]>([]);
  const addDots = (e: React.MouseEvent<HTMLElement>) => {
    // const { clientX, clientY } = e;
    setDot([{ x: e.clientX, y: e.clientY }]);
    console.log(dot);
  };

  return (
    <div className="dots" onClick={addDots}>
      {dot.map((clicked) => {
        return (
          <div
            className="dot"
            style={{ left: `calc(${clicked.x + "px"} - ${"9px"})`, top: `calc(${clicked.y + "px"} - ${"9px"})` }}
            key={clicked.x}
          >
            ⚪
          </div>
        );
      })}
    </div>
  );
}

export default App;
