"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/////////////////////////
// === Type guard — определяет является ли значение "empty" ===
function isEmpty(value) {
    return value === "empty";
}
// === Данные ===
const totalData = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
};
// === Функция с автоматическим определением empty ===
function printReport(data) {
    const emptyItems = [];
    for (const [key, value] of Object.entries(data)) {
        // говорим TS: value может быть одним из допустимых типов
        const typedValue = value;
        if (isEmpty(typedValue)) {
            emptyItems.push(key);
        }
    }
    if (emptyItems.length === 0) {
        return "Everything fine";
    }
    return `We need this items: ${emptyItems.join(", ")}`;
}
console.log(printReport(totalData));
//# sourceMappingURL=index2.js.map