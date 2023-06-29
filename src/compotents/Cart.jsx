const Cart = ({ quantity = 0, handleBasketShow }) => {
    return (
        <div
            className="cart blue darkern-4 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="card_quantity">{quantity}</span>
            ) : null}
        </div>
    );
};

export default Cart;
