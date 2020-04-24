import { Request, Response } from "express";
import todoItem from "../item/todo";

export const allTodos = async (req: Request, res: Response) => {
    try {
        const data = await todoItem.find();
        res.send(data);
    } catch (err) {
        res.json({ message: err });
    }
};

export const getTodo = async (req: Request, res: Response) => {
    try {
        const data = await todoItem.findById(req.params.id);
        res.send(data);
    } catch (err) {
        res.json({ message: err });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const data = await todoItem.findByIdAndUpdate(req.params.id, req.body);
        res.send("Updated Todo!");
    } catch (err) {
        res.json({ message: err });
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const data = await todoItem.deleteOne({ _id: req.params.id });
        res.send("Deleted Todo!");
    } catch (err) {
        res.json({ message: err });
    }
};

export const addTodo = async (req: Request, res: Response) => {
    try {
        var todo = new todoItem(req.body);
        const data = await todo.save();
        res.send(todo);
    } catch (err) {
        res.json({ message: err });
    }
};