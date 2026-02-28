async function getRepos() {
  try {
    const endpoint = "http://localhost:8080/api/v1/getRepos";

    const response = await fetch(endpoint);
    const result = await response.json();
    console.log("The server sent back:", result);

    const projectSection = document.getElementById("card-container");

    result.data.forEach((repo) => {
      projectSection.innerHTML += `<article class="project"><h3 class="project-name">${repo.name}</h3><p class="project-desc">${repo.description ?? "No description available."}</p><a class="project-page-link" href="${repo.html_url}" target="_blank">View Project</a></article>`;
    });
  } catch (error) {
    console.error(error);
  }
}

getRepos();
