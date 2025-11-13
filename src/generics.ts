type GenericArray<T> = Array<T>;

// const friends = ["Boka", "Soka", "Poka"];
const friends: GenericArray<string> = ["Boka", "Soka", "Poka"];

// const rollNumbers = [5, 8, 4];
const rollNumbers: GenericArray<number> = [5, 8, 4];

// const isEligible = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];

// object *************************************

type User = { name: string; age: number };
const userList: GenericArray<User> = [
  {
    name: "Mr.Boka",
    age: 54,
  },
  {
    name: "Mr. Soka",
    age: 52,
  },
];

// off topic [square function]
const squareFunction = (value: number) => {
  return value * value;
};
squareFunction(635);

// coordinates

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 56];
const coordinates2: Coordinates<String, string> = ["65", "56"];
