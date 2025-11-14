type poshPeople = {
  car: string;
  bike: string;
  cnG: string;
};

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof poshPeople;
// const myVehicle1: myVehicle2 = "plane"; (wrong)

// **********************************************************************
type User = {
  id: string;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: "45",
  name: "Boka",
  address: {
    city: "Rangpur",
  },
};

// const myId1 = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const myAddress = user["address"];
// console.log({ myId1, myId, myName, myAddress });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
// const result = getPropertyFromObj(user, "emni");
// console.log(result);

const product = {
  brand: "Apple",
};

const student = {
  id: "5654",
  class: "five",
};

const result2 = getPropertyFromObj(product, "brand");
console.log(result2);
const result3 = getPropertyFromObj(student, "class");
console.log(result3);
