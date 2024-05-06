import api from "../utils/api";

export default function useCleint() {
    
    async function register(client){
        
        try{

            const data = await api.post('/clients/create', client).then((response) => {
                return response.data;})


        }catch(error){

            console.log(error)

        }
    }

    return{register};

}