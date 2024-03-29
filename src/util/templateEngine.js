import fs from "fs";
import { marked } from "marked";

function renderDocsPage(page, navbar) {
    const pageInfo = setupPageInfo(page)
    const markdown = fs.readFileSync(`./src/markdown/${page}.md`).toString();
    const mainContent = marked.parse(markdown);

    const renderedPage = fs.readFileSync("./src/html/template.html").toString()
    .replace("$TAB_TITLE", pageInfo.pageTitle)
    .replace("$MAIN_CONTENT", mainContent)
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

export default {
    renderDocsPage,
    renderNavbar
}
