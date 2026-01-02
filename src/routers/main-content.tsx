import { Link } from "react-router";

function Main_Content() {
    return (
        <>
            <div className="border-b-2 p-4 flex justify-around items-center text-lg">
                <Link to={{ pathname: "/" }}>Home</Link>
                <Link to={{ pathname: "/products" }}>Products</Link>
            </div>
        </>
    )
}

export default Main_Content; 