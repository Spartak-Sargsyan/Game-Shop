import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //getGoods
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                res.featured && setGoods(res.featured);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <main className="container content">{isLoading && <Preloader />}</main>
    );
};

export default Shop;
