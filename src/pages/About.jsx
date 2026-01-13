import AboutIntro from "../components/AboutIntro";
import ChefsSection from "../components/ChefsSection";
import MissionValues from "../components/MissionValues";
import BranchesTable from "../components/BranchesTable";
import CustomerReviews from "../components/CustomerReviews";

const About = () => {
  
  return (
    <main className="content">
      <AboutIntro />
      <ChefsSection />
      <MissionValues />
      <BranchesTable />
      <CustomerReviews />
    </main>
  );
};

export default About;
