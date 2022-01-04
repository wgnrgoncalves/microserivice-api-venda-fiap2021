const mongoose = require('mongoose');

const Product = mongoose.model('Product');

exports.get = async() => {
    const result = await Product.find({active: true});
    return result;
}

exports.create = async(data) =>{
    let produto = Product(data);
    await produto.save();
}

exports.delete = async(id) =>{
    await Product.findByIdAndUpdate(id, {
        $set:{
            active: false
        }
    })
};

exports.getById = async(id) => {
    const result = await Product.findById(id);
    return result;
}

exports.update = async(id, data) =>{
    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description : data.description,
            price: data.price
        }
    })
}
