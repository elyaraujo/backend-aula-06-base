import mongoose from "mongoose";

//MONGODB: shema/collection
// RELACIONAL:tabela


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const user = mongoose.model("User", userSchema);

export default user;