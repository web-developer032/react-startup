import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    );
}
