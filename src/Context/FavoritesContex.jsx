import { useState } from "react";

import { createContext } from "react";

export const FavoritesContext = createContext()

const FavoritesProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    const addFavorites = (libro) => {
        setFavorites([...favorites, libro]);
    };

    const deleteFavorites = (id) => {
        const newFavorites = favorites.filter((item) => item.id !== id);
        setFavorites(newFavorites);
    };


    return (
        <FavoritesContext.Provider value={{favorites, addFavorites, deleteFavorites}} >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;