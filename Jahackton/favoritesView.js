class FavoritesView {

    constructor() {
        this.moviesContainer = document.getElementById("favorite-movies")
        this.actorsContainer = document.getElementById("favorite-actors")
    }

    // Mostrar favoritos en pantalla
    renderFavorites(favorites) {
        this.moviesContainer.innerHTML = ""
        this.actorsContainer.innerHTML = ""

        favorites.movies.forEach(movie => {
            const element = document.createElement("div")
            element.innerHTML = `
                <p>${movie.title}</p>
                <button data-id="${movie.id}" class="remove-favorite">Eliminar</button>
            `
            this.moviesContainer.appendChild(element)
        })

        favorites.actors.forEach(actor => {
            const element = document.createElement("div")
            element.innerHTML = `
                <p>${actor.name}</p>
                <button data-id="${actor.id}" class="remove-favorite">Eliminar</button>
            `
            this.actorsContainer.appendChild(element)
        })
    }

    // Evento para agregar película favorita
    bindAddMovie(handler) {
        document.addEventListener("click", e => {
            if (e.target.classList.contains("add-movie-favorite")) {
                const movieId = e.target.dataset.id
                handler(movieId)
            }
        })
    }

    // Evento para agregar actor favorito
    bindAddActor(handler) {
        document.addEventListener("click", e => {
            if (e.target.classList.contains("add-actor-favorite")) {
                const actorId = e.target.dataset.id
                handler(actorId)
            }
        })
    }

    // Evento para eliminar favorito
    bindRemoveFavorite(handler) {
        document.addEventListener("click", e => {
            if (e.target.classList.contains("remove-favorite")) {
                const id = e.target.dataset.id
                handler(id)
            }
        })
    }
}