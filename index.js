const express = require("express");

const app = express();


app.get("/", (req, res) => {
    const { name = "Rajendiran" } = req.query;

    return res.send(`Hi ${name}!, How are you?`);
});

app.listen("8081", () => {
    console.log("Application listening on port 8081");
});