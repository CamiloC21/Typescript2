import { series } from './data.js';
import { Serie } from './serie.js';

function renderSeriesInTable(seriesList: Serie[]): void {
    const tableBody = document.querySelector('#seriesTable tbody');
    seriesList.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody?.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSeriesInTable(series);
});