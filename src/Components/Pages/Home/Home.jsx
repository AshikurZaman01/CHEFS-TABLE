import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Recipes from "../Recipe/Recipes";

const Home = () => {
    return (
        <div className="container mx-auto px-5">
            <Header></Header>
            <Banner></Banner>
            <Recipes></Recipes>
        </div>
    );
};

export default Home;