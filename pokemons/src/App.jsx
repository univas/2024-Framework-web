import { useState } from 'react'
import axios from 'axios'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState(null)

  if(pokemons.length == 0){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=3&offset=100")
      .then(res => {
        setPokemons(res.data.results)
      })
  }

  function mudaPokemon(poke){
    pokemons.forEach(item => {
      if(poke == item.name){
        axios.get(item.url)
          .then(res => {
            setPokemon(res.data)
          })
      }
    })
  }

  return (
    <>
      <div className='container-xl'>
        <div className='row m-5'>
          {
            pokemons.map(poke => (
              <div key={poke.name} className='col'>
                <button onClick={() => mudaPokemon(poke.name)} className='btn btn-success'>{poke.name}</button>
              </div>
            ))
          }
        </div>
      </div>

      
      {
        pokemon && (
          <>
            <div className='row m-5 mb-0'>
              <div className='col'>
              <h2>Habilidades</h2>
              </div>
            </div>
            <div className='m-5 mt-0 row'>
              <ul>
                {
                  pokemon.abilities.map(item => {
                    return (
                      <li key={item.ability.name}>{item.ability.name}</li>
                    )
                  })
                }
              </ul>
            </div>
          </>
        )
      }
    </>
  )
}

export default App
