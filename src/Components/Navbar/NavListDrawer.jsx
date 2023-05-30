import { Box, Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";



export default function NavListDrawer({ NavLink, setOpen }) {

    const { user, logout } = useContext(UserContext)

    return (
        <>
        <Box sx={{ width: 250 }}>
<nav>
    <List>
        <ListItem
            disablePadding
        >
            <ListItemButton
                component={NavLink}
                onClick={() => setOpen(false)}
            >
                <Button
                    color="inherit"
                    component={NavLink}
                    to={"/"}
                > Home </Button>
                {user ? (
                    <>
                        <ListItemText
                            color="inherit"
                            component={NavLink}
                            to={"/Dashboard"}
                        > Dashboard </ListItemText>
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
                )
                }
            </ListItemButton>
        </ListItem>

    </List>
</nav>
</Box>
        </>

    )
}



