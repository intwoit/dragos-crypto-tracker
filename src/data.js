const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 129.76 / 113056, price: 113056 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 988.53 / 3039.70, price: 3039.70 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 100 / 15.94, price: 15.94 },
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