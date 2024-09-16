type Transaction = {
  id: number;
  category: string;
  amount: number;
  date: string;
};

type Transactions = Transaction[];

type CategoryCounter = {
  [key: string]: {
    counter: number;
  };
};

type Group = { counter: number };

export const GroupByCategory = (transactions: Transactions) => {
  const groups = transactions.reduce<CategoryCounter>((acc, current) => {
    if (!(current.category in acc)) {
      acc[current.category] = {
        counter: 0,
      };
    }

    acc[current.category].counter += 1;

    return acc;
  }, {});

  const values = Object.entries(groups).map(([_, value]) => value);
  const result = values.map((c) => c.counter);
  return result;
};
