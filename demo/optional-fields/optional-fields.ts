/* eslint-disable */

// You can define optional fields in your object types. Optional fields are
// fields that may or may not be present in an object. You can make a field
// optional by appending a question mark "?" to its name in the type
// definition. This is useful when you have an object with some properties that
// are not always required.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties

type Warranty = "standard" | "extended";

// Function to return what should be displayed for each
function warrantyInfo(warranty: Warranty): string {
  switch (warranty) {
    case "standard":
      return "90 day warranty";
    case "extended":
      return "180 day extended warranty";
    default:
      return "Unknown warranty type";
  }
}

interface LineItem {
  name: string;
  quantity: number;
  warranty?: Warranty;
}

function printLine(item: LineItem): void {
  console.log(`Item ${item.name}`);
  console.log(`Quantity ${item.quantity}`);

  if (item.warranty !== undefined) {
    console.log(`Warranty ${warrantyInfo(item.warranty)}`);
  } else {
    console.log(`Warranty: None`);
  }
}

const boxFan: LineItem = {
  name: "box fan",
  quantity: 1,
};

const heater: LineItem = {
  name: "space heater",
  quantity: 1,
  warranty: "standard",
};

printLine(heater);
