import { series } from './data.js';
document.addEventListener("DOMContentLoaded", () => {
    const seriesTableBody = document.querySelector("#seriesTable tbody");
    const seriesDetail = document.getElementById("seriesDetail");
    const seriesImage = document.getElementById("seriesImage");
    const seriesTitle = document.getElementById("seriesTitle");
    const seriesDescription = document.getElementById("seriesDescription");
    const seriesLink = document.getElementById("seriesLink");
    const seriesList = series;
    seriesList.forEach(series => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${series.id}</td>
            <td><a href="#" class="series-link" data-id="${series.id}">${series.name}</a></td>
            <td>${series.channel}</td>
            <td>${series.seasons}</td>
        `;
        seriesTableBody === null || seriesTableBody === void 0 ? void 0 : seriesTableBody.appendChild(row);
    });
    seriesTableBody === null || seriesTableBody === void 0 ? void 0 : seriesTableBody.addEventListener("click", (event) => {
        const target = event.target;
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
