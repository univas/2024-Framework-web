import { useState } from "react"

function Cadastro(){
    const [erros, setErros] = useState({})
    const [usuario, setUsuario] = useState({
        nome: "",
        tipo: ""
    })
    // Um componente controlado é aquele que é definido o value desde o início
    // Um componente não controlado é aquele que não é definido o value desde o início
    // Por isso colocamos as propriedades do estado desde o início no useState

    function handleNome(event){
        const {value} = event.target

        let nomeInvalido = false

        if(value.length < 3){
            nomeInvalido = true
        }

        if(!value.trim().includes(" ")){
            nomeInvalido = true
        }

        if(nomeInvalido){
            setErros({
                ...erros,
                nome: "Digite o nome completo."
            })
        }else{
            setErros({
                ...delete erros.nome
            })
        }

        setUsuario({
            ...usuario,
            nome: value
        })

    }

    function handleTipo(event){
        const {value} = event.target

        setUsuario({
            ...usuario,
            tipo: value
        })
    }

    function submitForm(event){
        event.preventDefault()

        console.log(usuario)
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>Página de cadastro de usuários</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form onSubmit={submitForm}>
                        <div className="row my-3">
                            <div className="col">
                                <label htmlFor="_nome">Nome</label>
                                <input type={"text"} className="form-control" id="_nome" value={usuario.nome} onChange={handleNome} />
                                {
                                    erros.nome && <span className="text-danger">{ erros.nome }</span>
                                }
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col">
                                <label htmlFor="_tipo">Tipo</label>
                                <select className="form-select" id="_tipo" onChange={handleTipo} value={usuario.tipo}>
                                    <option value="" disabled>Selecione</option>
                                    <option value="Aluno">Aluno</option>
                                    <option value="Funcionário">Funcionário</option>
                                    <option value="Professor">Professor</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-secondary">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro