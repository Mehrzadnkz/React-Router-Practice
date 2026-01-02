import axios from "axios";

export async function GetProducts() {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
}

export async function GetProductById(id: string | number) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
}