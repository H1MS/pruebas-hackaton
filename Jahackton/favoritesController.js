class FavoritesController {         // Controlador para manejar la lógica de favoritos
    constructor(model, view) {
        this.model = model          // Modelo para manejar datos de favoritos
        this.view = view        // Vista para mostrar favoritos en pantalla 

        // Eventos de la vista
        this.view.bindAddMovie(this.handleAddMovie)     // Evento para agregar película favorita
        this.view.bindAddActor(this.handleAddActor)     // Evento para agregar actor favorito
        this.view.bindRemoveFavorite(this.handleRemoveFavorite)     // Evento para eliminar favorito

        // Cargar favoritos al iniciar
        this.loadFavorites()        // Cargar favoritos del usuario al iniciar la aplicación
    }

    // Cargar favoritos del usuario
    loadFavorites = async () => {               
        try {
            const favorites = await this.model.getFavorites()       // Obtener favoritos del modelo
            this.view.renderFavorites(favorites)                    // Mostrar favoritos en la vista
        } catch (error) {
            console.error("Error cargando favoritos:", error)       // Manejar errores al cargar favoritos
        }
    }

    // Agregar película favorita
    handleAddMovie = async (movieId) => {                           // Manejar evento para agregar película favorita
        try {
            await this.model.addFavoriteMovie(movieId)              // Agregar película favorita al modelo
            const favorites = await this.model.getFavorites()       // Obtener favoritos actualizados del modelo
            this.view.renderFavorites(favorites)                    // Mostrar favoritos actualizados en la vista
        } catch (error) {
            console.error("Error agregando película:", error)       // Manejar errores al agregar película favorita
        }
    }

    // Agregar actor favorito
    handleAddActor = async (actorId) => {                           // Manejar evento para agregar actor favorito
        try {
            await this.model.addFavoriteActor(actorId)              // Agregar actor favorito al modelo
            const favorites = await this.model.getFavorites()       // Obtener favoritos actualizados del modelo
            this.view.renderFavorites(favorites)                    // Mostrar favoritos actualizados en la vista
        } catch (error) {
            console.error("Error agregando actor:", error)          // Manejar errores al agregar actor favorito
        }
    }

    // Eliminar favorito
    handleRemoveFavorite = async (favoriteId) => {                  // Manejar evento para eliminar favorito
        try {
            await this.model.removeFavorite(favoriteId)             // Eliminar favorito del modelo
            const favorites = await this.model.getFavorites()       // Obtener favoritos actualizados del modelo
            this.view.renderFavorites(favorites)                    // Mostrar favoritos actualizados en la vista   
        } catch (error) {
            console.error("Error eliminando favorito:", error)     // Manejar errores al eliminar favorito
        }
    }
}