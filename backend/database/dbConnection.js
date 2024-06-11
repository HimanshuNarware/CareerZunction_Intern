import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "gssocProject",
    }).then(() => {
        console.log("Connected to database!");
    }).catch(err => {
        console.log(`Error occurred in connection to database: ${err.message}`);
    });
};
