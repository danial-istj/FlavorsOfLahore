import MenuIntro from "../components/MenuIntro";
import Starters from "../components/Starters";
import MainCourseTable from "../components/MainCourseTable";
import Beverages from "../components/Beverages";
import ChefsRecommendations from "../components/ChefsRecommendations";
import SpecialOffer from "../components/SpecialOffer";


const Menu = () => {
  


  return (
    <main className="content">
      <MenuIntro />
      <Starters />
      <MainCourseTable />
      <Beverages />
      <ChefsRecommendations />
      <SpecialOffer />
    </main>
  );
};

export default Menu;
