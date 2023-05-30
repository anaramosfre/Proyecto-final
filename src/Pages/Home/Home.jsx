import "./Home.css";
import { Typography, Grid } from "@mui/material";
import CardProduct from "../../Components/Card/Card";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";


const Home = () => {
    const { libros } = useContext(Context);
    const [searchText, setSearchText] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [ordenPrecio, setOrdenPrecio] = useState("");

    const categoriasUnicas = [...new Set(libros.map((libro) => libro.categorias))];

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleCategoriaSeleccionada = (e) => {
        setCategoriaSeleccionada(e.target.value);
    };

    const handleOrdenPrecio = (e) => {
        setOrdenPrecio(e.target.value);
    };


    let librosFiltrados = libros.filter(
        (libro) =>
            (libro.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
                libro.autor.toLowerCase().includes(searchText.toLowerCase())) &&
            (categoriaSeleccionada === "" || libro.categorias === categoriaSeleccionada)
    );

    if (ordenPrecio === "mayor") {
        librosFiltrados = librosFiltrados.sort((a, b) => b.precio - a.precio);
    } else if (ordenPrecio === "menor") {
        librosFiltrados = librosFiltrados.sort((a, b) => a.precio - b.precio);
    }

    return (
        <>
            <header className="bg-section"></header>

            <main>
                <Typography variant="h5" textAlign="center"> Catálogo </Typography>
                <input
                    type="text"
                    placeholder="Titulo o Autor"
                    value={searchText}
                    onChange={handleSearchTextChange}
                />

                <select
                    value={categoriaSeleccionada}
                    onChange={handleCategoriaSeleccionada}>
                    <option value="" >Categorías </option>
                    {categoriasUnicas.map((categoria) => (
                        <option value={categoria} key={categoria}>{categoria}</option>
                    ))}
                </select>

                <select
                    value={ordenPrecio}
                    onChange={handleOrdenPrecio}>
                    <option value=""> Ordenar por Precio</option>
                    <option value="mayor">Mayor a Menor</option>
                    <option value="menor">Menor a Mayor</option>
                </select>

                <Grid container justifyContent="center">
                    {librosFiltrados.map((libro) => (
                        <CardProduct key={libro.id} libro={libro} />
                    ))}
                </Grid>
            </main>
        </>
    );
};

export default Home;
