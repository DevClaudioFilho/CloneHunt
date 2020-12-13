const mongosse = require("mongoose");
const mongossePaginate = require('mongoose-paginate');

const ProductSchema = new mongosse.Schema({
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  url:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});

ProductSchema.plugin(mongossePaginate);

mongosse.model('Product', ProductSchema);