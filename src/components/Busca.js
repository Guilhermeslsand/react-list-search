import React, {Component} from "react";
import {InputText, inputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ""
    }

    onTermoAlterado = (event) => {
        // console.log(event.target.value)
        this.setState({termoDeBusca: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="felx flex-column">
                    {/*ícone à esquerda. largura máxima*/}
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-search"/>
                        <InputText
                        //largura máxima
                        className="w-full text-center"
                        value={this.state.termoDeBusca}
                        onChange={this.onTermoAlterado}
                        placeholder={this.props.dica}
                        />
                    </span>
                    <Button
                        label="OK"
                        className="p-button-outlined mt-2"
                    />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver ...'
}