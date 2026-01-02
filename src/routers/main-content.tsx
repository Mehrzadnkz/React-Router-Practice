import { GetProducts } from "@/auth/api";
import { Styles } from "@/components/styles/style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = { id: number; title?: string;[key: string]: any };

function Main_Content() {
    const [response, setResponse] = useState<Product[] | null>(null);

    useEffect(() => {
        let mounted = true;
        GetProducts()
            .then((data) => {
                if (mounted) setResponse(data);
            })
            .catch(() => {
                if (mounted) setResponse([]);
            });
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <>
            <div className="min-w-dvw p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {response ? (
                        response.map((p) => (
                            <Link to={`/products/${p.id}`} key={p.id} className="no-underline">
                                <div
                                    className={`h-50 border ${Styles.border} flex flex-col items-center justify-center p-5 gap-2 cursor-pointer hover:scale-105 hover:shadow-lg duration-500 transform ${Styles.Text}`}
                                >
                                    <img src={p.image} alt={p.title} className="w-16 h-16 object-contain" />
                                    <h2>Title : {p.title}</h2>
                                    <h2 className="w-full truncate">Description : {p.description}</h2>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Main_Content;
