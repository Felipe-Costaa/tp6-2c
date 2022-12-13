const { or } = require('sequelize')
const {customer} = require('../model/model.customer')

const myDataBase = []

const getAllDependents = async (cpf) =>{
    return await myDataBase.find(cust => cust.cpfTitular == cpf )
}

const remove = async cpf => {
      const index = await myDataBase.findIndex(cust => cust.cpf == cpf)
    myDataBase.splice(index, 1)
}

const getCustomerByCPF = async cpf => {
    const index = await myDataBase.findIndex(cust => cust.cpf == cpf)
    return index
}

const update = async (cpf, customer) =>{
    const index = await myDataBase.findIndex(cust => cust.cpf == cpf)
    myDataBase[index] = customer
}

const getAll = async () => await myDataBase

const create = async customer =>{
    if(customer.cpf)
    if(customer.cpfTitular)
    if(customer.nome)
    if(customer.dataNascimento) 
    await myDataBase.push(customer)
}


module.exports