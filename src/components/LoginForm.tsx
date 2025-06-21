import { useState } from "react";
import { useAuth } from "../AuthContext";




export default function LoginForm(){

    const [name, setName] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) login(name);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input 
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <button type="submit">Enter</button>
        </form>
    )
}
