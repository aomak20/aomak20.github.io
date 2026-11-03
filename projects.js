fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById("project-list");
        const template = document.getElementById("project-template");

        projects.forEach(project => {
            // Clone the HTML template
            const card = template.content.cloneNode(true);

            // Populate card contents
            card.querySelector(".project-title").textContent = project.title;
            card.querySelector(".project-description").textContent = project.description;
            card.querySelector(".project-link").href = project.link;

            // Set status and text
            const status = card.querySelector(".project-status");

            if (project.status === 0) {
                status.textContent = "\u25ef Work in Progress";
                status.classList.add("status-wip");
            } else if (project.status === 1) {
                status.textContent = "\u2b24 Complete";
                status.classList.add("status-complete");
            }

            // Add card to page
            container.appendChild(card);
        });
    });