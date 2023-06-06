import {  useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

export const CarritoContext = createContext()

const CarritoProvider= ({children}) => {

    const [carrito, setCarrito] = useState([]);


    const addLibro = (libro) => {
        const findID = carrito.find((item) => libro.id === item.id);
        if (findID) {
            const newLibros = carrito.map((item) => 
                item.id === findID.id ? {...libro, cantidad: findID.cantidad + 1 } : item
                );
                return setCarrito(newLibros)   
        }
        setCarrito([...carrito, {...libro,cantidad: 1}]); 
        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito 🛒',
        })
    };

    const aumentarCantidad = (id) => {
        const newLibros = carrito.map((item) => 
            item.id === id ? {...item, cantidad: item.cantidad +1 } : item
        );
        setCarrito(newLibros)
    };
    
    const disminuirCantidad = (id) => {
        const newLibros = carrito.map((item) => 
            item.id === id ? {...item, cantidad: item.cantidad -1 } : item
        )
        .filter((item) => item.cantidad > 0 );
        setCarrito(newLibros);
    }; 

    const sumaCarrito = carrito.reduce( 
        (acc, item) => item.precio * item.cantidad + acc, 0, 
    );

    const eliminarProducto = (id) => {
        const newCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(newCarrito);
    }



    return (
        <CarritoContext.Provider value={{carrito, addLibro, aumentarCantidad, disminuirCantidad, sumaCarrito, eliminarProducto }}>
            {children}
        </CarritoContext.Provider>
    );
}

export default CarritoProvider;

