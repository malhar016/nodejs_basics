const fs = require("fs");
const path = require("path");

const readJson = filePath => {
    const rawData = fs.readFileSync(path.resolve(filePath));
    console.log("reading json at: ", filePath);
    return JSON.parse(rawData.toString());
}

const mockData = {
    users: readJson("./users.json")
}

module.exports = mockData;