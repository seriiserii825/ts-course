type TAccountNumber = number & { _brand: "TAccountNumber" };
type TCredits = number & { _brand: "TCredits" };

const balance = 10000 as TCredits;
const amount = 2000 as TCredits;
const account_number  = 1234567890 as TAccountNumber;

function increase(balance: TCredits, amount: TCredits): TCredits {
  return balance + amount;
}

const newBalance = increase(balance, amount);
const secondBalance = increase(newBalance, account_number);
