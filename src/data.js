const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 410 / 67034, price: 67034 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 200 / 1876, price: 1876 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 140 / 80.33, price: 80.33 },
     ]
  },


];

export const clientConfig = {
  startingInvestment: 2000,   // baseline fix
  split: { investor: 0.70, manager: 0.30 },
  targetDate: "2025-12-31",
  cashReserved: 350,
};

export default investments;