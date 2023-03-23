import express from "express";
import fs from "fs";
import templateEngine from "./util/templateEngine.js";
const app = express();

app.use(express.static('public'));
app.use(express.static('static'));

const navbar = templateEngine.renderNavbar("./static/markdown")


let landingPage = fs.readdirSync("./public/")[0];

app.get("/", (req, res) =>{
    if(!landingPage){
        res.status(404).send({message: "No page found!"})
    }else{
        res.redirect(`/${landingPage}`);
    }
});


app.get("/docs/:filename", (req, res) =>{
    res.send(templateEngine.renderPage(`${req.params.filename}`, navbar));
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Running on port: ", PORT);
});

