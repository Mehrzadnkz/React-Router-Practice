import axios from "axios";

export function GetProducts() {
    try {
        axios.get('https://fakestoreapi.com/products')
            .then(response => console.log(response));
    } catch (error) {
        console.log(error);
    }

}