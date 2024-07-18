import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/cartSlice";
import { IMG_URL } from "../config";

const Carts = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId)); // Pass the item ID to be removed
    };

    const clearCart = () => {
        dispatch(clearItem());
    };

    return (
        <div className="pt-28">
            <h1 className="text-4xl font-bold mb-6">Cart Items - {cartItems.length}</h1>
            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cartItems?.map((item) => (
                        <div className="relative bg-gray-100 p-4 rounded-lg shadow-md" key={item.id}>
                            <button
                                className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-700 transition duration-300"
                                onClick={() => handleRemove(item.id)}
                            >
                                X
                            </button>
                            <h3 className="text-xl font-semibold mb-2">{item.card.info.name}</h3>
                            <p className="text-gray-700 mb-2">{item.card.info.description}</p>
                            <p className="text-gray-900 font-bold mb-2">
                                Price: ₹{(item.card?.info?.price || item.card?.info?.defaultPrice) / 100}
                            </p>
                            {item.card.info.imageId && (
                                <img
                                    src={`${IMG_URL}${item.card.info.imageId}`}
                                    alt={item.card.info.name}
                                    className="w-full h-80 object-cover rounded-lg"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <button
                    className="mt-6 px-4 py-2 bg-blue-200 rounded-md hover:bg-blue-300 transition duration-300"
                    onClick={clearCart}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Carts;
