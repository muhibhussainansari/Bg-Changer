import { useState } from "react";

function App() {
  const [color, setColor] = useState("#6A9C89");

  return (
    <>
      <div
        className="w-full h-screen fixed flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex justify-center bottom-10">
          <div
            className="w-[500px] h-[60px] rounded-xl outline-none flex flex-wrap justify-center items-center gap-3"
            style={{ backgroundColor: "#C4DAD2" }}
          >
            <button
              className="w-[70px] h-[40px] rounded-xl text-white font-medium shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="w-[70px] h-[40px] rounded-xl text-white font-medium shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="w-[70px] h-[40px] rounded-xl text-white font-medium shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="w-[70px] h-[40px] rounded-xl text-white font-medium shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="w-[70px] h-[40px] rounded-xl text-black font-medium shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button
              className="w-[70px] h-[40px] rounded-xl text-white font-medium shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
