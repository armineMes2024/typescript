"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electricityUserData = { readings: 95, units: "kWt", mode: "double" };
const waterUserData = { readings: 3, units: "m3" };
const elRate = 0.45;
const wRate = 2;
const calculatePayments = (elData, wData, elRate, wRate) => {
    const elPayment = elData.mode === "double" && elData.readings < 50
        ? elData.readings * elRate * 0.7
        : elData.readings * elRate;
    const wPayment = wData.readings * wRate;
    return [elPayment, wPayment];
};
const sendInvoice = (monthPayments, electricityUserData, waterUserData) => {
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
//# sourceMappingURL=index.js.map