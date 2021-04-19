const http = require('http');
var fs = require("fs");
const url = "http://jsonplaceholder.typicode.com/posts";

http.get(url, resp=>{
    let data = "";

    // receive data chuks
    resp.on("data", chunk=>{
        data+=chunk
    });

    resp.on("end",()=>{
        fs.writeFile('result/posts.json', data, (err)=>{
            if (err) throw err;
        });
        console.log("data successfully fetched and writen to file");
    });
})
.on("error", err=>{
    console.log("Error: " + err.message);
});