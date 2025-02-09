    document.addEventListener("DOMContentLoaded", function () {
        console.log("Project Proposal section loaded");
    
        document.getElementById("progress-proposal-btn").addEventListener("click", function () {
            let projectName = prompt("Enter Project Name:");
            let projectStatus = prompt("Enter Project Status (Upcoming/In Progress):");
    
            if (projectName && projectStatus) {
                let listId = projectStatus.toLowerCase() === "in progress" ? "projects-in-progress" : "upcoming-projects";
                let list = document.getElementById(listId);
    
                let newProject = document.createElement("li");
                newProject.textContent = projectName;
                list.appendChild(newProject);
            } else {
                alert("Project details are required!");
            }
        });
    });
