import { Link } from "react-router";

function Main_Content() {
    return (
        <>
            <div className="border-b-2 p-4 flex justify-around items-center text-lg">
                <Link to="/" className="hover:scale-115 hover:font-semibold hover:text-blue-600 duration-500 transform cursor-pointer">Home</Link>
                <Link to="/products" className="hover:scale-115 hover:font-semibold hover:text-blue-600 duration-500 transform cursor-pointer">Products</Link>
            </div>
        </>
    )
}

export default Main_Content; 