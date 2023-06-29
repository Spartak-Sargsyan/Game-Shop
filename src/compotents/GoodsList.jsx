import GoodsItem from "./GoodsItem";

const GoodsList = ({ goods = [], addToBascket }) => {
    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => {
                return (
                    <GoodsItem
                        key={item.id}
                        {...item}
                        addToBascket={addToBascket}
                    />
                );
            })}
        </div>
    );
};

export default GoodsList;
