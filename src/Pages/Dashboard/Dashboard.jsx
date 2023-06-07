import "./Dashboard.css"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { Typography, Box, List, ListItem, ListItemButton, Button, TextField, Grid} from "@mui/material";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Swal from "sweetalert2";
import EditIcon from '@mui/icons-material/Edit';
import Avatar from 'react-avatar';


const Dashboard = () => {

    const { user, updateUser } = useContext(UserContext);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    const [error, setError] = useState({
        error: false,
        message: "",
    });

    const validarEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const validarFormulario = () => {
        let valid = true;
        const errors = {
            nameError: "",
            emailError: "",
            passwordError: ""
        };
        if (name.trim() === "") {
            errors.nameError = "El campo de nombre es obligatorio";
            valid = false;
        }

        if (!validarEmail(email)) {
            errors.emailError = "Formato de email no es válido";
            valid = false;
        }

        if (password.length < 6) {
            errors.passwordError = "La contraseña debe tener al menos 6 caracteres"
            valid = false;
        }
        if  (!/\d/.test(password)) {
            errors.passwordError = "La contraseña debe contener al menos un número"
            valid = false;
        } 
        if (/\s/.test(password)) {
            errors.passwordError = "La contraseña no debe contener espacios"
            valid = false;
        }
    
        setError(errors);
        return valid;
    };

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return}

        updateUser({
            email: email,
            name: name,
            password: password,
            id: user.id
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Cuenta actualizada',
            showConfirmButton: false,
            timer: 1500
        })};


    return (
        <>
            <Grid container className="menu">
                <Box sx={{ width: 200 }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    component={Link}
                                    to={"/CrearPublicacion"}
                                > Crear Publicación
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ width: 200 }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    component={Link}
                                    to={"/MisPublicaciones"}
                                > Mis publicaciones
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ width: 200 }}>
                    <List>
                        <ListItem  disablePadding>
                            <ListItemButton>
                                <Button
                                    component={Link}
                                    to={"/Carrito"}
                                > Mis Productos
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ width: 200 }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    component={Link}
                                    to={"/Favoritos"}
                                > Mis Favoritos
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ width: 200 }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    component={Link}
                                    to={"/DonarProduct"}
                                > Donaciones
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Grid>
            
            <div className="usuario">
            <Avatar name={user.name} size={50} round={true} /> 
            <Typography
                margin="auto"
                variant="h5"
            >
            Bienvenido(a) {user.name}
            <Typography>
            {user.email} 
            </Typography>
            </Typography>
            </div>
    
            <div className="perfil">
                <Box 
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    margin="auto"    
                    >
                    <Typography variant="h6"> <EditIcon fontSize="medium"/> Editar Perfil</Typography>
                    <TextField
                        label="Nombre"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error.nameError && <Alert variant="outlined" severity="error">{error.nameError}</Alert>}
                    <TextField
                        label="Correo"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.emailError && <Alert variant="outlined" severity="error">{error.emailError}</Alert>}
                    <TextField
                        label="Contraseña"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /> 
                    {error.passwordError && <Alert variant="outlined" severity="error">{error.passwordError}</Alert>}
                    <br />
                    <Button
                        type="submit"
                        variant="outlined" 
                        size="small"
                        >
                        Actualizar</Button>
                </Box>
            </div>        
        </>
    )}
export default Dashboard;