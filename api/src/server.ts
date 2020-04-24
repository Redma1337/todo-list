import app from "./app";

//start server
const server = app.listen(app.get("port"), () => console.log("Server listening"));