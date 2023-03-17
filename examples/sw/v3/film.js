/*
  get detailed info on film
        output film details
        for each planet
            get planet info
            render planet with planet template
        for each species
            get species info
            render with template
        for each starship
            get info
            render with template
        for each vehicle
            get info
            render with template

*/
import { renderFilmDetails } from "./swapiHelper.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const filmId = urlParams.get("filmId");

renderFilmDetails(filmId, "#output");