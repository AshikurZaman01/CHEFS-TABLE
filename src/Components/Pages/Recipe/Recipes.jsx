import { useEffect, useState } from "react";
import Cart from "./Cart";
import Recipe from "./Recipe";
import RHeader from "./RHeader";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartProcessing, setCartProcessing] = useState([]);

    const [counter, setCounter] = useState(0);
    const [processingCounter, setProcessingCounter] = useState(0);


    useEffect(() => {
        fetch('../../../../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.log(err))
    }, [])


    const handleAddToCart = (recipe) => {
        // Check if the recipe is already in the cart
        const isInCart = cart.some((cartItem) => cartItem.id === recipe.id);

        if (isInCart) {
            alert('Already Added');
        } else {
            const newCart = [...cart, recipe];
            setCart(newCart);
            setCounter(counter + 1);
        }
    }

    const handleAddToProcessing = (recipe) => {
        // Check if the recipe is already in processing
        const isInProcessing = cartProcessing.some((cartItem) => cartItem.id === recipe.id);

        if (isInProcessing) {
            alert('Already Added to Processing');
        } else {
            // Remove the recipe from the cart
            const updatedCart = cart.filter((cartItem) => cartItem.id !== recipe.id);
            setCart(updatedCart);

            // Add the recipe to processing
            const newProcessingCart = [...cartProcessing, recipe];
            setCartProcessing(newProcessingCart);

            // Update counters
            setCounter(updatedCart.length);
            setProcessingCounter(newProcessingCart.length);
        }
    }



    return (
        <div>
            <div>
                <RHeader></RHeader>
            </div>

            <div className="w-full  grid grid-cols-5">

                <div className="col-span-3">
                    <Recipe recipes={recipes} handleAddToCart={handleAddToCart}></Recipe>
                </div>

                <div className="col-span-2">
                    <Cart cart={cart} counter={counter} handleAddToProcessing={handleAddToProcessing} processingCounter={processingCounter} cartProcessing={cartProcessing}></Cart>
                </div>
            </div>

        </div>
    );
}

export default Recipes;
