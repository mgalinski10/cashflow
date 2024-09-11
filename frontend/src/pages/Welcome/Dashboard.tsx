import { MainDashboard } from "../../contexts/MainWelcomePage/MainDashboard";
import { LeftNavbar } from "../../components/LeftNavbar/LeftNavbar";
import { MainContent } from "../../components/MainContent/MainContent";
import { Transactions } from "../../components/MainContent/Transactions/Transactions";
import { PieChartbar } from "../../components/PieChartbar/PieChartbar";

export const Dashboard: React.FC = () => {
  return (
    <MainDashboard>
      <LeftNavbar />
      <MainContent header={"Transactions"}>
        <Transactions />
      </MainContent>
      <PieChartbar />
    </MainDashboard>
  );
};
