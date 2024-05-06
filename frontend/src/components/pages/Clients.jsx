import api from '../../utils/api';
import { useState, useEffect } from 'react';
import { Space, Table, Tag, Button, Select } from 'antd';
import './Clients.css'; // Importe o arquivo de estilo

const { Option } = Select;

const columns = [
    {
        title: 'categoria',
        dataIndex: 'category',
        key: 'cod',
        filters: []
    },
    {
        title: 'nome',
        dataIndex: 'name',
        key: 'data',
        filters: []
    },
    {
        title: 'cep',
        dataIndex: 'cep',
        key: 'categoria',
        filters: []
    },
    {
        title: 'uf',
        dataIndex: 'uf',
        key: 'descricao',
        filters: []
    },
    {
        title: 'cidade',
        dataIndex: 'cidade',
        key: 'ml',
        filters: []
    },
    {
        title: 'bairro',
        dataIndex: 'bairro',
        key: 'quantidade',
        filters: []
    },
    {
        title: 'logradouro',
        dataIndex: 'logradouro',
        key: 'valor',
        filters: []
    },
    {
        title: 'TpCliente',
        dataIndex: 'tpCliente',
        key: 'valor',
        filters: []
    },
    {
        title: 'cnpj',
        dataIndex: 'cnpj',
        key: 'valor',
        filters: []
    },
];

const data = [
    {
        key: '1',
        category: 'bar',
        name: 'felipe',
        cep: '11111-000',
        uf: 'PE',
        cidade: 'Recife',
        bairro: 'Boa Viagem',
        logradouro: 'Ruua Pernambuco',
        tpCliente: 'Bronze',
        cnpj: '00000000/0000-000',
    },
    {
        key: '2',
        cod: '002',
        data: '2024-05-01',
        categoria: 'Refrigerante',
        descricao: 'Coca Cola  Original - Lata',
        ml: '350 ml',
        quantidade: 3,
        regiao: 'Bahia',
        tipoCliente: 'Bronze',
        valor: 'R$ 18,00',
    },
    {
        key: '3',
        cod: '003',
        data: '2024-05-02',
        categoria: 'Energético',
        descricao: 'Monster - Lata',
        ml: '200 ml',
        quantidade: 5,
        regiao: 'Bahia',
        tipoCliente: 'Prata',
        valor: 'R$ 20,00',
    },
    {
        key: '4',
        cod: '004',
        data: '2024-05-02',
        categoria: 'Água',
        descricao: 'Garrafa Cristal',
        ml: '300 ml',
        quantidade: 11,
        regiao: 'Rio de Janeiro',
        tipoCliente: 'Prata',
        valor: 'R$ 30,00',
    },
    {
        key: '5',
        cod: '005',
        data: '2024-05-02',
        categoria: 'Heineken',
        descricao: 'Garrafa de Vidro',
        ml: '350 ml',
        quantidade: 12,
        regiao: 'São Paulo',
        tipoCliente: 'Ouro',
        valor: 'R$ 48,00',
        hora:"10:30"
    },
    // Adicione mais dados conforme necessário
];

function Clients() {

    const [clients, setClients] = useState([]);

useEffect(() => {
    api.get('/clients').then((response) => {
        setClients(response.data.clients);
    })
}, [])

    const [filtroRegiao, setFiltroRegiao] = useState(null);
    const [filtroTipoCliente, setFiltroTipoCliente] = useState(null);

    const handleChangeRegiao = (value) => {
        setFiltroRegiao(value);
    };

    const handleChangeTipoCliente = (value) => {
        setFiltroTipoCliente(value);
    };


    return (

        <div className="main-content">
        <div className="filters">
            <Select
                placeholder="Região"
                style={{ width: 200 }}
                onChange={handleChangeRegiao}
                allowClear
            >
                <Option value="Pernambuco">Pernambuco</Option>
                <Option value="Bahia">Bahia</Option>
                <Option value="Rio de Janeiro">Rio de Janeiro</Option>
                <Option value="São Paulo">São Paulo</Option>
            </Select>
            <Select
                placeholder="Tipo de Cliente"
                style={{ width: 200 }}
                onChange={handleChangeTipoCliente}
                allowClear
            >
                <Option value="Bronze">Bronze</Option>
                <Option value="Prata">Prata</Option>
                <Option value="Ouro">Ouro</Option>
            </Select>
        </div>
        <Button className='new'>+ Novo Produto</Button>
        <Table
            columns={columns}
            dataSource={clients}
            // Aplica os filtros de região e tipo de cliente
            onChange={(pagination, filters) => {
                if (filters.regiao && filters.regiao.length > 0) {
                    setFiltroRegiao(filters.regiao[0]);
                } else {
                    setFiltroRegiao(null);
                }
                if (filters.tipoCliente && filters.tipoCliente.length > 0) {
                    setFiltroTipoCliente(filters.tipoCliente[0]);
                } else {
                    setFiltroTipoCliente(null);
                }
            }}
            filters={{ regiao: [filtroRegiao], tipoCliente: [filtroTipoCliente] }}
        />
    </div>

    )

}

export default Clients;