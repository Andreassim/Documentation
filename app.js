import express from "express";
import fs from "fs";
import templateEngine from "./src/util/templateEngine.js";
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";

const app = express();

app.use(express.static('public'));
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

const navbar = templateEngine.renderNavbar("./src/markdown")
let pages = fs.readdirSync("./src/markdown");

const adminUser = {
    username : "admin",
    password : "admin"
}
const verySecureToken = "ISURELYSHOULDHAVEACCESS"


app.get("/", (req, res) => {
    res.redirect(`/docs/${pages[0].slice(0,-3)}`)
})

app.get("/docs/:filename", (req, res) =>{
    if(!pages.find(filename => filename == `${req.params.filename}.md`)){
        return res.status(404).send({message: "Page not found"})
    }
    if(req.query.edit === 'true'){
        if(req.cookies.token === verySecureToken){
            return res.send(templateEngine.renderEditablePage(`${req.params.filename}`, navbar))                      
        }
    }
    res.send(templateEngine.renderDocsPage(`${req.params.filename}`, navbar));
});

app.post("/docs/:filename", (req, res) =>{
    if(!pages.find(filename => filename == `${req.params.filename}.md`)){
        return res.status(404).send({message: "Page not found"})
    }
    if(!req.cookies.token === verySecureToken){
        return res.status(401).send({message: "Unauthorized, try logging in again"})
    }
    fs.writeFileSync(`./src/markdown/${req.params.filename}.md`, req.body.pageContent);

    res.status(200).redirect(`/docs/${req.params.filename}`);
});



// LOGIN

app.post("/login", (req, res) =>{
    if(!((req.body.username == adminUser.username)&&(req.body.password == adminUser.password))){
       return res.send({message: "username or password is incorrect"})
    }
    
    res.cookie('token', verySecureToken, {
        maxAge:3600000,
        sameSite:"strict",
    }).send({message : `welcome ${adminUser.username}`});
}); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Running on port: ", PORT);
});

