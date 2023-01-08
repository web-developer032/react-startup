import axios from "axios";
import { useEffect, useState } from "react";
import { formatUserName } from "../../utils/utils";

export default function Home() {
    const [users, setUsers] = useState([]);

    // Load the data from the server
    useEffect(() => {
        let mounted = true;

        const getUsers = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            if (mounted) {
                setUsers(response.data);
            }
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
                            {user.name} @({user.username})
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
