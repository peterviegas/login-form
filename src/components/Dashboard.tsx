import { useAuth } from "../AuthContext";

export default function Dashboard(){
    const { user, logout } = useAuth();

    return(
        <div>
            <h2>Well come, {user}</h2>
            <button onClick={logout}>Exit</button>
        </div>
    )
}