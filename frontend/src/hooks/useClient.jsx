import api from "../utils/api";
import useFlashMessage from "./useFlashMessage"

export default function useCleint() {

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

    return{register};

}