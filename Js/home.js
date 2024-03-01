document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments avec la classe "blog-article"
    var blogArticles = document.querySelectorAll(".blog-article");

    // Parcourez chaque élément et ajoutez une classe pour le cadre enjolivé
    blogArticles.forEach(function (article) {
        article.classList.add("enjolive-cadre");
    });
});
//Tab_inter
document.addEventListener("DOMContentLoaded", function () {
    var rows = document.querySelectorAll("tbody tr");

    rows.forEach(function (row) {
        row.addEventListener("mouseover", function () {
            this.style.backgroundColor = "rgba(192,75,75,0.7)";
        });

        row.addEventListener("mouseout", function () {
            this.style.backgroundColor = "";
        });
    });
});

//Graphique
var ctx = document.getElementById("probabilityChart").getContext("2d");
var probabilityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Kylian Mbappé au Real Madrid'],
        datasets: [{
            label: 'Probabilité',
            data: [90], // Changez cette valeur en fonction de la probabilité
            backgroundColor: 'rgba(192,75,75,0.7)',
            borderColor: 'rgb(255,0,0)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
// Fonction pour mettre en bleu les @ suivies de lettres
function colorizeAtSigns() {
    var paragraphs = document.querySelectorAll('.comments-section p');

    paragraphs.forEach(function (paragraph) {
        var content = paragraph.innerHTML;
        var regex = /@([a-zA-Z]+)/g;
        var replacedContent = content.replace(regex, '<span class="blue-at">@$1</span>');
        paragraph.innerHTML = replacedContent;
    });
}

// Appeler la fonction lors du chargement de la page
window.onload = function () {
    colorizeAtSigns();
};