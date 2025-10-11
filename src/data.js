const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 1237 / 113056, price: 113056 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 200 / 3873.54, price: 3873.54 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 100 / 15.94, price: 15.94 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 0 / 222.80, price: 222.80 },
     ]
  },


];

export const clientConfig = {
  startingInvestment: 2000,   // baseline fix
  split: { investor: 0.70, manager: 0.30 },
  targetDate: "2025-12-31",
  cashReserved: 0,
};

export default investments;