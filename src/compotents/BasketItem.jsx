import { useContext } from "react";
import { ShopContext } from "../context";

const BasketItem = ({
    id,
    name,
    price,
    quantity,
    // removeFromBasket,
    // incQuantity,
    // decQuantity,
}) => {
    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);

    return (
        <li className="collection-item">
            {name}
            <i
                className="material-icons basket-count"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{" "}
            x{quantity}
            <i
                className="material-icons basket-count"
                onClick={() => incQuantity(id)}
            >
                add
            </i>{" "}
            = {price * quantity}
            руб.
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>
    );
};

export default BasketItem;
