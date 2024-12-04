import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/cartSlice";
import { IMG_URL } from "../config";

const Carts = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    // const handleRemove = (itemId) => {
    //     dispatch(removeItem(itemId));
    // };
    const handleRemove = (cartItemId) => {
        dispatch(removeItem(cartItemId));
    };
    

    const clearCart = () => {
        dispatch(clearItem());
    };

    return (
        <div className="pt-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cart Items ({cartItems.length})</h1>
            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="relative bg-white p-4 rounded-lg shadow-lg overflow-hidden" key={item.id}>
                                <button
                                    className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300"
                                    onClick={() => handleRemove(item.cartItemId)}
                                >
                                    <span className="sr-only">Remove</span> X
                                </button>
                                <img
                                    src={`${IMG_URL}${item.card.info.imageId}`}
                                    alt={item.card.info.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2">{item.card.info.name}</h3>
                                <p className="text-gray-700 mb-2">{item.card.info.description}</p>
                                <p className="text-gray-900 font-bold">
                                    Price: ₹{(item.card?.info?.price || item.card?.info?.defaultPrice) / 100}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">Your cart is empty.</p>
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className="mt-6 flex justify-center">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carts;
