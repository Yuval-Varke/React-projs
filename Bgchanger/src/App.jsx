import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <h1 className="text-5xl text-center py-50 underline">BG-Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl cursor-pointer">
        <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
          onClick={() => setColor("cyan")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "cyan"}}
          >Cyan</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "black"}}
          >Black</button>
          <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "white"}}
          >White</button>
          <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "grey"}}
          >Grey</button>
          <button
          onClick={() => setColor("indigo")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "indigo"}}
          >Indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App