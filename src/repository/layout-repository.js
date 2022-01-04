const mongoose = require('mongoose');

const Layout = mongoose.model('Layout');

exports.get = async() => {
    const result = await Layout.find({active: true});
    return result;
}

exports.create = async(data) =>{
    let layout = Layout(data);
    await layout.save();
}

exports.delete = async(id) =>{
    await Layout.findByIdAndUpdate(id, {
        $set:{
            active: false
        }
    })
};

exports.getById = async(id) => {
    const result = await Layout.findById(id);
    return result;
}

exports.update = async(id, data) =>{
    await Layout.findByIdAndUpdate(id, {
        $set:{
            
            //rm: data.rm,
            //nome : data.nome,
            //turma: data.turma,
            //ano :data.ano,
            //dtnasc: data.dtnasc
        }
    })
}