const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 700 / 111021.23, price: 111021.23 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 850 / 4017.20, price: 4017.20 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 100 / 21.78, price: 21.78 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 100 / 212.57, price: 212.57 },
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