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
import Alert from '@mui/material/Alert';
import Swal from "sweetalert2";



const Registro = () => {

    const { register } = useContext(UserContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");



    const [error, setError] = useState({
        error: false,
        message: "",
    });

    const [showAlert, setShowAlert] = useState(false);

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
        if (password !== rePassword) {
            setShowAlert(true);
            valid = false;
        }

        setError(errors);
        return valid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        const user = register({
            name,
            email,
            password,
            id: Date.now(),
        });
        if (user) {
            return Swal.fire({
                icon: 'error',
                text: 'La cuenta ya está registrada',
                footer: '<a href="">Recuperar contraseña</a>'
            })
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!error.nameError}
                    helperText={error.nameError}
                />

                <TextField
                    id="email"
                    label="Email"
                   
                    variant="outlined"
                    fullWidth
                    error={!!error.emailError}
                    helperText={error.emailError}
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
                    {error.passwordError && <Alert severity="error">{error.passwordError}</Alert>}
                </FormControl>
                <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Repita contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-confirm"
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
                    {showAlert && (
                        <Alert severity="error">Las contraseñas no coinciden</Alert>
                    )}

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