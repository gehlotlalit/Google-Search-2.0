import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
    <div className="flex h-[100vh] flex-col">
        <HomeHeader/>
        <main className="grow flex justify-center"></main>
    </div>
    );
};

export default Home;
