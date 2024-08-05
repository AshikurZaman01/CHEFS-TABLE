const CartProcessing = ({ cartProcessing }) => {
    return (
        <div>
            <div className="w-full mt-10 flex justify-center">
                <div className="w-full max-w-4xl border border-gray-300 rounded-md p-4 shadow-lg bg-blue-50"> {/* Changed background color */}
                    <div className="mb-6">
                        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">
                            Cooking: {cartProcessing.length}
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
                                {cartProcessing.map((item, index) => (
                                    <tr key={item.id} className="even:bg-gray-50 odd:bg-white">
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">{index + 1}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b">{item.title}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">{item.time}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">{item.calories}</td>
                                        <td className="py-2 px-2 sm:px-4 border-b text-center">
                                            <button className="btn btn-md btn-success rounded-full font-bold">
                                                Cooking....
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProcessing;
