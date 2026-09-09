const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 560 / 69785, price: 69785 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 300 / 2043, price: 2043 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 210 / 86.71, price: 86.71 },
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