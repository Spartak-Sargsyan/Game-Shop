import { useContext, useEffect } from "react";
import { ShopContext } from "../context";

const Alert = () => {
    const { alertName = "", closeAlert } = useContext(ShopContext);
    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timer);
        };
        //eslint-disable-next-line
    }, [name]);
    return (
        <div id="toast-container">
            <div className="toast">{alertName} добавлен в корзину</div>
        </div>
    );
};

export default Alert;
