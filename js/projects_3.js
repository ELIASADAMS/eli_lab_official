// projects.js
// Reusable portfolio renderer used by the homepage and archive-facing pages.
// The existing row/column classes are intentionally preserved because the
// site's Bootstrap-derived layout has been substantially customized.
export function createPortfolio(projectItems, containerId, heading = 'Selected Projects') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const titleRow = document.createElement('div');
    titleRow.className = 'row';

    const titleCol = document.createElement('div');
    titleCol.className = 'col-lg-12';

    const header = document.createElement('h2');
    header.className = 'page-header';
    header.textContent = heading;

    titleCol.appendChild(header);
    titleRow.appendChild(titleCol);
    container.appendChild(titleRow);

    const projectsRow = document.createElement('div');
    projectsRow.className = 'row';

    projectItems.forEach(({ link, imgSrc, alt }) => {
        const projectCol = document.createElement('div');
        projectCol.className = 'col-md-4 col-sm-6';

        const anchor = document.createElement('a');
        anchor.href = link;

        const img = document.createElement('img');
        img.className = 'img-responsive img-portfolio img-hover';
        img.src = imgSrc;
        img.alt = alt || '';
        img.loading = 'lazy';

        anchor.appendChild(img);
        projectCol.appendChild(anchor);
        projectsRow.appendChild(projectCol);
    });

    container.appendChild(projectsRow);
}
