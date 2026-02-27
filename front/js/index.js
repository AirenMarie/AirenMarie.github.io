"use strict";

//const username = "AirenMarie";

const viewProjectsBtn = document.getElementById("view-projects");
async function getRepos() {
  try {
    const endpoint = "http://localhost:8080/api/v1/getRepos";

    const response = await fetch(endpoint);
    const result = await response.json();
    console.log("The server sent back:", result);

    result.data.forEach((repo) => {
      const projectSection = document.getElementById("project-section");
      const projectDesc = document.querySelector("project-desc");

      projectSection.innerHTML += `<div class="project"><h3 class="project-name">${repo.name}</h3><p class="project-desc">${repo.description}</p><a href="${repo.html_url}">View Project</a></div>`;

      if (repo.description === null) {
        projectDesc.textContent = "No description available.";
      }
    });
  } catch (error) {
    console.error(error);
  }
}

viewProjectsBtn.addEventListener("click", getRepos);
