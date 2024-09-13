import { MainDashboard } from "../../contexts/MainWelcomePage/MainDashboard";
import { LeftNavbar } from "../../components/LeftNavbar/LeftNavbar";
import { MainContent } from "../../components/MainContent/MainContent";
import { Transactions } from "../../components/MainContent/Transactions/Transactions";
import { PieChartbar } from "../../components/PieChartbar/PieChartbar";
import { navContent } from "../../assets/nav";
import { transactions } from "../../assets/transactions";

export const Dashboard: React.FC = () => {
  return (
    <MainDashboard>
      <LeftNavbar content={navContent} />
      <MainContent>
        <Transactions transactions={transactions} />
      </MainContent>
      <PieChartbar transactions={transactions} />
    </MainDashboard>
  );
};
