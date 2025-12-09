
function isEmpty(value: unknown): value is "empty" {
	return value === "empty";
}

type ClothesWarehouse = {
	jackets: "empty" | number;
	hats: "empty" | number;
	socks: "empty" | number;
	pants: "empty" | number;
};

type StationeryWarehouse = {
	scissors: "empty" | number;
	paper: "empty" | boolean;
};

type AppliancesWarehouse = {
	dishwashers: "empty" | number;
	cookers: "empty" | number;
	mixers: "empty" | number;
};

type TotalWarehouse =
	ClothesWarehouse &
	StationeryWarehouse &
	AppliancesWarehouse & {
		deficit?: boolean;
		date?: Date;
	};

// === Данные ===
const totalData: TotalWarehouse = {
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

function printReport(data: TotalWarehouse): string {
	const emptyItems: string[] = [];

	for (const [key, value] of Object.entries(data)) {
		// говорим TS: value может быть одним из допустимых типов
		const typedValue = value as "empty" | number | boolean | Date | undefined;

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
