import React, { Component } from 'react'
import './Lista.css'
export default class Lista extends Component{

    constructor(props){
        super(props);

        this.state = {
            
            name:"",
            lista:[]
           
        }
        //this.listar = this.listar.bind(this)
    }

    /*listar =(){

        let buscado = `${this.props.name_valor}`
        let url = `https://api.github.com/users/${buscado}/repos`

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let listei = json[buscado]
            this.setState({})
        })
    }
    */

    listar = (event)=>{
        event.preventDefault()
        console.log('Agora vamos fazer a chamada para a API')

        let url = `https://api.github.com/users/${this.state.name}/repos`

        fetch(url)
        .then(res=>res.json()) // define que a resposta está em json

        .then(dados => this.setState({lista : dados})) // armazena os dados na lista

        .catch(erro =>console.log(erro)) // trata o erro para não interromper a aplicação
    }

    componentDivMount(){
        
    }

    alterarEstado= (event)=>{

        this.setState({name : event.target.value},()=>{console.log(this.state.name)})

    }




    render(){
        return(
            <div className= "lista">
                <main>
                <section>
                        <form onSubmit={this.listar}>
                        <input type ="text" value = {this.state.name }onChange={this.alterarEstado}></input>
                        <button type = "submit" >Buscar</button>
                        </form>
                    </section>
                    <section>
                        <h2>Git Dados do Usuário!</h2>
                       
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>descrição</th>
                                    <th>data</th>
                                    <th>tamanho</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.lista.map((Lista)=>{
                                    return (
                                        <tr key={Lista.id}>
                                            <td>{Lista.id}</td>
                                            <td>{Lista.name}</td>
                                            <td>{Lista.description}</td>
                                            <td>{Lista.created_at}</td>
                                            <td>{Lista.size}</td>
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        </table>
                        
                       
                    </section>
                    
                </main>
            </div>
        )
            
        
    }
}
//export default Lista;