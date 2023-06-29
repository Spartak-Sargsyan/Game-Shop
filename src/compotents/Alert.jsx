import { useEffect } from "react";

const Alert = ({ name = "", closeAlert }) => {
    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timer);
        };
        //eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
};

export default Alert;
