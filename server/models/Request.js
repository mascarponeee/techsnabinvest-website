import mongoose from "mongoose";

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  status: {
    type: String,
    enum: ['ожидание', 'в обработке', 'выполнено', 'отклонено'],
    default: 'ожидание'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  product: String
});

const Request = mongoose.model("Request", requestSchema)
export default Request;