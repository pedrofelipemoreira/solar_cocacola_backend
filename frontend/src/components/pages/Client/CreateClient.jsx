import Input from "../../form/input.jsx";
import styles from "../../form/form.module.css"

import { useState, useContext } from 'react';

import addClient from "../Client/AddClient.jsx";

function CreateClient() {

    const [client, setClient] = useState({});
    const {register} = addClient();

    function handleChange(e) {

        setClient({...client, [e.target.name]: e.target.value})

    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log(client)

        register(client)

    }


    return (
        <section className={styles.form_container}>

            <h1> Criar Cliente </h1>

            <form  onSubmit={handleSubmit} >

                <Input text="Categoria" type="text" name="category" placeholder="Digite a categoria do estabelecimento" handleOnChange={handleChange}></Input>

                <Input text="Nome" type="text" name="name" placeholder="Digite o nome do Cliente" handleOnChange={handleChange}></Input>

                <Input text="CEP" type="text" name="cep" placeholder="00000-000" handleOnChange={handleChange}></Input>

                <Input text="Cidade" type="text" name="cidade" placeholder="Digite a Cidade" handleOnChange={handleChange}></Input>

                <Input text="UF" type="text" name="uf" placeholder="Digite a UF" handleOnChange={handleChange}></Input>

                <Input text="Bairro" type="text" name="bairro" placeholder="Digite o Bairro" handleOnChange={handleChange}></Input>

                <Input text="Logradouro" type="text" name="logradouro" placeholder="Digite o Logradouro" handleOnChange={handleChange}></Input>

                <Input text="TipoCliente" type="text" name="tpCliente" placeholder="Digite o Tipo do Cliente" handleOnChange={handleChange}></Input>

                <Input text="Cnpj" type="text" name="cnpj" placeholder="00.000.000/0000-00" handleOnChange={handleChange}></Input>
            
                <input type="submit" value = "Cadastrar"/>

            </form>

        </section>

    )

}

export default CreateClient;