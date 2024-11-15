import { series } from './data.js';
import { Serie } from './serie.js';

document.addEventListener("DOMContentLoaded", () => {
    const seriesTableBody = document.querySelector("#seriesTable tbody");
    const seriesDetail = document.getElementById("seriesDetail") as HTMLElement;
    const seriesImage = document.getElementById("seriesImage") as HTMLImageElement;
    const seriesTitle = document.getElementById("seriesTitle") as HTMLElement;
    const seriesDescription = document.getElementById("seriesDescription") as HTMLElement;
    const seriesLink = document.getElementById("seriesLink") as HTMLAnchorElement;

    

    
    const seriesList: Serie[] = series;
    seriesList.forEach(series => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${series.id}</td>
            <td><a href="#" class="series-link" data-id="${series.id}">${series.name}</a></td>
            <td>${series.channel}</td>
            <td>${series.seasons}</td>
        `;
        seriesTableBody?.appendChild(row);
    });

    
    seriesTableBody?.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains("series-link")) {
            event.preventDefault();
            const seriesId = target.getAttribute("data-id");
            const series = seriesList.find(s => s.id.toString() === seriesId);

            if (series) {
                
                seriesTitle.innerText = series.name;
                seriesDescription.innerText = series.description;
                seriesLink.href = series.link;
                seriesImage.src = series.image; 

                
                seriesDetail.style.display = "block";
            }
        }
    });
});
