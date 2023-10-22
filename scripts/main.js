import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var seasonAverageHTML = document.getElementById('seasonAverage');
renderSeriesInTable(series);
renderSeasonAverage(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.chanel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function renderSeasonAverage(series) {
    seasonAverageHTML.innerHTML = "".concat(getSeasonsAverage(series));
}
function getSeasonsAverage(series) {
    var average = 0;
    series.forEach(function (serie) {
        average += serie.seasons / series.length;
    });
    return average;
}
