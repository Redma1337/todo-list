import mongoose from "mongoose";

//mongodb connect
const dbUrl = "mongodb://localhost:27017"

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB."))
.catch(err => console.log("MongoDB connection failed."))

export interface Itodo extends mongoose.Document {
    description: String;
    done: Boolean;
}

export const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean, 
        default: false
    }
});

const todo = mongoose.model<Itodo>("todo", todoSchema);
export default todo;