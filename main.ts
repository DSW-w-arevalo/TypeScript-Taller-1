import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;
const seasonAverageHTML: HTMLElement = document.getElementById('seasonAverage')!;

renderSeriesInTable(series);
renderSeasonAverage(series);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach((serie) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.name}</td>
            <td>${serie.chanel}</td>
            <td>${serie.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    });
}

function renderSeasonAverage(series: Serie[]): void {
    seasonAverageHTML.innerHTML = `${getSeasonsAverage(series)}`
}

function getSeasonsAverage(series: Serie[]): number {
    let average: number = 0;
    series.forEach((serie) => {
        average += serie.seasons / series.length
    });
    return average;
}