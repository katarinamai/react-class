import React from 'react'
import {Header} from './header/header'
import {Input} from './input/input'
import {Button} from './button/button'

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            city: '',
            email: '',
            cpf: '',
            phone: ''
        };

        //this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange = (name, value) => this.setState({ [name]: value });

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <Header text="Cadastro de Alunas"/>
                <Input 
                    name="name"
                    value={this.state.name}
                    title="Nome Completo:"
                    placeholder=""
                    onChange={this.handleChange}/>
                <Input 
                    name="city"
                    value={this.state.city}
                    title="Cidade:"
                    placeholder=""
                    onChange={this.handleChange}/>
                <Input 
                    name="email"
                    value={this.state.email}
                    title="Email:"
                    placeholder="email@email.com"
                    onChange={this.handleChange}/>
                <Input 
                    name="cpf"
                    value={this.state.cpf}
                    title="CPF:"
                    placeholder="000.000.000-00"
                    onChange={this.handleChange}/>
                <Input 
                    name="phone"
                    value={this.state.phone}
                    title="Telefone:"
                    placeholder=""
                    onChange={this.handleChange}/>

                <Button
                    name="Inscrever"/>
            </form>
        )
    }

}