import fs from "fs";
import {promises as fsp} from "fs";
import { marked } from "marked";

async function renderDocsPage(page, navbar) {
    const pageInfo = setupPageInfo(page)
    const markdown = await fsp.readFile(`./src/markdown/${page}.md`);
    const mainContent = marked.parse(markdown.toString());

    const template = await fsp.readFile("./src/html/template.html");
    const renderedPage = template.toString()
    .replace("$TAB_TITLE", pageInfo.pageTitle)
    .replace("$MAIN_CONTENT", mainContent)
    .replace("$NAV_BAR", navbar);

    return renderedPage;
}

async function renderEditablePage(page, navbar) {
    const pageInfo = setupPageInfo(page)
    const markdown = await fsp.readFile(`./src/markdown/${page}.md`);

    const editableTemplate = `
    <div>
        <form id="edit-page-form" action="/docs/${page}" method="POST">
            <div class="py-2 h-14 w-20">
                <button class=" w-full h-full border-2 text-white border-slate-500 bg-gradient-to-tl from-slate-800 to-slate-600 hover:bg-gradient-to-tl hover:from-slate-400 hover:to-slate-800 hover:border-slate-800">Save</button>
            </div>
            <textarea name="pageContent" class="w-full h-screen bg-slate-600 text-white" form="edit-page-form">${markdown.toString()}</textarea>
        </form>
    </div>
    `;

    const template = await fsp.readFile("./src/html/template.html");
    const renderedPage = template.toString()
    .replace("$TAB_TITLE", pageInfo.pageTitle)
    .replace("$MAIN_CONTENT", editableTemplate)
    .replace("$NAV_BAR", navbar);

    return renderedPage;
}

function renderNavbar(fileSrc){
    const files = fs.readdirSync(fileSrc);
    let pages = [];
    
    files.forEach(file => {
        pages.push(setupPageInfo(file));
    });
    
    const navbarTemplate = "./src/html/navTemplate.html";

    const linkTemplate = (name, link) => { return `
        <li class="py-3 border-b-2 list-none cursor-pointer block hover:bg-slate-200 hover:text-slate-800">
            <a class="h-full w-full inline-block" href="/docs/${link}">${name}</a>
        </li>
        `
    }
    let links = '';

    pages.forEach(page => {
        links += linkTemplate(page.pageName, page.pageLink);    
    });

    const navbar = fs.readFileSync(navbarTemplate).toString()
        .replace("$NAV_ELEMENTS", links);

    return navbar;

}

function setupPageInfo(file){
    const pageInfo = {
        pageName: file.slice(0,-3).replace(/_/g, " ").replace(/[0-9]/g, ''),
        pageLink: `${file.slice(0,-3).replace(/ /g, "_")}`,
        pageTitle: file.replace(/[0-9]/g, '').replace(/_/g, " ")
    }
    return pageInfo
}

function editPage() {

}

export default {
    renderDocsPage,
    renderNavbar,
    renderEditablePage
}