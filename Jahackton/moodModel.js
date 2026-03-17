// model.js
class PeliculasModelo {
    constructor() {                         // Aquí definimos una lista de películas con sus géneros asociados
        this.movies = [
            { title: "Intensamente", genres: ["Animación", "Comedia", "Drama"] },
            { title: "Titanic", genres: ["Romance", "Drama"] },
            { title: "Mad Max", genres: ["Acción", "Aventura"] },
            { title: "Indiana Jones", genres: ["Aventura", "Acción"] },
            { title: "The Hangover", genres: ["Comedia"] },
            { title: "Into the Wild", genres: ["Aventura", "Drama"] },
            { title: "John Wick", genres: ["Acción"] },
            { title: "Before Sunrise", genres: ["Romance", "Drama"] }
        ];

        this.moods = {                      // Aquí definimos los estados de ánimo y los géneros asociados a cada uno
            feliz: ["Comedia", "Animación"],
            triste: ["Drama", "Romance"],
            aventurero: ["Aventura", "Acción"],
            chill: ["Drama", "Comedia"],
            valiente: ["Acción", "Drama"]
        };
    }

    getMoviesByMood(mood) {     // Este método recibe un estado de ánimo y devuelve una lista de películas que coinciden con los géneros asociados a ese estado de ánimo
        const requiredGenres = this.moods[mood];

        return this.movies.filter(movie =>
            requiredGenres.every(genre =>
                movie.genres.includes(genre)
            )
        );
    }
}