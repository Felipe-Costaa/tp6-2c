const service = require ('../service/service.customer')

const getAllDependents = async (req, res) =>{
    const response = await service.getAllDependents(req.params.cpf)
    if (response) res.stauts(200).send('Successful operation')
    else res.status(404).send('Customer not found')
}

const remove = async (req, res) =>{
    if (await service.remove(req.params.cpf)) res.status(200).send('Successful operation')
    else res.status('404').send('Customer not found')
}

const getCustomerByCPF = async (req, res) =>{
    if (await service.getCustomerByCPF(req.params.cpf)) res.status(200).send('Successful operation')
    else res.status('404').send('Customer not found')
}

const update = async (req, res) =>{
    if (await service.update(req.params.cpf)) res.status(200).send('Successful operation')
    else res.status('404').send('Customer not found')
}

const getAll = async (req, res) =>{
    if (await service.getAll()) res.status(200).send('Successful operation')
    else res.status('404').send('Customer not found')
}

const create = async (req,res)=>{
    if (await service.create()) res.status(200).send('Successful operation')
    else res.status('404').send('Invalid input')
}

module.exports 