type Transaction = {
  id: number;
  category: string;
  amount: number;
  date: string;
};

type Transactions = Transaction[];

export const calcTotalAmount = (transactions: Transactions) => {
  const totalAmount = transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);

  return totalAmount.toFixed(2);
};
