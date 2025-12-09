type ElectricityData = {
  readings: number;
  units: string;
  mode: "single" | "double";
};

type WaterData = {
  readings: number;
  units: string;
};

const electricityUserData: ElectricityData = { readings: 95, units: "kWt", mode: "double" };
const waterUserData: WaterData = { readings: 3, units: "m3" };

const elRate: number = 0.45;
const wRate: number = 2;

const calculatePayments = (
  elData: ElectricityData,
  wData: WaterData,
  elRate: number,
  wRate: number
): [number, number] => {
  const elPayment = elData.mode === "double" && elData.readings < 50
    ? elData.readings * elRate * 0.7
    : elData.readings * elRate;

  const wPayment = wData.readings * wRate;

  return [elPayment, wPayment];
};

const sendInvoice = (
  monthPayments: [number, number],
  electricityUserData: ElectricityData,
  waterUserData: WaterData
): string => {
  return `Hello!
This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
It will cost: ${monthPayments[0].toFixed(2)}€

This month you used ${waterUserData.readings} ${waterUserData.units} of water
It will cost: ${monthPayments[1].toFixed(2)}€`;
};

function main() {
  const monthPayments = calculatePayments(electricityUserData, waterUserData, elRate, wRate);
  console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
}

main();
