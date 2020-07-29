import mongoose from 'mongoose'
const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/onsurity';
console.log(MongoURI);
const connection = mongoose.connect(MongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
export default connection;