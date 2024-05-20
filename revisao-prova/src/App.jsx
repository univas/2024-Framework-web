import { useState } from 'react'
import axios from 'axios'

function App() {

  const [usuarios, setUsuarios] = useState([])
  const [repositorios, setRepositorios] = useState([])

  if(usuarios.length == 0){ // verifica se a lista de usuarios não está preenchida

    axios.get("https://api.github.com/users") // busca os usuarios do github api
      .then(res => { // retornou com sucesso
        setUsuarios(res.data)
      })
      .catch(res => { // retornou com erro
        setUsuarios([
          {
            'login' : 'marcaosi',
            'repositorios': [
              {
                'name': 'univas'
              },
              {
                'name': 'fuvs'
              }
            ]
          },
          {
            'login' : 'mojombo',
            'repositorios': [
              {
                'name': 'githubio'
              },
              {
                'name': 'god'
              }
            ]
          },
          {
            'login' : 'facebook',
            'repositorios': [
              {
                'name': 'react'
              },
              {
                'name': 'api'
              }
            ]
          }
        ])
      })

  }

  function mudaUsuario(usuarioNovo){
    if(usuarioNovo == ''){
      setRepositorios([])
    }else{
      let repositoriosNovo = []
      usuarios.forEach(usuario => {
        if(usuario.login == usuarioNovo){
          if(usuario.repos_url){ // se exister link do github
            axios.get(usuario.repos_url) // codigo assincrono
              .then(res => {
                setRepositorios(res.data) // atualiza lista de repositorios
              })
          }
          repositoriosNovo = usuario.repositorios
        }
      })

      setRepositorios(repositoriosNovo)
    }
  }

  return (
    <>
      <div className='row m-5 text-center'>
        {
          usuarios.map(usuario => {
            return (
              <div className='col' key={usuario.login}>
                <button onClick={() => mudaUsuario(usuario.login)} className='btn btn-success'>{usuario.login}</button>
              </div>
            )
          })
        }
        <div className='col'>
          <button onClick={() => mudaUsuario('')} className='btn btn-danger'>Limpar</button>
        </div>
      </div>

      <ul className='list-group m-5'>
        {
          repositorios.length > 0 && repositorios.map(repo => {
            return (
              <li className='list-group-item' key={repo.name}>{repo.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
