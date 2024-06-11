
import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide a valid email!"]
    },
    password: {
        type: String,
        minLength: [8, "Password must contain at least 8 characters"],
        required: true,
        select: false
    }
},
{timestamps: true}
);



const User = mongoose.model("User", userSchema);

export default User;

