const GoodsItem = ({
    id,
    name,
    description,
    price,
    full_background,
    addToBascket,
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    onClick={() => {
                        addToBascket({
                            id,
                            name,
                            price,
                        });
                    }}
                    className="btn"
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: "1.5rem" }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
};

export default GoodsItem;
