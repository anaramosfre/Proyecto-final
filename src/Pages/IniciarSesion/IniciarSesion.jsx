import "./IniciarSesion.css"
import { useContext, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Typography } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import Alert from '@mui/material/Alert';



export default function Registro() {

    const { login } = useContext(UserContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
            emailError: "",
            passwordError:""
        };

    if (!validarEmail(email)) {
        errors.emailError = "Formato de email no es válido";
        valid = false;
    }

    if (password.length <6) {
        errors.passwordError ="La contraseña debe tener al menos 6 caracteres"
        valid= false;
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


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarFormulario()){
            return;
        }

        const user = await login(email, password);
        if (user) {
            setEmail("");
            setPassword(""); 
            return navigate("/Dashboard") 

        } else {
            Swal.fire({
                icon: 'error',
                text: 'Usuario no registrado',
                footer: '<a href="">¿Olvidó su contraseña?</a>'
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
            <div className="login">
            <Typography variant="h5" margin="auto">
                Iniciar Sesión
            </Typography> <br/>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                margin="auto"
                display="flex"
                flexDirection="column"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                    error={!!error.emailError} 
                    helperText={error.emailError}
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
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error.passwordError &&  <Alert severity="error">{error.passwordError}</Alert>} <br />

                    <Button  
                    type="submit"
                    variant="outlined"
                >
                    Acceder
                </Button> <br />
                </FormControl>

            </Box>
            <p> Recuperar contraseña</p>

            </div>
        </>
    )
}