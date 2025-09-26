const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 500 / 111701.58, price: 111701.58 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 650 / 4018.37, price: 4018.37 },
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