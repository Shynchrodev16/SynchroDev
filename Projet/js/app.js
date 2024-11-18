// Fonction pour créer une carte de projet
function createProjectCard(project) {
    return `
        <div class="project-card" onclick="showProjectDetail(${project.id})">
            <div class="project-card-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-card-content">
                <div class="project-type">
                    ${project.type === "Refonte" ? 
                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="19" cy="5" r="2"/><path d="M7 20h12"/><path d="M5 20a2 2 0 1 0 4 0c0-3.5-4-6-4-6s-4 2.5-4 6a2 2 0 0 0 4 0"/><path d="M12 14c3.5 0 6-2.5 6-6 0-3.5-2.5-6-6-6s-6 2.5-6 6c0 3.5 2.5 6 6 6"/></svg>' :
                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>'
                    }
                    ${project.type}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-link">
                    Voir le projet
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour créer le détail d'un projet
function createProjectDetail(project) {
    return `
        <div class="project-detail">
            <div class="project-hero">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-hero-overlay"></div>
                  <button class="back-button" onclick="hideProjectDetail()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    Retour aux projets
                </button>
                <div class="project-hero-content container">
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                </div>
        
            </div>
            
            <div class="project-content">
                <div class="project-main">
                    <h2>À propos du projet</h2>
                    <p>${project.fullDescription || project.description}</p>
                    
                    <h3>Technologies utilisées</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    
                    <h3>Travail effectuer</h3>
                    <ul class="project-info-list">
                        ${(project.challenges || []).map(challenge => `
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                                ${challenge}
                            </li>
                        `).join('')}
                    </ul>
                    
                    <h3>Galerie</h3>
                    <div class="project-gallery">
                        ${(project.gallery || []).map(image => `
                            <img src="${image}" alt="Vue du projet">
                        `).join('')}
                    </div>
                </div>
                
                <div class="project-sidebar">
                    <div class="project-info">
                        <h3>Informations</h3>
                        <ul class="project-info-list">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                ${project.client}
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                ${project.duration}
                            </li>
                        </ul>
                        <a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" style="margin-top: 30px;">
                            Visiter le site
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialisation de la page
function initializePage() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    const mainPage = document.getElementById('main-page');
    const projectDetail = document.getElementById('project-detail');

    if (project) {
        // Cache la page principale et affiche le détail du projet
        mainPage.classList.add('hidden');
        projectDetail.classList.remove('hidden');
        
        // Remplit le détail du projet avec le contenu du projet sélectionné
        projectDetail.innerHTML = createProjectDetail(project);

        // Change l'URL sans forcer le défilement
        history.pushState(null, null, 'index.html#pjd');

        // Positionne directement la page pour que l'élément cible soit à 30px du haut
        const target = document.getElementById('pjd');
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 50;
            window.scrollTo({ top: targetPosition, behavior: 'instant' }); // Défilement direct
        }
        
// Select all images in the gallery
document.querySelectorAll('.project-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        // Check if the image is already expanded
        if (img.classList.contains('expanded')) {
            // Remove the expanded state and re-enable hover effect
            img.classList.remove('expanded', 'no-hover');
        } else {
            // Collapse any other expanded images
            document.querySelectorAll('.project-gallery img.expanded').forEach(otherImg => {
                otherImg.classList.remove('expanded', 'no-hover');
            });
            // Expand the clicked image and disable hover effect
            img.classList.add('expanded', 'no-hover');
        }
    });
});

    }
}




function hideProjectDetail() {
    const mainPage = document.getElementById('main-page');
    const projectDetail = document.getElementById('project-detail');
    
    // Réaffiche la page principale et cache le détail du projet
    mainPage.classList.remove('hidden');
    projectDetail.classList.add('hidden');

    window.location.href = 'index.html#carousel';
}

// Initialiser la page au chargement
document.addEventListener('DOMContentLoaded', initializePage);