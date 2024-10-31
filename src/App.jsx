import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-7">
      <h1 className="text-2xl max-w-4xl mx-auto text-white">
        This is a simple react app that does nothing. I am just deploying it to
        azure devops
      </h1>
      <h3 className="text-center text-white m-3">Count: {count}</h3>
      <div className="flex justify-center m-3 text-white gap-6">
        <button
          className="bg-green-800 p-2 hover:opacity-80"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          className="bg-green-800 p-2 hover:opacity-80"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
