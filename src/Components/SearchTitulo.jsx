import { useContext, useState } from "react";
import { Context } from "../Context/Context";

import {TextField, InputAdornment, IconButton, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const  SearchTitulo = () => {

    const { libros } = useContext(Context);
    const [searchText, setSearchText] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    let librosFiltrados = libros.filter(
        (libro) =>
            (libro.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
                libro.autor.toLowerCase().includes(searchText.toLowerCase())) &&
            (categoriaSeleccionada === "" || libro.categorias === categoriaSeleccionada)
    );

    return (
        <>
        
        <TextField
                    type="text"
                    placeholder="Título o Autor"
                    value={searchText}
                    onChange={handleSearchTextChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

        </>
    )
}

export default SearchTitulo;


