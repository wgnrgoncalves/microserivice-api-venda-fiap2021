const mongoose = require('mongoose');

const repository = require('../repository/product-repository');

const ValidationContract = require('../validator');

exports.get = async(req, res, next) =>{
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        req.status(500).send({
            message: "Erro ao buscar os produtos"
        });
    }
}

exports.post = async(req, res, next) =>{
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, 'O título deve ter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'A descrição deve ter pelo menos 3 caracteres');

    try {
        if(!contract.isValid()){
            res.status(400).send({message: "Erro ao cadastrar. Valide as informações enviadas!"});
            return;
        }

        await repository.create(req.body);
        res.status(201).send({message: "Criado com sucesso!"});
    } catch (error) {
        res.status(400).send({message: "Erro ao cadastrar. Valide as informações enviadas!"});
    }

}

exports.put = async(req, res, next) =>{

    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, "O título deve ter pelo menos 3 caracteres");
    contract.hasMinLen(req.body.description, 3, "A descrição deve ter pelo menos 3 caracteres");

    try {
        if(!contract.isValid()){
            res.status(400).send({message: "Erro ao atualizar. Valide as informações enviadas!"});
            return;
        }
        const id = req.params.id;
        const body = req.body;
        await repository.update(id, body);
        res.status(200).send({message: "Atualizado!"});
    } catch (error) {
        res.status(400).send({message: "Erro ao Atualizar. Valide as informações enviadas!"});
    }
}

exports.delete = async(req, res, next) => {
    const id = req.params.id;

    let response = {
        id: id,
        message: "Removed"
    };

    try {
        await repository.delete(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send({message: "Erro ao remover", error});
    }
}