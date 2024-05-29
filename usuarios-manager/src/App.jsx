import axios from 'axios'
import { useState } from 'react'
import BotaoInativaUsuario from './components/BotaoInativaUsuario.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape/index.jsx'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [erro, setErro] = useState(null)

  if(usuarios.length == 0){
    axios.get(`http://localhost:3000/usuarios`)
      .then(res => {
        setUsuarios(res.data)
      })
      .catch(res => {
        console.log(res.data)
        setErro("Não foi possível carregar a lista de usuários.")
      })
  }

  function mascararEmail(email){
    let emailMascarado = email[0]
    let mostrarCaracter = false

    for(let i = 1; i < email.length; i++){
      if(email[i] == '@'){
        mostrarCaracter = true
      }

      if(!mostrarCaracter){
        emailMascarado += '*'
      }else{
        emailMascarado += email[i]
      }
    }


    return emailMascarado
  }

  function inativarUsuario(id){
    // PATCH
    axios.patch(`http://localhost:3000/usuarios/${id}`, { ativo: 0 })
      .then(res => {
        console.log(res.data)
        setUsuarios([]) // Força a atualização da lista de usuários
      })
      .catch(res => {
        console.log(res.data)
        setErro("Não foi possível atualizar os dados do usuário.")
      })
  }
  
  return (
    <>
      <Cabecalho />
      
      <main className='container-lg mt-5'>
        <div className='row'>
          <div className='col'>
            <h2>Usuários Cadastrados</h2>
            { erro && <div className='alert alert-danger'>{erro}</div> }
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Usuário GH</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  usuarios.map(usuario => {
                    return (
                      <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.login}</td>
                        <td>{mascararEmail(usuario.email)}</td>
                        <td>
                          {
                            usuario.ativo == 1 && <BotaoInativaUsuario acao={inativarUsuario} usuario={usuario} >Desativar</BotaoInativaUsuario>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Rodape />
    </>
  )
  
}

export default App
