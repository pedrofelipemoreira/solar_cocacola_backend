import api from "../../utils/api";
import { useState, useEffect } from 'react';


function Home (){

    const [clients, setClients] = useState([]);

    useEffect(() => {
        api.get('/clients').then((response) => {
            setClients(response.data.clients);
        })
    }, [])



    return(
        <section>

            {clients.map((client) => (
                <div>
                    <h1>Home</h1>
                </div>
            ))}

        </section>

    )


}

export default Home;