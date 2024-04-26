import { Client } from '../models/Client.js';

import { response } from 'express';

const ClientModel = Client;

const ClientController = {

    create: async (req, res) => {
        try {

            const client = {
                
                category: req.body.category,
                
                name: req.body.name,
                
                cep: req.body.cep,
                
                uf: req.body.uf,
                
                cidade: req.body.cidade,
                
                bairro: req.body.bairro,
                
                logradouro: req.body.logradouro,
                
                tpCliente: req.body.tpCliente,
                
                cnpj: req.body.cnpj,
            }

            console.log(client);

            const response = await ClientModel.create(client);

            res.status(201).json({response, msg:"Cliente Criado com sucesso"})


        } catch (error) {

            console.log(error)

        }
    },

    showClient: async (req, res) =>{

        try{

            const Clients = await ClientModel.find().sort('-createdAt')

            res.status(200).json({clients:Clients})

        }catch(error){

            console.log(error)

        }
       
    }, 

}

export default ClientController; 