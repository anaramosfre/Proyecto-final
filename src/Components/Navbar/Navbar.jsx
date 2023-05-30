import { NavLink } from "react-router-dom"
import "./Navbar.css"
import NavListDrawer from "./NavListDrawer";
import { useContext, useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; 
import { UserContext } from "../../Context/UserContext";


export default function Navbar() {

    const { user, logout } = useContext(UserContext)
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
                    <Typography variant="h6" sx={{ flexGrow: 1 }} >Libros</Typography>

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
