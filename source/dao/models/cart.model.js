const {Schema, model} = require('mongoose')


const  collection = 'carts'


const cartSchema = new Schema({
    status: String,
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
})

cartSchema.pre('findOne', function(){
    this.populate('products.product')
})

const CartModel = model(collection, cartSchema)


module.exports = {
    CartModel
}