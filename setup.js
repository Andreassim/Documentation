import fs from "fs";
import { marked } from "marked";

function createPage(page) {
    const navbar = fs.readFileSync("./static/html/components/navbar.html").toString()

    const markdown = fs.readFileSync(page.pagePath).toString() || "Documentation";
    const html = marked.parse(markdown);

    const template = fs.readFileSync("./static/html/template.html").toString()
    .replace("$TAB_TITLE", page.pageTitle || "Documentation")
    .replace("$MAIN_CONTENT", html)
    .replace("$NAV_BAR", navbar);

    fs.writeFileSync(`./public/${page.pageLink}`, template);
}

function setupNavbar(pages){
    const fileSrc = "./static/html/navTemplate.html";

    const htmlTemplate = (name, link) => { return `
        <li class="py-3 border-b-2 list-none cursor-pointer block hover:bg-slate-200 hover:text-slate-800">
            <a class="h-full w-full inline-block" href="${link}">${name}</a>
        </li>
        `
    }
    let htmlResult = '';

    pages.forEach(page => {
        htmlResult += htmlTemplate(page.pageName, page.pageLink);    
    });

    const navbar = fs.readFileSync(fileSrc).toString()
        .replace("$NAV_ELEMENTS", htmlResult);

    fs.writeFileSync("./static/html/components/navbar.html", navbar);

}

function setupPageInfoPerFile(files, fileSrc){
    let pages = [];

    files.forEach(file => {
        let page = {
            pageName: file.slice(0,-3).replace("_", " "),
            pageLink: `/${file.slice(0,-3)}.html`,
            pageTitle: file.slice(0,-3).replace(/[0-9]/g, '').replace("_", ""),
            pagePath: fileSrc + file
        }
        pages.push(page);
    });

    return pages;
}


function createHTMLPagesFromDir(fileSrc) {
    const files = fs.readdirSync(fileSrc);

    const pages = setupPageInfoPerFile(files, fileSrc);

    setupNavbar(pages);
    
    pages.forEach(page => {
        createPage(page)
    })
    
    const index = {
        pageName: "Frontpage",
        pageLink: `/index.html`,
        pageTitle: "Mandatory 1",
        pagePath: `./static/html/frontpageContent.html`
    }

    createPage(index);
}

createHTMLPagesFromDir("./static/markdown/");
