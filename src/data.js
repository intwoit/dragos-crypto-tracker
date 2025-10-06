const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 610 / 110925.40, price: 110925.40 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 936 / 4334.40, price: 4334.40 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 300 / 22.45, price: 22.45 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 200 / 222.80, price: 222.80 },
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