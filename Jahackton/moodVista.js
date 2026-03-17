// view.js
class PeliculasVista {
    constructor() {
        this.moodSelector = document.getElementById("moodSelector");        // Asegúrate de que el ID coincida con el elemento en tu HTML
        this.movieList = document.getElementById("movieList");
    }

    bindMoodChange(handler) {
        this.moodSelector.addEventListener("change", (event) => {           // Llama al handler con el valor seleccionado
            handler(event.target.value);                                   
        });
    }

    renderMovies(movies) {                                                  // Limpia la lista antes de renderizar nuevas películas
        this.movieList.innerHTML = "";

        if (movies.length === 0) {                                          // Si no hay películas, muestra un mensaje
            this.movieList.innerHTML = "<p>No se encontraron películas.</p>";
            return;
        }

        movies.forEach(movie => {                                           // Crea un elemento de lista para cada película y lo agrega a la lista
            const li = document.createElement("li");
            li.textContent = movie.title;
            this.movieList.appendChild(li);
        });
    }
}