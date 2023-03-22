import express from "express";
import fs from "fs";
const app = express();

app.use(express.static('public'));

let landingPage = fs.readdirSync("./public/")[0];

app.get("/", (req, res) =>{
    if(!landingPage){
        res.status(404).send({message: "No page found!"})
    }else{
        res.redirect(`/${landingPage}`);
    }
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Running on port: ", PORT);
});

