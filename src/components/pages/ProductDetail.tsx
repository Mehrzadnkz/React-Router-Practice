import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetProductById } from "@/auth/api";
import { Button } from "../ui/button";

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        let mounted = true;
        GetProductById(id)
            .then((data) => {
                if (mounted) setProduct(data);
            })
            .catch(() => {
                if (mounted) setProduct(null);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => {
            mounted = false;
        };
    }, [id]);

    if (loading) return <p className="p-5">Loading...</p>;
    if (!product) return <p className="p-5">Product not found</p>;

    return (
        <div className="p-5 flex flex-col gap-4">
            <h1 className="text-xl font-bold">{product.title}</h1>
            <img src={product.image} alt={product.title} className="w-40 h-40 object-contain" />
            <p>{product.description}</p>
            <p className="font-semibold">Price: ${product.price}</p>
            <Button variant={"destructive"} size={"lg"}><Link className="w-full h-full flex justify-center items-center" to="/products">Back to Products</Link></Button>
        </div>
    );
}