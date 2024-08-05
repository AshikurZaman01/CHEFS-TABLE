import CartProcessing from "./CartProcessing";

const Cart = ({ cart, counter, handleAddToProcessing, cartProcessing }) => {
    return (
        <div className="w-full mt-10 flex justify-center">
            <div className="w-full max-w-4xl border border-gray-300 rounded-md p-4 shadow-lg bg-white">
                <div className="mb-6">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">
                        Want to Cook: {counter}
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="py-3 px-2 sm:px-4 border-b"></th>
                                <th className="py-3 px-2 sm:px-4 border-b">Name</th>
                                <th className="py-3 px-2 sm:px-4 border-b">Time</th>
                                <th className="py-3 px-2 sm:px-4 border-b">Calories</th>
                                <th className="py-3 px-2 sm:px-4 border-b"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => (
                                    <tr key={item.id} className="even:bg-gray-50 odd:bg-white">
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">{index + 1}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b">{item.title}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">{item.time}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">{item.calories}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">
                                            <button onClick={() => handleAddToProcessing(item)} className="btn btn-md btn-success rounded-full font-bold">
                                                Processing....
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mt-4">
                    <CartProcessing cartProcessing={cartProcessing} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
