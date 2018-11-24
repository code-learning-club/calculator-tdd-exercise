// La fonctin pour ajouter deux nombres
const additioner = function (x, y) {
    return (+x) + (+y);
}

// La fonctin pour soustraire deux nombres
const soustraire = function (x, y) {
    return (+x) - (+y);
}

// Rend les fonctions disponible pour être facilement appelées ailleurs dans le programme
module.exports = {
    additioner,
    soustraire
}