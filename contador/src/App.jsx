import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      alert(`Contador finalizado com o valor: ${count}`);
    }
  };

  return (
    <div>
      <section>
        <h2>{count}</h2>
        <button onClick={stopInterval}>Parar Contador</button>
      </section>
    </div>
  );
}

export default App;
