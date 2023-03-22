import projectsData from './projectsData.js';

export const projects = () => {
  const projectGrid = document.querySelector('.project-grid');
  const projectList = projectsData;

  const projectsTmpl = (projects) => `<div class="project-container">
            <div class="content">
              <div class="content-overlay"></div>
                <img class="content-image" src="${projects.image}" alt="${projects.imageAltText}" />
              <div class="content-details fadeIn-top">
                <h3>
                  <a href="${projects.projectLink}" target="_blank">View Project</a>
                </h3>
                <h3>
                  <a href="${projects.codeLink}" target="_blank">View Code</a>
                </h3>
              </div>
            </div>
            <div class="project-mobile">
              <p><a href="${projects.projectLink}" target="_blank">View Project</a></p>
            </div>
            <h3>${projects.title}</h3>
            <div class="project-undertext">
              <p>${projects.undertext[0].html}</p>
              <p>${projects.undertext[0].css}</p>
              <p>${projects.undertext[0].js}</p>
            </div>
        </div>`;
  if (projectGrid) {
    projectGrid.innerHTML = '';

    projectList.forEach((projects) => {
      projectGrid.innerHTML += projectsTmpl(projects);
    });
  }
};
