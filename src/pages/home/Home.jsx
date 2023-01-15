import axios from "axios";
import { useEffect, useState } from "react";
import { formatUserName } from "../../utils/utils";
import { useUserState } from "../../contextApi/contextApi";

export default function Home() {
    const [userState, userDispatch] = useUserState();

    const [users, setUsers] = useState([]);

    // Load the data from the server
    useEffect(() => {
        console.log("HOME STATE: ", userState);
        const getUsers = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        };
        getUsers();
    }, []);

    return (
        <section>
            <h1>HOME</h1>

            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            {user.name} ({formatUserName(user.username)})
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
