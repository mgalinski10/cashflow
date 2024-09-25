type Transaction = {
  id: number;
  category: string;
  amount: number;
  date: string;
};

type Transactions = Transaction[];

interface Category {
  transactions: number;
}

interface CategoryCounts {
  [key: string]: number;
}

type Accumulator = Record<string, number>;

export const countCategories = (transactions: Transactions) => {
  const countedCategories = transactions.reduce(
    (acc: Accumulator, transaction) => {
      const { category } = transaction;

      if (acc[category]) {
        acc[category]++;
      } else {
        acc[category] = 1;
      }

      return acc;
    },

    {}
  );

  const result = getValuesFrom(countedCategories);

  return result;
};

const getValuesFrom = (object: CategoryCounts) => {
  return Object.values(object);
};
