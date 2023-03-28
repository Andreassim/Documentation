import express from "express";
import fs from "fs";
import templateEngine from "./util/templateEngine.js";
const app = express();

app.use(express.static('public'));

const navbar = templateEngine.renderNavbar("./src/markdown")
let pages = fs.readdirSync("./src/markdown");

app.get("/", (req, res) => {
    res.redirect(`/docs/${pages[0].slice(0,-3)}`)
})

app.get("/docs/:filename", (req, res) =>{
    if(!pages.find(filename => filename == `${req.params.filename}.md`)){
        return res.status(404).send({message: "Page not found"})
    }
    res.send(templateEngine.renderDocsPage(`${req.params.filename}`, navbar));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Running on port: ", PORT);
});

