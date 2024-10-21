import { series } from './data.js';
function renderSeriesInTable(seriesList) {
    const tableBody = document.querySelector('#seriesTable tbody');
    seriesList.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderSeriesInTable(series);
});
