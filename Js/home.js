document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments avec la classe "blog-article"
    var blogArticles = document.querySelectorAll(".blog-article");

    // Parcourez chaque élément et ajoutez une classe pour le cadre enjolivé
    blogArticles.forEach(function (article) {
        article.classList.add("enjolive-cadre");
    });
});
