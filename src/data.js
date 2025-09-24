const investments = [
{
    asset: "ADA",
    entries: [
      { amount: 1070 / 0.852, price: 0.852 },
     ]
  },
{
    asset: "LINK",
    entries: [
      { amount: 1441 / 21.61, price: 21.61 },
     ]
  },
{
    asset: "BTC",
    entries: [
      { amount: 0.05, price: 40000 }, // exemplu: 0.05 BTC cumpărat la $40,000
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