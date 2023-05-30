import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { Typography, Box, List, ListItem, ListItemButton, Button, TextField} from "@mui/material";
import { Link } from "react-router-dom";
import "./Dashboard.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const Dashboard = () => {

    const { user, updateUser } = useContext(UserContext);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        updateUser({
            email: email,
            name: name,
            password: password,
            id: user.id
        })
    };


    return (
        <>

            <Typography
                margin="120px auto"
                variant="h5"
            >
            Bienvenido {user.name} 

            </Typography>

            <div className="dashboard">

            <aside>
                <Box sx={{ width: 250, }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to={"/CrearPublicacion"}
                                > Crear Publicación
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ width: 250, }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to={"/MisPublicaciones"}
                                > Mis publicaciones
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ width: 250, }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to={"/MisProductos"}
                                > Mis Productos
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ width: 300, }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to={"/Favoritos"}
                                > Mis Favoritos
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </aside>
            <section className="datos">
                <Box 
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    margin="auto"
                    
                
                >
                    <Typography variant="h6"> <AccountCircleIcon fontSize="medium"/> Mis datos</Typography>

                    <TextField
                        label="Nombre"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Correo"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Contraseña"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /> <br />
                    <Button
                        type="submit"
                        variant="contained" 
                        size="small"
                        >
                        Actualizar</Button>
                </Box>
            </section>
        
            </div>

            
        </>
    )
}
export default Dashboard;