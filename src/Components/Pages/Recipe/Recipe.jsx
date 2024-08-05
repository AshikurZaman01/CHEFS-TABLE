import React, { useState } from 'react';

const Recipe = ({ recipes, handleAddToCart }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentIngredients, setCurrentIngredients] = useState([]);

    const openModal = (ingredients) => {
        setCurrentIngredients(ingredients);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentIngredients([]);
    };

    return (
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-2 gap-10">
                {recipes.map((reci) => (
                    <div key={reci.id} className="p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                        <div>
                            <img className="w-full h-[200px] rounded-2xl object-cover" src={reci.image} alt="" />
                        </div>

                        <div className="mt-5 text-center space-y-2">
                            <h2 className="text-2xl font-bold text-gray-800 capitalize">{reci.title}</h2>
                            <h3 className="text-base font-semibold text-gray-600 capitalize">{reci.description}</h3>
                        </div>

                        <div className="mt-5">
                            <button
                                onClick={() => openModal(reci.ingredients)}
                                className="w-full px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300"
                            >
                                Show Ingredients
                            </button>
                        </div>

                        <div className="mt-3">
                            <button onClick={() => handleAddToCart(reci)} className="w-full px-5 py-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-600 transition-all duration-300">
                                Want to cook
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {currentIngredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700">{ingredient}</li>
                            ))}
                        </ul>
                        <button
                            onClick={closeModal}
                            className="mt-5 px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recipe;
