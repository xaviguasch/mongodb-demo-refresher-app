const MongoClient = require('mongodb').MongoClient

const url =
  'mongodb+srv://xavi:<password>@cluster0-o4vnl.mongodb.net/products_test?retryWrites=true&w=majority'

const createProduct = async (req, res, next) => {}

const getProducts = async (req, res, next) => {}

exports.createProduct = createProduct
exports.getProducts = getProducts
