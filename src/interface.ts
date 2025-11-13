type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Mr.Boka",
  age: 65,
  role: "admin",
};

const user2: IUser = {
  name: "Mr. Soka",
  age: 78,
};

// ************************************************
type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

// function****************************************

type Add = (num1: number, num2: number) => number;
interface IAdd {
  (num1: number, num2: number): number;
}
const add: IAdd = (num1, num2) => num1 + num2;

// *****************************************
type friends = string[];
interface IFriends {
  [index: number]: string;
}
const friends: IFriends = ["A", "B", "C", "D"];
