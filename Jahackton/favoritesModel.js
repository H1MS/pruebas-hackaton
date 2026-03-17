class FavoritesModel {
    
    async getFavorites() {
        const response = await fetch("/favorites")
        const data = await response.json()
        return data
    }

    async addFavoriteMovie(movieId) {
        await fetch("/favorites/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ movieId })
        })
    }

    async addFavoriteActor(actorId) {
        await fetch("/favorites/actors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ actorId })
        })
    }

    async removeFavorite(favoriteId) {
        await fetch(`/favorites/${favoriteId}`, {
            method: "DELETE"
        })
    }
}