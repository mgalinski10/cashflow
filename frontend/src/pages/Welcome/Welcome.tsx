import MainWelcomePage from "../../contexts/MainWelcomePage/MainWelcomePage";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";

const Welcome: React.FC = () => {
  return (
    <MainWelcomePage>
      <WelcomeCard />
      <WelcomeForm />
    </MainWelcomePage>
  );
};

export default Welcome;
