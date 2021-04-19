const express = require('express');
const app = new express();
const mockData = require("./data");


const baseUrl = "/api/router/v1";

const getOperation = ({url}) => url.split("/").pop().trim();

app.get(`${baseUrl}/users`, (req, res) => {
    const what = getOperation(req);
    const {[what]: response} = mockData;
    setTimeout( () => res.send(response), 500);
});

app.get("/", (req, res) => {
    res.send("welcome to the express json server");
})

app.listen("8085", () => {
    console.log("server started at port 8085");
})
