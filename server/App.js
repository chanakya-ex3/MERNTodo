const express = require("express");
const app = express();
const port = 1001;
require("./connection/connection");
const auth = require("./router/auth");
const list = require("./router/list");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/api/v1",auth);
app.use("/api/v2",list);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});