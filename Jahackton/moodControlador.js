// controller.js
class PeliculasControlador {                // El controlador conecta el modelo y la vista, manejando la lógica de negocio y la interacción del usuario
    constructor(model, view) {
        this.model = model;                 // Aquí se asignan el modelo y la vista al controlador
        this.view = view;                   // Luego se vincula el evento de cambio de estado de ánimo en la vista al método handleMoodChange del controlador

        this.view.bindMoodChange(this.handleMoodChange.bind(this)); // Esto asegura que cuando el usuario cambie el estado de ánimo en la vista, se llame al método handleMoodChange del controlador
    }

    handleMoodChange(mood) {// Este método se llama cuando el usuario cambia el estado de ánimo en la vista. Recibe el estado de ánimo seleccionado, obtiene las películas correspondientes del modelo y le dice a la vista que las renderice
        const movies = this.model.getMoviesByMood(mood);
        this.view.renderMovies(movies);
    }
}