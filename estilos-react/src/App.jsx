import estilosHeader from './header.module.css'
import estilosMain from './main.module.css'
import estilosFooter from './footer.module.css'

function App() {
  return (
    <>
      <header>
        <h1>Nome da Aplicação</h1>
        <p className="mt-3">Slogan da empresa</p>
      </header>
      <main>
        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis consectetur numquam expedita consequuntur animi atque sunt cumque repellat dignissimos ut rerum incidunt quaerat voluptatum neque dolore, corporis reiciendis. Aut.</p>
      </main>
      <footer>
        <p className={estilosFooter.paragrafo + " btn btn-success"}>Copyright.</p>
      </footer>
    </>
  )
}

export default App
