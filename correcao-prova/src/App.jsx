import { useState } from 'react'
import axios from 'axios'

function App() {
  const [conselho, setConselho] = useState('')
  const [busca, setBusca] = useState(null)
  const [erro, setErro] = useState(null)

  if(conselho == '' || busca === ''){
    axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        setConselho(res.data.slip.advice)
        setErro(null)
      })
  }else if(busca != '' && busca != null){
    axios.get(`https://api.adviceslip.com/advice/search/${busca}`)
      .then(res => {
        if(res.data.slips && res.data.slips.length > 0){
          setConselho(res.data.slips[0].advice)
          setErro(null)
        }else{
          setErro("Não existem conselhos para este termo.")
        }
      })
  }

  function mudaConselho(termo){
    setBusca(termo)
  }

  return (
    <div className='container-xl'>
      <h1>Prova</h1>

      {/* https://api.adviceslip.com */}
      {
        !erro && conselho != '' && (
          <div className='alert alert-success'>{ conselho }</div>
        )
      }

      {
        erro && (
          <div className='alert alert-danger'>{ erro }</div>
        )
      }

      <div className='row text-center'>
        <div className='col'><button onClick={() => mudaConselho('dog')} className='btn btn-secondary'>Dog</button></div>
        <div className='col'><button onClick={() => mudaConselho('cat')} className='btn btn-secondary'>Cat</button></div>
        <div className='col'><button onClick={() => mudaConselho('study')} className='btn btn-secondary'>Study</button></div>
        <div className='col'><button onClick={() => mudaConselho('')} className='btn btn-secondary'>Aleatório</button></div>
      </div>
    </div>
  )
}

export default App
