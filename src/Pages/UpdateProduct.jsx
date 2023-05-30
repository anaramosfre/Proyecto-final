import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { Box, TextField, MenuItem, Button, Typography, Container } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';



const UpdateProduct = () => {

    const {id} = useParams();
    const {libros, updateProduct} = useContext(Context);
    const {user} = useContext(UserContext);

    
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [editorial, setEditorial] = useState("");
    const [categorias, setCategorias] = useState("");
    const [encuadernacion, setEncuadernacion] = useState("");
    const [precio, setPrecio] = useState("");
    const [estado, setEstado] = useState("");
    const [reseña, setReseña] = useState("");
    const [imagen, setImagen] = useState("");

    const tapas = [
        {
            value: 'Tapa Blanda',
            label: 'Tapa Blanda',
        },
        {
            value: 'Tapa Dura',
            label: 'Tapa Dura',
        }
    ];

    const Estados = [
        {
            value: 'Nuevo',
            label: 'Nuevo',
        },
        {
            value: 'Usado',
            label: 'Usado',
        }
    ];


    useEffect(() => {
        const findProduct = libros.find((item) => item.id === id);
        setTitulo(findProduct.titulo);
        setAutor(findProduct.autor);
        setEditorial(findProduct.editorial);
        setCategorias(findProduct.categorias);
        setEncuadernacion(findProduct.encuadernacion);
        setPrecio(findProduct.precio);
        setEstado(findProduct.estado);
        setReseña(findProduct.reseña);
        setImagen(findProduct.imagen);
    }, [id]);


    // useEffect(() => {
    //     if (libros.length === 0) {
    //       return;
    //     }
      
    //     const findProduct = libros.find((item) => item.id === parseInt(id));
      
    //     if (findProduct) {
    //       // Asignar las propiedades del producto encontrado a los estados correspondientes
    //       setTitulo(findProduct.titulo);
    //       setAutor(findProduct.autor);
    //       setEditorial(findProduct.editorial);
    //       setCategorias(findProduct.categorias);
    //       setEncuadernacion(findProduct.encuadernacion);
    //       setPrecio(findProduct.precio);
    //       setEstado(findProduct.estado);
    //       setReseña(findProduct.reseña);
    //       setImagen(findProduct.imagen);
    //     }
    //   }, [id, libros]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct ={
            titulo,
            autor,
            editorial,
            categorias,
            encuadernacion,
            precio,
            estado,
            imagen,
            id,
            user: user.email
        }
        updateProduct(newProduct);
        console.log("editado")
    };

    return (

        <>
            <Container
                maxWidth="lg"
            >
                <Box
                    sx={{
                        '& > :not(style)': { m: 3, width: '30ch' },
                    }}
                    component="form"
                    onSubmit={handleSubmit} >
                    <Typography
                        variant="h5"
                    >Editar Publicación</Typography>
                    <TextField
                        variant="filled" 
                        label="Titulo"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <TextField
                        variant="filled" 
                        label="Autor"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                    />
                    <TextField
                        variant="filled" 
                        label="Editorial"
                        value={editorial}
                        onChange={e => setEditorial(e.target.value)}
                    />
                    <TextField
                        variant="filled" 
                        label="Categoria"
                        value={categorias}
                        onChange={e => setCategorias(e.target.value)}
                    />
                    <TextField
                        variant="filled" 
                        select
                        label="Encuadernación"
                        defaultValue=""
                        value={encuadernacion}
                        onChange={e => setEncuadernacion(e.target.value)}
                    >
                        {tapas.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        variant="filled" 
                        label="Precio"
                        value={precio}
                        onChange={e => setPrecio(e.target.value)}
                    />
                    <TextField
                        variant="filled" 
                        select
                        label="Estado"
                        defaultValue=""
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                    >
                        {Estados.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        fullWidth label="URL Imagen"
                        variant="filled" 
                        value={imagen}
                        onChange={e => setImagen(e.target.value)}
                    />

                    <TextField
                        variant="filled" 
                        label="Raseña"
                        multiline
                        rows={4}
                        value={reseña}
                        onChange={e => setReseña(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                    >Actualizar</Button>

                </Box>
            </Container>
        </>

    )

}

export default UpdateProduct;