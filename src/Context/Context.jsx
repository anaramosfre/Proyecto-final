import { createContext, useState, useEffect } from "react";

export const Context = createContext(); 

const initialProductState = localStorage.getItem('libros') ? 
JSON.parse(localStorage.getItem('libros')) : [];

export function Provider({children})  {
    const [libros, setLibros] = useState(initialProductState);


    const getLibros = async () => {
        const response = await fetch("./libros.json");
        const data = await response.json();
        setLibros(data); 
    };
    useEffect(() => {
        if(libros.length === 0){
            getLibros();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('libros', JSON.stringify(libros))
    }, [libros]);


    //CREAR PUBLICACION

    const createProduct = (libro) => {
        setLibros([libro, ...libros]);
    }

    //ELIMINAR PRODUCTO

    const deleteProduct = id => {
        const newProducts = libros.filter(libro => libro.id !== id)
        setLibros(newProducts)
    }

    //ACTUALIZAR PRODUCTO 

    const updateProduct = (newProduct) => {
        const newProducts = libros.map(libro => {
            if(libro.id === newProduct.id) { 
                return newProduct
            }
            return libro
        });
        setLibros(newProducts);
    };



       //CARRITO





    const globalState = {libros,createProduct, deleteProduct, updateProduct, setLibros};

    return <Context.Provider value={globalState} > {children} </Context.Provider> 
}