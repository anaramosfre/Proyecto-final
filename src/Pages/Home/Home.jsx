import "./Home.css";

import { Typography, Grid, TextField, InputAdornment, IconButton, FormControl, Select, MenuItem, InputLabel, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CardProduct from "../../Components/Card/Card";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";


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
    
            <header className="bg-section">
                <div className="titulo">
                <Typography variant="h3">
                    ¿Tienes libros usados que quieras vender o comprar?
                </Typography>
                <Typography variant="h4"> <br />
                    Libros con pasado, historias con futuro
                </Typography>
                <div className="boton">
                <Button sx={{ width: 300, borderRadius:50 }} variant="contained"
                component={Link}
                to={"./Registro"}
                >
                    Comienza Aquí
                </Button>
                </div>
                </div>
            </header>
            <main>
                <div className="subtitulo">
                <Typography sx={{m:1}} variant="h4" textAlign="center" color="primary"> Catálogo </Typography> 
                <div className="filtros">
                <FormControl  sx={{ m: 1, width: 480 }}>
                <TextField
                    type="text"
                    placeholder="Título o Autor"
                    variant="outlined"
                    value={searchText}
                    onChange={handleSearchTextChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )}}
                        />
                </FormControl>
                <div>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-standard-label">Categorías</InputLabel>
                    <Select
                        value={categoriaSeleccionada}
                        onChange={handleCategoriaSeleccionada}
                    >
                        <MenuItem value="">
                            <em>Categorías</em>
                        </MenuItem>
                        {categoriasUnicas.map((categoria) => (
                            <MenuItem value={categoria} key={categoria}>
                                {categoria}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-standard-label">Ordenar por precio</InputLabel>
                    <Select
                        value={ordenPrecio}
                        onChange={handleOrdenPrecio}
                    >
                        <MenuItem value="">
                            <em>Ordenar por Precio</em>
                        </MenuItem>
                        <MenuItem value="mayor">Mayor a Menor</MenuItem>
                        <MenuItem value="menor">Menor a Mayor</MenuItem>
                    </Select>
                </FormControl>
                </div>
                </div>
                </div> <br/>
                
                <Grid container justifyContent="center" >
                    {librosFiltrados.map((libro) => (
                        <CardProduct key={libro.id} libro={libro} />
                    ))}
                </Grid>
            </main>
        </>
    )
};

export default Home;
