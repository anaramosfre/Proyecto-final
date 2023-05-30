import { Box, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UserContext } from "../../Context/UserContext";


const Registro = () => {

    const { register } = useContext(UserContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");



    // const [error, setError] = useState({
    //     error: false,
    //     message: "",
    // });
    // const validarEmail = (email) => {
    //     const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //     return regex.test(email);
    // };
    // const handleSubmitValidar = (e) => {
    //     e.preventDefault();
    //     if (validarEmail(email)) {
    //         setError({
    //             error: false,
    //             message: "",
    //         });
    //     } else {
    //         setError({
    //             error: true,
    //             message: "Formato de email incorrecto",
    //         });
    //     }
    // };


    // const handleSubmit = (e) => {
    //     e.preventDefault();


    //     register({
    //         name, 
    //         email,
    //         password
    //     })
    // };

    const [error, setError] = useState({
        error: false,
        message: "",
    });

    const validarEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (validarEmail(email)) {
            setError({
                error: false,
                message: "",
            });
       
            register({
                name,
                email,
                password,
                id: Date.now(), 
            });
        } else {
            setError({
                error: true,
                message: "Formato de email incorrecto",
            });
        }
    };




    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                width="400px"
                alignSelf="center"
                margin="auto"
            >
                <TextField
                    id="name"
                    label="Nombre"
                    margin="normal"
                    type="text"
                    variant="outlined"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    error={error.error}
                    helperText={error.message}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Repita contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </FormControl>

                <Button
                    type="submit"
                    variant="outlined"
                    sx={{ mt: 2 }}
                >
                    Registrarse
                </Button>
            </Box>
        </>
    )
}
export default Registro;