import React from "react";
import Busca from "./Busca";
import env from 'react-dotenv'
import { createClient } from "pexels";
import PexelsLogo from "./PexelsLogo";
import pexelsClient from "../utils/pexelsClient";
import ListaImagens from "./ListaImagens"

export default class app extends React.Component {
    state = {pics: []}

    //pexelsClient = null
    // componentDidMount(){
    //     this.pexelsClient = createClient(env.PEXELS_KEY)
    // }
    // onBuscaRealizada = (termo) =>{
    //     this.pexelsClient.photos.search({
    //         query: termo
    //     })
    //     .then(pics => this.setState({pics: pics.photos}))
    // }

    onBuscaRealizada = (termo) => {
        pexelsClient.get('/search',{
            params: {query:termo}
        })
        .then(result => {
            console.log(result)
            //data é um atributo definiido pela axios
            //o conteúdo da resposta vem associado a essa chave
            this.setState({pics: result.data.photos})
        })
    }

    render(){
        return(
            <div className="grid justify-content-center m-auto w-9 border-round bprder-1 border-400">
                <div className="col-12">
                    <PexelsLogo/>
                </div>
                <div className="col-12">
                    <h1 className="text-center">Exibir uma lista de...</h1>
                </div>
                <div className="col-8">
                    <Busca onBuscaRealizada={this.onBuscaRealizada}  />
                </div>
                <div className="col-8">
                    <ListaImagens pics={this.state.pics}/>
                </div>
            </div>
        )
    }
}