const mongoose = require('mongoose');

const Aluno = mongoose.model('Aluno');

exports.get = async() => {
    const result = await Aluno.find({active: true});
    return result;
}

exports.create = async(data) =>{
    let produto = Aluno(data);
    await produto.save();
}

exports.delete = async(id) =>{
    await Aluno.findByIdAndUpdate(id, {
        $set:{
            active: false
        }
    })
};

exports.getById = async(id) => {
    const result = await Aluno.findById(id);
    return result;
}

exports.update = async(id, data) =>{
    await Aluno.findByIdAndUpdate(id, {
        $set:{            
            rm: data.rm,
            nome : data.nome,
            turma: data.turma,
            ano :data.ano,
            dtnasc: data.dtnasc
        }
    })
}