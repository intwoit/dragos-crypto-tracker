const investments = [
{
  asset: "BTC",
  entries: [
    { amount: 600 / 70604.95, price: 70604.95 },
  ],
},
{
  asset: "ETH",
  entries: [
    { amount: 370 / 2138.81, price: 2138.81 },
  ],
},
{
  asset: "SOL",
  entries: [
    { amount: 310 / 94.10, price: 94.10 },
  ],
},


];

export const clientConfig = {
  startingInvestment: 2000,   // baseline fix
  split: { investor: 0.70, manager: 0.30 },
  targetDate: "2025-12-31",
  cashReserved: 350,
};

export default investments;