import express from "express";

//rout handler
import * as todoHandler from "./handler/todoHandler";

//create express server
const app = express();

//configure express
app.set("port", 3000);
app.use(express.json());

//route endpoints
app.get("/", (req, res) => res.send("Unknown"));

app.get("/todo", todoHandler.allTodos); //return all todos
app.get("/todo/:id", todoHandler.getTodo); //return specific todo
app.post("/todo", todoHandler.addTodo); 
app.post("/todo/:id", todoHandler.updateTodo); 
app.delete("/todo/:id", todoHandler.deleteTodo); 

export default app;