import { NavLink } from "react-router-dom";

export default function Sidebar () {
    return <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phoneBook">Phone Book</NavLink>
    </div>
};