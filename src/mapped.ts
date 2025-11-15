const arrayOfNumbers: number[] = [1, 65, 213, 12];
const arrayOfString: string[] = ["1", "2", "8", "9"];

const arrayOfStringUsingMap: string[] = arrayOfNumbers.map((number) =>
  number.toString()
);
console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

/*
type AreaOfString = {
height:string,
width:string
}
*/

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: boolean }> = {
  height: 565,
  width: true,
};
