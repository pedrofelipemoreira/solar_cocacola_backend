import api from "../../../utils/api"

import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import Input from "../../form/input.jsx";
import styles from "../../form/form.module.css"

import useFlashMessage from "../../../hooks/useFlashMessage";


function EditClient() {

    const [client, setClient] = useState([]);

    const { id } = useParams()

    const { setFlashMessage } = useFlashMessage();

    useEffect(() => {

        api.get(`/clients/${id}`).then((response) => {
            setClient(response.data.client)
        })

    }, [id])

    async function handleSubmit(e) {

        e.preventDefault();

        let msgType = 'sucess'

        const formData = new FormData();

        const userFormData = await Object.keys(client).forEach((key) => 
            formData.append(key, client[key])
        )

        const data = await api.patch(`/clients/edit/${id}`, formData).then((response) => {

        }).catch((err) => {

            msgType = 'error'
            return err.response.data

        })


    }



    function onFileChange(e){
        setClient({ ...client, [e.target.name]: e.target.files[0]})

    }


    function handleChange(e){
        setClient({ ...client, [e.target.name]: e.target.value})
    }


    function onFileChange(e){

    }


    return (


        <section className={styles.form_container}>
            <h1>Edit Client: {client.name}</h1>

                <form onSubmit={handleSubmit} >

                    <Input text="Categoria" type="text" name="category" placeholder="Digite a categoria do estabelecimento" handleOnChange={onFileChange} value={client.category}></Input>

                    <Input text="Nome" type="text" name="name" placeholder="Digite o nome do Cliente" handleOnChange={onFileChange} value={client.name}></Input>

                    <Input text="CEP" type="text" name="cep" placeholder="00000-000" handleOnChange={onFileChange} value={client.cep}></Input>

                    <Input text="Cidade" type="text" name="cidade" placeholder="Digite a Cidade" handleOnChange={onFileChange} value={client.cidade}></Input>

                    <Input text="UF" type="text" name="uf" placeholder="Digite a UF" handleOnChange={onFileChange} value={client.uf}></Input>

                    <Input text="Bairro" type="text" name="bairro" placeholder="Digite o Bairro" handleOnChange={onFileChange} value={client.bairro}></Input>

                    <Input text="Logradouro" type="text" name="logradouro" placeholder="Digite o Logradouro" handleOnChange={onFileChange} value={client.logradouro}></Input>

                    <Input text="TipoCliente" type="text" name="tpCliente" placeholder="Digite o Tipo do Cliente" handleOnChange={onFileChange} value={client.tpCliente}></Input>

                    <Input text="Cnpj" type="text" name="cnpj" placeholder="00.000.000/0000-00" handleOnChange={onFileChange} value={client.cnpj}></Input>

                    <input type="submit" value="Cadastrar" />



                </form>

        </section>

    )

}

export default EditClient;