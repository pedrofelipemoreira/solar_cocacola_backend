import api from "../../../utils/api";
import useFlashMessage from "../../../hooks/useFlashMessage";
import { useState, useContext } from 'react';

export default function useCleint() {


    const [clients, setClients] = useState({});
    const {setFlashMessage} = useFlashMessage()
    
    async function register(client){

        let msgText = 'Cadastro Realizado com sucesso!';
        let msgType = 'success';
        
        try{

            const data = await api.post('/clients/create', client).then((response) => {
                return response.data;})


        }catch(error){

            console.log(error)
            msgText = error.response.data.message;
            msgType = 'error';

        }

        setFlashMessage(msgText, msgType);
    }

    async function removeClient(id, clients){


        let msgType = 'success'

        const data = await api.delete(`/clients/${id}`)
        .then((response) =>{

            const updatedClients = clients.filter((client) => client._id !== id)

            console.log(updatedClients)
            setClients(updatedClients);
            console.log(response.data)
            return response.data



        }).catch((err) => {
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType);

    }  


    return{register, removeClient};

}