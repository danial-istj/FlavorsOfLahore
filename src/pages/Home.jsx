import HomeHero from "../components/HomeHero";
import BestSelling from "../components/BestSelling";
import WhyChooseUs from "../components/WhyChooseUs";
import TodaysSpecials from "../components/TodaysSpecials";
import PopularDishes from "../components/PopularDishes";
import KitchenVideo from "../components/KitchenVideo";
import RestaurantAudio from "../components/RestaurantAudio";


const Home = () => {
 

  return (
    <main className="content">
      <HomeHero />
      <BestSelling />
      <WhyChooseUs />
      <TodaysSpecials />
      <PopularDishes />
      <KitchenVideo />
      <RestaurantAudio />
    </main>
  );
};

export default Home;
