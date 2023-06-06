import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

export const FavoritesContext = createContext()




const FavoritesProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    const addFavorites = (libro) => {
        setFavorites([...favorites, libro]);
        Swal.fire({
            icon: 'success',
            title: 'Agregado a favoritos ♥',
        })
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