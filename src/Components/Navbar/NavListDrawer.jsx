import "./Navbar.css";
import { Box, Button, List, ListItemButton, ListItemText, ListItemIcon, ListItem } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { CarritoContext } from "../../Context/CarritoContext"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';



export default function NavListDrawer({ NavLink, setOpen }) {

    const { user, logout } = useContext(UserContext)
    const { carrito } = useContext(CarritoContext);

    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav>
                    <List>
                        <ListItem>
                            <ListItemButton
                                component={NavLink}
                                to={"/"}
                                onClick={() => setOpen(false)}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>

            {user ? (
                <>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav>
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        color="inherit"
                                        component={NavLink}
                                        to={"/Dashboard"}
                                        onClick={() => setOpen(false)}>
                                        <ListItemIcon>
                                            <AccountCircleIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Dashboard" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav>
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        color="inherit"
                                        component={NavLink}
                                        to={"/Carrito"}
                                        onClick={() => setOpen(false)}>
                                        <ListItemIcon>
                                            <ShoppingCartIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Carrito" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav>
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        color="inherit"
                                        component={NavLink}
                                        onClick={logout}>
                                        <ListItemIcon>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Cerrar Sesión" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </>
            ) : (
                <>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav>
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        color="inherit"
                                        component={NavLink}
                                        to={"/IniciarSesion"}
                                        onClick={() => setOpen(false)}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Iniciar Sesión" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav>
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        color="inherit"
                                        component={NavLink}
                                        to={"/Registro"}
                                        onClick={() => setOpen(false)}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Registrarse" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </>
            )}
        </>
    )}
