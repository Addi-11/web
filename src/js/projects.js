import { projectsItemsList } from './projectsCardListItems.js';


function createProjectCardhtml(e) {
    const imgPathPrefix = "../../imgs/projects/";
    let innerhtmlstrvalue = `
    <div class="project-card">
        <img class="card_image" src="${imgPathPrefix + e.imgname}">
        <div class="card_text">
            <div class="tags">${e.tags}</div>
            <div class="project-title">${e.name}</div>
            <div class="project-desc">${e.desc}</div>
        </div>
        <div class="card_footer">
            <div class="hidden"></div>
            <a href="//${e.link}" target="_blank" class="project-link">
                <div>Project Link</div>
            </a>
        </div>
    </div>`;
    return innerhtmlstrvalue;
}

export function displayProjectCards() {

    let projectCardsContainerTop = $("#projects>.cards-container-top");
    let projectCardsContainerBottom = $("#projects>.cards-container-bottom");
    let m_projectCardsContainer = $("#m_projects>.cards-container");

    console.log("Here");
    for (let index = 0; index < projectsItemsList.length / 2; index++) {
        let elementTop = projectsItemsList[index];
        let elementBottom = projectsItemsList[index + 1];
        let innerHtmlStrValueT = createProjectCardhtml(elementTop);
        let innerHtmlStrValueB = createProjectCardhtml(elementBottom);
        projectCardsContainerTop.append(innerHtmlStrValueT);
        projectCardsContainerBottom.append(innerHtmlStrValueB);
        m_projectCardsContainer.append(innerHtmlStrValueT);
        m_projectCardsContainer.append(innerHtmlStrValueB);

    }

    // projectsItemsList.forEach(function(e) {
    //     let innerHtmlStrValue = createProjectCardhtml(e);
    //     projectCardsContainer.append(innerHtmlStrValue);
    // });

    projectCardsContainer.append(`<div id="after-last-card" class="project-card"></div>`);
    m_projectCardsContainer.append(`<div id="after-last-card" class="project-card"></div>`);

}