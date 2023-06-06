import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const UserContext = createContext();


const initialStateUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const initialStateUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];


const UserProvider = ({ children }) => { 
    const [users, setUsers ] = useState(initialStateUsers);
    const [user, setUser] = useState(initialStateUser); 

    const getUsers = async () => {
        const res = await fetch("user.json")
        const users = await res.json();
        setUsers(users)
    };


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]); 

    useEffect(() => { 
    if (users.length === 0){
        getUsers(); 
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]); 
    

    const login = (email, password) => {
        const user = users.find(
            (item) => item.email === email && password === item.password
            );
            if (user) {
                setUser(user);
            }else {
                setUser(null);
            }
            return user;
    };

    const register = (newUser) => {
        const user = users.find ((item) => item.email === newUser.email);
        if(user) return user;
        setUser(newUser);
        setUsers([...users, newUser]);
    };

    const logout = () => { 
        setUser(null)
        localStorage.removeItem('user')
    };

    const updateUser = (user) => {
        setUser(user); 

        const usersUpdate = users.map((item) => 
        item.id === user.id ? user : item
        ); 
        setUsers(usersUpdate);
        };
    

    return (
        <UserContext.Provider value={{ user, login, logout, register, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
