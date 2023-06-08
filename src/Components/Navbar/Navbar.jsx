import { NavLink } from "react-router-dom"
import "./Navbar.css"
import NavListDrawer from "./NavListDrawer";
import { useContext, useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from "../../Context/UserContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CarritoContext } from "../../Context/CarritoContext";
import logo from "../../assets/logofinal.png"


export default function Navbar() {

    const { user, logout } = useContext(UserContext)
    const { carrito } = useContext(CarritoContext);
    const [open, setOpen] = useState(false)


    return (

        <>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}

                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img className="logo" src={logo} alt="" />
                        <Typography variant="body1" sx={{ marginLeft: '10px', fontFamily:'initial', fontSize: '23px' }}>
                        Alma Libros
                        </Typography>

                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "block" } }} >
                        <Button
                            color="inherit"
                            component={NavLink}
                            to={"/"}
                        > Home </Button>

                        {user ? (
                            <>
                                <Button
                                    color="inherit"
                                    component={NavLink}
                                    to={"/Dashboard"}
                                > Dashboard </Button>
                                <Button
                                    color="inherit"
                                    component={NavLink}
                                    onClick={logout}
                                > Cerrar Sesión </Button>
                                <IconButton
                                    component={NavLink}
                                    to={"/Carrito"}
                                    color="inherit"
                                    size="small"
                                >
                                    <ShoppingCartIcon />
                                    {carrito.length}
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <Button
                                    color="inherit"
                                    component={NavLink}
                                    to={"/IniciarSesion"}
                                > Iniciar Sesión </Button>
                                <Button
                                    color="inherit"
                                    component={NavLink}
                                    to={"/Registro"}
                                > Registrarse </Button>
                            </>
                        )}
                    </Box>

                </Toolbar>

            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavListDrawer
                    NavLink={NavLink}
                    setOpen={setOpen}
                />
            </Drawer>

        </>

    )
}
