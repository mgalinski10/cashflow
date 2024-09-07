import MainWelcomePage from "../../contexts/MainWelcomePage/MainWelcomePage";
import WelcomeCard from "../../components/WelcomeCart/WelcomeCard";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import "./Welcome.scss";

const Welcome: React.FC = () => {
  return (
    <MainWelcomePage>
      <WelcomeCard />
      <WelcomeForm />
    </MainWelcomePage>
  );
};

export default Welcome;
