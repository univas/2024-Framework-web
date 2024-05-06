import { useState } from "react";


function App() {
  const [contador, setContador] = useState(0)
  
  return (
    <div>
      <h1>Olá mundo do React!</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, facere eius natus iste veniam, illo aut sed ullam aliquid laudantium repellendus cupiditate dignissimos. Accusantium, doloribus. Laborum minus totam fugiat quas.</p>

      <button onClick={() => { 
        console.log(contador)
        setContador(contador + 1)
        console.log(contador)
      }}>Contador {contador}</button>
    </div>
  )
}

export default App
