import { Link } from "react-router";
import { Styles } from "../styles/style";
import { Toggle_Theme } from "@/functions/Toggle-Theme";

function Header() {
    return (
        <>
            <div className={`p-4 flex justify-around items-center shadow-md dark:shadow-neutral-500 text-lg top-0 left-0 w-full z-10 ${Styles.border} ${Styles.Text}`}>
                <Link to="/" className="hover:scale-115 hover:font-semibold hover:text-blue-600 dark:hover:text-sky-300 duration-500 transform cursor-pointer">Home</Link>
                <Link to="/products" className="hover:scale-115 hover:font-semibold hover:text-blue-600 dark:hover:text-sky-300 duration-500 transform cursor-pointer">Products</Link>
                <button id="theme-toggle-button" className="hover:scale-130 scale-115 duration-500 transform cursor-pointer" onClick={() => Toggle_Theme(true)}>🌓</button>
            </div>
        </>
    )
}
export default Header; 