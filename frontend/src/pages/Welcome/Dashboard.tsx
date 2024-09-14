import { MainDashboard } from "../../layouts/MainDashboard";
import { LeftNavbar } from "../../components/LeftNavbar/LeftNavbar";
import { MainContent } from "../../components/MainContent/MainContent";
import { Transactions } from "../../components/MainContent/Transactions/Transactions";
import { RightBar } from "../../components/RightBar/RightBar";
import { User } from "../../components/Header/User/User/User";
import { Header } from "../../components/Header/Header";

import { navContent } from "../../assets/nav";
import { transactions } from "../../assets/transactions";

export const Dashboard: React.FC = () => {
  return (
    <MainDashboard>
      <LeftNavbar content={navContent} />
      <MainContent>
        <Transactions transactions={transactions} />
        <RightBar transactions={transactions} />
      </MainContent>
    </MainDashboard>
  );
};
