import { useState } from 'react'
import estilo from './app.module.css'

function App() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)

  const usuarios = [
    {
      usuario: "usuário 01",
      url: "https://www.google.com"
    },
    {
      usuario: "usuário 02",
      url: "https://www.univas.edu.br"
    }
  ]

  function mudaUsuario(usuarioBuscado){
    const usuarioFiltrado = usuarios.filter(usuario => usuario.usuario == usuarioBuscado)
    setUsuarioSelecionado(usuarioFiltrado[0])
  }

  return (
    <div className='container mt-4'>
      {
        // Se usuarioSelecionado não estiver preenchido
        // Mostra o conteúdo em tela
        !usuarioSelecionado && (
          <ul className='list-group'>
            {/* Ctrl + Shift + Alt + (setinha) */}
            <li onClick={() => mudaUsuario("usuário 01")} className={'list-group-item ' + estilo.cursor }>Usuário 01</li>
            <li onClick={() => mudaUsuario("usuário 02")} className={'list-group-item ' + estilo.cursor }>Usuário 02</li>
            <li onClick={() => mudaUsuario("usuário 03")} className={'list-group-item ' + estilo.cursor }>Usuário 03</li>
            <li onClick={() => mudaUsuario("usuário 04")} className={'list-group-item ' + estilo.cursor }>Usuário 04</li>
            <li onClick={() => mudaUsuario("usuário 05")} className={'list-group-item ' + estilo.cursor }>Usuário 05</li>
          </ul>
        )
      }

      {
        usuarioSelecionado && (
          <>
            <h2>{ usuarioSelecionado.usuario }</h2>
            <p><strong>URL:</strong> { usuarioSelecionado.url }</p>
          </>
        )
      }
      
    </div>
  )
}

export default App
