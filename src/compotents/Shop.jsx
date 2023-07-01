import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";
const Shop = () => {
    const { setGoods, isLoading, order, isBasketShow, alertName } =
        useContext(ShopContext);

    // const [goods, setGoods] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [order, setOrder] = useState([]);
    // const [isBasketShow, setIsBasketShow] = useState(false);
    // const [alertName, setAlertName] = useState("");

    // const handleBasketShow = () => {
    //     setIsBasketShow(!isBasketShow);
    // };

    // const incQuantity = (itemId) => {
    //     const newOrder = order.map((item) => {
    //         if (item.id === itemId) {
    //             const newQuantity = item.quantity + 1;
    //             return {
    //                 ...item,
    //                 quantity: newQuantity,
    //             };
    //         } else {
    //             return item;
    //         }
    //     });
    //     setOrder(newOrder);
    // };

    // const decQuantity = (itemId) => {
    //     const newOrder = order.map((item) => {
    //         if (item.id === itemId) {
    //             const newQuantity = item.quantity - 1;
    //             return {
    //                 ...item,
    //                 quantity: newQuantity >= 0 ? newQuantity : 0,
    //             };
    //         } else {
    //             return item;
    //         }
    //     });
    //     setOrder(newOrder);
    // };

    // const closeAlert = () => setAlertName("");

    // const removeFromBasket = (itemId) => {
    //     const newOrder = order.filter((item) => item.id !== itemId);
    //     setOrder(newOrder);
    // };

    // const addToBascket = (item) => {
    //     const itemIndex = order.findIndex(
    //         (orderItem) => orderItem.id === item.id
    //     );
    //     if (itemIndex < 0) {
    //         const newItem = {
    //             ...item,
    //             quantity: 1,
    //         };
    //         setOrder([...order, newItem]);
    //     } else {
    //         const newGoods = order.map((orderItem, index) => {
    //             if (index === itemIndex) {
    //                 return {
    //                     ...orderItem,
    //                     quantity: orderItem.quantity + 1,
    //                 };
    //             } else {
    //                 return orderItem;
    //             }
    //         });
    //         setOrder(newGoods);
    //     }
    //     setAlertName(item.name);
    // };

    //getGoods

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setGoods(res.featured);
            })
            .catch((error) => console.error(error));
        //eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart
                quantity={order.length}
                //  handleBasketShow={handleBasketShow}
            />

            {isLoading ? (
                <Preloader />
            ) : (
                <GoodsList
                // goods={goods}
                />
            )}
            {isBasketShow && (
                <BasketList
                // order={order}
                // handleBasketShow={handleBasketShow}
                // removeFromBasket={removeFromBasket}
                // incQuantity={incQuantity}
                // decQuantity={decQuantity}
                />
            )}
            {alertName && (
                <Alert
                // name={alertName}
                // closeAlert={closeAlert}
                />
            )}
        </main>
    );
};

export default Shop;
